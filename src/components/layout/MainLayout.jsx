import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navigation from "./navigation/Navigation";

export default function MainLayout () {
    return (
        <div className="min-h-screen flex flex-col bg-light dark:bg-dark text-black dark:text-light">
            <Navigation />
            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};