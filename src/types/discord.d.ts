import type { Client } from "discord.js";
import type { SlashCommand } from "@/types/command";

declare module "discord.js" {
    export interface Client extends Client {
        commands: Collection<string, SlashCommand>;
    }
}