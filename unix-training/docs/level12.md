# Level 12: Very Long Compression Chain

## Goal
Unpack a deeply nested compression chain (8 layers).

## Login Information
- Username: level12
- Password: (found in level 11)

## Challenge
Unpack 8 nested compression layers to find the password.

## Compression Layers (in reverse order for unpacking)
1. Hexdump (xxd -r -p)
2. Base64 decode
3. Gunzip
4. Bunzip2
5. Tar extract
6. Bunzip2 again
7. Gunzip again
8. Base64 decode

## Hints
1. Start with `cat data.hex`
2. Use `xxd -r -p` to reverse hexdump
3. Then `base64 -d` to decode
4. Use `file` command frequently to identify format
5. Work in `/tmp` to avoid cluttering home directory

## Commands You'll Need
- `xxd -r -p`: Reverse hexdump
- `base64 -d`: Decode base64
- `gunzip`: Decompress gzip files (or `gzip -d`)
- `bunzip2`: Decompress bzip2 files (or `bzip2 -d`)
- `tar -xzf`: Extract tar archives
- `file`: Identify file types

## Solution Approach
```bash
mkdir /tmp/work12 && cd /tmp/work12
cp ~/data.hex .

# Layer 1: Reverse hexdump
xxd -r -p data.hex > layer7

# Layer 2: Check file type and decode base64
file layer7
base64 -d layer7 > layer6

# Layer 3: Decompress gzip
file layer6
gunzip -c layer6 > layer5
# OR: mv layer6 layer6.gz && gunzip layer6.gz

# Layer 4: Decompress bzip2
file layer5
bunzip2 -c layer5 > layer4
# OR: mv layer5 layer5.bz2 && bunzip2 layer5.bz2

# Layer 5: Extract tar
file layer4
tar -xzf layer4
# This extracts layer3

# Layer 6: Decompress bzip2 again
file layer3
bunzip2 -c layer3 > layer2
# OR: mv layer3 layer3.bz2 && bunzip2 layer3.bz2

# Layer 7: Decompress gzip again
file layer2
gunzip -c layer2 > layer1
# OR: mv layer2 layer2.gz && gunzip layer2.gz

# Layer 8: Decode base64 to get password
file layer1
base64 -d layer1 > password.txt

cat password.txt
```

## What You'll Learn
- Working with multiple compression formats
- Iterative problem solving
- File type identification
- Compression utilities (gzip, bzip2, tar)
- Hexdump and base64 encoding
- Patience and systematic debugging!
