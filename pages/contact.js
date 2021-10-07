import { database } from "../data/database.js";
const contentArea = document.querySelector(".app-content");

const contactDetails = database.contactInfo;

export function contact() {
  contentArea.innerHTML = `
  <div class = "content-area">
    <h2 class = "contact-clear">CONTACT ME</h2>
    <div class = "underline contact-clear"></div>
    <h3 class = "contact-clear">Get In Touch</h3>

    <div class = "contact-form">
      <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="contact" value="contact" />

        <div class = "outline">
          <span>Enter your name*</span>
          <input type = "text">
        </div>
        <div class = "outline">
          <span>Enter your email*</span>
          <input type = "email" name="email">
        </div>
        <div class = "outline">
          <span>Enter your subject*</span>
          <input type = "text" name="subject">
        </div>
        <div class = "outline">
          <span>Enter your Message*</span>
          <textarea rows="8" cols="30" name="message"></textarea>
        </div>
        <button class = "form-submit" type="submit">SEND EMAIL</button>
      </form>
      <div>
        <div class = "card">
          <i class="fas fa-phone fa-2x"></i>
          <div class = "card-group">
            <b>Phone / WhatsApp</b>
           ${contactDetails.phoneNumber}
        </div>
        </div>
        <div class = "card">
          <i class="fas fa-envelope fa-2x"></i>
          <div class = "card-group">
            <b>Email</b>
            ${contactDetails.emailAddress}
          </div>
        </div>
        <div class = "card">
          <i class="fas fa-map-marker-alt fa-2x"></i>
          <div class = "card-group">
            <b>Address</b>
            ${contactDetails.address}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
