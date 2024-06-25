import Navbar from '../components/Navbar';

export default function Header() {
    return (
        <header className="header flex flex-row gap-2 md:gap-1 md:flex-row justify-between md:justify-between">
            <div className="flex">
                {/* <a href="/" className="text-xl my-auto italic">Alexis Guzmán</a> */}
                <a href="/" className="text-xl my-auto italic">
                    <div className="flex justify-center">
                        <img className="flex rounded-sm" src="/alexis-guzman-portfolio-logo.png" alt="Portfolio logo"
                            height="49px" width="49px"/>
                    </div>
                </a>
            </div>
            <Navbar />
        </header>
    );
}
