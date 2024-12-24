"use client";

import BookingForm from "./BookingForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function BookNow() {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full bg-dark"></div>
      <div
        className="absolute left-0 top-0 -z-[1] h-1/2 w-full lg:h-[45%] xl:h-1/2"
        style={{ backgroundColor: "#1c1231" }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-start lg:items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-[570px] mx-auto lg:mx-0">
              <div className="mb-12">
                <span className="block text-accent-purple font-semibold mb-4">
                  GET IN TOUCH
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let&apos;s Discuss Your Ideas
                </h2>
                <p className="text-gray-400 text-lg">
                  Book a free 30-minute consultation to discuss your tattoo
                  ideas and get all your questions answered.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent-purple mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Our Studio
                    </h3>
                    <a
                      href="https://maps.app.goo.gl/1g2w9ofvfqekiYKb8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 underline hover:text-accent-purple"
                    >
                      Pleven Center,
                      <br />
                      ul. &quot;Vasil Aprilov&quot; 48
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent-purple mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:support@ink-spell.com"
                      className="text-gray-400 underline hover:text-accent-purple"
                    >
                      support@ink-spell.com
                    </a>
                    <br />
                    <a
                      href="mailto:iva.lazarova.draws@gmail.com"
                      className="text-gray-400 underline hover:text-accent-purple"
                    >
                      iva.lazarova.draws@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent-purple mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Call Us
                    </h3>
                    <a
                      href="tel:+359894300545"
                      className="text-gray-400 underline hover:text-accent-purple"
                    >
                      +359 89 430 0545
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-dark-2 rounded-2xl p-6 md:p-10 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Book Your Free Consultation
              </h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
