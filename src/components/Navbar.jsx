import { useState } from 'react';
import image from '../img/logo.26_nov.png'
import Hamburger from 'hamburger-react';
import { TiltWrapper } from '../hoc/SectionWrapper';

const Nav = () => {

    const [isOpen, setOpen] = useState(false);

    const style = {
        width: '310px',
        paddingBottom: '10px',
    }

    return (
        <div className="flex items-center justify-between py-8 w-[100%] bg-white">
            <a href="/" className='pl-2 pt-2'>
                <img src={image} style={style} alt="logo" />
            </a>
            <nav className='opacity-100'>


                <section className="MOBILE-MENU flex ">
                    <div className="icons mx-5">
                        <ul className="DESKTOP-MENU lg:flex gap-5 pt-[10px]">
                            <li>
                                <a href="/">
                                    <i className="text-xl fa-solid fa-magnifying-glass"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/screenwriters.quest/">
                                    <i className="text-xl fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="text-xl fa-regular fa-user"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="HAMBURGER-ICON">
                        <Hamburger size={20} duration={0.8} toggled={isOpen} toggle={setOpen} />
                    </div>

                    <div className={isOpen ? "d-block w-[30%] h-[50vh] bg-white z-10 d-block flex-col justify-evenly items-center absolute top-[112px] left-0" : "hidden"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/dramatic">Something</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/portfolio">Something</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/contact">Something</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </nav>

        </div>
    )
};

export default TiltWrapper(Nav, "Navbar");
