import Project from "./Project";
import passwordGenerator from "../assets/password-generator.JPG";
import samarindaku from "../assets/samarindaku.JPG";
import todoList from "../assets/todo-list.JPG";
import bukuTamuSekolah from "../assets/buku-tamu-sekolah-tambah.JPG";

function Projects() {
  return (
    <section
      className="flex justify-center items-center py-12 mb-32"
      id="projects"
    >
      <div
        data-aos="fade-up"
        className=" text-center p-14 max-sm:p-7 text-xl max-sm:text-lg w-[90%]"
      >
        <h1
          data-aos="fade-up"
          className="text-5xl mb-24 font-bold max-sm:text-3xl"
        >
          My Projects!
        </h1>

        <div className="flex flex-col gap-36">
          <Project
            isPortrait={false}
            isReverse={false}
            img={passwordGenerator}
            title="Password Generator"
            about="Sebuah website Password Generator sederhana menggunakan HTML5, CSS3,
          JavaScript, dan framework Bootstrap."
            hrefRepo="https://github.com/Feerse/password-generator"
            isLive={true}
            hrefLive="https://password-generator-feerse.vercel.app/"
          />
          <Project
            isPortrait={false}
            isReverse={true}
            img={samarindaku}
            title="Samarindaku"
            about="Samarindaku adalah sebuah website yang berisi seputar informasi
			tentang kota Samarinda. Menggunakan HTML5, CSS3, JavaScript, dan
			framework Bootstrap."
            hrefRepo="https://github.com/Feerse/samarindaku"
            isLive={true}
            hrefLive="https://samarindaku.vercel.app/"
          />
          <Project
            isPortrait={true}
            isReverse={false}
            img={todoList}
            title="To-Do List"
            about="To-Do List adalah sebuah aplikasi daftar tugas sederhana
			menggunakan fungsi CRUD (Create, Read, Update, Delete). Aplikasi
			ini dibuat dengan menggunakan bahasa pemrograman Dart +
			framework Flutter."
            hrefRepo="https://github.com/Feerse/todo-list-app"
            isLive={false}
          />
          <Project
            isPortrait={false}
            isReverse={true}
            img={bukuTamuSekolah}
            title="Buku Tamu Sekolah"
            about="Buku Tamu Sekolah adalah sebuah aplikasi berbasis website yang berguna untuk mencatat tamu yang datang beserta keperluannya. Aplikasi ini menggunakan fungsi CRUD dan sudah terhubung dengan database. Aplikasi ini dibuat menggunakan bahasa PHP dan framework Tailwind CSS"
            hrefRepo="https://github.com/Feerse/buku-tamu-sekolah"
            isLive={false}
          />
        </div>
        <h1 data-aos="fade-up" className="text-xl my-36 text-gray-500">
          More Projects Coming Soon...
        </h1>
      </div>
    </section>
  );
}

export default Projects;
