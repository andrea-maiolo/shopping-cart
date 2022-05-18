import React from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Contacts() {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <div className="contactUsPage">
      <Header />
      <div className="contactForm">
        <form>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" id="firstNameInput" type="text"></input>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" id="lastNameInput" type="text"></input>
          <label htmlFor="email">Email</label>
          <input name="email" id="emailInput" type="email"></input>
          <label htmlFor="message">Message</label>
          <input name="messageName" id="messageInput" type="textarea"></input>
          <button onClick={handleForm}>Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
