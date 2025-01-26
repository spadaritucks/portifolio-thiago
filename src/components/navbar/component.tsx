'use client'

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    const openNavBarMobile = () => {
        setOpen(!open);
    };

    const NavBarMobileClosed = "opacity-0 translate-y-32";
    const NavBarMobileOpened = "opacity-1 translate-y-28";

    return (
        <nav className="fixed flex items-center justify-between py-2 w-full h-24 text-white lg:px-40 bg-gradient-to-r from-[#004e92] to-[#000428]">
            <div className="flex flex-col text-left align-start px-9">
                <h2 className="text-2xl lg:text-3xl font-bold">Thiago Spadari</h2>
                <p className="text-sm ml-9 lg:ml-24">Desenvolvedor Full Stack/Mobile</p>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed w-full flex flex-col justify-start items-start bg-gradient-to-r from-[#004e92] to-[#000428] py-6 px-6 gap-5 transition-all duration-500 shadow-xl shadow-black
                lg:hidden ${open ? NavBarMobileOpened : NavBarMobileClosed}`}
            >
                <Link className="hover:opacity-50" href="#menu">Menu</Link>
                <Link className="hover:opacity-50" href="#sobre-mim">Sobre Mim</Link>
                <Link className="hover:opacity-50" href="#projetos">Projetos</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:w-96 lg:gap-5">
                <Link className="hover:opacity-50" href="#menu">Menu</Link>
                <Link className="hover:opacity-50" href="#sobre-mim">Sobre Mim</Link>
                <Link className="hover:opacity-50" href="#projetos">Projetos</Link>
            </div>

            {/* Toggle Button */}
            <div onClick={openNavBarMobile} className="px-9 lg:hidden">
                {open ? (
                    <img
                        className="w-10 block cursor-pointer hover:scale-110 transition-all ease-in-out"
                        src="/close.png"
                        alt="Fechar menu"
                    />
                ) : (
                    <img
                        className="w-10 block cursor-pointer hover:scale-110 transition-all ease-in-out"
                        src="/hamburguer.png"
                        alt="Abrir menu"
                    />
                )}
            </div>
        </nav>
    );
}

