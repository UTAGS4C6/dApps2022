import React from 'react';
import {
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

const AppRouter: React.FC = () => {
  return(
    <>
    <IonReactRouter>
      <IonRouterOutlet>
        
      </IonRouterOutlet>
    </IonReactRouter>
    </>
  );
};

export default AppRouter;
