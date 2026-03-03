import { REST, Routes } from "discord.js";
import { config } from "@/config";
import { commands } from "@/commands";

const commandsData = Object.entries(commands).map(([, value]) => value.data.toJSON());

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");
        await rest.put(Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, config.DISCORD_GUILD_ID), { body: commandsData });
        console.log("Successfully reloaded application (/) commands.");
    }
    catch (error) {
        console.error(error);
    }
})().catch(console.error);