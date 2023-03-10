import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { AdminHeader } from "../../components/AdminHeader";
import { SideBar } from "../../components/SideBar";
import { useRouter } from "next/router";
import {
  AiOutlineDollarCircle,
  AiOutlineDropbox,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { formatNumber } from "../../helpers";

const Admin = () => {
  const router = useRouter();
  const {
    order: { orders, getAllOrders },
    product: { products },
  } = useContext(GlobalContext);
  const [sidebar, setSideBar] = useState(false);
  const [state, setState] = useState({
    totalSales: 0,
    netSales: 0,
    orders: 0,
    productSold: 0,
    products: 0,
  });

  useEffect(() => {
    getAllOrders();
  }, [])

  useEffect(() => {
    const orderitems = orders.filter(item => item.status !== "Complete");
    const productitems = products;
    const totalSales = orders.reduce((a, b) => a + b.total, 0);
    const productSold = orders.filter(item => item.status === "Complete")

    setState((state) => ({
      ...state,
      totalSales: totalSales,
      netSales: totalSales,
      orders: orderitems.length,
      products: productitems.length,
      productSold: productSold.length
    }));
  }, [orders, products]);

  return (
    <div className="admin flex">
      <Head>
        <title>UNI-STORE | Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar closeSideBar={() => setSideBar(false)} toggle={sidebar} />

      <div className="main-component">
        <AdminHeader toggleSideBar={() => setSideBar(true)} />
        <main>
          <section className="flex col metrics">
            <div className="metrics-items">
              <div className="item flex justify-between">
                <AiOutlineDollarCircle />
                <div className="flex col justify-between">
                  <h2>Total sales</h2>
                  <p>${formatNumber(state.totalSales)}</p>
                </div>
              </div>
              <div className="item flex justify-between">
                <AiOutlineDollarCircle />
                <div className="flex col justify-between">
                  <h2>Net sales</h2>
                  <p>${formatNumber(state.netSales)}</p>
                </div>
              </div>
              <div className="item flex justify-between">
                <AiOutlineShoppingCart />
                <div className="flex col justify-between">
                  <h2>Orders</h2>
                  <p>{formatNumber(state.orders)}</p>
                </div>
              </div>
              <div className="item flex justify-between">
                <AiOutlineDropbox />
                <div className="flex col justify-between">
                  <h2>Products sold</h2>
                  <p>{formatNumber(state.productSold)}</p>
                </div>
              </div>
              <div className="item flex justify-between">
                <AiOutlineDropbox />
                <div className="flex col justify-between">
                  <h2>Products</h2>
                  <p>{formatNumber(state.products)}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Admin;
