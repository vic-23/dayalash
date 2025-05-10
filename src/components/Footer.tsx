import logo from '/icon.svg'
import LinkMenu from './pure/LinkMenu.tsx';
import instagram from '../assets/instagram.svg';
import tiktok from '../assets/tiktok.svg';
import derecho from '../assets/derechos.svg';

const Footer = () => {
  return (
    <footer className={' min-h-96 w-full flex flex-col items-center justify-around py-12 px-4 gap-8 bg-[var(--color-light-gray)] '} >
      <img src={logo} alt={'logo'} />
      <div className={' flex  gap-8 '} >
        <LinkMenu link={'#entrenamiento'} linkTitle={'Cursos'} style={' font-[Niramit] text-[clamp(0.875rem,4vw,3rem)] '}/>
        <LinkMenu link={'#servicios'} linkTitle={'Servicios'} style={' font-[Niramit] text-[clamp(0.875rem,4vw,3rem)] '}/>
        <LinkMenu link={'#sobreMi'} linkTitle={'Sobre Mi'} style={' font-[Niramit] text-[clamp(0.875rem,4vw,3rem)] '}/>
        <LinkMenu link={'#contacto'} linkTitle={'Contactos'} style={' font-[Niramit] text-[clamp(0.875rem,4vw,3rem)] '} />
      </div>
      <div className={' flex gap-2 '} >
        <img src={instagram} alt={'instagram'} className={' h-6 w-6 '} />
        <img src={tiktok} alt={'tiktok'} className={' h-6 w-6 '} />
      </div>
      <p className={' flex gap-2 '} >
        <img src={derecho} alt={'derecho'} className={' h-6 w-6 '} />
        2025 DayaLash. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer