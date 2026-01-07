# Level 1: cat, less, more, and Man Pages

## Goal
Learn to view file contents and use the manual pages.

## Login Information
- Username: level1
- Password: (found in level 0)

## Challenge
Find the password for level2. The file has spaces in its name.

## Hints
1. Use `ls` to see the filename
2. Files with spaces need quotes: `cat "file name"`
3. Try `man cat` to learn more about the `cat` command
4. Other useful commands: `less`, `more`

## Commands to Learn
- `cat`: Concatenate and print files
- `less`: View file contents with pagination
- `more`: Another file viewer
- `man`: Display manual pages

## Solution Approach
```bash
ls
man cat
cat "password file"
# OR
less "password file"
```

## What You'll Learn
- Using man pages for help
- Handling filenames with spaces
- Different ways to view file contents
- The difference between `cat`, `less`, and `more`
