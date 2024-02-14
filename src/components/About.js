import about from '../assets/about.jpg';

function About() {
	return (
		<section className="flex justify-center py-12 mt-8 " id="about">
			<div
				data-aos="fade-up"
				className="bg-gradient-to-tl from-blue-200 to-violet-300 text-center p-14 max-sm:p-7 rounded-2xl text-xl max-sm:text-lg w-[90%] shadow-2xl h-auto ">
				<h1
					data-aos="fade-up"
					className="text-5xl mb-14 font-bold max-sm:text-3xl">
					About Me!
				</h1>

				<div
					data-aos="fade-up"
					className="flex flex-row-reverse gap-8 max-lg:block">
					<img
						src={about}
						alt="writer's face"
						className="w-1/2 h-96 object-cover rounded-2xl shadow-lg mx-auto max-lg:w-56 max-lg:h-56 max-lg:mb-8"
					/>
					<p className="w-full max-lg:text-justify">
						Halo! saya Fahmi, seorang pelajar berusia 16 tahun dari
						Kota Samarinda, Kalimantan Timur. Ketertarikan saya yang
						besar terhadap dunia teknologi dan internet mendorong
						saya untuk memasuki dunia pemrograman. Saya memulai
						perjalanan dalam pemrograman untuk memahami bagaimana
						website dibangun dan bagaimana desainnya memengaruhi
						pengalaman pengguna.
						<br />
						<br />
						Melalui keinginan untuk mengembangkan kemampuan dalam
						koding, saya ingin menjadi seorang pengembang web yang
						mampu menciptakan website menarik dan fungsional, sambil
						terus menjelajahi berbagai aspek dari dunia teknologi.
						Terima kasih telah berkunjung ke halaman ini, dan saya
						berharap dapat berbagi lebih banyak tentang perjalanan
						dan proyek-proyek saya di masa depan! 🚀🚀🚀
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
