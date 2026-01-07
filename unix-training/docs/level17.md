# Level 17: Conditionals

## Goal
Use conditional statements in bash scripts.

## Login Information
- Username: level17
- Password: (found in level 16)

## Challenge
Execute a script that uses conditional logic to reveal the password.

## Hints
1. There's a script called `check.sh`
2. Read the script to understand what it does
3. It checks if a file exists before displaying content
4. The `.secret` file contains the password

## Conditional Syntax
```bash
if [ condition ]; then
    # commands
elif [ other_condition ]; then
    # commands
else
    # commands
fi
```

## Solution Approach
```bash
ls -la
cat check.sh
# See what the script does

# Run the script
./check.sh

# Or directly access the secret
cat .secret
```

## What You'll Learn
- If-then-else statements in bash
- File test conditions (`-f`, `-d`, `-e`)
- Script execution
- Reading and understanding bash scripts
- Conditional logic flow
