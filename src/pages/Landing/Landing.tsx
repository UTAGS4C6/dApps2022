import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

import LogIn from './LogIn';

const Landing: React.FC = () => {
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Landing Page</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        <LogIn />
      </IonContent>
    </IonPage>
  );
};

export default Landing;