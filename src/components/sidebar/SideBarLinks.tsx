import React from 'react';
import {
  IonItem,
  IonImg,
  IonLabel,
  IonIcon,
  IonMenuToggle
} from '@ionic/react';

import {
  peopleOutline,
  notificationsOutline,
  carOutline,
  homeOutline,
  mapOutline,
  cogOutline,
  helpOutline,
  cardOutline,
  informationCircleOutline
} from 'ionicons/icons';

function SideBarLinks():any{

  let dataset = require('../../data/links.json');
  let data: any = [];
  for (let i in dataset){
    data.push([i, dataset[i]]);
  }

  return(
    <>
    {data.map((nlink: {
      icon: string | undefined;
      route: string | undefined;
      name: string | undefined;},
      i: React.Key | null | undefined)=>(
      <IonMenuToggle key={i}>
        <IonItem routerLink={nlink.route}>
          <IonIcon icon={nlink.icon}/>
          <IonLabel>{nlink.name}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    ))}
    </>
  );
};


export default SideBarLinks;