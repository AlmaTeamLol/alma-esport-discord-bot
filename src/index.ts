import { Client, Collection, GatewayIntentBits } from "discord.js";
import { config } from "./config";
import ready from "@/listeners/ready";
import interactionCreate from "@/listeners/interactionCreate";
import { commands } from "@/commands";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ]
});

ready(client);

client.commands = new Collection();

for (const command of Object.entries(commands)) {
    client.commands.set(command[1].data.name, command[1]);
}

interactionCreate(client);

client.login(config.DISCORD_TOKEN);