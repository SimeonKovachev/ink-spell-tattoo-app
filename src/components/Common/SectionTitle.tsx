const SectionTitle = ({
  subtitle,
  title,
  paragraph,
  width = "635px",
  center,
}: {
  subtitle?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div
        className={`wow fadeInUp w-full px-4 ${
          center ? "mx-auto text-center" : ""
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        {subtitle && (
          <span className="inline-block uppercase px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 font-semibold text-sm mb-6">
            {subtitle}
          </span>
        )}
        <h2 className="text-4xl md:text-[40px] lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-dark-6">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
