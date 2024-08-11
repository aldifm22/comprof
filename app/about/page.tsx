import Image from "next/image"
import React from "react";
import logo from "./logoLokakita.png"
import value from "./value.jpg"
import Button from "./Button" ;

export default function AboutUs() {
    return (
        <section className="px-6 py-12 bg-white" id="aboutpage">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl old-52 bold-52 lg:bold-30 ">About Loka.Tech</h2>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4">
                        <Image
                            src={logo}
                            alt=""
                            className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-lg"
                        />
                        <p className="text-lg">
                        <a className= "bold-52 lg:bold-50 ">
                        </a> 
                        <a>Loka.Tech is a consultant company based in urban design, thematic mapping, 3d visualization, urban planning, and providing public education in terms of planning studies.
                        </a>
                        <a> Our visions :</a>
                        <a>
                        <Button
                            type="button" 
                            title="Achieving Big Development in Urban Studies" 
                            icon="/play.svg"
                            variant="btn_white_text" />
                        <Button
                            type="button" 
                            title="Empower the efforts of reaching sustainable development goals" 
                            icon="/play.svg"
                            variant="btn_white_text" />
                        </a>
                        <a className= "justify-normal">Based in Surakata, Center Java and was founded in 2019 by collaboration within multidisciplinary joint team which is professional in terms of urban design, mapping, and 3d visualization.
                        </a>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl bold-52 lg:bold-30 items-center ">Our Values</h2>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 mx-auto">
                        <Image
                            src={value}
                            alt="Values"
                            className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-lg"
                            width={60}
                            height={60}
                        />
                        <p className="text-lg ">
                        In a fast-paced industry like 3D design and software development, staying current is essential. We encourage continuous learning and professional growth within our team. By staying up-to-date with the latest technologies, trends, and methodologies, we ensure that our solutions remain relevant and forward-thinking.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}