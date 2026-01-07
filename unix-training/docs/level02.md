# Level 2: Odd Filenames

## Goal
Handle files with special characters in their names.

## Login Information
- Username: level2
- Password: (found in level 1)

## Challenge
Find the password for level3. The file starts with a dash (-) and contains spaces.

## Hints
1. Files starting with `-` are tricky because they look like command options
2. Use `./` prefix: `cat ./-filename`
3. Or use `--` to end options: `cat -- -filename`
4. Notice there's also a symlink - both point to the same content

## Problematic Filenames
- Files starting with `-` (dash)
- Files with spaces
- Symbolic links

## Solution Approach
```bash
ls -la
cat ./-"file with spaces"
# OR
cat -- "-file with spaces"
# OR follow the symlink
cat link_to_password
```

## What You'll Learn
- Handling files with dashes in names
- Using `./ ` or `--` to disambiguate
- Working with symbolic links
- Advanced `cat` usage
