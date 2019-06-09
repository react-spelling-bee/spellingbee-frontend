import React from 'react';
import {connect} from "react-redux";

export class Scores extends React.Component {
  printScores = () => {
    return this.props.scores.map((score) => {
      return (<tr key={score._id}>
        <td>{score.name}</td>
        <td>{score.difficulty}</td>
        <td>{score.score}</td>
        <td>{score.missedWord}</td>
      </tr>)
    })
  };

  render() {
    let {scores} = this.props;
    return (
      <div>
        <h1>Scoreboard</h1>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Score</th>
            <th>Missed Word</th>
          </tr>
          { scores.length > 0 ? this.printScores() : null }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    scores: state.scores
  }
};

export default connect(mapStateToProps, null)(Scores);