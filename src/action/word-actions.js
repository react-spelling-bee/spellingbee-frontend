import superagent from 'superagent';
import dotenv from 'dotenv';
dotenv.config();
// import uuid from 'uuid';

export const submit = data => ({
  type: 'SUBMIT',
  payload: data
});

export const checkAnswer = data => ({
  type: 'CHECK_ANSWER',
  payload: data
});

export const newGame = () => ({
  type: 'NEW_GAME',
  payload: []
});

const API_URL = 'https://spellingbee-backend.herokuapp.com/' || 'http://localhost:3000/';

export const submitForm = formData => store => {
  return superagent.post(`${API_URL}game`)
    .send(formData)
    .then(response => {
      return store.dispatch(submit(response.body))
    })
};
