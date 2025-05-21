import TopNavbar from './TopNavbar';
import BottomMenu from './BottomMenu';

const Navbar = () => {
    return (
        <div className="w-full shadow-md z-50">
            <TopNavbar />
            <BottomMenu />
        </div>
    );
};

export default Navbar;