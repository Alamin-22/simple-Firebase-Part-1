import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="text-3xl text-center space-x-5 my-4">
                <NavLink to={"/"} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }>Home</NavLink>
                <NavLink to={"/login"} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }>LogIn</NavLink>
            </div>
        </div>
    );
};

export default Header;