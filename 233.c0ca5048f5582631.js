"use strict";(self.webpackChunkgetman_app=self.webpackChunkgetman_app||[]).push([[233],{1233:(T,a,o)=>{o.r(a),o.d(a,{MainModule:()=>O});var l=o(9299),h=o(3288),d=o(1135),t=o(4650);let u=(()=>{class e{constructor(){this._resquestId=new d.X(null)}get requestId$(){return this._resquestId.asObservable()}resolve(n,s){const c=n.params.collectionId??null;c&&this._resquestId.next(c)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var f=o(7579),p=o(2722),M=o(3900),g=o(5698),C=o(529);let v=(()=>{class e{constructor(n){this._http=n,this._collections=new d.X([])}get collections$(){return this._collections.asObservable()}getCollection(n){return this._collections.getValue().find(c=>c.collectionId==n)}fetchCollections(){return this._fetchCollections().pipe((0,M.w)(n=>(this._collections.next(n),this._collections.asObservable())))}_fetchCollections(){return this._http.get("./assets/collections/mock-collections.json").pipe((0,g.q)(1))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(C.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var m=o(6895),Z=o(4850),I=o(7392),x=o(3238),r=o(3267);function y(e,i){1&e&&t._UZ(0,"mat-divider")}const A=function(e){return[e]};function R(e,i){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,y,1,0,"mat-divider",5),t.TgZ(2,"div",6),t._uU(3),t.qZA(),t._UZ(4,"mat-divider"),t.qZA()),2&e){const n=i.$implicit,s=i.first;t.xp6(1),t.Q6J("ngIf",s),t.xp6(1),t.Q6J("routerLink",t.VKq(4,A,n.collectionId))("routerLinkActive","border-l-8 border-white"),t.xp6(1),t.hij(" ",n.name," ")}}const F=[{path:"",component:(()=>{class e{constructor(n){this._service=n,this.collections=[],this._unsubscribeAll=new f.x}ngOnInit(){this._service.fetchCollections().pipe((0,p.R)(this._unsubscribeAll)).subscribe(n=>{this.collections=n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main"]],features:[t._Bn([v])],decls:10,vars:3,consts:[[1,"h-full","overflow-auto"],[1,"w-72","select-none",3,"mode","opened"],[1,"flex","items-center","justify-start","px-4","py-6"],[1,"ml-2","font-semibold","text-xl"],[4,"ngFor","ngForOf"],[4,"ngIf"],["matRipple","",1,"block","w-full","hover:bg-slate-800","cursor-pointer","px-4","py-4",3,"routerLink","routerLinkActive"]],template:function(n,s){1&n&&(t.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1)(2,"div",2)(3,"mat-icon"),t._uU(4,"library_books"),t.qZA(),t.TgZ(5,"span",3),t._uU(6," Collections "),t.qZA()(),t.YNc(7,R,5,6,"div",4),t.qZA(),t.TgZ(8,"mat-drawer-content"),t._UZ(9,"router-outlet"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("mode","side")("opened",!0),t.xp6(6),t.Q6J("ngForOf",s.collections))},dependencies:[m.sg,m.O5,Z.d,I.Hw,x.wG,r.jA,r.kh,r.LW,l.lC,l.rH,l.Od],encapsulation:2}),e})(),children:[{path:":collectionId",loadChildren:()=>o.e(971).then(o.bind(o,5971)).then(e=>e.MainRequestModule),resolve:{collectionId:u}}]}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[u],imports:[h.m,l.Bz.forChild([...F])]}),e})()}}]);