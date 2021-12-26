import React from "react";
import '../index.css';
import awLogo from '../Assets/ArcticWolfLogo.png';
import uwLogo from '../Assets/UniversityOfWaterloo.png';
import cynorixLogo from '../Assets/cynorix.png';

const experienceArray = [
    {
        name: "Arctic Wolf Networks",
        position: "Software Developer Intern",
        date: "January 2021 - Present",
        image: awLogo
    },
    {
        name: "Cynorix",
        position: "Full-Stack Software Engineer / Advisor",
        date: "September 2021 - December 2021",
        image: cynorixLogo

    },
    {
        name: "University of Waterloo",
        position: "Full-Stack Software Engineer",
        date: "May 2021 - August 2021",
        image: uwLogo
    }
]

class Experience extends React.Component {
    render() {
        return (
            <div class="flex flex-row my-2">
                <img src={this.props.data.image} alt={this.props.data.name} class="h-20"/>
                <div class="w-full ml-4">
                    <div class="flex flex-row w-full">
                        <p class="mr-auto text-2xl font-bold">{this.props.data.position}</p>
                        <p class="ml-auto">{this.props.data.date}</p>
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="mr-auto font-bold">{this.props.data.name}</p>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

class Experiences extends React.Component {
    

    render() {

        const listItems = experienceArray.map((experience) =>
            <Experience data={experience}/>
        );

        return (
            <div class="w-screen flex flex-col w-4/5 md:w-3/5 mx-auto">
                <h1 class="self-start text-4xl font-bold my-5">Experience</h1>
                
                {listItems}
            </div>
        );
    }
}

export { Experiences };