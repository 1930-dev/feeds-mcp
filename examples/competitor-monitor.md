# Competitor monitor

Follow the LinkedIn pages and X accounts of three competitors, and summarize what they posted each week.

## Prompt

```text
Follow the LinkedIn company pages of example-one and example-two, and the X account @exampleco.
Check LinkedIn once a day and X every hour. First tell me what that costs a month.
Every Monday, read the new posts and give me five bullets: launches, pricing changes, hires, and anything else that matters.
```

## What the agent does

1. `estimate_cost` for each account. The agent shows the monthly credits and waits for a yes.
2. `create_tracker` for each account, with `monthlyBudgetCredits` as a cap.
3. Each Monday: `get_posts` for each tracker since the last cursor, then a summary.

The account names above are examples. Use the accounts you want to follow.
