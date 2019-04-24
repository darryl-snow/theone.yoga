cd $(dirname "$0")
npm run build
git add .
git commit -m "update"
git push origin master
exit;
