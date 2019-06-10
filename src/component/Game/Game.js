import React from 'react';
import Word from '../Word/Word';
import ScoreHeader from '../ScoreHeader/ScoreHeader';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import * as wordActions from "../../action/word-actions";
import { Box } from '@material-ui/core';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      index: 1,
      correctResponses: 0,
      lose: false
    }
  }
  handleCheckAnswer = (spelling) => {
    let checkResponse = { spelling, index: this.state.index};
    this.props.mappedCheckAnswer(checkResponse);

    let { words } = this.props;
    if (words[this.state.index].isCorrect) {
      this.setState({
        index: this.state.index + 1,
        correctResponses: this.state.correctResponses + 1
      });
    } else {
      this.setState({ lose: true });
    }
  };

  render() {
    const { words } = this.props;

    if (words[this.state.index] && !this.state.lose) {
      return(
        <div>
          <ScoreHeader
            correctResponses={this.state.correctResponses}
          />
          <Box>
            <Word
              word={words[this.state.index]}
              onSubmit={this.handleCheckAnswer}
            />
          </Box>
        </div>
      )
    } else {
      return (
        <Redirect to='/score'/>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.words,
  }
};

const mapDispatchToProps = dispatch => ({
  mappedCheckAnswer: (spelling) => dispatch(wordActions.checkAnswer(spelling))
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);