import { AiOutlineKey, AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { FaAt, FaEnvelope, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import { ButtonLoader } from "../components/ButtonLoader";
import Head from 'next/head'
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { get } from "../helpers";

const Signin = () => {
    const router = useRouter();
    const [forgotPswd, setForgotPswd] = useState(false);

    const { auth: authState } = useContext(GlobalContext);
    const { loading, msg, error, handleState, validateSignin, clear, auth, forgotPassword } = authState;

    const redirect = () => {
        if (clear()) {
            router.push(get("prev-url") === null ? "/home" : get("prev-url"));
            // clear();
        }
    }

    useEffect(() => {
        redirect();
    }, [router])

    return <div className="auth">
        <Head>
            <title>SCREEN-VIEW | SIGNIN</title>
            <meta name="description" content="SCREEN VIEW SIGNIN" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <nav>
                <div className="nav-brand" onClick={() => router.push("/")}>
                    SCREEN-VIEW
                </div>
                <button onClick={() => router.push("/signup")}><AiOutlineUserAdd className="icon" /> <p>Signup</p></button>
            </nav>
        </header>

        <main>
            <section className="form flex col">
                <h1 className="welcome">Welcome Back • Login</h1>

                <form onSubmit={e => e.preventDefault()} className="flex col signin">

                    {error && <small className="alert-danger">{msg}</small>}
                    {error === false && <small className="alert-success">{msg}</small>}

                    <div className="input-bar flex col">
                        <label>Email</label>
                        <div className="input">
                            <FaAt />
                            <input placeholder="Email address" onChange={event => handleState("email", event.target.value)} />
                        </div>
                        {/* <small>email field is required</small> */}
                    </div>

                    {!forgotPswd && <div className="input-bar flex col">
                        <label>Password</label>
                        <div className="input">
                            <AiOutlineKey />
                            <input placeholder="Password" type="password" onChange={event => handleState("password", event.target.value)} />
                        </div>
                        {/* <small>password field is required</small> */}
                    </div>}
                    {
                        forgotPswd ?
                            <>
                                {error === false ?
                                    <ButtonLoader
                                        loading={loading}
                                        onClick={() => { window.open("https://mail.google.com/" + authState.email) }}
                                        value={<div className="value"><FaEnvelope className="icon" /> Open Mail</div>}
                                    /> :
                                    <ButtonLoader
                                        loading={loading}
                                        onClick={() => forgotPassword()}
                                        value={<div className="value"><AiOutlineLogin className="icon" /> Continue</div>}
                                    />
                                }
                            </>
                            :

                            <>
                                {error === false ?
                                    <ButtonLoader loading={loading}
                                        onClick={() => redirect()}
                                        value={<div className="value"><AiOutlineLogin className="icon" /> Continue</div>}
                                    /> :
                                    <ButtonLoader loading={loading}
                                        onClick={() => validateSignin()}
                                        value={<div className="value"><AiOutlineLogin className="icon" /> Login</div>}
                                    />

                                }
                            </>

                    }

                    {!forgotPswd ?
                        <p className="forgot-pswd" onClick={() => setForgotPswd(true)}>Forgot password?</p>
                        :
                        <p className="forgot-pswd" onClick={() => setForgotPswd(false)}>Remember password?</p>
                    }

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
                    <p className="no-account" onClick={() => router.push("/signup")}>Dont have an account? signup</p>

                </form>
            </section>
        </main>
    </div>
}

export default Signin;