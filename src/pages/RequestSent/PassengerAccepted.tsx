import React from 'react';
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonImg,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonCardSubtitle
} from '@ionic/react';

import Sidebar from "../../components/sidebar/Sidebar";

const PassengerAccepted: React.FC = () => {
  const estimated = new Date("Oct 30,2022 16:00:34").getTime() ;
  let interval = () =>{
    let now = new Date().getTime();
    let distance = estimated - now;
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);
    let con = " " + d + " días, " + h + " horas, " + m + " minutos, " + s +
      " segundos.";
    return con;
  };
  return(
    <IonPage>
      <Sidebar />
      <IonContent id="main-content">
        <IonCard>
          <IonCardHeader>
            <IonImg src="https://via.placeholder.com/200" />
            <IonCardTitle>
              Su viaje fue aceptado
            </IonCardTitle>
            <IonCardSubtitle>
              Pasarán por Usted en: {interval()}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton routerLink='/Main'>
              Ok
            </IonButton>
            <IonButton routerLink='/Main'>
              Cancelar Viaje
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PassengerAccepted;