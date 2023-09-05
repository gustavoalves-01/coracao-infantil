import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-lime-500 p-6 w-full flex">
      <div className="max-w-5xl w-full mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        <h1 className="bg-lime-400 text-brownPrimary py-2 px-4 rounded-full">
          Missão Coração Infantil
        </h1>
        <p className="text-brownPrimary text-sm">
          &copy; {currentYear}. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};
