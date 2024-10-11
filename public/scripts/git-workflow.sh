# Function to ask for confirmation
confirm() {
    while true; do
        # -p is a command that prints the string and does not output a newline
        # $1 is a command that prints the first argument
        # (Y/N): is a string that prompts the user to enter Y or N
        read -p "$1 (Y/N): " reply
        case $reply in
            # * is a wildcard that matches any character
            # * ) is a delimiter that separates the pattern from the command
            # [Yy]* ) is a pattern that matches any character (0 or more) and the letter Y or y
            # return 0 is a command that returns 0 which means success
            # return 1 is a command that returns 1 which means failure
            [Yy]* ) return 0;;
            [Nn]* ) return 1;;
            * ) echo "Please answer Y or N.";;
        # esac is a command that executes the command after the case that matches the pattern
        esac
    done
}

# Git add
git add .

# Show status and confirm
git status
if ! confirm "Do you wish to continue with commit?"; 
then
    echo "Operation cancelled."
    exit 0
#  fi ends the if statement
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