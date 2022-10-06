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
    IonButton
} from "@ionic/react";

import Sidebar from '../../components/sidebar/Sidebar';

const Settings: React.FC = () => {
    return(
        <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Settings</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
    <div class="accordion accordion-flush p-5" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Editar perfil
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="row justify-content-center">
                    <div class="col-6 p-3"><img src="" alt="">aqui va una imagen</div>
                    <div class="col-3 p-3">"NOMBRE"</div>
                    <div class="col-3 p-3"><button>Editar</button></div>
                </div>
          </div>
        </div>
        
        <div class="accordion-item pt-3">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Calificacion de usuario
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="row">
              <div class="col-9 p-3">AQUI VAN LAS ESTRELLAS DE CALIFICACION</div>
              <div class="col-3 p-3"><button>Propiedades</button></div>
            </div>
          </div>
        </div>

        <div class="accordion-item pt-3">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Cambio de número de teléfono
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="row">
              <div class="col-7 p-3">AQUI VA EL NUMERO TELEFONICO </div>
              <div class="col-5 p-3"><button>Editar</button></div>
            </div>
          </div>
        </div>

        <div class="accordion-item pt-3">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Lugares Favoritos
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div class="row">
              <div class="col-3 p-3">Tipo </div>
              <div class="col-6 p-3">Direccion</div>
              <div class="col-3 p-3"><button>Eliminar</button></div>
            </div>
          </div>
        </div>

        <div class="accordion-item pt-3">
          <h2 class="accordion-header" id="flush-headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
              Historial           
            </button>
          </h2>
          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <div class="row">
              <div class="col-3 p-3"><img src="" alt=""> aqui va la imagen del conductor</div>
              <div class="col-6 p-3">Aqui va su puntuacion</div>
             <div class="col-3 p-3"><button>Detalles</button></div>
            </div>
          </div>
        </div>

        <div class="row pt-3">
          <div class="col-6 p-3"><center><button class="p-3">Cerrar Sesión</button></center></div>
          <div class="col-6 p-3"><center><button class="p-3">Cambiar de cuenta</button></center></div>
        </div>
</body>
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</html>
    );
};

export default Settings;
