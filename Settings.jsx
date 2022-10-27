import React from "react";
import {
    IonPage,
    IonContent,
    IonTitle,
    IonImg,
    IonItemDivider,
    IonList,
    IonText,
    IonItem,
    IonButton,
    IonAccordion, 
    IonAccordionGroup, 
    IonLabel,
    IonCol, IonGrid, IonRow
} from "@ionic/react";

import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
    return(
        <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>Perfil</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <>
            <IonGrid>
              <IonRow>
                <IonCol>Imagen</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Editar</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>*Imagen del perfil*</IonCol>
                <IonCol>*Nombre del perfil*</IonCol>
                <IonCol>*Boton de editar*</IonCol>
              </IonRow>
            </IonGrid>
            </>
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>Calificacion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          <>
            <IonGrid>
              <IonRow>
                <IonCol>Usuario</IonCol>
                <IonCol>Estrellas</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>*Nombre del perfil*</IonCol>
                <IonCol>*Numero de estrellas</IonCol>
              </IonRow>
            </IonGrid>
            </>
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>Telefono</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <>
            <IonGrid>
              <IonRow>
                <IonCol>Numero de Telefono</IonCol>
                <IonCol>Editar</IonCol>
                <IonCol>Eliminar</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>*numero del perfil*</IonCol>
                <IonCol>
                  <IonButton>Editar</IonButton>
                </IonCol>
                <IonCol><IonButton>Eliminar</IonButton></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>*conforme se añadan telefonos*</IonCol>
                <IonCol><IonButton>Editar</IonButton></IonCol>
                <IonCol><IonButton>Eliminar</IonButton></IonCol>
              </IonRow>
            </IonGrid>
            </>
            <IonButton>Añadir Boton</IonButton>
          </div>
        </IonAccordion>
        <IonAccordion value="fourth">
          <IonItem slot="header" color="light">
            <IonLabel>Lugares favoritos</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          <ion-grid>
            <ion-row>
              <ion-col>Nombre</ion-col>
              <ion-col>Direccion</ion-col>
              <ion-col>Editar</ion-col>
              <ion-col>Eliminar</ion-col>
            </ion-row>
            <ion-row>
              <ion-col>Nombre que el usuario le de</ion-col>
              <ion-col>direccion seleccinoada</ion-col>
              <ion-col><IonButton>Editar</IonButton></ion-col>
              <ion-col><IonButton>Eliminar</IonButton></ion-col>
            </ion-row>
          </ion-grid>
          </div>
        </IonAccordion>
        <IonAccordion value="fifth">
          <IonItem slot="header" color="light">
            <IonLabel>Historial</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
          <>
            <IonGrid>
              <IonRow>
                <IonCol>ID de viaje</IonCol>
                <IonCol>Conductor</IonCol>
                <IonCol>Lugar</IonCol>
                <IonCol>Fecha</IonCol>
                <IonCol>Hora de inicio</IonCol>
                <IonCol>Hora de finalizacion</IonCol>
                <IonCol>Costo</IonCol>
                <IonCol>Puntuacion</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>ID de viaje</IonCol>
                <IonCol>Conductor</IonCol>
                <IonCol>Lugar</IonCol>
                <IonCol>Fecha</IonCol>
                <IonCol>Hora de inicio</IonCol>
                <IonCol>Hora de finalizacion</IonCol>
                <IonCol>Costo</IonCol>
                <IonCol>Puntuacion</IonCol>
              </IonRow>
            </IonGrid>
            </>
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    );
};

export default Settings;
