// settings/data.js
import React from 'react';
import Content from '@/app/components/content'; // Adjust this path if needed

// Define the content map
const contentMap = {
	'Tailored Solutions': {
		text: 'Customized IT strategies and solutions that align perfectly with the specific needs and goals of your business.',
		imageSrc: '/p1.jpg',
	},
	'Expert Guidance': {
		text: 'Access to experienced consultants who can provide insights and advice based on industry best practices and the latest technological advancements.',
		imageSrc: '/p2.jpg',
	},
	'Cost Efficiency': {
		text: 'Reduction in IT-related costs through optimized resource allocation and effective management of technology investments.',
		imageSrc: '/p3.jpg',
	},
	'Enhanced Security': {
		text: 'Improved cybersecurity measures to protect sensitive data and prevent potential threats and breaches.',
		imageSrc: '/p4.jpg',
	},
	'Increased Productivity': {
		text: 'Streamlined processes and systems that boost overall efficiency and productivity within your organization.',
		imageSrc: '/p5.jpg',
	},
	'Proactive Support': {
		text: 'Ongoing support and maintenance to identify and resolve issues before they impact your operations.',
		imageSrc: '/p6.jpg',
	},
};

// Define the type for contentMap
export type ContentMap = typeof contentMap;

// Define the data array
const data = [
	{
		category: 'Tailored Solutions',
		title: 'Custom journey, personalized path.',
		src: '/p1.jpg',
		content: <Content category='Tailored Solutions' />,
	},
	{
		category: 'Expert Guidance',
		title: 'Broad perspective, high vantage point.',
		src: '/p2.jpg',
		content: <Content category='Expert Guidance' />,
	},
	{
		category: 'Cost Efficiency',
		title: 'Clear and balanced view.',
		src: '/p3.jpg',
		content: <Content category='Cost Efficiency' />,
	},
	{
		category: 'Enhanced Security',
		title: 'Strong protection and safety.',
		src: '/p4.jpg',
		content: <Content category='Enhanced Security' />,
	},
	{
		category: 'Increased Productivity',
		title: 'New beginnings, increased energy.',
		src: '/p5.jpg',
		content: <Content category='Increased Productivity' />,
	},
	{
		category: 'Proactive Support',
		title: 'Ongoing guidance and help.',
		src: '/p6.jpg',
		content: <Content category='Proactive Support' />,
	},
];

export { data, contentMap };
