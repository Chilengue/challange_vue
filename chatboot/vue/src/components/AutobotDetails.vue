<template>
  <div v-if="autobot">
    <h2>Details for {{ autobot.username }}</h2>
    <div v-if="posts.length">
      <h3>Posts:</h3>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <p>{{ post.body }}</p>
          <div v-if="post.comments.length">
            <h5>Comments:</h5>
            <ul>
              <li v-for="comment in post.comments" :key="comment.id">
                {{ comment.body }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['autobotId'],
  data() {
    return {
      autobot: null,
      posts: [],
    };
  },
  watch: {
    autobotId: 'fetchDetails',
  },
  mounted() {
    this.fetchDetails();
  },
  methods: {
    async fetchDetails() {
      if (!this.autobotId) return;

      try {
        const autobotResponse = await axios.get(`http://localhost:3000/api/autobots/${this.autobotId}`);
        this.autobot = autobotResponse.data;

        const postsResponse = await axios.get(`http://localhost:3000/api/autobots/${this.autobotId}/posts`);
        this.posts = postsResponse.data;

        // Fetch comments for each post
        for (const post of this.posts) {
          const commentsResponse = await axios.get(`http://localhost:3000/api/posts/${post.id}/comments`);
          post.comments = commentsResponse.data;
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes do Autobot:', error);
      }
    },
  },
};
</script>
