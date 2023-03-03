import { AiOutlineFieldTime, AiOutlineKey, AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { useRouter } from "next/router";
import { ButtonLoader } from "../../components/ButtonLoader";
import Head from 'next/head'
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ResetPassword = () => {
    const router = useRouter();
    const { id } = router.query;

    const { auth } = useContext(GlobalContext);
    const { loading, msg, error, handleState, clear, resetPassword } = auth;

    useEffect(() => {
        handleState("id", id);
    }, [id, handleState])

    return <div className="auth">
        <Head>
            <title>SCREEN-VIEW | Reset Password</title>
            <meta name="description" content="SCREEN VIEW ResetPassword" />
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
                <h1 className="welcome">Welcome, Reset Password</h1>

                <form onSubmit={e => e.preventDefault()} className="flex col ResetPassword">


                    {error && <small className="alert-danger">{msg}</small>}
                    {error === false && <small className="alert-success">{msg}</small>}

                    <div className="input-bar flex col">
                        <label>Password</label>
                        <div className="input">
                            <AiOutlineKey />
                            <input placeholder="New Password" onChange={event => handleState("password", event.target.value)} />
                        </div>
                        {/* <small>password field is required</small> */}
                    </div>
                    <div className="actions">
                        <ButtonLoader
                            loading={loading}
                            onClick={() => resetPassword()}
                            value={<div className="value"><AiOutlineFieldTime className="icon" /> Reset</div>}
                        />

                        {error === false &&
                        <>
                        <span className="space-1"></span>
                          <ButtonLoader
                                loading={loading}
                                onClick={() => router.push("/signin")}
                                value={<div className="value"><AiOutlineLogin className="icon" /> Login</div>}
                            />
                        </>
                          
                        }

                    </div>


                    <p className="forgot-pswd" onClick={() => router.push("/signin")}>Remember password?</p>

                    <small className="flex items-center or">
                        <div className="h-line"></div>
                        <div className="space-1"></div>
                        or
                        <div className="space-1"></div>
                        <div className="h-line"></div>
                    </small>
                    <p className="no-account" onClick={() => router.push("/signup")}>Dont have an account? signup</p>

                </form>
            </section>
        </main>
    </div>
}

export default ResetPassword;