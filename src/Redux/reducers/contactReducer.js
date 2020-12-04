const initialState = 
{
    contacts: [{id: 0, name: "Wilbur",phone:"+995599983797",email:"Wilbur@gmail.com"}],
}


const contactReducer = (state = initialState, action) =>
{
    const {type, payload} = action
    switch(type)
    {
        case 'INITIALIZE':
            return {contacts: payload}
        case 'ADD_CONTACT':
            return {contacts: payload}
        case 'EDIT_CONTACT':
            return {contacts: payload}
        case 'REMOVE_CONTACT':
            return {contacts: payload}
        case 'SEARCH':
            return {contacts: payload}
        default:
            return state
    }
}

export default contactReducer