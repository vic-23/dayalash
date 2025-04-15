type MainProps = {
  idMain: string;
}

const Main = ({idMain}:MainProps) => {
  return (
    <main id={idMain} >This is Component Main</main>
  )
}

export default Main