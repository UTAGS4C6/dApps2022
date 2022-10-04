import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Landing from './pages/Landing/Landing';
import PassengerAsk from './pages/RequestSent/PassengerAsk';
import PassengerAccepted from './pages/RequestSent/PassengerAccepted';
import Account from './pages/Account/Account';
import History from './pages/Account/History';
import Main from './pages/Main/Main';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path='/HOME' component={Landing} exact/>
        <Route path='/Main' component={Main} exact/>
        <Route path='/PassengerAsk' component={PassengerAsk} exact/>
        <Route path='/PassengerAccepted' component={PassengerAccepted} exact/>
        <Route path='/Account' component={Account} exact/>
        <Route path='/History' component={History} exact/>
        <Redirect to='/HOME' />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
