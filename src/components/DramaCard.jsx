import { DramaticWrapper } from "../hoc/SectionWrapper"
import concept from '../img/concept.jpg'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { useContext } from "react"
import { Context } from "../context/appContext"

function DramaCard() {

    const { store, actions } = useContext(Context);
    const { concept_idea,
        community_value,
        myth,
        theme,
        truth,
        contra_positive,
        lie,
        flaw,
        want,
        need,
        self_revelation,
        fall_into_lie
    } = store.dramatic_basis

    console.log(community_value);
    console.log(store.dramatic_basis);

    return (
        <div className='rounded-[30px] w-[100%] h-[750px] columns-2 flex justify-center items-center'>
            <div className="text w-[50%]">
                <h1 className="text-white font-secondary text-7xl">Title</h1>
                <p className="text-white font-tertiary text-3xl">{community_value}</p>
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
