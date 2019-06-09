import superagent from 'superagent';
// import uuid from 'uuid';

export const submit = data => ({
  type: 'SUBMIT',
  payload: data
});

export const checkAnswer = data => ({
  type: 'CHECK_ANSWER',
  payload: data
});

const API_URL = 'http://localhost:3000/';

export const submitForm = formData => store => {
  return store.dispatch(submit(
    [formData, {word: "hang", sentence: "hung my head in shame", audioFilePathWord: "http://localhost:3000/audio/hang.mp3", audioFilePathSentence: "http://localhost:3000/audio/hang-sentence.mp3"},
      {word: "ring", sentence: "ring the bell", audioFilePathWord: "http://localhost:3000/audio/hang.mp3", audioFilePathSentence: "http://localhost:3000/audio/hang-sentence.mp3"},
      {word: "sing", sentence: "sing a song", audioFilePathWord: "http://localhost:3000/audio/hang.mp3", audioFilePathSentence: "http://localhost:3000/audio/hang-sentence.mp3"}]
  ))
  // return superagent.post(`${API_URL}game`)
  //   .send(formData)
  //   .then(response => {
  //     return store.dispatch(submit(response.body))
  //   })
};
