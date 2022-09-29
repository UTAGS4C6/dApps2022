import React, { useState } from 'react';
import {
  IonContent,
  IonListHeader,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';

import './logIn.css';

export const LogIn: React.FC = () => {
  const [txt,setText] = useState<string>();
  return (
    <IonPage>

      <IonContent fullscreen>

        <IonList>
          <IonListHeader>Ingresar</IonListHeader>
            <IonItem>
              <IonLabel>Nombre de Usuario: </IonLabel>
              <IonInput
                value={txt}
                placeholder="Nombre de Usuario"
                onIonChange={e => setText(e.detail.value!)}>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Password: </IonLabel>
              <IonInput
                value={txt}
                placeholder="Password"
                onIonChange={e => setText(e.detail.value!)}>
              </IonInput>
            </IonItem>
        </IonList>
      </IonContent>

    </IonPage>
  );
};
