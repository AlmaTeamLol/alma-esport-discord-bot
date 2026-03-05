import { SlashCommand } from "@/types/command";
import { Client, Events, Interaction } from "discord.js";

/**
 * The interaction create listener.
 * @param client - The client.
 */
export default (client: Client): void => {
    client.on(Events.InteractionCreate, async (interaction: Interaction) => {
        if (!interaction.isCommand()) {
            return;
        }

        const command: SlashCommand = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`Command ${interaction.commandName} not found`);
            return;
        }

        try {
            await command.commandExecute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.followUp({ content: "There was an error while executing this command!", ephemeral: true });
        }
    });
}