#!/bin/sh

git pull --rebase

npm run build
npm run "test"

echo ""
node ./bin/version.js
echo ""

read -p "New Version [major|minor|patch]: " version
npm version $version

npm publish

git push --follow-tags
