import { TiltWrapper } from '../hoc/SectionWrapper';
import hero from '../img/hero.png'


function Hero() {
    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={hero} />
            </div>
            <div className="inner">
                <div className="absolute top-[55%] left-[56%] tranlate-x-[-25%] translate-y-[-480%]">
                    <h1 className='text-white font-secondary text-7xl'>The Creation of</h1>

                </div>
                <div className="absolute top-[65%] left-[70%] tranlate-x-[-50%] translate-y-[-290%]">
                    <h1 className='text-white font-secondary text-8xl'>a <b>MYTH</b></h1>
                </div>
                <div className="absolute top-[75%] left-[52%] tranlate-x-[-50%] translate-y-[-480%]">
                    <p className='text-white font-tertiary text-3xl' >Move from a single idea into the <b>logline</b> of your story.</p>

                </div>
            </div>
        </div >
    )
}

export default TiltWrapper(Hero, "Hero");