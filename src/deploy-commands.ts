import { config } from "@/config";
import { commands } from "@/commands";
import {
    REST,
    Routes
} from "discord.js";

const commandsData = commands.map((command) => command.commandData.toJSON());

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

/**
 * The deploy commands function for the bot.
 * @returns A promise that resolves when the commands are deployed.
 */
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