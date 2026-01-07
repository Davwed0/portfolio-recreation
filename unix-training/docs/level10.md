# Level 10: Redirection Mastery

## Goal
Master stdin, stdout, and stderr redirection.

## Login Information
- Username: level10
- Password: (found in level 9)

## Challenge
Capture output from both stdout and stderr to find the password.

## Hints
1. There's a script called `generate.sh`
2. Run it: `./generate.sh`
3. The output goes to stderr (file descriptor 2)
4. Redirect stderr to stdout: `2>&1`
5. Or capture stderr: `2> file.txt`

## Redirection Operators
- `>`: Redirect stdout to file
- `>>`: Append stdout to file
- `2>`: Redirect stderr to file
- `2>&1`: Redirect stderr to stdout
- `&>`: Redirect both stdout and stderr

## Solution Approach
```bash
ls
./generate.sh
# Password appears on stderr
./generate.sh 2>&1
# OR capture it
./generate.sh 2>&1 | cat
```

## What You'll Learn
- Understanding stdout vs stderr
- Redirecting output streams
- Capturing error messages
- Using file descriptors
- Complex redirections
