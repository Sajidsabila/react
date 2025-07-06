const Button = (props) => {
  const{children = "Button", variant = "bg-blue-500", type="button", onClick} = props
 return (
       <button className={`h-10 px-6 font-semibold rounded-lg shadow-md ${variant} text-white hover:cursor-pointer`}
       type={type}
       onClick={onClick}
        >{children}</button>
    )
}
export default Button
