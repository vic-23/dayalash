type LinkProps = {
  link: string;
  linkTitle: string;
  style: string;
  closed: () => void;
};

const LinkMenu = ({link, linkTitle, style, closed}:LinkProps) => {


  return (
    <a href={link} className={`${style}`} onClick={closed} >{linkTitle}</a>
  )
}

export default LinkMenu
