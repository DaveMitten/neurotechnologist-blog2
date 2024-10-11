#!/bin/bash

# Function to ask for confirmation
confirm() {
    while true; do
        read -p "$1 (Y/N): " reply
        case $reply in
            [Yy]* ) return 0;;
            [Nn]* ) return 1;;
            * ) echo "Please answer Y or N.";;
        esac
    done
}

# Git add
git add .

# Show status and confirm
git status
if ! confirm "Do you wish to continue with commit?"; then
    echo "Operation cancelled."
    exit 0
fi

# Run git-cz
git-cz

# Show status again
git status

# Confirm push
if confirm "Do you wish to push the changes?"; then
    git push
    echo "Push completed."
    git status
else
    echo "Push cancelled."
fi

echo "Workflow completed."