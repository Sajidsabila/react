import Button from '../Elements/Button';
import InputForm from '../Elements/Input'
const FormRegister = () => {
    return (
         
            <form className='mt-5'>
            <InputForm title="Full name" name="text" type="text" placeholder="Fullname"></InputForm>
            <InputForm title="Email" name="email" type="email" placeholder="Email"></InputForm>
            <InputForm title="Email" name="email" type="email" placeholder="Email"></InputForm>
            <Button variant="bg-blue-500 w-full">Register</Button>
      </form>
 
    )
}
export default FormRegister;