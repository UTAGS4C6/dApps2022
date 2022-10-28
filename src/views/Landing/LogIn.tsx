import React,{ useState } from 'react';
import {
  IonItem,
  IonInput,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

import { personOutline,keyOutline } from 'ionicons/icons';

const LogIn: React.FC = () => {

  const [text,setText] = useState<string>();
  const [password,setPassword] = useState<string>();

  return(
    <>
    <IonCard className='ion-padding ion-margin'>
      <IonCardHeader>
        <IonCardTitle className="ion-text-center">
          <h1>Ingresar a UberUTAGS(temp)</h1>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol size="1">
              <IonIcon color="medium" slot="start" icon={personOutline}/>
            </IonCol>
            <IonCol size="11"><p>Usuario</p></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
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
            <IonCol size="11"><p>Password</p></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="9">
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
      </IonCardContent>
    </IonCard>
    </>
  );
};

export default LogIn;