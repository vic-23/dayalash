type TitlesProps = {
  title: string;
}

const Titles = ({title}:TitlesProps) => {
  return (
    <h1 className={' capitalize font-[Niramit] tracking-widest text-[18px] border-b-2 font-normal border-(--color-gold) '} >{title}</h1>
  )
}

export default Titles