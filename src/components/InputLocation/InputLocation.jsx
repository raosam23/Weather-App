import React, { useState } from "react";

export default function InputLocation() {
  const hostUrl = "http://localhost:5000";

  const [location, setLocation] = useState("");

  const handleOnChange = (event) => {
    setLocation(event.target.value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    // console.log(location)
    try {
      const response = await fetch(`${hostUrl}/weather/getweather`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location: location }),
      });
      const data = await response.json();
      console.log(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-5 d-flex justify-content-center">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="loc" className="form-label my-3">
            <h3>Location</h3>
          </label>
          <input
            name="loc"
            type="text"
            className="form-control"
            id="loc"
            aria-describedby="emailHelp"
            placeholder="Enter the name of a city"
            value={location}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Go
        </button>
      </form>
    </div>
  );
}
