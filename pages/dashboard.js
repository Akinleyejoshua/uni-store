import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineHeart, AiOutlineNotification, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FcVideoFile } from "react-icons/fc";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { SkelentalLoader } from "../components/SkelentalLoader";
import { GlobalContext } from "../context/GlobalContext";
import { formatNumber } from "../helpers";

const Dashboard = () => {
    const [sidebar, setSideBar] = useState(false);
    const router = useRouter();

    const { user: { loading, totalAudience, totalViews, totalStream, totalNotification, upvotes, retrieveUserData } } = useContext(GlobalContext);

    const metrics = [
        {
            icon: <AiOutlineUsergroupAdd />,
            heading: "Total Audience",
            value: totalAudience,
            link: "/library/audience",
        },
        {
            icon: <AiOutlineEye />,
            heading: "Total View",
            value: totalViews,
        },
        {
            icon: <FcVideoFile />,
            heading: "Total Video Stream",
            value: totalStream,
            link: "/library/videos",
        },
        {
            icon: <AiOutlineNotification />,
            heading: "Notification",
            value: totalNotification,
            link: "/notifications",
        },
        {
            icon: <AiOutlineHeart />,
            heading: "Total Upvote",
            value: upvotes,
        },

    ]

    return <div className="dashboard flex">
        <Head>
            <title>SCREEN-VIEW | Dashboard</title>
            <meta name="description" content="SCREEN VIEW Dashboard" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideBar toggle={sidebar} closeSideBar={() => setSideBar(false)} />
        <div className="main-component">
            <Header toggleSideBar={() => setSideBar(true)} />
            <main>
                {loading ? <SkelentalLoader type="dashboard" /> :
                    <section className="metrics">
                        <div className="items-dashboard">
                            {metrics.map((item, i) => {
                                return <div className="item flex justify-between relative" key={i}>
                                    <div className="flex col justify-between">
                                        {item?.icon}
                                        <p>{item?.heading}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <h1>{formatNumber(item?.value)}</h1>
                                        {item.link && <button onClick={() => router.push(item?.link)}>view</button>}

                                    </div>
                                </div>
                            })}
                        </div>
                        <span className="space-1"></span>
                        <button onClick={() => retrieveUserData()}>ONE-CLICK REFRESH</button>
                    </section>
                }

            </main>
        </div>

    </div>
}

export default Dashboard;