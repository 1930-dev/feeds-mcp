# Feeds MCP server

New posts from any X (Twitter) account or LinkedIn profile or company page, for your AI agent.

[Feeds](https://usefeeds.com) is a hosted [Model Context Protocol](https://modelcontextprotocol.io) server. Your agent tells Feeds which accounts to follow, and reads each new post once. Feeds runs the checks, so there is no scraper to run, no browser, no proxy, and no LinkedIn login to put at risk.

```text
https://usefeeds.com/mcp        # full server: OAuth or an API key
https://usefeeds.com/mcp/try    # no account: estimate_cost and preview_posts
```

[![Add to Cursor](https://img.shields.io/badge/Add_to-Cursor-000?logo=cursor)](https://cursor.com/en/install-mcp?name=feeds&config=eyJ1cmwiOiAiaHR0cHM6Ly91c2VmZWVkcy5jb20vbWNwIn0%3D) [![Add to VS Code](https://img.shields.io/badge/Add_to-VS_Code-0078d4?logo=visualstudiocode)](https://insiders.vscode.dev/redirect/mcp/install?name=feeds&config=%7B%22type%22%3A%20%22http%22%2C%20%22url%22%3A%20%22https%3A//usefeeds.com/mcp%22%7D)

## What your agent can do

| Tool | What it does | Credits |
|---|---|---|
| `estimate_cost` | Monthly cost of following an account | Free |
| `create_tracker` | Follow an account, with a monthly cap | Setup + each check |
| `get_posts` | Read the new posts of a tracker | Free |
| `query_account` | Read the latest posts of an account once | Per call |
| `create_webhook` | Send each new post to a URL | Free |
| `list_trackers`, `update_tracker`, `delete_tracker`, `get_account`, `list_webhooks` | Manage trackers and read the balance | Free |

Every tool has a title and a `readOnlyHint` or `destructiveHint` annotation. Post text comes back in a field marked as untrusted, so an agent does not follow instructions found in a post.

New accounts get 1,000 free credits, no card. [Pricing](https://usefeeds.com/pricing).

## Connect

**Claude.ai, Claude Desktop, ChatGPT.** Add a custom connector with the URL `https://usefeeds.com/mcp` and sign in. You choose what the assistant can do, and you can disconnect it in the console.

**Claude Code**

```bash
claude mcp add --transport http feeds https://usefeeds.com/mcp
```

Or install the plugin, which adds the server and a skill that teaches the agent to check costs first:

```text
/plugin marketplace add 1930-dev/feeds-mcp
/plugin install feeds@feeds
```

**Cursor, VS Code.** Use the buttons above, or add this to the MCP configuration:

```json
{ "mcpServers": { "feeds": { "type": "http", "url": "https://usefeeds.com/mcp" } } }
```

**Developer tools that send a header.** Create an [API key](https://app.usefeeds.com/keys) and send `Authorization: Bearer fm_live_…`.

**Try it first.** Connect `https://usefeeds.com/mcp/try`. It needs no account.

## Examples

- [Competitor monitor](examples/competitor-monitor.md)
- [Daily digest of a LinkedIn page](examples/daily-digest.md)
- [Launch alerts to a webhook](examples/launch-alerts.md)

## Skill

[`skills/feeds/SKILL.md`](skills/feeds/SKILL.md) teaches an agent to estimate the cost, ask the user, and set a cap before it follows an account. The current copy is always at <https://usefeeds.com/.well-known/agent-skills/feeds/SKILL.md>.

## About

Feeds is an independent service. It is not affiliated with or endorsed by X Corp. or LinkedIn Corporation. Docs: <https://usefeeds.com/docs/mcp>. Contact: hello@usefeeds.com.

This repository holds configuration, the plugin, the skill, and examples. The server is hosted at usefeeds.com.
