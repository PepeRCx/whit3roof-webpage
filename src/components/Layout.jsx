import Navbar from './navbar/NavBar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> {}
            </main>
            <Footer />
        </>
    )
}

export default Layout;