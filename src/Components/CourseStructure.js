import React, { useState } from "react";

function Course(props) {
  const courseName = props.match.params.coursename;
  const courses = {
    reactjs: [
      { title: "React js Title 1", vid: "o8jEBYOu9dA" },
      { title: "React js Title 2", vid: "g8IIz7yEOdI" },
      { title: "React js Title 3", vid: "d_74uTOWZDI" }
    ],
    rust: [
      { title: "Rust: The Spark", vid: "5izm1IAh41s" },
      { title: "Rust Raiding Everyone", vid: "UsU6Z7tPndA" },
      { title: "Rust Solo Revenge Raid", vid: "EipgE5bcjXg" }
    ]
  };

  const [vid, uid] = useState(courses[courseName][0].vid);
  const [title, utit] = useState(courses[courseName][0].title);

  const renderVideo = () => {
    return (
      <>
        <h2>{title}</h2>
        <div className="video-container">
          <iframe
            width="853"
            height="480"
            src={"//www.youtube.com/embed/" + vid + "?rel=0"}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
  };
  return (
    <div>
      {renderVideo()}
      <div class="collection">
        {courses[courseName].map(item => {
          return (
            <a
              href="#!"
              class="collection-item"
              onClick={() => {
                uid(item.vid);
                utit(item.title);
              }}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Course;
