import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { get } from "../helpers";
import { decodeJWT } from "../services/user";
import { formatNumber } from "../utils/num";
import { NumberRange } from "./NumberRange";

export const ProductList = ({ items, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const [cart, setCart] = useState({});

  useEffect(() => {
    setCart(decodeJWT(get("cart")));

    // console.log(decodeJWT(get("cart")));
  }, []);

  const ids = cart?.items?.map((item) => item.id);

  return (
    <div className={`${items?.length > 3 ? "items-1" : "scrollbar"}`}>
      {items?.map((item, i) => {
        return (
          <div key={i} className="product-card flex col justify-between">
            <div className="img round">
              <img src={item?.image} />
            </div>
            {/* <div className="space-2"></div> */}

            <div className="content">
              <h1>{item?.name}</h1>
              <p>{item?.description}</p>
              <h1>
                ${formatNumber(item?.regularPrice)}{" "}
                <del className="red">${formatNumber(item?.salePrice)}</del>
              </h1>
              {/* <h1>${item.regularPrice} <del>${item.salePrice}</del></h1> */}
            </div>
            {!item?.downloadable && (
              <>
                <small>Quantity</small>
                <NumberRange
                  value={(type, val) => {
                    setQuantity(val);
                  }}
                />
              </>
            )}

            <div className="space-1"></div>
            <div className="flex justify-between">
              <button onClick={() => router.push("/products/" + item._id)}>
                See more
              </button>

              {ids?.includes(item._id) ? (
                <button>Added to cart</button>
              ) : (
                <button
                  onClick={(event) => {
                    addToCart({
                      id: item._id,
                      name: item.name,
                      description: item.shortDescription,
                      price: item.regularPrice,
                      img: item.image,
                      quantity: quantity,
                      downloadable: item.downloadable,
                    });
                    event.target.disabled = true;
                    event.target.innerHTML = "Added to cart";
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
