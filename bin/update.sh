git add *
git commit -am $1
git push
git subtree pull --squash --prefix=src/vuex http://git.zuker.im/components/vuex-client.git master
git subtree pull --squash --prefix=src/interface http://git.zuker.im/components/interface.git master