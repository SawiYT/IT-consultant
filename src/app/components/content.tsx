// components/Content.js
import React from 'react';
import { contentMap } from '../../../settings/data'; // Adjust this path if needed

interface ContentProps {
	category: keyof typeof contentMap;
}

const Content: React.FC<ContentProps> = ({ category }) => {
	const { text, imageSrc } = contentMap[category];

	return (
		<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
			<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
				<span className='font-bold text-neutral-700 dark:text-neutral-200'>{category}</span> {text}
			</p>
			<img src={imageSrc} alt={category} className='w-full h-auto mt-4 rounded-lg object-cover' />
		</div>
	);
};

export default Content;
