import { API } from '@discordjs/core/http-only';

// vvv switch these lines around and see it working
import { REST } from 'discord.js';
// import { REST } from '@discordjs/rest';
// ^^^ switch these lines around and see it working

const rest = new REST({ version: '10' }).setToken('');


const api = new API(rest);
