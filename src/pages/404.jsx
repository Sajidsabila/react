import { useRouteError } from "react-router-dom";
const ErrorPage = () => {

    const error = useRouteError();
    return (
    <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-3xl font-bold">Ooops</h1>
        <p className="text-slate-500 my-5 text-xl">Sorry, an unexpected error has occured</p>
        <p>{error.statusText || error.message}</p>
    </div>
    )
}
export default ErrorPage