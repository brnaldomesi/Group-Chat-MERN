import { BrowserRouter, Route } from "react-router-dom";

import Chat from './Chat';
import Join from './Join';
import MainLayout from 'components/MainLayout'
import React from 'react'

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
