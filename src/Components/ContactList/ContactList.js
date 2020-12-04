import React, {Component} from 'react'
import ContactListItem from './ContactListItem.js'
import { connect } from 'react-redux'
import './ContactList.css'

class ContactList extends Component{
   render(){
    return <div className='container mt-4'>
        <h4>კონტაქტები</h4>
        <hr />
        <br />
            <div>
                {
                   this.props.contacts && 
                   this.props.contacts.map(contact => 
                    <ContactListItem
                    contact = { contact }
                    handleEditform = {this.props.handleEditform}/> )
                }
            </div>
        </div>
   }

}

const mapStateToProps = state => ( {contacts: state.contacts} )
export default connect(mapStateToProps, undefined)(ContactList)