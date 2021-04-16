import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './app/components/Navbar'
import Footer from './app/components/Footer'
import Listings from './app/components/listings/Listings'
import ListingDetails from './app/components/listings/ListingDetails'
import PostListing from './app/components/listings/PostListing'
import Profile from './app/components/account/Profile'
import Favourite from './app/components/account/Favourite'
import MessagesList from './app/components/account/MessagesList'
import Message from './app/components/account/Message'
import Posted from './app/components/account/Posted'
import About from './app/components/About'
import Contact from './app/components/Contact'
import Login from './app/components/auth/Login'
import Register from './app/components/auth/Register'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/' component={ Listings } />
          <Route path='/listing/:id' component={ ListingDetails } />
          <Route path='/post' component={ PostListing } />

          <Route path='/profile' component={ Profile } />
          <Route path='/favourite' component={ Favourite } />
          <Route path='/messageslist' component={ MessagesList } />
          <Route path='/posted' component={ Posted } />
          <Route path='/message/:id' component={ Message } />

          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/login' component={ Login } />
          <Route path='/register' component={ Register } />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
