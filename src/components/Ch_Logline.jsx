import { TiltWrapper } from '../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import ch_logline from '../img/ch_logline.png'
import { useContext } from 'react';
import { Context } from '../context/appContext';
import { Text } from '@nextui-org/react';


function Ch_Logline({ number }) {

    const { store, actions } = useContext(Context)

    return (
        <div className='rounded-[30px] w-[100%] h-[750px]'>
            <div className='rounded-[30px]  w-[100%] h-[750px]'>
                <img className='rounded-[30px]  w-[100%] h-[750px] object-cover object-top' src={ch_logline} />
            </div>
            <div className="inner">
                <div className="absolute top-[90%] left-[26%] tranlate-x-[-50%] translate-y-[-110%]">
                    <h1 className='text-white font-secondary text-6xl pl-32 mb-20'>
                        <b>
                            <TypeAnimation sequence={[
                                'CHARACTER LOGLINE', 3000,
                                ' CHARACTER LOGLINE', 3000,
                                ' CHARACTER LOGLINE', 3000,
                            ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </b>
                    </h1>
                    <div className='flex text-white font-tertiary text-3xl'>
                        <Text className='mx-3 text-white' size={30}>{"After "}</Text>
                        <Text size={30} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.positive}</Text>
                        <Text className='mx-3 text-white' size={30}>{" a character who has "}</Text>
                        <Text size={30} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.flaw}</Text>
                        <Text className='mx-3 text-white' size={30}>{" because of "}</Text>
                        <Text size={30} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.lie}</Text>

                    </div>
                    <div className='flex text-white font-tertiary text-3xl pl-[50px]'>
                        <Text className='mx-3 text-white' size={30}>{"wants to "}</Text>
                        <Text size={30} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.want}</Text>
                        <Text className='mx-3 text-white' size={30}>{" and needs to "}</Text>
                        <Text size={30} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.need}</Text>
                        <Text className='mx-3 text-white' size={30}>{" to "}</Text>
                        <Text size={30} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.rev}</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Ch_Logline, "Ch_Logline", "01");