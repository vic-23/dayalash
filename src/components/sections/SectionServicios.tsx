import Titles from "../pure/Titles.tsx";
import {servises} from "../../data/servises.ts";
import ServicesCard from "../pure/ServicesCard.tsx";
import star from "../../assets/star.svg";

interface Servises {
  id: number;
  title: string;
  description: string;
  icon: string;
}

type SectionServiciosProps = {
  idName: string,
}

const SectionServicios = ({idName}:SectionServiciosProps) => {
  return (
    <section id={idName} className={' relative w-full py-10 border-[var(--color-gold)] border-b-2 '} >
      <div className={' flex flex-col items-center '} >
        <Titles title={'Servicios que ofrezco'} />
        <h1 className={' font-[Niramit-bold] text-[clamp(1.8rem,9vw,4rem)] text-center '} >Tu mirada, tu estilo</h1>
        <h2 className={' flex flex-col items-center font-[Corinthia] text-[clamp(1.75rem,6vw,4rem)] text-[var(--color-gold)] '} >Aquí encuentras la técnica <span>perfecta para ti</span> </h2>
      </div>

      <div className={' overflow-x-auto py-8 scrollbar-hide '} >
        <div className={' inline-flex w-max '} >
          {servises.map((servise: Servises) => (
            <ServicesCard key={servise.id} services={servise} />
          ))}
        </div>
      </div>
      <img src={star} alt={'star'} className={' absolute -bottom-4 left-3 w-8 h7 '} />
    </section>
  )
}

export default SectionServicios