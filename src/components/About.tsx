import React from 'react';
import Image from 'next/image';

import aboutChild from 'public/images/about-child.jpg';

export const About = () => {
  return (
    <div className="w-full py-16 md:py-32 px-6 bg-brownPrimary">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex flex-col md:w-1/2 gap-4 text-white">
          <h2 className="text-lg md:text-2xl font-semibold text-greenPrimary">
            Quem somos?
          </h2>
          <p className="text-sm md:text-base font-light">
            O presente projeto tem por finalidade traçar e mapear o perfil
            epidemiológico das crianças entre 9 a 11 anos do município de Mauá a
            fim de compreender a prevalência de doenças crônicas nessa
            população, haja visto que a cidade não possui atualmente nenhum
            projeto de rastreamento com tal objetivo.
          </p>
          <p className="text-sm md:text-base font-light">
            O mapeamento do perfil epidemiológico das crianças de Mauá permitirá
            o desenvolvimento de ações de prevenção e controle de doenças.
          </p>
          <p className="text-sm md:text-base font-light">
            Será disponibilizado aos alunos um formulário que servirá como
            método de análise da saúde do público infantil do município,
            ressaltamos que não será obtido o nome dos menores nem de seus
            responsáveis.
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
