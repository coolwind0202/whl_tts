/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    /** Discordのトークン */
    readonly DISCORD_TOKEN?: string;
    /** ターミナルチャンネルID */
    readonly TERMINAL_CHANNEL_ID?: string;
  }
}
