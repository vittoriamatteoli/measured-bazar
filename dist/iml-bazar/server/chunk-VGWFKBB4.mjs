import './polyfills.server.mjs';
import{a as te,b as ie,c as ne,d as re,e as oe,f as se,i as ae,o as le,p as ue}from"./chunk-RCG5VM4H.mjs";import{Aa as D,Ba as b,Ca as A,Da as M,Ea as u,Fa as c,G as $,Ga as v,H as N,Ha as F,I as m,Ia as p,J as P,Ja as s,Ka as y,L as _,La as d,Ma as T,N as L,Na as w,O as C,Oa as E,R as V,S as j,U as W,Xa as K,Z as h,_ as f,da as q,fb as Q,ja as z,jb as ee,oa as k,qa as l,ra as R,sa as J,ta as Z,ua as Y,xa as X}from"./chunk-OPTSX2DH.mjs";import{a as B,b as H}from"./chunk-5XUXGTUW.mjs";var I=class n{constructor(t){this.http=t}apiUrl="https://6612c3e453b0d5d80f665515.mockapi.io/tasks/projects";api="https://6612c3e453b0d5d80f665515.mockapi.io/tasks/users";getProjects(){return this.http.get(this.apiUrl).pipe($(t=>{localStorage.setItem("projects",JSON.stringify(t))}))}addProject(){let t={name:"New Project",capacity:10,actual_capacity:10};return this.http.post(this.apiUrl,t)}deleteProject(t){return this.http.delete(`${this.apiUrl}/${t}`)}getUsers(){return this.http.get(this.api)}static \u0275fac=function(e){return new(e||n)(L(te))};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})};var G=(n,t)=>t.id;function ve(n,t){if(n&1){let e=F();u(0,"div",4),p("dragstart",function(r){h(e);let o=s().$implicit,a=s();return f(a.onDragStart(r,o,void 0))})("dragover",function(r){h(e);let o=s(2);return f(o.onDragOver(r))}),v(1,"img",5),u(2,"p",6),d(3),c()()}if(n&2){let e=s().$implicit;l(),y("src",e.avatar,k),y("alt",e.name),l(2),T(e.name)}}function ye(n,t){if(n&1&&D(0,ve,4,3,"div",3),n&2){let e=t.$implicit;b(e.status==="start-line"?0:-1)}}function Ce(n,t){n&1&&d(0,"Full")}function Ve(n,t){if(n&1){let e=F();u(0,"div",4),p("dragstart",function(r){h(e);let o=s().$implicit,a=s().$implicit,O=s();return f(O.onDragStart(r,o,a))})("dragover",function(r){h(e);let o=s(3);return f(o.onDragOver(r))}),v(1,"img",5),u(2,"p",6),d(3),c()()}if(n&2){let e=s().$implicit;l(),y("src",e.avatar,k),y("alt",e.name),l(2),T(e.name)}}function De(n,t){if(n&1&&D(0,Ve,4,3,"div",3),n&2){let e=t.$implicit,i=s().$implicit;b(e.status===i.name?0:-1)}}function be(n,t){if(n&1){let e=F();u(0,"div",7),p("drop",function(r){let o=h(e).$implicit,a=s();return f(a.onDrop(r,o))})("dragover",function(r){h(e);let o=s();return f(o.onDragOver(r))}),u(1,"h4",8),d(2),u(3,"p"),d(4),c()(),u(5,"p",9),d(6),D(7,Ce,1,0),c(),A(8,De,1,1,null,null,G),c()}if(n&2){let e=t.$implicit,i=s();l(2),w(" ",e.name," "),l(2),w("[",e.capacity,"]"),l(2),w(" ",e.actual_capacity," "),l(),b(e.actual_capacity>=e.capacity?7:-1),l(),M(i.users)}}var g=class n{constructor(t){this.dataService=t}projects=[];users=[];currentUser;ngOnInit(){this.getProjects(),this.getUsers()}getProjects(){let t=localStorage.getItem("projects");t?this.projects=JSON.parse(t):this.dataService.getProjects().subscribe(e=>{this.projects=e})}getUsers(){let t=localStorage.getItem("users");t?this.users=JSON.parse(t):this.dataService.getUsers().subscribe(e=>{this.users=e,localStorage.setItem("users",JSON.stringify(e))})}onDragStart(t,e,i){t.dataTransfer?.setData("userId",e.id.toString()),this.currentUser=e,i&&i.actual_capacity>0&&(i.actual_capacity-=1,this.updateProjectsInStorage())}onDrop(t,e){t.preventDefault();let i=t.dataTransfer?.getData("userId"),r=this.users.find(o=>o.id===this.currentUser.id);r&&e.actual_capacity<e.capacity&&(r.status=e.name,e.actual_capacity+=1,this.updateProjectsInStorage(),this.updateUsersInStorage())}onDragOver(t){console.log("drag over"),t.preventDefault()}clearField(){let t=JSON.parse(localStorage.getItem("users")||"[]");t&&Array.isArray(t)&&(t.forEach(e=>{e.status="start-line"}),localStorage.setItem("users",JSON.stringify(t)),this.users=t),this.projects.forEach(e=>{e.actual_capacity=0}),this.updateProjectsInStorage()}updateUsersInStorage(){localStorage.setItem("users",JSON.stringify(this.users))}updateProjectsInStorage(){localStorage.setItem("projects",JSON.stringify(this.projects))}static \u0275fac=function(e){return new(e||n)(R(I))};static \u0275cmp=V({type:n,selectors:[["app-dashboard"]],standalone:!0,features:[E],decls:10,vars:0,consts:[[1,"container"],[1,"project-list"],[3,"click"],["draggable","true",1,"user-card"],["draggable","true",1,"user-card",3,"dragstart","dragover"],[3,"src","alt"],[1,"name"],[1,"project-list",3,"drop","dragover"],[1,"title"],[1,"actual-capacity"]],template:function(e,i){e&1&&(u(0,"div",0)(1,"div",1)(2,"h4"),d(3,"Start line "),u(4,"button",2),p("click",function(){return i.clearField()}),d(5,"Clear"),c()(),A(6,ye,1,1,null,null,G),c(),A(8,be,10,4,"div",1,G),c()),e&2&&(l(6),M(i.users),l(2),M(i.projects))},styles:[".container[_ngcontent-%COMP%]{display:flex;overflow-x:visible;white-space:nowrap;padding:20px;gap:20px;width:100%;-ms-overflow-style:none;scrollbar-width:none}.container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.project-list[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 8px #0000001a;min-width:300px;height:100vh;padding:20px;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;scroll-behavior:smooth}.project-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.project-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:10px;color:#3f51b5;text-align:center}.project-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#f44336;color:#fff;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;font-size:.8em}.project-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#d32f2f}.project-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:10px;color:#3f51b5}.project-list[_ngcontent-%COMP%]   .actual-capacity[_ngcontent-%COMP%]{text-align:center;border:solid 1px #ccc;border-radius:4px;padding:10px}.user-card[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;border-radius:6px;padding:10px;margin-bottom:10px;display:flex;align-items:center;cursor:grab;box-shadow:0 2px 4px #0000001a;transition:background-color .3s ease,transform .3s ease}.user-card[_ngcontent-%COMP%]:hover{background-color:#f9f9f9;transform:translateY(-3px)}.user-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin-right:10px;object-fit:cover}.user-card[_ngcontent-%COMP%]   p.name[_ngcontent-%COMP%]{font-size:1em;font-weight:500;margin:0;color:#34495e}.user-card.dragging[_ngcontent-%COMP%]{opacity:.5}"],changeDetection:0})};var Ae={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pt=H(B({},Ae),{"[class.ng-submitted]":"isSubmitted"});var Me=new _("CallSetDisabledState",{providedIn:"root",factory:()=>ce}),ce="always";var Fe=new _("");var we=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=j({type:n})}static{this.\u0275inj=P({})}}return n})();var de=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Fe,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Me,useValue:e.callSetDisabledState??ce}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=j({type:n})}static{this.\u0275inj=P({imports:[we]})}}return n})();var S=class n{title="iml-bazar";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=V({type:n,selectors:[["app-root"]],standalone:!0,features:[E],decls:1,vars:0,template:function(e,i){e&1&&v(0,"app-dashboard")},dependencies:[g,de]})};var he=[{path:"",title:"Dashboard",component:g}];var Ee="@",Ie=(()=>{class n{constructor(e,i,r,o,a){this.doc=e,this.delegate=i,this.zone=r,this.animationType=o,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=C(Z,{optional:!0}),this.loadingSchedulerFn=C(xe,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-LBJPQBSK.mjs").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(r=>{throw new N(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,i){let r=this.delegate.createRenderer(e,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new U(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let O=a.createRenderer(e,i);o.use(O),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(i){J()}}static{this.\u0275prov=m({token:n,factory:n.\u0275fac})}}return n})(),U=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,i,r){this.delegate.insertBefore(t,e,i,r)}removeChild(t,e,i){this.delegate.removeChild(t,e,i)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,i,r){this.delegate.setAttribute(t,e,i,r)}removeAttribute(t,e,i){this.delegate.removeAttribute(t,e,i)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,i,r){this.delegate.setStyle(t,e,i,r)}removeStyle(t,e,i){this.delegate.removeStyle(t,e,i)}setProperty(t,e,i){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,i)),this.delegate.setProperty(t,e,i)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,i){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(t,e,i)),this.delegate.listen(t,e,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(Ee)}},xe=new _("");function fe(n="animations"){return X("NgAsyncAnimations"),W([{provide:Y,useFactory:(t,e,i)=>new Ie(t,e,i,n),deps:[ee,re,q]},{provide:z,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var pe={providers:[K({eventCoalescing:!0}),se(),fe(),ie(ne()),le(he,ue())]};var Se={providers:[ae()]},ge=Q(pe,Se);var Oe=()=>oe(S,ge),$t=Oe;export{$t as a};