import { Link } from "react-router-dom";

 

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl text-center p-10">No Data Found!</h1>
            <Link to="/" className="border p-2 rounded-md">
               go back go home
            </Link>
        </div>
    );
};

export default ErrorPage;