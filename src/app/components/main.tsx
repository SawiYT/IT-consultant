// pages/Main.js
'use client';
import React from 'react';
import { Carousel, Card } from '@/app/components/ui/apple-cards-carousel'; // Adjust path as necessary
import { data } from '../../../settings/data'; // Adjust the path as necessary

export default function Main() {
	const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

	return (
		<div id='find-more' className='w-full h-full py-20'>
			<h2 className='max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
				Get to know your IT consultant
			</h2>
			<Carousel items={cards} />
		</div>
	);
}
