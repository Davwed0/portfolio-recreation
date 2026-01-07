#!/bin/bash

# Setup script for all 20 levels
set -e

# Generate random passwords for each level
declare -A PASSWORDS
for i in $(seq 0 19); do
    PASSWORDS[$i]=$(openssl rand -base64 32 | tr -d "=+/" | cut -c1-20)
done

echo "Setting up Level 0: SSH login basics"
# Level 0 -> Level 1 password stored in readme
mkdir -p /home/level0
echo "${PASSWORDS[1]}" > /home/level0/readme
echo "Welcome to the Unix Training Challenge!" >> /home/level0/readme
echo "The password for level1 is in this file." >> /home/level0/readme
chown level0:level0 /home/level0/readme
chmod 644 /home/level0/readme

echo "Setting up Level 1: cat, less, more, man pages"
# Level 1 -> Level 2: Password in a file called "password file"
mkdir -p /home/level1
echo "${PASSWORDS[2]}" > /home/level1/"password file"
chown level1:level1 /home/level1/"password file"
chmod 644 /home/level1/"password file"

echo "Setting up Level 2: Odd filenames"
# Level 2 -> Level 3: File with dash prefix and spaces
mkdir -p /home/level2
echo "${PASSWORDS[3]}" > /home/level2/"-file with spaces"
chown level2:level2 /home/level2/"-file with spaces"
chmod 644 /home/level2/"-file with spaces"
# Also create a symlink
ln -s /home/level2/"-file with spaces" /home/level2/link_to_password
chown -h level2:level2 /home/level2/link_to_password

echo "Setting up Level 3: Hidden files"
# Level 3 -> Level 4: Hidden file
mkdir -p /home/level3
echo "${PASSWORDS[4]}" > /home/level3/.hidden_password
chown level3:level3 /home/level3/.hidden_password
chmod 644 /home/level3/.hidden_password
# Create some decoy files
echo "not the password" > /home/level3/readme.txt
echo "also not the password" > /home/level3/note.txt
chown level3:level3 /home/level3/readme.txt /home/level3/note.txt

echo "Setting up Level 4: File types"
# Level 4 -> Level 5: Password in binary file among text files
mkdir -p /home/level4/files
for i in {0..9}; do
    echo "dummy data $i" > /home/level4/files/file$i
