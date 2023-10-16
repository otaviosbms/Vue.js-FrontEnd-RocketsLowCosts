<template>
    <div>

        <h1 class="text-center">Olá {nome} seja bem vindo!</h1>

        {{ response }}

        <div class="d-flex justify-content-center mt-5">

            <div class="rocket-card" v-for="foguete in resposta">

                <img class="imagem mb-1" :src="foguete.imagem" alt="foto do foguete">
                <h1>{{ foguete.nome }}</h1>
                <p>Custo de lançamento: {{ foguete.custo }}</p>
                <p>Atividade: {{ foguete.status }}</p>
                <router-link class="btn btn-primary" :to="{ name: 'lancamento', params: { id: foguete.id } }">
                    Lançar foguete
                </router-link>

            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            resposta: [],
            response: []
        };
    },


    mounted() {
        this.SalvarDados();
    },

    methods: {

        SalvarDados() {

            axios.get('http://127.0.0.1:8000/api/foguetes/create')
                .then(response => {
                    this.response = response.data;

                    this.RetornarFoguetes();
                })
                .catch(error => {
                    console.error('Erro na requisição:', error);
                });

        },

        RetornarFoguetes() {
            axios.get('http://127.0.0.1:8000/api/foguetes')
                .then(response => {
                    this.resposta = response.data;
                })
                .catch(error => {
                    console.error('Erro na requisição:', error);
                });
        },


    }

}
</script>

<style lang="scss" scoped>
.rocket-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin: 16px;
}

.imagem {
    width: 250px;
    padding: 3px;
    border: 1px solid #ddd;
}
</style>