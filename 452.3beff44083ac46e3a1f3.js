"use strict";(self.webpackChunknoodle_space_client=self.webpackChunknoodle_space_client||[]).push([[452],{665:(_s,At,w)=>{w.d(At,{u5:()=>gi,Cf:()=>I,JU:()=>V,YN:()=>on,Kr:()=>rn});var u=w(7716);w(8583),w(7574),w(9796),w(8002),w(1555),w(4402);let te=(()=>{class d{constructor(r,c){this._renderer=r,this._elementRef=c,this.onChange=p=>{},this.onTouched=()=>{}}setProperty(r,c){this._renderer.setProperty(this._elementRef.nativeElement,r,c)}registerOnTouched(r){this.onTouched=r}registerOnChange(r){this.onChange=r}setDisabledState(r){this.setProperty("disabled",r)}}return d.\u0275fac=function(r){return new(r||d)(u.Y36(u.Qsj),u.Y36(u.SBq))},d.\u0275dir=u.lG2({type:d}),d})(),ne=(()=>{class d extends te{}return d.\u0275fac=function(){let l;return function(c){return(l||(l=u.n5z(d)))(c||d)}}(),d.\u0275dir=u.lG2({type:d,features:[u.qOj]}),d})();const V=new u.OlP("NgValueAccessor"),I=new u.OlP("NgValidators");let Wt=(()=>{class d{}return d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({}),d})();const ni={provide:V,useExisting:(0,u.Gpc)(()=>mt),multi:!0};function nn(d,l){return null==d?`${l}`:(l&&"object"==typeof l&&(l="Object"),`${d}: ${l}`.slice(0,50))}let mt=(()=>{class d extends ne{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(r){this._compareWith=r}writeValue(r){this.value=r;const c=this._getOptionId(r);null==c&&this.setProperty("selectedIndex",-1);const p=nn(c,r);this.setProperty("value",p)}registerOnChange(r){this.onChange=c=>{this.value=this._getOptionValue(c),r(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(r){for(const c of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(c),r))return c;return null}_getOptionValue(r){const c=function(d){return d.split(":")[0]}(r);return this._optionMap.has(c)?this._optionMap.get(c):r}}return d.\u0275fac=function(){let l;return function(c){return(l||(l=u.n5z(d)))(c||d)}}(),d.\u0275dir=u.lG2({type:d,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,c){1&r&&u.NdJ("change",function(v){return c.onChange(v.target.value)})("blur",function(){return c.onTouched()})},inputs:{compareWith:"compareWith"},features:[u._Bn([ni]),u.qOj]}),d})(),on=(()=>{class d{constructor(r,c,p){this._element=r,this._renderer=c,this._select=p,this._select&&(this.id=this._select._registerOption())}set ngValue(r){null!=this._select&&(this._select._optionMap.set(this.id,r),this._setElementValue(nn(this.id,r)),this._select.writeValue(this._select.value))}set value(r){this._setElementValue(r),this._select&&this._select.writeValue(this._select.value)}_setElementValue(r){this._renderer.setProperty(this._element.nativeElement,"value",r)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return d.\u0275fac=function(r){return new(r||d)(u.Y36(u.SBq),u.Y36(u.Qsj),u.Y36(mt,9))},d.\u0275dir=u.lG2({type:d,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),d})();const oi={provide:V,useExisting:(0,u.Gpc)(()=>vt),multi:!0};function sn(d,l){return null==d?`${l}`:("string"==typeof l&&(l=`'${l}'`),l&&"object"==typeof l&&(l="Object"),`${d}: ${l}`.slice(0,50))}let vt=(()=>{class d extends ne{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(r){this._compareWith=r}writeValue(r){let c;if(this.value=r,Array.isArray(r)){const p=r.map(v=>this._getOptionId(v));c=(v,S)=>{v._setSelected(p.indexOf(S.toString())>-1)}}else c=(p,v)=>{p._setSelected(!1)};this._optionMap.forEach(c)}registerOnChange(r){this.onChange=c=>{const p=[];if(void 0!==c.selectedOptions){const v=c.selectedOptions;for(let S=0;S<v.length;S++){const U=v.item(S),ve=this._getOptionValue(U.value);p.push(ve)}}else{const v=c.options;for(let S=0;S<v.length;S++){const U=v.item(S);if(U.selected){const ve=this._getOptionValue(U.value);p.push(ve)}}}this.value=p,r(p)}}_registerOption(r){const c=(this._idCounter++).toString();return this._optionMap.set(c,r),c}_getOptionId(r){for(const c of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(c)._value,r))return c;return null}_getOptionValue(r){const c=function(d){return d.split(":")[0]}(r);return this._optionMap.has(c)?this._optionMap.get(c)._value:r}}return d.\u0275fac=function(){let l;return function(c){return(l||(l=u.n5z(d)))(c||d)}}(),d.\u0275dir=u.lG2({type:d,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,c){1&r&&u.NdJ("change",function(v){return c.onChange(v.target)})("blur",function(){return c.onTouched()})},inputs:{compareWith:"compareWith"},features:[u._Bn([oi]),u.qOj]}),d})(),rn=(()=>{class d{constructor(r,c,p){this._element=r,this._renderer=c,this._select=p,this._select&&(this.id=this._select._registerOption(this))}set ngValue(r){null!=this._select&&(this._value=r,this._setElementValue(sn(this.id,r)),this._select.writeValue(this._select.value))}set value(r){this._select?(this._value=r,this._setElementValue(sn(this.id,r)),this._select.writeValue(this._select.value)):this._setElementValue(r)}_setElementValue(r){this._renderer.setProperty(this._element.nativeElement,"value",r)}_setSelected(r){this._renderer.setProperty(this._element.nativeElement,"selected",r)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return d.\u0275fac=function(r){return new(r||d)(u.Y36(u.SBq),u.Y36(u.Qsj),u.Y36(vt,9))},d.\u0275dir=u.lG2({type:d,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),d})(),_n=(()=>{class d{}return d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({imports:[[Wt]]}),d})(),gi=(()=>{class d{}return d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({imports:[_n]}),d})()},3452:(_s,At,w)=>{w.r(At),w.d(At,{ClientModule:()=>da});var u=w(8583),t=w(7716),Ye=w(9577);let St=(()=>{class n{constructor(){}ngOnInit(){document.body.addEventListener("click",e=>{let i=e.target||null;(null==i?void 0:i.matches(".menu-left-toggle"))||(null==i?void 0:i.matches(".menu-left, .menu-left *"))||this.closeMenu()})}openMenu(){let e=document.querySelector(".menu-left"),i=document.querySelector(".overlay");(null==e?void 0:e.classList.contains("active"))?this.closeMenu():(null==e||e.classList.add("active"),i.style.display="block",document.body.style.overflow="hidden")}closeMenu(){let e=document.querySelector(".menu-left"),i=document.querySelector(".overlay");null==e||e.classList.remove("active"),i.style.display="none",document.body.style.overflow="auto"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],decls:25,vars:4,consts:[[1,"header-container"],[1,"menu-left-toggle","noselect",3,"click"],[1,"menu-left"],[1,"noselect"],[1,"menu-user"],[1,"fa",3,"icon"],[1,"menu-close",3,"click"],[1,"logo","noselect"],[1,"menu-function"],[1,"func-search"],[1,"func-user"],[1,"func-bag"],[1,"overlay"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.NdJ("click",function(){return i.openMenu()}),t._uU(2," = "),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"a",3),t._uU(5,"N\u1eef"),t.qZA(),t.TgZ(6,"a",3),t._uU(7,"Nam"),t.qZA(),t.TgZ(8,"a",3),t._uU(9,"Gi\u1ea3m gi\xe1"),t.qZA(),t.TgZ(10,"div",4),t._UZ(11,"fa-icon",5),t._uU(12," \xa0 Admin "),t.qZA(),t.TgZ(13,"div",6),t.NdJ("click",function(){return i.closeMenu()}),t._uU(14," X "),t.qZA(),t.qZA(),t.TgZ(15,"div",7),t._uU(16,"NOODLESPACE"),t.qZA(),t.TgZ(17,"div",8),t.TgZ(18,"div",9),t._UZ(19,"fa-icon",5),t.qZA(),t.TgZ(20,"div",10),t._UZ(21,"fa-icon",5),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"fa-icon",5),t.qZA(),t.qZA(),t.qZA(),t._UZ(24,"div",12)),2&e&&(t.xp6(11),t.Q6J("icon","user"),t.xp6(8),t.Q6J("icon","search"),t.xp6(2),t.Q6J("icon","user"),t.xp6(2),t.Q6J("icon","shopping-bag"))},directives:[Ye.BN],styles:['.header-container[_ngcontent-%COMP%]{position:sticky;top:0;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;padding:1rem;background-color:#fff;z-index:999999}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000000e6;display:none;z-index:999998}.menu-left-toggle[_ngcontent-%COMP%]{display:grid;justify-content:center;width:40px;font-size:2rem;font-weight:bold;cursor:pointer}.menu-left[_ngcontent-%COMP%]{position:fixed;top:5rem;bottom:0;left:-100%;width:70%;display:flex;flex-direction:column;background-color:#000;color:#fff;padding:100px 2rem 2rem;font-weight:570;overflow:auto;transition:left .5s ease}.menu-left[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin:2rem 0 0}.active[_ngcontent-%COMP%]{left:0}.menu-search[_ngcontent-%COMP%]{position:absolute;top:3rem;margin-top:0!important}.menu-user[_ngcontent-%COMP%]{position:absolute;top:30px;margin-top:0!important}.menu-close[_ngcontent-%COMP%]{position:absolute;top:30px;right:1rem;margin-top:0!important;cursor:pointer;font-weight:bold}.menu-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:#fff;font-size:1.5rem;text-decoration:none;width:max-content;cursor:pointer}.menu-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-20%;left:50%;width:0%;height:1.5pt;background-color:#fff;transition:.5s}.menu-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .menu-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:after, .menu-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active:after{left:0;width:100%}.logo[_ngcontent-%COMP%]{font-family:var(--font-logo);justify-self:center;font-weight:bold;font-size:1.7rem;cursor:pointer;color:var(--logo-color)}.menu-function[_ngcontent-%COMP%]{justify-self:end;display:flex;flex-direction:row;font-size:1rem}.menu-function[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin:0 0 0 2rem}.func-search[_ngcontent-%COMP%]{display:none}.func-user[_ngcontent-%COMP%]{display:none}.fa[_ngcontent-%COMP%]{cursor:pointer}@media (min-width: 1281px){.header-container[_ngcontent-%COMP%]{padding-left:var(--padding-left-right);padding-right:var(--padding-left-right)}.menu-left-toggle[_ngcontent-%COMP%]{display:none}.menu-left[_ngcontent-%COMP%]{position:relative;justify-self:start;display:flex;flex-direction:row;left:0;top:0;background-color:transparent;width:100%;padding:0;overflow:visible}.menu-left[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin:0 0 0 1.5rem}.menu-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-size:1rem!important;min-width:max-content}.menu-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{background-color:var(--logo-color)}.func-search[_ngcontent-%COMP%]{display:block}.func-user[_ngcontent-%COMP%]{display:block}.menu-search[_ngcontent-%COMP%]{display:none}.menu-user[_ngcontent-%COMP%]{display:none}.menu-close[_ngcontent-%COMP%]{display:none}}']}),n})();var Le=w(7290);const An=function(){return["fab","facebook"]},Et=function(){return["fab","instagram"]};let Sn=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer"]],decls:48,vars:4,consts:[[1,"footer-container"],[1,"box"],[1,"brand-container"],[1,"brand"],[1,"address"],[1,"social-links"],[1,"fa",3,"icon"],[1,"title-container"],[1,"box-content"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._uU(4,"NOODLESPACE"),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"\u0110\u1ecba ch\u1ec9: 123 abc, district X"),t.qZA(),t.TgZ(7,"div"),t._uU(8,"Email: noodlespace@gmail.com"),t.qZA(),t.TgZ(9,"div"),t._uU(10,"S\u0110T: 000.xxx.000"),t.qZA(),t.TgZ(11,"div",5),t._UZ(12,"fa-icon",6),t._UZ(13,"fa-icon",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",1),t.TgZ(15,"div",7),t._uU(16," S\u1ea3n ph\u1ea9m "),t.qZA(),t.TgZ(17,"div",8),t.TgZ(18,"a"),t._uU(19,"N\u1eef"),t.qZA(),t.TgZ(20,"a"),t._uU(21,"Nam"),t.qZA(),t.TgZ(22,"a"),t._uU(23,"Gi\u1ea3m gi\xe1"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",1),t.TgZ(25,"div",7),t._uU(26," Th\xf4ng tin "),t.qZA(),t.TgZ(27,"div",8),t.TgZ(28,"a"),t._uU(29,"V\u1ec1 NOODLESPACE"),t.qZA(),t.TgZ(30,"a"),t._uU(31,"Tuy\u1ec3n d\u1ee5ng"),t.qZA(),t.TgZ(32,"a"),t._uU(33,"Cam k\u1ebft b\u1ea3o m\u1eadt"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",1),t.TgZ(35,"div",7),t._uU(36," H\u1ed7 tr\u1ee3 "),t.qZA(),t.TgZ(37,"div",8),t.TgZ(38,"a"),t._uU(39,"FAQs"),t.qZA(),t.TgZ(40,"a"),t._uU(41,"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng"),t.qZA(),t.TgZ(42,"a"),t._uU(43,"\u0110\u1ed5i tr\u1ea3"),t.qZA(),t.TgZ(44,"a"),t._uU(45,"Giao h\xe0ng"),t.qZA(),t.TgZ(46,"a"),t._uU(47,"COVID-19"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(12),t.Q6J("icon",t.DdM(2,An)),t.xp6(1),t.Q6J("icon",t.DdM(3,Et)))},directives:[Ye.BN],styles:[".footer-container[_ngcontent-%COMP%]{--main-color: white;--sub-color: #d5d5d5;background-color:#000;color:var(--main-color);padding:1rem;display:flex;flex-direction:column}.brand-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin:.5rem 0 0}.brand[_ngcontent-%COMP%]{font-family:var(--font-logo);font-size:2rem;color:var(--logo-color);font-weight:bold}.address[_ngcontent-%COMP%]{font-size:1rem;color:var(--sub-color)!important}.box[_ngcontent-%COMP%]:first-child{order:4}.box[_ngcontent-%COMP%]{width:100%;padding-bottom:1.5rem;color:var(--main-color);line-height:1.5rem}.title-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-size:1.2rem}.box-content[_ngcontent-%COMP%]{padding:.5rem;color:var(--sub-color);display:flex;flex-direction:column;font-size:1.1rem}.box-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin:1rem 0 0}.box-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:max-content;cursor:pointer}.box-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.social-links[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-top:.5rem;font-size:1.5rem}.social-links[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin:0 0 0 1rem}.social-links[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{cursor:pointer}@media (min-width: 641px){.footer-container[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}}@media (min-width: 961px){.footer-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr)}.footer-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin:1rem 0 0}.footer-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(1){grid-row:1/3;margin-top:1rem}}@media (min-width: 1281px){.footer-container[_ngcontent-%COMP%]{padding-left:var(--padding-left-right);padding-right:var(--padding-left-right)}}"]}),n})(),Me=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-client"]],decls:3,vars:0,template:function(e,i){1&e&&(t._UZ(0,"app-header"),t._UZ(1,"router-outlet"),t._UZ(2,"app-footer"))},directives:[St,Le.lC,Sn],styles:[""]}),n})();var te=w(7574),ne=w(9193),V=w(5917);w(7709),w(9796),w(9105),w(8002);var On=w(5319);class xi extends On.w{constructor(o,e){super()}schedule(o,e=0){return this}}let Ze=(()=>{class n{constructor(e,i=n.now){this.SchedulerAction=e,this.now=i}schedule(e,i=0,s){return new this.SchedulerAction(this,e).schedule(s,i)}}return n.now=()=>Date.now(),n})();class X extends Ze{constructor(o,e=Ze.now){super(o,()=>X.delegate&&X.delegate!==this?X.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(o,e=0,i){return X.delegate&&X.delegate!==this?X.delegate.schedule(o,e,i):super.schedule(o,e,i)}flush(o){const{actions:e}=this;if(this.active)return void e.push(o);let i;this.active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=e.shift());if(this.active=!1,i){for(;o=e.shift();)o.unsubscribe();throw i}}}new X(class extends xi{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){if(this.closed)return this;this.state=o;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(s,this.id,e),this}requestAsyncId(o,e,i=0){return setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,e,i=0){if(null!==i&&this.delay===i&&!1===this.pending)return e;clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let s,i=!1;try{this.work(o)}catch(a){i=!0,s=!!a&&a||new Error(a)}if(i)return this.unsubscribe(),s}_unsubscribe(){const o=this.id,e=this.scheduler,i=e.actions,s=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==s&&i.splice(s,1),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null}}),w(4869),w(6693),w(5197),w(509),w(6215),w(9112);var It=w(8640);new te.y(It.Z),w(7393),w(377),w(5345),w(6682),w(8071),w(5435),w(5257),w(9761),w(3190),w(8307);class j{constructor(o,e,i){this.kind=o,this.value=e,this.error=i,this.hasValue="N"===o}observe(o){switch(this.kind){case"N":return o.next&&o.next(this.value);case"E":return o.error&&o.error(this.error);case"C":return o.complete&&o.complete()}}do(o,e,i){switch(this.kind){case"N":return o&&o(this.value);case"E":return e&&e(this.error);case"C":return i&&i()}}accept(o,e,i){return o&&"function"==typeof o.next?this.observe(o):this.do(o,e,i)}toObservable(){switch(this.kind){case"N":return(0,V.of)(this.value);case"E":return n=this.error,new te.y(e=>e.error(n));case"C":return(0,ne.c)()}var n;throw new Error("unexpected notification kind value")}static createNext(o){return void 0!==o?new j("N",o):j.undefinedValueNotification}static createError(o){return new j("E",void 0,o)}static createComplete(){return j.completeNotification}}j.completeNotification=new j("C"),j.undefinedValueNotification=new j("N",void 0),w(9773),w(8819),w(665),"undefined"!=typeof Element&&!Element.prototype.closest&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(n){let o=this;if(!document.documentElement.contains(o))return null;do{if(o.matches(n))return o;o=o.parentElement||o.parentNode}while(null!==o&&1===o.nodeType);return null});new Map;let bi=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();"undefined"!=typeof navigator&&navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent)),["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", "),new class{getAllStyles(o){return window.getComputedStyle(o)}getStyle(o,e){return this.getAllStyles(o)[e]}isStaticPositioned(o){return"static"===(this.getStyle(o,"position")||"static")}offsetParent(o){let e=o.offsetParent||document.documentElement;for(;e&&e!==document.documentElement&&this.isStaticPositioned(e);)e=e.offsetParent;return e||document.documentElement}position(o,e=!0){let i,s={width:0,height:0,top:0,bottom:0,left:0,right:0};if("fixed"===this.getStyle(o,"position"))i=o.getBoundingClientRect(),i={top:i.top,bottom:i.bottom,left:i.left,right:i.right,height:i.height,width:i.width};else{const a=this.offsetParent(o);i=this.offset(o,!1),a!==document.documentElement&&(s=this.offset(a,!1)),s.top+=a.clientTop,s.left+=a.clientLeft}return i.top-=s.top,i.bottom-=s.top,i.left-=s.left,i.right-=s.left,e&&(i.top=Math.round(i.top),i.bottom=Math.round(i.bottom),i.left=Math.round(i.left),i.right=Math.round(i.right)),i}offset(o,e=!0){const i=o.getBoundingClientRect(),s_top=window.pageYOffset-document.documentElement.clientTop,s_left=window.pageXOffset-document.documentElement.clientLeft;let a={height:i.height||o.offsetHeight,width:i.width||o.offsetWidth,top:i.top+s_top,bottom:i.bottom+s_top,left:i.left+s_left,right:i.right+s_left};return e&&(a.height=Math.round(a.height),a.width=Math.round(a.width),a.top=Math.round(a.top),a.bottom=Math.round(a.bottom),a.left=Math.round(a.left),a.right=Math.round(a.right)),a}positionElements(o,e,i,s){const[a="top",h="center"]=i.split("-"),g=s?this.offset(o,!1):this.position(o,!1),f=this.getAllStyles(e),_=parseFloat(f.marginTop),m=parseFloat(f.marginBottom),y=parseFloat(f.marginLeft),b=parseFloat(f.marginRight);let N=0,C=0;switch(a){case"top":N=g.top-(e.offsetHeight+_+m);break;case"bottom":N=g.top+g.height;break;case"left":C=g.left-(e.offsetWidth+y+b);break;case"right":C=g.left+g.width}switch(h){case"top":N=g.top;break;case"bottom":N=g.top+g.height-e.offsetHeight;break;case"left":C=g.left;break;case"right":C=g.left+g.width-e.offsetWidth;break;case"center":"top"===a||"bottom"===a?C=g.left+g.width/2-e.offsetWidth/2:N=g.top+g.height/2-e.offsetHeight/2}e.style.transform=`translate(${Math.round(C)}px, ${Math.round(N)}px)`;const M=e.getBoundingClientRect(),H=document.documentElement,J=window.innerHeight||H.clientHeight,Y=window.innerWidth||H.clientWidth;return M.left>=0&&M.top>=0&&M.right<=Y&&M.bottom<=J}},new Date(1882,10,12),new Date(2174,10,25),new t.OlP("live announcer delay",{providedIn:"root",factory:function(){return 100}});const la=[{path:"",component:Me,children:[{path:"",loadChildren:()=>w.e(103).then(w.bind(w,8103)).then(n=>n.HomeModule)},{path:"product",loadChildren:()=>w.e(512).then(w.bind(w,512)).then(n=>n.ProductModule)}]}];let da=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,Le.Bz.forChild(la),Ye.uH,bi]]}),n})()}}]);