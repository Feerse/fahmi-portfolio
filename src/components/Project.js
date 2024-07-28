import { ReactComponent as Play } from "../play.svg";
import { ReactComponent as Repository } from "../repository.svg";

function Project(props) {
  return (
    <div
      className={`flex ${
        props.isReverse ? "flex-row-reverse" : "flex-row"
      } gap-8 items-center max-lg:flex-col`}
    >
      <img
        src={props.img}
        alt={props.title}
        data-aos="fade-right"
        className={`${
          props.isPortrait
            ? "w-1/3 max-md:w-1/2 max-sm:w-[60%]"
            : "w-1/2 max-lg:w-full"
        } shadow-xl`}
      />
      <div className="w-full text-justify" data-aos="fade-left">
        <h1 className="text-4xl max-sm:text-2xl pb-8 max-lg:pb-4 font-bold">
          {props.title}
        </h1>
        <p>{props.about}</p>
        <a
          href={props.hrefRepo}
          target="_blank"
          rel="noreferrer"
          className="text-violet-50 bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mt-4 inline-flex gap-2 items-center"
        >
          <Repository />
          View Repository
        </a>
        {props.isLive && (
          <a
            href={props.hrefLive}
            target="_blank"
            rel="noreferrer"
            className="text-violet-50 bg-gradient-to-bl from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 font-medium rounded-lg text-sm px-4 py-2 me-2 mt-4 inline-flex gap-2 items-center z-10"
          >
            <Play />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
