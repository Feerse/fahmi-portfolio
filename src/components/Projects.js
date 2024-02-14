import { ReactComponent as Repository } from '../repository.svg';
import { ReactComponent as Play } from '../play.svg';
import passwordGenerator from '../assets/password-generator.JPG';
import samarindaku from '../assets/samarindaku.JPG';
import todoList from '../assets/todo-list.JPG';

function Projects() {
	return (
		<section
			className="flex justify-center items-center py-12"
			id="projects">
			<div
				data-aos="fade-up"
				className=" text-center p-14 max-sm:p-7 text-xl max-sm:text-lg w-[90%]">
				<h1
					data-aos="fade-up"
					className="text-5xl mb-24 font-bold max-sm:text-3xl">
					My Projects!
				</h1>

				<div className="flex flex-col gap-36">
					<div className="flex flex-row gap-8 items-center max-lg:flex-col">
						<img
							src={passwordGenerator}
							alt="Password Generator"
							data-aos="fade-right"
							className="w-1/2 max-lg:w-full shadow-xl"
						/>
						<div
							className="w-full text-justify"
							data-aos="fade-left">
							<h1 className="text-4xl max-sm:text-2xl pb-8 max-lg:pb-4 font-bold">
								Password Generator
							</h1>
							<p>
								Sebuah website Password Generator sederhana
								menggunakan HTML5, CSS3, JavaScript, dan
								framework Bootstrap.
							</p>
							<a
								href="https://github.com/Feerse/password-generator"
								target="_blank"
								rel="noreferrer"
								className="text-violet-50 bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mt-4 inline-flex gap-2 items-center">
								<Repository />
								View Repository
							</a>
							<a
								href="https://password-generator-feerse.vercel.app/"
								target="_blank"
								rel="noreferrer"
								className="text-violet-50 bg-gradient-to-bl from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 font-medium rounded-lg text-sm px-4 py-2 me-2 mt-4 inline-flex gap-2 items-center">
								<Play />
								Live Demo
							</a>
						</div>
					</div>
					<div className="flex flex-row-reverse gap-8 items-center max-lg:flex-col">
						<img
							src={samarindaku}
							alt="Samarindaku"
							data-aos="fade-left"
							className="w-1/2 max-lg:w-full shadow-xl"
						/>
						<div
							className="w-full text-justify"
							data-aos="fade-right">
							<h1 className="text-4xl max-sm:text-2xl pb-8 max-lg:pb-4 font-bold">
								Samarindaku
							</h1>
							<p>
								Samarindaku adalah sebuah website yang berisi
								seputar informasi tentang kota Samarinda.
								Menggunakan HTML5, CSS3, JavaScript, dan
								framework Bootstrap.
							</p>
							<a
								href="https://github.com/Feerse/samarindaku"
								target="_blank"
								rel="noreferrer"
								className="text-violet-50 bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mt-4 inline-flex gap-2 items-center">
								<Repository />
								View Repository
							</a>
							<a
								href="https://samarindaku.vercel.app/"
								target="_blank"
								rel="noreferrer"
								className="text-violet-50 bg-gradient-to-bl from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 font-medium rounded-lg text-sm px-4 py-2 me-2 mt-4 inline-flex gap-2 items-center">
								<Play />
								Live Demo
							</a>
						</div>
					</div>
					<div className="flex flex-row gap-8 items-center max-lg:flex-col">
						<img
							src={todoList}
							alt="To-Do List"
							data-aos="fade-right"
							className="w-1/3 max-md:w-1/2 max-sm:w-[60%] shadow-xl"
						/>
						<div
							className="w-full text-justify lg:pl-20"
							data-aos="fade-left">
							<h1 className="text-4xl max-sm:text-2xl pb-8 max-lg:pb-4 font-bold">
								To-Do List
							</h1>
							<p>
								To-Do List adalah sebuah aplikasi daftar tugas
								sederhana menggunakan fungsi CRUD (Create, Read,
								Update, Delete). Aplikasi ini dibuat dengan
								menggunakan bahasa pemrograman Dart + framework
								Flutter.
							</p>
							<a
								href="https://github.com/Feerse/todo-list-app"
								target="_blank"
								rel="noreferrer"
								className="text-violet-50 bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mt-4 inline-flex gap-2 items-center">
								<Repository />
								View Repository
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
