type SectionProps = {
  idName: string;
}

const Section = ({ idName }:SectionProps) => {
  return (
    <section id={idName} >This is a section</section>
  )
}

export default Section;