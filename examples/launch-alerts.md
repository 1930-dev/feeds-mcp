# Launch alerts to a webhook

Send each new post of an X account to your own endpoint, with no polling code.

## Prompt

```text
Follow @exampleco on X every 15 minutes, and send each new post to https://hooks.example.com/feeds.
Show me the cost first.
```

## What the agent does

1. `estimate_cost` with `cadenceMinutes: 15`.
2. `create_tracker` with a cap.
3. `create_webhook` with the URL. Feeds signs each delivery and retries on failure. [Webhook docs](https://usefeeds.com/docs/webhooks).

The account names above are examples. Use the accounts you want to follow.
