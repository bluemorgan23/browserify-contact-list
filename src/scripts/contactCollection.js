// A ContactCollection component that loads existing contacts from a json-server API, and saves new ones.
import listContacts from "./contactList"

const baseURL = "http://localhost:8088/contacts";

const API = {
    getContacts: () => {
        return fetch(baseURL).then(response => response.json());
    },
    postContact: (contactToAdd) => {
        fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactToAdd)
        }).then(() => listContacts.listAllContacts())
    }
}

export default API;