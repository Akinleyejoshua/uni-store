import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { ProductList } from '../components/ProductList'
import { GlobalContext } from '../context/GlobalContext';
import { FaCartPlus } from "react-icons/fa";
import { useRouter } from 'next/router';
import { decodeJWT, encodeJWT } from '../services/user';
import { get, save } from '../helpers';
import { HomeHeader } from '../components/HomeHeader';
import { PaystackButton } from 'react-paystack';

export default function Checkout() {
    const { order: { handleState, msg, totalExchange, email, createOrder,
        fname,
        lname,
        phone,
        country,
        region,
        city,
        street,
        error,
        loading,
        orderNumber,
        products

    } } = useContext(GlobalContext);
    const router = useRouter();

    const [cart, setCart] = useState({
        items: [],
        total: 0 
    });

    const [tab, setTab] = useState(1);

    useEffect(() => {
        const decode = decodeJWT(get("cart"))
        setCart(decode);
        handleState("products", decode);
    }, [])

    useEffect(() => {
        try {
            fetch(`https://api.exchangerate-api.com/v4/latest/USD`).then(res => res.json())
                .then(res => {
                    const new_rate = res.rates["NGN"]
                    handleState("totalExchange", (cart.total * new_rate) * 100)
                }).catch(err => { })
        } catch (err) {

        }

    },)

    const config = {
        reference: (new Date()).getTime(),
        email: email,
        amount: totalExchange,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PK,
    };

    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        // console.log(reference);

        createOrder(reference.reference).then(() => {
            handleState("orderNumber", reference.reference)
            setTab(2);
            console.log(1)
        })
    };

    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        // console.log('closed')
        handleState("msg", "Oops, an error occured")
        handleState("error", true)
    }

    const componentProps = {
        ...config,
        text: 'Checkout',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    const [procceded, setProcceded] = useState(false);

    const checkout = () => {
        if ([fname,
            lname,
            email,
            phone,
            country,
            region,
            city,
            street,
        ].includes("")) {
            handleState("msg", "Fill the important fields")
            handleState("error", true)

        } else {
            setProcceded(true)
            handleState("msg", "")
        }
    }

    return <div className="cart">
        <Head>
            <title>UNI-STORE</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <HomeHeader />

        <section className='flex justify-between'>
            <div className='total'>
                <h1>Sub total</h1>
                <p>${cart?.total || 0}</p>
            </div>
            <div>
                <button className='btn cart' onClick={() => router.push("/cart")}>

                    <FaCartPlus className="cart" />

                </button>
            </div>
        </section>
        <div className='space-1'></div>
        {tab === 1 ? <section className='flex col'>
            <div className='items-1'>

                <div className='input-bar'>
                    <small>First Name</small>
                    <div className='input'>
                        <input placeholder='First Name' onChange={event => handleState("fname", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>Last Name</small>
                    <div className='input'>
                        <input placeholder='Last Name' onChange={event => handleState("lname", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>Email</small>
                    <div className='input'>
                        <input placeholder='Email Name' onChange={event => handleState("email", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>Phone</small>
                    <div className='input'>
                        <input placeholder='Phone' type={"number"} onChange={event => handleState("phone", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>Company name (Optional)</small>
                    <div className='input'>
                        <input placeholder='Company Name' onChange={event => handleState("companyName", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>Country</small>
                    <div className='input'>
                        <input placeholder='Country Name' onChange={event => handleState("country", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>State</small>
                    <div className='input'>
                        <input placeholder='State Name' onChange={event => handleState("region", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>City</small>
                    <div className='input'>
                        <input placeholder='City Name' onChange={event => handleState("city", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>Street Address</small>
                    <div className='input'>
                        <input placeholder='Street Name' onChange={event => handleState("street", event.target.value)} />
                    </div>
                </div>
                <div className='input-bar'>
                    <small>Apartment Suit (Optional)</small>
                    <div className='input'>
                        <input placeholder='Apartment Name' onChange={event => handleState("apartment", event.target.value)} />
                    </div>
                </div>
            </div>
            <div className='space-1'></div>
            <div className={`${error ? "red" : "green"}`}>{msg}</div>
            <div className='space-1'></div>
            <div>
                {procceded ? <PaystackButton {...componentProps} className="checkout" /> :
                    <button className='checkout' onClick={() => checkout()}>Proceed</button>
                }
            </div>
        </section> : <section className='review'>
            <div className='flex'>
                <p>Order Number : <b>{orderNumber}</b></p>
                <div className='space-2'></div>
                <p>Full name : <b>{fname} {lname}</b> </p>
            </div>

            <div className='space-2'></div>
            <p>Billing Address: <b>{country} {region} {city} {street}</b> </p>
            <div className='space-2'></div>

            <p>Shipping Address: <b>{country} {region} {city} {street}</b> </p>
            <div className='space-2'></div>
            <div className='flex'>
                <p>Email: <b>{email}</b> </p>
                <div className='space-2'></div>
                <p>Mobile Number: <b>{phone}</b> </p>
            </div>

            <div className='space-2'></div>
            <p>Products: {products?.items?.map((item, i) => <b key={i}>{item.name}</b>)}</p>
            <div className='space-2'></div>
            <button className='' onClick={() => print()}>Print</button>
        </section>}

    </div>

}
