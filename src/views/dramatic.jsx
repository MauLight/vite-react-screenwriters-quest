import { useContext } from "react"
import { Context } from "../context/appContext"
import Hero from "../components/Hero"
import DramaCard from "../components/DramaCard"
import Lesson from "../components/Lesson"
import StarsCanvas from "../components/canvas/stars"
import Myth from "../components/Myth"

function Dramatic() {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <Hero />
            <Lesson />
            <div className="px-20">
                <DramaCard />
            </div>
            <Myth />
        </div>
    )
}

export default Dramatic;
