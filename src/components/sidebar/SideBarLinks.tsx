import React from 'react';
import {
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/react';

import {carOutline} from 'ionicons/icons'

const SideBarLinks: React.FC = () => {
  return(
    <>
    <IonItem routerLink='/'>
      <IonIcon color="medium" slot="start" icon={carOutline} />
      <IonLabel>Test</IonLabel>
    </IonItem>
    <IonItem routerLink='/'>
      <IonIcon color="medium" slot="start" icon={carOutline} />
      <IonLabel>Test</IonLabel>
    </IonItem>
    <IonItem routerLink='/'>
      <IonIcon color="medium" slot="start" icon={carOutline} />
      <IonLabel>Test</IonLabel>
    </IonItem>
    <IonItem routerLink='/'>
      <IonIcon color="medium" slot="start" icon={carOutline} />
      <IonLabel>Test</IonLabel>
    </IonItem>
    </>
  );
};


export default SideBarLinks;