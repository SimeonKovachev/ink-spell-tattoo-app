import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";

type Service = {
  _id: string;
  name: string;
  description: string;
  image: any;
};

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "service"]{_id, name, description, image}`)
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="bg-secondary text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white text-secondary rounded-lg shadow-lg p-6 text-center"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
