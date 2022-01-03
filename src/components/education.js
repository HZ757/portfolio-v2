import React from "react";
import '../index.css';
import uwLogo from '../Assets/UniversityOfWaterloo.webp';
import uOfTLogo from '../Assets/UofTlogo.webp';

const experienceArray = [
    {
        name: "University of Waterloo",
        position: "Bachelors of Computer Science",
        date: "2020 - 2024",
        image: uwLogo,
        info: [
            
        ]
    },
    {
        name: "University of Toronto",
        position: "Computer Science",
        date: "2019 - 2020",
        image: uOfTLogo,
        info: [
            "Completed 5 credits towards a BsC in Computer Science, which were transferred to University of Waterloo"
        ]
    }
]

class School extends React.Component {
    render() {
        const listInfo = this.props.data.info.map((point, index) => 
            <li key={index}>{point}</li>
        );

        return (
            <div class="flex flex-row my-2">
                <div class="h-0 mt-neg" id="EDUCATION"></div>
                <img src={this.props.data.image} alt={this.props.data.name} class="hidden md:inline h-20 w-20"/>
                <div class="w-full flex flex-col">
                    <div class="w-full md:ml-4 flex flex-col md:flex-row">
                        <div class="flex flex-col">
                            <p class="mr-auto text-2xl md:text-2xl font-bold text-left">{this.props.data.name}</p>
                            <p class="mr-auto font-bold">{this.props.data.position}</p>
                        </div>
                        <div class="mr-auto md:ml-auto md:mr-0">
                            <p>{this.props.data.date}</p>
                        </div>
                    </div>
                    <div class="md:m-4 ml-8 md:ml-10">
                        <ul class="list-disc text-left">
                            {listInfo}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class Education extends React.Component {
    render() {

        const listItems = experienceArray.map((experience) =>
            <School data={experience}/>
        );

        return (
            <div class="w-screen flex flex-col w-11/12 xl:w-3/5 mx-auto">
                <hr />
                <h1 class="self-start text-4xl font-bold my-5">Education</h1>
                {listItems}
            </div>
        );
    }
}

export { Education };