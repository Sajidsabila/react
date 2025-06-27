import Input from "./Input"
import Label from "./Labels"

const InputForm = (props) => {
    const {title, name, type, placeholder, text} = props;
    return (
        <div className="mb-6">
            <Label name={name} text={title}></Label>
            <Input name={name} type={type} placeholder={placeholder}></Input>
            
        </div>
    )
}
export default InputForm