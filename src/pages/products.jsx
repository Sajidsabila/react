import { useEffect, useState } from "react";
import CartProduct from "../components/Fragments/Card";
import Counter from "../components/Fragments/Counter";
import Button from "../components/Elements/Button";
import { use } from "react";
import getProduct from "../services/product.service";

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Sepatu Baru 1",
      qty: 1,
    },
  ]);

  const [products, setProducts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [])

useEffect(() => {
  getProduct((data) => {
    setProducts(data);
  })
}, [])
  useEffect(() => {
     if(products.length > 0 && cart.length > 0){
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
     }
  }, [cart, products]);
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center h-12 bg-blue-600 text-white px-6">
        <span>{email ?? "Guest"}</span>
        <button
          className="bg-black hover:bg-gray-800 text-white py-1 px-4 rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 py-8 px-4 lg:px-10">
        {/* Product List */}
       {/* Product List */}
<div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.length > 0 &&
  products.map((product) => (
    <CartProduct key={product.id}>
      <CartProduct.Header image={product.image} />
      <CartProduct.Body title={product.title}>
        {product.description}
      </CartProduct.Body>
      <CartProduct.Footer
        id={product.id}
        price={product.price}
        addToCart={handleAddToCart}
      />
    </CartProduct>
  ))}
</div>


        {/* Cart */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow h-fit">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Keranjang</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="pb-2">Produk</th>
                  <th className="pb-2">Harga</th>
                  <th className="pb-2">Qty</th>
                  <th className="pb-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  if (!product) return null;
                  return (
                    <tr key={item.id} className="border-t border-gray-200">
                      <td className="py-2 px-3">{product.title}</td>
                      <td className="py-2">
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td className="py-2 text-center">{item.qty}</td>
                      <td className="py-2">
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={3} className="py-2 font-bold">Total</td>
                  <td className="py-2 font-bold">
                  {totalPrice.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="mt-6 flex justify-center">
        <Counter />
      </div>
    </>
  );
};

export default ProductPage;
