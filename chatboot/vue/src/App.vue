<template>
  <div id="app">
    <AutobotCount />
    <div class="container">
      <AutobotList @select-autobot="selectedAutobot = $event" />
      <AutobotDetails v-if="selectedAutobot" :autobotId="selectedAutobot" />
    </div>
  </div>
</template>

<script>
import AutobotCount from './components/AutobotCount.vue';
import AutobotList from './components/AutobotList.vue';
import AutobotDetails from './components/AutobotDetails.vue';

export default {
  components: {
    AutobotCount,
    AutobotList,
    AutobotDetails,
  },
  data() {
    return {
      selectedAutobot: null,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
