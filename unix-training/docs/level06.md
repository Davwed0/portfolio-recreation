# Level 6: Text Basics (grep, head, tail, wc)

## Goal
Search and filter text in large files.

## Login Information
- Username: level6
- Password: (found in level 5)

## Challenge
Find the password for level7 in a large text file.

## Hints
1. Use `wc -l` to count lines in the file
2. Use `grep` to search for patterns
3. Use `head` to see the first lines
4. Use `tail` to see the last lines
5. Look for lines containing "PASSWORD:"

## Commands to Learn
- `grep`: Search for patterns in text
- `head`: Display first lines of a file
- `tail`: Display last lines of a file
- `wc`: Count lines, words, characters

## Solution Approach
```bash
ls
wc -l data.txt
# See it's a large file
grep "PASSWORD:" data.txt
# OR
grep PASSWORD data.txt
```

## What You'll Learn
- Searching files with `grep`
- Using `head` and `tail` for file inspection
- Counting lines with `wc`
- Pattern matching basics
