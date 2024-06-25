import Social from "./Social";

export default function Section() {
    return (
        <footer className="footer mt-5">
            <section className="footer--social">
                <Social></Social>
            </section>
            <section className="text-center text-gray-600 font-bold">
                <span className="">Alexis Guzmán ©2024</span>
            </section>
        </footer>
    );
}