var SUPERMAN_CONFIG = {
    deploy: {
        receiver: "http://db-rdqa-pool204.db01.baidu.com:8000/receiver.php",
        root: '/home/map/odp/'
    }
};

fis.config.merge({
    namespace: 'haapoo',

    // 插件配置
    modules: {
        // 自动css sprites插件
        spriter: 'csssprites',
        // inline插件
        preprocessor: {
            tpl: 'inline, extlang'
        },
        lint: {
            js: 'jshint'
        },
        postpackager : 'ext-map'
    },

    settings: {
        // smarty 左右界定符配置
        smarty: {
            left_delimiter: '{%',
            right_delimiter: '%}'
        },
        // 自动cssspriter 插件
        // @wiki: https://github.com/xiangshouding/fis-spriter-csssprites
        spriter: {
            csssprites: {
                margin: 30
            }
        },
        lint: {
            jshint: {
                curly: true,
                eqeqeq: true,
                forin: false,
                latedef: "nofunc",
                newcap: true,
                noarg: true,
                nonew: true,
                undef: true,
                unused: true,
                trailing: true,
                maxparams: 4,
                maxdepth: 4,
                maxlen: 100,
                maxstatements: 25,
                freeze: true,
                strict: false,

                boss: true,
                expr: true,
                laxcomma: true,
                laxbreak: true,
                sub: true,
                lastsemic: true,
                eqnull: true,
                multistr: true,

                browser: true,
                jquery: true,
                node: true,
                maxerr :10,

                ignored: [
                    'static/js/gmu/**.js',
                    'static/lib/**.js',
                    'static/js/libs/**.js',
                    'static/js/pdc/**.js',
                    'static/js/iscroll.js',
                    'widget/api/**.js',
                    /\.tmpl$/i
                ],
                globals: {
                    "require": false,
                    "define": false,
                    "listener": false,
                    "__inline": false,
                    "gmu": false,
                    "BMap": false,
                    "STAT_CODE": false,
                    "_APP_HASH": false,
                    "COM_STAT_CODE": false,
                    "appPage": false,
                    "SDC": false,
                    "PDC": false,
                    "MY_GEO": false,
                    "BigPipe": false
                }
            }
        }
    },

    // 采用百度的前端模板
    // 语法文档: http://baidufe.github.io/BaiduTemplate/
    tmpl: 'bdtmpl',

    // 部署配置
    deploy: {
        //使用fis release --dest project 来使用这个配置
        project : [
            {
                //如果配置了receiver，fis会把文件逐个post到接收端上
                receiver: SUPERMAN_CONFIG.deploy.receiver,
                //从产出的结果的static目录下找文件
                from: '/static',
                //保存到远端机器的/home/fis/www/static目录下
                //这个参数会跟随post请求一起发送
                to: SUPERMAN_CONFIG.deploy.root + 'webroot/'
            },
            {
                receiver: SUPERMAN_CONFIG.deploy.receiver,
                from: '/config',
                to: SUPERMAN_CONFIG.deploy.root + 'data/smarty/'
            },
            {
                receiver: SUPERMAN_CONFIG.deploy.receiver,
                from: '/template',
                subOnly: true,
                to: SUPERMAN_CONFIG.deploy.root + 'template/'
            },
        ]
    }

});
