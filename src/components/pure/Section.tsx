type SectionProps = {
  idName: string;
}

const Section = ({ idName }:SectionProps) => {
  return (
    <section>
      <div id={idName} className={' min-h-screen flex justify-center items-center '} >This is a {idName}</div>
    </section>
  )
}

export default Section;