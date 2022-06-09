<template>
  <link rel="stylesheet" href="src/css/style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <nav class="navbar navbar-light bg-light banner">
    <div class="ms-5">
      <div class="container-fluid">
        <h2 class="mt-4">
          Información sobre el Covid-19 en Castilla y León 
        </h2>
      </div>


      <div class="navbar-expand bg-light">
        <div class="container-fluid">
          <div class="" id="">
            <ul class="navbar-nav">
              <li class="">
                <router-link class="nav-link" to="/">Página principal</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/vacunacion">Personas vacunadas</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/primaria">Enfermos en atencción primaria</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/enfermos">Enfermos por zonas básicas de salud </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/hospitales">Ocupación de camas en hospitales</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>

</template>

