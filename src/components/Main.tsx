import Section from "./pure/Section.tsx";
import SectionHome from "./sections/SectionHome.tsx";
import SectionEntrenamiento from "./sections/SectionEntrenamiento.tsx";
import SectionServicios from "./sections/SectionServicios.tsx";

const Main = () => {
  return (
    <main className={' mt-15 pt-7 w-screen '} >
      <SectionHome idName={'home'} />
      <SectionEntrenamiento idName={'entrenamiento'}/>
      <SectionServicios idName={'servicios'} />
      <Section idName={'sobreMi'} />
      <Section idName={'contacto'} />
    </main>
  )
}

export default Main