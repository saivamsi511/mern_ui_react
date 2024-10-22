import { Link } from "react-router-dom";

export function NotFound(){
    return (
        <div>
            <h1>404 Found</h1>
            <p>Please go to Home Page</p>
            <Link to='/home'>Home</Link>
        </div>
    )
}