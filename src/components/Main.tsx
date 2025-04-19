import Section from "./pure/Section.tsx";
import SeccionOne from "./sections/SeccionOne.tsx";

const Main = () => {
  return (
    <main className={' mt-15 pt-7 '} >
      <SeccionOne idName={'principal'} />
      <Section idName={'entrenamiento'} />
      <Section idName={'servicios'} />
      <Section idName={'sobreMi'} />
      <Section idName={'contacto'} />
    </main>
  )
}

export default Main