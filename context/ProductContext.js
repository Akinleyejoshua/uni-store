import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { addProduct, getAllProducts, updateProduct } from "../services/products";

export const ProductContext = () => {
    const [state, setState] = useState({
        products: [],
        name: "",
        description: "",
        type: "",
        virtual: false,
        downloadable: false,
        regularPrice: 0,
        salePrice: 0,
        visibility: false,
        image: "",
        category: "",
        tags: [],
        sku: "",
        stockStatus: "",
        soldIndividualy: false,
        shortDescription: "",
        date: "",
        published: false,
        msg: "",
        error: false,
        loading: false,
        product: []
    });

    const {
        name,
        description,
        type,
        virtual,
        downloadable,
        regularPrice,
        salePrice,
        visibility,
        image,
        category,
        tags,
        sku,
        stockStatus,
        soldIndividualy,
        shortDescription,
        date,
        published,
        msg,
        error, 
        loading,
        product
    } = state;

    const getProducts = async () => {
        await getAllProducts(undefined, undefined).then(data => {
            setState({
                ...state,
                products: data.data
            });
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handleState = (name, val) => {
        setState(state => ({
            ...state,
            [name]: val
        }))
    }

    const saveNewProduct = () => {
        handleState("loading", true);
        const date = new Date().toLocaleString();
        addProduct({
            name,
            description,
            type,
            virtual,
            downloadable,
            regularPrice,
            salePrice,
            visibility,
            image,
            category,
            tags,
            sku,
            stockStatus,
            soldIndividualy,
            shortDescription,
            date,
            published,
        }).then(data => {
            const res = data.data;
            if (res.error) {
                handleState("error", true);
                handleState("msg", res.message);
                handleState("loading", false);

            } else {
                handleState("error", false);
                handleState("msg", res.message);
                handleState("loading", false);
            }
        })
    }
    
    const editProduct = (id) => {
        handleState("loading", true);

        updateProduct({
            id,
            name,
            description,
            type,
            virtual,
            downloadable,
            regularPrice,
            salePrice,
            visibility,
            image,
            category,
            tags,
            sku,
            stockStatus,
            soldIndividualy,
            shortDescription,
            date,
            published,
        }).then(data => {
            const res = data.data;
            if (res.error) {
                handleState("error", true);
                handleState("msg", res.message);
                handleState("loading", false);

            } else {
                handleState("error", false);
                handleState("msg", res.message);
                handleState("loading", false);

            }
        }).catch(err => {
            handleState("error", true);
            handleState("msg", "Oops, connection error");
            handleState("loading", false);
        })
    }

    return {
        products: state.products,
        name,
        description,
        type,
        virtual,
        downloadable,
        regularPrice,
        salePrice,
        visibility,
        image,
        category,
        tags,
        sku,
        stockStatus,
        soldIndividualy,
        shortDescription,
        date,
        published,
        handleState,
        saveNewProduct,
        msg,
        error, loading,
        editProduct,
        getProducts,
        product
    }
}