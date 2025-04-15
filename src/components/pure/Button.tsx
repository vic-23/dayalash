type ButtonProps = {
  text: string;
};

const Button = ({text}:ButtonProps) => {
  return (
    <a href={'https://wa.me/+13466070399?text=Hola,%20quiero%20más%20información'} className={'absolute right-14'} >
      <button className={' border-2 rounded-full border-(--color-dark-gold) py-1 px-4 font-[Niramit] bg-(--color-very-light-gold) text-(--color-dark-gold) '} >{text}</button>
    </a>
  )
}

export default Button