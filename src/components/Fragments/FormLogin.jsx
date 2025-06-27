import Button from '../Elements/Button';
import InputForm from '../Elements/Input';
const FormLogin = () => {
    return (
         
      <form className='mt-5'>
          <InputForm title="Email" text="Email" name="email" type="email" placeholder="Email"></InputForm>
          <InputForm title="Password" name="email" type="email" placeholder="Email"></InputForm>
          <Button variant="bg-blue-500 w-full">Login</Button>
      </form>
 
    )
}
export default FormLogin;