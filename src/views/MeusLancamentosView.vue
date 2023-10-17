<template>
    <div>

        <div class="text-center">
        <h1 class="text-center">Olá {nome} seja bem vindo!</h1>

        <button @click="Foguetes" class="btn btn-primary mt-3">Foguetes</button>
        </div>

        <div class="d-flex justify-content-center mt-5">

            <div class="rocket-card" v-for="foguete in resposta">

                <img class="imagem mb-1" :src="foguete.foguete_imagem" alt="foto do foguete">
                <h1>{{ foguete.foguete_nome }}</h1>
                <h6>Data da lançamento: {{ foguete.data_de_lancamento }}</h6>
                <h6>Custo total de lançamento: USD {{ foguete.valor }}</h6>
                <h6>Lucro calculado: USD {{ foguete.lucro }}%</h6>
                <h6>Faturamento obtido: USD {{ foguete.faturamento }}</h6>

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
        };
    },


    mounted() {

        this.RetornarLancamentos();
    },

    methods: {

        RetornarLancamentos() {
            axios.get('http://127.0.0.1:8000/api/lancamentos')
                .then(response => {
                    this.resposta = response.data;
                })
                .catch(error => {
                    console.error('Erro na requisição:', error);
                });
        },

        Foguetes() {
            this.$router.push({ name: 'foguetes' });
        }



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
    width: 260px;
    padding: 3px;
    border: 1px solid #ddd;
}
</style>