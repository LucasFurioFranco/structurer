#retrieves and stores in a file the last commit id
FILE_NAME="system_data.js"
NL=''

sdj=''
sdj=$sdj'const sys_data = {'$NL
sdj=$sdj'  "git_commit_id": "'$(git rev-parse --short HEAD)'"'${NL}
sdj=$sdj'};'$NL
sdj=$sdj'module.exports = sys_data;'

echo $sdj > $FILE_NAME
#echo $(git rev-parse --short HEAD) > system_data.js
