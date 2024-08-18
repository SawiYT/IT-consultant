import React from 'react';

const Footer = () => {
	// Get the current year
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-black text-white'>
			{/* Separator */}
			<div className='w-full border-t border-white/[0.1] my-4' />

			{/* Content */}
			<div className='max-w-screen-xl mx-auto p-4'>
				<div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-6 md:space-y-0'>
					{/* Left Section */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-lg font-semibold'>Techlynx</h2>
						<p className='text-sm mb-2'>Providing IT Consulting Services</p>
						<p className='text-sm'>&copy; {currentYear} Techlynx. All rights reserved.</p>
					</div>

					{/* Right Section */}
					<div className='flex-1 text-center md:text-right'>
						<h3 className='text-md font-medium mb-2'>Contact Us</h3>
						<p className='text-sm mb-1'>123 Tech Street, IT City, TX 12345</p>
						<p className='text-sm mb-1'>
							Email:{' '}
							<a href='mailto:info@techlynx.com' className='hover:underline'>
								info@techlynx.com
							</a>
						</p>
						<p className='text-sm'>
							Phone:{' '}
							<a href='tel:+1234567890' className='hover:underline'>
								+1 234 567 890
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
