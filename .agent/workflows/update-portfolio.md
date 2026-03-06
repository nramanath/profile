---
description: Update portfolio documents based on changes to the resume PDF.
---

# Update Portfolio

This skill synchronizes the user's documented experience and skills with their updated resume.

1. Locate the user's resume PDF at `public/resume-ramanathan-nachiappan.pdf`. Provide a way to read or extract the text from the PDF (e.g., using `run_command` with a tool like `pdftotext public/resume-ramanathan-nachiappan.pdf -` or reading it directly if tool support exists). If unable to parse the PDF directly, ask the user to provide the updated textual content.
2. Read the existing `src/content/docs/experience.mdx` and `src/content/docs/skills.mdx` files to understand the current state of the portfolio.
3. Compare the extracted information from the updated PDF against the existing markdown files to identify discrepancies, new roles, or new programming skills.
4. Safely update `experience.mdx` and `skills.mdx` using the `replace_file_content` or `multi_replace_file_content` tools to reflect the new experiences and skills. Ensure that the existing MDX layout structure and component usages remain intact and visually identical.
5. Briefly summarize to the user what was added or updated.
