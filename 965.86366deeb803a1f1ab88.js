"use strict";(self.webpackChunkgetman_app=self.webpackChunkgetman_app||[]).push([[965],{8965:(k,r,c)=>{c.r(r),c.d(r,{ExampleModule:()=>x});var m=c(4655),u=c(4549),n=c(7716),l=c(8002),f=c(7001);let d=(()=>{class a{constructor(t){this.snackBar=t,this._defaultConfig={snackBar:{horizontalPosition:"center",verticalPosition:"bottom",duration:5e3,panelClass:[]},actionText:"\u2715"}}message(t,o){const e=this._getConfig(o,["bg-accent","text-on-accent"]);return this.snackBar.open(t,e.actionText,Object.assign({},e.snackBar)).onAction().pipe((0,l.U)(()=>!0))}error(t,o){const e=this._getConfig(o,["bg-warn","text-on-warn"]);return this.snackBar.open(t,e.actionText,Object.assign({},e.snackBar)).onAction().pipe((0,l.U)(()=>!0))}_getConfig(t,o){const e=this._defaultConfig;return(null==t?void 0:t.actionText)&&(e.actionText=null==t?void 0:t.actionText),o&&(null==o?void 0:o.length)>0&&(e.snackBar.panelClass=Array.isArray(o)?[...o]:[o]),(null==t?void 0:t.duration)&&(e.snackBar.duration=null==t?void 0:t.duration),e}}return a.\u0275fac=function(t){return new(t||a)(n.LFG(f.ux))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var s=c(2522),v=c(1095),p=c(6627);const g=[{path:"",component:(()=>{class a{constructor(t){this._notificationService=t}click(){this._notificationService.message("mensagem")}}return a.\u0275fac=function(t){return new(t||a)(n.Y36(d))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-example"]],decls:8,vars:0,consts:[[1,"justify-start"],[1,"example-spacer"],["mat-icon-button","",1,"ml-auto",3,"click"],["aria-hidden","false","aria-label","Example heart icon",1,"example-icon"]],template:function(t,o){1&t&&(n.TgZ(0,"mat-toolbar",0),n.TgZ(1,"mat-toolbar-row"),n.TgZ(2,"span"),n._uU(3,"Third Line"),n.qZA(),n._UZ(4,"span",1),n.TgZ(5,"button",2),n.NdJ("click",function(){return o.click()}),n.TgZ(6,"mat-icon",3),n._uU(7,"favorite"),n.qZA(),n.qZA(),n.qZA(),n.qZA())},directives:[s.Ye,s.rD,v.lW,p.Hw],encapsulation:2}),a})()}];let x=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[u.m,m.Bz.forChild([...g])]]}),a})()}}]);