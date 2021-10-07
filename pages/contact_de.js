import { database } from "../data/database.js";
const contentArea = document.querySelector(".app-content");

const contactDetails = database.contactInfoDe;

export function contact_de() {
  contentArea.innerHTML = `
  <div class = "content-area">
    <h2 class = "contact-clear">KONTACT</h2>
    <div class = "underline contact-clear"></div>
    <h3 class = "contact-clear">Kontaktiere mich</h3>

    <div class = "contact-form">
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />

        <div class = "outline">
          <span>Ihren Namen*</span>
          <input type = "text">
        </div>
        <div class = "outline">
          <span>Ihre E-Mail*</span>
          <input type = "email" name="email">
        </div>
        <div class = "outline">
          <span>Ihre Mail-Betreff*</span>
          <input type = "text" name="subject">
        </div>
        <div class = "outline">
          <span>Nachricht*</span>
          <textarea rows="8" cols="30" name="message"></textarea>
        </div>
        <button class = "form-submit" type="submit">E-MAIL SENDEN</button>
      </form>
      <div class = "card-holder">
        <div class = "card">
          <i class="fas fa-phone fa-2x"></i>
          <div class = "card-group">
            <b>Handynummer / WhatsApp</b>
           ${contactDetails.phoneNumber}
        </div>
        </div>
        <div class = "card">
          <i class="fas fa-envelope fa-2x"></i>
          <div class = "card-group">
            <b>E-Mail</b>
            ${contactDetails.emailAddress}
          </div>
        </div>
        <div class = "card">
          <i class="fas fa-map-marker-alt fa-2x"></i>
          <div class = "card-group">
            <b>Addresse</b>
            ${contactDetails.address}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
