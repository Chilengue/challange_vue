const axios = require('axios');
const cron = require('node-cron');
const Autobot = require('./Autobot');
const Post = require('./post');
const Comment = require('./Comment');

let autobotCount = 0;

const createAutobots = async () => {
  for (let i = 0; i < 500; i++) {
    try {
      const user = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      const newUser = { username: `autobot_${autobotCount + i + 1}` };

      // Criar e salvar o Autobot no banco de dados
      const createdAutobot = await Autobot.create(newUser);

      for (let j = 0; j < 10; j++) {
        const post = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const newPost = {
          title: `Unique Title ${autobotCount * 10 + i * 10 + j + 1}`,
          body: post.data.body,
          autobotId: createdAutobot.id,
        };

        // Criar e salvar a Postagem no banco de dados
        const createdPost = await Post.create(newPost);

        for (let k = 0; k < 10; k++) {
          const comment = await axios.get('https://jsonplaceholder.typicode.com/comments/1');
          const newComment = {
            body: comment.data.body,
            postId: createdPost.id,
          };

          // Criar e salvar o Comentário no banco de dados
          await Comment.create(newComment);
        }
      }

      console.log(`Criado Autobot ${newUser.username} com postagens e comentários.`);
    } catch (error) {
      console.error('Erro ao criar Autobot:', error);
    }
  }
  autobotCount += 500;
};

// Agendar o job para rodar a cada hora


cron.schedule('0 * * * *', createAutobots);

module.exports = { autobotCount };
