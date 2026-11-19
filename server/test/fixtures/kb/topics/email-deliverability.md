# Email sending, deliverability and DND

## Recurring issues and proven fixes

### "My emails are going to spam"
- Root causes: the dedicated domain was not fully verified (DNS/DMARC missing), the domain was new and not warmed up.
- Fix:
  1. Check Settings > Email Services > Dedicated Domain and IP and confirm every record shows Verified. Add DMARC if it is missing.
  2. If the records are verified, explain warm-up and send in batches that grow over time.
- Escalate: yes, when the domain is verified and spam continues (developer ticket).

### "How do I change the sender name / from email?"
- Fix: Settings > Business Profile > General, then update the sender name and from email for campaigns.
