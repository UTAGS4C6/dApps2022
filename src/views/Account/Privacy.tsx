import React from 'react';
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonItemDivider,
  IonItem,
  IonContent,
  IonList,
  IonText
} from '@ionic/react';

import Sidebar from '../../components/sidebar/Sidebar';

const Privacy: React.FC = () => {
  return(
    <IonPage>
      <Sidebar />
      <IonHeader>
        <IonItemDivider>
          <IonItem>
            <IonTitle>
              Privacidad
            </IonTitle>
          </IonItem>
        </IonItemDivider>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>
            <IonItem routerLink='/Privacy/Location'>
              Ubicación
            </IonItem>
          </IonItemDivider>
          <IonItemDivider>
            <IonItem routerLink='/Privacy/Contacts'>
              Contactos
            </IonItem>
          </IonItemDivider>
          <IonItemDivider>
            <IonItem routerLink='/Privacy/Notifications'>
              Notificaciones
            </IonItem>
          </IonItemDivider>
          <IonItemDivider>
            <IonItem routerLink='/Privacy/DeleteAccount'>
              <IonText color="danger">Eliminar Cuenta</IonText>
            </IonItem>
          </IonItemDivider>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Privacy;