// In main.js, import the ContactList component and the ContactForm component.

// The user should see the contact form at the top of the view, and the list of contacts underneath it.
import contactForm from "./contactForm"
import listContacts from "./contactList";

const formContainer = document.querySelector("#form-container")
;

formContainer.appendChild(contactForm.buildForm());
listContacts.listAllContacts();