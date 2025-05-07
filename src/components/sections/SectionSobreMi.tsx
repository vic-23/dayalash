import Titles from '../pure/Titles.tsx';
import Dayana from '../../assets/dayana.svg';
import BgSobreMi from '../../assets/bgSobreMi.svg';
import Gallery from "../pure/Gallery.tsx";
import {gallery} from "../../data/gallery.ts";
import star from "../../assets/star.svg";

type SectionSobreMiProps = {
  idName: string;
}

const SectionSobreMi = ({idName}:SectionSobreMiProps) => {
  return (
    <section id={idName} className={' relative border-b-2 border-[var(--color-gold)] flex flex-col pt-10 pb-14 px-4 gap-10 '} >
      <div>
        <div className={' flex flex-col items-center '} >
          <Titles title={'Un poco sobre mi'} />
          <h1 className={' font-[Niramit-bold] text-[clamp(2.2rem,11vw,4rem)] text-center '} >Mi historia en el mundo <span className={' font-[Corinthia] '} >de las pestañas</span></h1>
        </div>
        <div>
          <img src={Dayana} alt={'imagen'} />
          <div className={' bg-bottom-left rounded-bl-[124px] flex flex-col items-center gap-4 p-6 pb-14 min-w-fit '}  style={{ backgroundImage: `url(${BgSobreMi})` }}>
            <h3 className={' font-[Niramit-bold] text-[clamp(1.5rem,7.5vw,4rem)] leading-[clamp(2.5rem,1vh,3rem)] '} >¡Hola! Soy Dayana, una apasionada del mundo de las pestañas y la belleza</h3>
            <p className={' font-[Niramit] text-[clamp(1.125rem,2vw,2rem)] '} >Desde hace 8 años, he ayudado a cientos de mujeres a resaltar su mirada con técnicas de extensión de pestañas seguras y personalizadas. Mi misión es brindarte un servicio de calidad, con materiales premium y un acabado impecable que te haga sentir hermosa y segura de ti misma.</p>
          </div>
        </div>
      </div>
      <div className={' flex flex-col items-center gap-2 '} >
        <h1 className={' font-[Niramit-bold] text-[clamp(2.150rem,9vw,4rem)] '} >Conoce mi trabajo</h1>
        <h4 className={' flex flex-col font-[Corinthia] text-[clamp(1.5rem,4vw,3rem)] text-center text-[var(--color-gold)] '} >Miradas que dicen más que mil <span>palabras</span></h4>
        <div>
          <Gallery images={gallery} />
        </div>
      </div>

      <img src={star} alt="star" className="absolute -bottom-3.5 right-3 w-8 h-7" />
    </section>
  )
}

export default SectionSobreMi