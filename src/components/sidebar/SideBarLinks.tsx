import React from 'react';
import {
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/react';

const navLinks = [
  {icon:'https://via.placeholder.com/150',name: 'Cuenta',route: '/Account'},
  {icon:'https://via.placeholder.com/150',name: 'Página Principal',route: '/HOME'},
  {icon:'https://via.placeholder.com/150',name: 'Viajes',route: '/History'},
  {icon:'https://via.placeholder.com/150',name: 'Settings',route: '/Settings'},
  {icon:'https://via.placeholder.com/150',name: 'Share Trip',route: '/Share'},
  {icon:'https://via.placeholder.com/150',name: 'Support',route: '/Support'},
  {icon:'https://via.placeholder.com/150',name: 'Pagos',route: '/Pay'},
  {icon:'https://via.placeholder.com/150',name: 'Info',route: '/About'}
];

const SideBarLinks: React.FC = () => {
  return(
    <>
    {navLinks.map((nlink,i)=>(
      <IonItem key={i} routerLink={nlink.route}>
        <IonIcon color="medium" slot="start" icon={nlink.icon} />
        <IonLabel>{nlink.name}</IonLabel>
    </IonItem>
    ))}
    </>
  );
};


export default SideBarLinks;