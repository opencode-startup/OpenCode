# Jira PR Title Generator

This script retrieves the Jira ticket title for the current branch and formats it for use in pull request titles.

## Prerequisites

- [jira-cli](https://github.com/ankitpokhrel/jira-cli) installed and configured
- Git

## Installation

1. Clone this repository or download the script
2. Make the script executable:
   ```bash
   chmod +x get_jira_title.sh
   ```

## Usage

```bash
./get_jira_title.sh [options]get_jira_title
```

### Options

- `-h, --help`: Display help message
- `-q, --quiet`: Output only the PR title without additional text
- `-k, --key-only`: Output only the Jira key
- `-t, --title-only`: Output only the issue title

### Examples

#### Default output (verbose)

```bash
$ ./get_jira_title.sh
Jira key: OC-32
Issue title: [FE] Remove app from Google crawling
PR title format: [OC-32] - [FE] Remove app from Google crawling
```

#### Quiet output (for use in commands)

```bash
$ ./get_jira_title.sh --quiet
[OC-32] - [FE] Remove app from Google crawling
```

#### Key only

```bash
$ ./get_jira_title.sh --key-only
OC-32
```

#### Title only

```bash
$ ./get_jira_title.sh --title-only
[FE] Remove app from Google crawling
```

## Creating a Pull Request with GitHub CLI

You can use this script with GitHub CLI to create a pull request with the correct title format:

```bash
gh pr create --title "$(./get_jira_title.sh --quiet)" --body-file filled_template.md
```

Where `filled_template.md` is a file containing your filled-in version of the PR template.

## Branch Naming Convention

This script expects branch names to follow one of these formats:

- `feature/OC-XX` for feature branches
- `bugFix/OC-XX` for bug fix branches

Where `OC-XX` is the Jira ticket key.
