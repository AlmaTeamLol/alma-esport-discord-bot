import {
    ChatInputCommandInteraction,
    MessageFlags,
    SlashCommandBuilder,
    TextDisplayBuilder
} from "discord.js";
import { SlashCommand } from "@/types/command";

function createTextDisplay(date: string, time: string, format: string, elo: string) {
    return new TextDisplayBuilder()
        .setContent(`📅 **${date}**\n🕐 ${time} CET\n⚔️ ${format}\n✅ **${elo}**\n✉️ DM + OP.GG`);
}

export async function execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    const date = interaction.options.get("date")?.value as string;
    const time = interaction.options.get("time")?.value as string;
    const format = interaction.options.get("format")?.value as string;
    const elo = interaction.options.get("elo")?.value as string;

    await interaction.followUp({
        components: [createTextDisplay(date, time, format, elo)],
        flags: MessageFlags.IsComponentsV2,
    });
}

export const data = new SlashCommandBuilder()
    .setName("scrim-search-msg")
    .setDescription("Generates a message to search for scrims.")
    .addStringOption(option => option.setName("date")
        .setDescription("Scrim desired start date (i.e 03/03/2026)")
        .setRequired(true))
    .addStringOption(option => option.setName("time")
        .setDescription("Scrim desired start time (i.e 20H or 2OH30)")
        .setRequired(true))
    .addStringOption(option => option.setName("format")
        .setDescription("The format of the scrim to search for.")
        .setRequired(true))
    .addStringOption(option => option.setName("elo")
        .setDescription("The desired Elo for the scrim.")
        .addChoices(
            { name: "Emerald-Diamond", value: "Emerald / Diamond" },
            { name: "Diamond", value: "Diamond" },
            { name: "Diamond-Master", value: "Diamond / Master" },
            { name: "Low-Master", value: "Low Master" },
            { name: "Master+", value: "Master+" },
        )
        .setRequired(true));

export const scrimSearchMsg: SlashCommand = {
    commandData: data,
    commandExecute: execute,
    commandComponents: createTextDisplay,
};