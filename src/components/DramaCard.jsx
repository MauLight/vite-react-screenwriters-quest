import { useContext } from "react"
import { DramaticWrapper } from "../hoc/SectionWrapper"
import Tilt from 'react-parallax-tilt'
import { Context } from "../context/appContext"

import concept from '../img/concept.jpg'
import value from '../img/value.jpg'

function DramaCard({ title, text, image }) {

    return (
        <div className='rounded-[30px] w-[100%] h-[750px] columns-2 flex justify-center items-center'>
            <div className="text w-[50%] mx-auto px-[80px]">
                <h1 className="text-white font-secondary text-6xl mb-5">{title}</h1>
                <p className="text-white font-tertiary text-3xl">{text}</p>
            </div>
            <div className="flex mx-auto">
                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"white"} glareBorderRadius='30px' >
                    <img className="mx-auto w-[70vh]  h-[70vh] object-cover object-center rounded-[30px]" src={image} />
                </Tilt>
            </div>
        </div>
    )
}
function DramaCard2({ title, text, image }) {

    return (
        <div className='rounded-[30px] w-[100%] h-[750px] columns-2 flex justify-center items-center'>
            <div className="flex mx-auto">
                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"white"} glareBorderRadius='30px' >
                    <img className="mx-auto w-[70vh]  h-[70vh] object-cover object-center rounded-[30px]" src={image} />
                </Tilt>
            </div>
            <div className="text w-[50%] mx-auto px-[80px]">
                <h1 className="text-white font-secondary text-6xl mb-5">{title}</h1>
                <p className="text-white font-tertiary text-3xl">{text}</p>
            </div>
        </div>
    )
}

const CardWrapper = () => {
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


    return (
        <>
            <DramaCard title={store.titles[0]} text={concept_idea} image={concept}/>
            <DramaCard2 title={store.titles[1]} text={community_value} image={value} />
        </>
    )

}

export default DramaticWrapper(CardWrapper, "Concept"); 
