import React from "react"
import Thumbnail from "./Thumbnail";
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
        <Thumbnail
            link="/twitter"
            image="https://pbs.twimg.com/profile_images/1308010958862905345/-SGZioPb_400x400.jpg"
            title="Twitter Newsfeed"
            category="Mobile App"
            />
 
        <Thumbnail
            link="/airbnb"
            image="http://airbnb-image-url.jpg>"
            title="Airbnb Experiences"
            category="Website"
            />
 
        <Thumbnail
            link="/photoshop"
            image="http://photoshop-image-url.jpg"
            title="Photoshop Redesign"
            category="Desktop App"
        />
    </div>
  )
}
 
export default Projects;