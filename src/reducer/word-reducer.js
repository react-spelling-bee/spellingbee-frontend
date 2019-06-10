export default (state = {}, {type, payload}) => {
  switch(type) {
    case 'SUBMIT':
      return payload;
    case 'CHECK_ANSWER':
      let newState = [...state];
      let wordObject = newState[payload.index];
      wordObject.word === payload.spelling.spelling.toLowerCase()
        ? wordObject.isCorrect = true
        : wordObject.isCorrect = false;
      return newState;
    case 'NEW_GAME':
      return payload;
    default:
      return state;
  }
}