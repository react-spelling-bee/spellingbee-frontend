import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import {connect} from "react-redux";

export class ScoreHeader extends React.Component {
  render() {
    const { name, difficulty, numberOfQuestions } = this.props.words[0];
    let { correctResponses } = this.props;
    return (
      <div>
        <AppBar position='static'>
          <Toolbar variant="dense">
            <ul>
              <li><strong>Name</strong>: {name}</li>
              <li><strong>Difficulty</strong>: {difficulty}</li>
              <li><strong>Score</strong>: {correctResponses} out of {numberOfQuestions}</li>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
};

export default connect(mapStateToProps, null)(ScoreHeader);