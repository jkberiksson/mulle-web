@AGENTS.md

## Working agreement

How Jakob (solo founder) and Claude work on Mulle — the full version is in `mulle-app`'s
`CLAUDE.md`; the essentials:

- **Language.** Answer Jakob in Swedish; code, comments, commits, PRs and issues in English.
- **Issues are the backlog**, all in `jkberiksson/mulle-app` — also for this repo. Picking
  something up: read the issue (`gh issue view N -R jkberiksson/mulle-app`) first. Something
  new comes up: suggest an issue, create it when Jakob agrees (`## Why` / `## What` /
  `## Out of scope` / `## Open questions`; labels `enhancement`/`bug`, `area:*`, `size:*`,
  `idea` while undecided). Don't merge, split or phase issues unless asked.
- **Recommend first.** Present a plan and wait for the go-ahead before building anything
  non-trivial; questions get answers, not code.
- **Branches and PRs.** A branch per issue named like the app's (`<N>-<slug>`), never commits
  on `main`. Push, PR (`Closes jkberiksson/mulle-app#N`) and squash-merge only when Jakob
  says so.
- **Never deploy on your own.** Releases are batched and run only on Jakob's word.
- **Deploys.** `main` goes live on merge — so merging is releasing; only when Jakob says so.
