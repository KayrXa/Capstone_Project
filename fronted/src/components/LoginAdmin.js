import React from "react";

export default function LoginAdmin() {
  let pageContent = "";
  pageContent = (
    <div>
      <div>
        <h3>Login for administrator</h3>
        <p>Here you can log in and manage movies - add, delete, update movies.</p>
        <p>if you do not remember you credentials please contact web developer: Pavel Rygl 7777 7777 7</p>
      </div>
    </div>
  );
  return <div>{pageContent}</div>;
}