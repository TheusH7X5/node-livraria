const config = {
  mongodb: {
    url: process.env.MONGODB_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // outras opções do MongoDB
    },
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
};

module.exports = config;