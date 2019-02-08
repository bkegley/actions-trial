workflow "Trial Workflow" {
  on = "push"
  resolves = ["log"]
}

workflow "Pull Request Workflow" {
  on = "pull_request"
  resolve = ["pr"]
}

action "log" {
  uses = "./.github/log"
  secrets = ["DEMO_SECRET"]
}

action "pr" {
  uses = "./.github/pr"
}