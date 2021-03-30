import React, { Component } from "react";
import ProgressBar from "./Progressbar"

class Languages extends Component {
    state = {
        logiciels: [
            {id: 1, value: "Suite Adobe", xp:1.9},
            {id: 2, value: "Blender", xp:1.5},
            {id: 3, value: "Unreal Engine 4", xp:1.2}
        ],
        languages: [
            {id: 1, value: "Javascript", xp:1.9},
            {id: 3, value: "C#", xp:0.6},
            {id: 2, value: "Css", xp:1.7},
            {id: 3, value: "Python", xp:0.8}
        ],
        frameworks: [
            {id: 1, value: "React", xp:1.1},
            {id: 3, value: "Bootstrap", xp:1},
            {id: 2, value: "Sass", xp:0.8}
        ]
    }

    render () {
        let {logiciels, languages, frameworks} = this.state;

        return (
            <div className="toutCompetences">
                <ProgressBar
                    logiciels={logiciels}
                    className="logicielsDisplay"
                    title="Logiciels"
                />
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Langues"
                />
                <ProgressBar
                    frameworks={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks"
                />
    
            </div>
        );
    }
}

export default Languages;
