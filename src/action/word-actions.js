import superagent from 'superagent';
// import uuid from 'uuid';

export const submit = data => ({
  type: 'SUBMIT',
  payload: data
});

const API_URL = 'http://localhost:3000/';

export const submitForm = formData => store => {
  return superagent.post(`${API_URL}game`)
    .send(formData)
    .then(response => {
      return store.dispatch(submit(response.body))
    })
};
