import { HeartHandshake } from 'lucide-react';
import React from 'react';

export const Form = () => {
  return (
    <div id="form" className="bg-greenPrimary px-6 py-8 w-full flex flex-col">
      <div className="max-w-2xl w-full gap-6 mx-auto flex">
        <HeartHandshake className="hidden md:flex text-green-600" size={96} />
        <div className="flex flex-col gap-2 text-brownPrimary">
          <h1 className="font-bold text-2xl w-fit">Faça parte da missão</h1>
          <h2 className="font-light text-lg w-fit">
            Se você trabalha em uma escola, ajude nossa missão preenchendo o
            formulário&nbsp;
            <a
              href="https://forms.gle/VuqKFarebR11q1Eu8"
              className="bg-lime-600 hover:bg-lime-500 px-2 py-1 rounded-xl text-white"
            >
              deste link
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};
