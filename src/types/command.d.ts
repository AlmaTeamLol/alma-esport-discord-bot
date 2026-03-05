/**
 * The type for the execute function of a slash command.
 * @param interaction - The interaction that triggered the command.
 * @returns A promise that resolves when the command is executed.
 */
type SlashCommandExceuteHandler = (interaction: ChatInputCommandInteraction) => Promise<void>;

/**
 * The type for the components of a slash command.
 * @returns A readonly tuple of the components.
 */
type SlashCommandComponent = readonly (
    | JSONEncodable<APIMessageTopLevelComponent>
    | TopLevelComponentData
    | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder>
    | APIMessageTopLevelComponent
);

/**
 * The type for the component builder of a slash command.
 * @param args - The arguments for the component builder.
 * @returns A readonly tuple of the components.
 */
type SlashCommandComponentBuilder = (...args: any[]) => SlashCommandComponent | SlashCommandComponent[] | undefined;

/**
 * The type for the slash command.
 * @param commandData - The data for the slash command.
 * @param commandExecute - The execute function for the slash command.
 * @param commandComponents - The component builder for the slash command.
 * @returns A SlashCommand object.
 */
type SlashCommand = {
    commandData: SlashCommandBuilder;
    commandExecute: SlashCommandExceuteHandler;
    commandComponents?: SlashCommandComponentBuilder;
}

/**
 * The types for the slash command.
 * @param SlashCommand - The type for the slash command.
 * @param SlashCommandExceuteHandler - The type for the execute function of a slash command.
 * @param SlashCommandComponent - The type for the components of a slash command.
 * @param SlashCommandComponentBuilder - The type for the component builder of a slash command.
 */
export type { SlashCommand, SlashCommandExceuteHandler, SlashCommandComponent, SlashCommandComponentBuilder };