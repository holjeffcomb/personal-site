"use client";

import { useState } from "react";

export default function ContactPage() {
  const [isHidden, setIsHidden] = useState(true);

  const handleCategoryChange = (e) => {
    if (e.target.value === "other") {
      setIsHidden(false);
    } else {
      if (!isHidden) {
        setIsHidden(true);
      }
    }
  };

  return (
    <>
      <h1>Contact Page</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text"></input>
        <label htmlFor="lastName">Last Name</label>
        <input type="text"></input>
        <br />
        <label htmlFor="email">Email</label>
        <input type="email"></input>
        <br />
        <label htmlFor="category">Category</label>
        <select name="category" onChange={handleCategoryChange}>
          <option value="">---Please select an option---</option>
          <option value="business">Business</option>
          <option value="general">General</option>
          <option value="other">Other</option>
        </select>
        <span className="otherDiv" hidden={isHidden}>
          <label htmlFor="otherReason">Please describe:</label>
          <input type="text"></input>
        </span>
        <br />
        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>
      </form>
    </>
  );
}
