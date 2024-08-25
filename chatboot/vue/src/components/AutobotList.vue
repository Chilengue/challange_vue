<template>
  <div>
    <h2>Autobot List</h2>
    <ul>
      <li v-for="autobot in autobots" :key="autobot.id">
        <a @click="selectAutobot(autobot.id)">{{ autobot.username }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      autobots: [],
    };
  },
  mounted() {
    this.fetchAutobots();
  },
  methods: {
    async fetchAutobots() {
      try {
        const response = await axios.get('http://localhost:3000/api/autobots');
        this.autobots = response.data;
      } catch (error) {
        console.error('Erro ao buscar Autobots:', error);
      }
    },
    selectAutobot(id) {
      this.$emit('select-autobot', id);
    },
  },
};
</script>
