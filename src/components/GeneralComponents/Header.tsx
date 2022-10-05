import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';

const HeaderUU: React.FC = () => {
  return(
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <h1 className="ion-text-center">Header</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default HeaderUU;