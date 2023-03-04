import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineFileImage, AiOutlineShareAlt, AiOutlineVideoCamera } from "react-icons/ai";
import { BsCloudPlus } from "react-icons/bs";
import { FcVideoCall, FcWebcam } from "react-icons/fc";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

const Home = () => {
    const router = useRouter();

    const [state, setState] = useState({

        features: [
            {
                icon: <AiOutlineVideoCamera />,
                heading: "Video Screen Stream",
                content: "Get started with Video Streaming from your Screen and Camera, Start using Screen Streaming on Your PC, share your output and save them to your own personal cloud storage",
                button: <button onClick={() => router.push("/stream")}>Get Started</button>
            },
            {
                icon: <FcVideoCall />,
                heading: "Live Stream",
                content: "Get started with Screen Video Streaming from your Screen and Camera in a Live Session with your Audience in real time.",
                button: <button onClick={() => router.push("/live-stream")}>Get Started</button>
            },
            // {
            //     icon: <FcWebcam />,
            //     heading: "Take Photos & Screenshots",
            //     content: "Get started with Taking Online Screenshots and Photos while Streaming",
            //     button: <button onClick={() => router.push("/")}>Get Started</button>
            // },
            // {
            //     icon: <BsCloudPlus />,
            //     heading: "Cloud Storage",
            //     content: "Get started with Storing your data on your own personal cloud storage",
            //     button: <button onClick={() => router.push("/")}>Get Started</button>
            // },
            {
                icon: <AiOutlineFileImage />,
                heading: "Manage Documents",
                content: "Get started with Managing your Stored Video Streams, Access your documents, share them to your target audience, view your audience and connect with them",
                button: <button onClick={() => router.push("/library")}>Get Started</button>
            },
            // {
            //     icon: <AiOutlineShareAlt />,
            //     heading: "Share Documents",
            //     content: "Get started with Sharing your Streamed Document round the world to your targeted Audience",
            //     button: <button onClick={() => router.push("/")}>Get Started</button>
            // }
        ]
    })

    const [sidebar, setSideBar] = useState(false);

    return <div className="home flex">
        <Head>
            <title>SCREEN-VIEW | Home</title>
            <meta name="description" content="SCREEN VIEW HOME" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideBar toggle={sidebar} closeSideBar={() => setSideBar(false)} />
        <div className="main-component">
            <Header toggleSideBar={() => setSideBar(true)} />
            <main>
                <h1>Welcome Back!</h1>
                <p>Features you can get started with</p>

                

            </main>
        </div>

    </div>
}

export default Home;
