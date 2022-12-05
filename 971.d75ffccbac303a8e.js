"use strict";(self.webpackChunkgetman_app=self.webpackChunkgetman_app||[]).push([[971],{5971:(X,T,r)=>{r.r(T),r.d(T,{MainRequestModule:()=>W});var Z=r(9299),b=r(3288),c=r(4006),u=(()=>{return(o=u||(u={}))[o.GET=1]="GET",o[o.POST=2]="POST",o[o.PUT=4]="PUT",o[o.DELETE=8]="DELETE",o[o.PATCH=32]="PATCH",o[o.OPTIONS=64]="OPTIONS",o[o.HEAD=16]="HEAD",u;var o})();class d{constructor(a){this.value=this.empty,a&&d.isValid(a)&&(this.value=a.toLowerCase())}static newGuid(){return new d("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const e=16*Math.random()|0;return("x"==a?e:3&e|8).toString(16)}))}static get empty(){return"00000000-0000-0000-0000-000000000000"}static isValid(a){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(a)}get empty(){return d.empty}toString(){return this.value}toJSON(){return this.value}equals(a){return this.toString()==a?.toString()}}var h=r(4004),N=r(5684),w=r(3900),_=r(2641),t=r(4650),k=r(529);let C=(()=>{class o{constructor(e){this._http=e}request(e,n,i,l){let s,f=l??{};switch(i){case u.GET:s=this._http.get(e,{headers:f});break;case u.POST:s=this._http.post(e,n,{headers:f});break;case u.PUT:s=this._http.put(e,n,{headers:f});break;case u.DELETE:s=this._http.delete(e,{headers:f})}if(!s)throw new _.g("M\xe9todo n\xe3o suportado");return s}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(k.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var R=r(4909),g=r(5938),p=r(6895),y=r(4859);function q(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onCancel())}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.hij(" ",null==e.cancelAction?null:e.cancelAction.label," ")}}let J=(()=>{class o{constructor(e,n){this._data=e,this._matDialogRef=n}ngOnInit(){!this._data||(this.title=this._data.title,this.message=this._data.message,this.confirmAction=this._data.actions.confirm,this.cancelAction=this._data.actions.cancel)}onConfirm(){this._matDialogRef.close(!0)}onCancel(){this._matDialogRef.close(!1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.WI),t.Y36(g.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-confirmation-dialog"]],standalone:!0,features:[t.jDz],decls:8,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","",1,"flex","items-center","justify-end","gap-1"],["mat-button","",3,"click",4,"ngIf"],["mat-raised-button","",3,"color","click"],["mat-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1),t._uU(3),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,q,2,1,"button",3),t.TgZ(6,"button",4),t.NdJ("click",function(){return n.onConfirm()}),t._uU(7),t.qZA()()),2&e&&(t.xp6(1),t.Oqu(n.title),t.xp6(2),t.hij(" ",n.message,"\n"),t.xp6(2),t.Q6J("ngIf",null==n.cancelAction?null:n.cancelAction.show),t.xp6(1),t.Q6J("color",null==n.confirmAction?null:n.confirmAction.color),t.xp6(1),t.hij(" ",null==n.confirmAction?null:n.confirmAction.label," "))},dependencies:[b.m,p.O5,y.lW,g.uh,g.xY,g.H8],encapsulation:2}),o})(),M=(()=>{class o{constructor(e){this._matDialog=e}confirm(e,n){const i=class S{static get _default(){return{title:"Confirma\xe7\xe3o",message:"Deseja confirmar esta a\xe7\xe3o?",dismissible:!1,icon:{show:!1},actions:{confirm:{label:"Sim",color:"accent",show:!0},cancel:{label:"N\xe3o",show:!0}}}}static get _layout(){return{width:"500px",height:"250px"}}static getConfig(a){const e={data:this._default,width:this._layout.width,disableClose:!this._default.dismissible};return a?.confirmText&&(e.data.actions.confirm.label=a?.confirmText),a?.cancelText&&(e.data.actions.cancel.label=a?.cancelText),null!=a?.dismissible&&(e.data.dismissible=a?.dismissible,e.disableClose=!a?.dismissible),e}}.getConfig(n);return e&&(i.data.message=e),this._matDialog.open(J,{...i}).afterClosed().pipe((0,h.U)(l=>!!l))}open(e,n,i){const l=class E{static get _default(){return{}}static getConfig(a){const e=this._default;return a?.id&&(e.id=a?.id),a?.width&&(e.width=a?.width),a?.height&&(e.height=a?.height),a?.maxWidth&&(e.maxWidth=a?.maxWidth),a?.maxHeight&&(e.maxHeight=a?.maxHeight),a?.panelClass&&(e.panelClass=a?.panelClass),a?.hasBackdrop&&(e.hasBackdrop=a?.hasBackdrop),a?.disableClose&&(e.disableClose=a?.disableClose),e}}.getConfig(i);return this._matDialog.open(e,{...l,data:n})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(g.uw))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var I=r(7009);let U=(()=>{class o{constructor(e){this.snackBar=e,this._defaultConfig={snackBar:{horizontalPosition:"center",verticalPosition:"bottom",duration:5e3,panelClass:[]},actionText:"\u2715"}}message(e,n){const i=this._getConfig(n,["bg-accent","text-on-accent"]);return this.snackBar.open(e,i.actionText,{...i.snackBar}).onAction().pipe((0,h.U)(()=>!0))}error(e,n){const i=this._getConfig(n,["bg-warn","text-on-warn"]);return this.snackBar.open(e,i.actionText,{...i.snackBar}).onAction().pipe((0,h.U)(()=>!0))}_getConfig(e,n){const i=this._defaultConfig;return e?.actionText&&(i.actionText=e?.actionText),n&&n?.length>0&&(i.snackBar.panelClass=Array.isArray(n)?[...n]:[n]),e?.duration&&(i.snackBar.duration=e?.duration),i}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(I.ux))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var D=r(3238),x=r(9652),A=r(9549),F=r(7392),O=r(284),Q=r(4385),G=r(266);function B(o,a){if(1&o&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e.key),t.xp6(1),t.hij(" ",e.value," ")}}function Y(o,a){1&o&&(t.TgZ(0,"mat-icon",30),t._uU(1," visibility "),t.qZA()),2&o&&t.Q6J("matTooltip","Exibir cabe\xe7alho")}function P(o,a){1&o&&(t.TgZ(0,"mat-icon",30),t._uU(1," visibility_off "),t.qZA()),2&o&&t.Q6J("matTooltip","Ocultar cabe\xe7alho")}function j(o,a){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",24)(2,"mat-form-field",7),t._UZ(3,"input",25),t.qZA(),t.TgZ(4,"mat-form-field",7),t._UZ(5,"input",26),t.qZA(),t.TgZ(6,"button",27),t.NdJ("click",function(){const l=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.toggleVisibility(l))}),t.YNc(7,Y,2,1,"mat-icon",28),t.YNc(8,P,2,1,"mat-icon",28),t.qZA(),t.TgZ(9,"button",29),t.NdJ("click",function(){const l=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.removeHeader(l))}),t.TgZ(10,"mat-icon"),t._uU(11,"delete"),t.qZA()()(),t.BQk()}if(2&o){const e=a.$implicit,n=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(2),t.Q6J("formControlName","key"),t.xp6(2),t.Q6J("formControlName","value"),t.xp6(2),t.Q6J("ngIf",0==n.form.get("headers").get(e).get("visible").value),t.xp6(1),t.Q6J("ngIf",1==n.form.get("headers").get(e).get("visible").value),t.xp6(1),t.Q6J("disabled",0==n.form.get("headers").get(e).get("editable").value)("matTooltip","Remover cabe\xe7alho")}}function L(o,a){1&o&&(t.TgZ(0,"div",31)(1,"mat-form-field",32)(2,"mat-label"),t._uU(3,"Body (JSON)"),t.qZA(),t._UZ(4,"textarea",33),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("formControlName","body"))}function H(o,a){1&o&&(t.TgZ(0,"p",34),t._uU(1," A resposta ser\xe1 exibida aqui! "),t.qZA())}function z(o,a){if(1&o&&(t.TgZ(0,"pre"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.response))}}const $=[{path:"",component:(()=>{class o{constructor(e,n,i,l){this._service=e,this._envService=n,this._dialogService=i,this._notificationService=l,this.defaultSegment="/weatherforecast",this.url="http://localhost:7280"+this.defaultSegment,this.form=new c.cw({method:new c.NI(u.GET),url:new c.NI(this.url),headers:new c.cw({}),body:new c.NI("")}),this.formHeadersControlNames$=this.form.get("headers").valueChanges.pipe((0,h.U)(()=>Object.keys(this.form.get("headers").getRawValue()))),this.methods=[{key:u.GET,value:"GET"},{key:u.POST,value:"POST",bodyFieldAvailable:!0},{key:u.PUT,value:"PUT",bodyFieldAvailable:!0},{key:u.DELETE,value:"DELETE"}],this.bodyFieldAvailable=!1}ngOnInit(){this._envService.currentEnvironment$.pipe((0,N.T)(1),(0,w.w)(e=>this._dialogService.confirm("Environment atualizado! Deseja atualizar a atual URL da API?").pipe((0,h.U)(i=>({...e,confirm:i}))))).subscribe(e=>{e.confirm&&this.form.get("url").patchValue(e.url+this.defaultSegment)}),this.form.get("method").valueChanges.subscribe(e=>{const n=this.methods.find(i=>i.key==e);this.bodyFieldAvailable=n?.bodyFieldAvailable??!1,this.bodyFieldAvailable||this.form.get("body").reset(null)}),setTimeout(()=>{this.addHeader("Getman-Request-Id",d.newGuid().toString())},0)}addHeader(e,n){const i=d.newGuid().toString(),l=null!=e&&null!=n,s=new c.cw({key:new c.NI(e??""),value:new c.NI(n??""),visible:new c.NI(!l),editable:new c.NI(!l)});l&&(s.get("key").disable(),s.get("value").disable(),s.get("editable").disable()),this.form.get("headers").addControl(i,s)}removeHeader(e){this.form.get("headers").removeControl(e)}toggleVisibility(e){const n=this.form.get("headers").get(e).get("visible");n.patchValue(!n.value)}action(){const e=this.form.get("url").value,n=this.form.get("method").value,i=this.form.get("headers").getRawValue(),l=this.form.get("body").value,s=Object.keys(i).reduce((m,K)=>{const v=i[K];return v.visible&&(m[v.key]=v.value),m},{});let f=null;if(l&&l.length>0&&this.methods.some(m=>m.key==n&&m.bodyFieldAvailable))try{f=JSON.parse(l)}catch{return void this._notificationService.error('Formato inv\xe1lido: campo "body". Requisi\xe7\xe3o cancelada')}this._service.request(e,f,n,s).subscribe(m=>{this.response=m})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C),t.Y36(R.L),t.Y36(M),t.Y36(U))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-main-component"]],features:[t._Bn([C])],decls:34,vars:14,consts:[[1,"p-8"],["autocomplete","off",1,"w-full",3,"formGroup"],[1,"flex","items-start","justify-between","gap-4","w-full"],[1,"flex","flex-col","items-start","gap-4","w-full"],[1,"flex","items-center","justify-between","gap-4","w-full"],["placeholder","Method",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-auto"],["matInput","","type","text","placeholder","URL da API",1,"truncate",3,"formControlName"],[1,"flex","w-full"],[1,"w-full",3,"expanded"],[1,"block"],[1,"flex","justify-end","my-2"],["mat-raised-button","",3,"color","click"],[1,"ml-2"],[1,"flex","flex-col","gap-4","w-full",3,"formGroupName"],[4,"ngFor","ngForOf"],["class","block w-full",4,"ngIf"],["mat-flat-button","",3,"color","click"],[1,"mt-6"],[1,"border-dotted","border-2","border-white","p-8","w-full","rounded","text-white"],["class","italic m-0",4,"ngIf"],[4,"ngIf"],[3,"value"],[1,"flex","items-center","gap-4",3,"formGroupName"],["matInput","","type","text","placeholder","Header",1,"truncate",3,"formControlName"],["matInput","","type","text","placeholder","Value",1,"truncate",3,"formControlName"],["mat-icon-button","",3,"click"],[3,"matTooltip",4,"ngIf"],["mat-icon-button","",3,"disabled","matTooltip","click"],[3,"matTooltip"],[1,"block","w-full"],["appearance","fill",1,"w-full"],["matInput","","rows","10",1,"font-mono",3,"formControlName"],[1,"italic","m-0"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"mat-form-field")(6,"mat-select",5),t.YNc(7,B,2,2,"mat-option",6),t.qZA()(),t.TgZ(8,"mat-form-field",7),t._UZ(9,"input",8),t.qZA()(),t.TgZ(10,"mat-accordion",9)(11,"mat-expansion-panel",10)(12,"mat-expansion-panel-header")(13,"mat-panel-title"),t._uU(14," Headers "),t.qZA(),t.TgZ(15,"mat-panel-description"),t._uU(16," Mapeamento de cabe\xe7alhos da requisi\xe7\xe3o "),t.qZA()(),t.TgZ(17,"div",11)(18,"div",12)(19,"button",13),t.NdJ("click",function(){return n.addHeader()}),t.TgZ(20,"mat-icon"),t._uU(21,"add"),t.qZA(),t.TgZ(22,"span",14),t._uU(23," Adicionar "),t.qZA()()(),t.TgZ(24,"div",15),t.YNc(25,j,12,7,"ng-container",16),t.ALo(26,"async"),t.qZA()()()(),t.YNc(27,L,5,1,"div",17),t.qZA(),t.TgZ(28,"button",18),t.NdJ("click",function(){return n.action()}),t._uU(29," Send "),t.qZA()()(),t.TgZ(30,"div",19)(31,"div",20),t.YNc(32,H,2,0,"p",21),t.YNc(33,z,3,3,"pre",22),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("formControlName","method"),t.xp6(1),t.Q6J("ngForOf",n.methods),t.xp6(2),t.Q6J("formControlName","url"),t.xp6(2),t.Q6J("expanded",!0),t.xp6(8),t.Q6J("color","primary"),t.xp6(5),t.Q6J("formGroupName","headers"),t.xp6(1),t.Q6J("ngForOf",t.lcZ(26,12,n.formHeadersControlNames$)),t.xp6(2),t.Q6J("ngIf",n.bodyFieldAvailable),t.xp6(1),t.Q6J("color","primary"),t.xp6(4),t.Q6J("ngIf",!n.response),t.xp6(1),t.Q6J("ngIf",n.response))},dependencies:[p.sg,p.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,c.x0,D.ey,y.lW,x.pp,x.ib,x.yz,x.yK,x.u4,A.KE,A.hX,F.Hw,O.Nt,Q.gD,G.gM,p.Ov,p.Ts],encapsulation:2}),o})()}];let W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[b.m,Z.Bz.forChild([...$])]}),o})()}}]);