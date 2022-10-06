import React from 'react';
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonButton,
  IonTitle,
  IonToolbar,
  IonList,
  IonNav,
} from '@ionic/react';

import SideBarLinks from './SideBarLinks';

function Sidebar(){
  const usr = {
    account: "Testing",
    ico: "Testing"
  };
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>{usr.account}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <SideBarLinks />
          </IonList>
          <IonList>
            <IonButton routerLink='/HOME'>
              Cerrar Sesión
            </IonButton>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
export default Sidebar;