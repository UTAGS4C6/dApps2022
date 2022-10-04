import React from 'react';
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonImg
} from '@ionic/react';

import Sidebar from '../../components/sidebar/Sidebar';

const PassengerAsk: React.FC = () =>{
  return(
    <IonPage>
    <Sidebar />
      <IonContent id="main-content">
        <IonCard>
          <IonCardHeader>
            <IonImg src="https://via.placeholder.com/200" />
            <IonCardTitle>
              ¡Aventón Solicitado!
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton routerLink='/Main'>
              Cancelar Viaje
            </IonButton>
            <IonButton routerLink='/PassengerAccepted'>
              Move On
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PassengerAsk;