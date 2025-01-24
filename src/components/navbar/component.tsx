'use client'

import Link from "next/link"


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-40 py-2 w-full h-24 text-white">
            <div className="flex flex-col text-left align-start">
                <h2 className="text-3xl font-bold">Thiago Spadari</h2>
                <p className="text-sm ml-24">Desenvolvedor Full Stack/Mobile</p>
            </div>

            <div className="flex items-center gap-5">
                <Link className="hover:opacity-50" href="#">Home</Link>
                <Link className="hover:opacity-50" href="#">Sobre Mim</Link>
                <Link className="hover:opacity-50" href="#">Projetos</Link>

            </div>

            
        </nav>
    )
}
