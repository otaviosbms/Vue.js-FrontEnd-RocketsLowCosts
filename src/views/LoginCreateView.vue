<template>


    <form class="container bg-primary-subtle rounded" @submit.prevent="SalvarUsuario">

        <h1 class="text-center mt-3">Criar Usuário</h1>

        <input class="form-control mt-4" type="text" v-model="nome" placeholder="Digite seu nome">

        <input class="form-control mt-3" type="number" v-model="idade" placeholder="Digite sua idade">

        <button class="btn btn-primary my-3" type="submit">Cadastrar</button>

        <router-link class="btn btn-secondary mx-1 my-3" :to="{ name: 'login' }">
            Retornar ao Login
        </router-link>

    </form>


</template>


<script>

import axios from 'axios';

export default {

    data() {
        return {
            nome: '',
            idade: null,
            resposta: null
        };
    },

    methods: {
        SalvarUsuario() {

            axios.post('http://127.0.0.1:8000/api/login/create', {
                nome: this.nome,
                idade: this.idade
            })
                .then(response => {
                    alert('Usuário criado com sucesso ')
                    this.resposta = response.data;
                    this.nome = '';
                    this.idade = null;
                })
                .catch(error => {
                    alert('Não foi possivel criar o Usuário')
                    // this.resposta = error.response.data;
                });

        },


    },

};

</script>
  
<style scoped>

template{
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    height: 100vh; /* Define a altura da div como 100% da altura da janela */
}

</style>
  