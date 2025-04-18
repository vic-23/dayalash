import { Link } from 'react-scroll'

type LinkProps = {
  link: string;
  linkTitle: string;
  style: string;
  closed: () => void;
  handleSetActive: (to: string) => void; // Cambiado para especificar el tipo de parámetro
};

const LinkMenu = ({link, linkTitle, style, closed, handleSetActive}: LinkProps) => {
  return (
    <Link
      smooth={true}
      spy={true}
      to={link}
      duration={500}
      offset={-80} // Ajusta este valor según el tamaño de tu header
      activeClass="active"
      className={`${style}`}
      onClick={closed}
      onSetActive={() => handleSetActive(link)}
    >
      {linkTitle}
    </Link>
  )
}

export default LinkMenu