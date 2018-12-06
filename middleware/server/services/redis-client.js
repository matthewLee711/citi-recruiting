const redis = require("redis");
const redisUrl = 'redis://redis:6379';
const redisUrl2 = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl2);
client.config('set','notify-keyspace-events','hKEAs');

module.exports = client;
