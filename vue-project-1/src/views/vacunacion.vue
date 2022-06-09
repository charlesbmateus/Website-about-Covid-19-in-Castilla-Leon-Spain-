<template>
    <div class="vacunacion">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 left-inf">
                    <br>
                    <h6><b>Mapa de la situacion epidemiologica</b></h6>
                    <iframe src="https://data.opendatasoft.com/explore/embed/dataset/situacion-epidemiologica-coronavirus-en-castilla-y-leon@jcyl/map/?disjunctive.provincia&sort=fecha&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJzcGxpbmUiLCJmdW5jIjoiU1VNIiwieUF4aXMiOiJudWV2b3NfcG9zaXRpdm9zIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzY2YzJhNSJ9LHsiYWxpZ25Nb250aCI6dHJ1ZSwidHlwZSI6InNwbGluZSIsImZ1bmMiOiJTVU0iLCJ5QXhpcyI6ImZhbGxlY2ltaWVudG9zIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiI2ZjOGQ2MiJ9XSwieEF4aXMiOiJmZWNoYSIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6ImRheSIsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6InNpdHVhY2lvbi1lcGlkZW1pb2xvZ2ljYS1jb3JvbmF2aXJ1cy1lbi1jYXN0aWxsYS15LWxlb25AamN5bCIsIm9wdGlvbnMiOnsiZGlzanVuY3RpdmUucHJvdmluY2lhIjp0cnVlLCJzb3J0IjoiZmVjaGEifX19XSwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZSwidGltZXNjYWxlIjoiIiwic2luZ2xlQXhpcyI6ZmFsc2V9&location=6,41.04622,-5.3833&basemap=jawg.light&static=false&datasetcard=false&scrollWheelZoom=false" width="100%" height="300" frameborder="0" scrolling="no"></iframe>

                    <h6><b>Gráfico sobre los nuevos enfermos</b></h6>
                    <iframe src="https://data.opendatasoft.com/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJzcGxpbmUiLCJmdW5jIjoiU1VNIiwieUF4aXMiOiJjYXNvc19jb25maXJtYWRvcyIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiMxNDJFN0IifSx7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJzcGxpbmUiLCJmdW5jIjoiU1VNIiwieUF4aXMiOiJudWV2b3NfcG9zaXRpdm9zIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzAwQzdCMSJ9XSwieEF4aXMiOiJmZWNoYSIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6ImRheSIsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6InNpdHVhY2lvbi1lcGlkZW1pb2xvZ2ljYS1jb3JvbmF2aXJ1cy1lbi1jYXN0aWxsYS15LWxlb25AamN5bCIsIm9wdGlvbnMiOnsiZGlzanVuY3RpdmUucHJvdmluY2lhIjp0cnVlLCJzb3J0IjoiZmVjaGEiLCJsb2NhdGlvbiI6IjYsNDEuMDQ2MjIsLTUuMzgzMyIsImJhc2VtYXAiOiJqYXdnLmxpZ2h0In19fV0sImRpc3BsYXlMZWdlbmQiOmZhbHNlLCJhbGlnbk1vbnRoIjp0cnVlLCJ0aW1lc2NhbGUiOiJkYXkiLCJzaW5nbGVBeGlzIjp0cnVlfQ%3D%3D&static=false&datasetcard=false" width="100%" height="300" frameborder="0" scrolling="no"></iframe>
                </div>
                <div class="col-lg-9 scroll">
                    <br>
                    <h3>Situación epidemiológica coronavirus (COVID-19) en Castilla y León </h3>
                    <p>
                        Datos diarios de confirmados, nuevos casos, altas y fallecimientos en hospitales debidos al
                        coronavirus
                        (COVID-19) por provincias en Castilla y León.
                    </p>
                    <p>
                        Actualización 2 días a la semana: martes y viernes.
                    </p>
                    <ul>
                        <li>Datos desde el 15 de marzo de 2020.</li>
                        <li>La cifra de nuevos casos confirmados se refieren al día de la actualización de datos. </li>
                        <li>Los datos de confirmados se facilitan por la Red de Vigilancia Epidemiológica a las 20:00
                            horas
                            del
                            día anterior y corresponden a personas a las que se les ha efectuado la prueba diagnóstica.
                        </li>
                        <li>Desde el 18 de mayo de 2020, los nuevos casos confirmados solo reflejan resultados de PCR.
                            Desde
                            el
                            7 de octubre de 2020 se incorporan resultados de test de antígenos.</li>
                        <li>Desde el 26 de agosto de 2021 se empiezan a contabilizar las reinfecciones en los datos que
                            se
                            suministran diariamente, lo que supone un leve incremento en las cifras de incidencia, tanto
                            actuales como previas. Este procedimiento es el que se emplea también en los datos que
                            publica
                            el
                            Ministerio de Sanidad.</li>
                        <li>Se ha actualizado el número de casos acumulados totales y por PDIA registrados en el Sistema
                            de
                            Información de Vigilancia Epidemiológica (SIVE) de Castilla y León tras una revisión de los
                            casos
                            confirmados Covid-19 notificados a SIVE desde el inicio de la pandemia (marzo 2020) hasta el
                            4
                            de
                            julio de 2021.</li>
                        <li>NOTA: Valores negativos en "Nuevos casos positivos" corresponden a pacientes cuyo resultado
                            ha
                            sido
                            positivo inicialmente y en la prueba de confirmación se ha descartado.</li>
                    </ul>
                    <hr>
                    <table id="example" class="table table-striped responsive nowrap" style="width:100%">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Provincia</th>
                                <th>Sexo</th>
                                <th>Edad</th>
                                <th>Personas con primera dosis</th>
                                <th>Porcentaje personas con primera dosis</th>
                                <th>Personas con ciclo completo</th>
                                <th>Porcentaje personas con segunda dosis</th>
                                <th>Personas con tercera dosis</th>
                                <th>Porcentaje personas con tercera dosis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in info" :key="data">
                                <td>{{ data.fields.fecha }}</td>
                                <td>{{ data.fields.provincia }}</td>
                                <td>{{ data.fields.sexo }}</td>
                                <td>{{ data.fields.edad }}</td>
                                <td>{{ data.fields.personas_vacunadas_1a_dosis_acumulado }}</td>
                                <td>{{ data.fields.porcentaje_residentes_1a_dosis }} %</td>
                                <td>{{ data.fields.personas_vacunadas_ciclo_completo_acumulado }}</td>
                                <td>{{ data.fields.porcentaje_residentes_2a_dosis }} %</td>
                                <td>{{ data.fields.personas_vacunadas_3a_dosis_acumulado }}</td>
                                <td>{{ data.fields.porcentaje_residentes_3a_dosis }} %</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            info: null
        }
    },
    updated() {
        $(document).ready(function () {
            $('#example').DataTable();
        });
    },
    mounted() {
        axios
            .get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=vacunacion-covid-19-por-edad-sexo-y-provincia%40jcyl&q=&sort=fecha&facet=fecha&facet=provincia&facet=sexo&facet=edad&facet=sigla&facet=por-primera-dosis&facet=por-segunda-dosis&facet=por-tercera-dosis')
            .then(response => (this.info = response.data.records))
    },

}
</script>