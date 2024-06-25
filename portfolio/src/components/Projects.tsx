export default function Projects() {
    return (
        <section className="projects mt-2 pt-20" id="projects">
            <div className="wrapper flex flex-col">
                <h2 id="mb-4">Projects</h2>
                <div className="projects--list">
                    <article className="projects--list--item">
                        <h3>Custom Integrations</h3>
                        <div className="projects--list--item--description">
                            <p>Designed and developed several solutions that connect multiple services seamlessly. Some of the platforms that I've worked with are HubSpot, Airtable and Acumatica.</p>
                        </div>
                        <ul className="projects--list--item--details">
                            <li>Developed serverless architectures to ensure scalability and cost efficiency.</li>
                            <li>Utilized AWS Lambda for compute services and DynamoDB for fast and flexible NoSQL database solutions.</li>
                            <li>Integrated AWS SQS for reliable messaging between distributed systems.</li>
                            <li>Successfuly led and mentored team members in the implementation of multiple serverless integrations.</li>
                        </ul>
                        <ul className="projects--list--item--stack">
                            <li className="">AWS Lambda</li>
                            <li className="">AWS SQS</li>
                            <li className="">DynamoDB</li>
                            <li className="">AWS SAM</li>
                            <li className="">APIs</li>
                            <li className="">Webhooks</li>
                        </ul>
                    </article>
                    <article className="projects--list--item">
                        <h3>BFF Apps</h3>
                        <div className="projects--list--item--description">
                            <p>Created dynamic real-time applications using React and Vue.js, powered by serverless functions and Restful APIs.</p>
                        </div>
                        <ul className="projects--list--item--details">
                            <li className="">Implemented multiple BFF architectures to simplify client-side data handling and improve user experience</li>
                            <li className="">Developed responsive and interactive UI components with React/Vue.js and Tailwindcss.</li>
                            <li className="">Deployed serverless functions to handle backend processes, ensuring rapid scalability and reduced latency.</li>
                        </ul>
                        <ul className="projects--list--item--stack">
                            <li className="">React</li>
                            <li className="">VueJS</li>
                            <li className="">NextJS</li>
                            <li className="">Lambda</li>
                        </ul>
                    </article>
                    <article className="projects--list--item">
                        <h3>HubSpot</h3>
                        <div className="projects--list--item--description">
                            <p>Developed e-commerce websites within the HubSpot ecosystem, customizing themes and functionalities to meet client needs.</p>
                        </div>
                        <ul className="projects--list--item--details">
                            <li className="">Designed and implemented custom HubSpot themes to align with branding and marketing strategies.</li>
                            <li className="">Integrated advanced features like personalized user experiences with React and Vue.js and automated marketing workflows.</li>
                            <li className="">Conducted performance optimization to ensure fast load times and seamless user experiences.</li>
                        </ul>
                        <ul className="projects--list--item--stack">
                            <li className="">Restful APIs</li>
                            <li className="">GraphQL</li>
                            <li className="">Webhooks</li>
                            <li className="">OAuth</li>
                            <li className="">Website Themes</li>
                            <li className="">Migration</li>
                        </ul>
                    </article>
                    <article className="projects--list--item">
                        <h3>CMS</h3>
                        <div className="projects--list--item--description">
                            <p>Developed comprehensive systems in WordPress, catering to various client needs from blogs to e-commerce.</p>
                        </div>
                        <ul className="projects--list--item--details">
                            <li className="">Utilized Elementor to create visually appealing and user-friendly website designs.</li>
                            <li className="">Developed custom plugins to extend WordPress functionalities and meet specific client requirements.</li>
                            <li className="">Ensured websites were SEO-friendly and optimized for both desktop and mobile users.</li>
                        </ul>
                        <ul className="projects--list--item--stack">
                            <li className="">PHP</li>
                            <li className="">Elementor</li>
                            <li className="">Wordpress</li>
                            <li className="">Squarespace</li>
                            <li className="">HubSpot</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}