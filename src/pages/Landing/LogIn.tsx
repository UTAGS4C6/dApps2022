import React,{ useState } from 'react';
import {
  IonItem,
  IonInput,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

import { personOutline,keyOutline } from 'ionicons/icons';

const LogIn: React.FC = () => {

  const [text,setText] = useState<string>();
  const [password,setPassword] = useState<string>();

  return(
    <>
    <IonGrid>
      <IonRow>
        <IonCol size="1">
          <IonIcon color="medium" slot="start" icon={personOutline} />
        </IonCol>
        <IonCol size="3">Usuario</IonCol>
        <IonCol size="8">
          <IonInput value={text}
            placeholder="Enter Input"
            onIonChange={e => setText(e.detail.value!)}
            clearInput>
          </IonInput>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="1">
          <IonIcon color="medium" slot="start" icon={keyOutline} />
        </IonCol>
        <IonCol size="3">Password</IonCol>
        <IonCol size="8">
          <IonInput 
            value={password}
            type="password"
            placeholder="Enter Input"
            onIonChange={e => setPassword(e.detail.value!)}
            clearInput>
          </IonInput>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem routerLink="/Main">
            <IonButton>Ingresar</IonButton>
          </IonItem>
        </IonCol>
        <IonCol>
          <IonItem routerLink="/NewAccount">
            <IonButton>Inscribirse</IonButton>
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>
    </>
  );
};

export default LogIn;