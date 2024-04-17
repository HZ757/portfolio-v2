import React from "react";
import '../index.css';
import msftLogo from '../Assets/Microsoft_logo.svg';
import awLogo from '../Assets/ArcticWolfLogo.webp';
import uwLogo from '../Assets/UniversityOfWaterloo.webp';

const experienceArray = [
    {
        name: "Microsoft Corporation",
        companyUrl: "https://www.microsoft.com/",
        position: "Software Engineer Intern",
        date: "Jun 2022 - Sep 2022",
        image: msftLogo,
        info: [
            "Tech Stack: C#, Azure Application Insights, GraphQL, WBXml, Microsoft Geneva, Kusto Query Language, Jarvis, Azure DevOps",
            "Created telemetry using Azure Application insights to track GraphQL error info of API endpoints serving over 350 million active users.",
            "Developed dashboards using Jarvis to monitor and improve latency and reliability for Outlook API Gateway."
        ]
    },
    {
        name: "Arctic Wolf Networks",
        companyUrl: "https://arcticwolf.com/",
        position: "Software Developer Intern",
        date: "Jan 2022 - Apr 2022",
        image: awLogo,
        info: [
            "Tech Stack: Python, Django, Docker, Elasticsearch, Jenkins, Amazon CloudWatch, Bash, Linux, Git, JIRA",
            "Developed service that crossreferences data from different sources to identify and classify customer devices.",
            "Created automation tools to streamline workflow for Security Engineers and increase security coverage.",
            "Built customizable report generation template using Django for customer security risk metrics."
        ]
    },
    {
        name: "University of Waterloo",
        companyUrl: "https://uwaterloo.ca/",
        position: "Full-Stack Software Engineer",
        date: "May 2021 - Dec 2021",
        image: uwLogo,
        info: [
            "Tech Stack: Firebase, Express.js, Node.js, JavaScript, Google Drive API, Microsoft Azure, Microsoft Graph API",
            "Developed Secure File Sharing application that allows users to send and receive files on google drive with a key that is not reused or stored.",
            "Created API for file sharing and account maintenance features (uploading, sharing and downloading files, as well as Multi-factor authentication, changing password, phone number, security questions)",
            "Developed Front-End web app for the Secure File Sharing application",
            "Deployed web app and real-time database using Firebase and node.js",
            "Developed Microsoft OneDrive version of the secure file sharing app, increasing compatibility",
            "Instructed arriving co-op students about web development with JavaScript frameworks",
        ]
    }
]

class Experience extends React.Component {
    render() {
        const listInfo = this.props.data.info.map((point, index) => 
            <li key={index}>{point}</li>
        );

        return (
            <div class="flex flex-row my-2" id="experience">
                <div class="h-0 mt-neg" id="EXPERIENCE"></div>
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
            <div class="w-screen flex flex-col w-11/12 xl:w-3/5 mx-auto">
                <h1 class="self-start text-4xl font-bold my-5">Work Experience</h1>
                {listItems}
            </div>
        );
    }
}

export { Experiences };