import parseMedieval from './parseMedieval'
;(async()=>{
    console.log(
        await parseMedieval(process.argv[2])
    )
})()
