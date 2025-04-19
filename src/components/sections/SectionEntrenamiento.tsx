import Titles from "../pure/Titles.tsx";

type SectionHomeProps = {
  idName: string;
}

const SectionHome = ({idName}:SectionHomeProps) => {
  return (
    <section id={idName} className={' h-screen w-full pt-10 '}  >
      <div className={' w-full flex items-center justify-center '} >
        <Titles title={'entrenamientos'}/>
      </div>
    </section>
  )
}

export default SectionHome;