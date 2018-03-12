import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const NewPostButton = (label, href, type) => (

  <RaisedButton
        /*  label={label}
          linkButton={true}
          href={href}
          primary={true}
          */
          href="./posts/new"
          primary={true}
          label='Neuer Post'

                />




);

export default NewPostButton;
