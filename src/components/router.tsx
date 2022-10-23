/**
 * @fileoverview Contains main route controller.
 * 
 */

import { Redirect, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import PassengerAsk from '../pages/RequestSent/PassengerAsk';
import PassengerAccepted from '../pages/RequestSent/PassengerAccepted';
import Account from '../pages/Account/Account';
import History from '../pages/Account/History';
import Privacy from '../pages/Account/Privacy';
import UULocation from '../pages/Account/UULocation';
import Contacts from '../pages/Account/Contacts';
import Notifications from '../pages/Account/Notifications';
import DeleteAccount from '../pages/Account/DeleteAccount';
import SignUp from '../pages/Landing/SignUp';
import Main from '../pages/Main/Main';
import { Admin } from '../pages/Main/admin';

export const AppRouter = () => {
  return(
  <>
    <Route path='/HOME' component={Landing} exact/>
    <Route path='/NewAccount' component={SignUp} exact/>
    <Route path='/Main' component={Main} exact/>
    <Route path='/PassengerAsk' component={PassengerAsk} exact/>
    <Route path='/PassengerAccepted' component={PassengerAccepted} exact/>
    <Route path='/Account' component={Account} exact/>
    <Route path='/Privacy' component={Privacy} exact/>
    <Route path='/Privacy/Location' component={UULocation} exact/>
    <Route path='/Privacy/Contacts' component={Contacts} exact/>
    <Route path='/Privacy/Notifications' component={Notifications} exact/>
    <Route path='/Privacy/DeleteAccount' component={DeleteAccount} exact/>
    <Route path='/History' component={History} exact/>
    <Route path='/Admin' component={Admin} exact/>
  </>
  );
};