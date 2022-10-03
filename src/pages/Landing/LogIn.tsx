import React,{ useState } from 'react';
import {
  IonItemDivider,
  IonItem,
  IonInput,
  IonIcon,
  IonButton
} from '@ionic/react';

import { personOutline,keyOutline } from 'ionicons/icons';

const LogIn: React.FC = () => {

  const [text,setText] = useState<string>();
  const [password,setPassword] = useState<string>();

  return(
    <>
    <IonItemDivider>
      <IonIcon color="medium" slot="start" icon={personOutline} />
      Usuario
    </IonItemDivider>
    <IonItem>
      <IonInput value={text}
        placeholder="Enter Input"
        onIonChange={e => setText(e.detail.value!)}
        clearInput>
      </IonInput>
    </IonItem>
    <IonItemDivider>
      <IonIcon color="medium" slot="start" icon={keyOutline} />
      Password
    </IonItemDivider>
    <IonItem>
      <IonInput 
        value={password}
        type="password"
        placeholder="Enter Input"
        onIonChange={e => setPassword(e.detail.value!)}
        clearInput>
      </IonInput>
    </IonItem>
    <IonItem routerLink="/Main">
      <IonButton>Ingresar</IonButton>
    </IonItem>
    <IonItem routerLink="/NewAccount">
      <IonButton>Inscribirse</IonButton>
    </IonItem>
    </>
  );
};

export default LogIn;