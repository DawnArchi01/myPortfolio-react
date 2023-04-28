import React, { useEffect } from "react";
import './index.scss';

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML5",
        "CSS3",
        "C / C++",
        "JavaScript",
        "React",
        "Data Structures",
        "Algorithms",
        "NodeJS",
        "SQL",
        "MongoDB",
        "DBMS",
        "GIT",
        "GITHUB",
        "Express"
      ];

      const options = {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;