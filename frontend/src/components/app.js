import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MainPageContainer from "./main/main_page_container";
import EmotionShowContainer from './emotion/emotion_show_container'
import ProfileContainer from './profile/profile_container';
import Modal from "./modal/modal";

const App = () => (
  <div className='app'>
    <Modal />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    
    <ProtectedRoute path='/' component={NavBarContainer} />
  
  <Switch>
    <ProtectedRoute exact path='/profile' component={ProfileContainer} />
    <ProtectedRoute exact path='/:emotionId' component={EmotionShowContainer} />
    <ProtectedRoute exact path='/' component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;
