import { useState } from "react";
import { NumberRange } from "./NumberRange";

export const ProductList = ({ items, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={`${items?.length > 3 ? "items-1" : "scrollbar"}`}>
      {items?.map((item, i) => {
        return (
          <div key={i} className="product-card flex col justify-between">
            <div className="img round">
              <img src={item.image} />
            </div>
            {/* <div className="space-2"></div> */}

            <div className="content">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <h1>${item.regularPrice} <del>${item.salePrice}</del></h1>
            </div>
            {!item.downloadable && (
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
              <button>See more</button>
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
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
