import Section from "./pure/Section.tsx";
import SectionHome from "./sections/SectionHome.tsx";
import SectionEntrenamiento from "./sections/SectionEntrenamiento.tsx";

const Main = () => {
  return (
    <main className={' mt-15 pt-7 '} >
      <SectionHome idName={'home'} />
      <SectionEntrenamiento idName={'entrenamiento'}/>
      <Section idName={'servicios'} />
      <Section idName={'sobreMi'} />
      <Section idName={'contacto'} />
    </main>
  )
}

export default Main