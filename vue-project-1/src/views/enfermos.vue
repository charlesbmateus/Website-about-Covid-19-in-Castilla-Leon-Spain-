<template>
    <div class="primaria">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 left-inf">
                    <br>
                    <h6><b>Mapa de la situacion epidemiologica</b></h6>
                    <div class="container info-cont border-cont">
                        <p>
                            Tasa de personas con primera PCR positiva por 10.000 tarjetas sanitarias de cada zona
                            básica
                            de
                            salud en los últimos 7/14 días (según corresponda).

                            Para el cálculo de este indicador se tiene en cuenta a las personas cuyo proceso clínico
                            o
                            sintomatología se ha iniciado en los 14 días previos al resultado de la PCR.

                            La información sobre ‘PCR’ hacen referencia a las PDIA (Pruebas diagnósticas de
                            infección
                            activa), que determinan la incidencia por ZBS. Dentro de las PDIA se incluyen tanto las
                            PCR
                            positivas como los Test de Antígenos (Ag). En el caso de PCR se contabiliza el primer
                            positivo.
                        </p>
                    </div>

                    <h6><b>Ciudades con el mayor número de enfermos</b></h6>
                    <iframe
                        src="https://data.opendatasoft.com/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJiYXIiLCJmdW5jIjoiTUFYIiwieUF4aXMiOiJ0b3RhbGVuZmVybWVkYWRfN2RpYXMiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjNjZjMmE1In1dLCJ4QXhpcyI6InByb3ZpbmNpYSIsIm1heHBvaW50cyI6bnVsbCwidGltZXNjYWxlIjoiIiwic29ydCI6IiIsImNvbmZpZyI6eyJkYXRhc2V0IjoidGFzYS1lbmZlcm1vcy1hY3VtdWxhZG9zLXBvci1hcmVhcy1kZS1zYWx1ZEBqY3lsIiwib3B0aW9ucyI6eyJkaXNqdW5jdGl2ZS56YnNfZ2VvIjp0cnVlLCJyb3dzIjoiMTAwMDAwIiwic29ydCI6ImZlY2hhIiwicmVmaW5lLmZlY2hhIjoiMjAyMiIsImxvY2F0aW9uIjoiNyw0MS42NjE2LC00LjQzNDY0IiwiYmFzZW1hcCI6Imphd2cuc3RyZWV0cyJ9fX1dLCJkaXNwbGF5TGVnZW5kIjpmYWxzZSwiYWxpZ25Nb250aCI6ZmFsc2UsInRpbWVzY2FsZSI6IiIsInNpbmdsZUF4aXMiOnRydWUsInNpbmdsZUF4aXNMYWJlbCI6IiJ9&static=false&datasetcard=false"
                        width="100%" height="300" frameborder="0" scrolling="no"></iframe>
                </div>
                <div class="col-lg-9 scroll">
                    <br>
                    <h3>Tasa de enfermos por zonas básicas de salud </h3>
                    <p>
                        Datos diarios en cada zona básica de salud. Desde el 9 de junio de 2021 la actualización es
                        semanal: los miércoles.
                    </p>
                    <p>
                        Incidencia diaria de pacientes enfermos y de porcentaje de personas enfermas por número de
                        tarjetas sanitarias en cada zona básica de salud. También se indican los enfermos y los
                        porcentajes para los últimos 7 y 14 días.
                    </p>
                    <p>
                        Las columnas ‘PCR’ hacen referencia a las PDIA (Pruebas diagnósticas de infección activa), que
                        determinan la incidencia por ZBS. Dentro de las PDIA se incluyen tanto las PCR positivas como
                        los Test de Antígenos (Ag). En el caso de PCR se contabiliza el primer positivo.
                    </p>
                    <ul>
                        <li>El cálculo de la incidencia de la enfermedad se ha efectuado teniendo en cuenta el número de
                            afectados en relación con el número de tarjetas por zona básica de salud. No se contabilizan
                            aquellas personas que han dejado de tener síntomas compatibles con COVID19. Los datos se
                            recogen desde el 29 de febrero de 2020. </li>
                        <li>El dato de pacientes enfermos incluye todos los diagnósticos compatibles con coronavirus
                            (neumonía por COVID-19 y enfermedad por COVID-19). </li>
                        <li>El registro de Medora (historia clínica de atención primaria) incluyó hasta el 14 de marzo
                            únicamente pacientes diagnosticados por prueba de PCR (prueba de detección molecular). Desde
                            el 14 de marzo y tras la modiﬁcación de la deﬁnición de enfermedad por el Ministerio de
                            Sanidad, se incluyen pacientes con sospecha clínica de enfermedad.</li>
                        <li>
                            A partir del día 13 de enero de 2022, se integran en los sistemas de información de Castilla
                            y León, todas las pruebas de Autotest de Ag (Test de farmacia) que se notifiquen a través de
                            la App Sacyl Conecta.
                        </li>
                    </ul>
                    <p>
                        Asimismo se informa de las PCR realizadas y sus porcentajes así como los dato de PCR positivas y
                        la tasa por 10000 tarjetas sanitarias, tanto de cada día como de los últimos 7 y 14 días.
                    </p>
                    <p>
                        Desde el 15 de agosto el cálculo de las tasas se realiza teniendo en cuenta la población de
                        tarjetas sanitarias registrada a dicha fecha.
                    </p>
                    <hr>
                    <table id="example" class="table table-striped responsive nowrap" style="width:100%">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Provincia</th>
                                <th>PCRs positivos</th>
                                <th>Total de enfermos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in info2" :key="data">
                                <td>{{ data.fields.fecha }}</td>
                                <td>{{ data.fields.provincia }}</td>
                                <td>{{ data.fields.pcr_positivos }}</td>
                                <td>{{ data.fields.totalenfermedad }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            info2: null,
        }
    },
    updated() {
        $(document).ready(function () {
            $('#example').DataTable();
        });
    },
    mounted() {

        axios
            .get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=tasa-enfermos-acumulados-por-areas-de-salud%40jcyl&q=&rows=1000&sort=fecha&facet=fecha&facet=nombregerencia&facet=zbs_geo&facet=provincia&facet=tipo_centro&facet=municipio&refine.fecha=2022')
            .then(response2 => (this.info2 = response2.data.records))
    },

}
</script>