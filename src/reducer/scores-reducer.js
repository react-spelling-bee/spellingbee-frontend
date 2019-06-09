export default (state = {}, {type, payload}) => {
  switch(type) {
    case 'SAVE_SCORE':
      return payload;
    default:
      return state;
  }
}