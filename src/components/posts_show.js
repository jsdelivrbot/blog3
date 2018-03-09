import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPost, deletePost} from "../actions";
import divStyles from '../../style/divStyles';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class PostsShow extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (<div style={divStyles.home}>

      <h3 style={{
              'margin' : ' 1em 0 1em 0'
        }}>{post.title}</h3>
      <h6 style={{
        'margin' : ' 1em 0 1em 0'
        }}>Categories: {post.categories}</h6>
      <p>{post.content}</p>
      <MuiThemeProvider>
        <RaisedButton href="/" primary='true'  label='Startseite'/>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <RaisedButton style={{
            'margin' : '0 0 0 .5em'
          }} href="" secondary="true"
          onClick={this.onDeleteClick.bind(this)}
          label='Löschen'/>
      </MuiThemeProvider>
    </div>);
  }
}

function mapStateToProps({
  posts
}, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
