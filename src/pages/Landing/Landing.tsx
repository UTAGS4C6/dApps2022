import React from 'react';
import {
  IonPage,
  IonTitle,
  IonContent,
} from '@ionic/react';

import Sidebar from '../../components/sidebar/Sidebar';
import LogIn from './LogIn';

const Landing: React.FC = () => {
  return(
    <IonPage>
      <IonContent>
        <Sidebar />
        <LogIn />
      </IonContent>
    </IonPage>
  );
};

export default Landing;