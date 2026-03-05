import { Client, Events } from "discord.js";

/**
 * The ready listener.
 * @param client - The client.
 */
export default (client: Client): void => {
    client.on(Events.ClientReady, readyClient => {
        console.log(`Logged in as ${readyClient.user.tag}!`);
    });
};