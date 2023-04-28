import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About me
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                I am Amit Mishra. This website is created by me.  Basically by
                profession, I am a full-stack software developer based on MERN.
                If you like my website then please give me your opinion on my whatsapp
                +91818193941 and on my instagram handle @amit_mishraaa.....{" "}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
