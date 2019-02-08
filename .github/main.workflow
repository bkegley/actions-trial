workflow "Trial Workflow" {
  on = "push"
  resolves = ["log"]
}

action "log" {
  uses = ".github/log"
  secrets = ["DEMO_SECRET"]
}