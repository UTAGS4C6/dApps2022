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

const navLinks:any = [
  {icon: peopleOutline, name: 'Cuenta', route: '/Account'},
  {icon: notificationsOutline, name:'Notificaciones', route: '/Notificaciones'},
  {icon: carOutline, name: 'Conducir', route: '/Drive'},
  {icon: homeOutline, name: 'Página Principal', route: '/Main'},
  {icon: mapOutline, name: 'Viajes', route: '/History'},
  {icon: cogOutline, name: 'Settings',route: '/Settings'},
  {icon: helpOutline, name: 'Support', route: '/Support'},
  {icon: cardOutline, name: 'Pagos', route: '/Pay'},
  {icon: informationCircleOutline, name: 'Info', route: '/About'}
];

const SideBarLinks: React.FC = () => {
  return(
    <>
    {navLinks.map((nlink: {
      icon: string | undefined;
      route: string | undefined;
      name: string | undefined;},
      i: React.Key | null | undefined)=>(
      <IonMenuToggle>
        <IonItem key={i} routerLink={nlink.route}>
          <IonIcon icon={nlink.icon}/>
          <IonLabel>{nlink.name}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    ))}
    </>
  );
};


export default SideBarLinks;