import githubImg from '../images/github-mark.png';
import linkedinImg from '../images/linkedin-blue.png';

export default function Social() {
    return (
        <section className="social mx-auto" id="social">
            <ul className="flex flex-row justify-center">
                <li className="mx-3">
                    <a href="https://github.com/Jalx"
                        className="flex flex-row items-center text-black"
                        target="_blank"
                    >
                        <img src={githubImg.src}
                            className="mx-2"
                            alt="Github logo"
                            width={20}
                            height={20}
                            decoding='async'
                            loading='lazy'
                        ></img>
                        Github
                    </a>
                </li>
                <li className="mx-3">
                    <a href="https://www.linkedin.com/in/alexis-guzmán-4a5a711a6"
                        className="flex text-black"
                        target="_blank"
                    >
                        <img src={linkedinImg.src}
                            className="mx-2"
                            alt="Linkedin logo"
                            width={20}
                            height={20}
                            decoding='async'
                            loading='lazy'
                        ></img>
                        LinkedIn
                    </a>
                </li>
            </ul>
        </section>
    );
}