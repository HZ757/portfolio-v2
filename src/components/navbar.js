import React from "react";
import '../index.css';
import hamburger from '../Assets/Hamburger_icon_white.svg'
import Scrollspy from 'react-scrollspy'

class NavBarButton extends React.Component {
    render() {
        return (
            <a class="m-1.5 text-xl text-white" href={'#' + this.props.text}>{this.props.text}</a>
        )
    }
}

class NavBar extends React.Component {
  render() {
    return (
        <div class="flex flex-row fixed top-0 left-0 right-0 bg-sky-900 h-12 z-50">
            <div class="mr-auto ml-5 text-4xl text-white min-w-fit font-medium hidden mini:flex">
                HENRY ZHANG
            </div>
            {/* desktop version */}
            <Scrollspy className="ml-auto my-auto hidden md:flex" items={ ['ABOUT', 'experience', 'education', 'PROJECTS', 'SKILLS'] } currentClassName="border-b-2">
                <li><NavBarButton text="ABOUT"/></li>
                <li><NavBarButton text="EXPERIENCE"/></li>
                <li><NavBarButton text="EDUCATION"/></li>
                <li><NavBarButton text="PROJECTS"/></li>
                <li><NavBarButton text="SKILLS"/></li>
            </Scrollspy>
            {/* mobile version */}
            <div class="ml-auto mr-2 flex md:hidden">
                <button>
                    <img src={hamburger} alt="dropdown"></img>
                </button>
            </div>
        </div>
    );
  }
}

export { NavBar };