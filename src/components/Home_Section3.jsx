import { Text } from "@nextui-org/react"
import Tilt from 'react-parallax-tilt';
import { useContext } from "react"
import { Context } from '../context/appContext';

function Home_Section3() {

    const { store, actions } = useContext(Context)

    return (
        <section className='rounded-[30px] w-[100%] h-auto my-20 py-10 px-20 flex'>
            <div className="flex border border-solid border-1 w-[100%]">
                <Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                    <div className="rounded-[30px] border border-solid border-4 border-black h-[100%] w-[100%]">
                        <Text className="font-secondary p-20" size={30} weight="bold">{"01"}</Text>
                        <Text className="font-secondary px-20" size={20} weight="bold">{store.Home_Section3_Text1}</Text>
                    </div>
                </Tilt>
                <div className="border border-solid border-1 w-[100%] ml-10">
                    <Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                        <div className="rounded-[30px] border border-solid border-4 border-black w-[100%]">
                            <Text className="font-secondary px-10 pt-[100px]" size={30} weight="bold">{"02"}</Text>
                            <Text className="font-secondary px-10 pb-[100px]" size={20} weight="bold">{store.Home_Section3_Text2}</Text>
                        </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                        <div className="rounded-[30px] border border-solid border-4 border-black w-[100%] mt-10">
                            <Text className="font-secondary px-10 pt-[100px]" size={30} weight="bold">{"04"}</Text>
                            <Text className="font-secondary px-10 pb-[100px]" size={20} weight="bold">{store.Home_Section3_Text4}</Text>
                        </div>
                    </Tilt>
                </div>
            </div>
            <div className="mx-auto border border-solid border-1 w-[100%] ml-10">
                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                    <div className="rounded-[30px] border border-solid border-4 border-black w-[100%] pb-[32px] mb-10">
                        <Text className="font-secondary px-10 pt-[100px]" size={30} weight="bold">{"03"}</Text>
                        <Text className="font-secondary px-10 pb-[100px]" size={20} weight="bold">{store.Home_Section3_Text3}</Text>
                    </div>
                </Tilt>
                <div className="flex border border-solid border-1 w-[100%]">
                    <div className="rounded-[30px] border border-solid border-4 border-black w-[100%]">
                        <Text className="font-secondary p-20" size={30} weight="bold">{"05"}</Text>
                        <Text className="font-secondary px-20" size={20} weight="bold">{store.Home_Section3_Text5}</Text>
                    </div>
                    <div className="rounded-[30px] border border-solid border-4 border-black w-[100%] ml-10">
                        <Text className="font-secondary p-20" size={30} weight="bold">{"06"}</Text>
                        <Text className="font-secondary px-20" size={20} weight="bold">{store.Home_Section3_Text6}</Text>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_Section3
