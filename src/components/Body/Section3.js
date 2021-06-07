import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { useState } from "react";

export default function Section3() {
  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        margin: "auto",

        width: "fit-content",
      }}
    >
      <h2>Check your nearest vaccination center and slots availability</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => {
            setMessage(
              <>
                search any location for nearby vaccination center available:
                <div>
                 
                  <iframe
                    title="map"
                    width="100%"
                    height="400vh"
                    src="https://maps.mapmyindia.com/covid-places/embed?category=HSPVCC"
                    allow="geolocation"
                  />
                </div>
              </>
            );
          }}
        >
          Search By map
        </Button>
        <Button
          onClick={() => {
            setMessage(
              <div>
                this is for search by pin{" "}
                <div>
                  <input
                    id="pin"
                    type="number"
                    name="pin"
                    placeholder="enter your pin"
                  />{" "}
                  <button type="submit">submit</button>{" "}
                </div>{" "}
              </div>
            );
          }}
        >
          Search By pin
        </Button>
        <Button
          onClick={() => {
            setMessage(
              <>
                <div>this is for search by district</div>
                <form action="">
                  <label for="state"> select state</label>
                  <select name="state" id="state">
                    <option value="odisha">odisha</option>
                    <option value="karnataka">karnataka</option>
                    <option value="maharastra">maharastra</option>
                    <option value="Bihar">Bihar</option>
                  </select>
                  <label for="dist"> select district</label>
                  <select name="district" id="district">
                    <option value="sundargarh">sundargarh</option>
                    <option value="bargarh">bargarh</option>
                    <option value="aurangabad">aurangabad</option>
                    <option value="gaya">gaya</option>
                  </select>
                  <button type="submit">search here</button>
                </form>
              </>
            );
          }}
        >
          Search By District
        </Button>
      </ButtonGroup>

      <h3>{message}</h3>
    </div>
  );
}
