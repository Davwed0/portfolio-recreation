# Level 14: System Inspection

## Goal
Inspect system processes and environment variables.

## Login Information
- Username: level14
- Password: (found in level 13)

## Challenge
Find the password in the environment variables.

## Hints
1. Environment variables are stored in the shell
2. Use `env` or `printenv` to list all environment variables
3. Use `grep` to filter for the password
4. The variable name contains "LEVEL15"
5. Or use `echo $VARIABLE_NAME`

## Commands to Learn
- `env`: Display environment variables
- `printenv`: Print environment variables
- `export`: Set environment variables
- `ps aux`: List running processes
- `echo $VAR`: Print variable value

## Solution Approach
```bash
# List all environment variables
env
# OR
printenv

# Search for the password
env | grep LEVEL15
# OR
printenv | grep LEVEL15

# Or directly access it
echo $LEVEL15_PASSWORD
```

## What You'll Learn
- Understanding environment variables
- Using `env` and `printenv`
- Inspecting system state
- Process inspection with `ps`
- Shell variable access
