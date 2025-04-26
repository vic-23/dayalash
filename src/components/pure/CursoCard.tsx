import backImg from '../../assets/backgroundCourses.svg'
import whatch from '../../assets/whatch.svg';
import thonder from '../../assets/thonder.svg';

interface Course {
  id: number;
  title: string;
  description: string;
  img: string;
  features: {
    id: number;
    text: string;
  }[];
  duration: string;
  methodology: string;
}

type CursoCardProps = {
  course: Course;
}

const CursoCard = ({course}:CursoCardProps) => {
  return (
    <div className={' flex flex-col gap-4 px-3 py-2 '} style={{ backgroundImage: `url(${backImg})` }} >
      <img src={course.img} alt={'imagen'} />
      <div className={'flex flex-col gap-4'} >
        <h1 className={' font-[Niramit-bold] capitalize text-[clamp(1.5rem,8vw,4rem)] '} >{course.title}</h1>
        <p className={' text-(--color-dark-gray) text-justify '} >{course.description}</p>
        <ul className={'flex flex-col gap-4'} >
          {course.features.map((item: {id: number; text: string}) => (
            <li key={item.id} className={' flex gap-4 '} >
              <span className={' h-6 w-6 '} >
                <svg fill="#8D6A29" >
                  <path d="M18.5769 6.18305C18.6842 6.2588 18.7755 6.35496 18.8456 6.46602C18.9158 6.57708 18.9634 6.70087 18.9856 6.83033C19.0079 6.95978 19.0045 7.09235 18.9755 7.22048C18.9466 7.3486 18.8927 7.46977 18.8169 7.57705L13.1509 15.597C12.7909 16.105 12.4859 16.537 12.2109 16.866C11.9239 17.206 11.6009 17.524 11.1729 17.726C10.5386 18.0271 9.81507 18.0816 9.14286 17.879C8.68686 17.742 8.32286 17.473 7.99386 17.177C7.67886 16.892 7.32186 16.509 6.90386 16.061L5.26886 14.308C5.17578 14.2127 5.10269 14.0997 5.05389 13.9758C5.00508 13.8518 4.98154 13.7193 4.98465 13.5861C4.98775 13.4529 5.01744 13.3217 5.07198 13.2002C5.12651 13.0786 5.20478 12.9692 5.3022 12.8783C5.39962 12.7874 5.51421 12.7169 5.63926 12.6709C5.76431 12.6249 5.89728 12.6044 6.03037 12.6105C6.16346 12.6166 6.29399 12.6493 6.41428 12.7066C6.53457 12.7639 6.6422 12.8446 6.73086 12.944L8.33686 14.666C8.79186 15.153 9.09086 15.472 9.33486 15.693C9.57486 15.909 9.67886 15.952 9.71986 15.964C9.91586 16.024 10.1249 16.009 10.3179 15.918C10.3639 15.896 10.4669 15.833 10.6779 15.58C10.8939 15.323 11.1509 14.96 11.5409 14.409L17.1829 6.42305C17.2586 6.31573 17.3548 6.2244 17.4658 6.15426C17.5769 6.08412 17.7007 6.03654 17.8301 6.01425C17.9596 5.99197 18.0922 5.9954 18.2203 6.02436C18.3484 6.05333 18.4696 6.10725 18.5769 6.18305Z"/>
                </svg>
              </span>
              {item.text}
            </li>
          ))}
        </ul>
        <div className={' flex gap-4 mb-6 '}>
          <div className={' flex gap-3 '} >
            <img src={whatch} alt={'imagen'} className={' h-6 w-6 '} />
            <span>{course.duration}</span>
          </div>
          <div className={' flex gap-3 '} >
            <img src={thonder} alt={'thonder'} className={' h-6 w-6 '} />
            <span>{course.methodology}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CursoCard