import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user";


const store = configureStore({
  reducer: {
    user: userReducer, 
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider store={store}>
        {/* <Suspense fallback={<Loading />}> */}
          <App />
        {/* </Suspense> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
