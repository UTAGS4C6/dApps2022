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
import MainButton from './MainButton';

const Main: React.FC = () => {
  return(
    <IonPage>
    <Header pageName={"Home"}/>
    <Sidebar />
      <IonContent id="main-content">
        <MainButton />
      </IonContent>
    </IonPage>
  );
};

export default Main;