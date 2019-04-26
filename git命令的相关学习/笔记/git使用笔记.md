
# 添加保存
     git init 初始化git项目文件 在根文件夹下使用， 只需要使用一次 和npm  init 一样
     git status 查看有哪些还没有暂存的文件 红色代表未暂存 绿色表示已经保 存可以上传到远程仓库
     git add XXX（文件名称带后缀） 添加单独一个文件到本地仓库暂存
     gut add . 添加当前所有的文件暂存 .代表当前目录
     git commit -m 'XXX(添加描述信息)'  对暂存的文件添加信息以后好查看  注：add完后要有这个操作 不然不完整

---- 
#分支
    git branch 查询有哪些分支
    默认有一个分支 master
    一般可以把主文件（master1.0）下创建一个分支brach +分支名（相当于克隆了，版本1.1），在分支就可以随意改代码不会影响master下的文件，能同时做开发互不影响，开发完毕后在把文件和主文件(master1.0)合并(merge)成一个文件master1.1

    git checkout 分支名 切换到分支 注：切换前要把所有没保存的文件暂存 

    在哪个分支 branch创建新的分支 创建的分支里的内容就是 哪个分支的内容

----

#合并分支

    从主分支扩展出来的分支可以与主分支合并 用merge 

    merge 分支名称  先切换到master分支 在使用

----

#删除分支

git branch 分支名 -D 

----

#本地代码同步/克隆到远程仓库

    可以自己搭建和免费的 github gitlab
    github是一个网站 可以创建远程仓库 代码可以放在远程仓库里
    先把远程创建好的仓库代码克隆下来clone 
    新创建一个文件夹吧远程仓库代码下载下来，在文件夹里打开命令行
    输入 git clone 仓库地址 （当本地没有远程仓库的代码时候使用这个命令克隆远程代码）
    把自己的代码文件夹放入新创建的文件夹

----

#配置本地
git config 
git config user.name "chenxu"  --global
git config user.email "397290039@qq.com" --global
主要用来添加个人信息让远程仓库别人知道你是谁 加-global是全局配置 这样配置了以后不换电脑的话就不用在配置了

#远程仓库链接

    git remote 查看连接的仓库 

    git remote remove 加仓库名   可以删除与远程连接的仓库
    git remote add 仓库名称（github/gitlab） 仓库地址   添加仓库

    git push 本地同步远程
    git push 仓库名称 分支名称
    git push  github -u master 设置上传到github的master分支下 -u标识默认clone下来的地址
    如果地址不变的话 下次就直接输入git push就可以了
    git push github 分支名   可以提交分支 
    git pull 拉取更新 

    git pull 仓库名称

    git fetch 下载分支
    git fetch 仓库名称 本地 分支名称 保存本地叫什么（建议远程和本地叫同一个） git fetch origin dev:dev


    gitlab 需要自己搭建 一般公司搭建或者自己阿里云买一个 百度云 腾讯云
    http://g.ranyunlong.com/users/sign_in




