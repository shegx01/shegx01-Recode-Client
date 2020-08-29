import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './tailwind.global.css'

import Home from './pages/home/index'
import Header from './components/home/header'
import SecondaryHeader from './components/home/SecondaryHeader'
import UploadVideoPage from './pages/upload'
import UploadsPage from './pages/uploads'
import ChannelsPage from './pages/channels'
import SubscriptionPage from './pages/subscriptions'
import NotFound from './pages/notfound'

function App () {
  return (
    <Router>      <Header />
      <SecondaryHeader />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/upload'>
          <UploadVideoPage />
        </Route>
        <Route path='/uploads'>
          <UploadsPage />
        </Route>
        <Route path='/channels'>
          <ChannelsPage />
        </Route>
        <Route path='/subscriptions'>
          <SubscriptionPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
