import { useRouter } from "next/router";
import {
    useEffect,
    useState
} from "react"
import {
    get, save, splitTime
} from "../helpers";
import {
    decodeJWT, encodeJWT, getCustomers, getUserData, updateUserData as userUpdate
} from "../services/user";

export const UserContext = () => {
    const router = useRouter();
    const [stateData, setStateData] = useState({});
    const [loading, setLoading] = useState(true);
    const token = get("user-token") || get("token");
    const data = decodeJWT(token);
    const [state, setState] = useState({
        passwordError: "",
        error: null,
        msg: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        username: "",
        error: ""
    })

    useEffect(() => {
        if (data) {
            setStateData(data);
            setLoading(false)
        }
    }, [token])

    const retrieveUserData = () => {
        setLoading(true)

        getUserData(_id).then(data => {
            const res = data.data;
            if (!res.error) {
                setStateData(res.user);
                setLoading(false)
                const encode = encodeJWT(res.user);
                save("user-token", encode);
            } else {
                save("token", null);
                router.push("/signin");
            }

        }).catch(err => {
            setStateData(data);
            setLoading(false)
        })
    }



    const updateUserData = () => {
        const {
            fname,
            lname,
            email,
            password,
            username, } = state;

        userUpdate(_id, {
            fname,
            lname,
            email,
            password,

            username,
        }).then(data => {
            const res = data.data;
            if (!res.error) {
                setState({
                    ...state,
                    error: res.error,
                    msg: res.validation
                });
                retrieveUserData();
            } else {
                if (res.msg === "user-not-found") {
                    save("token", null);
                    router.push("/signin");
                } else {
                    setState({
                        ...state,
                        error: res.error,
                        msg: res.validation
                    })
                }

            }
        }).catch(err => {
            setState({
                ...state,
                error: true,
                msg: "Network Connectivity Poor"
            })
        })
    }

    const handleStateData = (name, val) => {

        setState(prevState => ({
            ...prevState,
            error: null,
            passwordError: "",
            [name]: val
        }));

        if (name === "password" && val !== "" && val.length < 4) {
            setState(prevState => ({
                ...prevState,
                error: null,
                passwordError: "Atleast not less than 4 characters",
            }))
        }

    }

    const {
        _id,
        fname,
        lname,
        email,
        username,
        msg, error, passwordError,
    } = stateData;

    const [customers, setCustomers] = useState({
        items: []
    })

    const { items } = customers;

    const handleCustomers = (name, val) => {
        setCustomers(state => ({
            ...state,
            [name]: val
        }))
    }

    const getAllCustomers = async () => {
        getCustomers().then(data => {
            handleCustomers("items", data.data);
        })
    }

    // console.log(daysLeft);

    return {
        customers: items,
        fname,
        lname,
        email,
        _id,
        loading,
        username,
        retrieveUserData,
        handleStateData,
        updateUserData,
        msg,
        error,
        passwordError,
        handleCustomers,
        getAllCustomers,
    }

}