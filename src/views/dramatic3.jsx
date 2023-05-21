import Lesson from "../components/Lesson01"
import DramaCard2 from "../components/DramaCard2"
import Theme from "../components/Theme"
import Conflict from "../components/conflict"
import Lesson02 from "../components/Lesson02"

function Dramatic3() {

    return (
        <div>
            <Lesson02 />
            <Theme />
            <div className="px-20">
                <DramaCard2 />
            </div>
            <Conflict />
        </div>
    )
}

export default Dramatic3;
