import type { Client } from "discord.js";
import type { SlashCommand } from "@/types/command";

/**
 * The type for the client.
 * @param commands - The commands of the client.
 */
declare module "discord.js" {
    export interface Client extends Client {
        commands: Collection<string, SlashCommand>;
    }
}