import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormLogin = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "/products";
  }
    return (
         
      <form className='mt-5' onSubmit={handleLogin}>
          <InputForm title="Email" text="Email" name="email" type="email" placeholder="Email"></InputForm>
          <InputForm title="Password" name="password" type="password" placeholder="password"></InputForm>
          <Button variant="bg-blue-500 w-full hover:cursor-pointer" type="submit">Login</Button>
      </form>
 
    )
}
export default FormLogin;