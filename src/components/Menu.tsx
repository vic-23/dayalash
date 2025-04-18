import LinkMenu from "./pure/LinkMenu.tsx";
import iconMenu from '../assets/menu.svg'
import {useState, useEffect} from "react";
import iconClose from "../assets/close.svg";
import backgroundmobile from '../assets/backgroundmobile.svg'
import Logo from '../assets/logo.svg'
import star from "../assets/star.svg"
import {Events, scrollSpy} from "react-scroll";

const Nav = () => {
  const [hidden, setHidden] = useState(true);
  const [activeLink, setActiveLink] = useState('principal'); // Estado para el link activo

  const changeState = () => {
    setHidden(!hidden);
  }

  useEffect(() => {
    const img = new Image();
    img.src = backgroundmobile;

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to: string) => {
    setActiveLink(to);
    console.log(`Sección activa: ${to}`);
  };

  return (
    <nav className={'absolute right-0 z-10'}>
      {hidden ? (
        <img src={iconMenu} alt={'icon'} className={'h-10 w-10'} onClick={changeState} />
      ) : (
        <div className={"fixed inset-0 bg-center bg-cover flex flex-col"} style={{backgroundImage: `url(${backgroundmobile})`}}>
          <div className={'relative flex flex-row-reverse justify-between px-4 py-2 border-b-2 border-(--color-gold) items-center'}>
            <img src={iconClose} alt={'icon'} className={'h-7 w-7'} onClick={changeState} />
            <img src={Logo} alt={'logo'} className={'h-11'} />
            <img src={star} alt={'star'} className={'absolute -bottom-4 left-3 w-8 h7'} />
          </div>
          <div className={'w-full flex flex-col gap-4 pt-4 px-4'}>
            <LinkMenu handleSetActive={handleSetActive} closed={changeState} link={'principal'} linkTitle={'Inicio'} style={`py-3 border-b-1 border-(--color-gold) ${activeLink === 'principal' ? 'text-yellow-500 font-bold' : ''}`}/>
            <LinkMenu handleSetActive={handleSetActive} closed={changeState} link={'entrenamiento'} linkTitle={'Entrenamientos'} style={`py-3 border-b-1 border-(--color-gold) ${activeLink === 'entrenamiento' ? 'text-yellow-500 font-bold' : ''}`}/>
            <LinkMenu handleSetActive={handleSetActive} closed={changeState} link={'servicios'} linkTitle={'Servicios'} style={`py-3 border-b-1 border-(--color-gold) ${activeLink === 'servicios' ? 'text-yellow-500 font-bold' : ''}`}/>
            <LinkMenu handleSetActive={handleSetActive} closed={changeState} link={'sobreMi'} linkTitle={'Sobre mi'} style={`py-3 border-b-1 border-(--color-gold) ${activeLink === 'sobreMi' ? 'text-yellow-500 font-bold' : ''}`}/>
            <LinkMenu handleSetActive={handleSetActive} closed={changeState} link={'contacto'} linkTitle={'Contacto'} style={`py-3 ${activeLink === 'contacto' ? 'text-yellow-500 font-bold' : ''}`}/>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav