<template>
  <div>
    <h1>Current Autobot Count: {{ count }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    this.fetchCount();
    setInterval(this.fetchCount, 5000); // Atualizar a cada 5 segundos
  },
  methods: {
    async fetchCount() {
      try {
        const response = await axios.get('http://localhost:3000/api/autobot-count');
        this.count = response.data.count;
      } catch (error) {
        console.error('Erro ao buscar contagem:', error);
      }
    },
  },
};
</script>
