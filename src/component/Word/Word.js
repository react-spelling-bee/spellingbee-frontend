import React from 'react';

export default class Game extends React.Component {
  onButtonClick(id){
    let audio = document.getElementById(id);
    try {
      audio.load();
      audio.play();
    } catch(e) {
      console.error(e)
    }
  }
  render() {
    let { word } = this.props;

    return(
      <div>
        <h1>{ word.sentence }</h1>
        <audio src={word.audioFilePathWord} id={word.id}/>
        <button onClick={this.onButtonClick(word.id)}>hear word</button>
        <audio src={word.audioFilePathSentence} id={word.id}/>
        <button onClick={this.onButtonClick(word.id)}>use in a phrase</button>

        <form id={word.id}>
          <input type="text" name="spelledWord" placeholder="Spell word here" required />
        </form>
      </div>
    )
  }
};
