import SectionHome from "./sections/SectionHome.tsx";
import SectionEntrenamiento from "./sections/SectionEntrenamiento.tsx";
import SectionServicios from "./sections/SectionServicios.tsx";
import SectionSobreMi from "./sections/SectionSobreMi.tsx";
import SectionContacto from "./sections/SectionContacto.tsx";

const Main = () => {
  return (
    <main className={' mt-15 pt-7 w-screen scrollbar-none '} >
      <SectionHome idName={'home'} />
      <SectionEntrenamiento idName={'entrenamiento'}/>
      <SectionServicios idName={'servicios'} />
      <SectionSobreMi idName={'sobreMi'} />
      <SectionContacto idName={'contacto'} />
    </main>
  )
}

export default Main