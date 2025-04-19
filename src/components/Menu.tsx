import LinkMenu from "./pure/LinkMenu.tsx";
import iconMenu from '../assets/menu.svg'
import {useState, useEffect} from "react";
import iconClose from "../assets/close.svg";
import backgroundmobile from '../assets/backgroundmobile.svg'
import Logo from '../assets/logo.svg'
import star from "../assets/star.svg"

const Nav = () => {

  const [hidden, setHidden] = useState(true);

  const changeState = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }

  useEffect(() => {
    const img = new Image();
    img.src = backgroundmobile;
  }, []);

  return (
    <nav className={' absolute right-0 z-10 '} >
      {hidden ? (
        <img src={iconMenu} alt={'icon'} className={'h-10 w-10'} onClick={changeState} />
      ) : (
        <div className={"fixed inset-0 bg-center bg-cover flex flex-col "} style={{backgroundImage: `url(${backgroundmobile})`}} >
          <div className={' relative flex flex-row-reverse justify-between px-4 py-2 border-b-2 border-(--color-gold) items-center '} >
            <img src={iconClose} alt={'icon'} className={'h-7 w-7'} onClick={changeState} />
            <img src={Logo} alt={'logo'} className={'h-11'} />
            <img src={star} alt={'star'} className={' absolute -bottom-4 left-3 w-8 h7 '} />
          </div>
          <div className={' w-full flex flex-col gap-4 pt-4 px-4 '} >
            <LinkMenu closed={changeState} link={'#home'} linkTitle={'Home'} style={'py-3 border-b-1 border-(--color-gold)'} />
            <LinkMenu closed={changeState} link={'#entrenamiento'} linkTitle={'Entrenamientos'} style={'py-3 border-b-1 border-(--color-gold)'} />
            <LinkMenu closed={changeState} link={'#servicios'} linkTitle={'Servicios'} style={'py-3 border-b-1 border-(--color-gold)'} />
            <LinkMenu closed={changeState} link={'#sobreMi'} linkTitle={'Sobre mi'} style={'py-3 border-b-1 border-(--color-gold)'} />
            <LinkMenu closed={changeState} link={'#contacto'} linkTitle={'Contacto'} style={'py-3 '} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav