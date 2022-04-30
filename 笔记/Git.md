# Git

## 查看版本、版本回退 

git reflog 查看版本

git reset --hard HEAD^ 回退上一次版本

git reset --hard xxxxxxx 回退到某一版本

## 分支

git checkout -b dev   创建切换到dev

git branch 查看当前分支

git checkout master 切换到master分支

git merge test 把test分支内容合并到master分支

git branch -d dev 删除指定分支

## 合并冲突

手动删去对应生成的代码 比如：》》》》》HEAD  

然后 add commit

## 建立仓库

git init

git add .

git commit -m 'first'

git remote add origin 地址( https/ssh ) 建议https

git push -u origin master (第一次推加-u 以后不用)

## 拉取代码

git pull origin master

## 克隆仓库

git clone 地址 克隆下来的文件夹有.git存在，直接关联了远程仓库，下次可以直接拉取。

下载ZIP文件 没有.git文件 下次不能直接拉取

## .gitignore

git忽略文件：

.idea 忽略webstorm相关文件

*.jpg 所有被忽略的jpg文件

.vs_code 忽略vscode相关文件

## 合作

### 预备工作

```
git init

git remote add origin https://gitee.com/code2497/vtm-new-2021.git

git pull origin master
```



### 自己写代码后

```
git branch  // 查看当前分支
git checkout (-b) user // 创建/切换到user分支
git status // 查看代码状态
git add . // 添加全部到暂存区
git status // 查看代码状态是不是添加了
git commit -m "完成了某某功能" // 提交代码到user分支
git status // 查看代码状态是不是提交
git branch // 查看当前分支
git push -u origin user // 将本地分支推送到云端的user分支 -u表示指定这个主机
git checkout develop // 切换到develop分支
git branch // 查看当前分支
git merge user // 在本地合并user代码到当前分支
git push // 将本地的代码推送云端进行保存，因为云端已经有这个分支所以直接 push
```

