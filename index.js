const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder } = require(`discord.js`);
const logs = require(`discord-logs`);
const { handleLogs } = require(`./Handlers/handleLogs`);
const { loadEvents } = require(`./Handlers/eventHandler`);
const { loadCommands } = require(`./Handlers/commandHandler`);
const { loadButtons } = require(`./Handlers/buttons`);

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

logs(client, {
  debug: true
});

client.commands = new Collection();
client.buttons = new Collection();
client.config = require("./config.json");

client.login(client.config.token).then(() => {
  handleLogs(client);
  loadEvents(client);
  loadCommands(client);
  loadButtons(client);
});
