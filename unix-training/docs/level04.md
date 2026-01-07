# Level 4: File Types

## Goal
Identify file types using the `file` command.

## Login Information
- Username: level4
- Password: (found in level 3)

## Challenge
Find the password for level5 among multiple files in the `files/` directory.

## Hints
1. Use `file` command to determine file types
2. Use wildcards: `file files/*`
3. Most files contain dummy data, one contains the password
4. You can combine commands with loops

## Solution Approach
```bash
cd files
ls
file *
# Look for the ASCII text file that's different
cat file5
```

## What You'll Learn
- Using the `file` command to identify file types
- Working with multiple files
- Using wildcards (`*`)
- Understanding file contents vs. file names
