---
description: Create a draft pull request after running local CI checks, making sure to use a new branch if currently on main.
---

# Create a Draft Pull Request

This skill automates the process of wrapping up work, committing it, and creating a pull request.

// turbo-all

1. Verify the current git branch using `git branch --show-current`. If the current branch is `main` or `master`, use the `run_command` tool to create and checkout a new branch following a descriptive naming convention (e.g., `git checkout -b feat/new-feature-name`). Do not make commits directly to the main branch.
2. Run the command `mise run pr` to ensure the codebase passes format, lint, and build stages. Wait for the command to complete successfully. If it fails, report the errors to the user and stop.
3. Review the staged and unstaged changes (`git status` and `git diff`). Stage all intended changes.
4. Review `.commitlintrc.cjs` to understand the commit message guidelines for this repository.
5. Commit the code following those exact guidelines using `git commit -m "<message>"`.
6. Push the branch to the remote repository.
7. Read the `.github/pull_request_template.md` file to understand the required structure for the PR description.
8. Create a Draft Pull Request using the GitHub MCP server tools (e.g., `github-mcp-server_create_pull_request` with `draft: true`), or the `gh pr create --draft --title "<Title>" --body "<Body>"` CLI command, utilizing the template format.
