import Social from "./Social";

export default function Section() {
    return (
        <footer className="footer mt-5">
            <section className="footer--social">
                <Social></Social>
            </section>
            <section className="text-center text-gray-600 font-bold">
                <span className="">Alexis Guzmán ©2024</span>
                <div className="flex justify-center">
                    <img className="flex py-3 rounded-sm" src="/favicon-96x96.png" alt="Portfolio logo"/>
                </div>
            </section>
        </footer>
    );
}