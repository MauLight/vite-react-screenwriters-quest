import { useContext } from "react"
import { Context } from "../context/appContext"
import Lesson from "../components/Lesson"
import Myth from "../components/Myth"
import DramaCard2 from "../components/DramaCard2"
import Theme from "../components/Theme"

function Dramatic2() {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <Lesson />
            <Theme />
            <div className="px-20">
                <DramaCard2 />
            </div>
            <Myth />
        </div>
    )
}

export default Dramatic2;
