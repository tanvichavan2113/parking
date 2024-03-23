// import './App.css';
// import { Route,Switch } from 'react-router-dom';

// import Login from './My_componants/Login';
// import SignupForm from './My_componants/Signup';
// import { Home } from './My_componants/Home';
// import { ParkLevel } from './My_componants/ParkLevel';
// import { About } from './My_componants/About';
// import Profile from './My_componants/Profile';
// import Projectplans from './My_componants/Projectplans';
// import SocialMedia from './My_componants/SocialMedia';
// import ContactUs from './My_componants/ContactUs';
// import map from './My_componants/map';



// function App() {
//   return (
//     <>
//     {/* <Header/> */}
//   <Switch>
//     <Route exact path='/' component={Login} />
//     <Route exact path='/login' component={Login} />
//     <Route exact path='/signup' component={SignupForm} />
    
//       <Route exact path='/home' component={Home} />
    
//     <Route exact path='/parklevel' component={ParkLevel} />
//     <Route exact path='/about' component={About} />
//     <Route exact path='/logout' component={Profile} />
//     <Route exact path='/projectplans' component={Projectplans} />
//     <Route exact path='/socialmedia' component={SocialMedia} />
//     <Route exact path='/contactus' component={ContactUs} />
//     <Route exact path='/map' component={map} />

//   </Switch>
//     {/* <Footer/> */}
//     </>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MapContainer from './My_componants/map'; // Adjust the import path

import Login from './My_componants/Login';
import SignupForm from './My_componants/Signup';
import { Home } from './My_componants/Home';
import { ParkLevel } from './My_componants/ParkLevel';
import { About } from './My_componants/About';
import Profile from './My_componants/Profile';
import Projectplans from './My_componants/Projectplans';
import SocialMedia from './My_componants/SocialMedia';
import ContactUs from './My_componants/ContactUs';
import map from './My_componants/map';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
    };
  }

  render() {
    return (
      <>
        {/* Your existing routes */}
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignupForm} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/parklevel' component={ParkLevel} />
          <Route exact path='/about' component={About} />
          <Route exact path='/logout' component={Profile} />
          <Route exact path='/projectplans' component={Projectplans} />
          <Route exact path='/socialmedia' component={SocialMedia} />
          <Route exact path='/contactus' component={ContactUs} />
          <Route exact path='/map' component={map} />
        </Switch>

        {/* New Map integration */}
        {/* <div>
          <h1>Your Parking Slot Booking System</h1>
          <button onClick={() => this.setState({ showMap: true })}>Map</button>
          {this.state.showMap && <MapContainer />}
        </div> */}
      </>
    );
  }
}

export default App;
