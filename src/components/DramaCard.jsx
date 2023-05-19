import { DramaticWrapper } from "../hoc/SectionWrapper"
import concept from '../img/concept.jpg'
import Tilt from 'react-parallax-tilt';

function DramaCard() {
    return (
        <div className='rounded-[30px] w-[100%] h-[750px] bg-[#1c1c1c] columns-2 flex justify-center items-center'>
            <div className="text w-[50%]">
                <h1>Something</h1>
            </div>
            <div className="flex">
                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"white"} glareBorderRadius='30px' >
                    <img className="mx-auto  w-[70vh]  h-[70vh] object-cover object-center rounded-[30px]" src={concept} />
                </Tilt>
            </div>
        </div>
    )
}

export default DramaticWrapper(DramaCard, "Concept");
