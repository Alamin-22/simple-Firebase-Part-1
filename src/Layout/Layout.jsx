import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className="text-center text-2xl">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;