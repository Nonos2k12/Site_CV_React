import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1 },
      { id: 2, value: "CSS", xp: 2 },
      { id: 3, value: "C#", xp: 0.5 },
      { id: 4, value: "PHP", xp: 0.8 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.7 },
      { id: 2, value: "Bootstrap", xp: 0.4 },
      { id: 3, value: "Sass", xp: 0.5 },
      { id: 4, value: "Node.js", xp: 0.7 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
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
