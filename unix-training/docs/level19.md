# Level 19: Capstone - backup-manager.sh

## Goal
Master getopts for advanced argument parsing in a backup utility.

## Login Information
- Username: level19
- Password: (found in level 18)

## Challenge
Use the `backup-manager.sh` script to complete the final challenge. The script manages dated backups and requires proper use of getopts.

## Script Options
- `-c <source>`: Create a backup from source directory
- `-d <dest>`: Specify backup destination directory (default: /home/level19/backups)
- `-x <date>`: Restore backup from exact date (YYYY-MM-DD format)
- `-l`: List all available dated backups
- `-h`: Show help message

## Example Commands
```bash
# List backups
./backup-manager.sh -l

# Create a backup
./backup-manager.sh -c /home/level19/data -d /home/level19/backups

# Restore from specific date (check -l output for available dates)
./backup-manager.sh -x YYYY-MM-DD -d /home/level19/backups
```

## Solution Approach
```bash
ls
cat backup-manager.sh
# Study the script structure

# List available backups
./backup-manager.sh -l
# This will show the available backup with its date

# Restore the backup (use the date shown in the list)
# The backup is from yesterday's date
./backup-manager.sh -x YYYY-MM-DD  # Replace with the actual date from -l output

# The restored content will show the final message!
```

**Tip**: The exact date format required is YYYY-MM-DD. Use the `-l` flag first to see what backup files exist.

## What You'll Learn
- Using getopts for option parsing
- Creating dated backups with tar
- Restoring backups by date
- Complex argument handling
- Real-world scripting patterns
- Date-based file management

## Congratulations!
You've completed all 20 levels of Unix training! You've learned:
- Basic file operations and navigation
- Text processing and filtering
- Compression and archival
- System inspection
- Bash scripting fundamentals
- Advanced command-line techniques

These skills form the foundation for system administration, DevOps, and software development in Unix/Linux environments.
