type LinkProps = {
  link: string;
  linkTitle: string;
};

const Link = ({link, linkTitle}:LinkProps) => {
  return (
    <a href={link}>{linkTitle}</a>
  )
}

export default Link