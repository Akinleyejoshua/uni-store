import { useEffect, useState } from "react"
import { save } from "../helpers";
import { addOrder, getOrders, updateOrder } from "../services/order";

export const OrderContext = () => {
    const [state, setState] = useState({
        totalExchange: 0,
        fname: "",
        lname: "",
        email: "",
        phone: "",
        companyName: "",
        country: "",
        region: "",
        city: "",
        street: "",
        apartment: "",
        products: {},
        loading: false,
        msg: "",
        orderNumber: "",
        error: false,
        orders: [],
        status: "",
        shipping: ""
    })
    const {
        totalExchange,
        fname,
        lname,
        email,
        phone,
        companyName,
        country,
        region,
        city,
        street,
        apartment,
        products,
        loading,
        msg,
        orderNumber,
        error,
        orders,
        status,
        shipping
    } = state;

    const handleState = (name, val) => {
        setState(state => ({
            ...state,
            [name]: val
        }))
    }

    const createOrder = async (ref) => {
        addOrder({
            total: totalExchange,
            date: new Date().toLocaleString(),
            orderNumber: ref,
            streetAddress: street,
            apartmentSuit: apartment,
            fname,
            lname,
            email,
            phone,
            companyName,
            country,
            region,
            city,
            products,
            status,

        }).then(data => {
            const res = data.data;
            // console.log(res);
            if (res.error) {
                handleState("error", true);
                handleState("msg", res.message);
                handleState("loading", false);
                return false;

            } else {
                handleState("error", false);
                handleState("msg", res.message);
                handleState("loading", false);
                save("cart", "");
                return true;

            }
        }).catch(err => {
            handleState("error", true);
            handleState("msg", "Oops, an error occured!");
            handleState("loading", false);
        })
    }

    const getAllOrders = () => {
        getOrders().then(data => {
            const res = data.data;
            handleState("orders", res)
        })
    }

    useEffect(() => {
        // getAllOrders();
    }, [])

    const editOrder = (id) => {
        handleState("loading", true);

        updateOrder({
            id:id,
            streetAddress: street,
            apartmentSuit: apartment,
            fname,
            lname,
            email,
            phone,
            companyName,
            country,
            region,
            city,
            status,
            shipping

        }).then(data => {
            const res = data.data;
            // console.log(res);
            if (res.error) {
                handleState("error", true);
                handleState("msg", res.message);
                handleState("loading", false);

            } else {
                handleState("error", false);
                handleState("msg", res.message);
                handleState("loading", false);
                save("cart", "");

            }
        }).catch(err => {
            handleState("error", true);
            handleState("msg", "Oops, an error occured!");
            handleState("loading", false);
        })
    }

    return {
        totalExchange,
        fname,
        lname,
        email,
        phone,
        companyName,
        country,
        region,
        city,
        street,
        apartment,
        products,
        loading,
        msg,
        orderNumber,
        createOrder,
        handleState,
        error,
        orders,
        getAllOrders,
        editOrder,
    }
}
