# Level 8: Field Extraction (cut, awk)

## Goal
Extract specific fields from structured data.

## Login Information
- Username: level8
- Password: (found in level 7)

## Challenge
Extract the password from a CSV file.

## Hints
1. The file is CSV format (comma-separated values)
2. Use `cut -d, -f3` to get the 3rd field
3. Or use `awk -F, '{print $3}'`
4. The password is in bob's record (3rd field)
5. Combine with `grep` to find the right line

## Commands to Learn
- `cut`: Extract fields from lines
  - `-d`: Delimiter
  - `-f`: Field number
- `awk`: Pattern scanning and processing
  - `-F`: Field separator

## Solution Approach
```bash
cat data.csv
# See the CSV structure
grep "bob" data.csv | cut -d, -f3
# OR using awk
awk -F, '/bob/ {print $3}' data.csv
```

## What You'll Learn
- Field extraction with `cut`
- Using `awk` for text processing
- Working with CSV data
- Advanced pipeline usage
