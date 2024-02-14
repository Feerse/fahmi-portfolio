import { ReactComponent as ChevronDown } from '../chevron-down.svg';
import { ReactComponent as WavesOpacity } from '../wavesOpacity.svg';
import '../css/app.css';
import profile from '../assets/profile.jpg';

function Opener() {
	return (
		<section className="flex justify-center items-center flex-col gap-4 text-xl h-[100vh] bg-gradient-to-bl from-cyan-200 to-violet-400">
			<div className="custom-shape-divider-bottom-1707017585">
				<WavesOpacity />
			</div>
			<div
				data-aos="fade-right"
				className="flex flex-col items-center absolute">
				<a
					href="https://github.com/Feerse"
					target="_blank"
					rel="noreferrer"
					className="transition hover:scale-110 [&_img]:hover:shadow-2xl">
					<img
						src={profile}
						alt="profile"
						className="w-36 h-36 mb-4 shadow-xl rounded-full"
					/>
				</a>
				<h1 className="text-5xl font-bold my-4 max-sm:text-3xl">
					Hi, I'm Fahmi Hanif!
				</h1>
				<p className="max-sm:text-lg">Developer & UI/UX Designer</p>
			</div>
			<a
				href="#about"
				className="absolute bottom-10 animate-bounce flex items-center flex-col">
				<p className="text-sm text-gray-700">Scroll Down!</p>
				<ChevronDown className="w-14 h-14" />
			</a>
		</section>
	);
}
export default Opener;
