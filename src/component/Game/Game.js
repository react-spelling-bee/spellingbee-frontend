import React from 'react';
import Word from '../Word/Word';
import {connect} from "react-redux";

class Game extends React.Component {
  render() {
    const {words} = this.props;
    console.log(words)

    if (words) {
      return(
        <div>
          {
            words.map(word => {
              return <Word word={word}/>
            })
          }
        </div>
      )
    }
  }
};

const mapStateToProps = (state) => {
  return {
    words: state.words,
  }
};

export default connect(mapStateToProps, null)(Game);