done
# One file contains the password but has no extension
echo "${PASSWORDS[5]}" > /home/level4/files/file5
chown -R level4:level4 /home/level4
chmod -R 644 /home/level4/files/*

echo "Setting up Level 5: Permissions"
# Level 5 -> Level 6: Multiple files with different permissions
mkdir -p /home/level5/data
echo "dummy1" > /home/level5/data/file1.txt
echo "dummy2" > /home/level5/data/file2.txt
echo "${PASSWORDS[6]}" > /home/level5/data/file3.txt
echo "dummy3" > /home/level5/data/file4.txt
chown level5:level5 /home/level5/data/file1.txt
chown level5:level5 /home/level5/data/file2.txt
chown level5:level5 /home/level5/data/file3.txt
chown root:root /home/level5/data/file4.txt
chmod 644 /home/level5/data/file1.txt
chmod 000 /home/level5/data/file2.txt
chmod 644 /home/level5/data/file3.txt
chmod 600 /home/level5/data/file4.txt
chown level5:level5 /home/level5/data
chmod 755 /home/level5/data

echo "Setting up Level 6: Text basics (grep, head, tail, wc)"
# Level 6 -> Level 7: Password in large file
mkdir -p /home/level6
for i in {1..1000}; do
    echo "Line $i: dummy data dummy data dummy data"
done > /home/level6/data.txt
sed -i "500a PASSWORD: ${PASSWORDS[7]}" /home/level6/data.txt
chown level6:level6 /home/level6/data.txt
chmod 644 /home/level6/data.txt

echo "Setting up Level 7: Pipelines"
# Level 7 -> Level 8: Password in file, need to extract specific line
mkdir -p /home/level7
cat > /home/level7/data.txt << EOF
user1:john:1001:admin
user2:jane:1002:user
user3:password:1003:guest
user4:${PASSWORDS[8]}:1004:user
user5:alice:1005:admin
EOF
chown level7:level7 /home/level7/data.txt
chmod 644 /home/level7/data.txt

echo "Setting up Level 8: Field extraction (cut, awk)"
# Level 8 -> Level 9: CSV-like data
mkdir -p /home/level8
cat > /home/level8/data.csv << EOF
name,email,password,role
john,john@example.com,abc123,admin
jane,jane@example.com,def456,user
bob,bob@example.com,${PASSWORDS[9]},guest
alice,alice@example.com,ghi789,admin
EOF
chown level8:level8 /home/level8/data.csv
chmod 644 /home/level8/data.csv

echo "Setting up Level 9: Advanced pipelines"
# Level 9 -> Level 10: Multiple files, need to combine and filter
mkdir -p /home/level9
echo "error: connection failed" > /home/level9/log1.txt
echo "info: system started" > /home/level9/log2.txt
echo "secret: ${PASSWORDS[10]}" > /home/level9/log3.txt
echo "warning: low memory" > /home/level9/log4.txt
chown level9:level9 /home/level9/*.txt
chmod 644 /home/level9/*.txt

echo "Setting up Level 10: Redirection mastery"
# Level 10 -> Level 11: Password split across stdout and stderr
mkdir -p /home/level10
cat > /home/level10/script.sh << 'EOF'
#!/bin/bash
echo -n "First half: "
echo "second_half_in_stderr" >&2
EOF
echo "#!/bin/bash" > /home/level10/generate.sh
echo "echo '${PASSWORDS[11]}' >&2" >> /home/level10/generate.sh
chmod +x /home/level10/generate.sh /home/level10/script.sh
chown level10:level10 /home/level10/generate.sh /home/level10/script.sh

echo "Setting up Level 11: Base64 decode"
# Level 11 -> Level 12: Base64 encoded password
mkdir -p /home/level11
echo -n "${PASSWORDS[12]}" | base64 > /home/level11/data.txt
chown level11:level11 /home/level11/data.txt
chmod 644 /home/level11/data.txt

echo "Setting up Level 12: Very long compression chain"
# Level 12 -> Level 13: 8+ nested compression layers
mkdir -p /home/level12
cd /home/level12

# Start with password
echo "${PASSWORDS[13]}" > password.txt

# Layer 1: Base64
base64 password.txt > layer1.b64

# Layer 2: gzip
gzip -c layer1.b64 > layer2.gz

# Layer 3: bzip2
bzip2 -c layer2.gz > layer3.bz2

# Layer 4: tar
tar -czf layer4.tar.gz layer3.bz2

# Layer 5: 7z
7z a -y layer5.7z layer4.tar.gz > /dev/null 2>&1

# Layer 6: gzip again
gzip -c layer5.7z > layer6.gz

# Layer 7: base64
base64 layer6.gz > layer7.b64

# Layer 8: hexdump (final layer)
xxd -p layer7.b64 | tr -d '\n' > data.hex

# Cleanup intermediate files
rm -f password.txt layer1.b64 layer2.gz layer3.bz2 layer4.tar.gz layer5.7z layer6.gz layer7.b64

chown level12:level12 /home/level12/data.hex
chmod 644 /home/level12/data.hex
cd /

echo "Setting up Level 13: Mixed archive formats"
# Level 13 -> Level 14: Different archive formats
mkdir -p /home/level13
cd /home/level13
echo "${PASSWORDS[14]}" > password.txt
tar -czf data.tar.gz password.txt
rm password.txt
chown level13:level13 /home/level13/data.tar.gz
chmod 644 /home/level13/data.tar.gz
cd /

echo "Setting up Level 14: System inspection"
# Level 14 -> Level 15: Password in environment variable
mkdir -p /home/level14
cat > /home/level14/.bashrc << EOF
export LEVEL15_PASSWORD="${PASSWORDS[15]}"
export PATH=\$PATH:/usr/local/bin
EOF
chown level14:level14 /home/level14/.bashrc
chmod 644 /home/level14/.bashrc

echo "Setting up Level 15: Cron jobs"
# Level 15 -> Level 16: Script run by cron writes password to file
mkdir -p /home/level15/scripts /home/level15/output
cat > /home/level15/scripts/backup.sh << EOF
#!/bin/bash
echo "${PASSWORDS[16]}" > /home/level15/output/backup.log
date >> /home/level15/output/backup.log
EOF
chmod +x /home/level15/scripts/backup.sh
chown -R level15:level15 /home/level15
chmod 755 /home/level15/output
# Run the script once to create the log
su - level15 -c "/home/level15/scripts/backup.sh"

echo "Setting up Level 16: Loops"
# Level 16 -> Level 17: Password hidden in one of many files
mkdir -p /home/level16/files
for i in {1..50}; do
    echo "dummy data $i" > /home/level16/files/file$i.txt
done
echo "${PASSWORDS[17]}" > /home/level16/files/file23.txt
chown -R level16:level16 /home/level16
chmod -R 644 /home/level16/files/*

echo "Setting up Level 17: Conditionals"
# Level 17 -> Level 18: Script with conditional logic
mkdir -p /home/level17
cat > /home/level17/check.sh << EOF
#!/bin/bash
if [ -f /home/level17/.secret ]; then
    cat /home/level17/.secret
else
    echo "Secret file not found!"
fi
EOF
echo "${PASSWORDS[18]}" > /home/level17/.secret
chmod +x /home/level17/check.sh
chown level17:level17 /home/level17/check.sh /home/level17/.secret
chmod 600 /home/level17/.secret

echo "Setting up Level 18: Argument parsing"
# Level 18 -> Level 19: Script that requires correct arguments
mkdir -p /home/level18
cat > /home/level18/unlock.sh << 'EOF'
#!/bin/bash
if [ "$1" = "unlock" ] && [ "$2" = "sesame" ]; then
    cat /home/level18/.password
else
    echo "Wrong arguments!"
    exit 1
fi
EOF
echo "${PASSWORDS[19]}" > /home/level18/.password
chmod +x /home/level18/unlock.sh
chown level18:level18 /home/level18/unlock.sh /home/level18/.password
chmod 600 /home/level18/.password

echo "Setting up Level 19: Capstone backup-manager.sh"
# Level 19: Final challenge with getopts
mkdir -p /home/level19/data /home/level19/backups
echo "Congratulations! You've completed the training!" > /home/level19/data/message.txt
echo "Final password: ${PASSWORDS[19]}" >> /home/level19/data/message.txt

cat > /home/level19/backup-manager.sh << 'EOF'
#!/bin/bash

usage() {
    echo "Usage: $0 [-c source] [-d dest] [-x date] [-l]"
    echo "  -c <source>  Create backup from source directory"
    echo "  -d <dest>    Backup destination directory"
    echo "  -x <date>    Restore backup from exact date (YYYY-MM-DD)"
    echo "  -l           List all dated backups"
    exit 1
}

list_backups() {
    local dest=${1:-/home/level19/backups}
    echo "Available backups in $dest:"
    ls -lh "$dest" 2>/dev/null | grep "backup-" || echo "No backups found"
}

create_backup() {
    local source=$1
    local dest=$2
    local date=$(date +%Y-%m-%d)
    local backup_name="backup-$date.tar.gz"
    
    if [ ! -d "$source" ]; then
        echo "Error: Source directory $source does not exist"
        exit 1
    fi
    
    mkdir -p "$dest"
    tar -czf "$dest/$backup_name" -C "$source" .
    echo "Backup created: $dest/$backup_name"
}

restore_backup() {
    local date=$1
    local dest=${2:-/home/level19/backups}
    local backup_name="backup-$date.tar.gz"
    
    if [ ! -f "$dest/$backup_name" ]; then
        echo "Error: Backup for date $date not found"
        exit 1
    fi
    
    echo "Restoring from $dest/$backup_name"
    tar -xzf "$dest/$backup_name" -C /tmp/
    cat /tmp/message.txt
}

# Parse options
SOURCE=""
DEST="/home/level19/backups"
DATE=""
LIST=false

while getopts "c:d:x:lh" opt; do
    case $opt in
        c) SOURCE="$OPTARG" ;;
        d) DEST="$OPTARG" ;;
        x) DATE="$OPTARG" ;;
        l) LIST=true ;;
        h) usage ;;
        *) usage ;;
    esac
done

# Execute actions
if $LIST; then
    list_backups "$DEST"
elif [ -n "$DATE" ]; then
    restore_backup "$DATE" "$DEST"
elif [ -n "$SOURCE" ]; then
    create_backup "$SOURCE" "$DEST"
else
    usage
fi
EOF

chmod +x /home/level19/backup-manager.sh
chown -R level19:level19 /home/level19
chmod 755 /home/level19/backups

# Create a dated backup for the restore exercise
# Using yesterday's date to ensure the backup exists when the user attempts the challenge
BACKUP_DATE=$(date -d "yesterday" +%Y-%m-%d 2>/dev/null || date -v-1d +%Y-%m-%d 2>/dev/null || echo "2026-01-06")
cd /home/level19
tar -czf /home/level19/backups/backup-${BACKUP_DATE}.tar.gz -C /home/level19/data .
cd /

echo "All levels configured successfully!"
echo "Password list for verification:"
for i in $(seq 0 18); do
    echo "Level $i -> Level $((i+1)): ${PASSWORDS[$i]}"
done > /tmp/passwords.txt
echo "Level 19 (Final): ${PASSWORDS[19]}" >> /tmp/passwords.txt
chmod 600 /tmp/passwords.txt
