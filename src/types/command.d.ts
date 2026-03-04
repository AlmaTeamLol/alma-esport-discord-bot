type SlashCommandExceuteHandler = (interaction: ChatInputCommandInteraction) => Promise<void>;

type SlashCommandComponent = readonly (
    | JSONEncodable<APIMessageTopLevelComponent>
    | TopLevelComponentData
    | ActionRowData<MessageActionRowComponentData | MessageActionRowComponentBuilder>
    | APIMessageTopLevelComponent
);

type SlashCommandComponentBuilder = (...args: any[]) => SlashCommandComponent | SlashCommandComponent[] | undefined;

type SlashCommand = {
    commandData: SlashCommandBuilder;
    commandExecute: SlashCommandExceuteHandler;
    commandComponents?: SlashCommandComponentBuilder;
}

export type { SlashCommand, SlashCommandExceuteHandler, SlashCommandComponent, SlashCommandComponentBuilder };