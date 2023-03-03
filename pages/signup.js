import { AiOutlineKey, AiOutlineLogin, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { FaAt, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import { ButtonLoader } from "../components/ButtonLoader";
import Head from 'next/head';
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { get } from "../helpers";

const Signup = () => {
    const router = useRouter();

    const { auth: authState } = useContext(GlobalContext);
    const { loading, msg, error, handleState, validateCreateAccount, clear, auth } = authState;

    // useEffect(() => {
    //     if (auth) {
    //         router.push(get("prev-url") === null ? "/home" : get("prev-url"));
    //         clear();

    //     }
    // }, [auth, router, clear])


    return <div className="auth">
        <Head>
            <title>SCREEN-VIEW | SIGNUP</title>
            <meta name="description" content="SCREEN VIEW SIGNUP" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
            <nav>
                <div className="nav-brand" onClick={() => router.push("/")}> SCREEN-VIEW </div>
                <button onClick={() => router.push("/signin")}><AiOutlineLogin className="icon" /> <p>Signin</p></button>
            </nav>
        </header>

        <main>
            <section className="form flex col">
                <h1 className="welcome">Get Started • Signup</h1>

                <form onSubmit={e => e.preventDefault()} className="flex col signup">

                    {error && <small className="alert-danger">{msg}</small>}
                    {error === false && <small className="alert-success">{msg}</small>}

                    <div className="auth-items">

                        <div className="input-bar flex col">
                            <label>First name</label>
                            <div className="input">
                                <AiOutlineUser />
                                <input placeholder="First Name" onChange={(event) => handleState("fname", event.target.value)} />
                            </div>
                            {/* <small>email field is required</small> */}
                        </div>

                        <div className="input-bar flex col">
                            <label>Last name</label>
                            <div className="input">
                                <AiOutlineUser />
                                <input placeholder="Last Name" onChange={(event) => handleState("lname", event.target.value)} />
                            </div>
                            {/* <small>email field is required</small> */}
                        </div>
                        <div className="input-bar flex col">
                            <label>Email</label>
                            <div className="input">
                                <FaAt />
                                <input placeholder="Email address" onChange={(event) => handleState("email", event.target.value)} />
                            </div>
                            {/* <small>email field is required</small> */}
                        </div>
                        <div className="input-bar flex col">
                            <label>Password</label>
                            <div className="input">
                                <AiOutlineKey />
                                <input placeholder="Password" type="password" onChange={(event) => handleState("password", event.target.value)} />
                            </div>
                            {/* <small>password field is required</small> */}
                        </div>
                    </div>

                    <div className="actions">
                        <ButtonLoader loading={loading} onClick={() => validateCreateAccount()} value={<div className="value"><AiOutlineUserAdd className="icon" /> Create account</div>} />
                        {error === false &&
                            <>
                                <span className="space-1"></span>
                                <ButtonLoader loading={loading} onClick={() => {
                                    clear();
                                    router.push("/signin");
                                }} value={<div className="value"><AiOutlineLogin className="icon" /> Login</div>} />
                            </>
                        }
                    </div>
                    <p className="terms red-thick" onClick={() => router.push("/terms-and-condition")}>By creating an account on SCREEN-VIEW you thereby accept our terms & condition</p>

                    <small className="flex items-center or">
                        <div className="h-line"></div>
                        <div className="space-1"></div>
                        or
                        <div className="space-1"></div>
                        <div className="h-line"></div>
                    </small>
                    <div className="account-integrate">
                        <FaGoogle className="icon" />
                    </div>
                    <p className="no-account" onClick={() => router.push("/signin")}>Already have an account? signin</p>

                </form>
            </section>
        </main>
    </div>
}

export default Signup;