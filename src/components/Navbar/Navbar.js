import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'Deals', link: '/deals' },
        { id: 1, name: 'Coupons', link: '/coupons' },
        { id: 1, name: 'Contact', link: '/contacts' }
    ]
    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden '>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}

            </div>
            <ul className={`md:flex md:static justify-center bg-indigo-400 w-full  absolute  duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'} `}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        r={route}
                    ></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;