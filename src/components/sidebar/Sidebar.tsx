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
} from '@ionic/react';

import SideBarLinks from './SideBarLinks';

const Sidebar: React.FC = () => {
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
            <IonButton>
              Cerrar Sesión
            </IonButton>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
export default Sidebar;