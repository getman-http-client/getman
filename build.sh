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

git commit -m "Build executed"
git push