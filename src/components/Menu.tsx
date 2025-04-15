import Link from "./pure/Link.jsx";
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
          <div className={' relative flex flex-row-reverse justify-between p-4 border-b-2 border-(--color-gold) items-center '} >
            <img src={iconClose} alt={'icon'} className={'h-7 w-7'} onClick={changeState} />
            <img src={Logo} alt={'logo'} className={'h-11'} />
            <img src={star} alt={'star'} className={' absolute -bottom-4 left-3 w-8 h7 '} />
          </div>
          <Link link={'#entrenamiento'} linkTitle={'Entrenamientos'} />
          <Link link={'#servicios'} linkTitle={'Servicios'} />
          <Link link={'#sobreMi'} linkTitle={'Sobre mi'} />
          <Link link={'#contacto'} linkTitle={'Contacto'} />
        </div>
      )}
    </nav>
  )
}

export default Nav