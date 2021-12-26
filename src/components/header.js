import React from "react";
import '../index.css';
import profilePic from '../Assets/profilepic.jpg'
import githubSVG from '../Assets/githubSvg.svg'
import linkedInSVG from '../Assets/linkedInSvg.svg'
import resume from '../Assets/Resume.pdf'

class Header extends React.Component {
  render() {
    return (
        <div class="h-40rem bg-header-background mt-12 flex flex-col">
          <img src={profilePic} alt="profile pic" class="rounded-full object-contain h-48 w-48 self-center mt-8" />
          <h1 class="text-white text-6xl font-bold mt-4">Henry Zhang</h1>
          <h1 class="text-white text-4xl mt-4">Full-Stack Software Engineer</h1>
          <h1 class="text-white text-2xl mt-4">Computer Science Co-op at University of Waterloo</h1>
          <a href={resume} class="text-white underline mt-5">Resume PDF</a>
          <div class="mt-5 flex flex-row self-center">
            <a href="https://github.com/HZ757" class="mx-1"><img src={githubSVG} alt="Github" class="fill-white h-10" /></a>
            <a href="https://www.linkedin.com/in/hz757/" class="mx-1"><img src={linkedInSVG} alt="LinkedIn" class="fill-white h-10" /></a>
          </div>
        </div>
    );
  }
}

export { Header };