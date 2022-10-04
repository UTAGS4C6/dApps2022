import React from 'react';
import {
  IonPage,
  IonItem,
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
        <IonTitle>Landing Page</IonTitle>
        <LogIn />
      </IonContent>
    </IonPage>
  );
};

export default Landing;