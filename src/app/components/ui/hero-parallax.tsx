'use client';
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
	const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
	const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
	const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
	const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
	const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
	return (
		<div
			ref={ref}
			className='h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'>
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=''>
				<motion.div className='flex flex-row-reverse space-x-reverse space-x-20 mb-20'>
					{firstRow.map(product => (
						<ProductCard product={product} translate={translateX} key={product.title} />
					))}
				</motion.div>
				<motion.div className='flex flex-row  mb-20 space-x-20 '>
					{secondRow.map(product => (
						<ProductCard product={product} translate={translateXReverse} key={product.title} />
					))}
				</motion.div>
				<motion.div className='flex flex-row-reverse space-x-reverse space-x-20'>
					{thirdRow.map(product => (
						<ProductCard product={product} translate={translateX} key={product.title} />
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	const goToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) section.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full'>
			{/* Adjust text margin and padding */}
			<div className='relative'>
				<h1 className='text-3xl text-center md:text-left md:text-7xl font-bold dark:text-white mt-[-50px] md:mt-[-100px]'>
					Your Ultimate Partner in <br /> IT Consulting Excellence
				</h1>
				<p className='max-w-2xl text-center md:text-left text-base md:text-xl mt-4 md:mt-6 dark:text-neutral-200'>
					We provide innovative IT solutions using cutting-edge technologies and best practices. Our team of dedicated
					consultants and strategists is passionate about delivering exceptional results that drive success for your
					business.
				</p>
			</div>

			{/* Button Container */}
			<div className='flex flex-row justify-center md:justify-start gap-2 md:gap-4 mt-6 md:mt-8'>
				<Link
					href='#find-more'
					onClick={e => {
						e.preventDefault();
						goToSection('find-more');
					}}
					className='bg-blue-600 z-[100] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-700 transition duration-300 ease-in-out'>
					Find Out More
				</Link>
				<Link
					href='#check-availability'
					onClick={e => {
						e.preventDefault();
						goToSection('check-availability');
					}}
					className='bg-green-600 z-[100] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold text-sm md:text-base hover:bg-green-700 transition duration-300 ease-in-out'>
					Check Availability
				</Link>
			</div>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className='group/product h-96 w-[30rem] relative flex-shrink-0'>
			<Link href={product.link} className='block group-hover/product:shadow-2xl '>
				<Image
					src={product.thumbnail}
					height='600'
					width='600'
					className='object-cover object-left-top absolute h-full w-full inset-0'
					alt={product.title}
				/>
			</Link>
			<div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
			<h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>{product.title}</h2>
		</motion.div>
	);
};
