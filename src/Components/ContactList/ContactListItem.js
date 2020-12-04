import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPencilAlt, faPhone, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './ContactListItem.css'
import {connect} from 'react-redux'
import { removeContact } from '../../Redux/actions'

function ContactListItem(props){
        return <div key={props.contact.id} className='d-inline-block card mt-3 mr-3'>
        <div className='card-body'>
        <p><FontAwesomeIcon icon={faUser} /> {props.contact.name}</p>
        <p><FontAwesomeIcon icon={faPhone} /> {props.contact.phone}</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> {props.contact.email}</p>
        
        <button className='btn btn-danger float-right' 
          onClick={() =>props.removeContact(props.contact.id)}
        >
        <FontAwesomeIcon icon={faTrashAlt} />
        </button> 
        <button className='btn btn-warning float-right mr-2'
         onClick={()=>props.handleEditform(props.contact.id)}
        >
        <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        </div>
    </div>
    
}

export default connect(null, {removeContact})(ContactListItem)
