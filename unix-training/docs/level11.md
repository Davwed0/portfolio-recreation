# Level 11: Base64 Decode

## Goal
Learn to decode base64 encoded data.

## Login Information
- Username: level11
- Password: (found in level 10)

## Challenge
Decode the base64 encoded password.

## Hints
1. The file `data.txt` contains base64 encoded text
2. Use `base64 -d` to decode
3. You can pipe the file contents: `cat data.txt | base64 -d`

## Commands to Learn
- `base64`: Encode/decode base64 data
  - `-d`: Decode mode
  - `-e`: Encode mode (default)

## Solution Approach
```bash
cat data.txt
# See the encoded data
base64 -d data.txt
# OR
cat data.txt | base64 -d
```

## What You'll Learn
- Understanding base64 encoding
- Using `base64` command
- Encoding vs decoding
- Common data encoding schemes
