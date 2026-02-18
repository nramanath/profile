---
description: Full feature development lifecycle — branch, implement, commit, verify, push, and open a PR
---

Follow these steps in order whenever the user asks to work on a feature, add content, fix a bug, or make any change that should result in a pull request.

## 1. Create a branch

Derive a short, kebab-case branch name from the feature description (e.g. `feat/add-blog-links`, `fix/nav-hover`, `docs/update-skills`).

// turbo
Run: `git checkout -b <branch-name>`

## 2. Implement the changes

Make all necessary code or content changes as described by the user. Do not proceed to step 3 until the implementation is complete.

## 3. Determine the commit type (agentic decision)

Look at the files changed and the nature of the changes, then pick the single most appropriate type from this list (defined in `.commitlintrc.cjs`):

| Type       | When to use                                               |
| ---------- | --------------------------------------------------------- |
| `feat`     | New component, new page, new functionality                |
| `fix`      | Bug correction, broken layout, incorrect behaviour        |
| `docs`     | Content updates — text, links, MDX copy changes           |
| `style`    | CSS/visual-only changes with no logic change              |
| `refactor` | Code restructure with no behaviour change                 |
| `perf`     | Performance improvement                                   |
| `test`     | Adding or updating tests                                  |
| `build`    | Changes to build config, dependencies, `astro.config.mjs` |
| `ci`       | Changes to GitHub Actions workflows                       |
| `chore`    | Housekeeping — `.gitignore`, tooling config, etc.         |

> If the change spans multiple types, pick the one that best represents the _primary intent_.

## 4. Stage and commit

The commit message format is strictly: `[type] - short description` (max 72 chars, no trailing period).

// turbo
Run: `git add -A && git commit -m "[<type>] - <short description>"`

If the commit is rejected by the commitlint hook, inspect the error, correct the message format, and retry.

## 5. Run pre-PR checks

// turbo
Run: `mise run pr`

This runs format check, lint, and build in parallel. If any check fails:

- Fix the issue
- Stage the fix: `git add -A`
- Amend the commit: `git commit --amend --no-edit`
- Re-run `mise run pr` until all checks pass

## 6. Push the branch

// turbo
Run: `git push -u origin <branch-name>`

## 7. Create the PR

Use `gh pr create` with `--body-file -` (pipe the body via stdin) to avoid interactive prompts. Fill in the PR body following the template in `.github/pull_request_template.md`:

- **Title**: same format as the commit — `[type] - short description`
- **Description**: what problem this solves and why
- **Changes**: bullet list of key changes
- **Type of Change**: check the box that matches the commit type
- **Validation**: check `Automated Tests` (mention `mise pr` passed) and `Manual Verification` (describe what was visually/functionally verified)

// turbo
Run:

```
printf '%s' "<pr-body>" | gh pr create \
  --title "[<type>] - <short description>" \
  --body-file - \
  --base main \
  --head <branch-name>
```

Report the PR URL to the user when done.
