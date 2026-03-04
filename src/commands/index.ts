import { ping } from "@/commands/ping";
import { scrimInfo } from "@/commands/scriminfo";
import { scrimSearchMsg } from "@/commands/scrimsearchmsg";
import { SlashCommand } from "@/types/command";

export const commands: SlashCommand[] = [
    ping,
    scrimInfo,
    scrimSearchMsg,
];