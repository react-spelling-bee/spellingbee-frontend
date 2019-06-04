import { createStore, applyMiddleware} from 'redux';
import mainReducer from './reducer/main-reducer';
import thunkMiddleware from './middleware/thunk-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxReporter from './middleware/redux-reporter';

export default () => {
  return createStore(mainReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, reduxReporter)));
};
