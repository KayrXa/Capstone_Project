import React from "react";

export default function Contact() {
  let pageContent = "";
  pageContent = (
    <div className="container px-4 px-lg-5">
      <div  className="row gx-4 gx-lg-5 align-items-center my-5">
        <h3>Contact</h3>
        <br />
        <p><b>Address:</b> Space 143, Rakovnik 269 01</p>
        <br />
        <h5>For More Information</h5>
        <p><b>E-mail:</b> info@fancymovies.com</p>
        <p><b>Phone Number:</b> 666 666 666</p>
      </div>
    </div>
  );
  return <div>{pageContent}</div>;
}