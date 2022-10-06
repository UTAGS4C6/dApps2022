import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';

const HeaderUU = (props:any) => {
  return(
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <h1 className="ion-text-center">{props.pageName}</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default HeaderUU;