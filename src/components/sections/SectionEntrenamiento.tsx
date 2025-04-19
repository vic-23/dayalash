import Titles from "../pure/Titles.tsx";
import CursoCard from "../pure/CursoCard.tsx";

type SectionHomeProps = {
  idName: string;
}

const SectionHome = ({idName}:SectionHomeProps) => {
  return (
    <section id={idName} className={' h-screen w-full pt-10 px-4 '}  >
      <div className={' w-full flex flex-col items-center justify-center '} >
        <Titles title={'entrenamientos'}/>
        <h1 className="font-[Niramit-bold] text-[clamp(1.8rem,9vw,4rem)] text-center">
          Aprende en Dayalash Academy
        </h1>
        <h2 className={' flex flex-col font-[Niramit-SemiBold] text-center text-[clamp(0.950rem,3vw,5rem)] '} >
          Perfecciona tus técnicas y vuélvete toda
          <span>una experta en pestañas</span>
        </h2>
      </div>
      <div>
        <CursoCard/>
      </div>
    </section>
  )
}

export default SectionHome;