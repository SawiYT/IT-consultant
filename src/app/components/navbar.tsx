'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const goToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) section.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false); // Zamknij menu po kliknięciu w link
	};

	return (
		<div
			className={`sticky top-0 z-[50] w-full border-b transition-colors duration-300 ${
				scrolled
					? 'bg-white dark:bg-black border-neutral-200 dark:border-white/[0.1]'
					: 'bg-transparent border-transparent'
			}`}>
			<div className='max-w-7xl mx-auto flex justify-between items-center p-5'>
				<div className='flex items-center gap-2'>
					<Image alt='Logo' src='/logo.png' width={30} height={30} />
					<p className='text-xl text-black dark:text-white'>Techlynx</p>
				</div>
				<div className='hidden md:flex gap-5'>
					<Link
						href='#header'
						onClick={e => {
							e.preventDefault();
							goToSection('header');
						}}>
						Home
					</Link>
					<Link
						href='#find-more'
						onClick={e => {
							e.preventDefault();
							goToSection('find-more');
						}}>
						About
					</Link>
					<Link
						href='#check-availability'
						onClick={e => {
							e.preventDefault();
							goToSection('check-availability');
						}}>
						Availability
					</Link>
				</div>
				<div className='md:hidden'>
					<button onClick={() => setMenuOpen(!menuOpen)} className='text-black dark:text-white focus:outline-none'>
						{menuOpen ? (
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
							</svg>
						) : (
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
							</svg>
						)}
					</button>
				</div>
			</div>
			{menuOpen && (
				<div className='md:hidden'>
					<div className='flex flex-col items-center gap-5 p-5 bg-white dark:bg-black'>
						<Link
							href='#header'
							onClick={e => {
								e.preventDefault();
								goToSection('header');
							}}>
							Home
						</Link>
						<Link
							href='#find-more'
							onClick={e => {
								e.preventDefault();
								goToSection('find-more');
							}}>
							About
						</Link>
						<Link
							href='#check-availability'
							onClick={e => {
								e.preventDefault();
								goToSection('check-availability');
							}}>
							Availability
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;
