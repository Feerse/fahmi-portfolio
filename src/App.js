import { useEffect } from 'react';
import './css/app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Opener from './components/Opener.js';
import About from './components/About.js';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	const root = document.getElementById('root');
	root.setAttribute('class', 'bg-violet-50 text-slate-900 overflow-hidden');

	return (
		<>
			<Opener />
			<About />
			<Experience />
			<Projects />
			<Footer />
		</>
	);
}

export default App;
