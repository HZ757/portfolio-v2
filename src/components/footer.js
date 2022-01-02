import React from "react";
import githubSVG from '../Assets/githubSvgBlack.svg'
import linkedInSVG from '../Assets/linkedInSvgBlack.svg'
import '../index.css';

class Footer extends React.Component {
  render() {
    return (
        <div class="mt-5 w-full w-screen flex flex-col w-11/12 xl:w-3/5 mx-auto h-20">
            <hr />
            <div class="flex flex-col md:flex-row w-full mt-2 items-stretch md:justify-between">
                <p>&copy; Henry Zhang. All Rights Reserved.</p>

                <div class="flex flex-row m-auto md:m-0">
                    <a href="https://github.com/HZ757" class="mx-1"><img src={githubSVG} alt="Github" class="fill-white h-10" /></a>
                    <a href="https://www.linkedin.com/in/hz757/" class="mx-1"><img src={linkedInSVG} alt="LinkedIn" class="fill-white h-10" /></a>
                </div>
            </div>
        </div>
    );
  }
}

export { Footer };