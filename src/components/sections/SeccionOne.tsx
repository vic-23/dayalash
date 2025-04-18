import seccionOneIMG from '../../assets/seccionOneIMG.svg';

type SeccinOneProps = {
  idName: string;
}

const SeccionOne = ({ idName }:SeccinOneProps) => {
  return (
    <section id={idName} >
      <h1> revela tu belleza <span> con pertañas </span> </h1>
      <img src={seccionOneIMG} alt={'Imagen'}/>
    </section>
  )
}

export default SeccionOne