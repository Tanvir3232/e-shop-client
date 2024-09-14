import { Drawer } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';
const Header = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };



    return (
        <section className='header'>
            <Link to='/'>
                <img src="/logo.png" alt="Logo" />
            </Link>

            <ul className={`menu`}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
            </ul>
            <Link to='/' className='menuIcon' onClick={showDrawer}>
                <img src="/menu.png" alt="" />
            </Link>
            <Drawer title="Close" onClose={onClose} open={open}>
                <ul className="drawer-menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </Drawer>
        </section>
    );
};

export default Header;
