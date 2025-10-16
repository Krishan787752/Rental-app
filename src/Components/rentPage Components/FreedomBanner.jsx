import React from "react";

export default function FreedomBanner({
  imageUrl,
  heading = "Your furniture, your freedom",
  titleTop = "Commit to great furniture.",
  titleBottom = "With great freedom.",
  description =
    "When your life keeps changing, why stay stuck to furniture? Keep your options open when you rent with us.",
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-16 py-8">
      <p className="text-black-200 text-lg mb-3">{heading}</p>

      <div className="relative rounded-2xl overflow-hidden shadow">
        <img
          src={imageUrl}
          alt="freedom banner"
          className="w-full h-56 md:h-72 lg:h-80 object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

        <div className="absolute inset-y-0 left-0 p-6 md:p-10 max-w-xl flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            <span className="text-teal-700">{titleTop}</span>
            <br />
            <span className="text-teal-700">{titleBottom}</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
