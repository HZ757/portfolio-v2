import React from "react";
import '../index.css';
import CourierU from '../Assets/courierU.jpg';
import redditLiberation from '../Assets/redditLiberation.png';
import SSNC from '../Assets/SSNC.jpg';
import GenSix from '../Assets/gensix.jpg';
import Radiius from '../Assets/Radiius.jpg';

const projectArray = [
    {
        imageUrl: CourierU,
        name: "CourierU",
        description: "A tool for food banks and charities to efficiently deliver supplies to those in need using optimized delivery planning and a service to request supplies. Built using MongoDB and Radar.",
        demoUrl: "https://courieru.herokuapp.com/index.html",
        codeUrl: "https://github.com/l3n0ire/courieru",
    },
    {
        imageUrl: SSNC,
        name: "Success Stories of New Canadians",
        description: "A place to read, share, and celebrate the successes of new Canadians through blogs of real stories. Created using React and Gatsby for Front-end and Netlify CMS for backend.",
        demoUrl: "https://immigrant-success-canada.netlify.app/",
        codeUrl: "https://github.com/PEAR-Impact-Project-Team-2/success-stories-of-new-canadians",
    },
    {
        imageUrl: Radiius,
        name: "Radiius Business Dashboard",
        description: "web-based business dashboard designed for businesses to manage their onlineprofiles, promotions, customer relations on the main Radiius App.",
        demoUrl: "https://app.radiius.ca/#/index",
        codeUrl: "https://github.com/HZ757/radiius-advert-portal"
    },
    {
        imageUrl: redditLiberation,
        name: "Reddit Liberation",
        description: "Productivity focused Google Chrome Extension focused on eliminating the infinite distraction cycle of Reddit while maintaining its productive utility. Allows customized presets based on user subreddit activity.",
        demoUrl: "https://chrome.google.com/webstore/detail/reddit-liberation-feed-bl/fllfmdjhnhhjokhdifhcdbpbfajfnhon",
        codeUrl: "https://github.com/HZ757/reddit-liberation-extension",
    },
    {
        imageUrl: GenSix,
        name: "GenSix Company Website",
        description: "Company Website for GenSix, a Junior Achievement company. Showcases company sponsors and the team.",
        demoUrl: "https://hz757.github.io/gen-six-website/",
        codeUrl: "https://github.com/HZ757/gen-six-website",
    },
]

class Project extends React.Component {
    render() {
        return (
            <div class="bg-sky-100 my-4 lg:h-72 rounded-xl flex flex-col md:flex-row">
                    <div class="w-full md:w-2/3 lg:w-3/5 xl:w-1/3 flex justify-center">
                        <img class="m-2 w-70 h-70" src={this.props.data.imageUrl} alt={this.props.data.name}/>
                    </div>
                    <div class="w-fit lg:w-2/3 text-left m-6">
                        <h1 class="text-4xl font-bold">{this.props.data.name}</h1>
                        <p class="my-4 h-1/2">{this.props.data.description}</p>
                        <div class="flex flex-row">
                            <button class="mr-2 bg-sky-900 h-10 rounded-xl">
                                <a href={this.props.data.demoUrl} class="mx-3 text-white font-bold">
                                    View Demo
                                </a>
                            </button>
                            <button class="ml-2 bg-sky-900 h-10 rounded-xl">
                                <a href={this.props.data.codeUrl} class="mx-3 text-white font-bold">
                                    View Code
                                </a>
                            </button>
                        </div>
                    </div>
            </div>
        );
    }
}

class Projects extends React.Component {
    render() {

        const listItems = projectArray.map((project) =>
            <Project data={project}/>
        );

        return (
            <div class="w-screen flex flex-col w-11/12 lg:w-3/5 mx-auto">
                <hr />
                <h1 class="self-start text-4xl font-bold my-5">Projects</h1>
                {listItems}
            </div>
        );
    }
}

export { Projects };