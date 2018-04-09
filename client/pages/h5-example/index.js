import React from 'react';
import {render} from 'react-dom';
import Root from '../../Root';
import routes from './routes';
import reducers from './reducers';
import {urlContext} from '../../utils/config';


render(
  <Root routes={routes} reducers={reducers} basename={`${urlContext}/h5-example`}/>,
  document.getElementById('layout')
);