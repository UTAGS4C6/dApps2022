/**
 * @fileoverview Admin view.
 * 
 * 
 * @returns 
 */

import React from 'react';
import {
  IonPage,
  IonContent
} from '@ionic/react';
import Header from '../../components/GeneralComponents/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { Dashboard } from '../../pages/Admin/Dashboard';

export const Admin = () => {
  return(
    <IonPage>
    <Header />
    <Sidebar />
    <IonContent id="main-content">
      <Dashboard />
    </IonContent>
    </IonPage>
  );
};