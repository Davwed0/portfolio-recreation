# Quick Start Guide - Unix Training

## Step 1: Build and Run

```bash
cd unix-training
docker-compose up -d
```

This will:
- Build the Docker image (first time only)
- Start the container with SSH on port 2222
- Set up all 20 levels automatically

## Step 2: Connect to Level 0

```bash
ssh level0@localhost -p 2222
```

When prompted for password, enter: `level0`

## Step 3: Complete Level 0

Once logged in:

```bash
ls                   # List files
cat readme           # Read the readme file
```

The readme contains the password for level1!

## Step 4: Continue to Next Levels

Exit and login to the next level:

```bash
exit
ssh level1@localhost -p 2222
# Use the password you found in level0
```

## Getting Help

### View Documentation
Inside any level, you can read the documentation:

```bash
cat /home/docs/level00.md    # Level 0 documentation
cat /home/docs/level01.md    # Level 1 documentation
# etc...
```

### Man Pages
Use man pages to learn about commands:

```bash
man ls
man cat
man grep
man awk
# Press 'q' to quit man pages
```

### Get Stuck?
If you get stuck, the documentation for each level includes:
- Goal and objective
- Hints
- Commands to learn
- Solution approach

## Useful Commands

### List all users
```bash
cat /etc/passwd | grep level
```

### Check which level you're on
```bash
whoami
```

### Work in /tmp for file operations
```bash
mkdir /tmp/mylevel
cd /tmp/mylevel
# Do your work here
```

## Container Management

### Stop the training
```bash
docker-compose down
```

### View container logs
```bash
docker-compose logs
```

### Restart (generates new passwords)
```bash
docker-compose restart
```

### Rebuild from scratch
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Troubleshooting

### Can't connect via SSH
```bash
# Check if container is running
docker ps

# Check SSH service status
docker exec unix-training service ssh status
```

### Port already in use
Edit `docker-compose.yml` and change port 2222 to another port:
```yaml
ports:
  - "3333:22"  # Use port 3333 instead
```

Then connect with: `ssh level0@localhost -p 3333`

### Forgot password
```bash
# View all passwords
docker exec unix-training cat /tmp/passwords.txt
```

## Tips for Success

1. **Take notes**: Keep track of passwords and techniques
2. **Read documentation**: Each level has detailed docs
3. **Use man pages**: They're your best friend
4. **Experiment**: The environment is safe to play in
5. **Work in /tmp**: Avoid cluttering home directories
6. **Google is allowed**: Real admins look things up!

## Level Progression

```
Level 0  → SSH basics, cat
Level 1  → File viewing, man pages
Level 2  → Odd filenames
Level 3  → Hidden files
Level 4  → File types
Level 5  → Permissions
Level 6  → Text search
Level 7  → Pipelines
Level 8  → Field extraction
Level 9  → Advanced pipelines
Level 10 → Redirection
Level 11 → Base64
Level 12 → Compression chain (challenging!)
Level 13 → Archives
Level 14 → System inspection
Level 15 → Cron jobs
Level 16 → Loops
Level 17 → Conditionals
Level 18 → Arguments
Level 19 → Capstone backup tool
```

## Happy Learning! 🚀

Good luck with your Unix training journey!
