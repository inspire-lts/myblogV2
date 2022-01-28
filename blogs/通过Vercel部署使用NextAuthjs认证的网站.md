### 1. 白嫖数据库
[Heroku](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1)白嫖教程

### 2. Vercel部署
首先个人代码需要上传到github，然后到[Vercel](https://vercel.com/dashboard)选择自己要部署的仓库。后面是填入环境变量。![Snipaste_2022-01-28_20-07-48.png](https://media.graphcms.com/hYU3wNvcTKavuUvlZxe9)
环境变量中最为重要的是**NEXTAUTH_URL**的值，这个值一般设置为`http://项目名称.vercel.app`,但是有可能这个项目名称不是唯一的，所以最好将项目名称加上自己的Id.![Snipaste_2022-01-28_20-13-17.png](https://media.graphcms.com/5BunJrfTTSJOeWjBKucs)然后再依次填入你自己项目中所用到的环境变量![Snipaste_2022-01-28_20-16-12.png](https://media.graphcms.com/LvcHgi1YSPrug4RdZIgx)，最后点击部署就好了。
注意以Github登录举例，部署的时候重新申请一个[授权APP](https://github.com/settings/developers),环境变量填写这个APP的ID和Secret.回调改写成`${NEXTAUTH_URL}/api/auth/callback/github`
![Snipaste_2022-01-28_20-24-56.png](https://media.graphcms.com/ACRL7QA3TUSHpeBlzDbU)