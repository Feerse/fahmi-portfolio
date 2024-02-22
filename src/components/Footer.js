import { ReactComponent as WavesFooter } from '../wavesFooter.svg';
import { ReactComponent as Github } from '../github.svg';
import { ReactComponent as Instagram } from '../instagram.svg';
import { ReactComponent as Whatsapp } from '../whatsapp.svg';

function Footer() {
	const iconSize = '24px';

	return (
		<>
			<footer className="relative">
				<div className="rotate-180 absolute w-full h-full bottom-80">
					<WavesFooter />
				</div>
				<div className="bg-slate-900 text-violet-200 flex flex-col justify-center items-center pt-12 pb-8">
					<h1 className="text-3xl pb-6 pt-12">Contact Me!</h1>
					<div className="flex gap-4">
						<a
							href="https://github.com/Feerse"
							target="_blank"
							rel="noreferrer">
							<Github width={iconSize} height={iconSize} />
						</a>
						<a
							href="https://www.instagram.com/fahmzz_/"
							target="_blank"
							rel="noreferrer">
							<Instagram width={iconSize} height={iconSize} />
						</a>
						<a
							href="http://wa.me/6285249210677"
							target="_blank"
							rel="noreferrer">
							<Whatsapp width={iconSize} height={iconSize} />
						</a>
					</div>
					<p className="font-serif text-xs text-gray-400 mt-24">
						© 2024 Fahmi Hanif
					</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
