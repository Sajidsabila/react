import Button from '../Elements/Button';
const CartProduct = (props) => {

    const {children} = props;

    return (
         <div className="w-full max-w-sm  bg-gray-800 my-2 mx-2 border border-gray-200 rounded-lg shadow flex flex-col justify-between">

        {children}
         </div>
    )
}
const Header = (props) => {
    const {image} = props
    return (
         <a href="/">
            <img src={image} alt="products" className="p-8 rounded-lg "/>
        </a>
    )
}
const Body = (props) => {
    const {children, title} = props  
    return (
        <>
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-light text-white">
                    {title}
                </h5>
                <p className="text-m text-white">
                  {children}
                </p>
            </a>
        </div>
        
        </>
    )
}

const Footer = (props) => {
    const {price, addToCart, id} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="tet-xl font-bold text-white">{price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
           <Button className="bg-blue-600" onClick={() => addToCart(id)}>Add to Cart</Button>
        </div>
    )
}
CartProduct.Header = Header;
CartProduct.Body = Body;
CartProduct.Footer = Footer;
export default CartProduct