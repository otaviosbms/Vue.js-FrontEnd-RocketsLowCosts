<template>

    <div class="rocket-card">

        <img class=" imagem" :src="resposta.imagem" alt="foto do foguete">
        <h1>{{ resposta.nome }}</h1>
        <h6>Tipo e versão do motor: {{ resposta.motor_tipo }} / {{ resposta.motor_ver }}</h6>
        <h6>Custo de lançamento: {{ resposta.custo }}</h6>
        <h6>Atividade: {{ resposta.status }}</h6>

    </div>

    <form class="container bg-primary-subtle rounded" @submit.prevent="LancarFoguete">

        <h1 class="text-center mt-4">Data e lucro</h1>

        <div class="mt-3">
            <label for="data" class="form-label">Data do lançamento:</label>
            <input class="form-control" id="data" type="date" v-model="data">
        </div>

        <div class="mt-4">
            <label for="lucro" class="form-label">Lucro desejado (em %):</label>
            <input class="form-control" id="lucro" type="number" v-model="lucro" placeholder="Lucro">
        </div>

        <button class="btn btn-primary my-3" type="submit">Lançar</button>

        <router-link class="btn btn-secondary mx-1 my-3 " :to="{ name: 'foguetes' }">
            Voltar aos foguetes
        </router-link>

    </form>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            data: null,
            lucro: null,
            resposta: [],
            response: []

        };
    },

    mounted() {
        const id = this.$route.params.id;
        axios.get("http://127.0.0.1:8000/api/foguetes/" + id, {

        })
            .then(response => {
                this.resposta = response.data;
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    },

    methods: {
        LancarFoguete() {
            const id = this.$route.params.id;
            axios.post('http://127.0.0.1:8000/api/foguetes/lancamento/' + id, {
                data: this.data,
                lucro: this.lucro
            })

                .then(response => {
                    alert('Lançamento do foguete criado com sucesso!')
                })
                .catch(error => {
                    alert('Lançamento já cadastrado!')
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
    width: 300px;
    padding: 3px;
    border: 1px solid #ddd;
}
</style>