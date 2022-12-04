LICENSE_DIR=./.license
if [ ! -d "$LICENSE_DIR" ]; then
    mkdir .license
fi

README_FILE=./README.md
if test -f "$README_FILE"; then
    mv README.md ./.license
fi
LICENSE_FILE=./LICENSE
if test -f "$LICENSE_FILE"; then
    mv LICENSE ./.license
fi

rm -rf *.js
rm -rf *.ico
rm -rf *.txt
rm -rf *.html
rm -rf *.css
rm -rf ./assets

# Check if changes must be commited

must_commit=$1

if [ "$must_commit" = "y" ]; then
    sh ./commit-changes.sh "Old build removed"
fi;
