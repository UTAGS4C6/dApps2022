import React from 'react';
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonTitle,
  IonItem
} from '@ionic/react';

import Sidebar from '../../components/sidebar/Sidebar';

const History: React.FC = () => {
  const historyHead = {
    id:"Id.",date:"Fecha",origin:"Origen",destination:"Destino"
  };
  const userHistory = [{
    id:"0",
    date:"2022-10-03T22:28:35",
    origin:"Steineveien, 8340 Stamsund, Norway",
    destination: "Fuente Álamo de Murcia, Region of Murcia"
  },
  {
    id:1,
    date:"2022-10-03T23:28:35",
    origin:"123 Hunjadi Janosa, Zrenjanin, Vojvodina",
    destination: "RN 4, Santa Cruz Department"
  },
  ];
  userHistory.unshift(historyHead);
  return(
    <IonPage>
      <IonTitle>
        Historial de Viajes
      </IonTitle>
      <Sidebar />
      <IonGrid>
        {userHistory.map((hist,i)=>(
          <IonRow key={i}>
            <IonCol size="1">
              <IonText color="secondary">{hist.id}</IonText>
            </IonCol>
            <IonCol size="3">
              <IonText color="secondary">{hist.date}</IonText>
            </IonCol>
            <IonCol size="4">
              <IonText color="secondary">{hist.origin}</IonText>
            </IonCol>
            <IonCol size="4">
              <IonText color="secondary">{hist.destination}</IonText>
            </IonCol>
          </IonRow>
        ))}
        <IonRow>
          <IonItem routerLink='/Main'>
            Regresar
          </IonItem>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default History;