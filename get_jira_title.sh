#!/bin/bash

# Function to display usage information
usage() {
  echo "Usage: $0 [options]"
  echo "Options:"
  echo "  -h, --help     Display this help message"
  echo "  -q, --quiet    Output only the PR title without additional text"
  echo "  -k, --key-only Output only the Jira key"
  echo "  -t, --title-only Output only the issue title"
  exit 1
}

# Parse command line arguments
QUIET=false
KEY_ONLY=false
TITLE_ONLY=false

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -h|--help) usage ;;
    -q|--quiet) QUIET=true ;;
    -k|--key-only) KEY_ONLY=true ;;
    -t|--title-only) TITLE_ONLY=true ;;
    *) echo "Unknown parameter: $1"; usage ;;
  esac
  shift
done

# Get the current branch name
branch_name=$(git branch --show-current)

# Extract the Jira ticket key (assuming format feature/OC-XX or bugFix/OC-XX)
if [[ $branch_name =~ (feature|bugFix)/([A-Z]+-[0-9]+) ]]; then
  jira_key=${BASH_REMATCH[2]}

  if [[ "$KEY_ONLY" = true ]]; then
    echo "$jira_key"
    exit 0
  fi

  if [[ "$QUIET" = false && "$TITLE_ONLY" = false ]]; then
    echo "Jira key: $jira_key"
  fi

  # Get the issue summary from Jira
  issue_json=$(jira issue view $jira_key --raw)

  # Extract the summary field using jq (if available) or grep and sed
  if command -v jq &> /dev/null; then
    summary=$(echo $issue_json | jq -r '.fields.summary')
  else
    summary=$(echo $issue_json | grep -o '"summary":"[^"]*"' | sed 's/"summary":"//;s/"//')
  fi

  if [[ "$TITLE_ONLY" = true ]]; then
    echo "$summary"
    exit 0
  fi

  if [[ "$QUIET" = true ]]; then
    echo "[$jira_key] - $summary"
  else
    echo "Issue title: $summary"
    echo "PR title format: [$jira_key] - $summary"
  fi
else
  echo "Error: Branch name does not follow the expected format (feature/OC-XX or bugFix/OC-XX)" >&2
  exit 1
fi
