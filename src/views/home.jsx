import Home_Section1 from '../components/Home_Section1'
import Home_Section2 from '../components/Home_Section2'
import Home_hero from '../components/Home_hero'
import hero from '../img/1.jpg'

export default function Home() {
    return (
        <div>
            <Home_hero />
            <Home_Section1 />
            <Home_Section2 />
        </div>
    )
}
