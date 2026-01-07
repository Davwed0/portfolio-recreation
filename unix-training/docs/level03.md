# Level 3: Hidden Files

## Goal
Discover hidden files in Unix systems.

## Login Information
- Username: level3
- Password: (found in level 2)

## Challenge
Find the password for level4. It's in a hidden file.

## Hints
1. Files starting with `.` are hidden in Unix
2. Use `ls -a` to show all files including hidden ones
3. Use `ls -la` for more details about files
4. There are decoy files - find the right one

## Solution Approach
```bash
ls
# You won't see the password file!
ls -a
# Now you see .hidden_password
cat .hidden_password
```

## What You'll Learn
- Hidden files in Unix (files starting with `.`)
- Using `ls -a` to show all files
- Using `ls -la` for detailed file information
- Distinguishing between different files
