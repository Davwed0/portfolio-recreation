# Level 5: Permissions

## Goal
Understand Unix file permissions and ownership.

## Login Information
- Username: level5
- Password: (found in level 4)

## Challenge
Find the password for level6 among files with different permissions.

## Hints
1. Use `ls -la` to see file permissions
2. Look in the `data/` directory
3. Check file permissions: `r` (read), `w` (write), `x` (execute)
4. Permission format: `rwxrwxrwx` (user, group, others)
5. Some files may not be readable due to permissions

## Permission Notation
- `r` (4): Read permission
- `w` (2): Write permission
- `x` (1): Execute permission
- `-`: No permission

Example: `rw-r--r--` means:
- User: read, write
- Group: read
- Others: read

## Solution Approach
```bash
cd data
ls -la
# You'll see files with different permissions
# file1.txt: 644 (readable)
# file2.txt: 000 (not readable)
# file3.txt: 644 (readable - contains password!)
# file4.txt: 600 (owned by root, not readable by you)

cat file1.txt  # Works - dummy data
cat file2.txt  # Permission denied
cat file3.txt  # Works - password!
cat file4.txt  # Permission denied
```

## What You'll Learn
- File permissions in Unix (rwx)
- File ownership (user and group)
- Using `ls -la` to see detailed file information
- Understanding permission restrictions
- How permissions affect file access
