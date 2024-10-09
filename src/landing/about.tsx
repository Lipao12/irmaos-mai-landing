import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-24 ">
      <div className="container mx-auto px-6 space-y-12">
        <div className="text-start mb-12 color-black">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Sobre Nós
          </h2>
          <p className="text-xl text-gray-600">
            A Irmãos Mai tem mais de 10 anos de experiência no setor de
            manutenção industrial, atendendo empresas de todos os portes no polo
            moveleiro de Linhares e região. Nosso foco é garantir a operação
            eficiente de seus equipamentos, através de soluções técnicas
            avançadas e atendimento de excelência.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
          <div className="">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              O Que Fazemos
            </h3>
            <p className="text-lg text-gray-700">
              Atuamos em diversos segmentos da indústria, oferecendo serviços de
              manutenção preventiva, reparos, instalação de equipamentos e
              consultoria técnica. Nossa missão é proporcionar aos nossos
              clientes tranquilidade e confiança, sabendo que suas operações
              estão em boas mãos.
            </p>
          </div>

          <div className="">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Nossa Abordagem
            </h3>
            <p className="text-lg text-gray-700">
              Acreditamos na inovação e no uso das melhores tecnologias
              disponíveis, sempre buscando otimizar processos e reduzir custos
              operacionais. Nossa abordagem personalizada garante que cada
              cliente receba um serviço adaptado às suas necessidades
              específicas.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Confie em nós para ser seu parceiro em manutenção industrial de
            excelência.
          </p>
        </div>
      </div>
    </section>
  );
};
