import React, { Component } from 'react';
import Form from './Form';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};
const customContentStyle = {
  textAlign : 'center'
};


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

 handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };

  render() {
    return (
      <ul>
        {this.props.contacts.map((contact, index)=> {
          return (
            <li key={index}>
              <h3>Nom : {contact.nom} {contact.prenom}</h3>
              <p>Titre : {contact.titre}</p>
              <p>Entreprise : {contact.entreprise}</p>
              <p>E-mail : {contact.email}</p>
              <p>Adresse : {contact.adresse}</p>
              <p>Mobile number : {contact.telephone.mobile}</p>
              <p>Work number : {contact.telephone.work}</p>

              <RaisedButton href={`http://localhost:8080/listeContact/${contact._id}`} label='remove' primary={true} style={style}/>
              <RaisedButton onClick={this.handleOpen} label='edit' primary={true} style={style}/>
              <Dialog
                title="Change Contact"
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                contentStyle={customContentStyle}
              >
                <Form action={`http://localhost:8080/listeContact/update/${contact._id}`}/>
              </Dialog>
            </li>

          )
        })
        }
      </ul>
    );
  }
}

export default List;
