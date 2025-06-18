// "use client";

// import { useState } from "react";
// import { BlogPost } from "@/types/blogPost";
// import { ArrowRight } from "lucide-react";
// import SingleBlog from "../Blog/SingleBlog";
// import Button from "../Common/Button";
// import SectionTitle from "../Common/SectionTitle";

// export default function HomeBlogSectionClient({
//   posts,
// }: {
//   posts: BlogPost[];
// }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   if (posts.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   return (
//     <section className="py-12 md:py-24 lg:py-28 bg-gradient-to-b from-dark to-black overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute -top-40 left-0 w-[600px] h-[600px]">
//           <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-600/20 blur-[120px] animate-pulse"></div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <SectionTitle
//           subtitle="НАШИТЕ ПОСЛЕДНИ ПУБЛИКАЦИИ"
//           title="Разгледайте нашия блог"
//           paragraph="Открийте най-новите тенденции, вдъхновения и истории от света на
//             татуировките и изкуството."
//           center
//         />

//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post, index) => (
//             <SingleBlog
//               key={post.slug.current}
//               blog={post}
//               isActive={index === activeIndex}
//               onMouseEnter={() => setActiveIndex(index)}
//             />
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <Button
//             text="Вижте всички публикации"
//             type="outlined"
//             responsiveSize={{ sm: "sm", md: "md", lg: "md" }}
//             icon={<ArrowRight size={18} />}
//             navigateTo="/blogs"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
