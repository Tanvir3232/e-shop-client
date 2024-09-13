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
            <figure>
                <img src="/logo.png" alt="Logo" />
            </figure>

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
            <div className='menuIcon' onClick={showDrawer}>
                <img src="/menu.png" alt="" />
            </div>
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
