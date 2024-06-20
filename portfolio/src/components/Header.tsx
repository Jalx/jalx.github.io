import Navbar from '../components/Navbar';

export default function Header() {
    return (
        <header className="header flex flex-col gap-2 md:gap-2 md:flex-row md:justify-between">
            <div className="flex">
                <a href="/" className="text-xl my-auto italic">Alexis Guzmán</a>
            </div>
            <Navbar />
        </header>
    );
}
