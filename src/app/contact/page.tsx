"use client";

import styles from "../page.module.css";
import React, { ChangeEvent, FocusEvent, useState } from "react";
import isValidEmail from "../utils/isValidEmail";

export default function ContactPage() {
  const [isHidden, setIsHidden] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "other") {
      setIsHidden(false);
    } else {
      if (!isHidden) {
        setIsHidden(true);
      }
    }
    setCategory(e.target.value);
  };

  const emailValidation = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e);
    if (!isValidEmail(e.target.value)) {
      e.target.classList.add(styles.invalid);
    } else {
      e.target.classList.remove(styles.invalid);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // logic to send form data to email
  };

  return (
    <>
      <h1>Contact Page</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={emailValidation}
          ></input>
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
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
