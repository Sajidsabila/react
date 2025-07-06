import { useState } from "react";
import CartProduct from "../components/Fragments/Card"
import Counter from "../components/Fragments/Counter";


const ProductPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Sepatu Baru 1", 
            qty: 1
        }, 
    ]);
    const products = [
        {
            image: "/image/sneakers.jpg",
            id: 1,
            name: "Sepatu Baru 1",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur nam, doloribus omnis ea id ratione provident. Odit eligendi esse earum illum atque cum. Quod fugit amet error blanditiis dicta!",
            price: 1000000
        },
        {
            image: "/image/sneakers.jpg",
            id: 2,
            name: "Sepatu Baru 2",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur nam, doloribus omnis ea id ratione provident. Odit eligendi esse earum illum atque cum. Quod fugit amet error blanditiis dicta!",
            price: 1000000
        }, 
        {
            image: "/image/sneakers.jpg",
            id: 3,
            name: "Sepatu Baru 3",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur nam, doloribus omnis ea id ratione provident. Odit eligendi esse earum illum atque cum. Quod fugit amet error blanditiis dicta!",
            price: 500000
        }
    ];

    const email = localStorage.getItem("email");
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    const handleAddToCart = (id) => {
       if(cart.find((item) => item.id === id)) {
        setCart(
            cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
        
        )
       }else{
        setCart([...cart, {id, qty: 1}])
       }
    }

return (
    <>
    <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">{email ?? "Guest"}
    <button className="ml-5 bg-black text-white p-2" onClick={handleLogout}>Logout</button>
    </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
    {products.map((product, index) => (
    <CartProduct>
    <CartProduct.Header image={product.image}></CartProduct.Header>
    <CartProduct.Body title={product.title}>{product.description} 
    </CartProduct.Body>
    <CartProduct.Footer price={product.price} addToCart={handleAddToCart} id={product.id}></CartProduct.Footer>
    </CartProduct>
    ))}
</div>
<div className="w-1/4">
<h1 className="text-3xl font-bold text-blue-600">Cart</h1>
<table className="text-left table-auto border-separate ">
    <thead>
        <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        </tr>
    </thead>
    <tbody>
       
            {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>
                           
                            {product.price.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })}
                            </td>
                        <td>{item.qty}</td>
                        <td>{item.qty * product.price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</td>
                    </tr>
                )
})}
       
    </tbody>

</table>
</div>
 </div>
 {/* <div className="flex justify-center mt-10">
     <Counter/>
 </div> */}
    </>
  
)
}
export default ProductPage