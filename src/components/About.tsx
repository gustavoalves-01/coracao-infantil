import React from 'react';
import Image from 'next/image';

import aboutChild from 'public/images/about-child.jpg';

export const About = () => {
  return (
    <div className="w-full py-16 md:py-32 px-6 bg-brownPrimary">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex flex-col md:w-1/2 gap-4">
          <h2 className="text-lg md:text-2xl font-semibold text-greenPrimary">
            Quem somos?
          </h2>
          <p className="text-sm md:text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            rerum! Quasi ipsa, obcaecati exercitationem aliquam perferendis
            minus harum, laudantium quisquam dolorem eligendi, suscipit nostrum
            voluptatem porro quos nesciunt ipsam accusamus.
          </p>
          <p className="text-sm md:text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quo laudantium eum exercitationem deserunt accusamus quidem
            laboriosam earum nesciunt doloremque. Quam nobis nam veniam esse id
            iste dolores quae commodi!
          </p>
          <p className="text-sm md:text-base font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fugiat harum atque porro, officiis veritatis tenetur aspernatur quo
            delectus facere ab voluptate obcaecati eos, quia hic at. Illum,
            consequatur! Modi.
          </p>
        </div>
        <Image
          src={aboutChild}
          alt="criança brincando no balanço"
          className="w-full md:w-[500px] h-[400px] md:h-[500px] object-cover rounded-3xl object-top"
        />
      </div>
    </div>
  );
};
