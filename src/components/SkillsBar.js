function SkillsBar(props) {
	return (
		<div className={`${props.classAttr}`}>
			<div className={`${props.text} flex justify-between mb-1`}>
				<div className="flex items-center gap-1">
					<img
						src={props.languageIcon}
						alt={props.altIcon}
						className="w-5 h-5 object-scale-down"
					/>
					<span className="text-base font-medium ml-2">
						{props.languageName}
					</span>
				</div>
				<span className="text-sm font-medium">{props.progress}%</span>
			</div>
			<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-slate-700">
				<div
					className={`${props.bg} h-2.5 rounded-full`}
					style={{ width: `${props.progress}%` }}></div>
			</div>
		</div>
	);
}

export default SkillsBar;
