<template>
    <div class="vacunacion">
        <div class="container-fluid">
            <table id="example" class="display" style="width:100%">
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
</template>

<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";

export default {
    name: 'test',
    data() {
        return {
            info: null,
            info2: null,
            info3: null,
        }
    },
    updated() {
        $(document).ready(function () {
            $('#example, #example1').DataTable();
        });
    },
    created() {
        axios
            .get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=vacunacion-covid-19-por-edad-sexo-y-provincia%40jcyl&q=&sort=fecha&facet=fecha&facet=provincia&facet=sexo&facet=edad&facet=sigla&facet=por-primera-dosis&facet=por-segunda-dosis&facet=por-tercera-dosis')
            .then(response => (this.info = response.data.records))

        axios
            .get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=situacion-afectados-por-coronavirus-en-atencion-primaria%40jcyl&q=&sort=fecha&facet=fecha&facet=provincia')
            .then(response2 => (this.info2 = response2.data.records))

        axios
            .get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=tasa-enfermos-acumulados-por-areas-de-salud%40jcyl&q=&sort=fecha&facet=fecha&facet=nombregerencia&facet=zbs_geo&facet=provincia&facet=tipo_centro&facet=municipio')
            .then(response3 => (this.info3 = response3.data.records))
    },
}
</script>