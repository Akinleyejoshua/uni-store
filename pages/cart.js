import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ProductList } from '../components/ProductList'
import { HomeHeader } from '../components/HomeHeader';
import { GlobalContext } from '../context/GlobalContext'
import { get, save } from '../helpers'
import { decodeJWT, encodeJWT } from '../services/user'
import { useRouter } from 'next/router'

export default function Carts() {
  const { product: { products } } = useContext(GlobalContext);
  const [cart, setCart] = useState({});


  useEffect(() => {
    if (cart?.items?.length === 0) {
      save("cart", encodeJWT(cart, "24h", 1));
    }
  }, [cart?.items]);

  useEffect(() => {
    setCart(decodeJWT(get("cart")));
  }, [])

  const router = useRouter();

  useEffect(() => {
    const arr = cart?.items?.reduce((a, b) => { return a + (b.price * b.quantity) }, 0);
    setCart(state => ({
      ...state,
      total: arr || 0
    }))
  }, [cart.items])

  return <div className="cart">
    <Head>
      <title>UNI-STORE</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomeHeader />

    <section>
      <h2>Carts</h2>
      <div className='space-1'></div>

      <nav className='flex justify-between'>
        <div className='total'>
          <h2>Sub Total</h2>
          <p>${cart?.total}</p>

        </div>

        <div>
          {cart?.total !== 0 && <div className='flex'>
            <button className='checkout' onClick={() => {
              save("cart", encodeJWT(cart, "24h", 1));
              router.push("/checkout");
            }}>Proceed</button>
            {/* <div className='space-1'></div> */}
          </div>
          }

        </div>
      </nav>

      <div className='space-1'></div>

      {cart?.items?.map((item, i) => {
        return <div className='cart-card flex justify-between items-center' key={i}>
          <div className='flex'>
            <div className='flex'>
              <img src={item.img} />
            </div>
            <div className='space-2'></div>
            <div>
              <p>{item.name}</p>
              {/* <small>{item.description}</small> */}

            </div>
          </div>
          <div className='space-1'></div>

          <div className='flex items-center'>

            <p className='items-center price flex'>${item.price} </p>
            <div className='space-2'></div>

            <small className='quantity'>&times;</small>
            <div className='space-2'></div>

            <p className='items-center quantity flex'>{item.quantity} </p>
            <div className='space-2'></div>
            <p className='items-center total flex'>= ${item.quantity * item.price} </p>

            <div className='space-2'></div>
            <button className='btn cancle red' onClick={event => {
              const filter = cart?.items?.filter(items => items.name !== item.name);

              setCart(state => ({
                ...state,
                items: filter.length === 0 ? [] : filter,
              }));
              
              save("cart", encodeJWT(cart, "24h", 1));

            }}><FaTimes /></button>
            {/* <button className='btn' onClick={event => event.target.parentElement.parentElement.style.display="none"}><FaTimes/></button> */}
            <div className='space-2'></div>
          </div>


        </div>
      })}
    </section>

  </div>

}