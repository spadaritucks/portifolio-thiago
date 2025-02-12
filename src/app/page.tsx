"use client"
import CardComponent from "@/components/card/component";
import Navbar from "@/components/navbar/component";
import { ProjectJSON } from "@/json/projects";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState } from "react";
import { motion } from "motion/react"


export default function Home() {

  const projectsOrdened = ProjectJSON.sort((a, b) => {
    if (a.project_type === 'Empresarial' && b.project_type !== 'Empresarial') return -1; // 'a' vem primeiro
    if (a.project_type !== 'Empresarial' && b.project_type === 'Empresarial') return 1;  // 'b' vem primeiro
    return 0; // mantém a ordem original se ambos forem iguais
  })

  //Paginação dos Projetos
  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;


  const ProjectsPaginated = projectsOrdened.slice(indexOfFirstProject, indexOfLastProject)



  const totalPages = Math.ceil(ProjectJSON.length / itemsPerPage);


  return (
    <>

      <Navbar />


      <motion.section
        id="menu"
        className="w-full h-[120vh] lg:h-screen flex flex-col justify-center items-center text-center gap-5 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">Full Stack Developer/Mobile</h1>
        <p className=" text-sm md:text-xl w-3/4 lg:w-2/4">Sou o Thiago Spadari, um desenvolvedor de software autônomo com mais de 2 anos de experiência em criar soluções digitais eficientes
          e personalizadas. Especializado em tecnologias como React, Next.js, Laravel e API REST, ajudo empresas e empreendedores a transformar suas
          ideias em aplicações web e mobile robustas e escaláveis.</p>
        <div className="flex justify-center items-center gap-2">
          <a href="https://www.linkedin.com/in/thiago-spadari-41b95120b"><Image src="/linkedin.png" width={60} height={60} alt="LinkedIn" className="rounded-2xl hover:scale-110 transition-all cursor-pointer" /></a>
          <a href="https://wa.me/5511960599793"><Image src="/whatsaap.png" width={60} height={60} alt="LinkedIn" className="rounded-2xl hover:scale-110 transition-all cursor-pointer" /></a>
          <a href="https://github.com/spadaritucks"><Image src="/github.png" width={60} height={60} alt="LinkedIn" className="rounded-2xl hover:scale-110 transition-all cursor-pointer" /></a>
        </div>
      </motion.section>

      <motion.section
        id="sobre-mim"
        className="w-full h-[170vh] lg:h-screen flex flex-col justify-start items-center lg:items-start text-center px-20 lg:px-36 gap-5 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1 className=" text-3xl lg:text-5xl font-bold ">Serviços e Competencias</h1>
        <div className="flex flex-col max-h-screen w-full lg:flex-row lg:items-center lg:justify-center gap-10">

          <motion.div
            className="flex flex-col items-center justify-center lg:items-left lg:justify-start w-full lg:w-1/2 gap-4 "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >

            <ul className="text-center lg:text-left">
              <li className="mb-2 list-disc"><span className="font-bold ">Desenvolvimento Web: </span> Criação de sites institucionais, portfólios e plataformas e-commerce utilizando as mais recentes tecnologias.</li>
              <li className="mb-2 list-disc"><span className="font-bold">Aplicações Personalizadas: </span> Desenvolvimento de aplicações web e mobile sob medida para atender às necessidades específicas dos clientes.</li>
              <li className="mb-2 list-disc"><span className="font-bold">Integração de APIs: </span>Conexão de sistemas e serviços para otimizar fluxos de trabalho e melhorar a funcionalidade das aplicações.</li>
              <li className="mb-2 list-disc"><span className="font-bold">Otimização de Performance: </span> Melhoria da velocidade e eficiência das aplicações para garantir uma experiência de usuário fluida.</li>
              <li className="mb-2 list-disc"><span className="font-bold">Manutenção e Suporte: </span>Suporte contínuo e atualizações para garantir que suas soluções digitais permaneçam atualizadas e funcionais.</li>
            </ul>


            <div className=" grid grid-cols-5 grid-rows-2 lg:flex lg:items-center lg:justify-center w-full gap-2 ">
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
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <img src="/section-image.png" className="w-full" alt="" />
          </motion.div>

        </div>

      </motion.section>

      <motion.section
        id="projetos"
        className="w-full  max-h-[600vh] md:max-h-[300vh] lg:max-h-[250vh] flex flex-col justify-start items-center lg:items-start text-center py-5 gap-10 px-5 lg:px-36"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1 className="text-5xl font-bold ">Projetos e Trabalhos</h1>
        <ul className="text-left">
          <li><span className="font-bold">Projetos Empresariais :</span> Projetos destinados a empresas e clientes (Repositorio do GITHUB não disponivel por questão confidencialidade)</li>
          <li><span className="font-bold">Projetos Pessoais: </span>Projetos realizados com o foco no aperfeiçoamento tecnico e aprendizado com novas ferramentas</li>
        </ul>
        <div className=" flex flex-col items-center justify-start gap-5 w-full md:grid md:grid-cols-2 xl:grid 2xl:grid-cols-3 ">
          {ProjectsPaginated.map((project) => <CardComponent
            key={project.id}
            image={project.image}
            title={project.title}
            project_type={project.project_type}
            languagens={project.languagens}
            client={project.client}
            description={project.description}
            github={project.github}
            github2={project.github2}
            link={project.link}
          />)}



        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>


      </motion.section>



    </>
  );
}
