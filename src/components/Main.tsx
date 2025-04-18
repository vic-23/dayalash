import Section from "./pure/Section.tsx";

const Main = () => {
  return (
    <main className={' mt-15 '} >
      <Section idName={'principal'} />
      <Section idName={'entrenamiento'} />
      <Section idName={'servicios'} />
      <Section idName={'sobreMi'} />
      <Section idName={'contacto'} />
    </main>
  )
}

export default Main