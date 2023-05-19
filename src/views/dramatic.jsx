import { useContext } from "react"
import { Context } from "../context/appContext"
import Hero from "../components/Hero"
import DramaCard from "../components/DramaCard"
import Lesson from "../components/Lesson"

function Dramatic() {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <Hero />
            <Lesson />
            <DramaCard />
        </div>
    )
}

export default Dramatic;
