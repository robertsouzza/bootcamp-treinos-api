import Fastify from "fastify";
import "dotenv/config";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async function handler() {
  return { hello: "word" };
});

try {
  await fastify.listen({ port: Number(process.env.PORT) || 8081 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
