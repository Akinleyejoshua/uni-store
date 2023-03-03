import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { } from "react-icons/ai";
import { } from "react-icons/bs";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { } from "react-icons/fc";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

const TermsAndCondition = () => {
    const [accord, setAccord] = useState({
        toggle: false,
        index: 0,
    });

    const router = useRouter();

    return <div className="termsandcondition flex">
        <Head>
            <title>SCREEN-VIEW | TermsAndCondition</title>
            <meta name="description" content="SCREEN VIEW TermsAndCondition" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main-component docs">
            <main>
                <div className="nav flex justify-between"><h1>Terms & Condition</h1> <button onClick={() => router.push("/")}>Back</button></div>
                <span className="space-1"></span>
                
            </main>
        </div>

    </div>
}

export default TermsAndCondition;