import React from 'react';
import {
  IonApp,
  IonContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg
} from '@ionic/react';

import Sidebar from '../../components/sidebar/Sidebar';

const Main: React.FC = () => {
  return(
    <IonApp>
      <Sidebar />
      <IonContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src="https://via.placeholder.com/150" />
            </IonThumbnail>
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default Main;