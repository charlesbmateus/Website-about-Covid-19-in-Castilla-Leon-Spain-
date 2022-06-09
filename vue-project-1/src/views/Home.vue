<template>
    <div class="container-fluid">
        <br><br><br>
        <div class="row" style="margin: auto;">
            <div class="card col-lg">
                <div class="card-body">
                    <h5 class="card-title">Situación epidemiológica coronavirus (COVID-19) en Castilla y León</h5>
                    <p class="card-text">Datos diarios de confirmados, nuevos casos, altas y fallecimientos en
                        hospitales debidos al coronavirus (COVID-19) por provincias en Castilla y León. </p>
                    <router-link to="/vacunacion">Mas informacion</router-link>
                </div>
                <iframe
                    src="https://data.opendatasoft.com/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJzcGxpbmUiLCJmdW5jIjoiU1VNIiwieUF4aXMiOiJudWV2b3NfcG9zaXRpdm9zIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzY2YzJhNSIsImRpc3BsYXlWYWx1ZXMiOmZhbHNlfSx7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJzcGxpbmUiLCJmdW5jIjoiU1VNIiwieUF4aXMiOiJhbHRhcyIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiNmYzhkNjIiLCJkaXNwbGF5VW5pdHMiOmZhbHNlfV0sInhBeGlzIjoiZmVjaGEiLCJtYXhwb2ludHMiOiIiLCJ0aW1lc2NhbGUiOiJkYXkiLCJzb3J0IjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJzaXR1YWNpb24tZXBpZGVtaW9sb2dpY2EtY29yb25hdmlydXMtZW4tY2FzdGlsbGEteS1sZW9uQGpjeWwiLCJvcHRpb25zIjp7ImRpc2p1bmN0aXZlLnByb3ZpbmNpYSI6dHJ1ZSwic29ydCI6ImZlY2hhIiwiYmFzZW1hcCI6Imphd2cubGlnaHQiLCJsb2NhdGlvbiI6IjYsMzguOTA2ODUsMi44ODk0In19LCJzdGFja2VkIjoiIn1dLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjpmYWxzZSwidGltZXNjYWxlIjoiZGF5Iiwic2luZ2xlQXhpcyI6dHJ1ZX0%3D&static=false&datasetcard=false"
                    width="100%" height="300" frameborder="0" scrolling="no"></iframe>
            </div>
            <br>
            <div class="card col-lg">
                <div class="card-body">
                    <h5 class="card-title">Situación enfermos por coronavirus detectados en atención primaria</h5>
                    <p class="card-text">Situación de los enfermos por coronavirus detectados en atención primaria
                        en Castilla y León. Desde el 9 de junio de 2021 la actualización es semanal: los miércoles.
                    </p>
                    <router-link to="/primaria">Mas informacion</router-link>
                </div>
                <iframe
                    src="https://data.opendatasoft.com/explore/embed/dataset/situacion-afectados-por-coronavirus-en-atencion-primaria@jcyl/map/?disjunctive.provincia&sort=fecha&refine.provincia=Segovia&refine.provincia=Palencia&refine.provincia=Le%C3%B3n&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJsaW5lIiwiZnVuYyI6IlNVTSIsInlBeGlzIjoibnVtZXJvX2VuZmVybW9zIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoicmFuZ2UtQWNjZW50In1dLCJ4QXhpcyI6ImZlY2hhIiwibWF4cG9pbnRzIjoiIiwidGltZXNjYWxlIjoibW9udGgiLCJzb3J0IjoiIiwic2VyaWVzQnJlYWtkb3duIjoicHJvdmluY2lhIiwic2VyaWVzQnJlYWtkb3duVGltZXNjYWxlIjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJzaXR1YWNpb24tYWZlY3RhZG9zLXBvci1jb3JvbmF2aXJ1cy1lbi1hdGVuY2lvbi1wcmltYXJpYUBqY3lsIiwib3B0aW9ucyI6eyJkaXNqdW5jdGl2ZS5wcm92aW5jaWEiOnRydWUsInNvcnQiOiJmZWNoYSIsInJlZmluZS5wcm92aW5jaWEiOlsiU2Vnb3ZpYSIsIlBhbGVuY2lhIiwiTGVcdTAwRjNuIl0sImxvY2F0aW9uIjoiMTAsNDIuMDA4OTUsLTQuMjQ0ODQiLCJiYXNlbWFwIjoiamF3Zy5zdHJlZXRzIn19fV0sImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWUsInRpbWVzY2FsZSI6IiJ9&location=6,41.17865,-5.53711&basemap=jawg.light&static=false&datasetcard=false&scrollWheelZoom=false"
                    width="100%" height="300" frameborder="0" scrolling="no"></iframe>
            </div>
            <br>
            <div class="card col-lg">
                <div class="card-body">
                    <h5 class="card-title">Tasa de enfermos por zonas básicas de salud </h5>
                    <p class="card-text">Datos diarios en cada zona básica de salud. Desde el 9 de junio de 2021 la
                        actualización es semanal: los miércoles.
                    </p>
                    <router-link to="/enfermos">Mas informacion</router-link>
                </div>
                <iframe
                    src="https://data.opendatasoft.com/explore/embed/dataset/tasa-enfermos-acumulados-por-areas-de-salud@jcyl/map/?disjunctive.zbs_geo&rows=100000&sort=fecha&refine.fecha=2022&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJhcmVhc3BsaW5lIiwiZnVuYyI6IkNPVU5UIiwieUF4aXMiOiJ0b3RhbGVuZmVybWVkYWRfN2RpYXMiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjMTQyRTdCIiwicG9zaXRpb24iOiJjZW50ZXIifV0sInhBeGlzIjoidG90YWxlbmZlcm1lZGFkIiwibWF4cG9pbnRzIjoxMCwidGltZXNjYWxlIjoiIiwic29ydCI6IiIsImNvbmZpZyI6eyJkYXRhc2V0IjoidGFzYS1lbmZlcm1vcy1hY3VtdWxhZG9zLXBvci1hcmVhcy1kZS1zYWx1ZEBqY3lsIiwib3B0aW9ucyI6eyJkaXNqdW5jdGl2ZS56YnNfZ2VvIjp0cnVlLCJyb3dzIjoiMTAwMDAwIiwic29ydCI6ImZlY2hhIiwicmVmaW5lLmZlY2hhIjoiMjAyMiIsImJhc2VtYXAiOiJqYXdnLnN0cmVldHMiLCJsb2NhdGlvbiI6IjcsNDEuNjYxNiwtNC40MzQ2NCJ9fSwic2VyaWVzQnJlYWtkb3duIjoiIiwic2VyaWVzQnJlYWtkb3duVGltZXNjYWxlIjoiIn1dLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlLCJ0aW1lc2NhbGUiOiIifQ%3D%3D&location=8,40.83044,-5.51514&basemap=jawg.dark&static=false&datasetcard=false&scrollWheelZoom=false"
                    width="100%" height="300" frameborder="0" scrolling="no"></iframe>
            </div>
            <br>
            <div class="card col-lg">
                <div class="card-body">
                    <h5 class="card-title">Ocupación de camas en hospitales</h5>
                    <p class="card-text">Datos de ocupación hospitalaria tanto en planta como en UCI en todos los
                        hospitales de Castilla y León.
                    </p>
                    <router-link to="/hospitales">Mas informacion</router-link>
                </div>
                <iframe
                    src="https://data.opendatasoft.com/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQVZHIiwieUF4aXMiOiJjYW1hc19vY3VwYWRhc19wbGFudGEiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjZmM4ZDYyIn0seyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoiY29sdW1uIiwiZnVuYyI6IkFWRyIsInlBeGlzIjoiY2FtYXNfaGFiaWxpdGFkYXNfdWNpIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzhkYTBjYiJ9XSwieEF4aXMiOiJwcm92aW5jaWEiLCJtYXhwb2ludHMiOiIiLCJ0aW1lc2NhbGUiOiIiLCJzb3J0IjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJvY3VwYWNpb24tZGUtY2FtYXMtZW4taG9zcGl0YWxlc0BqY3lsIiwib3B0aW9ucyI6eyJzb3J0IjoiZmVjaGEifX19XSwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZSwidGltZXNjYWxlIjoiIiwic2luZ2xlQXhpcyI6dHJ1ZX0%3D&static=false&datasetcard=false"
                    width="100%" height="300" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
        <br>
    </div>
</template>
