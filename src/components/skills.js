import React from "react";
import '../index.css';

const skillArray = [
]

class Skill extends React.Component {
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

class Skills extends React.Component {
    render() {

        const listItems = skillArray.map((skill) =>
            <Skill data={skill}/>
        );

        return (
            <div class="w-screen flex flex-col w-11/12 xl:w-3/5 mx-auto">
                <hr />
                <h1 class="self-start text-4xl font-bold my-5">Skills</h1>
                {listItems}
            </div>
        );
    }
}

export { Skills };