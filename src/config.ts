import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env;

const primaryColor = 0x003d55;
const secondaryColor = 0xab582d;
const backgroundColor = 0x000000;

const theme = {
    primaryColor,
    secondaryColor,
    backgroundColor
};

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_GUILD_ID) {
    throw new Error("DISCORD_TOKEN and DISCORD_CLIENT_ID and DISCORD_GUILD_ID are required");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    DISCORD_GUILD_ID,
    theme
};