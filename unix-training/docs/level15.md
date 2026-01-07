# Level 15: Cron Jobs

## Goal
Understand cron jobs and scheduled tasks.

## Login Information
- Username: level15
- Password: (found in level 14)

## Challenge
Find the password by examining cron job output.

## Hints
1. Check the `scripts/` directory for scripts
2. Look in the `output/` directory for logs
3. Cron jobs often write to log files
4. The backup script has already run and created output

## Commands to Learn
- `crontab -l`: List cron jobs for current user
- `crontab -e`: Edit cron jobs
- Understanding cron job output locations

## Solution Approach
```bash
ls
ls scripts/
ls output/
cat output/backup.log
# OR
cat scripts/backup.sh
# The script shows what it does
```

## What You'll Learn
- Understanding cron jobs
- Tracing script execution
- Finding script output
- Reading shell scripts
- Log file locations
