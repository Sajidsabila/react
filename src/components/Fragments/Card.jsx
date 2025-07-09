import Button from "../Elements/Button";

const CartProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-md flex flex-col justify-between overflow-hidden">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <div className="bg-gray-900">
      <img
        src={image}
        alt="Product"
        className="p-6 rounded-t-lg object-cover w-full h-48"
      />
    </div>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="px-6 pb-4">
      <h5 className="text-lg font-semibold text-white mb-2">{title}</h5>
      <p className="text-sm text-gray-300 leading-relaxed">{children.substring(0, 100)}...</p>
    </div>
  );
};

const Footer = ({ price, addToCart, id }) => {
  return (
    <div className="flex items-center justify-between px-6 pb-6">
      <span className="text-white font-bold text-lg">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </span>
      <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => addToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

// Assign subcomponents
CartProduct.Header = Header;
CartProduct.Body = Body;
CartProduct.Footer = Footer;

export default CartProduct;
