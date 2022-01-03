import React from "react";
import '../index.css';

const skillArray = [
    ["Languages", "JavaScript, C++, C, Python, HTML, CSS"],
    ["Frameworks and Libraries", "Node.js, Express.js, Next.js, React.js, Redux, Vue.js, jQuery, Bootstrap, Tailwind CSS, NumPy"],
    ["Databases", "MongoDB, Firebase"],
    ["Tools", "Linux, Git, Jura, Heroku, Vercel, Netlify CMS"],
    ["Concepts", "RESTful API, Object Oriented Programming, Agile Scrum"],
]

class Skill extends React.Component {
    render() {
        return (
            <div class="bg-sky-100 my-2 rounded-xl flex flex-col">
                <div class="rounded-t-lg bg-gradient-to-r from-amber-200 text-left ">
                    <h1 class="font-bold m-2">
                        {this.props.data[0]}
                    </h1>
                </div>

                <div class="text-left overflow-hidden">
                    <p class="m-2">
                        {this.props.data[1]}
                    </p>
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
            <div class="w-screen flex flex-col w-11/12 xl:w-3/5 mx-auto" id="SKILLS">
                <hr />
                <h1 class="self-start text-4xl font-bold my-5">Skills</h1>
                {listItems}
            </div>
        );
    }
}

export { Skills };