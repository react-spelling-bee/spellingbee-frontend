export default (state = {}, {type, payload}) => {
  switch(type) {
    case 'SUBMIT':
      return payload;
    default:
      return state;
  }
}