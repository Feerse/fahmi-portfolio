import SkillsBar from './SkillsBar';
import figma from '../assets/icons/figma.png';
import html5 from '../assets/icons/html5.png';
import css3 from '../assets/icons/css3.png';
import js from '../assets/icons/js.png';
import dart from '../assets/icons/dart.png';
import java from '../assets/icons/java.png';
import mysql from '../assets/icons/mysql.png';
import php from '../assets/icons/php.png';

function Experience() {
	return (
		<section
			className="flex justify-center items-center py-12"
			id="experience">
			<div
				data-aos="fade-up"
				className=" text-center p-14 max-sm:p-7 text-xl max-sm:text-lg w-[90%]">
				<h1
					data-aos="fade-up"
					className="text-5xl mb-14 font-bold max-sm:text-3xl">
					My Experiences!
				</h1>

				<div className="flex flex-row-reverse gap-8 max-lg:block">
					<div
						className="w-full max-lg:mb-8 max-lg:text-justify"
						data-aos="fade-left">
						<p>
							Dalam perjalanan pengembangan saya, saya telah
							mempelajari berbagai bahasa pemrograman dan
							menguasai framework seperti Bootstrap dan Tailwind
							CSS. Saya fokus pada pembuatan desain menarik dengan
							tools seperti Figma, serta memperdalam pengetahuan
							dalam HTML5, CSS3, dan JavaScript. Eksplorasi saya
							juga melibatkan pengembangan aplikasi mobile dengan
							Dart dan Flutter, serta peningkatan pemahaman dalam
							pengelolaan database menggunakan PHP dan MySQL.
							<br />
							<br />
							Meskipun masih banyak yang harus dipelajari, saya
							antusias untuk terus mengembangkan diri dan
							menghadapi tantangan baru di dunia teknologi. 🌟
						</p>
					</div>
					<div className="w-full" data-aos="fade-right">
						<SkillsBar
							languageName="HTML5"
							progress="75"
							text="text-red-600"
							bg="bg-red-500"
							classAttr="max-md:mt-4"
							languageIcon={html5}
							altIcon="HTML5 logo"
						/>
						<SkillsBar
							languageName="Figma"
							progress="70"
							text="text-pink-600"
							bg="bg-pink-500"
							classAttr="mt-4"
							languageIcon={figma}
							altIcon="Figma logo"
						/>
						<SkillsBar
							languageName="CSS3"
							progress="60"
							text="text-blue-600"
							bg="bg-blue-500"
							classAttr="mt-4"
							languageIcon={css3}
							altIcon="CSS3 logo"
						/>
						<SkillsBar
							languageName="JavaScript"
							progress="45"
							text="text-yellow-600"
							bg="bg-yellow-500"
							classAttr="mt-4"
							languageIcon={js}
							altIcon="JavaScript logo"
						/>
						<SkillsBar
							languageName="Dart + Flutter"
							progress="35"
							text="text-cyan-600"
							bg="bg-cyan-500"
							classAttr="mt-4"
							languageIcon={dart}
							altIcon="Dart logo"
						/>
						<SkillsBar
							languageName="Java"
							progress="30"
							text="text-amber-600"
							bg="bg-amber-500"
							classAttr="mt-4"
							languageIcon={java}
							altIcon="Java logo"
						/>
						<SkillsBar
							languageName="MySQL"
							progress="7"
							text="text-orange-600"
							bg="bg-orange-500"
							classAttr="mt-4"
							languageIcon={mysql}
							altIcon="MySQL logo"
						/>
						<SkillsBar
							languageName="PHP"
							progress="5"
							text="text-indigo-600"
							bg="bg-indigo-500"
							classAttr="mt-4"
							languageIcon={php}
							altIcon="PHP logo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
