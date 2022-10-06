import React,{ useState } from 'react';
import {
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonInput,
  IonItem,
  IonButton
} from '@ionic/react';

import { personOutline,keyOutline } from 'ionicons/icons';

const SignUp: React.FC = () => {
  const [usr,setText] = useState<string>();
  const [email,setEmail] = useState<string>();
  const [pwd,setPassword] = useState<string>();
  const [pwd1,setPassword1] = useState<string>();
  return(
    <>
    <IonPage>
    <IonCard className='ion-padding ion-margin'>
      <IonCardHeader>
        <IonCardTitle className="ion-text-center">
          <h1>Registrarse a UberUTAGS(temp)</h1>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol size="1">
              <IonIcon color="medium" slot="start" icon={personOutline}/>
            </IonCol>
            <IonCol size="2"><p>Usuario</p></IonCol>
            <IonCol size="9">
              <IonInput value={usr}
                placeholder="Enter Input"
                onIonChange={e => setText(e.detail.value!)}
                clearInput>
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="1">
              <IonIcon color="medium" slot="start" icon={personOutline}/>
            </IonCol>
            <IonCol size="2"><p>Email</p></IonCol>
            <IonCol size="9">
              <IonInput value={email}
                placeholder="Enter Input"
                onIonChange={e => setEmail(e.detail.value!)}
                clearInput>
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="1">
              <IonIcon color="medium" slot="start" icon={keyOutline} />
            </IonCol>
            <IonCol size="2"><p>Password</p></IonCol>
            <IonCol size="9">
              <IonInput 
                value={pwd}
                type="password"
                placeholder="Enter Input"
                onIonChange={e => setPassword(e.detail.value!)}
                clearInput>
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="1">
              <IonIcon color="medium" slot="start" icon={keyOutline} />
            </IonCol>
            <IonCol size="2"><p>Repita el Password</p></IonCol>
            <IonCol size="9">
              <IonInput 
                value={pwd1}
                type="password"
                placeholder="Enter Input"
                onIonChange={e => setPassword1(e.detail.value!)}
                clearInput>
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem routerLink="/Main">
                <IonButton>Registrarse</IonButton>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem routerLink="/HOME">
                <IonButton>Ingresar</IonButton>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
    </IonPage>
    </>
  );
};

export default SignUp;