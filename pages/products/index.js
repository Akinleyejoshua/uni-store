import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList'
import { GlobalContext } from '../../context/GlobalContext';
import { FaCartPlus } from "react-icons/fa";
import { useRouter } from 'next/router';
import { decodeJWT, encodeJWT } from '../../services/user';
import { get, save } from '../../helpers';
import { HomeHeader } from '../../components/HomeHeader';
import { SearchBar } from '../../components/SearchBar';

export default function Products() {
    const { product: { products } } = useContext(GlobalContext);
    const router = useRouter();

    const [cart, setCart] = useState({
        items: [],
        total: 0
    });
    const addToCart = (data) => {
        setCart(state => ({
            ...state, items: [...state.items, data],
            total: cart?.items?.reduce((a, b) => { return a + b.price }, 0)
        }));
    }

    useEffect(() => {
        const decode = get("cart");
        if (decode !== "null" || decode !== null) {
//             setCart(decodeJWT(decode));
        }
        // console.log(decodeJWT(get("cart")));
    }, []);


    useEffect(() => {
        if (cart?.items?.length !== 0) {
            save("cart", encodeJWT(cart, "24h", 1));
        }
    }, [cart]);

    const [tab, setTab] = useState(1);

    return <div className="products">
        <Head>
            <title>UNI-STORE</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <HomeHeader />

        <section className='flex justify-between nav'>
            <div className='nav-links'>
                <button onClick={() => setTab(1)}>Books</button>
                <div className='space-1'></div>
                <button onClick={() => setTab(2)}>Cloths</button>
                <div className='space-1'></div>
                <button onClick={() => setTab(3)}>Shoes</button>
                <div className='space-1'></div>
                <button onClick={() => setTab(4)}>Other</button>
            </div>
            <div className='flex '>
                <SearchBar />
                <div className='space-1'></div>
                <button onClick={() => router.push("/cart")} className='cart'><FaCartPlus />
                    <div className='space-1'></div>
                    <h3>{cart?.items?.length}</h3>
                </button>
            </div>

        </section>
        <div className='space-1'></div>

        <section className={`${tab === 1 ? "" : "invisible"}`}>
            <h2>Books</h2>
            <div className='space-1'></div>
            <ProductList items={products?.filter(item => item.category == "Book")} addToCart={(data) => addToCart(data)} />
        </section>
        <section className={`${tab === 2 ? "" : "invisible"}`}>
            <h2>Cloths</h2>
            <div className='space-1'></div>
            <ProductList items={products?.filter(item => item.category == "Cloth")} addToCart={(data) => addToCart(data)} />
        </section>
        <section className={`${tab === 3 ? "" : "invisible"}`}>
            <h2>Shoes</h2>
            <div className='space-1'></div>
            <ProductList items={products?.filter(item => item.category == "Shoe")} addToCart={(data) => addToCart(data)} />
        </section>
        <section className={`${tab === 4 ? "" : "invisible"}`}>
            <h2>Other</h2>
            <div className='space-1'></div>
            <ProductList items={products?.filter(item => item.category == "Other" || "")} addToCart={(data) => addToCart(data)} />
        </section>
    </div>

}
