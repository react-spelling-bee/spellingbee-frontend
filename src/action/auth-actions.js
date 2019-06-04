import superagent from 'superagent';

//---------------------------------------------------------------
// SYNC
//---------------------------------------------------------------
export const set = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const remove = () => ({
  type: 'TOKEN_REMOVE',
});

//---------------------------------------------------------------
// ASYNC
//---------------------------------------------------------------
const API_URL = 'http://localhost:3000/';
const SIGNUP_ROUTE = 'signup';

export const signupRequest = user => store => {
  return superagent.post(`${API_URL}${SIGNUP_ROUTE}`) // Step 1 - making a request
    .send(user) // object that has username and password
    .withCredentials() // Vinicio - enabling cookie usage
    .then(response => {// Step 2 - get a response
      // Step 3 - Update the store with a sync action
      return store.dispatch(set(response.text));
    })
    .catch(console.log);
};
