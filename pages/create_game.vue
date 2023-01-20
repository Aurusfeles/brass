<template>
  <div>
    <h1>Nouvelle partie</h1>

    Nom:<input v-model="name" /> Utiliser un mot de passe:<input
      type="checkbox"
      v-model="password_protected"
    />
    Mot de passe:<input v-model="password" />
    <button @click="create">Créer la partie</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const name = ref("");
const password_protected = ref(true);
const password = ref("");

const create = async () => {
  await useFetch("/api/new_game/", {
    query: { name, password_protected, password },
  });
};
</script>

<style>
</style>