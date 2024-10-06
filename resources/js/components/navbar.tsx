import React, { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header style={{ background: "#EFC3AF" }}>
            <nav
                className="mx-auto flex items-center justify-between p-6 py-4"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <p className='text-xl'>Viding</p>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-md leading-6 text-white">
                        Home
                    </a>
                    <a href="#" className="text-md leading-6 text-gray-900">
                        Features
                    </a>
                    <a href="#" className="text-md leading-6 text-gray-900">
                        Marketplace
                    </a>
                    <a href="#" className="text-md leading-6 text-gray-900">
                        Company
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                    <a href="#" className="text-sm font-semibold leading-6 rounded-full px-4 py-2 bg-white" style={{ color: "#6C4E31" }}>
                        Masuk
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white rounded-full px-4 py-2" style={{ background: "#6C4E31" }}>
                        Get Started
                    </a>
                </div>
            </nav>
            {/* Mobile menu with animation */}
            <div
                className={`lg:hidden fixed inset-0 z-10 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                    }`}
                role="dialog"
                aria-modal="true"
                style={{ background: "#EFC3AF" }}
            >
                <div className="fixed inset-0 z-10" />
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <p className='text-xl'>Viding</p>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                            <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>

                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <div className=' flex gap-2'>
                                    <a href="#" className="text-sm font-semibold leading-6 rounded-full px-4 py-2 bg-white" style={{ color: "#6C4E31" }}>
                                        Masuk
                                    </a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-white rounded-full px-4 py-2" style={{ background: "#6C4E31" }}>
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
