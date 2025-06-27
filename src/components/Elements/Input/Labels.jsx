const Label = (props) => {
    const  {name, text} = props;
    return (
        <label htmlFor={name} className='block text-slate-700 font-semibold mb-2'>{text}</label>
    )
}
export default Label;