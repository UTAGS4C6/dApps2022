import React from 'react';
import {
  IonPage,
  IonContent,
  IonTitle,
  IonImg,
  IonItemDivider,
  IonList,
  IonText,
  IonItem
} from '@ionic/react';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/GeneralComponents/Header';

const Account: React.FC = () => {
  return(
    <IonPage>
      <Header pageName={"Manejo de Cuenta"}/>
      <Sidebar />
      <IonContent>
        <IonList>
          <IonItemDivider>
            <IonImg src="https://via.placeholder.com/100"/>
          </IonItemDivider>
          <IonItemDivider>
            <IonTitle>
              Edit Name
            </IonTitle>
          </IonItemDivider>
          <IonItemDivider>
            <IonItem>
              <IonTitle>
                Lugares Favoritos
              </IonTitle>
            </IonItem>
          </IonItemDivider>
          <IonItem>
            <IonText color="primary">Hogar</IonText>
          </IonItem>
          <IonItem>
            <IonText color="primary">Trabajo</IonText>
          </IonItem>
          <IonItemDivider>
            <IonItem>
              <IonTitle>Privacidad</IonTitle>
            </IonItem>
          </IonItemDivider>
          <IonItemDivider>
            <IonItem routerLink='/HOME'>
              <IonTitle>Cerrar Sesión</IonTitle>
            </IonItem>
          </IonItemDivider>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Account;