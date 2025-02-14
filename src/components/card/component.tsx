
import { motion } from "motion/react"
interface ProjectProps {
    image: string
    title: string
    project_type: string;
    client?: string;
    languagens: string
    description: string
    github?: string;
    github2?: string;
    link?: string;
}



export default function CardComponent({ image, title, project_type, languagens, description, client, github, github2, link }: ProjectProps) {

    return (
        <motion.div
            className="w-[304px] h-[700px] rounded-2xl flex flex-col items-start justify-start shadow-2xl shadow-black"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <img className="w-[304px] h-[134px]  rounded-t-2xl" src={image} alt="" />
            <div className="flex flex-col items-start justify-start text-left px-4 py-8 gap-2">
                <h3 className=" text-2xl font-bold">{title}</h3>
                <p className="text-sm"><span className="font-bold">Tipo do Projeto:</span> {project_type}</p>
                <p className="text-sm"><span className="font-bold">Ferramentas:</span> {languagens}</p>
                {client ? <p className="text-sm"><span className="font-bold">Cliente:</span> {client}</p> : ""}
                <p className="text-sm"><span className="font-bold">Descrição :</span> {description}</p>
                <div className="flex items-start justify-start gap-3">
                    {github ? <a href={github}><img className="w-10 h-10 rounded-xl hover:scale-110 transition-all" src="/github.png" alt="" /></a> : ""}
                    {github2 ? <a href={github2}><img className="w-10 h-10 rounded-xl hover:scale-110 transition-all" src="/github.png" alt="" /></a> : ""}
                    {link ? <a href={link}><img className="w-10 h-10 rounded-xl hover:scale-110 transition-all" src="/link.jpg" alt="" /></a> : ""}
                </div>
            </div>

        </motion.div>


    )
}