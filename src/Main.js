import React from 'react'
import Search from './Components/Search/Search.js'
import ContactList from './Components/ContactList/ContactList.js'
import {initializeAction, searchAction} from './Redux/actions'
import {connect} from 'react-redux'
import AddContact from './Components/ContactForms/AddContact.js'
import EditContact from './Components/ContactForms/EditContact.js'

class Main extends React.Component
{

    state = {
        isEnable: true,
        addForm: false,
        editForm: false,
        currentId: null,
        searchValue: '',
      }
    
      componentDidMount() { 
        this.props.initializeAction()
      }
    
      componentDidUpdate(prevProps, prevState, snapshot)
      {
        if(prevState.searchValue !== this.state.searchValue)
        { 
          this.props.searchAction(this.state.searchValue)
        }
      }
    
      
      handleSearch = (event) => {
        this.setState({
          searchValue: event.target.value,
        })
      }

      handleCloseAddForm = () => {
        this.setState({ addForm: false })
      }
      
      handleCloseEditForm = () => {
        this.setState({ editForm: false})
      }
     
      handleShowAddForm = () => {
        this.setState({ addForm: true })
      }
     
      handleEditform = (id) => 
      {
        this.setState({editForm: true, currentId: id })
      }

    
      render() {
        let element
        if(this.state.addForm)
        {
        element =( 
            <>
            {}
             <AddContact 
              close={this.handleCloseAddForm} 
              handleAddContact = {this.handleAddContact}/>
            </>)

        }
       else if(this.state.editForm)
        {
          element = (
          <>
            <EditContact
             close={this.handleCloseEditForm}
             currentId = {this.state.currentId}/>
          </>)

        }else{
         element =( 
            <>
            <Search searchValue={this.state.searchValue} handleSearch={this.handleSearch}  showAddForm={this.handleShowAddForm}/>
            <ContactList
                contacts={this.state.contacts}
                handleEditform={this.handleEditform} />
            </>)
 
        }
        return ( element )
      }
}

const mapStateToProps = state => ({ contacts: state.contacts})
export default connect(mapStateToProps, {initializeAction, searchAction})(Main)