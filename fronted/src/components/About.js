import React from "react";

export default function About() {
  let pageContent = "";
  pageContent = (
    <div className="container px-4 px-lg-5">
      <div  className="row gx-10 gx-lg-5 align-items-center my-5">
        <h1>Welcome to the Fancy movies!</h1>
        <p className="p-3 text-success-emphasis bg-primary-subtle border border-info-subtle rounded-3 ">Hope you enjoy your fancy movies, fell free to share your opinion about this site.</p>
 
        <div className="col-sm-12 col-md-6">
          <img src="https://style.shockvisual.net/wp-content/uploads/2020/06/movie-theater-with-cinema-blank-screen-and-rows-of-4CTFEHS.jpg" alt="Cinema"/>
           <p>what a nice picture</p>
        </div>
      </div>
  </div>
  );
  
  return <div>{pageContent}</div>;
}