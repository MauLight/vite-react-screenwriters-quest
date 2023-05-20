import { useContext } from "react"
import { Context } from "../context/appContext"
import Hero from "../components/Hero"
import DramaCard from "../components/DramaCard"
import Lesson from "../components/Lesson"
import StarsCanvas from "../components/canvas/stars"
import Myth from "../components/Myth"

function Dramatic2() {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <Lesson />
            <div className="px-20">
                <DramaCard />
            </div>
            <Myth />
        </div>
    )
}

export default Dramatic2;
