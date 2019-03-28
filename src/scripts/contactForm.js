// A ContactForm component that listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the ContactCollection component.
import contactHTML from "./contact"
import contactCollection from "./contactCollection"

const contactForm = {
    buildForm: () => {
        const form = contactHTML.buildHtmlElement("form", undefined, "form");
        const formFieldset = contactHTML.buildHtmlElement("fieldset");
        formFieldset.appendChild(contactHTML.buildHtmlElement("legend", "Enter New Contact Information"));
        formFieldset.appendChild(contactHTML.buildHtmlElement("label", "Name: "));
        formFieldset.appendChild(contactHTML.buildHtmlElement("input", undefined, "input-name"));
        formFieldset.appendChild(contactHTML.buildHtmlElement("label", "Phone Number: "));
        formFieldset.appendChild(contactHTML.buildHtmlElement("input", undefined, "input-phone"));
        formFieldset.appendChild(contactHTML.buildHtmlElement("label", "Address: "));
        formFieldset.appendChild(contactHTML.buildHtmlElement("input", undefined, "input-address"));
        const addContactButton = contactHTML.buildHtmlElement("button", "Add Contact", "add-contact-button");
        form.appendChild(formFieldset);
        formFieldset.appendChild(addContactButton);
        addContactButton.addEventListener("click", function(){
            let nameInput = document.querySelector("#input-name").value;
            let phoneInput = document.querySelector("#input-phone").value;
            let addressInput = document.querySelector("#input-address").value;
            contactCollection.postContact(contactHTML.contactToObject(nameInput, phoneInput, addressInput))
            form.reset();
        })
        return form;
    }
}

export default contactForm;