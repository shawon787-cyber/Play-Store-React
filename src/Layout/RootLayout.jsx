
import { Outlet } from 'react-router';
import Navbar from '../assets/Components/Shared/Navbar';
import Footer from '../assets/Components/Shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RootLayout;