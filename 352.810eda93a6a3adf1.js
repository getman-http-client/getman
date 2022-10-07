"use strict";(self.webpackChunkgetman_app=self.webpackChunkgetman_app||[]).push([[352],{1352:(P,f,l)=>{l.r(f),l.d(f,{MainRequestModule:()=>q});var v=l(9299),d=l(3288),c=l(4006),s=(()=>{return(n=s||(s={}))[n.GET=1]="GET",n[n.POST=2]="POST",n[n.PUT=4]="PUT",n[n.DELETE=8]="DELETE",n[n.PATCH=32]="PATCH",n[n.OPTIONS=64]="OPTIONS",n[n.HEAD=16]="HEAD",s;var n})(),C=l(5684),T=l(3900),h=l(4004),x=l(2641),t=l(4650),A=l(529);let g=(()=>{class n{constructor(e){this._http=e}request(e,o){let a;switch(o){case s.GET:a=this._http.get(e);break;case s.POST:a=this._http.post(e,{});break;case s.PUT:a=this._http.put(e,{});break;case s.DELETE:a=this._http.delete(e)}if(!a)throw new x.g("M\xe9todo n\xe3o suportado");return a}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(A.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var D=l(4909),r=l(5938),m=l(6895),p=l(4859);function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onCancel())}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.hij(" ",null==e.cancelAction?null:e.cancelAction.label," ")}}let Z=(()=>{class n{constructor(e,o){this._data=e,this._matDialogRef=o}ngOnInit(){!this._data||(this.title=this._data.title,this.message=this._data.message,this.confirmAction=this._data.actions.confirm,this.cancelAction=this._data.actions.cancel)}onConfirm(){this._matDialogRef.close(!0)}onCancel(){this._matDialogRef.close(!1)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.WI),t.Y36(r.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-confirmation-dialog"]],standalone:!0,features:[t.jDz],decls:8,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","",1,"flex","items-center","justify-end","gap-1"],["mat-button","",3,"click",4,"ngIf"],["mat-raised-button","",3,"color","click"],["mat-button","",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1),t._uU(3),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,E,2,1,"button",3),t.TgZ(6,"button",4),t.NdJ("click",function(){return o.onConfirm()}),t._uU(7),t.qZA()()),2&e&&(t.xp6(1),t.Oqu(o.title),t.xp6(2),t.hij(" ",o.message,"\n"),t.xp6(2),t.Q6J("ngIf",null==o.cancelAction?null:o.cancelAction.show),t.xp6(1),t.Q6J("color",null==o.confirmAction?null:o.confirmAction.color),t.xp6(1),t.hij(" ",null==o.confirmAction?null:o.confirmAction.label," "))},dependencies:[d.m,m.O5,p.lW,r.uh,r.xY,r.H8],encapsulation:2}),n})(),y=(()=>{class n{constructor(e){this._matDialog=e}confirm(e,o){const a=class M{static get _default(){return{title:"Confirma\xe7\xe3o",message:"Deseja confirmar esta a\xe7\xe3o?",dismissible:!1,icon:{show:!1},actions:{confirm:{label:"Sim",color:"accent",show:!0},cancel:{label:"N\xe3o",show:!0}}}}static get _layout(){return{width:"500px",height:"250px"}}static getConfig(i){const e={data:this._default,width:this._layout.width,disableClose:!this._default.dismissible};return i?.confirmText&&(e.data.actions.confirm.label=i?.confirmText),i?.cancelText&&(e.data.actions.cancel.label=i?.cancelText),null!=i?.dismissible&&(e.data.dismissible=i?.dismissible,e.disableClose=!i?.dismissible),e}}.getConfig(o);return e&&(a.data.message=e),this._matDialog.open(Z,{...a}).afterClosed().pipe((0,h.U)(u=>!!u))}open(e,o,a){const u=class R{static get _default(){return{}}static getConfig(i){const e=this._default;return i?.id&&(e.id=i?.id),i?.width&&(e.width=i?.width),i?.height&&(e.height=i?.height),i?.maxWidth&&(e.maxWidth=i?.maxWidth),i?.maxHeight&&(e.maxHeight=i?.maxHeight),i?.panelClass&&(e.panelClass=i?.panelClass),i?.hasBackdrop&&(e.hasBackdrop=i?.hasBackdrop),i?.disableClose&&(e.disableClose=i?.disableClose),e}}.getConfig(a);return this._matDialog.open(e,{...u,data:o})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(r.uw))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var S=l(3238),w=l(9549),N=l(284),U=l(4385);function b(n,i){if(1&n&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.key),t.xp6(1),t.hij(" ",e.value," ")}}function I(n,i){1&n&&(t.TgZ(0,"p",13),t._uU(1," A resposta ser\xe1 exibida aqui! "),t.qZA())}function J(n,i){if(1&n&&(t.TgZ(0,"pre"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.response))}}const O=[{path:"",component:(()=>{class n{constructor(e,o,a){this._service=e,this._envService=o,this._dialogService=a,this.url="http://localhost:7280/weatherforecast",this.form=new c.cw({method:new c.NI(s.GET),url:new c.NI(this.url)}),this.methods=[{key:s.GET,value:"GET"},{key:s.POST,value:"POST"},{key:s.PUT,value:"PUT"},{key:s.DELETE,value:"DELETE"}]}ngOnInit(){this._envService.currentEnvironment$.pipe((0,C.T)(1),(0,T.w)(e=>this._dialogService.confirm("Environment atualizado! Deseja atualizar a atual URL da API?").pipe((0,h.U)(a=>({...e,confirm:a}))))).subscribe(e=>{e.confirm&&this.form.get("url").patchValue(e.url)})}action(){const e=this.form.get("url").value,o=this.form.get("method").value;this._service.request(e,o).subscribe(a=>{this.response=a})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g),t.Y36(D.L),t.Y36(y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main-component"]],features:[t._Bn([g])],decls:14,vars:7,consts:[[1,"p-8"],["autocomplete","off",1,"w-full",3,"formGroup"],[1,"flex","items-center","justify-between","gap-4","w-full"],["placeholder","Method",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-auto"],["matInput","","type","text","placeholder","URL da API",3,"formControlName"],["mat-flat-button","",3,"color","click"],[1,"mt-6"],[1,"border-dotted","border-2","border-white","p-8","w-full","rounded","text-white"],["class","italic m-0",4,"ngIf"],[4,"ngIf"],[3,"value"],[1,"italic","m-0"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"mat-form-field")(4,"mat-select",3),t.YNc(5,b,2,2,"mat-option",4),t.qZA()(),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.action()}),t._uU(9," Send "),t.qZA()()(),t.TgZ(10,"div",8)(11,"div",9),t.YNc(12,I,2,0,"p",10),t.YNc(13,J,3,3,"pre",11),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.form),t.xp6(3),t.Q6J("formControlName","method"),t.xp6(1),t.Q6J("ngForOf",o.methods),t.xp6(2),t.Q6J("formControlName","url"),t.xp6(1),t.Q6J("color","primary"),t.xp6(4),t.Q6J("ngIf",!o.response),t.xp6(1),t.Q6J("ngIf",o.response))},dependencies:[m.sg,m.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,S.ey,p.lW,w.KE,N.Nt,U.gD,m.Ts],encapsulation:2}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.m,v.Bz.forChild([...O])]}),n})()}}]);