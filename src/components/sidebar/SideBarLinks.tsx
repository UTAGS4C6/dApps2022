import React from 'react';
import {
  IonItem,
  IonImg,
  IonLabel,
  IonMenuToggle
} from '@ionic/react';

const navLinks = [
  {icon: 'https://via.placeholder.com/16', name: 'Cuenta', route: '/Account'},
  {icon: 'https://via.placeholder.com/16',name: 'Conducir', route: '/Drive'},
  {icon: 'https://via.placeholder.com/16',
    name: 'Página Principal',
    route: '/Main'},
  {icon: 'https://via.placeholder.com/16', name: 'Viajes', route: '/History'},
  {icon: 'https://via.placeholder.com/16',name: 'Settings',route: '/Settings'},
  {icon: 'https://via.placeholder.com/16', name: 'Support', route: '/Support'},
  {icon: 'https://via.placeholder.com/16', name: 'Pagos', route: '/Pay'},
  {icon: 'https://via.placeholder.com/16', name: 'Info', route: '/About'}
];

const SideBarLinks: React.FC = () => {
  return(
    <>
    {navLinks.map((nlink,i)=>(
      <IonMenuToggle>
        <IonItem key={i} routerLink={nlink.route}>
          <IonImg color="medium" slot="start" src={nlink.icon} />
          <IonLabel>{nlink.name}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    ))}
    </>
  );
};


export default SideBarLinks;