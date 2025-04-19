import seccionOneIMG from '../../assets/seccionOneIMG.svg';
import star from '../../assets/star.svg'

type SeccinOneProps = {
  idName: string;
}

const SectionHome = ({ idName }:SeccinOneProps) => {
  return (
    <section id={idName} className="relative z-0 h-screen flex flex-col border-b-2 border-(--color-gold)">
      <div className="px-4 mb-4">
        <h1 className="flex flex-col gap-3 font-[Niramit-bold] text-[clamp(2.3rem,11vw,4rem)] leading-none">
          Revela tu belleza <span className="font-[Corinthia] text-[var(--color-gold)]">con pestañas</span>
        </h1>
      </div>

      <div className="flex-1 min-h-0">
        <div className={' w-full h-full bg-no-repeat bg-cover bg-position-(--mobile-bg-position)  '} style={{ backgroundImage: `url(${seccionOneIMG})` }} ></div>
      </div>

      <img src={star} alt="star" className="absolute -bottom-3.5 right-3 w-8 h-7" />
    </section>
  )
}

export default SectionHome