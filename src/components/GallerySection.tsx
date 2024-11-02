import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";

type GalleryItem = {
  _id: string;
  title: string;
  image: any;
  description: string;
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryItem[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "gallery"]{_id, title, image, description}`)
      .then((data) => setImages(data));
  }, []);

  return (
    <section>
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img._id}>
            <img src={urlFor(img.image).width(300).url()} alt={img.title} />
            <p>{img.title}</p>
            <p>{img.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
