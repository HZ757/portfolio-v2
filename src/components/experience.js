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
        date: "May 2023 - Aug 2023",
        image: msftLogo,
        teamInfo: "🤖 Outlook Copilot Team",
        info: [
            "Designed and developed GenAI prompt management system with an ObjectStore Database cutting worldwide GPT-4 prompt deployment time for Outlook Copilot from 2 weeks to 4 minutes (99.9% improvement)",
            "Added support for versioning, A/B testing and automated roll-out/rollback of Semantic Kernel prompt templates to facilitate long term iterative improvements in the quality of Copilot responses",
            "Implemented caching to greatly reduce reads on ObjectStore database and decrease average request latency"
        ]
    },
    {
        name: "Microsoft Corporation",
        companyUrl: "https://www.microsoft.com/",
        position: "Software Engineer Intern",
        date: "Jun 2022 - Sep 2022",
        image: msftLogo,
        teamInfo: "📧 Outlook API Gateway Team",
        info: [
            "Developed telemetry for measuring latency and reliability of Outlook's backend/middleware, improving on existing metrics by reducing false positive rate by 98%.",
            "Created telemetry using Azure Application insights to track GraphQL error info of API endpoints serving over 350 million active users.",
            "Developed dashboards using Jarvis to monitor and improve latency and reliability for Outlook API Gateway."
        ]
    },
    {
        name: "Arctic Wolf Networks",
        companyUrl: "https://arcticwolf.com/",
        position: "Software Developer Co-op",
        date: "Jan 2022 - Apr 2022",
        image: awLogo,
        teamInfo: "🛡️ Managed Risk Team",
        info: [
            "Created data cross-referencing service to find and classify devices on client networks using Elasticsearch over ingested logs of 2000+ enterprise networks allowing security engineers to eliminate overlooked security gaps",
            "Shortened on-boarding process for new customers and increased security coverage by developing Python scripts for automating on-boarding workflow tasks",
            "Built report generation template for security metrics with Django serving 4000+ businesses"
        ]
    },
    {
        name: "University of Waterloo",
        companyUrl: "https://uwaterloo.ca/",
        position: "Software Developer Co-op",
        date: "May 2021 - Dec 2021",
        image: uwLogo,
        teamInfo: "🔐 Secure File Sharing",
        info: [
            "Launched Secure File Sharing web application allowing users to share files with a key that is not reused or stored, applying on research by Prof. Amir Khandani",
            "Deployed real-time database using Firebase and node.js, integrating Google Drive API and Microsoft Graph API",
            "Enabled file sharing service to support sharing using Google Drive and Microsoft OneDrive"
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
                            <p class="mr-auto">{this.props.data.teamInfo}</p>
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
                <h1 class="self-start text-4xl font-bold my-5">Experience</h1>
                {listItems}
            </div>
        );
    }
}

export { Experiences };