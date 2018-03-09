import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";
import divStyles from '../../style/divStyles';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div style={divStyles.home}>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Überschrift"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Hashtag"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Inhalt"
          name="content"
          component={this.renderField}
        />
        <MuiThemeProvider>
     <RaisedButton
       //type="submit"
       primary="true"
       label='Posten'
     />
        </MuiThemeProvider>

          <MuiThemeProvider  >
     <RaisedButton
       style={{'margin':'0 0 0 .5em'}}
       href="/"
       secondary="true"
       label='Verwerfen'
     />
   </MuiThemeProvider>

      </form>
    </div>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Kein Titel vorhanden";
  }
  if (!values.categories) {
    errors.categories = "Bitte Hashtag angeben";
  }
  if (!values.content) {
    errors.content = "Inhalt darf nicht leer sein";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
