import Logo from '../assets/logo.svg'
import Button from "./pure/Button.jsx";
import Menu from "./Menu.jsx";
import star from "../assets/star.svg"

const Header = () => {
  return (
    <header className={' fixed top-0 w-full px-4 py-2 flex items-center bg-(--background-white) border-b-2 border-(--color-gold) '} >
      <img src={star} alt={'star'} className={' absolute -bottom-4 left-3 w-8 h7 '} />
      <img src={Logo} alt='logo' className={' h-11 '} />
      <Button text={'Contáctame'}/>
      <Menu/>
    </header>
  )
}

export default Header