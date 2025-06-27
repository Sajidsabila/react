const Input = (props) => {
    const  {type, placeholder, name}  = props;
    return (
         <input type={type} id={name} name={name}
         className="text-sm border 
         rounded w-full px-3 py-2 text-slate-700 placeholder: opacity-50" placeholder={placeholder} />
    )
}

export default Input