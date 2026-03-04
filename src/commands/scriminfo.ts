import {
    ContainerBuilder,
    ChannelType,
    ChatInputCommandInteraction,
    InteractionContextType,
    SlashCommandBuilder,
    ButtonStyle,
    ButtonBuilder,
    TextDisplayBuilder,
    MessageFlags,
    SectionBuilder,
    ThumbnailBuilder
} from "discord.js";
import { config } from "@/config";
import { SlashCommand } from "@/types/command";

function createComponents(team: string, date: string, time: string, format: string, side: string, enemyMultiGg: string, almaMultiGg: string, drafter: string) {
    const scrimInfoTextDisplay = new TextDisplayBuilder()
        .setContent(`⚔️ **${team}** | SCRIM INFO ⚔️`);

    const dateTextDisplay = new TextDisplayBuilder()
        .setContent(`📅 **${date}** | **${time}**`);

    const sideSquareEmoji = side.toLowerCase() === "blue" ? "🟦" : "🟥";
    const formatTextDisplay = new TextDisplayBuilder()
        .setContent(`⚙️ **${format}** | ALMA commence en ${sideSquareEmoji} **${side}** side`);

    const sectionThumbnail = new ThumbnailBuilder()
        .setURL("https://i.postimg.cc/7hTkdLFj/ALMA-Esports-SCRIM-Logo.png");

    const scrimInfoSectionDisplay = new SectionBuilder()
        .addTextDisplayComponents(scrimInfoTextDisplay, dateTextDisplay, formatTextDisplay)
        .setThumbnailAccessory(sectionThumbnail);

    const enemyMultiGgButton = new ButtonBuilder()
        .setLabel("Lien vers le Multi GG adverse")
        .setURL(enemyMultiGg)
        .setStyle(ButtonStyle.Link)
        .setEmoji("⚔️");

    const almaMultiGgButton = new ButtonBuilder()
        .setLabel("Lien vers votre Multi GG")
        .setURL(almaMultiGg)
        .setStyle(ButtonStyle.Link)
        .setEmoji("👈");

    const drafterButton = new ButtonBuilder()
        .setLabel("Lien vers le Drafter")
        .setURL(drafter)
        .setStyle(ButtonStyle.Link)
        .setEmoji("🔗");

    const container = new ContainerBuilder()
        .setAccentColor(config.theme.primaryColor)
        .addSectionComponents(scrimInfoSectionDisplay)
        .addSeparatorComponents((separator) => separator)
        .addActionRowComponents((linkActionRow) => linkActionRow.addComponents(enemyMultiGgButton, almaMultiGgButton, drafterButton));

    return container;
}

async function execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();

    const team = interaction.options.get("team")?.value as string;
    const date = interaction.options.get("date")?.value as string;
    const time = interaction.options.get("time")?.value as string;
    const format = interaction.options.get("format")?.value as string;
    const side = interaction.options.get("side")?.value as string;
    const enemyMultiGg = interaction.options.get("enemy-multi-gg")?.value as string;
    const almaMultiGg = interaction.options.get("alma-multi-gg")?.value as string;
    const drafter = interaction.options.get("drafter")?.value as string;

    await interaction.followUp({
        components: [createComponents(team, date, time, format, side, enemyMultiGg, almaMultiGg, drafter)],
        flags: MessageFlags.IsComponentsV2,

    });
}

const data = new SlashCommandBuilder()
    .setName("scrim-info")
    .setDescription("Provides information about the current scrim.")
    .addStringOption(option => option.setName("team")
        .setDescription("Team name")
        .setRequired(true)
        .addChoices(
            { name: "Alma1", value: "ALMA 1" },
            { name: "Alma2", value: "ALMA 2" },
            { name: "AlmaO", value: "ALMA O" },
        ))
    .addStringOption(option => option.setName("date")
        .setDescription("Scrim start date (i.e 03/03/2026)")
        .setRequired(true))
    .addStringOption(option => option.setName("time")
        .setDescription("Scrim start time (i.e 20H or 2OH30)")
        .setRequired(true))
    .addStringOption(option => option.setName("format")
        .setDescription("Scrim format (i.e BO3 Fearless)")
        .setRequired(true))
    .addStringOption(option => option.setName("side")
        .setDescription("Side ALMA will take for Game 1")
        .setRequired(true)
        .addChoices(
            { name: "Blue", value: "BLUE" },
            { name: "Red", value: "RED" },
        ))
    .addStringOption(option => option.setName("enemy-multi-gg")
        .setDescription("Link redirecting to the enemy Multi GG page")
        .setRequired(true))
    .addStringOption(option => option.setName("alma-multi-gg")
        .setDescription("Link redirecting to the ALMA Multi GG page")
        .setRequired(true))
    .addStringOption(option => option.setName("drafter")
        .setDescription("Link redirecting to the Drafter page")
        .setRequired(true))
    .addChannelOption(option => option.setName("channel")
        .setDescription("Channel where the scrim information will be played")
        .addChannelTypes(ChannelType.GuildText))
    .setContexts(InteractionContextType.Guild);

export const scrimInfo: SlashCommand = {
    commandData: data,
    commandExecute: execute,
    commandComponents: createComponents,
};