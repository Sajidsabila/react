const Button = (props) => {
  const{children = "Button", variant = "bg-black-500"} = props
 return (
       <button className={`h-10 px-6 font-semibold rounded-lg shadow-md ${variant} text-white`}
        >{children}</button>
    )
}
export default Button
