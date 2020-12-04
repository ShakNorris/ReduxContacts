import * as db from '../../Data/data'

export const initializeAction = () =>
{
    const contacts = db.getContacts()
    return{
    type: 'INITIALIZE',
    payload: contacts
    }
}

export const removeContact = (id) =>
{
    const contacts = db.getContacts()
    const newContacts = contacts.filter((x) => x.id !== id)
    db.removeContact(newContacts)
    return    {
        type: 'REMOVE_CONTACT',
        payload: newContacts,    
    }
}

export const addContact = (contact) =>
{
    const contacts = db.getContacts()
    const newContacts = [...contacts, contact]
    db.addContact(contact)
    return {
        type: 'ADD_CONTACT',
        payload: newContacts
    }
}

export const editContact = (contact) =>
{
    db.editContact(contact)
    const newContacts  = db.getContacts()
    return {
        type: 'EDIT_CONTACT',
        payload: newContacts
    }

}

export const searchAction = (searchValue) =>{
    const search = db.getContacts();
    const filteredContacts = search.filter((contact) =>
    contact.name.toUpperCase().includes(searchValue.toUpperCase()) ||
    contact.phone.toUpperCase().includes(searchValue.toUpperCase()) ||
    contact.email.toUpperCase().includes(searchValue.toUpperCase())
    )
    return{
        type: 'SEARCH',
        payload: filteredContacts
    }
}
