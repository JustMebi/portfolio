# Projects Data

Each project lives in its own file under `src/data/projects/` and is aggregated by `index.ts`.

## Add a new project
1) Copy `project-helper.ts` and rename it (use kebab-case).
2) Update the exported `Project` object.
3) Import it in `src/data/projects/index.ts` and add it to the `projects` array.

## Files
- `types.ts`: shared `Project` type definitions.
- `index.ts`: aggregator export for the app.
- `<project-id>.ts`: one project per file.
