trap "exit" INT TERM ERR
trap "kill 0" EXIT
cd $(dirname "$0")
git pull origin master
npm start &
sleep 1m
open http://localhost:8000
wait
exit;
