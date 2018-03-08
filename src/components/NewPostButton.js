import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const NewPostButton = () => (

  <RaisedButton
          label="Beitrag verfassen"
          linkButton={true}
          href="./posts/new"
          primary={true}
                />




);

export default NewPostButton;
