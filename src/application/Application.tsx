import React from "react";

const Application = () => {
  //   const handleSubmit = (e: any) => {
  //     e.preventDefault();
  //   };
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All Fields are mandatory</p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="FullName"
            value="Ritik"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the Terms and
            Conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Application;
