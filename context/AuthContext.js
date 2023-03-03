import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { get, save } from "../helpers";
import {
  signup,
  signin as signinUser,
  forgotPassword as forgotUserPassword,
  resetPassword as resetUserPassword,
  logoutUser,
} from "../services/auth";
import { authenticate } from "../utils/authenticate";

export const AuthContext = () => {

  const [state, setState] = useState({
    fname: "",
    id: "",
    lname: "",
    email: "",
    password: "",
    error: null,
    msg: "",
    loading: false,
    googleAuth: false,
    auth: false,
    token: get("token"),
  });

  const {
    fname,
    lname,
    id,
    email,
    password,
    loading,
    error,
    msg,
    googleAuth,
    auth,
    token,
  } = state;

  const router = useRouter();

  const handleState = (name, val) => {
    setState((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const protectedRoutes = async () => {
    const routes = [
      "/home",
      "/dashboard",
      "/stream",
      "/live-stream",
      "/library",
      "/library/videos",
      "/library/audience",
      "/profile",
      "/subscription",
    ];

    const auth = authenticate();

    function redirect(auth) {
      if (!auth) {
        router.push("/signin");
      } else {
        router.push(get("prev-url") === null ? "/home" : get("prev-url"));
      }
    }

    if (routes.includes(router.pathname)) {
      save("prev-url", router.pathname);
      redirect(auth);
    } else if (["/signin", "signup"].includes(router.pathname)) {
      redirect(auth);
    }
  }

  useEffect(() => {
    protectedRoutes();
  }, [token])

  const dataOk = (data) => {
    handleState("error", false);
    handleState("msg", data?.validation);
    handleState("loading", false);
  }

  const dataErr = (data) => {
    handleState("error", true);
    handleState("msg", data?.validation);
    handleState("loading", false);
  }

  const logout = () => {
    logoutUser().then(() => {
      router.push("/signin");
    });
  }

  const createAccount = () => {
    handleState("loading", true);
    handleState("error", null);
    handleState("msg", "");
    signup({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      googleAuth: googleAuth,
    })
      .then((res) => {
        const data = res.data;
        if (data.error) {
          dataErr(data);
        } else {
          dataOk(data);
        }
      })
      .catch((err) => {
        handleState("error", true);
        handleState("msg", "Poor internet connection");
        handleState("loading", false);
      });
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validateCreateAccount = () => {
    if ([fname, lname, email, password].includes("")) {
      handleState("error", true);
      handleState("msg", "All fields are required");
    } else if (!email.match(emailRegex)) {
      handleState("error", true);
      handleState("msg", "Invalid Email Address");
    } else if (password.length < 4) {
      handleState("error", true);
      handleState("msg", "Password must be atleast 4 charaters");
    } else {
      createAccount();
    }
  };

  const signin = () => {
    handleState("loading", true);
    handleState("error", null);
    handleState("msg", "");
    signinUser({
      email: email,
      password: password,
      googleAuth: googleAuth,
    })
      .then((res) => {
        const data = res.data;
        if (data.error) {
          dataErr(data);
        } else {
          dataOk(data);
          handleState("auth", true);
          handleState("token", data.token);
          save("token", data.token);
          save("user-token", data.token);
          save("auth", true);
        }
      })
      .catch((err) => {
        handleState("error", true);
        handleState("msg", "Poor internet connection");
        handleState("loading", false);
      });
  };

  const validateSignin = () => {
    signin();
  };

  const resetPassword = () => {
    handleState("loading", true);
    resetUserPassword(id, password).then((res) => {
      const data = res.data;
      if (data.error) {
        dataErr(data);
      } else {
        dataOk(data);
      }
    })
      .catch((err) => {
        handleState("error", true);
        handleState("msg", "Poor internet connection");
        handleState("loading", false);
      });
  };

  const forgotPassword = () => {
    handleState("loading", true);
    forgotUserPassword({
      email: email,
    }).then((res) => {
      const data = res.data;
      if (data.error) {
        dataErr(data);
      } else {
        dataOk(data);
      }
    })
      .catch((err) => {
        handleState("error", true);
        handleState("msg", "Poor internet connection");
        handleState("loading", false);
      });
  };

  const clear = () => {
    setState((prevState) => ({
      ...prevState,
      fname: "",
      id: "",
      lname: "",
      email: "",
      password: "",
      error: null,
      msg: "",
      loading: false,
      googleAuth: false,
      auth: false,
    }));
  };

  return {
    fname,
    lname,
    id,
    email,
    password,
    loading,
    error,
    msg,
    auth,
    handleState,
    googleAuth,
    validateCreateAccount,
    validateSignin,
    clear,
    resetPassword,
    forgotPassword,
    logout
  };
};
