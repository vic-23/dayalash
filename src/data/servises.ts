import eyelashes from '../assets/eyelashes.svg'

type servisesProps = {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const servises:servisesProps[] = [
  {
    id: 1,
    icon: eyelashes,
    title: 'Clásicas',
    description: 'Efecto natural, pelo a pelo',
  },
  {
    id: 2,
    icon: eyelashes,
    title: 'Wett Effect',
    description: 'Efecto natural, pelo a pelo',
  },
  {
    id: 3,
    icon: eyelashes,
    title: 'Volumen Ruso',
    description: 'Efecto natural, pelo a pelo',
  },
  {
    id: 4,
    icon: eyelashes,
    title: 'Volumen Tecnológico',
    description: 'Efecto natural, pelo a pelo',
  }
];