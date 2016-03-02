# 目录结构

```php
./
├── package.json
├── gulpfile.js
├── gulp
└── app

    ./app/
    ├── _common  //通用的css和js-ui  
    |   ├── css  
    |   └── js  
    ├── _widget  //页面通用组件  
    |   ├── header
    |   |   ├── header.jade
    |   |   ├── header.scss
    |   |   ├── header.js
    |   |   └── images
    |   ├── footer
    ├── _layout  //页面结构  
    |   ├── default.jade
    
    ├── products  
    |   ├── index.jade  
    |   ├── products.scss
    |   └── images
    ├── campaign  
    └── index.jade
```

# 配置说明

## gulp配置

1. ./gulpfile.js  
    只有default Task，并且调取所有'./gulp/tasks'下的任务文件

2. gulp 目录下存放所有的task及配置文件  
    `./gulp/config.js` 各种路径的配置文件  
    `./gulp/tasks`  具体的各种任务

## 工程目录配置 ./app/

# 启动

```bash
gulp --build
gulp --release
```
