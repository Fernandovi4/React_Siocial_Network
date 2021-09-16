import React from 'react';
import './App.css';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import News from './Components/pages/News/News';
import Music from './Components/pages/Music/Music';
import Test from './Components/pages/Test/Test'
import Settings from './Components/pages/Settings/Settings';
import Footer from './Components/shared/Footer/Footer';
import Posts from './Components/pages/Posts/Posts'
import SuperDialogsContainer from "./Components/pages/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/shared/Navbar/NavbarContainer";
import UsersContainer from "./Components/pages/Users/UsersContainer";
import ProfileContainer from "./Components/pages/Profile/ProfileContainer";
import HeaderContainer from "./Components/shared/Header/HeaderContainer";
import Login from "./Components/pages/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route path='/login' render={() => <Login />}
          />
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer />}
          />
          <Route path='/dialogs'
                 render={() => <SuperDialogsContainer />}
          />
          <Route path='/users' render={() => <UsersContainer />}
          />
          <Route path='/news' render={() => <News />}
          />
          <Route path='/music' render={() => <Music />}
          />
          <Route path='/settings' render={() => <Settings />}
          />
          <Route path='/test' render={() => <Test />}
          />
          <Route path='/posts' render={() => <Posts />}
          />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

