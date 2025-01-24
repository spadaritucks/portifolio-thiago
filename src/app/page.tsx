import CardComponent from "@/components/card/component";
import Navbar from "@/components/navbar/component";
import { ProjectJSON } from "@/json/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <Navbar />


      <section className="w-full h-screen flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-7xl font-bold">Full Stack Developer/Mobile</h1>
        <p className="w-2/4">Sou o Thiago Spadari, um desenvolvedor de software autônomo com mais de 2 anos de experiência em criar soluções digitais eficientes
          e personalizadas. Especializado em tecnologias como React, Next.js, Laravel e API REST, ajudo empresas e empreendedores a transformar suas
          ideias em aplicações web e mobile robustas e escaláveis.</p>
        <div className="flex justify-center items-center gap-2">
          <a href=""><Image src="/linkedin.png" width={60} height={60} alt="LinkedIn" className="rounded-2xl hover:scale-110 transition-all cursor-pointer" /></a>
          <a href=""><Image src="/whatsaap.png" width={60} height={60} alt="LinkedIn" className="rounded-2xl hover:scale-110 transition-all cursor-pointer" /></a>
          <a href=""><Image src="/github.png" width={60} height={60} alt="LinkedIn" className="rounded-2xl hover:scale-110 transition-all cursor-pointer" /></a>
        </div>
      </section>

      <section className="w-full h-screen flex flex-col justify-center items-start text-center px-36 ">
        <h1 className="text-5xl font-bold ">Serviços e Competencias</h1>
        <div className="flex items-center justify-center gap-10">

          <div className="flex flex-col items-left justify-start w-1/2 gap-4 ">

            <ul className="text-left">
              <li className="mb-2 list-disc"><span className="font-bold ">Desenvolvimento Web: </span> Criação de sites institucionais, portfólios e plataformas e-commerce utilizando as mais recentes tecnologias.</li>
              <li className="mb-2 list-disc"><span className="font-bold">Aplicações Personalizadas: </span> Desenvolvimento de aplicações web e mobile sob medida para atender às necessidades específicas dos clientes.</li>
              <li className="mb-2 list-disc"><span className="font-bold">Integração de APIs: </span>Conexão de sistemas e serviços para otimizar fluxos de trabalho e melhorar a funcionalidade das aplicações.</li>
              <li className="mb-2 list-disc"><span className="font-bold">Integração de APIs: </span> Melhoria da velocidade e eficiência das aplicações para garantir uma experiência de usuário fluida.</li>
              <li className="mb-2 list-disc"><span className="font-bold">Manutenção e Suporte: </span>Suporte contínuo e atualizações para garantir que suas soluções digitais permaneçam atualizadas e funcionais.</li>
            </ul>


            <div className="flex items-center justify-center w-full gap-2 ">
              <img className="w-12 rounded-xl" src="/html.png" alt="" />
              <img className="w-12 rounded-xl" src="/css.png" alt="" />
              <img className="w-12 rounded-xl" src="/JavascriptIcon.png" alt="" />
              <img className="w-12 rounded-xl" src="/php.png" alt="" />
              <img className="w-12 rounded-xl" src="/laravel.png" alt="" />
              <img className="w-12 rounded-xl" src="/react.png" alt="" />
              <img className="w-12 rounded-xl" src="/nextjs.png" alt="" />
              <img className="w-12 rounded-xl" src="/AngularIcon.png" alt="" />
              <img className="w-12 rounded-xl" src="/NODEJS.jpg" alt="" />
              <img className="w-12 rounded-xl" src="/JavaIcon.png" alt="" />
            </div>
          </div>

          <img src="/section-image.png" className="w-1/2" alt="" />

        </div>

      </section>

      <section className="w-full h-screen flex flex-col justify-center items-start text-center px-36 py-5 gap-10">
        <h1 className="text-5xl font-bold ">Projetos e Trabalhos</h1>
        <div className="grid grid-cols-3 gap-5 w-full max-h-screen">
          {ProjectJSON.map((project) => <CardComponent
            image={project.image}
            title={project.title}
            project_type={project.project_type}
            client={project.client}
            description={project.description}
            github={project.github}
            github2={project.github2}
            link={project.link}
          />)}
        </div>
      </section>



    </>
  );
}
