# Level 18: Argument Parsing

## Goal
Pass arguments to scripts and understand exit codes.

## Login Information
- Username: level18
- Password: (found in level 17)

## Challenge
Run a script with the correct arguments to get the password.

## Hints
1. The script `unlock.sh` requires arguments
2. Read the script to see what arguments it expects
3. Try: `./unlock.sh unlock sesame`
4. Arguments are accessed as `$1`, `$2`, etc.
5. Exit codes indicate success (0) or failure (non-zero)

## Argument Variables
- `$0`: Script name
- `$1`: First argument
- `$2`: Second argument
- `$#`: Number of arguments
- `$@`: All arguments

## Solution Approach
```bash
ls
cat unlock.sh
# See what arguments it expects

# Try wrong arguments
./unlock.sh wrong args
echo $?  # Shows exit code (1 = failure)

# Try correct arguments
./unlock.sh unlock sesame
echo $?  # Shows exit code (0 = success)
```

## What You'll Learn
- Passing arguments to scripts
- Positional parameters ($1, $2)
- Exit codes and status
- Script argument validation
- Conditional execution based on arguments
