// @flow

const spawnSync = require("cross-spawn").sync;
const chalk = require("chalk");

export const runCommand = (
  cmd: string,
  args: $ReadOnlyArray<string>,
  options: Object = {}
) => {
  console.log(chalk.dim(`$ ${cmd} ${args.join(" ")}`));
  const result = spawnSync(cmd, args, { stdio: "inherit", ...options });
  if (result.error || result.status !== 0) {
    const message = "Error running command.";
    const error = new Error(message);
    error.stack = result.error;
    throw error;
  }
};
