"use client";
import { useRef, useState } from 'react'
import Link from "next/link";

const SideBar = () => {
	const [hiddenMenu, setHiddenMenu] = useState<boolean>(true)
	const ref = useRef<HTMLImageElement>(null)

	function ToggleMenu() {
		setHiddenMenu(!hiddenMenu);
	}
	function RemoveMenu() {
		setHiddenMenu(true)
		window.scrollTo(0, 0)
	}

	return (
		<>
			<div
				className="burger-icon w-10 fixed cursor-pointer md:hidden z-50 sm:ml-2 ml-12 mt-6"
				onClick={ToggleMenu}
				ref={ref}>
				{hiddenMenu ? 
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
					:
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				}
			</div>
			
			<nav
				className={`main-menu${hiddenMenu ? `` : ` show-menu`} flex-col items-center fixed justify-center min-h-screen text-2xl gap-5 text-slate-600 hidden md:flex`}
			>
				<h1 className="sm:text-xl md:text-3xl text-center text-black font-light">
					<p className="uppercase font-sub-title">Read with</p>
					<span className="font-semibold font-name-title text-5xl">Sree</span>
				</h1>

				<Link href="/" className="hover:text-blue-600 smooth-transition text-xl" 
					onClick={() => { RemoveMenu() }}>
					Home
				</Link>
				<Link href="/books" className="hover:text-blue-600 smooth-transition text-xl" 
					onClick={() => { RemoveMenu() }}>
					My Book Shelf
				</Link>
				<Link href="/books/add" className="hover:text-blue-600 smooth-transition text-xl" 
					onClick={() => { RemoveMenu() }}>
					Add to shelf
				</Link>
				<Link href="/about" className="hover:text-blue-600 smooth-transition text-xl" 
					onClick={() => { RemoveMenu() }}>
					About
				</Link>
			
				<p className="text-xs">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline mr-2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
					</svg>
					2010-<span>{new Date().getFullYear()}</span></p>
			</nav>
		</>
	)
}

export default SideBar
