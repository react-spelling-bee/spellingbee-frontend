import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import * as wordActions from "../../action/word-actions";
import { FormControl, TextField, Select, Fab, Icon} from '@material-ui/core'

class Landing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      difficulty: '' || 'easy',
      number: '' || 3
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mappedSubmit(this.state);
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <FormControl>
          <h1>Hi, my name is </h1>
          <TextField
            id="name"
            label="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            // className={classes.textField}
            margin="normal"
          />
          <h1>, and I want to play a(n) </h1>
          <Select
            native
            id="difficulty"
            value={this.state.difficulty}
            onChange={this.handleChange}
            label="difficulty"
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='difficult'>difficult</option>
          </Select>
          <h1> game of spelling bee with </h1>
          <Select
            native
            id="number"
            value={this.state.difficulty}
            onChange={this.handleChange}
          >
            <option value='1'>three</option>
            <option value='5'>five</option>
            <option value='10'>ten</option>
          </Select>
          <h1> questions.</h1>
          <Fab aria-label="submit">
            <Icon>adb</Icon>
          </Fab>
        </FormControl>

        { this.props.words.length > 0 ? <Redirect to='/game'/> : undefined }
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.words,
  }
};

const mapDispatchToProps = dispatch => ({
  mappedSubmit: (formData) => dispatch(wordActions.submitForm(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);