echo "build start ..."
npm run build
echo "finish build"
echo "start git"
git add dist -f
git commit -am $1
echo "git提交注释：$1"
git push origin master
echo "finish"