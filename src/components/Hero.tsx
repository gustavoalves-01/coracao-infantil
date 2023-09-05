import React from 'react';

export const Hero = () => {
  return (
    <div className="relative h-screen w-screen bg-blend-overlay bg-gradient-to-t from-brownPrimary pt-6 px-6 pb-8 md:pb-24">
      <video
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="h-full max-w-5xl mx-auto flex flex-col justify-between">
        <h1 className="mx-auto text-greenPrimary bg-brownPrimary py-2 px-4 rounded-full bg-opacity-70">
          Missão Coração Infantil
        </h1>
        <div className="max-w-3xl flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            placeat?
          </h1>
          <h2 className="md:text-2xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            minima corrupti. Minima iusto velit omnis. Magni voluptatibus
            eligendi sed natus.
          </h2>
          <a
            href="#form"
            className="md:text-xl w-fit py-3 px-6 mt-7 bg-greenPrimary rounded-full text-brownPrimary font-bold hover:bg-lime-400 transition ease-in-out duration-200"
          >
            Entre para a missão
          </a>
        </div>
      </div>
    </div>
  );
};
