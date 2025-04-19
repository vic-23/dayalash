import Section from "./pure/Section.tsx";
import SectionHome from "./sections/SectionHome.tsx";

const Main = () => {
  return (
    <main className={' mt-15 pt-7 '} >
      <SectionHome idName={'home'} />
      <Section idName={'entrenamiento'} />
      <Section idName={'servicios'} />
      <Section idName={'sobreMi'} />
      <Section idName={'contacto'} />
    </main>
  )
}

export default Main