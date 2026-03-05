import { SlashCommand } from "@/types/command";
import {
    ChatInputCommandInteraction,
    MessageFlags,
    SlashCommandBuilder,
    TextDisplayBuilder
} from "discord.js";

/**
 * The create components function for the scrim search msg command.
 * @param date - The desired start date.
 * @param time - The desired start time.
 * @param format - The desired format.
 * @param elo - The desired Elo.
 * @returns A new TextDisplayBuilder object.
 */
function createComponents(date: string, time: string, format: string, elo: string) {
    return new TextDisplayBuilder()
        .setContent(`📅 **${date}**\n🕐 ${time} CET\n⚔️ ${format}\n✅ **${elo}**\n✉️ DM + OP.GG`);
}

/**
 * The execute function for the scrim search msg command.
 * @param interaction - The interaction that triggered the command.
 * @returns A promise that resolves when the command is executed.
 */
async function execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    const date = interaction.options.get("date")?.value as string;
    const time = interaction.options.get("time")?.value as string;
    const format = interaction.options.get("format")?.value as string;
    const elo = interaction.options.get("elo")?.value as string;

    await interaction.followUp({
        components: [createComponents(date, time, format, elo)],
        flags: MessageFlags.IsComponentsV2,
    });
}

/**
 * The data for the scrim search msg command.
 * @returns A new SlashCommandBuilder object.
 */
const data = new SlashCommandBuilder()
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

/**
 * The scrim search msg command.
 * @returns A SlashCommand object.
 */
export const scrimSearchMsg: SlashCommand = {
    commandData: data,
    commandExecute: execute,
    commandComponents: createComponents,
};