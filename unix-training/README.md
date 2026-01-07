# Unix Training - Bandit-style SSH Challenge

A Docker-based Unix/Linux training environment featuring 20 progressive levels designed to teach command-line fundamentals through hands-on challenges. Similar to the popular Bandit wargame, each level requires solving a puzzle to obtain the password for the next level.

## 🎯 Overview

This training system provides a safe, isolated environment to learn:
- Basic file operations and navigation
- Text processing and filtering
- File permissions and ownership
- Compression and archival tools
- System inspection and monitoring
- Bash scripting fundamentals
- Advanced command-line techniques

## 🏗️ Architecture

- **Single Linux container** running Ubuntu 22.04
- **SSH access** on port 22 (or custom port)
- **20 user accounts** (level0 through level19)
- **Progressive difficulty** from basic commands to complex scripts
- **No networking challenges** - focus on filesystem and local tools

## 📋 Level Overview

| Level | Topic | Key Concepts |
|-------|-------|--------------|
| 0 | SSH Login | Basic connection, file reading |
| 1 | File Viewing | cat, less, more, man pages |
| 2 | Odd Filenames | Spaces, dashes, symlinks |
| 3 | Hidden Files | ls -a, dotfiles |
| 4 | File Types | file command, type detection |
| 5 | Permissions | ls -la, chmod, ownership |
| 6 | Text Basics | grep, head, tail, wc |
| 7 | Pipelines | Command chaining with \| |
| 8 | Field Extraction | cut, awk |
| 9 | Advanced Pipelines | Multiple files, complex chains |
| 10 | Redirection | stdout, stderr, file descriptors |
| 11 | Base64 | Encoding/decoding |
| 12 | Compression Chain | 8+ nested layers (gzip, bzip2, tar, 7z, etc.) |
| 13 | Archive Formats | tar, unrar, 7z |
| 14 | System Inspection | ps, env, environment variables |
| 15 | Cron Jobs | Scheduled tasks, log files |
| 16 | Loops | Bash for loops, iteration |
| 17 | Conditionals | if-then-else logic |
| 18 | Argument Parsing | Positional parameters, exit codes |
| 19 | **Capstone** | backup-manager.sh with getopts |

## 🚀 Quick Start

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)
- SSH client

### Option 1: Using Docker Compose (Recommended)

```bash
cd unix-training
docker-compose up -d
```

### Option 2: Using Docker directly

```bash
cd unix-training
docker build -t unix-training .
docker run -d -p 2222:22 --name unix-training-container unix-training
```

## 🔐 Access the Training Environment

### Connect to Level 0

```bash
# If using docker-compose (port 2222)
ssh level0@localhost -p 2222

# If using custom port mapping
ssh level0@localhost -p YOUR_PORT

# Initial password: level0
```

### Progress Through Levels

Each level's home directory contains files with clues to find the next password:

```bash
# Example: Level 0
ssh level0@localhost -p 2222
Password: level0

# Find the password for level1
cat readme

# Use that password to login as level1
exit
ssh level1@localhost -p 2222
```

## 📚 Documentation

Complete documentation for each level is available in the `docs/` directory:
- `level00.md` through `level19.md`
- Each file contains:
  - Goal and objective
  - Login information
  - Hints and commands to learn
  - Solution approach
  - Learning outcomes

Access docs inside the container:
```bash
ls /home/docs/
cat /home/docs/level00.md
```

Or view them directly in the `docs/` directory of this repository.

## 🎓 Learning Path

### Beginner (Levels 0-6)
- Basic file operations
- Understanding the filesystem
- Simple text processing
- File permissions

### Intermediate (Levels 7-13)
- Command pipelines
- Text manipulation
- Compression and archives
- Complex file operations

### Advanced (Levels 14-19)
- System inspection
- Bash scripting
- Control structures
- Real-world automation

## 💡 Tips for Success

1. **Read the documentation**: Each level has detailed docs in `/home/docs/`
2. **Use man pages**: `man <command>` is your friend
3. **Experiment safely**: Everything resets on container restart
4. **Take notes**: Track passwords and techniques you learn
5. **Google is allowed**: Real system administration involves research
6. **Work in /tmp**: For file manipulations, use temporary directories

## 🔧 Maintenance

### Restart the container
```bash
docker-compose restart
# OR
docker restart unix-training-container
```

### View logs
```bash
docker-compose logs
# OR
docker logs unix-training-container
```

### Stop and remove
```bash
docker-compose down
# OR
docker stop unix-training-container
docker rm unix-training-container
```

### Rebuild after changes
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 🐛 Troubleshooting

### Can't connect via SSH
- Ensure container is running: `docker ps`
- Check port mapping: `docker port unix-training-container`
- Verify SSH service: `docker exec unix-training-container service ssh status`

### Forgot a password
- Passwords are stored in `/tmp/passwords.txt` inside the container
- Access: `docker exec -it unix-training-container cat /tmp/passwords.txt`
- Or restart the container for new random passwords

### Container won't start
- Check logs: `docker logs unix-training-container`
- Verify port 2222 isn't in use: `lsof -i :2222`
- Try a different port in docker-compose.yml

## 🤝 Contributing

This is an educational project. Suggestions for new levels or improvements are welcome!

## 📝 License

This project is for educational purposes. Feel free to use and modify for your own learning or teaching.

## 🙏 Credits

Inspired by the [Bandit](https://overthewire.org/wargames/bandit/) wargame from OverTheWire.

## ⚠️ Security Note

This container runs SSH with password authentication for educational purposes. Do not expose it directly to the internet. Use it only in isolated, trusted networks or locally.
