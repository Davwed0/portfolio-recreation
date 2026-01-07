# Level 7: Pipelines

## Goal
Learn to chain commands together with pipes.

## Login Information
- Username: level7
- Password: (found in level 6)

## Challenge
Extract the password from a colon-delimited data file.

## Hints
1. The file contains user records with format: `user:name:id:role`
2. Use `grep` to find the line you need
3. User4 has the password in the second field
4. Pipe (`|`) connects command output to input
5. The password is in user4's record

## Solution Approach
```bash
cat data.txt
# See the format
grep "user4" data.txt
# OR use cut to extract specific field
grep "user4" data.txt | cut -d: -f3
```

## What You'll Learn
- Using pipes (`|`) to chain commands
- Combining `grep` with other commands
- Basic field extraction
- Processing structured text data
