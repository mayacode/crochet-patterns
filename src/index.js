'use strict';

if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import { render } from 'react-dom';
import Welcome from './app/modules/Page/component/Welcome';

render(<Welcome />, document.getElementById('app'));
