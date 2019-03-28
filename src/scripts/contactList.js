// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
//import contactHTML from "./contact"
import API from "./contactCollection"
import contactHTML from "./contact"



const listContacts = {
    listAllContacts: () => {
        const displayContainer = document.querySelector("#display-container")
        displayContainer.textContent = "";
        API.getContacts().then(contactArray => contactArray.forEach  (contact => {
            displayContainer.appendChild(contactHTML.buildContact(contact));
        }))
        return displayContainer;
    }
}

export default listContacts;