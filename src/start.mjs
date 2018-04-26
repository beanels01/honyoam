import fs from 'fs'
import Server from './Server'
let
    config=         JSON.parse(fs.readFileSync('config.json').toString()),
    honyoamServer=  new Server(config)
;(async()=>{
    await honyoamServer.load
    console.log('server loaded')
})()
