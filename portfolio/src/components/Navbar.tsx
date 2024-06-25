import githubImg from '../images/github-mark.png';

export default function Navbar() {
    return (
        <ul className="flex navbar items-center">
            <li className=" text-sm ml-0 mr-3 md:mx-3 py-2">
                <a className="nav--link" href="/">Home</a>
            </li>
            <li className=" text-sm mx-3 py-2">
                <a className="nav--link" href="/#projects">Projects</a>
            </li>
            <li className=" text-sm mx-3 py-2">
                <a className="nav--link" href="/#skills">Skills</a>
            </li>
            <li className=" text-sm mx-3 py-2">
                <a className="nav--link" href="https://github.com/Jalx"
                    target="_blank"
                >
                    <img src={githubImg.src}
                        alt="Github logo"
                        width={20}
                        height={20}
                        decoding='async'
                        loading='lazy'
                    ></img>
                </a>
            </li>
        </ul>
    );
}