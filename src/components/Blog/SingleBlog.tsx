import { BlogPost } from "@/types/blogPost";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const SingleBlog = ({
  blog,
  isActive,
  onMouseEnter,
}: {
  blog: BlogPost;
  isActive?: boolean;
  onMouseEnter?: () => void;
}) => {
  if (!blog) {
    console.warn("Липсват данни за блог публикацията в компонента SingleBlog.");
    return null;
  }

  const { title, mainImage, excerpt, publishedAt, slug } = blog;

  return (
    <article
      className={`
        group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800
        rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1
        ${isActive ? "ring-1 ring-gray-700 shadow-lg shadow-black/20" : ""}
      `}
      onMouseEnter={onMouseEnter}
    >
      <div className="relative h-64 overflow-hidden">
        {mainImage?.asset?.url && (
          <Image
            src={mainImage.asset.url}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-90"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={publishedAt}>
              {format(new Date(publishedAt), "dd MMM, yyyy")}
            </time>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>5 минути четене</span>
          </div>
        </div>

        <h3>
          <Link
            href={`/blogs/${slug.current}`}
            className="inline-block text-xl font-semibold text-white hover:text-gray-300 transition-colors duration-300 mb-3 sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>

        <p className="text-gray-400 text-base mb-4 line-clamp-3">{excerpt}</p>

        <Link
          href={`/blogs/${slug.current}`}
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 group/link"
        >
          <span>Прочетете повече</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 rounded-xl transition-colors duration-300 pointer-events-none"></div>
    </article>
  );
};

export default SingleBlog;
