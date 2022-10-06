import React,{useState} from 'react';
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonInput,
  IonButton
} from '@ionic/react';

import './Main.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/GeneralComponents/Header';

const Main: React.FC = () => {
  const [origin,setOrigin] = useState<string>(),
    [destination,setDestination] = useState<string>(),
    [price,setPrice] = useState<string>(),
    [comment,setComment] = useState<string>();

  const mainForm = [
    {icon:"ico",name:"Origen",todo:origin,test:setOrigin},
    {icon:"ico",name:"Destino",todo:destination,test:setDestination},
    {icon:"ico",name:"Precio",todo:price,test:setPrice},
    {icon:"ico",name:"Comment",todo:comment,test:setComment},
  ];
  return(
    <IonPage>
    <Header />
    <Sidebar />
      <IonContent id="main-content">
        <IonGrid className="main-background">
          {mainForm.map((mf,i)=>(
            <IonRow key={i}>
              <IonCol size="1">
                <IonIcon color="medium" slot="start" icon={mf.icon} />
              </IonCol>
              <IonCol size="3">
                {mf.name}
              </IonCol>
              <IonCol size="8">
                <IonInput 
                value={mf.todo}
                onIonChange={e => mf.test(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
          ))}
          <IonRow>
            <IonCol>
              <IonButton routerLink='/PassengerAsk'>
                Pedir Viaje
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Main;