import { TiltWrapper } from '../hoc/SectionWrapper';
import lesson from '../img/lesson.png'


function Lesson() {
    return (
        <div className='rounded-[30px] w-[100%] h-[750px] mt-[100px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={lesson} />
            </div>
            <div className="inner">
                <div className="absolute top-[55%] left-[88%] tranlate-x-[-25%] translate-y-[-520%]">
                    <h1 className='text-black font-secondary text-8xl'>01</h1>

                </div>
                <div className="absolute top-[55%] left-[56%] tranlate-x-[-25%] translate-y-[-650%]">
                    <h1 className='text-black font-secondary text-6xl'>The Dramatic Basis of</h1>

                </div>
                <div className="absolute top-[65%] left-[71%] tranlate-x-[-50%] translate-y-[-350%]">
                    <h1 className='text-black font-secondary text-8xl'>a <b>STORY</b></h1>
                </div>
            </div>
        </div >
    )
}

export default TiltWrapper(Lesson, "Lesson");