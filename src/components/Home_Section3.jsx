import { Text } from "@nextui-org/react"
import { TiltWrapper } from "../hoc/SectionWrapper"
import { useContext } from "react"
import { Context } from '../context/appContext';

function Home_Section3() {

    const { store, actions } = useContext(Context)

    return (
        <section className='rounded-[30px] w-[100%] h-auto my-20 py-10 flex'>
            <div className="flex border border-solid border-1 w-[100%]">
                <div className="rounded-[30px] border border-solid border-1 w-[100%]">
                    <Text className="font-secondary px-1" size={30} weight="bold">{"01"}</Text>
                    <Text className="font-secondary px-1" size={30} weight="bold">{store.Home_Section3_Text1}</Text>
                </div>
                <div className="border border-solid border-1 w-[100%]">
                    <div className="border border-solid border-1 w-[100%]">
                        <Text className="font-secondary px-1" size={30} weight="bold">{"02"}</Text>
                        <Text className="font-secondary px-1" size={30} weight="bold">{store.Home_Section3_Text2}</Text>
                    </div>
                    <div className="border border-solid border-1 w-[100%]">
                        <Text className="font-secondary px-1" size={30} weight="bold">{"04"}</Text>
                        <Text className="font-secondary px-1" size={30} weight="bold">{store.Home_Section3_Text4}</Text>
                    </div>
                </div>
            </div>
            <div className="mx-auto border border-solid border-1 w-[100%]">
                <div className="flex border border-solid border-1 w-[100%]">
                    <Text className="font-secondary px-1" size={30} weight="bold">{"03"}</Text>
                    <Text className="font-secondary px-1" size={30} weight="bold">{store.Home_Section3_Text3}</Text>
                </div>
                <div className="flex border border-solid border-1 w-[100%]">
                    <div className="border border-solid border-1 w-[100%]">
                    <Text className="font-secondary px-1" size={30} weight="bold">{"05"}</Text>
                        <Text className="font-secondary px-1" size={30} weight="bold">{store.Home_Section3_Text5}</Text>
                    </div>
                    <div className="border border-solid border-1 w-[100%]">
                    <Text className="font-secondary px-1" size={30} weight="bold">{"06"}</Text>
                        <Text className="font-secondary px-1" size={30} weight="bold">{store.Home_Section3_Text6}</Text>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TiltWrapper(Home_Section3, "Home_section3")
