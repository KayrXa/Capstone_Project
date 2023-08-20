import React from "react";

export default function About() {
  let pageContent = "";
  pageContent = (
    <div>
        <h1>Welcome to the Fancy movies!</h1>
        <p>Hope you enjoy your fancy movies, fell free to share your opinion about this site.</p>
 
        <div>
          <img src="https://style.shockvisual.net/wp-content/uploads/2020/06/movie-theater-with-cinema-blank-screen-and-rows-of-4CTFEHS.jpg" alt="Cinema"/>
           <p>what a nice picture</p>
        </div>
    </div>
  );
  
  return <div>{pageContent}</div>;
}