import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Popover } from '@headlessui/react';
import { FaBars } from 'react-icons/fa';
import { FaRegCircleXmark } from 'react-icons/fa6';
import './style.scss'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="Header">
            <header>
                <nav aria-label="Global">
                    <div className="logo">
                        <Link to="/">
                            <span>Your Company</span>
                            <img src="https://e7.pngegg.com/pngimages/293/759/png-clipart-sbi-state-bank-of-india-logo-bank-logos-thumbnail.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="hamburger-menu">
                        <button type="button" onClick={() => setMobileMenuOpen(true)}>
                            <span>Open main menu</span>
                            <FaBars className="fa-bars" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="nav-items">
                        <Link to="/">Home</Link>
                        <Link to="/create">Add Beneficiary</Link>
                    </Popover.Group>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className='-m-1.5 p-1.5'>
                                <span className="sr-only">Your Company</span>
                                <img className='h-8 w-auto' src="https://e7.pngegg.com/pngimages/293/759/png-clipart-sbi-state-bank-of-india-logo-bank-logos-thumbnail.png" alt="Logo" />
                            </Link>
                            <button className='-m-2.5 rounded-md p-2.5 text-gray-700' type="button" onClick={() => setMobileMenuOpen(false)}>
                                <span className="sr-only">Close menu</span>
                                <FaRegCircleXmark className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link to="/" className=" @apply -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50;">Home</Link>
                                    <Link to="/create" className=" @apply -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50;">Add Beneficiary</Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div >
    );
};

export default Header;
