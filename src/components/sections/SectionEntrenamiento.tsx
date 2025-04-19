type SectionHomeProps = {
  idName: string;
}

const SectionHome = ({idName}:SectionHomeProps) => {
  return (
    <section id={idName} >
      This is the section entrenamiento
    </section>
  )
}

export default SectionHome;