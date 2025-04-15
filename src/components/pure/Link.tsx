type LinkProps = {
  link: string;
  linkTitle: string;
};

const Link = ({link, linkTitle}:LinkProps) => {
  return (
    <a href={link} className={' border-b-1 border-(--color-gold) py-3 '} >{linkTitle}</a>
  )
}

export default Link