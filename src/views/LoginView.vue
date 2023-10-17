<template>
    <form class="container bg-primary-subtle rounded" @submit.prevent="Login">

        <h1 class="text-center mt-3">Login</h1>

        <input class="form-control mt-4" id="nome" type="text" v-model="nome" placeholder="Digite seu nome">

        <button class="btn btn-primary my-3" type="submit">Entrar</button>

        <button @click="CriarUsuario" class="btn btn-secondary mx-1 my-3" type="submit">Criar Usuário</button>

    </form>
</template>
  
<script>

import axios from 'axios';

export default {

    data() {
        return {
            nome: '',
            resposta: null
        };
    },

    methods: {

        Login() {
            axios.post('http://127.0.0.1:8000/api/login', {
                nome: this.nome,
            })
                .then(response => {
                    this.resposta = response.data;
                })
                .catch(error => {
                    this.resposta = error.response.data;
                });
        },

        CriarUsuario() {
            this.$router.push('/login/create');
        }

    },

};

</script>
  
<style scoped></style>
  