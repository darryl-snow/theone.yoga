trap "exit" INT TERM ERR
trap "kill 0" EXIT
cd $(dirname "$0")
npm install
gatsby develop &
open http://localhost:8000
wait
exit;
