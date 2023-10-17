<template>
    <div>

        <h1 class="text-center">Olá {nome} seja bem vindo!</h1>

        <div class="text-center">
            
            <h6 class="text-center mt-3">{{ response.message }}</h6>
            <button @click="MeusLancamentos" class="btn btn-primary mt-3">Meus lançamentos</button>
        
        </div>

        <div class="d-flex justify-content-center mt-5">

            <div class="rocket-card" v-for="foguete in resposta">

                <img class="imagem mb-1" :src="foguete.imagem" alt="foto do foguete">
                <h1>{{ foguete.nome }}</h1>
                <h6>Custo de lançamento: {{ foguete.custo }}</h6>
                <h6>Tipo e versão do motor:</h6>
                <ul>
                    <li>{{ foguete.motor_tipo }}</li>
                    <li>{{ foguete.motor_ver }}</li>
                </ul>
                <h6>Atividade: {{ foguete.status }}</h6>
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
            response: '',
        };
    },


    mounted() {

        this.SalvarDados();
        this.RetornarFoguetes();
    },

    methods: {

        SalvarDados() {

            axios.get('http://127.0.0.1:8000/api/foguetes/create')
                .then(response => {
                    this.response = response.data;

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

        MeusLancamentos(){
            this.$router.push({ name: 'meus-lancamentos' });
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