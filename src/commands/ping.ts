import { SlashCommand } from "@/types/command";
import {
    CommandInteraction,
    SlashCommandBuilder
} from "discord.js";

async function execute(interaction: CommandInteraction) {
    await interaction.reply("Pong!");
}

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!");

export const ping: SlashCommand = {
    commandData: data,
    commandExecute: execute,
};