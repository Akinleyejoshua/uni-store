import Head from "next/head";
import { useContext, useState } from "react";
import {
    AiOutlineContacts,
    AiOutlineEdit,
    AiOutlineKey,
    AiOutlineMail,
    AiOutlineSave,
    AiOutlineUser,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FcBusinessContact } from "react-icons/fc";
import { Avater } from "../components/Avater";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import {
    FaDiscord,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaSlack,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import { SkelentalLoader } from "../components/SkelentalLoader";

const Profile = () => {
    const [sidebar, setSideBar] = useState(false);
    const [tab, setTab] = useState(0);
    const [onEdit, setOnEdit] = useState(false);

    const {
        user: {
            loading,
            fname,
            lname,
            email,
            linkedin,
            facebook,
            twitter,
            website,
            youtube,
            discord,
            slack,
            businessName,
            instagram,
            username,
            updateUserData,
            error,
            msg,
            businessLocation,
            handleStateData,
            passwordError,
            
        },
    } = useContext(GlobalContext);

    return (
        <div className="profile flex">
            <Head>
                <title>SCREEN-VIEW | Profile</title>
                <meta name="description" content="SCREEN VIEW Profile" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SideBar toggle={sidebar} closeSideBar={() => setSideBar(false)} />
            <div className="main-component">
                <Header toggleSideBar={() => setSideBar(true)} />
                <main>
                    <section className="nav">
                        <nav>
                            <button
                                className={tab === 0 ? "active" : ""}
                                onClick={() => setTab(0)}
                            >
                                <AiOutlineUser />
                                <span className="space-1"></span> <p>Basic Info</p>
                            </button>
                            <button
                                className={tab === 1 ? "active" : ""}
                                onClick={() => setTab(1)}
                            >
                                <AiOutlineContacts />
                                <span className="space-1"></span> <p>Handles</p>
                            </button>
                            <button
                                className={tab === 2 ? "active" : ""}
                                onClick={() => setTab(2)}
                            >
                                <FcBusinessContact />
                                <span className="space-1"></span> <p>Business</p>
                            </button>
                        </nav>


                    </section>

                    <section className="tabs">

                        <div className={tab === 0 ? "info tab" : "info invisible"}>
                            <div className="fixed-btns">
                                <button
                                    className={onEdit === true ? "active" : ""}
                                    onClick={() => setOnEdit(!onEdit)}
                                >
                                    <AiOutlineEdit /> <span className="space-1"></span>{" "}
                                    <p>Edit</p>{" "}
                                </button>
                            </div>
                            <h1>Info</h1>
                            <span className="space-2"></span>
                            <div className="img relative">
                                {loading ? (
                                    <SkelentalLoader type={"avater"} />
                                ) : (
                                    <>
                                        <Avater name={`${fname}_${lname}`} />
                                        <input
                                            onClick={(event) =>
                                                handleStateData("", event.target.value)
                                            }
                                            type="file"
                                            className="input-invisible"
                                        />
                                    </>
                                )}
                            </div>
                            <span className="space-2"></span>

                            {loading ? (
                                <SkelentalLoader type={"text"} />
                            ) : (
                                <>
                                    <div className="input-items">
                                        <div className="input-bar flex col">
                                            <label>First Name</label>
                                            <div className="input">
                                                <AiOutlineUser />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("fname", event.target.value)
                                                        }
                                                        placeholder="First name"
                                                        defaultValue={fname}
                                                    />
                                                ) : (
                                                    <p>{fname}</p>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Last Name</label>
                                            <div className="input">
                                                <AiOutlineUser />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("lname", event.target.value)
                                                        }
                                                        placeholder="Last name"
                                                        defaultValue={lname}
                                                    />
                                                ) : (
                                                    <p>{lname}</p>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Email</label>
                                            <div className="input">
                                                <AiOutlineMail />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("email", event.target.value)
                                                        }
                                                        placeholder="Email"
                                                        defaultValue={email}
                                                    />
                                                ) : (
                                                    <p>{email}</p>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Username</label>
                                            <div className="input">
                                                <AiOutlineUser />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("username", event.target.value)
                                                        }
                                                        placeholder="Username"
                                                        defaultValue={username}
                                                    />
                                                ) : (
                                                    <p>{username}</p>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Password</label>

                                            <div className="input">
                                                <AiOutlineKey />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("password", event.target.value)
                                                        }
                                                        placeholder="Password"
                                                    />
                                                ) : (
                                                    <p>********</p>
                                                )}
                                            </div>

                                            {passwordError !== "" && <small className="red">{passwordError}</small>}
                                        </div>
                                    </div>

                                    {onEdit && (
                                        <button onClick={() => updateUserData()}>
                                            <AiOutlineSave />
                                            <span className="space-2"></span>
                                            <p>Save</p>
                                        </button>
                                    )}
                                </>
                            )}
                        </div>

                        <div className={tab === 1 ? "handle tab" : "handle invisible"}>
                            <div className="fixed-btns">
                                <button
                                    className={onEdit === true ? "active" : ""}
                                    onClick={() => setOnEdit(!onEdit)}
                                >
                                    <AiOutlineEdit /> <span className="space-1"></span>{" "}
                                    <p>Edit</p>{" "}
                                </button>
                            </div>
                            <h1>Social </h1>
                            <span className="space-2"></span>

                            {loading ? (
                                <SkelentalLoader type={"text"} />
                            ) : (
                                <>
                                    <div className="input-items">
                                        <div className="input-bar flex col">
                                            <label>Linkedin</label>
                                            <div className="input">
                                                <FaLinkedin />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("linkedin", event.target.value)
                                                        }
                                                        placeholder="Your Username"
                                                        defaultValue={linkedin}
                                                    />
                                                ) : (
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={"https://linkedin.com/?"}
                                                    >
                                                        @{linkedin}
                                                    </a>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Twitter</label>
                                            <div className="input">
                                                <FaTwitter />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("twitter", event.target.value)
                                                        }
                                                        placeholder="Your Username"
                                                        defaultValue={twitter}
                                                    />
                                                ) : (
                                                    <a rel="noreferrer"
                                                        target="_blank"
                                                        href={"https://twitter.com/"}>
                                                        @{twitter}
                                                    </a>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Email</label>
                                            <div className="input">
                                                <AiOutlineMail />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("email", event.target.value)
                                                        }
                                                        placeholder="Email"
                                                        defaultValue={email}
                                                    />
                                                ) : (
                                                    <a target="_blank" href={"https://"} rel="noreferrer">
                                                        @{email}
                                                    </a>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>YouTube</label>
                                            <div className="input">
                                                <FaYoutube />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("youtube", event.target.value)
                                                        }
                                                        placeholder="YouTube Channel"
                                                        defaultValue={youtube}
                                                    />
                                                ) : (
                                                    <a href={"https://"} target="_blank" rel="noreferrer">
                                                        @{youtube}
                                                    </a>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Discord</label>
                                            <div className="input">
                                                <FaDiscord />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("discord", event.target.value)
                                                        }
                                                        placeholder="Discord Channel or ID"
                                                        defaultValue={discord}
                                                    />
                                                ) : (
                                                    <a href={"https://"} target="_blank" rel="noreferrer">
                                                        @{discord}
                                                    </a>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Slack</label>
                                            <div className="input">
                                                <FaSlack />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("slack", event.target.value)
                                                        }
                                                        placeholder="Slack Channel"
                                                        defaultValue={slack}
                                                    />
                                                ) : (
                                                    <a href={"https://"} target="_blank" rel="noreferrer">
                                                        @{slack}
                                                    </a>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Facebook</label>
                                            <div className="input">
                                                <FaFacebook />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("facebook", event.target.value)
                                                        }
                                                        placeholder="Facebook ID"
                                                        defaultValue={facebook}
                                                    />
                                                ) : (
                                                    <a href={"https://"} target="_blank" rel="noreferrer">
                                                        @{facebook}
                                                    </a>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Instagram</label>
                                            <div className="input">
                                                <FaInstagram />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("instagram", event.target.value)
                                                        }
                                                        placeholder="Instagram ID"
                                                        defaultValue={instagram}
                                                    />
                                                ) : (
                                                    <a href={"https://"} target="_blank" rel="noreferrer">
                                                        @{instagram}
                                                    </a>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                    </div>

                                    {onEdit && (
                                        <button onClick={() => updateUserData()}>
                                            <AiOutlineSave />
                                            <span className="space-2"></span>
                                            <p>Save</p>
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                        <div className={tab === 2 ? "business tab" : "business invisible"}>
                            <div className="fixed-btns">
                                <button
                                    className={onEdit === true ? "active" : ""}
                                    onClick={() => setOnEdit(!onEdit)}
                                >
                                    <AiOutlineEdit /> <span className="space-1"></span>{" "}
                                    <p>Edit</p>{" "}
                                </button>
                            </div>
                            <h1>Business</h1>
                            <span className="space-2"></span>

                            {loading ? (
                                <SkelentalLoader type={"text"} />
                            ) : (
                                <>
                                    <div className="input-items">
                                        <div className="input-bar flex col">
                                            <label>Company name</label>
                                            <div className="input">
                                                <AiOutlineUser />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("businessName", event.target.value)
                                                        }
                                                        placeholder="Company name"
                                                        defaultValue={businessName}
                                                    />
                                                ) : (
                                                    <p>{businessName}</p>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Company Location</label>
                                            <div className="input">
                                                <FaLocationArrow />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData(
                                                                "businessLocation",
                                                                event.target.value
                                                            )
                                                        }
                                                        placeholder="Address"
                                                        defaultValue={businessLocation}
                                                    />
                                                ) : (
                                                    <p>{businessLocation}</p>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                        <div className="input-bar flex col">
                                            <label>Company Website</label>
                                            <div className="input">
                                                <BsGlobe />
                                                {onEdit ? (
                                                    <input
                                                        onChange={(event) =>
                                                            handleStateData("website", event.target.value)
                                                        }
                                                        placeholder="Website"
                                                        defaultValue={website}
                                                    />
                                                ) : (
                                                    <p>{website}</p>
                                                )}
                                            </div>
                                            {/* <small>email field is required</small> */}
                                        </div>
                                    </div>

                                    {onEdit && (
                                        <button onClick={() => updateUserData()}>
                                            <AiOutlineSave />
                                            <span className="space-2"></span>
                                            <p>Save</p>
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </section>
                        <div className="space-1"></div>
                    <section>
                        {error && <p className="alert-danger">{msg}</p>}
                        {error === false && <p className="alert-success">{msg}</p>}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Profile;
