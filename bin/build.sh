echo "build start ..."
npm run build
git add .
git commit -m $1
echo "git提交注释：$1"
git push origin master
echo "finish"