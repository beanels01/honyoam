let
    fs=             require('fs'),
    Server=         require('./Server'),
    config=         JSON.parse(fs.readFileSync('config.json').toString())
    honyoamServer=  new Server(config)
;(async()=>{
    await honyoamServer.load
    console.log('server loaded')
})()
