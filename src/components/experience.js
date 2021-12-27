import React from "react";
import '../index.css';
import awLogo from '../Assets/ArcticWolfLogo.png';
import uwLogo from '../Assets/UniversityOfWaterloo.png';
import cynorixLogo from '../Assets/cynorix.png';

const experienceArray = [
    {
        name: "Arctic Wolf Networks",
        companyUrl: "https://arcticwolf.com/",
        position: "Software Developer Intern",
        date: "January 2022 - Present",
        image: awLogo,
        info: []
    },
    {
        name: "Cynorix (University of Waterloo)",
        companyUrl: "https://www.cynorix.com/",
        position: "Full-Stack Software Engineer / Advisor",
        date: "September 2021 - December 2021",
        image: cynorixLogo,
        info: [
            "Tech Stack: Firebase, Express.js, Node.js, JavaScript, Microsoft Azure, Microsoft Graph API",
            "Instructed arriving co-op students about web development with JavaScript frameworks",
            "Developed Microsoft OneDrive version of the secure file sharing app, increasing compatibility"
        ]
    },
    {
        name: "University of Waterloo",
        companyUrl: "https://uwaterloo.ca/",
        position: "Full-Stack Software Engineer",
        date: "May 2021 - August 2021",
        image: uwLogo,
        info: [
            "Tech Stack: Firebase, Express.js, Node.js, JavaScript, Google Drive API",
            "Developed Secure File Sharing application that allows users to send and receive files on google drive with a key that is not reused or stored.",
            "Created API for file sharing and account maintentence features (uploading, sharing and downloading files, as well as Multi-factor authentication, changing password, phone number, security questions)",
            "Developed Front-End web app for the Secure File Sharing application",
            "Deployed web app and real-time database using Firebase and node.js",
        ]
    }
]

class Experience extends React.Component {
    render() {
        const listInfo = this.props.data.info.map((point) => 
            <li>{point}</li>
        );

        return (
            <div class="flex flex-row my-2">
                <img src={this.props.data.image} alt={this.props.data.name} class="hidden md:inline h-20"/>
                <div class="w-full flex flex-col">
                    <div class="w-full md:ml-4 flex flex-col md:flex-row">
                        <div class="flex flex-col">
                            <p class="mr-auto text-2xl md:text-2xl font-bold text-left">{this.props.data.position}</p>
                            <a href={this.props.data.companyUrl} class="mr-auto font-bold text-blue-800">{this.props.data.name}</a>
                        </div>
                        <div class="mr-auto md:ml-auto md:mr-0">
                            <p>{this.props.data.date}</p>
                        </div>
                    </div>
                    <div class="m-4 ml-8 md:ml-10">
                        <ul class="list-disc text-left">
                            {listInfo}
                        </ul>
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
            <div class="w-screen flex flex-col w-11/12 md:w-3/5 mx-auto">
                <h1 class="self-start text-4xl font-bold my-5">Experience</h1>
                {listItems}
            </div>
        );
    }
}

export { Experiences };