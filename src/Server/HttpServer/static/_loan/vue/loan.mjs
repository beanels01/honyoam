/*
    年利率＝12*月利率
*/
/*
    本息平均攤還試算（貸款金額（元），月利率，貸款期（月））
    回傳每月需攤還利息
*/
function f0(a,b,c){
    return a*((1+b)**c*b)/((1+b)**c-1)
}
/*
    有還本寬限期貸款試算（
        貸款金額（元），月利率，貸款期（月），寬限期（月）
    ）
    回傳[寬限期內月繳利息,寬限期後月繳本金+利息]
*/
function f1(a,b,c,d){
    return[a*b,f0(a,b,c-d)]
}
/*
    三階段調息月付額試算（
        貸款金額（元），貸款期（月），
        第一年貸款月利率，第二年貸款月利率，第三年貸款月利率
    ）
    回傳[
        第一年每月貸款償還金額
        第二年每月貸款償還金額
        第三以後年每月貸款償還金額
    ]
*/
function f2(m0,t,r0,r1,r2){
    let
        x0=f0(m0,r0,t),
        m1=(r0+1)**12*m0-x0*((r0+1)**12-1)/r0,
        x1=f0(m1,r1,t-12),
        m2=(r1+1)**12*m1-x1*((r1+1)**12-1)/r1,
        x2=f0(m2,r2,t-24)
    return[x0,x1,x2]
}
export default{f0,f1,f2}
