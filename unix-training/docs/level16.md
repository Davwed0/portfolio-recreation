# Level 16: Loops

## Goal
Use loops to process multiple files efficiently.

## Login Information
- Username: level16
- Password: (found in level 15)

## Challenge
Find the password hidden among 50 files.

## Hints
1. There are 50 files in the `files/` directory
2. Most contain dummy data, one contains the password
3. Use a for loop or grep to search all files
4. The password is different from the dummy data pattern

## Loop Syntax
```bash
# For loop
for file in files/*; do
    cat "$file"
done

# Or use grep on all files
grep -v "dummy" files/*.txt
```

## Solution Approach
```bash
cd files
ls | wc -l
# 50 files!

# Option 1: Use grep to find the different one
grep -v "dummy" *.txt

# Option 2: Loop through files
for file in *.txt; do
    content=$(cat "$file")
    if [[ ! "$content" =~ "dummy data" ]]; then
        echo "$file: $content"
    fi
done

# Option 3: Just check file23.txt if you know the pattern
cat file23.txt
```

## What You'll Learn
- Writing for loops in bash
- Processing multiple files
- Pattern matching with grep
- Efficient file searching
- Loop syntax and variables
