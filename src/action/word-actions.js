import superagent from 'superagent';

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
      let submitObject = response.body;
      submitObject.unshift(formData);
      return store.dispatch(submit(submitObject))
    })
};
