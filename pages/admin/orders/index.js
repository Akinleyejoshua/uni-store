import Head from "next/head"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { ButtonLoader } from "../../../components/ButtonLoader";
import { documentToBlob } from "../../../helpers/fileReader";
import { AdminHeader } from "../../../components/AdminHeader";
import { SideBar } from "../../../components/SideBar";
import { useRouter } from "next/router";
import Image from "next/image";
import { deleteOrder } from "../../../services/order";

const Order = () => {
    const router = useRouter();
    const { order: {
        handleState,
        msg,
        loading,
        orders,
        getAllOrders
    } } = useContext(GlobalContext);

    // console.log(Orders);

    useEffect(() => {
        getAllOrders();
    }, [])
    const [sidebar, setSideBar] = useState(false);

    return <div className="add-product flex">
        <Head>
            <title>UNI-STORE | Add Order</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideBar closeSideBar={() => setSideBar(false)} toggle={sidebar} />


        <div className="main-component">
            <AdminHeader toggleSideBar={() => setSideBar(true)} />
            <main>
                {/* <section className="flex col">
                    <div>
                        <button onClick={() => router.push("/admin/orders/add-order")} className="btn">Add New</button>

                    </div>
                </section> */}
                <section>
                    {/* <h1>Orders</h1> */}
                    <div className="flex col">
                        {orders?.map((items, i) => {
                            return <div className="product-bar col" key={i}>

                                <div className="fle">
                                    <p><b>{items.fname} {items.lname}</b> | Order number - <b>{items.orderNumber}</b></p>
                                    <div className="space-2"></div>
                                    <small>Phone - <b>{items.phone}</b></small>
                                    <div className="space-2"></div>

                                    <div className="flex">
                                        <p className="flex blue"><b>${items.total}</b></p>
                                        <div className="space-2"></div>
                                        <p>email - <b>{items.email}</b></p>
                                    </div>
                                    <div className="space-2"></div>

                                    <div className="flex col">
                                        <p>Shipping Address - <b>{items.country} {items.region} {items.city} {items.streetAddress}</b></p>
                                    </div>

                                    <div className="space-2"></div>
                                    <div className="flex">
                                        <button onClick={() => router.push(`/admin/orders/edit-order/${items._id}`)}>Edit</button>
                                        <div className="space-2"></div>
                                        <button className="red" onClick={(event) => {
                                            deleteOrder({ id: items?._id }).then(data => {
                                                event.target.innerHTML = "Deleted!"
                                            })
                                        }}>Delete</button>
                                    </div>

                                </div>

                            </div>
                        })}
                    </div>

                </section>
            </main>
        </div>


    </div>
}

export default Order;