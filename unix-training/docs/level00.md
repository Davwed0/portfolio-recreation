# Level 0: SSH Login Basics

## Goal
Learn to connect via SSH and read your first file.

## Login Information
- Host: localhost (or your Docker host IP)
- Port: 2222 (when using docker-compose) or 22 (inside container)
- Username: level0
- Password: level0

## Challenge
Find the password for level1 in your home directory.

## Hints
1. Use `ls` to list files in your current directory
2. Use `cat` to read the contents of a file
3. The file is called `readme`

## Solution Approach
```bash
ssh level0@localhost -p 2222
ls
cat readme
```

## What You'll Learn
- SSH connection basics
- Basic file listing with `ls`
- Reading files with `cat`
- Understanding home directories
