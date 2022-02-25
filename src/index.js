import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/video-react/dist/video-react.css";
import  store  from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Weather from './components/Weather';
import Search from './components/Search';
import Favourites from './components/Favorites';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <Routes>
                <Route exact path="/" element={<Weather />}>
                  <Route path="favourites" element={<Favourites />}/>
                </Route>
              </Routes>
          </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
);