import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML", xp: 1.9 },
      { id: 2, value: "CSS", xp: 1.9 },
      { id: 3, value: "Javascript", xp: 1.1 },
      { id: 4, value: "C#", xp: 0.6 },
      { id: 5, value: "PHP", xp: 0.6 },
      { id: 6, value: "Java", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.9 },
      { id: 2, value: "Node.js", xp: 0.9 },
      { id: 3, value: "Bootstrap", xp: 0.7 },
      { id: 4, value: "Tailwind", xp: 0.6 },
      { id: 5, value: "Sass", xp: 0.6 },
      { id: 6, value: ".NET", xp: 0.3 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
