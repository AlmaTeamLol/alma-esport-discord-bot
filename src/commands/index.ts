import { ping } from "@/commands/ping";
import { scrimInfo } from "@/commands/scriminfo";
import { scrimSearchMsg } from "@/commands/scrimsearchmsg";
import { SlashCommand } from "@/types/command";

/**
 * The commands for the bot.
 * @returns A readonly array of the commands.
 */
export const commands: SlashCommand[] = [
    ping,
    scrimInfo,
    scrimSearchMsg,
];