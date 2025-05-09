import Titles from '../pure/Titles';
import Button from '../pure/Button';
import imgContacto from '../../assets/imgContacto.svg';
import BgSobreMi from "../../assets/bgSobreMi.svg";
import iconWhatsapp from '../../assets/iconWhatsapp.svg';
import iconEmail from '../../assets/iconEmail.svg';
import iconUbication from '../../assets/iconUbication.svg';
import star from "../../assets/star.svg";

type SectionContactoProps = {
  idName: string
}

const SectionContacto = ({idName}:SectionContactoProps) => {
  return (
    <section id={idName} className={' relative border-b-2 border-[var(--color-gold)] min-h-screen flex flex-col items-center py-10 px-4'} >
      <div className={' w-full flex flex-col items-center justify-center '} >
        <Titles title={'Citas y contactos'}/>
        <h1 className='flex flex-col leading-13 font-[Niramit-bold] text-[clamp(2.5rem,9vw,4rem)] text-center'>
          Transforma tu <span>mirada</span>
        </h1>
        <h2 className={' font-[Corinthia] text-center text-[clamp(2rem,3vw,5rem)] text-[var(--color-gold)] '} >
          ¡Agenda tu cita ahora!
        </h2>
      </div>
      <div className={' rounded-bl-[124px] mt-14 flex flex-col min-h-screen min-w-full p-8 '} style={{ backgroundImage: `url(${BgSobreMi})` }} >
        <div className={'relative w-full h-full'} >
          <img src={imgContacto} alt='img' className={' w-[24.875rem] h-[25.188rem] absolute inset-0 opacity-50 '} />
          <img src={imgContacto} alt='img' className={'w-[24.875rem] h-[25.188rem] -translate-x-5 translate-y-5 z-10 '} />
        </div>
        <div className={' w-full flex flex-col items-center gap-4'} >
          <h1 className={'font-[Corinthia] text-2xl text-[var(--color-gold)] my-14 '} >¡Contáctame!</h1>
          <div className={' flex flex-col gap-4 justify-self-start '}>
            <p className={'flex gap-4 font-[Niramit-SemiBold] justify-start items-center '} >
              <img src={iconWhatsapp} alt='iconWhatsapp' className={'w-8 h-8'} />
              <span>+1 (346) 607-0399</span>
            </p>
            <p className={'flex gap-4 font-[Niramit-SemiBold] justify-start items-center  '} >
              <img src={iconEmail} alt='iconEmail' className={'w-8 h-8'} />
              <span>dcorpas06@gmail.com</span>
            </p>
            <p className={'flex gap-4 font-[Niramit-SemiBold] justify-start items-center '} >
              <img src={iconUbication} alt={'iconContacto'} className={'w-8 h-8'} />
              <span>Miami, USA</span>
            </p>
          </div>
          <Button text={'Contáctame'} style={''}  />
        </div>
      </div>
      <img src={star} alt={'star'} className={' absolute -bottom-4 left-3 w-8 h7 '} />
    </section>
  )
}

export default SectionContacto;