<?php
  require_once 'config.php';
?>
<form method="POST" id="logIn" action="<?php DBADDRESS;?>" class="logIn">
  <ul>
    <li>
      <label>
        <p class="h5">Cuenta de
          Usuario: </p>
        <input
          id="logUser"
          name="logUser"
          class="logText"
          type="text"
          minlength="3"
          maxlength="16"
          required
          autocomplete="on"
          placeholder ="Nombre de Usuario"
        />
      </label>
    </li>
    <li>
      <label>
        <p class="h5">Password: </p>
        <input
          id="logPassword"
          name="logPassword"
          class="logPassword"
          type="password"
          minlength="12"
          maxlength="64"
          required
          placeholder ="Password"
        />
      </label>
    </li>
    <li>
      <label>
        <p class="logDisclaimer">Mantener iniciada la sesión</p>
        <input
          type="checkbox"
          name="logKeep"
        />
      </label>
    </li>
    <li>
      <a href="logForgot.php" id="logForgot">Olvide mi password</p>
    </li>
    <li>
      <input
        type="button"
        value="Ingresar"
        onclick={ logIn }
      />
    </li>
    <li>
      <input
        type="button"
        value="Inscribirse"
        onclick={ signUp }
      />
    </li>
  </ul>
</form>