export default store => next => action => {
  try {
    console.log('__ACTION__', action);
    // Vinicio - 1 - we are moving the action through the chain
    // Vinicio - 2 - we save the result so that we can go back
    const result = next(action); // -->
    return result; // <--
  } catch (error) {
    console.log('__ERROR__');
    // Vinicio - here you would save this to an API
    action.error = error;
    return action; // <--
  }
}