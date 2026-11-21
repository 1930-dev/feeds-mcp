# Daily digest of a LinkedIn page

Read what one LinkedIn page posted yesterday, every morning.

## Prompt

```text
Follow https://www.linkedin.com/company/example with a check every 12 hours.
Each morning, list yesterday's posts with one line each and the link.
```

## What the agent does

1. `estimate_cost` with `cadenceMinutes: 720`.
2. `create_tracker` with a cap.
3. Each morning: `get_posts`, then one line per post.

The account names above are examples. Use the accounts you want to follow.
