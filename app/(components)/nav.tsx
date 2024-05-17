"use client"
import { useScrollTo } from "framer-motion-scroll-to-hook";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { JSX, SVGProps } from "react"

export default function NavBar() {
    const scrollTo = useScrollTo({ mass: 1, stiffness: 40, type: 'spring' });
    const path = usePathname();
    const isHome = path === "/";
    return (
        <nav className=" text-stone-100 mix-blend-difference p-4 flex justify-between items-center fixed w-full top-0 z-30">
            <div className="flex items-center space-x-4 sticky top-0">
                <h1 className=" text-2xl font-semibold">Kernow Pasta</h1>
            </div>
            <ul className="flex space-x-6 ">
                <li>
                    <Link className="   text-md uppercase tracking-wider hover:text-gray-200" href={isHome ? "" : "/"} onClick={() => scrollTo(document.querySelector('#home'))}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className=" text-md uppercase tracking-wider hover:text-gray-200" href={isHome ? "" : "/"} onClick={() => scrollTo(document.querySelector('#OurStory'))}>
                        Our Story
                    </Link>
                </li>
                <li>
                    <Link className=" text-md uppercase tracking-wider hover:text-gray-200" href={isHome ? "" : "/"} onClick={() => scrollTo(document.querySelector('#pastaShapes'))}>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link className=" text-md uppercase tracking-wider hover:text-gray-200" href="/blog">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link className=" text-md uppercase tracking-wider hover:text-gray-200" href="/contact" >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <Link href="/cart"><ShoppingCartIcon className="h-6 w-6 " /></Link>
                <Link href='/api/auth/login'><UserIcon className="h-6 w-6 " /></Link>
            </div>
        </nav>
    )
}




function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}