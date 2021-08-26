import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'base-app/app/reducers'
import Reactotron from 'base-app/config/ReactotronConfig'

let store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		Reactotron.createEnhancer()
	)
);

export default store;
