interface Services {
  id: number;
  title: string;
  description: string;
  icon: string;
}

type ServicesCardProps = {
  services: Services;
}

const ServicesCard = ({services}:ServicesCardProps) => {
  return (
    <div className={' w-[clamp(20.25rem,9vw,31.5rem)] h-[clamp(18.625rem,9vh,23.5rem)] flex flex-col items-center justify-center gap-2 bg-[var(--color-very-light-gold)] border-[var(--color-gold)] border-1 shadow-xl mx-4 '}>
      <img src={services.icon} alt={'icon'} className={' w-28 h-28 '}  />
      <h1 className={' font-[Niramit-bold] text-[clamp(2rem,1vw,2.5rem)] text-center '} >{services.title}</h1>
      <p>{services.description}</p>
    </div>
  )
}

export default ServicesCard