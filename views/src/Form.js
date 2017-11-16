import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Form extends Component {
  render() {
    return (
      <form action={this.props.action} method="POST">
        <TextField
          hintText="Nom" name="nom"
        /><br />
        <TextField
          hintText="Prénom" name="prenom"
        /><br />
        <TextField
          hintText='Titre' name="titre"
        /><br />
        <TextField
          hintText="Entreprise" name="entreprise"
        /><br />
        <TextField
          type='email' hintText="E-mail" name="email"
        /><br />
        <TextField
          hintText="Adresse" name="adresse"
        /><br />
        <TextField
          hintText="Mobile number" name="telephone.mobile"
        /><br />
        <TextField
          hintText="Work number" name="telephone.work"
        /><br />
        <RaisedButton type="submit" label="Envoyer" primary={true} style={style} />
      </form>
    );
  }

}

export default Form;
