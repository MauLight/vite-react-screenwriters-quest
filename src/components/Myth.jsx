import { useContext } from 'react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import myth_img from '../img/myth.png'
import { Context } from '../context/appContext';

import mythos from '../img/myth.jpg'


function Myth() {

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
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={myth_img} />
            </div>
            <div className="inner">
                <div className="absolute top-[50%] left-[45%] tranlate-x-[-50%] translate-y-[-690%]">
                    <h1 className='text-black font-secondary text-8xl'><b>{store.titles[2]}</b></h1>
                </div>
                <div className="absolute top-[50%] left-[33%] tranlate-x-[-50%] translate-y-[-350%] mx-auto w-[700px]">
                    <p className='text-black font-tertiary text-3xl' >{myth}</p>

                </div>
            </div>
        </div >
    )
}

export default TiltWrapper(Myth, "Myth");