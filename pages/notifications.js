import Head from "next/head";
import { useState } from "react";
import { } from "react-icons/ai";
import { } from "react-icons/bs";
import { } from "react-icons/fc";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

const Notifications = () => {
    const [sidebar, setSideBar] = useState(false);

    return <div className="notifications flex">
        <Head>
            <title>SCREEN-VIEW | Notifications</title>
            <meta name="description" content="SCREEN VIEW Notifications" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideBar toggle={sidebar} closeSideBar={() => setSideBar(false)} />
        <div className="main-component">
            <Header toggleSideBar={() => setSideBar(true)} />
            <main>

            </main>
        </div>

    </div>
}

export default Notifications;