import { CartContext } from "@/context/cart";
import { toDollar } from "@/lib/tools";
import { useContext, useMemo } from "react";
import { TrashIcon } from "./Icons";

export function Cart() {
  const {
    productsInCart,
    showCart,
    addQuantity,
    removeQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const totalPrice = useMemo(() => {
    if (productsInCart.length === 0) {
      return;
    }

    const prices = productsInCart.map(
      ({ product, quantity }) => product.price * quantity
    );

    return toDollar(prices.reduce((a, b) => a + b));
  }, [productsInCart]);

  return (
    <>
      {showCart && (
        <aside className="absolute top-0 pt-20 bottom-0 right-0 w-96 bg-gray-100 z-20 p-4">
          {productsInCart.length !== 0 ? (
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-2">
                {productsInCart.map(({ product, quantity }) => (
                  <li
                    key={product.id}
                    className="flex gap-8 items-center justify-end"
                  >
                    <div className="w-96">{product.title}</div>

                    <div className="flex gap-4 items-center justify-end">
                      <div className="flex gap-2 items-center">
                        <div>{quantity}</div>

                        <button
                          className="w-6 h-6 border rounded-full flex justify-center items-center"
                          onClick={() => addQuantity(product)}
                        >
                          +
                        </button>

                        <button
                          className="w-6 h-6 border rounded-full flex justify-center items-center"
                          onClick={() => removeQuantity(product)}
                        >
                          -
                        </button>
                      </div>

                      <div className="w-16 flex justify-end">
                        {toDollar(product.price)}
                      </div>

                      <button
                        className=""
                        onClick={() => removeFromCart(product)}
                      >
                        <TrashIcon width="20" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex gap-8 items-center justify-end">
                <div>Total</div>

                <div className="flex gap-4 items-center justify-end">
                  <div className="w-16 justify-end flex">{totalPrice}</div>

                  <button className="" onClick={clearCart}>
                    <TrashIcon width="20" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xl font-bold text-right mt-8">
              Your cart is empty
            </p>
          )}
        </aside>
      )}
    </>
  );
}
