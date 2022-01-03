import React from "react";
import '../index.css';
import hamburger from '../Assets/Hamburger_icon_white.svg'

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
            <div class="ml-auto hidden md:flex">
                <NavBarButton text="ABOUT"/>
                <NavBarButton text="EXPERIENCE"/>
                <NavBarButton text="EDUCATION"/>
                <NavBarButton text="PROJECTS"/>
                <NavBarButton text="SKILLS"/>
            </div>
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