import React from "react";
import s1 from "./s1.svg";
import s2 from "./s2.svg";
import s3 from "./s3.svg";
import s4faqlink from "./s4faqlink.png";

export default function Section4() {
  return (
    <>
      <div className="section4container">
        <h2>How it Works</h2>
        <div className="imgcontainer">
          <div>
            <img className="s1" src={s1} alt="error" />{" "}
            <p id='para1'>
              REGISTER YOURSELF Register using your Mobile no. or Aadhaar no. or
              any other Identity docs..
            </p>
          </div>
          <div>
            <img className="s2" src={s2} alt="error" />
            <p id='para2'>
              CHOOSE VACCINE LOCATION Select your nearby Vaccine Center for
              vaccination
            </p>
          </div>
          <div>
            <img className="s3" src={s3} alt="error" />
            <p id='para3'>ANY QUESTION? Please follow our Frequently asked questions (FAQ)</p>
          </div>
          <div>
            <img className="s4" src={s4faqlink} alt="error" />
            <p id='para4'>
            CONFIRM YOUR SLOT Book your slot to Get Vaccine
            </p>
          </div>
        </div>
        <button className="btn4">know how to book your appointment</button>
        <button className="btn5">Dos and Dont</button>
      </div>
    </>
  );
}
