'use client';
import React from 'react';
import { HeroParallax } from './ui/hero-parallax';

export const products = [
	{
		title: 'Tech Innovators Consulting',
		link: 'https://picsum.photos/200/300?random=1',
		thumbnail: '/bg1.jpg',
	},
	{
		title: 'Digital Transformation Experts',
		link: 'https://picsum.photos/200/300?random=2',
		thumbnail: '/bg2.jpg',
	},
	{
		title: 'Cloud Solutions Advisors',
		link: 'https://picsum.photos/200/300?random=3',
		thumbnail: '/bg3.jpg',
	},
	{
		title: 'AI Strategy Consultants',
		link: 'https://picsum.photos/200/300?random=4',
		thumbnail: '/bg4.jpg',
	},
	{
		title: 'Cybersecurity Specialists',
		link: 'https://picsum.photos/200/300?random=5',
		thumbnail: '/bg5.jpg',
	},
	{
		title: 'Business Intelligence Experts',
		link: 'https://picsum.photos/200/300?random=6',
		thumbnail: '/bg6.jpg',
	},
	{
		title: 'Blockchain Innovators',
		link: 'https://picsum.photos/200/300?random=7',
		thumbnail: '/bg7.jpg',
	},
	{
		title: 'Data Analytics Consultants',
		link: 'https://picsum.photos/200/300?random=8',
		thumbnail: '/bg8.jpg',
	},
	{
		title: 'Software Development Partners',
		link: 'https://picsum.photos/200/300?random=9',
		thumbnail: '/bg1.jpg',
	},
	{
		title: 'IT Infrastructure Solutions',
		link: 'https://picsum.photos/200/300?random=10',
		thumbnail: '/bg2.jpg',
	},
	{
		title: 'Strategic IT Planning',
		link: 'https://picsum.photos/200/300?random=11',
		thumbnail: '/bg3.jpg',
	},
	{
		title: 'IT Project Management',
		link: 'https://picsum.photos/200/300?random=12',
		thumbnail: '/bg4.jpg',
	},
	{
		title: 'Tech Support and Services',
		link: 'https://picsum.photos/200/300?random=13',
		thumbnail: '/bg5.jpg',
	},
	{
		title: 'Enterprise Solutions Consulting',
		link: 'https://picsum.photos/200/300?random=14',
		thumbnail: '/bg6.jpg',
	},
	{
		title: 'Agile Methodology Experts',
		link: 'https://picsum.photos/200/300?random=15',
		thumbnail: '/bg7.jpg',
	},
];

export default function Header() {
	return (
		<div id='header'>
			<HeroParallax products={products} />
		</div>
	);
}
