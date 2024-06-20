import reactImg from '../images/skills/react-icon.png';
import vuejsImg from '../images/skills/vuejs-logo.svg';
import expressImg from '../images/skills/express-logo.png';
import laravelImg from '../images/skills/laravel-logo.png';
import symfonyImg from '../images/skills/symfony-logo.png';
import nextjsImg from '../images/skills/nextjs-logo.png';
import nuxtImg from '../images/skills/nuxt-logo.png';
import tailwindcssImg from '../images/skills/tailwindcss-logo.svg';
import bulmaImg from '../images/skills/bulma-logo.png';
import postgresqlImg from '../images/skills/postgresql-logo.png';
import mariadbImg from '../images/skills/mariadb-logo.png';
import dynamodbImg from '../images/skills/dynamodb-logo.png';
import redisImg from '../images/skills/redis-logo.png';
import dockerImg from '../images/skills/docker-logo.png';

export default function Skills() {

    // TODO Use logomarks instead of logotypes

    return (
        <section className="skills my-10" id="skills">
            <div className="wrapper flex flex-col">
                <h2 id="mb-4">Skills</h2>
                <div className="grid grid-cols-1 gap-4 mt-4">
                    <ul className="skills--list">
                        <li className="skills--list--item">
                            <h3>ReactJS</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={reactImg.src}
                                    alt="React logo"
                                    width={48}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Vue.js</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={vuejsImg.src}
                                    alt="React logo"
                                    width={48}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Express</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={expressImg.src}
                                    alt="Express logo"
                                    width={128}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Laravel</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={laravelImg.src}
                                    alt="Laravel logo"
                                    width={56}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Symfony</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={symfonyImg.src}
                                    alt="Symfony logo"
                                    width={48}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Next.js</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={nextjsImg.src}
                                    alt="Next.js logo"
                                    width={80}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Nuxt</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={nuxtImg.src}
                                    alt="Nuxt logo"
                                    width={80}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>PostgreSQL</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={postgresqlImg.src}
                                    alt="PostgreSQL logo"
                                    width={40}
                                    height={40}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>MariaDB</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={mariadbImg.src}
                                    alt="MariaDB logo"
                                    width={72}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>DynamoDB</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={dynamodbImg.src}
                                    alt="DynamobDB logo"
                                    width={48}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Redis</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={redisImg.src}
                                    alt="Redis logo"
                                    width={64}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Docker</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={dockerImg.src}
                                    alt="Docker logo"
                                    width={40}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Tailwind CSS</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={tailwindcssImg.src}
                                    alt="Tailwind CSS logo"
                                    width={96}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                        <li className="skills--list--item">
                            <h3>Bulma</h3>
                            <div className="skills--list--item--img_wrapper">
                                <img src={bulmaImg.src}
                                    alt="Bulma logo"
                                    width={96}
                                    height={48}
                                    decoding='async'
                                    loading='lazy'
                                ></img>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}