import superagent from 'superagent';

export const submit = data => ({
  type: 'SAVE_SCORE',
  payload: data
});

const API_URL = 'http://spellingbee-backend.herokuapp.com/' || 'http://localhost:3000/';
export const saveScore = formData => store => {
  return superagent.post(`${API_URL}score`)
    .send(formData)
    .then(() => {
      return superagent.get(`${API_URL}scores`)
        .then(response => {
          return store.dispatch(submit(response.body));
        })
    })
};