
import { Outlet } from 'react-router';
import Navbar from '../assets/Components/Shared/Navbar';
import Footer from '../assets/Components/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;