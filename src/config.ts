import fs from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

import { sourceFolder } from '#utils/constants';

interface EnvironmentVariables {
	development: boolean;
	debug: boolean;
	bot: { token: string; activityMessage: string; owners: string[]; testingGuilds: string[] };
	database: { postgres: { host: string; port: number; user: string; password: string; database: string } };
}

const fileContents = fs.readFileSync(join(fileURLToPath(sourceFolder), 'config.yaml'), 'utf8');
export const config = YAML.parse(fileContents) as EnvironmentVariables;
