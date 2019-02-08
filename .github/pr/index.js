const workflow = process.env.GITHUB_WORKFLOW;
const action = process.env.GITHUB_ACTION;
const actor = process.env.GITHUB_ACTOR;
const repo = process.env.GITHUB_REPOSITORY;
const eventName = process.env.GITHUB_EVENT_NAME;
const eventPath = process.env.GITHUB_EVENT_PATH;
const workspace = process.env.GITHUB_WORKSPACE;
const sha = process.env.GITHUB_SHA;
const ref = process.env.GITHUB_REF;
const token = process.env.GITHUB_TOKEN;

console.log({
  workflow,
  action,
  actor,
  repo,
  eventName,
  eventPath,
  workspace,
  sha,
  ref,
  token
});

const file = require(eventPath);

console.log({ file });
