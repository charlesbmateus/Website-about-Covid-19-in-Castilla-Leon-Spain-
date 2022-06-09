<template>
    <div class="hospitales">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 left-inf">
                    <br>
                    <h6><b>Ocupación de camas en hospitales</b></h6>
                    <iframe
                        src="https://data.opendatasoft.com/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJhcmVhc3BsaW5lcmFuZ2UiLCJmdW5jIjoiQ09VTlQiLCJ5QXhpcyI6ImNhbWFzX29jdXBhZGFzX2NvdmlkX3VjaSIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiMxNDJFN0IiLCJjaGFydHMiOlt7ImZ1bmMiOiJNSU4iLCJ5QXhpcyI6ImNhbWFzX29jdXBhZGFzX2NvdmlkX3VjaSJ9LHsiZnVuYyI6Ik1BWCIsInlBeGlzIjoiY2FtYXNfb2N1cGFkYXNfY292aWRfdWNpIn1dfV0sInhBeGlzIjoicHJvdmluY2lhIiwibWF4cG9pbnRzIjoiIiwidGltZXNjYWxlIjoiIiwic29ydCI6IiIsImNvbmZpZyI6eyJkYXRhc2V0Ijoib2N1cGFjaW9uLWRlLWNhbWFzLWVuLWhvc3BpdGFsZXNAamN5bCIsIm9wdGlvbnMiOnsic29ydCI6ImZlY2hhIiwicm93cyI6IjEwMDAifX0sInNlcmllc0JyZWFrZG93biI6IiIsInNlcmllc0JyZWFrZG93blRpbWVzY2FsZSI6IiJ9XSwiZGlzcGxheUxlZ2VuZCI6ZmFsc2UsImFsaWduTW9udGgiOmZhbHNlLCJ0aW1lc2NhbGUiOiIiLCJzaW5nbGVBeGlzIjp0cnVlfQ%3D%3D&static=false&datasetcard=false"
                        width="100%" height="300" frameborder="0" scrolling="no"></iframe>

                    <h6><b>Ciudades con el mayor número de enfermos</b></h6>
                    <iframe
                        src="https://data.opendatasoft.com/explore/embed/dataset/ocupacion-de-camas-en-hospitales@jcyl/analyze/?sort=fecha&rows=1000&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJ0cmVlbWFwIiwiZnVuYyI6IkFWRyIsInlBeGlzIjoiY2FtYXNfb2N1cGFkYXNfcGxhbnRhIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoicmFuZ2UtUHVCdSJ9XSwieEF4aXMiOiJwcm92aW5jaWEiLCJtYXhwb2ludHMiOiIiLCJ0aW1lc2NhbGUiOiIiLCJzb3J0IjoiIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJvY3VwYWNpb24tZGUtY2FtYXMtZW4taG9zcGl0YWxlc0BqY3lsIiwib3B0aW9ucyI6eyJzb3J0IjoiZmVjaGEiLCJyb3dzIjoiMTAwMCJ9fSwic2VyaWVzQnJlYWtkb3duIjoiIiwic2VyaWVzQnJlYWtkb3duVGltZXNjYWxlIjoiIn1dLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlLCJ0aW1lc2NhbGUiOiIifQ%3D%3D&static=false&datasetcard=false"
                        width="100%" height="300" frameborder="0" scrolling="no"></iframe>
                </div>
                <div class="col-lg-9 scroll">
                    <br>
                    <h3>Ocupación de camas en hospitales</h3>
                    <p>
                        Datos de ocupación hospitalaria tanto en planta como en UCI en todos los hospitales de
                        Castilla y León.
                    </p>
                    <p>
                        Actualización 2 días a la semana: martes y viernes.
                    </p>
                    <ul>
                        <li>Hasta el día 8 de septiembre no se incluían cunas, incubadoras, pediatría, obstetricia, ni
                            psiquiatría.</li>
                        <li>El número de camas en unidades de críticos incluye las de UCI (unidades de cuidados
                            intensivos), REA (unidades de reanimación), URPA (unidades de reanimación postanetésica), y
                            otras unidades con adecuada dotación para la atención de pacientes críticos.</li>
                        <li>El número de camas en planta incluye aquellas a mayores que se han habilitado para la
                            atención de enfermos COVID.</li>
                        <li>El dato de camas iniciales corresponde a febrero de 2020. </li>
                    </ul>
                    <hr>
                    <table id="example" class="table table-striped responsive nowrap" style="width:100%">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Provincia</th>
                                <th>Camas ocupadas por covid-19</th>
                                <th>Camas habilitadas por planta</th>
                                <th>Camas habilitadas UCI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in info2" :key="data">
                                <td>{{ data.fields.fecha }}</td>
                                <td>{{ data.fields.provincia }}</td>
                                <td>{{ data.fields.camas_ocupadas_covid_uci }}</td>
                                <td>{{ data.fields.camas_habilitadas_planta }}</td>
                                <td>{{ data.fields.camas_habilitadas_uci }}</td>
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
            .get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=ocupacion-de-camas-en-hospitales%40jcyl&q=&rows=1000&sort=fecha&facet=fecha&facet=hospital&facet=provincia')
            .then(response2 => (this.info2 = response2.data.records))
    },

}
</script>