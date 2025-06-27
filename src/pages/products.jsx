import CartProduct from "../components/Fragments/Card"


const ProductPage = () => {
    const products = [
        {
            image: "/image/sneakers.jpg",
            title: "Sepatu Baru",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur nam, doloribus omnis ea id ratione provident. Odit eligendi esse earum illum atque cum. Quod fugit amet error blanditiis dicta!",
            price: "Rp. 1.000.000"
        },
        {
            image: "/image/sneakers.jpg",
            title: "Sepatu Baru",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur nam, doloribus omnis ea id ratione provident. Odit eligendi esse earum illum atque cum. Quod fugit amet error blanditiis dicta!",
            price: "Rp. 1.000.000"
        }, 
        {
            image: "/image/sneakers.jpg",
            title: "Sepatu Baru",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur nam, doloribus omnis ea id ratione provident. Odit eligendi esse earum illum atque cum. Quod fugit amet error blanditiis dicta!",
            price: "Rp. 1.000.000"
        }
    ];
return (
    <div className="flex justify-center">

   {products.map((product, index) => (
       <CartProduct>
       <CartProduct.Header image={product.image}></CartProduct.Header>
       <CartProduct.Body title={product.title}>{product.description} 
       </CartProduct.Body>
       <CartProduct.Footer price={product.price}></CartProduct.Footer>
       </CartProduct>
   ))}
    </div>
)
}
export default ProductPage