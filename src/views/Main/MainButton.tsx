import { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonInput,
} from '@ionic/react';

function MainButton() {

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

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }
  return (
    <>
      <IonButton id="open-modal" expand="block">
        Pedir Viaje
      </IonButton>
      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>Cancelar</IonButton>
            </IonButtons>
            <IonTitle>Pedir Viaje</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => confirm()}>
                Confirmar
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            {mainForm.map((mf,i)=>(
              <IonRow key={i} className="ion-padding-top">
                <IonCol size="1">
                  <IonIcon color="medium" slot="start" icon={mf.icon} />
                </IonCol>
                <IonCol size="11">
                  {mf.name}
                </IonCol>
                <IonCol size="12">
                  <IonInput 
                  value={mf.todo}
                  onIonChange={e => mf.test(e.detail.value!)}
                  />
                </IonCol>
              </IonRow>
            ))}
            <IonRow>
              <IonCol size="12">
                <IonButton routerLink='/PassengerAsk'>
                  Pedir Viaje
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  );
}

export default MainButton;