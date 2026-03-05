import { SlashCommand } from "@/types/command";
import {
    CommandInteraction,
    SlashCommandBuilder
} from "discord.js";

/** 
 * The execute function for the ping command.
 * @param interaction - The interaction that triggered the command.
 * @returns A promise that resolves when the command is executed.
*/
async function execute(interaction: CommandInteraction) {
    await interaction.reply("Pong!");
}

/**
 * The data for the ping command.
 * @returns A new SlashCommandBuilder object.
 */
const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!");

/**
 * The ping command.
 * @returns A SlashCommand object.
 */
export const ping: SlashCommand = {
    commandData: data,
    commandExecute: execute,
};