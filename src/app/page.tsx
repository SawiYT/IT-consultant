import Image from 'next/image';
import Head from 'next/head'; // Importuj komponent Head
import Header from './components/header';
import Navbar from './components/navbar';
import Main from './components/main';
import GlobeDemo from './components/globe-section';
import Footer from './components/footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<Main />
			<GlobeDemo />
			<Footer />
		</>
	);
}
