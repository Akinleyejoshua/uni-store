import { createContext } from "react";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";
import { ProductContext } from "./ProductContext";
import { OrderContext } from "./OrderContext";

export const GlobalContext = createContext({
  auth: {
    fname: "",
    lname: "",
    id: "",
    email: "",
    password: "",
    loading: "",
    error: "",
    msg: "",
    auth: "",
    handleState: "",
    googleAuth: "",
    validateCreateAccount: "",
    validateSignin: "",
    clear: "",
    resetPassword: "",
    forgotPassword: "",
    logout: "",
  },
  user: {
    fname: "",
    lname: "",
    email: "",
    _id: "",
    loading: "",
  },
  product: {
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
    handleState: () => {},
    saveNewProduct: () => {},
    editProduct: () => {},
    getProducts: () => {},
    msg: "",
    error: false,
    loading: false,
  },
  order: {
    handleState: () => {},
    createOrder: () => {},
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
        orders: []
  },
});

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{
        auth: AuthContext(),
        user: UserContext(),
        product: ProductContext(),
        order: OrderContext(),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
