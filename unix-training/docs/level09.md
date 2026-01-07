# Level 9: Advanced Pipelines

## Goal
Master complex command pipelines with multiple files.

## Login Information
- Username: level9
- Password: (found in level 8)

## Challenge
Find the password hidden in multiple log files.

## Hints
1. Multiple log files are in the directory
2. Use `cat *.txt` to view all files
3. Pipe to `grep` to filter for "secret:"
4. Or use `grep "secret:" *.txt`
5. Extract just the password part

## Solution Approach
```bash
ls
cat *.txt
# See all log contents
grep "secret:" *.txt
# OR
cat *.txt | grep "secret:"
# Then extract the password
grep "secret:" log3.txt | cut -d: -f2 | tr -d ' '
```

## What You'll Learn
- Working with multiple files simultaneously
- Using wildcards with commands
- Complex pipeline construction
- Text processing with `tr`
- Combining multiple filters
