import dotenv from "dotenv";

dotenv.config();

/**
 * The environment variables for the bot.
 * @param DISCORD_TOKEN - The token for the Discord API.
 * @param DISCORD_CLIENT_ID - The client ID for the Discord API.
 * @param DISCORD_GUILD_ID - The guild ID for the Discord API.
 */
const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env;

/**
 * The primary color for the bot.
 * @param primaryColor - The primary color.
 */
const primaryColor = 0x003d55;
/**
 * The secondary color for the bot.
 * @param secondaryColor - The secondary color.
 */
const secondaryColor = 0xab582d;
/**
 * The background color for the bot.
 * @param backgroundColor - The background color.
 */
const backgroundColor = 0x000000;
/**
 * The theme for the bot.
 * @param primaryColor - The primary color.
 * @param secondaryColor - The secondary color.
 * @param backgroundColor - The background color.
 * @returns A theme object.
 */
const theme = {
    primaryColor,
    secondaryColor,
    backgroundColor
};

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_GUILD_ID) {
    throw new Error("DISCORD_TOKEN and DISCORD_CLIENT_ID and DISCORD_GUILD_ID are required");
}

/**
 * The config for the bot.
 * @param DISCORD_TOKEN - The token for the Discord API.
 * @param DISCORD_CLIENT_ID - The client ID for the Discord API.
 * @param DISCORD_GUILD_ID - The guild ID for the Discord API.
 * @param theme - The theme for the bot.
 * @returns A config object.
 */
export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    DISCORD_GUILD_ID,
    theme
};