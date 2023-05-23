import { Button, Text } from "@nextui-org/react"
import { TiltWrapper } from "../hoc/SectionWrapper"


function Home_Section4() {
    return (
        <section>
            <div>
                <Text className="font-secondary pl-24" weight="bold" size={50}>How does it work?</Text>
            </div>
            <div className="flex justify-center">
                <Button.Group color="gradient" bordered rounded>
                    <Button className="v-btn">
                        <Text className="font-secondary" size={20} weight="bold">{"Video Lessons"}</Text>
                    </Button>
                    <Button className="v-btn">
                        <Text className="font-secondary" size={20} weight="bold">{"Online Meetings"}</Text>
                    </Button>
                    <Button className="v-btn">
                        <Text className="font-secondary" size={20} weight="bold">{"Homework"}</Text>
                    </Button>
                    <Button className="v-btn">
                        <Text className="font-secondary" size={20} weight="bold">{"Writing"}</Text>
                    </Button>
                    <Button className="v-btn">
                        <Text className="font-secondary" size={20} weight="bold">{"Additional Activities"}</Text>
                    </Button>
                </Button.Group>
            </div>
            <div className="flex">
                <div>A</div>
                <div>B</div>
            </div>
        </section>
    )
}

export default TiltWrapper(Home_Section4, "Home_Section4")