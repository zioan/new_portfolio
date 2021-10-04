import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");

const contactDetails = database.contactInfo;

export function contact () {

  contentArea.innerHTML = `
  <div class = "content-area">
    <h2>CONTACT ME</h2>
    <div class = "underline"></div>
    <h3>Get In Touch</h3>

    <div class = "contact-form">
      <form>
        <div class = "outline">
          <span>Enter your name*</span>
          <input type = "text">
        </div>
        <div class = "outline">
          <span>Enter your email*</span>
          <input type = "email" placeholder = "">
        </div>
        <div class = "outline">
          <span>Enter your subject*</span>
          <input type = "text">
        </div>
        <div class = "outline">
          <span>Enter your Message*</span>
          <textarea></textarea>
        </div>
      </form>
      <div>
        <div class = "card">
        <i class="fas fa-phone"></i>
        <div class = "card-group">
          <spam>Phone</spam>
          <br>
          ${contactDetails.phoneNumber}
        </div>
        </div>
        <div class = "card">
          <i class="fas fa-envelope"></i>
          <div class = "card-group">
            <spam>Email</spam>
            <br>
            ${contactDetails.emailAddress}
          </div>
        </div>
        <div class = "card">
          <i class="fas fa-map-marker-alt"></i>
          <div class = "card-group">
            <spam>Address</spam>
            <br>
            ${contactDetails.address}
          </div>
        </div>
      </div>
    </div>
  </div>
  `

}