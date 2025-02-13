export default () => ({
    kafka: {
      clientId: process.env.KAFKA_CLIENT_ID || 'default-client',
      broker: process.env.KAFKA_BROKER || 'localhost:9092',
      groupID: process.env.KAFKA_GROUP_ID || 'default-group',
      topic: process.env.KAFKA_TOPIC || 'default-topic',
    },
  });