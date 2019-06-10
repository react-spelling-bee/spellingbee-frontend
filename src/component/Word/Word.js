import React from 'react';
import {connect} from "react-redux";
import {checkAnswer} from "../../action/word-actions";
import {TextField, Fab, Box} from "@material-ui/core";

export class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spelling: ''
    };
  }

  handlePlay = (wordOrSentence) => {
    let audio = new Audio();
    audio.src = wordOrSentence === 'word'
      ? this.props.word.audioFilePathWord
      : this.props.word.audioFilePathSentence;
    audio.play();
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    let { word } = this.props;

    return(
      <div>
        <h1 style={{display: 'block'}}>{ word.sentence }</h1>
        <Box m={2}>
          <Fab
            variant="extended"
            size="small"
            onClick={this.handlePlay.bind(this, 'word')}
            mr={5}
          >
            hear word
          </Fab>
          <Fab
            variant="extended"
            size="small"
            onClick={this.handlePlay.bind(this, 'sentence')}
          >
            use in a phrase
          </Fab>
        </Box>


        <form onSubmit={this.handleSubmit}>
          <TextField
            id="spelling"
            label="spelling"
            placeholder="spell word here"
            value={this.state.spelling}
            onChange={this.handleChange}
            spellCheck={false}
            margin="normal"
            required
          />
        </form>
      </div>
    )
  }
}

export default connect(null, null)(Word);