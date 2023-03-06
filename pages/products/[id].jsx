import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShareAlt, AiOutlineShoppingCart } from "react-icons/ai";
import { HomeHeader } from "../../components/HomeHeader";
import { NumberRange } from "../../components/NumberRange";
import { GlobalContext } from "../../context/GlobalContext";
import { save, get } from "../../helpers";
import { getProductById } from "../../services/products";
import { decodeJWT, encodeJWT } from "../../services/user";

export default function ProductData() {
  const router = useRouter();
  const {
    product: { products },
  } = useContext(GlobalContext);

  const { id } = router.query;
  // console.log(id);
  const [state, setState] = useState({
    item: {},
    cart: {
      total: 0,
      items: [],
    },
    quantity: 1,
    lastAdded: "",
  });

  useEffect(() => {
    setState((state) => ({
      ...state,
      cart: decodeJWT(get("cart")),
    }));

    // console.log(decodeJWT(get("cart")));
  }, []);

  useEffect(() => {
    if (state.cart.items?.length !== 0) {
      save("cart", encodeJWT(state.cart, "24h", 1));
    }
  }, [state.cart]);

  const filter = products.filter((item) => item._id === id);
  const ids = state.cart.items.map((item) => item.id);

  useEffect(() => {
    setState((state) => ({
      ...state,
      item: filter,
    }));
    // console.log(filter);
  }, [setState]);

  useEffect(() => {
    if (filter.length === 0 && id !== undefined) {
      getProductById(id).then((data) => {
        setState((state) => ({
          ...state,
          item: data.data,
        }));
      });
    }
  }, [id]);

  return (
    <div className="product">
      <Head>
        <title>UNI-STORE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHeader />

      {Object(state.item).length !== 0 ? (
        <section className="product">
          <h1>
              
            {state.item[0]?.name} | {state.item[0]?.category}
          </h1>
          <div className="space-1"></div>
          <div className="flex items-">
            <img src={state.item[0]?.image} width={500} height={500} alt="" />
            <div className="space-1"></div>
            <div className="flex col p-y-">
              <h1>${state.item[0]?.regularPrice} | {state.item[0]?.stockStatus}</h1>
              <del className="red">${state.item[0]?.salePrice}</del>
              <small>{state.item[0]?.description}</small>
              <div className="space-2"></div>
              <small>{state.item[0]?.shortDescription}</small>
              <h4>
                {state.item[0]?.tags?.map((item, i) => {
                  return <b key={i}>#{item} </b>;
                })}
              </h4>
              <div className="space-2"></div>
              <NumberRange
                value={(type, val) => {
                  setState((state) => ({
                    ...state,
                    quantity: val,
                  }));
                }}
              />
              <div className="space-1"></div>

              <div className="actions flex">
                {!ids?.includes(state.item[0]?._id) ? (
                  <button
                    className="flex"
                    onClick={(event) => {
                      const item = state.item[0];
                      setState({
                        ...state,
                        cart: {
                          ...state.cart,
                          total:
                            state.cart.total + item?.price * state.quantity,
                          items: [
                            ...state.cart.items,
                            {
                              id: item._id,
                              name: item.name,
                              description: item.shortDescription,
                              price: item.regularPrice,
                              img: item.image,
                              quantity: state.quantity,
                              downloadable: item.downloadable,
                            },
                          ],
                        },
                        lastAdded: item?._id,
                      });
                      event.target.disabled = true;
                      event.target.innerHTML = "Added to cart";
                    }}
                  >
                    Add
                  </button>
                ) : (
                  <button disabled={true}>Added to cart</button>
                )}
                <div className="space-1"></div>

                <button
                  className="btn flex"
                  onClick={() =>
                    navigator.clipboard.writeText(window?.location).then(() => {
                      console.log("copied");
                    })
                  }
                >
                  Share <AiOutlineShareAlt />
                </button>
              </div>
              <div className="space-1"></div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
