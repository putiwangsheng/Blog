// please set serve-favicon in ./node/app/public path

module.exports = {
    blogRootPath: "/home/simplyy/node-server/apps/changqi-blog/Article",
    mongoUrl: 'mongodb://simplyy:1994522yu@127.0.0.1:27016/blog',
    serverPort: '8001',
    renewInterval: 24*3600, // x seconds
    tokenExpireTime: 10 // x hours
};
