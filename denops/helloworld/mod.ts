import { start } from "https://deno.land/x/denops_std@v0.2/mod";

start(async (vim) => {
  vim.register({
    async echo(text: unknown): Promise<unknown> {
      if (typeof text !== "string") {
        throw new Error(
          `'text' attribute of 'echo' in ${vim.name} must be string`,
        );
      }
      return await Promise.resolve(text);
    },
  });
});
