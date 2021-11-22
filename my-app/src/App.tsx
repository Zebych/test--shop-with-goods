import React, { memo } from 'react';

import './App.css';

import { Header, SetRoute } from '01_userInterface';

const App = memo((): any => (
  <div>
    <Header />
    <SetRoute />
  </div>
));
export default App;
