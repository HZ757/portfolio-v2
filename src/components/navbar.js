import React from "react";
import '../index.css';

class NavBarButton extends React.Component {
    render() {
        return (
            <button class="m-2 text-xl text-white">{this.props.text}</button>
        )
    }
}

class NavBar extends React.Component {
  render() {
    return (
        <div class="flex flex-row fixed top-0 left-0 right-0 bg-black h-12 z-50">
            <div class="mr-auto ml-5 text-4xl text-white">
                HENRY ZHANG
            </div>
            <div class="ml-auto mr-5">
                <NavBarButton text="ABOUT"/>
                <NavBarButton text="EXPERIENCE"/>
                <NavBarButton text="EDUCATION"/>
                <NavBarButton text="PROJECTS"/>
                <NavBarButton text="SKILLS"/>
            </div>
        </div>
    );
  }
}

export { NavBar };