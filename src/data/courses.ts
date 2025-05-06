import card1 from "/assets/img/card1.svg";
import card2 from  '/assets/img/card2.svg';
import card3 from '/assets/img/card3.svg';

type coursesProps = {
  id: number;
  title: string;
  description: string;
  img: string;
  features: object[];
  duration: string;
  methodology: string;
}

export const courses:coursesProps[] = [
  {
    id: 1,
    title: 'entrenamiento inicial',
    description: 'Adquiere todo el conocimiento teórico y práctico para convertirte en una experta en extensiones de pestañas',
    img: card1,
    features: [
      {
        id: 1,
        text: 'Teoría especializada sobre pestañas'
      },
      {
        id: 2,
        text: 'Técnica y aplicación de extensiones'
      },
      {
        id: 3,
        text: 'Práctica supervisada bajo guía profesional'
      },
      {
        id: 4,
        text: 'Manejo de cliente y emprendimiento'
      }
    ],
    duration: '2 semanas',
    methodology: 'online'
  },
  {
    id: 2,
    title: 'entrenamiento avanzado',
    description: 'lleva tu técnica al siguiente nivel y ofrece un servicio más preciso, duradero y personalizado',
    img: card2,
    features: [
      {
        id: 1,
        text: 'Perfecciona tu aislamiento y retención'
      },
      {
        id: 2,
        text: 'Domina efectos como el wet look , volumen, híbrido y mapping avanzado '
      },
      {
        id: 3,
        text: 'Optimiza tu velocidad y técnica',
      },
      {
        id: 4,
        text: 'Aprende a corregir errores y personalizar tus diseños'
      }
    ],
    duration: '2 semanas',
    methodology: 'online'
  },
  {
    id: 3,
    title: 'webinar exclusivo',
    description: 'Lleva tu técnica al siguiente nivel y ofrece un servicio más preciso, duradero y personalizado',
    img: card3,
    features: [
      {
        id: 1,
        text: 'Perfecciona tu aislamiento y retención'
      },
      {
        id: 2,
        text: 'Domina efectos como el wet look , volumen, híbrido y mapping avanzado '
      },
      {
        id: 3,
        text: 'Optimiza tu velocidad y técnica',
      },
      {
        id: 4,
        text: 'Aprende a corregir errores y personalizar tus diseños'
      }
    ],
    duration: '2 semanas',
    methodology: 'online'
  }
];