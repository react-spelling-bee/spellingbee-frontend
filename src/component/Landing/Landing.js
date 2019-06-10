import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as wordActions from "../../action/word-actions";
import { Fab, Icon, Box} from '@material-ui/core'

class Landing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      difficulty: '' || 'easy',
      numberOfQuestions: '' || 3
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
        <h1>Hi, my name is </h1>
        <input
          type="text"
          id="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <h1>, and I want to play a(n) </h1>
        <select
          id="difficulty"
          value={this.state.difficulty}
          onChange={this.handleChange}
          required
        >
          <option value='easy'>easy</option>
          <option value='medium'>medium</option>
          <option value='difficult'>difficult</option>
        </select>
        <h1> game of spelling bee with </h1>
        <select
          id="numberOfQuestions"
          value={this.state.numberOfQuestions}
          onChange={this.handleChange}
          required
        >
          <option value='1'>three</option>
          <option value='5'>five</option>
          <option value='10'>ten</option>
        </select>
        <h1> questions.</h1>
        <Box m={2}>
          <Fab aria-label='submit' type='submit' color='primary'>
            <Icon>adb</Icon>
          </Fab>
        </Box>

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
  mappedSubmit: (formData) => dispatch(wordActions.submitForm(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);