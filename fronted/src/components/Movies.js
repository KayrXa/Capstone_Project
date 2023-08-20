import React from "react";

export default function Movies() {
  let pageContent = "";
  pageContent = (
    <div>
      <div>
        <h3>Movie list</h3>
        <p>HERE WILL BE DISPLAYED ALL MOVIES. MAYBE DEVIDE IT INTO PROJECTING, WILL PROJECT AND WAS PROJECTED,
            DATE WHEN PROJECTED.
        </p>
      </div>
    </div>
  );
  return <div>{pageContent}</div>;
}