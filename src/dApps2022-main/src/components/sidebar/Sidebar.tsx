import React from 'react';
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from '@ionic/react';

import SideBarLinks from './SideBarLinks';

const Sidebar: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <SideBarLinks />
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
export default Sidebar;