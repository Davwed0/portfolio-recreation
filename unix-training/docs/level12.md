# Level 12: Very Long Compression Chain

## Goal
Unpack a deeply nested compression chain (8+ layers).

## Login Information
- Username: level12
- Password: (found in level 11)

## Challenge
Unpack 8+ nested compression layers to find the password.

## Compression Layers (in reverse order)
1. Hexdump (xxd -r -p)
2. Base64 decode
3. Gunzip
4. 7zip extract
5. Gunzip again
6. Tar extract
7. Bunzip2
8. Gunzip
9. Base64 decode

## Hints
1. Start with `cat data.hex`
2. Use `xxd -r -p` to reverse hexdump
3. Then `base64 -d` to decode
4. Use `file` command frequently to identify format
5. Work in `/tmp` to avoid cluttering home directory

## Commands You'll Need
- `xxd -r -p`: Reverse hexdump
- `base64 -d`: Decode base64
- `gunzip`: Decompress gzip files
- `bunzip2`: Decompress bzip2 files
- `tar -xzf`: Extract tar archives
- `7z x`: Extract 7z archives
- `file`: Identify file types

## Solution Approach
```bash
mkdir /tmp/work12 && cd /tmp/work12
cp ~/data.hex .

# Layer 1: Reverse hexdump
xxd -r -p data.hex > layer1

# Layer 2: Check file type and decode
file layer1
base64 -d layer1 > layer2

# Layer 3: Decompress gzip
file layer2
gunzip -c layer2 > layer3
# OR
mv layer2 layer2.gz && gunzip layer2.gz

# Layer 4: Extract 7z
file layer3
7z x layer3

# Continue checking file type and applying appropriate decompression...
# This is iterative - use `file` after each step!

file layer4.tar.gz
tar -xzf layer4.tar.gz

file layer3.bz2
bunzip2 layer3.bz2

file layer3
gunzip -c layer3 > layer_next
# OR mv layer3 layer3.gz && gunzip layer3.gz

file layer1.b64
base64 -d layer1.b64 > password.txt

cat password.txt
```

## What You'll Learn
- Working with multiple compression formats
- Iterative problem solving
- File type identification
- Compression utilities (gzip, bzip2, 7z, tar)
- Hexdump and base64 encoding
- Patience and systematic debugging!
