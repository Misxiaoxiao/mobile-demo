git add *
git commit -am $1
git push
git subtree pull --prefix=src/vuex http://git.zuker.im/components/vuex-client.git master --allow-unrelated-histories