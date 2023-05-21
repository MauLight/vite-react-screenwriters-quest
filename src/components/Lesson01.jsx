import { Button } from '@nextui-org/react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import lesson01 from '../img/lesson.png'


function Lesson({number}) {
    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={lesson01} />
            </div>
            <div className="inner">
                <div className="absolute top-[55%] left-[86%] tranlate-x-[-25%] translate-y-[-200%]">
                    <h1 className='text-black font-secondary text-8xl'>{number}</h1>

                </div>
                <div className="absolute top-[55%] left-[56%] tranlate-x-[-25%] translate-y-[-150%]">
                    <h1 className='text-black font-secondary text-6xl'>The Dramatic Basis of</h1>

                </div>
                <div className="absolute top-[65%] left-[71%] tranlate-x-[-50%] translate-y-[-110%]">
                    <h1 className='text-black font-secondary text-8xl'>a <b>STORY</b></h1>
                </div>
                <div className="absolute top-[70%] left-[74%]">
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                        <Button className='mr-10 px-2' size="xl" color="primary" bordered rounded >
                            <p className='font-tertiary text-xl'><b>Watch Lesson</b></p>
                        </Button>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default TiltWrapper(Lesson, "Lesson_01", "01");