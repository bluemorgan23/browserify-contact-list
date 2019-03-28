// A Contact component that displays a person's name, phone number, and address.

const contactHTML = {

    buildHtmlElement: (element, text, id) => {
        const newElement = document.createElement(element);
        if(text){
            newElement.textContent = text;
        }
        if(id){
            newElement.id = id;
        }
        return newElement;
    },

    contactToObject: (name, phone, address) => {
        return {
            name: name,
            phoneNumber: phone,
            address: address
        }
    },

    buildContact: (contactObject) => {
        // const displayContainer = document.querySelector("#display-container");
        const contactFrag = document.createDocumentFragment();
        const contactSection = contactHTML.buildHtmlElement("section")

        contactSection.appendChild(contactHTML.buildHtmlElement("p", `Name: ${contactObject.name}`, `contact-name--${contactObject.id}`));
        contactSection.appendChild(contactHTML.buildHtmlElement("p", `Phone: ${contactObject.phoneNumber}`, `contact-phone--${contactObject.id}`));
        contactSection.appendChild(contactHTML.buildHtmlElement("p", `Address: ${contactObject.address}`, `contact-address--${contactObject.id}`));
        contactSection.innerHTML += "<hr/>"
        contactFrag.appendChild(contactSection);

        return contactFrag;
    }
}

export default contactHTML;