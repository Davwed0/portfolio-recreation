# Level 13: Mixed Archive Formats

## Goal
Work with various archive formats.

## Login Information
- Username: level13
- Password: (found in level 12)

## Challenge
Extract the password from a tar.gz archive.

## Hints
1. Use `file` to identify the archive type
2. Use `tar -xzf` for .tar.gz files
3. The archive contains a password.txt file

## Commands to Learn
- `tar`: Archive utility
  - `-x`: Extract
  - `-z`: Use gzip compression
  - `-f`: File name
  - `-v`: Verbose
- `file`: Identify file type

## Solution Approach
```bash
ls
file data.tar.gz
tar -xzf data.tar.gz
cat password.txt
```

## What You'll Learn
- Working with tar archives
- Using tar with compression
- Extracting compressed archives
- Common archive formats in Unix
