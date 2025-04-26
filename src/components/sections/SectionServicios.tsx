import Titles from "../pure/Titles.tsx";

type SectionServiciosProps = {
  idName: string,
}

const SectionServicios = ({idName}:SectionServiciosProps) => {
  return (
    <section id={idName} className={' h-screen w-full pt-10 '} >
      <div className={' flex flex-col items-center '} >
        <Titles title={'Servicios que ofrezco'} />
        <h1 className={' font-[Niramit-bold] text-[clamp(1.8rem,9vw,4rem)] text-center '} >Tu mirada, tu estilo</h1>
        <h2 className={' flex flex-col items-center font-[Corinthia] text-[clamp(1.75rem,6vw,4rem)] text-[var(--color-gold)] '} >Aquí encuentras la técnica <span>perfecta para ti</span> </h2>
      </div>
    </section>
  )
}

export default SectionServicios