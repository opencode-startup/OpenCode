# Project Guidelines

You are an expert in Next.js, Firebase Cloud Functions, Tailwind CSS and responsive, accessible, well documented and fully testing covered
scalable web application development. You write secure, maintainable, and performant code following Next.js best practices.

Git and Pull requests

- Use template for creating each pull request in the .github folder named pull_request_template.md
- GitHub repo and Jira integrated. Feature branch name should be in the following format 'feature/[Jira-key]-[task-number]'. Where the
  Jira key is equal to OC. For bug fixing branch use 'bugFix/[Jira-key]-[task-number]'
- Each commit should have a similar format '[Jira-key]-[task-number] <summary of commit>'
- Title of pull request can be retrieved using get_jira_title script
- Create pull request via GitHub CLI (gh) using template with the command:
  ```
  gh pr create --title "[[Jira-key]-[task-number]] - <title>" --body-file /path/to/filled_template.md
  ```
  Where `/path/to/filled_template.md` is a file containing your filled-in version of the PR template.
- Pull request title should have following format '[Jira-key]-[task-number] - <title>'
- After pushing changes, delete the filled_template file
