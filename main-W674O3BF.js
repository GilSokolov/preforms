import{$ as $i,$a as d,$b as ti,$c as tc,A as Ir,Aa as on,Ab as Ee,B as kr,Ba as _l,Bb as kl,Bc as Kl,C as en,Ca as Ke,Cb as pe,Cc as gn,D as Ma,Da as Cl,Db as un,E as ol,Ea as xl,Eb as Re,Ec as Ql,F as Mr,Fa as Ra,Fb as Hi,Fc as ct,G as Rr,Ga as v,Gb as Ml,Gc as ni,H as We,Ha as ve,Hb as Rl,Hc as Ba,I as Ae,Ia as O,Ib as xe,Ic as Vr,J as ue,Ja as wl,Jb as $t,Jc as Zl,K as Te,Ka as S,Kb as Al,Kc as Yl,L as Se,La as St,Lb as Vi,Lc as Xl,M as al,Ma as Or,Mb as zr,Mc as dt,Na as El,Nb as Ye,Nc as Jl,O as P,Oa as Aa,Ob as X,Oc as ec,P as be,Pa as Fl,Pb as fn,Pc as qr,Q as sl,Qa as Dl,Qb as Nl,Qc as Gr,R as A,Ra as Tl,Rb as Ur,Rc as ae,S as tn,Sa as Sl,Sb as Jn,Sc as bn,T as c,Ta as Y,Tb as Pl,Tc as vn,U as ll,Ua as z,Ub as Na,Uc as Mt,V as nn,Va as U,Vb as ei,Vc as Ne,W as ot,Wa as Ce,Wb as Ol,Wc as qe,X as Ie,Xa as Nn,Xb as jr,Xc as za,Y as ke,Ya as ne,Yb as Pn,Yc as ii,Z as Lt,Za as ie,Zc as se,_ as at,_a as g,_b as Ll,_c as yn,a as Le,aa as cl,ab as p,ac as Bl,ad as ri,b as Js,ba as C,bb as F,bc as zl,bd as nc,c as dn,ca as fe,cb as Me,cc as Ul,cd as ic,d as $,da as Ar,db as Be,dc as $r,dd as oi,e as De,ea as Nr,eb as Xn,ec as jl,ed as le,f as je,fa as dl,fb as zt,fc as $l,fd as rc,g as $e,ga as Z,gb as Qe,gc as ze,gd as Wr,h as D,ha as ml,hb as Ut,hc as qi,hd as oc,i as Dr,ia as pl,ib as T,ic as Ve,j as Ia,ja as ul,jb as Lr,jc as Pa,k as el,ka as st,kb as x,kc as Oa,l as ee,la as k,lb as ye,lc as kt,m as tl,ma as fl,mb as he,mc as Gi,n as mn,na as te,nb as It,nc as Wi,o as nl,oa as Bt,ob as Ze,oc as La,p as Tr,pa as hl,pb as V,pc as Ht,q as il,qa as gl,qb as q,qc as an,ra as bl,rb as jt,rc as Ki,s as Sr,sa as rn,sb as Br,sc as hn,t as Qn,ta as vl,tb as re,tc as Hl,u as He,ua as yl,ub as oe,uc as Hr,v as ji,va as h,vb as b,vc as Vl,w as ka,wa as Yn,wb as j,x as Zn,xa as lt,xb as _e,xc as ql,y as pn,ya as Pr,yb as Il,yc as Gl,z as rl,za as Tt,zb as B,zc as Wl}from"./chunk-ID377JJW.js";import{a as m,b as _,d as Xs,h as H,i as R}from"./chunk-PGHOU3HN.js";var ac=new Set,On,Ua=(()=>{class n{_platform=c(ze);_nonce=c(bl,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Tp}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Dp(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Dp(n,i){if(!ac.has(n))try{On||(On=document.createElement("style"),i&&On.setAttribute("nonce",i),On.setAttribute("type","text/css"),document.head.appendChild(On)),On.sheet&&(On.sheet.insertRule(`@media ${n} {body{ }}`,0),ac.add(n))}catch(e){console.error(e)}}function Tp(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Sp=new A("MATERIAL_ANIMATIONS"),sc=null;function Ip(){return c(Sp,{optional:!0})?.animationsDisabled||c(gl,{optional:!0})==="NoopAnimations"?"di-disabled":(sc??=c(Ua).matchMedia("(prefers-reduced-motion)").matches,sc?"reduced-motion":"enabled")}function mt(){return Ip()!=="enabled"}var ja=new A("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>c(Rl)}),ai="Method not implemented",Qi=class{locale;_localeChanges=new $;localeChanges=this._localeChanges;setTime(i,e,t,r){throw new Error(ai)}getHours(i){throw new Error(ai)}getMinutes(i){throw new Error(ai)}getSeconds(i){throw new Error(ai)}parseTime(i,e){throw new Error(ai)}addSeconds(i,e){throw new Error(ai)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareDate(i,e):t==r}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareTime(i,e):t==r}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},lc=new A("mat-date-formats");var Kr=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var si=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus-visible::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}
`],encapsulation:2,changeDetection:0})}return n})();var Zi;function cc(){if(Zi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Zi=!0}))}finally{Zi=Zi||!1}return Zi}function li(n){return cc()?n:!!n.capture}var dc=new A("cdk-input-modality-detector-options"),mc={ignoreKeys:[18,17,224,91,16]},pc=650,$a={passive:!0,capture:!0},uc=(()=>{class n{_platform=c(ze);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new De(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=kt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<pc||(this._modality.next(Gi(e)?"keyboard":"mouse"),this._mostRecentTarget=kt(e))};_onTouchstart=e=>{if(Wi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=kt(e)};constructor(){let e=c(fe),t=c(at),r=c(dc,{optional:!0});if(this._options=m(m({},mc),r),this.modalityDetected=this._modality.pipe(Rr(1)),this.modalityChanged=this.modalityDetected.pipe(Ir()),this._platform.isBrowser){let o=c(Pr).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,$a),o.listen(t,"mousedown",this._onMousedown,$a),o.listen(t,"touchstart",this._onTouchstart,$a)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Yi=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Yi||{}),fc=new A("cdk-focus-monitor-default-options"),Qr=li({passive:!0,capture:!0}),Ln=(()=>{class n{_ngZone=c(fe);_platform=c(ze);_inputModalityDetector=c(uc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(at);_stopInputModalityDetector=new $;constructor(){let e=c(fc,{optional:!0});this._detectionMode=e?.detectionMode||Yi.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=kt(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Ht(e);if(!this._platform.isBrowser||r.nodeType!==1)return D();let o=Pa(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new $,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=Ht(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Ht(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Yi.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Yi.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?pc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=kt(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Qr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Qr)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ue(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Qr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Qr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ha=(()=>{class n{_elementRef=c(te);_focusMonitor=c(Ln);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new C;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var hc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}
`],encapsulation:2,changeDetection:0})}return n})(),Zr;function kp(){if(Zr===void 0&&(Zr=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Zr=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Zr}function ci(n){return kp()?.createHTML(n)||n}function Mp(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Rp=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ap=(()=>{class n{_mutationObserverFactory=c(Rp);_observedElements=new Map;_ngZone=c(fe);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Ht(e);return new dn(r=>{let a=this._observeElement(t).pipe(ee(s=>s.filter(l=>!Mp(l))),He(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new $,r=this._mutationObserverFactory.create(o=>t.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gc=(()=>{class n{_contentObserver=c(Ap);_elementRef=c(te);event=new C;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=La(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Zn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",X],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})();var Np=200,Yr=class{_letterKeyStream=new $;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new $;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Np;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Te(e=>this._pressedLetters.push(e)),Zn(i),He(()=>this._pressedLetters.length>0),ee(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function di(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Xr=class{_items;_activeItemIndex=Z(-1);_activeItem=Z(null);_wrap=!1;_typeaheadSubscription=Le.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Bt?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Aa(i)&&(this._effectRef=ml(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new $;change=new $;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Yr(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||di(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Aa(this._items)?this._items():this._items instanceof Bt?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Bn=class extends Xr{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var pt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(pt||{}),Va=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=pt.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},bc=li({passive:!0,capture:!0}),qa=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,bc)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,bc)))}_delegateEventHandler=i=>{let e=kt(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Xi={enterDuration:225,exitDuration:150},Pp=800,vc=li({passive:!0,capture:!0}),yc=["mousedown","touchstart"],_c=["mouseup","mouseleave","touchend","touchcancel"],Op=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}
`],encapsulation:2,changeDetection:0})}return n})(),Ji=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new qa;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ht(t)),o&&o.get(an).load(Op)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},Xi),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Lp(i,e,r),s=i-r.left,l=e-r.top,u=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${l-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(f);let y=window.getComputedStyle(f),E=y.transitionProperty,Q=y.transitionDuration,I=E==="none"||Q==="0s"||Q==="0s, 0s"||r.width===0&&r.height===0,me=new Va(this,f,t,I);f.style.transform="scale3d(1, 1, 1)",me.state=pt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=me);let Ge=null;return!I&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Xt=()=>{Ge&&(Ge.fallbackTimer=null),clearTimeout(Jt),this._finishRippleTransition(me)},rt=()=>this._destroyRipple(me),Jt=setTimeout(rt,u+100);f.addEventListener("transitionend",Xt),f.addEventListener("transitioncancel",rt),Ge={onTransitionEnd:Xt,onTransitionCancel:rt,fallbackTimer:Jt}}),this._activeRipples.set(me,Ge),(I||!u)&&this._finishRippleTransition(me),me}fadeOutRipple(i){if(i.state===pt.FADING_OUT||i.state===pt.HIDDEN)return;let e=i.element,t=m(m({},Xi),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=pt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Ht(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,yc.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{_c.forEach(e=>{this._triggerElement.addEventListener(e,this,vc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===pt.FADING_IN?this._startFadeOutTransition(i):i.state===pt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=pt.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=pt.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Gi(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Pp;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Wi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===pt.VISIBLE||i.config.terminateOnPointerUp&&i.state===pt.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(yc.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(_c.forEach(e=>i.removeEventListener(e,this,vc)),this._pointerUpEventsRegistered=!1))}};function Lp(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Jr=new A("mat-ripple-global-options"),er=(()=>{class n{_elementRef=c(te);_animationsDisabled=mt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(fe),t=c(ze),r=c(Jr,{optional:!0}),o=c(Lt);this._globalOptions=r||{},this._rippleRenderer=new Ji(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:m(m(m({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,m(m({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,m(m({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&re("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var eo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[Ve]})}return n})();var Bp={capture:!0},zp=["focus","mousedown","mouseenter","touchstart"],Ga="mat-ripple-loader-uninitialized",Wa="mat-ripple-loader-class-name",Cc="mat-ripple-loader-centered",to="mat-ripple-loader-disabled",xc=(()=>{class n{_document=c(at);_animationsDisabled=mt();_globalRippleOptions=c(Jr,{optional:!0});_platform=c(ze);_ngZone=c(fe);_injector=c(Lt);_eventCleanups;_hosts=new Map;constructor(){let e=c(Pr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>zp.map(t=>e.listen(this._document,t,this._onInteraction,Bp)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ga,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Wa))&&e.setAttribute(Wa,t.className||""),t.centered&&e.setAttribute(Cc,""),t.disabled&&e.setAttribute(to,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(to,""):e.removeAttribute(to)}_onInteraction=e=>{let t=kt(e);if(t instanceof HTMLElement){let r=t.closest(`[${Ga}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Wa)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Xi.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Xi.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(to),rippleConfig:{centered:e.hasAttribute(Cc),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Ji(s,this._ngZone,t,this._platform,this._injector),u=!s.rippleDisabled;u&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:u}),e.removeAttribute(Ga)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Up=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,jp=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Ka(n,i){let e=Array(n);for(let t=0;t<n;t++)e[t]=i(t);return e}var $p=(()=>{class n extends Qi{_matDateLocale=c(ja,{optional:!0});constructor(){super();let e=c(ja,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Ka(12,r=>this._format(t,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Ka(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Ka(7,r=>this._format(t,new Date(2017,0,r+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,r){let o=this._createDateWithOverflow(e,t,r);return o.getMonth()!=t,o}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,_(m({},t),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+t)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(Up.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,r,o){let a=this.clone(e);return a.setHours(t,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,r){let o=new Date;return o.setFullYear(e,t,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let r=new Date;return r.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),r.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(r)}_parseTimeString(e){let t=e.toUpperCase().match(jp);if(t){let r=parseInt(t[1]),o=parseInt(t[2]),a=t[3]==null?void 0:parseInt(t[3]),s=t[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),Qa(r,0,23)&&Qa(o,0,59)&&(a==null||Qa(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac})}return n})();function Qa(n,i,e){return!isNaN(n)&&n>=i&&n<=e}var Hp={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function wc(n=Hp){return[{provide:Qi,useClass:$p},{provide:lc,useValue:n}]}var M="primary",fr=Symbol("RouteTitle"),es=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Un(n){return new es(n)}function Za(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Mc(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let l={},u=n.slice(0,t.length);return Za(t,u,l)?{consumed:u,posParams:l}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Za(o,n.slice(0,o.length),s)||!Za(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function so(n){return new Promise((i,e)=>{n.pipe(en()).subscribe({next:t=>i(t),error:t=>e(t)})})}function qp(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Vt(n[e],i[e]))return!1;return!0}function Vt(n,i){let e=n?ts(n):void 0,t=i?ts(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Rc(n[r],i[r]))return!1;return!0}function ts(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Rc(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function Gp(n){return n.length>0?n[n.length-1]:null}function Hn(n){return Ia(n)?n:Fl(n)?$e(Promise.resolve(n)):D(n)}function Ac(n){return Ia(n)?so(n):Promise.resolve(n)}var Wp={exact:Oc,subset:Lc},Nc={exact:Kp,subset:Qp,ignored:()=>!0},Pc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ns={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ec(n,i,e){return Wp[e.paths](n.root,i.root,e.matrixParams)&&Nc[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function Kp(n,i){return Vt(n,i)}function Oc(n,i,e){if(!zn(n.segments,i.segments)||!ro(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Oc(n.children[t],i.children[t],e))return!1;return!0}function Qp(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Rc(n[e],i[e]))}function Lc(n,i,e){return Bc(n,i,i.segments,e)}function Bc(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!zn(r,e)||i.hasChildren()||!ro(r,e,t))}else if(n.segments.length===e.length){if(!zn(n.segments,e)||!ro(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Lc(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!zn(n.segments,r)||!ro(n.segments,r,t)||!n.children[M]?!1:Bc(n.children[M],i,o,t)}}function ro(n,i,e){return i.every((t,r)=>Nc[e](n[r].parameters,t.parameters))}var Je=class{root;queryParams;fragment;_queryParamMap;constructor(i=new J([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=Un(this.queryParams),this._queryParamMap}toString(){return Xp.serialize(this)}},J=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return oo(this)}},_n=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Un(this.parameters),this._parameterMap}toString(){return Uc(this)}};function Zp(n,i){return zn(n,i)&&n.every((e,t)=>Vt(e.parameters,i[t].parameters))}function zn(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function Yp(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===M&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==M&&(e=e.concat(i(r,t)))}),e}var yi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:()=>new Cn,providedIn:"root"})}return n})(),Cn=class{parse(i){let e=new rs(i);return new Je(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${tr(i.root,!0)}`,t=tu(i.queryParams),r=typeof i.fragment=="string"?`#${Jp(i.fragment)}`:"";return`${e}${t}${r}`}},Xp=new Cn;function oo(n){return n.segments.map(i=>Uc(i)).join("/")}function tr(n,i){if(!n.hasChildren())return oo(n);if(i){let e=n.children[M]?tr(n.children[M],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==M&&t.push(`${r}:${tr(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Yp(n,(t,r)=>r===M?[tr(n.children[M],!1)]:[`${r}:${tr(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[M]!=null?`${oo(n)}/${e[0]}`:`${oo(n)}/(${e.join("//")})`}}function zc(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function no(n){return zc(n).replace(/%3B/gi,";")}function Jp(n){return encodeURI(n)}function is(n){return zc(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ao(n){return decodeURIComponent(n)}function Fc(n){return ao(n.replace(/\+/g,"%20"))}function Uc(n){return`${is(n.path)}${eu(n.parameters)}`}function eu(n){return Object.entries(n).map(([i,e])=>`;${is(i)}=${is(e)}`).join("")}function tu(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${no(e)}=${no(r)}`).join("&"):`${no(e)}=${no(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var nu=/^[^\/()?;#]+/;function Ya(n){let i=n.match(nu);return i?i[0]:""}var iu=/^[^\/()?;=#]+/;function ru(n){let i=n.match(iu);return i?i[0]:""}var ou=/^[^=?&#]+/;function au(n){let i=n.match(ou);return i?i[0]:""}var su=/^[^&#]+/;function lu(n){let i=n.match(su);return i?i[0]:""}var rs=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new J([],{}):new J([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new Se(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[M]=new J(e,t)),r}parseSegment(){let i=Ya(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new Se(4009,!1);return this.capture(i),new _n(ao(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=ru(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=Ya(this.remaining);r&&(t=r,this.capture(t))}i[ao(e)]=ao(t)}parseQueryParam(i){let e=au(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=lu(this.remaining);a&&(t=a,this.capture(t))}let r=Fc(e),o=Fc(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Ya(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new Se(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=M);let s=this.parseChildren(e+1);t[a??M]=Object.keys(s).length===1&&s[M]?s[M]:new J([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new Se(4011,!1)}};function jc(n){return n.segments.length>0?new J([],{[M]:n}):n}function $c(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=$c(r);if(t===M&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new J(n.segments,i);return cu(e)}function cu(n){if(n.numberOfChildren===1&&n.children[M]){let i=n.children[M];return new J(n.segments.concat(i.segments),i.children)}return n}function xn(n){return n instanceof Je}function Hc(n,i,e=null,t=null,r=new Cn){let o=Vc(n);return qc(o,i,e,t,r)}function Vc(n){let i;function e(o){let a={};for(let l of o.children){let u=e(l);a[l.outlet]=u}let s=new J(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=jc(t);return i??r}function qc(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Xa(o,o,o,e,t,r);let a=du(i);if(a.toRoot())return Xa(o,o,new J([],{}),e,t,r);let s=mu(a,o,n),l=s.processChildren?ir(s.segmentGroup,s.index,a.commands):Wc(s.segmentGroup,s.index,a.commands);return Xa(o,s.segmentGroup,l,e,t,r)}function lo(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ar(n){return typeof n=="object"&&n!=null&&n.outlets}function Dc(n,i,e){n||="\u0275";let t=new Je;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Xa(n,i,e,t,r,o){let a={};for(let[u,f]of Object.entries(t??{}))a[u]=Array.isArray(f)?f.map(y=>Dc(u,y,o)):Dc(u,f,o);let s;n===i?s=e:s=Gc(n,i,e);let l=jc($c(s));return new Je(l,a,r)}function Gc(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Gc(o,i,e)}),new J(n.segments,t)}var co=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&lo(t[0]))throw new Se(4003,!1);let r=t.find(ar);if(r&&r!==Gp(t))throw new Se(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function du(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new co(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,u])=>{s[l]=typeof u=="string"?u.split("/"):u}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new co(e,i,t)}var pi=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function mu(n,i,e){if(n.isAbsolute)return new pi(i,!0,0);if(!e)return new pi(i,!1,NaN);if(e.parent===null)return new pi(e,!0,0);let t=lo(n.commands[0])?0:1,r=e.segments.length-1+t;return pu(e,r,n.numberOfDoubleDots)}function pu(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new Se(4005,!1);r=t.segments.length}return new pi(t,!1,r-o)}function uu(n){return ar(n[0])?n[0].outlets:{[M]:n}}function Wc(n,i,e){if(n??=new J([],{}),n.segments.length===0&&n.hasChildren())return ir(n,i,e);let t=fu(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new J(n.segments.slice(0,t.pathIndex),{});return o.children[M]=new J(n.segments.slice(t.pathIndex),n.children),ir(o,0,r)}else return t.match&&r.length===0?new J(n.segments,{}):t.match&&!n.hasChildren()?os(n,i,e):t.match?ir(n,0,r):os(n,i,e)}function ir(n,i,e){if(e.length===0)return new J(n.segments,{});{let t=uu(e),r={};if(Object.keys(t).some(o=>o!==M)&&n.children[M]&&n.numberOfChildren===1&&n.children[M].segments.length===0){let o=ir(n.children[M],i,e);return new J(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Wc(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new J(n.segments,r)}}function fu(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(ar(s))break;let l=`${s}`,u=t<e.length-1?e[t+1]:null;if(r>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!Sc(l,u,a))return o;t+=2}else{if(!Sc(l,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function os(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(ar(o)){let l=hu(o.outlets);return new J(t,l)}if(r===0&&lo(e[0])){let l=n.segments[i];t.push(new _n(l.path,Tc(e[0]))),r++;continue}let a=ar(o)?o.outlets[M]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&lo(s)?(t.push(new _n(a,Tc(s))),r+=2):(t.push(new _n(a,{})),r++)}return new J(t,{})}function hu(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=os(new J([],{}),0,t))}),i}function Tc(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Sc(n,i,e){return n==e.path&&Vt(i,e.parameters)}var rr="imperative",Fe=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Fe||{}),et=class{id;url;constructor(i,e){this.id=i,this.url=e}},jn=class extends et{type=Fe.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Gt=class extends et{urlAfterRedirects;type=Fe.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Pe=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Pe||{}),sr=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(sr||{}),ut=class extends et{reason;code;type=Fe.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Kc(n){return n instanceof ut&&(n.code===Pe.Redirect||n.code===Pe.SupersededByNewNavigation)}var ln=class extends et{reason;code;type=Fe.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},$n=class extends et{error;target;type=Fe.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},lr=class extends et{urlAfterRedirects;state;type=Fe.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mo=class extends et{urlAfterRedirects;state;type=Fe.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},po=class extends et{urlAfterRedirects;state;shouldActivate;type=Fe.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},uo=class extends et{urlAfterRedirects;state;type=Fe.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fo=class extends et{urlAfterRedirects;state;type=Fe.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ho=class{route;type=Fe.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},go=class{route;type=Fe.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},bo=class{snapshot;type=Fe.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vo=class{snapshot;type=Fe.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yo=class{snapshot;type=Fe.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_o=class{snapshot;type=Fe.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var fi=class{},cr=class{},hi=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function gu(n){return!(n instanceof fi)&&!(n instanceof hi)&&!(n instanceof cr)}var Co=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new _i(this.rootInjector)}},_i=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Co(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(tn(nn))};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xo=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=as(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=as(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ss(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ss(i,this._root).map(e=>e.value)}};function as(n,i){if(n===i.value)return i;for(let e of i.children){let t=as(n,e);if(t)return t}return null}function ss(n,i){if(n===i.value)return[i];for(let e of i.children){let t=ss(n,e);if(t.length)return t.unshift(i),t}return[]}var Xe=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function mi(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var dr=class extends xo{snapshot;constructor(i,e){super(i),this.snapshot=e,gs(this,i)}toString(){return this.snapshot.toString()}};function Qc(n,i){let e=bu(n,i),t=new De([new _n("",{})]),r=new De({}),o=new De({}),a=new De({}),s=new De(""),l=new Rt(t,r,a,s,o,M,n,e.root);return l.snapshot=e.root,new dr(new Xe(l,[]),e)}function bu(n,i){let e={},t={},r={},a=new gi([],e,r,"",t,M,n,null,{},i);return new mr("",new Xe(a,[]))}var Rt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ee(u=>u[fr]))??D(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ee(i=>Un(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ee(i=>Un(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function hs(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:m(m({},i.params),n.params),data:m(m({},i.data),n.data),resolve:m(m(m(m({},n.data),i.data),r?.data),n._resolvedData)}:t={params:m({},n.params),data:m({},n.data),resolve:m(m({},n.data),n._resolvedData??{})},r&&Yc(r)&&(t.resolve[fr]=r.title),t}var gi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[fr]}constructor(i,e,t,r,o,a,s,l,u,f){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=u,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Un(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Un(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},mr=class extends xo{url;constructor(i,e){super(e),this.url=i,gs(this,e)}toString(){return Zc(this._root)}};function gs(n,i){i.value._routerState=n,i.children.forEach(e=>gs(n,e))}function Zc(n){let i=n.children.length>0?` { ${n.children.map(Zc).join(", ")} } `:"";return`${n.value}${i}`}function Ja(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Vt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Vt(i.params,e.params)||n.paramsSubject.next(e.params),qp(i.url,e.url)||n.urlSubject.next(e.url),Vt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ls(n,i){let e=Vt(n.params,i.params)&&Zp(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||ls(n.parent,i.parent))}function Yc(n){return typeof n.title=="string"||n.title===null}var Xc=new A(""),hr=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=M;activateEvents=new C;deactivateEvents=new C;attachEvents=new C;detachEvents=new C;routerOutletData=zr();parentContexts=c(_i);location=c(Ke);changeDetector=c(Ye);inputBinder=c(Do,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Se(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Se(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Se(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Se(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new cs(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[st]})}return n})(),cs=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===Rt?this.route:i===_i?this.childContexts:i===Xc?this.outletData:this.parent.get(i,e)}},Do=new A("");var bs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&F(0,"router-outlet")},dependencies:[hr],encapsulation:2})}return n})();function vs(n){let i=n.children&&n.children.map(vs),e=i?_(m({},n),{children:i}):m({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==M&&(e.component=bs),e}function vu(n,i,e){let t=pr(n,i._root,e?e._root:void 0);return new dr(t,i)}function pr(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=yu(n,i,e);return new Xe(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>pr(n,s)),a}}let t=_u(i.value),r=i.children.map(o=>pr(n,o));return new Xe(t,r)}}function yu(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return pr(n,t,r);return pr(n,t)})}function _u(n){return new Rt(new De(n.url),new De(n.params),new De(n.queryParams),new De(n.fragment),new De(n.data),n.outlet,n.component,n)}var bi=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Jc="ngNavigationCancelingError";function wo(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=xn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ed(!1,Pe.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function ed(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Jc]=!0,e.cancellationCode=i,e}function Cu(n){return td(n)&&xn(n.url)}function td(n){return!!n&&n[Jc]}var ds=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Ja(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=mi(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=mi(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=mi(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=mi(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new _o(o.value.snapshot))}),i.children.length&&this.forwardEvent(new vo(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Ja(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Ja(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},Eo=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},ui=class{component;route;constructor(i,e){this.component=i,this.route=e}};function xu(n,i,e){let t=n._root,r=i?i._root:null;return nr(t,r,e,[t.value])}function wu(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Ci(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!sl(n)?n:i.get(n):t}function nr(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=mi(i);return n.children.forEach(a=>{Eu(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>or(s,e.getContext(a),r)),r}function Eu(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Fu(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Eo(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?nr(n,i,s?s.children:null,t,r):nr(n,i,e,t,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ui(s.outlet.component,a))}else a&&or(i,s,r),r.canActivateChecks.push(new Eo(t)),o.component?nr(n,null,s?s.children:null,t,r):nr(n,null,e,t,r);return r}function Fu(n,i,e){if(typeof e=="function")return ot(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!zn(n.url,i.url);case"pathParamsOrQueryParamsChange":return!zn(n.url,i.url)||!Vt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ls(n,i)||!Vt(n.queryParams,i.queryParams);default:return!ls(n,i)}}function or(n,i,e){let t=mi(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?or(a,i.children.getContext(o),e):or(a,null,e):or(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new ui(i.outlet.component,r)):e.canDeactivateChecks.push(new ui(null,r)):e.canDeactivateChecks.push(new ui(null,r))}function gr(n){return typeof n=="function"}function Du(n){return typeof n=="boolean"}function Tu(n){return n&&gr(n.canLoad)}function Su(n){return n&&gr(n.canActivate)}function Iu(n){return n&&gr(n.canActivateChild)}function ku(n){return n&&gr(n.canDeactivate)}function Mu(n){return n&&gr(n.canMatch)}function nd(n){return n instanceof el||n?.name==="EmptyError"}var io=Symbol("INITIAL_VALUE");function vi(){return Ae(n=>tl(n.map(i=>i.pipe(pn(1),We(io)))).pipe(ee(i=>{for(let e of i)if(e!==!0){if(e===io)return io;if(e===!1||Ru(e))return e}return!0}),He(i=>i!==io),pn(1)))}function Ru(n){return xn(n)||n instanceof bi}function id(n){return n.aborted?D(void 0).pipe(pn(1)):new dn(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function rd(n){return ue(id(n))}function Au(n){return mn(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?D(_(m({},i),{guardsResult:!0})):Nu(o,e,t).pipe(mn(a=>a&&Du(a)?Pu(e,r,n):D(a)),ee(a=>_(m({},i),{guardsResult:a})))})}function Nu(n,i,e){return $e(n).pipe(mn(t=>Uu(t.component,t.route,e,i)),en(t=>t!==!0,!0))}function Pu(n,i,e){return $e(i).pipe(ka(t=>nl(Lu(t.route.parent,e),Ou(t.route,e),zu(n,t.path),Bu(n,t.route))),en(t=>t!==!0,!0))}function Ou(n,i){return n!==null&&i&&i(new yo(n)),D(!0)}function Lu(n,i){return n!==null&&i&&i(new bo(n)),D(!0)}function Bu(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return D(!0);let t=e.map(r=>Tr(()=>{let o=i._environmentInjector,a=Ci(r,o),s=Su(a)?a.canActivate(i,n):ot(o,()=>a(i,n));return Hn(s).pipe(en())}));return D(t).pipe(vi())}function zu(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>wu(o)).filter(o=>o!==null).map(o=>Tr(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,u=Ci(s,l),f=Iu(u)?u.canActivateChild(e,n):ot(l,()=>u(e,n));return Hn(f).pipe(en())});return D(a).pipe(vi())}));return D(r).pipe(vi())}function Uu(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return D(!0);let o=r.map(a=>{let s=i._environmentInjector,l=Ci(a,s),u=ku(l)?l.canDeactivate(n,i,e,t):ot(s,()=>l(n,i,e,t));return Hn(u).pipe(en())});return D(o).pipe(vi())}function ju(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return D(!0);let a=o.map(s=>{let l=Ci(s,n),u=Tu(l)?l.canLoad(i,e):ot(n,()=>l(i,e)),f=Hn(u);return r?f.pipe(rd(r)):f});return D(a).pipe(vi(),od(t))}function od(n){return Js(Te(i=>{if(typeof i!="boolean")throw wo(n,i)}),ee(i=>i===!0))}function $u(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return D(!0);let s=a.map(l=>{let u=Ci(l,n),f=Mu(u)?u.canMatch(i,e,r):ot(n,()=>u(i,e,r));return Hn(f).pipe(rd(o))});return D(s).pipe(vi(),od(t))}var sn=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},ur=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Hu(n){throw new Se(4e3,!1)}function Vu(n){throw ed(!1,Pe.GuardRejected)}var ms=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[M])throw Hu(`${i.redirectTo}`);r=r.children[M]}}async applyRedirectCommands(i,e,t,r,o){let a=await qu(e,r,o);if(a instanceof Je)throw new ur(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new ur(s);return s}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new Je(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,t,r)}),new J(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new Se(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function qu(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return so(Hn(ot(e,()=>t(i))))}function Gu(n,i){return n.providers&&!n._injector&&(n._injector=Ra(n.providers,i,`Route: ${n.path}`)),n._injector??i}function qt(n){return n.outlet||M}function Wu(n,i){let e=n.filter(t=>qt(t)===i);return e.push(...n.filter(t=>qt(t)!==i)),e}var ps={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ad(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Ku(n,i,e,t,r,o,a){let s=sd(n,i,e);if(!s.matched)return D(s);let l=ad(o(s));return t=Gu(i,t),$u(t,i,e,r,l,a).pipe(ee(u=>u===!0?s:m({},ps)))}function sd(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?m({},ps):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Mc)(e,n,i);if(!r)return m({},ps);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?m(m({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Ic(n,i,e,t){return e.length>0&&Yu(n,e,t)?{segmentGroup:new J(i,Zu(t,new J(e,n.children))),slicedSegments:[]}:e.length===0&&Xu(n,e,t)?{segmentGroup:new J(n.segments,Qu(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new J(n.segments,n.children),slicedSegments:e}}function Qu(n,i,e,t){let r={};for(let o of e)if(To(n,i,o)&&!t[qt(o)]){let a=new J([],{});r[qt(o)]=a}return m(m({},t),r)}function Zu(n,i){let e={};e[M]=i;for(let t of n)if(t.path===""&&qt(t)!==M){let r=new J([],{});e[qt(t)]=r}return e}function Yu(n,i,e){return e.some(t=>To(n,i,t)&&qt(t)!==M)}function Xu(n,i,e){return e.some(t=>To(n,i,t))}function To(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Ju(n,i,e){return i.length===0&&!n.children[e]}var us=class{};async function ef(n,i,e,t,r,o,a="emptyOnly",s){return new fs(n,i,e,t,r,a,o,s).recognize()}var tf=31,fs=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new ms(this.urlSerializer,this.urlTree)}noMatchError(i){return new Se(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Ic(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new Xe(t,e),o=new mr("",r),a=Hc(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new gi([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,M,e),rootSnapshot:e}}catch(t){if(t instanceof ur)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof sn?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof Xe?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let l of Object.keys(t.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let u=t.children[l],f=Wu(e,l),y=await this.processSegmentGroup(i,f,u,l,r);a.push(...y)}let s=ld(a);return nf(s),s}async processSegment(i,e,t,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??i,e,l,t,r,o,a,s)}catch(u){if(u instanceof sn||nd(u))continue;throw u}if(Ju(t,r,o))return new us;throw new sn(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,s,l){if(qt(t)!==a&&(a===M||!To(r,o,t)))throw new sn(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,l);throw new sn(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){let{matched:l,parameters:u,consumedSegments:f,positionalParamSegments:y,remainingSegments:E}=sd(e,r,o);if(!l)throw new sn(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>tf&&(this.allowRedirects=!1));let Q=this.createSnapshot(i,r,o,u,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let I=await this.applyRedirects.applyRedirectCommands(f,r.redirectTo,y,ad(Q),i),me=await this.applyRedirects.lineralizeSegments(r,I);return this.processSegment(i,t,e,me.concat(E),a,!1,s)}createSnapshot(i,e,t,r,o){let a=new gi(t,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,of(e),qt(e),e.component??e._loadedComponent??null,e,af(e),i),s=hs(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Jt=>this.createSnapshot(i,t,Jt.consumedSegments,Jt.parameters,a),l=await so(Ku(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!l?.matched)throw new sn(e);i=t._injector??i;let{routes:u}=await this.getChildConfig(i,t,r),f=t._loadedInjector??i,{parameters:y,consumedSegments:E,remainingSegments:Q}=l,I=this.createSnapshot(i,t,E,y,a),{segmentGroup:me,slicedSegments:Ge}=Ic(e,E,Q,u);if(Ge.length===0&&me.hasChildren()){let Jt=await this.processChildren(f,u,me,I);return new Xe(I,Jt)}if(u.length===0&&Ge.length===0)return new Xe(I,[]);let Xt=qt(t)===o,rt=await this.processSegment(f,u,me,Ge,Xt?M:o,!0,I);return new Xe(I,rt instanceof Xe?[rt]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await so(ju(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Vu(e)}return{routes:[],injector:i}}};function nf(n){n.sort((i,e)=>i.value.outlet===M?-1:e.value.outlet===M?1:i.value.outlet.localeCompare(e.value.outlet))}function rf(n){let i=n.value.routeConfig;return i&&i.path===""}function ld(n){let i=[],e=new Set;for(let t of n){if(!rf(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=ld(t.children);i.push(new Xe(t.value,r))}return i.filter(t=>!e.has(t))}function of(n){return n.data||{}}function af(n){return n.resolve||{}}function sf(n,i,e,t,r,o,a){return mn(async s=>{let{state:l,tree:u}=await ef(n,i,e,t,s.extractedUrl,r,o,a);return _(m({},s),{targetSnapshot:l,urlAfterRedirects:u})})}function lf(n){return mn(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return D(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of cd(s))o.add(l);let a=0;return $e(o).pipe(ka(s=>r.has(s)?cf(s,e,n):(s.data=hs(s,s.parent,n).resolve,D(void 0))),Te(()=>a++),Ma(1),mn(s=>a===o.size?D(i):je))})}function cd(n){let i=n.children.map(e=>cd(e)).flat();return[n,...i]}function cf(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!Yc(t)&&(r[fr]=t.title),Tr(()=>(n.data=hs(n,n.parent,e).resolve,df(r,n,i).pipe(ee(o=>(n._resolvedData=o,n.data=m(m({},n.data),o),null)))))}function df(n,i,e){let t=ts(n);if(t.length===0)return D({});let r={};return $e(t).pipe(mn(o=>mf(n[o],i,e).pipe(en(),Te(a=>{if(a instanceof bi)throw wo(new Cn,a);r[o]=a}))),Ma(1),ee(()=>r),ji(o=>nd(o)?je:Dr(o)))}function mf(n,i,e){let t=i._environmentInjector,r=Ci(n,t),o=r.resolve?r.resolve(i,e):ot(t,()=>r(i,e));return Hn(o)}function kc(n){return Ae(i=>{let e=n(i);return e?$e(e).pipe(ee(()=>i)):D(i)})}var ys=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===M);return t}getResolvedTitleForRoute(e){return e.data[fr]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:()=>c(dd),providedIn:"root"})}return n})(),dd=(()=>{class n extends ys{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(tn(Ul))};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xi=new A("",{factory:()=>({})}),br=new A(""),md=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(Ml);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Ac(ot(e,()=>t.loadComponent())),a=await fd(ud(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await pd(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function pd(n,i,e,t){let r=await Ac(ot(e,()=>n.loadChildren())),o=await fd(ud(r)),a;o instanceof xl||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let s,l,u=!1,f;return Array.isArray(a)?(l=a,u=!0):(s=a.create(e).injector,f=a,l=s.get(br,[],{optional:!0,self:!0}).flat()),{routes:l.map(vs),injector:s,factory:f}}function pf(n){return n&&typeof n=="object"&&"default"in n}function ud(n){return pf(n)?n.default:n}async function fd(n){return n}var So=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:()=>c(uf),providedIn:"root"})}return n})(),uf=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),hd=new A("");var ff=()=>{},gd=new A(""),bd=(()=>{class n{currentNavigation=Z(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Z(null);events=new $;transitionAbortWithErrorSubject=new $;configLoader=c(md);environmentInjector=c(nn);destroyRef=c($i);urlSerializer=c(yi);rootContexts=c(_i);location=c(Ur);inputBindingEnabled=c(Do,{optional:!0})!==null;titleStrategy=c(ys);options=c(xi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(So);createViewTransition=c(hd,{optional:!0});navigationErrorHandler=c(gd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>D(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ho(r)),t=r=>this.events.next(new go(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;xe(()=>{this.transitions?.next(_(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new De(null),this.transitions.pipe(He(t=>t!==null),Ae(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return D(t).pipe(Ae(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Pe.SupersededByNewNavigation),je;this.currentTransition=t;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?_(m({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&f!=="reload")return this.events.next(new ln(s.id,this.urlSerializer.serialize(s.rawUrl),"",sr.IgnoredSameUrlNavigation)),s.resolve(!1),je;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return D(s).pipe(Ae(y=>(this.events.next(new jn(y.id,this.urlSerializer.serialize(y.extractedUrl),y.source,y.restoredState)),y.id!==this.navigationId?je:Promise.resolve(y))),sf(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Te(y=>{t.targetSnapshot=y.targetSnapshot,t.urlAfterRedirects=y.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=y.urlAfterRedirects,E)),this.events.next(new cr)}),Ae(y=>$e(t.routesRecognizeHandler.deferredHandle??D(void 0)).pipe(ee(()=>y))),Te(()=>{let y=new lr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:y,extractedUrl:E,source:Q,restoredState:I,extras:me}=s,Ge=new jn(y,this.urlSerializer.serialize(E),Q,I);this.events.next(Ge);let Xt=Qc(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=_(m({},s),{targetSnapshot:Xt,urlAfterRedirects:E,extras:_(m({},me),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(rt=>(rt.finalUrl=E,rt)),D(t)}else return this.events.next(new ln(s.id,this.urlSerializer.serialize(s.extractedUrl),"",sr.IgnoredByUrlHandlingStrategy)),s.resolve(!1),je}),ee(s=>{let l=new mo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=t=_(m({},s),{guards:xu(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Au(s=>this.events.next(s)),Ae(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw wo(this.urlSerializer,s.guardsResult);let l=new po(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return je;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Pe.GuardRejected),je;if(s.guards.canActivateChecks.length===0)return D(s);let u=new uo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!a())return je;let f=!1;return D(s).pipe(lf(this.paramsInheritanceStrategy),Te({next:()=>{f=!0;let y=new fo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)},complete:()=>{f||this.cancelNavigationTransition(s,"",Pe.NoDataFromResolver)}}))}),kc(s=>{let l=f=>{let y=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let E=f._environmentInjector;y.push(this.configLoader.loadComponent(E,f.routeConfig).then(Q=>{f.component=Q}))}for(let E of f.children)y.push(...l(E));return y},u=l(s.targetSnapshot.root);return u.length===0?D(s):$e(Promise.all(u).then(()=>s))}),kc(()=>this.afterPreactivation()),Ae(()=>{let{currentSnapshot:s,targetSnapshot:l}=t,u=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return u?$e(u).pipe(ee(()=>t)):D(t)}),pn(1),Ae(s=>{let l=vu(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=_(m({},s),{targetRouterState:l}),this.currentNavigation.update(f=>(f.targetRouterState=l,f)),this.events.next(new fi);let u=t.beforeActivateHandler.deferredHandle;return u?$e(u.then(()=>s)):D(s)}),Te(s=>{new ds(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=ff,l)),this.lastSuccessfulNavigation.set(xe(this.currentNavigation)),this.events.next(new Gt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ue(id(o.signal).pipe(He(()=>!r&&!t.targetRouterState),Te(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Pe.Aborted)}))),Te({complete:()=>{r=!0}}),ue(this.transitionAbortWithErrorSubject.pipe(Te(s=>{throw s}))),kr(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",Pe.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ji(s=>{if(r=!0,this.destroyed)return t.resolve(!1),je;if(td(s))this.events.next(new ut(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Cu(s)?this.events.next(new hi(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let l=new $n(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let u=ot(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof bi){let{message:f,cancellationCode:y}=wo(this.urlSerializer,u);this.events.next(new ut(t.id,this.urlSerializer.serialize(t.extractedUrl),f,y)),this.events.next(new hi(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return je}))}))}cancelNavigationTransition(e,t,r){let o=new ut(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=xe(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hf(n){return n!==rr}var vd=new A("");var yd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:()=>c(gf),providedIn:"root"})}return n})(),Fo=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},gf=(()=>{class n extends Fo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Io=(()=>{class n{urlSerializer=c(yi);options=c(xi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Ur);urlHandlingStrategy=c(So);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Je;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof Je?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Qc(null,c(nn));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:()=>c(bf),providedIn:"root"})}return n})(),bf=(()=>{class n extends Io{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof jn?this.updateStateMemento():e instanceof ln?this.commitTransition(t):e instanceof lr?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof fi?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof ut&&!Kc(e)?this.restoreHistory(t):e instanceof $n?this.restoreHistory(t,!0):e instanceof Gt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:t,id:r}){let{replaceUrl:o,state:a}=t;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=m(m({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=m(m({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function _s(n,i){n.events.pipe(He(e=>e instanceof Gt||e instanceof ut||e instanceof $n||e instanceof ln),ee(e=>e instanceof Gt||e instanceof ln?0:(e instanceof ut?e.code===Pe.Redirect||e.code===Pe.SupersededByNewNavigation:!1)?2:1),He(e=>e!==2),pn(1)).subscribe(()=>{i()})}var wi=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(El);stateManager=c(Io);options=c(xi,{optional:!0})||{};pendingTasks=c(cl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(bd);urlSerializer=c(yi);location=c(Ur);urlHandlingStrategy=c(So);injector=c(nn);_events=new $;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(yd);injectorCleanup=c(vd,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(br,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Do,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Le;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=xe(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof ut&&t.code!==Pe.Redirect&&t.code!==Pe.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Gt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof hi){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),l=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||hf(r.source)},a);this.scheduleNavigation(s,rr,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}gu(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),rr,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null;if(r){let l=m({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,t,a,o).catch(l=>{this.disposed||this.injector.get(Nr)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return xe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(vs),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=t,u=l?this.currentUrlTree.fragment:a,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=o||null}f!==null&&(f=this.removeEmptyProps(f));let y;try{let E=r?r.snapshot:this.routerState.snapshot.root;y=Vc(E)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),y=this.currentUrlTree.root}return qc(y,e,f,u??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=xn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,rr,null,t)}navigate(e,t={skipLocationChange:!1}){return vf(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(al(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=m({},Pc):t===!1?r=m({},ns):r=m(m({},ns),t),xn(e))return Ec(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Ec(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,u;a?(s=a.resolve,l=a.reject,u=a.promise):u=new Promise((y,E)=>{s=y,l=E});let f=this.pendingTasks.add();return _s(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vf(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new Se(4008,!1)}var xf=(()=>{class n{router=c(wi);stateManager=c(Io);fragment=Z("");queryParams=Z({});path=Z("");serializer=c(yi);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Gt&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Je(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ei=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Vi("href"),{optional:!0});reactiveHref=Al(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return xe(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return xe(this._target)}_target=Z(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return xe(this._queryParams)}_queryParams=Z(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return xe(this._fragment)}_fragment=Z(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return xe(this._queryParamsHandling)}_queryParamsHandling=Z(void 0);set state(e){this._state.set(e)}get state(){return xe(this._state)}_state=Z(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return xe(this._info)}_info=Z(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return xe(this._relativeTo)}_relativeTo=Z(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return xe(this._preserveFragment)}_preserveFragment=Z(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return xe(this._skipLocationChange)}_skipLocationChange=Z(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return xe(this._replaceUrl)}_replaceUrl=Z(!1);isAnchorElement;onChanges=new $;applicationErrorHandler=c(Nr);options=c(xi,{optional:!0});reactiveRouterState=c(xf);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Z(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(xn(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=$t(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:xn(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return xe(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(on(wi),on(Rt),fl("tabindex"),on(Tt),on(te),on(Nl))};static \u0275dir=O({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&T("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&Y("href",r.reactiveHref(),yl)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",X],skipLocationChange:[2,"skipLocationChange","skipLocationChange",X],replaceUrl:[2,"replaceUrl","replaceUrl",X],routerLink:"routerLink"},features:[st]})}return n})();var wf=new A("");function Cs(n,...i){return ll([{provide:br,multi:!0,useValue:n},[],{provide:Rt,useFactory:Ef},{provide:Dl,multi:!0,useFactory:Ff},i.map(e=>e.\u0275providers)])}function Ef(){return c(wi).routerState.root}function Ff(){let n=c(Lt);return i=>{let e=n.get(Tl);if(i!==e.components[0])return;let t=n.get(wi),r=n.get(Df);n.get(Tf)===1&&t.initialNavigation(),n.get(Sf,null,{optional:!0})?.setUpPreloading(),n.get(wf,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Df=new A("",{factory:()=>new $}),Tf=new A("",{factory:()=>1});var Sf=new A("");function Fs(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Gn=Fs();function Dd(n){Gn=n}var Vn={exec:()=>null};function G(n,i=""){let e=typeof n=="string"?n:n.source,t={replace:(r,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Ue.caret,"$1"),e=e.replace(r,a),t},getRegex:()=>new RegExp(e,i)};return t}var kf=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ue={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},Mf=/^(?:[ \t]*(?:\n|$))+/,Rf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Af=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Cr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Nf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ds=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Td=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Sd=G(Td).replace(/bull/g,Ds).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Pf=G(Td).replace(/bull/g,Ds).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ts=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Of=/^[^\n]+/,Ss=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Lf=G(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ss).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Bf=G(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ds).getRegex(),Ao="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Is=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,zf=G("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Is).replace("tag",Ao).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Id=G(Ts).replace("hr",Cr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ao).getRegex(),Uf=G(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Id).getRegex(),ks={blockquote:Uf,code:Rf,def:Lf,fences:Af,heading:Nf,hr:Cr,html:zf,lheading:Sd,list:Bf,newline:Mf,paragraph:Id,table:Vn,text:Of},_d=G("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Cr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ao).getRegex(),jf=_(m({},ks),{lheading:Pf,table:_d,paragraph:G(Ts).replace("hr",Cr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_d).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ao).getRegex()}),$f=_(m({},ks),{html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Is).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Vn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:G(Ts).replace("hr",Cr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Sd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),Hf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Vf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,kd=/^( {2,}|\\)\n(?!\s*$)/,qf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Fi=/[\p{P}\p{S}]/u,No=/[\s\p{P}\p{S}]/u,Ms=/[^\s\p{P}\p{S}]/u,Gf=G(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,No).getRegex(),Md=/(?!~)[\p{P}\p{S}]/u,Wf=/(?!~)[\s\p{P}\p{S}]/u,Kf=/(?:[^\s\p{P}\p{S}]|~)/u,Qf=G(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",kf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Rd=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Zf=G(Rd,"u").replace(/punct/g,Fi).getRegex(),Yf=G(Rd,"u").replace(/punct/g,Md).getRegex(),Ad="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Xf=G(Ad,"gu").replace(/notPunctSpace/g,Ms).replace(/punctSpace/g,No).replace(/punct/g,Fi).getRegex(),Jf=G(Ad,"gu").replace(/notPunctSpace/g,Kf).replace(/punctSpace/g,Wf).replace(/punct/g,Md).getRegex(),eh=G("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ms).replace(/punctSpace/g,No).replace(/punct/g,Fi).getRegex(),th=G(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Fi).getRegex(),nh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",ih=G(nh,"gu").replace(/notPunctSpace/g,Ms).replace(/punctSpace/g,No).replace(/punct/g,Fi).getRegex(),rh=G(/\\(punct)/,"gu").replace(/punct/g,Fi).getRegex(),oh=G(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ah=G(Is).replace("(?:-->|$)","-->").getRegex(),sh=G("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ah).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Mo=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,lh=G(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Mo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Nd=G(/^!?\[(label)\]\[(ref)\]/).replace("label",Mo).replace("ref",Ss).getRegex(),Pd=G(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ss).getRegex(),ch=G("reflink|nolink(?!\\()","g").replace("reflink",Nd).replace("nolink",Pd).getRegex(),Cd=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Rs={_backpedal:Vn,anyPunctuation:rh,autolink:oh,blockSkip:Qf,br:kd,code:Vf,del:Vn,delLDelim:Vn,delRDelim:Vn,emStrongLDelim:Zf,emStrongRDelimAst:Xf,emStrongRDelimUnd:eh,escape:Hf,link:lh,nolink:Pd,punctuation:Gf,reflink:Nd,reflinkSearch:ch,tag:sh,text:qf,url:Vn},dh=_(m({},Rs),{link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",Mo).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mo).getRegex()}),xs=_(m({},Rs),{emStrongRDelimAst:Jf,emStrongLDelim:Yf,delLDelim:th,delRDelim:ih,url:G(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Cd).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:G(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Cd).getRegex()}),mh=_(m({},xs),{br:G(kd).replace("{2,}","*").getRegex(),text:G(xs.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),ko={normal:ks,gfm:jf,pedantic:$f},vr={normal:Rs,gfm:xs,breaks:mh,pedantic:dh},ph={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xd=n=>ph[n];function Wt(n,i){if(i){if(Ue.escapeTest.test(n))return n.replace(Ue.escapeReplace,xd)}else if(Ue.escapeTestNoEncode.test(n))return n.replace(Ue.escapeReplaceNoEncode,xd);return n}function wd(n){try{n=encodeURI(n).replace(Ue.percentDecode,"%")}catch{return null}return n}function Ed(n,i){let e=n.replace(Ue.findPipe,(o,a,s)=>{let l=!1,u=a;for(;--u>=0&&s[u]==="\\";)l=!l;return l?"|":" |"}),t=e.split(Ue.splitPipe),r=0;if(t[0].trim()||t.shift(),t.length>0&&!t.at(-1)?.trim()&&t.pop(),i)if(t.length>i)t.splice(i);else for(;t.length<i;)t.push("");for(;r<t.length;r++)t[r]=t[r].trim().replace(Ue.slashPipe,"|");return t}function yr(n,i,e){let t=n.length;if(t===0)return"";let r=0;for(;r<t;){let o=n.charAt(t-r-1);if(o===i&&!e)r++;else if(o!==i&&e)r++;else break}return n.slice(0,t-r)}function uh(n,i){if(n.indexOf(i[1])===-1)return-1;let e=0;for(let t=0;t<n.length;t++)if(n[t]==="\\")t++;else if(n[t]===i[0])e++;else if(n[t]===i[1]&&(e--,e<0))return t;return e>0?-2:-1}function fh(n,i=0){let e=i,t="";for(let r of n)if(r==="	"){let o=4-e%4;t+=" ".repeat(o),e+=o}else t+=r,e++;return t}function Fd(n,i,e,t,r){let o=i.href,a=i.title||null,s=n[1].replace(r.other.outputLinkReplace,"$1");t.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:e,href:o,title:a,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,l}function hh(n,i,e){let t=n.match(e.other.indentCodeCompensation);if(t===null)return i;let r=t[1];return i.split(`
`).map(o=>{let a=o.match(e.other.beginningSpace);if(a===null)return o;let[s]=a;return s.length>=r.length?o.slice(r.length):o}).join(`
`)}var Ro=class{options;rules;lexer;constructor(n){this.options=n||Gn}space(n){let i=this.rules.block.newline.exec(n);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(n){let i=this.rules.block.code.exec(n);if(i){let e=i[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?e:yr(e,`
`)}}}fences(n){let i=this.rules.block.fences.exec(n);if(i){let e=i[0],t=hh(e,i[3]||"",this.rules);return{type:"code",raw:e,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:t}}}heading(n){let i=this.rules.block.heading.exec(n);if(i){let e=i[2].trim();if(this.rules.other.endingHash.test(e)){let t=yr(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){let i=this.rules.block.hr.exec(n);if(i)return{type:"hr",raw:yr(i[0],`
`)}}blockquote(n){let i=this.rules.block.blockquote.exec(n);if(i){let e=yr(i[0],`
`).split(`
`),t="",r="",o=[];for(;e.length>0;){let a=!1,s=[],l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))s.push(e[l]),a=!0;else if(!a)s.push(e[l]);else break;e=e.slice(l);let u=s.join(`
`),f=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${u}`:u,r=r?`${r}
${f}`:f;let y=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,o,!0),this.lexer.state.top=y,e.length===0)break;let E=o.at(-1);if(E?.type==="code")break;if(E?.type==="blockquote"){let Q=E,I=Q.raw+`
`+e.join(`
`),me=this.blockquote(I);o[o.length-1]=me,t=t.substring(0,t.length-Q.raw.length)+me.raw,r=r.substring(0,r.length-Q.text.length)+me.text;break}else if(E?.type==="list"){let Q=E,I=Q.raw+`
`+e.join(`
`),me=this.list(I);o[o.length-1]=me,t=t.substring(0,t.length-E.raw.length)+me.raw,r=r.substring(0,r.length-Q.raw.length)+me.raw,e=I.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:o,text:r}}}list(n){let i=this.rules.block.list.exec(n);if(i){let e=i[1].trim(),t=e.length>1,r={type:"list",raw:"",ordered:t,start:t?+e.slice(0,-1):"",loose:!1,items:[]};e=t?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=t?e:"[*+-]");let o=this.rules.other.listItemRegex(e),a=!1;for(;n;){let l=!1,u="",f="";if(!(i=o.exec(n))||this.rules.block.hr.test(n))break;u=i[0],n=n.substring(u.length);let y=fh(i[2].split(`
`,1)[0],i[1].length),E=n.split(`
`,1)[0],Q=!y.trim(),I=0;if(this.options.pedantic?(I=2,f=y.trimStart()):Q?I=i[1].length+1:(I=y.search(this.rules.other.nonSpaceChar),I=I>4?1:I,f=y.slice(I),I+=i[1].length),Q&&this.rules.other.blankLine.test(E)&&(u+=E+`
`,n=n.substring(E.length+1),l=!0),!l){let me=this.rules.other.nextBulletRegex(I),Ge=this.rules.other.hrRegex(I),Xt=this.rules.other.fencesBeginRegex(I),rt=this.rules.other.headingBeginRegex(I),Jt=this.rules.other.htmlBeginRegex(I),Fp=this.rules.other.blockquoteBeginRegex(I);for(;n;){let Sa=n.split(`
`,1)[0],Ui;if(E=Sa,this.options.pedantic?(E=E.replace(this.rules.other.listReplaceNesting,"  "),Ui=E):Ui=E.replace(this.rules.other.tabCharGlobal,"    "),Xt.test(E)||rt.test(E)||Jt.test(E)||Fp.test(E)||me.test(E)||Ge.test(E))break;if(Ui.search(this.rules.other.nonSpaceChar)>=I||!E.trim())f+=`
`+Ui.slice(I);else{if(Q||y.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Xt.test(y)||rt.test(y)||Ge.test(y))break;f+=`
`+E}Q=!E.trim(),u+=Sa+`
`,n=n.substring(Sa.length+1),y=Ui.slice(I)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0)),r.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(f),loose:!1,text:f,tokens:[]}),r.raw+=u}let s=r.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l of r.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let f={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=f.checked,r.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=f.raw+l.tokens[0].raw,l.tokens[0].text=f.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(f)):l.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):l.tokens.unshift(f)}}if(!r.loose){let u=l.tokens.filter(y=>y.type==="space"),f=u.length>0&&u.some(y=>this.rules.other.anyLine.test(y.raw));r.loose=f}}if(r.loose)for(let l of r.items){l.loose=!0;for(let u of l.tokens)u.type==="text"&&(u.type="paragraph")}return r}}html(n){let i=this.rules.block.html.exec(n);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(n){let i=this.rules.block.def.exec(n);if(i){let e=i[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=i[2]?i[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:e,raw:i[0],href:t,title:r}}}table(n){let i=this.rules.block.table.exec(n);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let e=Ed(i[1]),t=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=i[3]?.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:i[0],header:[],align:[],rows:[]};if(e.length===t.length){for(let a of t)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<e.length;a++)o.header.push({text:e[a],tokens:this.lexer.inline(e[a]),header:!0,align:o.align[a]});for(let a of r)o.rows.push(Ed(a,o.header.length).map((s,l)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:o.align[l]})));return o}}lheading(n){let i=this.rules.block.lheading.exec(n);if(i){let e=i[1].trim();return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(n){let i=this.rules.block.paragraph.exec(n);if(i){let e=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:e,tokens:this.lexer.inline(e)}}}text(n){let i=this.rules.block.text.exec(n);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(n){let i=this.rules.inline.escape.exec(n);if(i)return{type:"escape",raw:i[0],text:i[1]}}tag(n){let i=this.rules.inline.tag.exec(n);if(i)return!this.lexer.state.inLink&&this.rules.other.startATag.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(n){let i=this.rules.inline.link.exec(n);if(i){let e=i[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let o=yr(e.slice(0,-1),"\\");if((e.length-o.length)%2===0)return}else{let o=uh(i[2],"()");if(o===-2)return;if(o>-1){let a=(i[0].indexOf("!")===0?5:4)+i[1].length+o;i[2]=i[2].substring(0,o),i[0]=i[0].substring(0,a).trim(),i[3]=""}}let t=i[2],r="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(t);o&&(t=o[1],r=o[3])}else r=i[3]?i[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?t=t.slice(1):t=t.slice(1,-1)),Fd(i,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer,this.rules)}}reflink(n,i){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let t=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=i[t.toLowerCase()];if(!r){let o=e[0].charAt(0);return{type:"text",raw:o,text:o}}return Fd(e,r,e[0],this.lexer,this.rules)}}emStrong(n,i,e=""){let t=this.rules.inline.emStrongLDelim.exec(n);if(!(!t||!t[1]&&!t[2]&&!t[3]&&!t[4]||t[4]&&e.match(this.rules.other.unicodeAlphaNumeric))&&(!(t[1]||t[3])||!e||this.rules.inline.punctuation.exec(e))){let r=[...t[0]].length-1,o,a,s=r,l=0,u=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,i=i.slice(-1*n.length+r);(t=u.exec(i))!=null;){if(o=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!o)continue;if(a=[...o].length,t[3]||t[4]){s+=a;continue}else if((t[5]||t[6])&&r%3&&!((r+a)%3)){l+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s+l);let f=[...t[0]][0].length,y=n.slice(0,r+t.index+f+a);if(Math.min(r,a)%2){let Q=y.slice(1,-1);return{type:"em",raw:y,text:Q,tokens:this.lexer.inlineTokens(Q)}}let E=y.slice(2,-2);return{type:"strong",raw:y,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(n){let i=this.rules.inline.code.exec(n);if(i){let e=i[2].replace(this.rules.other.newLineCharGlobal," "),t=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return t&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:i[0],text:e}}}br(n){let i=this.rules.inline.br.exec(n);if(i)return{type:"br",raw:i[0]}}del(n,i,e=""){let t=this.rules.inline.delLDelim.exec(n);if(t&&(!t[1]||!e||this.rules.inline.punctuation.exec(e))){let r=[...t[0]].length-1,o,a,s=r,l=this.rules.inline.delRDelim;for(l.lastIndex=0,i=i.slice(-1*n.length+r);(t=l.exec(i))!=null;){if(o=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!o||(a=[...o].length,a!==r))continue;if(t[3]||t[4]){s+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s);let u=[...t[0]][0].length,f=n.slice(0,r+t.index+u+a),y=f.slice(r,-r);return{type:"del",raw:f,text:y,tokens:this.lexer.inlineTokens(y)}}}}autolink(n){let i=this.rules.inline.autolink.exec(n);if(i){let e,t;return i[2]==="@"?(e=i[1],t="mailto:"+e):(e=i[1],t=e),{type:"link",raw:i[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}url(n){let i;if(i=this.rules.inline.url.exec(n)){let e,t;if(i[2]==="@")e=i[0],t="mailto:"+e;else{let r;do r=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])?.[0]??"";while(r!==i[0]);e=i[0],i[1]==="www."?t="http://"+i[0]:t=i[0]}return{type:"link",raw:i[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(n){let i=this.rules.inline.text.exec(n);if(i){let e=this.lexer.state.inRawBlock;return{type:"text",raw:i[0],text:i[0],escaped:e}}}},At=class ws{tokens;options;state;inlineQueue;tokenizer;constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||Gn,this.options.tokenizer=this.options.tokenizer||new Ro,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:Ue,block:ko.normal,inline:vr.normal};this.options.pedantic?(e.block=ko.pedantic,e.inline=vr.pedantic):this.options.gfm&&(e.block=ko.gfm,this.options.breaks?e.inline=vr.breaks:e.inline=vr.gfm),this.tokenizer.rules=e}static get rules(){return{block:ko,inline:vr}}static lex(i,e){return new ws(e).lex(i)}static lexInline(i,e){return new ws(e).inlineTokens(i)}lex(i){i=i.replace(Ue.carriageReturn,`
`),this.blockTokens(i,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(i,e=[],t=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(i=i.replace(Ue.tabCharGlobal,"    ").replace(Ue.spaceLine,""));i;){let r;if(this.options.extensions?.block?.some(a=>(r=a.call({lexer:this},i,e))?(i=i.substring(r.raw.length),e.push(r),!0):!1))continue;if(r=this.tokenizer.space(i)){i=i.substring(r.raw.length);let a=e.at(-1);r.raw.length===1&&a!==void 0?a.raw+=`
`:e.push(r);continue}if(r=this.tokenizer.code(i)){i=i.substring(r.raw.length);let a=e.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.at(-1).src=a.text):e.push(r);continue}if(r=this.tokenizer.fences(i)){i=i.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.heading(i)){i=i.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.hr(i)){i=i.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.blockquote(i)){i=i.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.list(i)){i=i.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.html(i)){i=i.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.def(i)){i=i.substring(r.raw.length);let a=e.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},e.push(r));continue}if(r=this.tokenizer.table(i)){i=i.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.lheading(i)){i=i.substring(r.raw.length),e.push(r);continue}let o=i;if(this.options.extensions?.startBlock){let a=1/0,s=i.slice(1),l;this.options.extensions.startBlock.forEach(u=>{l=u.call({lexer:this},s),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(o=i.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let a=e.at(-1);t&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):e.push(r),t=o.length!==i.length,i=i.substring(r.raw.length);continue}if(r=this.tokenizer.text(i)){i=i.substring(r.raw.length);let a=e.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):e.push(r);continue}if(i){let a="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,e}inline(i,e=[]){return this.inlineQueue.push({src:i,tokens:e}),e}inlineTokens(i,e=[]){this.tokenizer.lexer=this;let t=i,r=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(t))!=null;)l.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(t))!=null;)t=t.slice(0,r.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(t))!=null;)o=r[2]?r[2].length:0,t=t.slice(0,r.index+o)+"["+"a".repeat(r[0].length-o-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t;let a=!1,s="";for(;i;){a||(s=""),a=!1;let l;if(this.options.extensions?.inline?.some(f=>(l=f.call({lexer:this},i,e))?(i=i.substring(l.raw.length),e.push(l),!0):!1))continue;if(l=this.tokenizer.escape(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.tag(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.link(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.reflink(i,this.tokens.links)){i=i.substring(l.raw.length);let f=e.at(-1);l.type==="text"&&f?.type==="text"?(f.raw+=l.raw,f.text+=l.text):e.push(l);continue}if(l=this.tokenizer.emStrong(i,t,s)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.codespan(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.br(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.del(i,t,s)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.autolink(i)){i=i.substring(l.raw.length),e.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(i))){i=i.substring(l.raw.length),e.push(l);continue}let u=i;if(this.options.extensions?.startInline){let f=1/0,y=i.slice(1),E;this.options.extensions.startInline.forEach(Q=>{E=Q.call({lexer:this},y),typeof E=="number"&&E>=0&&(f=Math.min(f,E))}),f<1/0&&f>=0&&(u=i.substring(0,f+1))}if(l=this.tokenizer.inlineText(u)){i=i.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(s=l.raw.slice(-1)),a=!0;let f=e.at(-1);f?.type==="text"?(f.raw+=l.raw,f.text+=l.text):e.push(l);continue}if(i){let f="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return e}},wn=class{options;parser;constructor(n){this.options=n||Gn}space(n){return""}code({text:n,lang:i,escaped:e}){let t=(i||"").match(Ue.notSpaceStart)?.[0],r=n.replace(Ue.endingNewline,"")+`
`;return t?'<pre><code class="language-'+Wt(t)+'">'+(e?r:Wt(r,!0))+`</code></pre>
`:"<pre><code>"+(e?r:Wt(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:i}){return`<h${i}>${this.parser.parseInline(n)}</h${i}>
`}hr(n){return`<hr>
`}list(n){let i=n.ordered,e=n.start,t="";for(let a=0;a<n.items.length;a++){let s=n.items[a];t+=this.listitem(s)}let r=i?"ol":"ul",o=i&&e!==1?' start="'+e+'"':"";return"<"+r+o+`>
`+t+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let i="",e="";for(let r=0;r<n.header.length;r++)e+=this.tablecell(n.header[r]);i+=this.tablerow({text:e});let t="";for(let r=0;r<n.rows.length;r++){let o=n.rows[r];e="";for(let a=0;a<o.length;a++)e+=this.tablecell(o[a]);t+=this.tablerow({text:e})}return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+t+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let i=this.parser.parseInline(n.tokens),e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+i+`</${e}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Wt(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:i,tokens:e}){let t=this.parser.parseInline(e),r=wd(n);if(r===null)return t;n=r;let o='<a href="'+n+'"';return i&&(o+=' title="'+Wt(i)+'"'),o+=">"+t+"</a>",o}image({href:n,title:i,text:e,tokens:t}){t&&(e=this.parser.parseInline(t,this.parser.textRenderer));let r=wd(n);if(r===null)return Wt(e);n=r;let o=`<img src="${n}" alt="${Wt(e)}"`;return i&&(o+=` title="${Wt(i)}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Wt(n.text)}},As=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},Nt=class Es{options;renderer;textRenderer;constructor(i){this.options=i||Gn,this.options.renderer=this.options.renderer||new wn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new As}static parse(i,e){return new Es(e).parse(i)}static parseInline(i,e){return new Es(e).parseInline(i)}parse(i){this.renderer.parser=this;let e="";for(let t=0;t<i.length;t++){let r=i[t];if(this.options.extensions?.renderers?.[r.type]){let a=r,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){e+=s||"";continue}}let o=r;switch(o.type){case"space":{e+=this.renderer.space(o);break}case"hr":{e+=this.renderer.hr(o);break}case"heading":{e+=this.renderer.heading(o);break}case"code":{e+=this.renderer.code(o);break}case"table":{e+=this.renderer.table(o);break}case"blockquote":{e+=this.renderer.blockquote(o);break}case"list":{e+=this.renderer.list(o);break}case"checkbox":{e+=this.renderer.checkbox(o);break}case"html":{e+=this.renderer.html(o);break}case"def":{e+=this.renderer.def(o);break}case"paragraph":{e+=this.renderer.paragraph(o);break}case"text":{e+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return e}parseInline(i,e=this.renderer){this.renderer.parser=this;let t="";for(let r=0;r<i.length;r++){let o=i[r];if(this.options.extensions?.renderers?.[o.type]){let s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){t+=s||"";continue}}let a=o;switch(a.type){case"escape":{t+=e.text(a);break}case"html":{t+=e.html(a);break}case"link":{t+=e.link(a);break}case"image":{t+=e.image(a);break}case"checkbox":{t+=e.checkbox(a);break}case"strong":{t+=e.strong(a);break}case"em":{t+=e.em(a);break}case"codespan":{t+=e.codespan(a);break}case"br":{t+=e.br(a);break}case"del":{t+=e.del(a);break}case"text":{t+=e.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}},_r=class{options;block;constructor(n){this.options=n||Gn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?At.lex:At.lexInline}provideParser(){return this.block?Nt.parse:Nt.parseInline}},gh=class{defaults=Fs();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Nt;Renderer=wn;TextRenderer=As;Lexer=At;Tokenizer=Ro;Hooks=_r;constructor(...n){this.use(...n)}walkTokens(n,i){let e=[];for(let t of n)switch(e=e.concat(i.call(this,t)),t.type){case"table":{let r=t;for(let o of r.header)e=e.concat(this.walkTokens(o.tokens,i));for(let o of r.rows)for(let a of o)e=e.concat(this.walkTokens(a.tokens,i));break}case"list":{let r=t;e=e.concat(this.walkTokens(r.items,i));break}default:{let r=t;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let a=r[o].flat(1/0);e=e.concat(this.walkTokens(a,i))}):r.tokens&&(e=e.concat(this.walkTokens(r.tokens,i)))}}return e}use(...n){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{let t=m({},e);if(t.async=this.defaults.async||t.async||!1,e.extensions&&(e.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let o=i.renderers[r.name];o?i.renderers[r.name]=function(...a){let s=r.renderer.apply(this,a);return s===!1&&(s=o.apply(this,a)),s}:i.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=i[r.level];o?o.unshift(r.tokenizer):i[r.level]=[r.tokenizer],r.start&&(r.level==="block"?i.startBlock?i.startBlock.push(r.start):i.startBlock=[r.start]:r.level==="inline"&&(i.startInline?i.startInline.push(r.start):i.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(i.childTokens[r.name]=r.childTokens)}),t.extensions=i),e.renderer){let r=this.defaults.renderer||new wn(this.defaults);for(let o in e.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,s=e.renderer[a],l=r[a];r[a]=(...u)=>{let f=s.apply(r,u);return f===!1&&(f=l.apply(r,u)),f||""}}t.renderer=r}if(e.tokenizer){let r=this.defaults.tokenizer||new Ro(this.defaults);for(let o in e.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,s=e.tokenizer[a],l=r[a];r[a]=(...u)=>{let f=s.apply(r,u);return f===!1&&(f=l.apply(r,u)),f}}t.tokenizer=r}if(e.hooks){let r=this.defaults.hooks||new _r;for(let o in e.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,s=e.hooks[a],l=r[a];_r.passThroughHooks.has(o)?r[a]=u=>{if(this.defaults.async&&_r.passThroughHooksRespectAsync.has(o))return(async()=>{let y=await s.call(r,u);return l.call(r,y)})();let f=s.call(r,u);return l.call(r,f)}:r[a]=(...u)=>{if(this.defaults.async)return(async()=>{let y=await s.apply(r,u);return y===!1&&(y=await l.apply(r,u)),y})();let f=s.apply(r,u);return f===!1&&(f=l.apply(r,u)),f}}t.hooks=r}if(e.walkTokens){let r=this.defaults.walkTokens,o=e.walkTokens;t.walkTokens=function(a){let s=[];return s.push(o.call(this,a)),r&&(s=s.concat(r.call(this,a))),s}}this.defaults=m(m({},this.defaults),t)}),this}setOptions(n){return this.defaults=m(m({},this.defaults),n),this}lexer(n,i){return At.lex(n,i??this.defaults)}parser(n,i){return Nt.parse(n,i??this.defaults)}parseMarkdown(n){return(i,e)=>{let t=m({},e),r=m(m({},this.defaults),t),o=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&t.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let a=r.hooks?await r.hooks.preprocess(i):i,s=await(r.hooks?await r.hooks.provideLexer():n?At.lex:At.lexInline)(a,r),l=r.hooks?await r.hooks.processAllTokens(s):s;r.walkTokens&&await Promise.all(this.walkTokens(l,r.walkTokens));let u=await(r.hooks?await r.hooks.provideParser():n?Nt.parse:Nt.parseInline)(l,r);return r.hooks?await r.hooks.postprocess(u):u})().catch(o);try{r.hooks&&(i=r.hooks.preprocess(i));let a=(r.hooks?r.hooks.provideLexer():n?At.lex:At.lexInline)(i,r);r.hooks&&(a=r.hooks.processAllTokens(a)),r.walkTokens&&this.walkTokens(a,r.walkTokens);let s=(r.hooks?r.hooks.provideParser():n?Nt.parse:Nt.parseInline)(a,r);return r.hooks&&(s=r.hooks.postprocess(s)),s}catch(a){return o(a)}}}onError(n,i){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let t="<p>An error occurred:</p><pre>"+Wt(e.message+"",!0)+"</pre>";return i?Promise.resolve(t):t}if(i)return Promise.reject(e);throw e}}},qn=new gh;function K(n,i){return qn.parse(n,i)}K.options=K.setOptions=function(n){return qn.setOptions(n),K.defaults=qn.defaults,Dd(K.defaults),K};K.getDefaults=Fs;K.defaults=Gn;K.use=function(...n){return qn.use(...n),K.defaults=qn.defaults,Dd(K.defaults),K};K.walkTokens=function(n,i){return qn.walkTokens(n,i)};K.parseInline=qn.parseInline;K.Parser=Nt;K.parser=Nt.parse;K.Renderer=wn;K.TextRenderer=As;K.Lexer=At;K.lexer=At.lex;K.Tokenizer=Ro;K.Hooks=_r;K.parse=K;var U0=K.options,j0=K.setOptions,$0=K.use,H0=K.walkTokens,V0=K.parseInline;var q0=Nt.parse,G0=At.lex;var bh=["*"],vh="Copy",yh="Copied",_h=(()=>{class n{constructor(){this._buttonClick$=new $,this.copied=ql(this._buttonClick$.pipe(Ae(()=>Qn(D(!0),Sr(3e3).pipe(rl(!1)))),Ir(),Mr(1))),this.copiedText=$t(()=>this.copied()?yh:vh)}onCopyToClipboardClick(){this._buttonClick$.next()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["markdown-clipboard"]],decls:2,vars:3,consts:[[1,"markdown-clipboard-button",3,"click"]],template:function(t,r){t&1&&(Me(0,"button",0),Lr("click",function(){return r.onCopyToClipboardClick()}),b(1),Be()),t&2&&(re("copied",r.copied()),h(),j(r.copiedText()))},encapsulation:2,changeDetection:0})}}return n})(),Ch=new A("CLIPBOARD_OPTIONS");var Di=(()=>{class n{transform(e,t){return e==null&&(e=""),t==null&&(t=""),typeof e!="string"?(console.error(`LanguagePipe has been invoked with an invalid value type [${typeof e}]`),e):typeof t!="string"?(console.error(`LanguagePipe has been invoked with an invalid parameter [${typeof t}]`),e):"```"+t+`
`+e+"\n```"}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275pipe=wl({name:"language",type:n,pure:!0})}}return n})(),xh=new A("MARKED_EXTENSIONS"),wh=new A("MARKED_OPTIONS"),Eh=new A("MERMAID_OPTIONS"),Fh=new A("SANITIZE");function Dh(n){return typeof n=="function"}var Th="[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information",Sh="[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information",Ih="[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information",kh="[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information",Mh="[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function",Rh="[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information";var Od=(()=>{class n{get options(){return this._options}set options(e){this._options=m(m({},this.DEFAULT_MARKED_OPTIONS),e)}get renderer(){return this.options.renderer}set renderer(e){this.options.renderer=e}constructor(){this.clipboardOptions=c(Ch,{optional:!0}),this.extensions=c(xh,{optional:!0}),this.http=c(ti,{optional:!0}),this.mermaidOptions=c(Eh,{optional:!0}),this.platform=c(hl),this.sanitize=c(Fh,{optional:!0}),this.sanitizer=c($r),this.DEFAULT_MARKED_OPTIONS={renderer:new wn},this.DEFAULT_KATEX_OPTIONS={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}]},this.DEFAULT_MERMAID_OPTIONS={startOnLoad:!1},this.DEFAULT_CLIPBOARD_OPTIONS={buttonComponent:void 0},this.DEFAULT_PARSE_OPTIONS={decodeHtml:!1,inline:!1,emoji:!1,mermaid:!1,markedOptions:void 0,disableSanitizer:!1},this.DEFAULT_RENDER_OPTIONS={clipboard:!1,clipboardOptions:void 0,katex:!1,katexOptions:void 0,mermaid:!1,mermaidOptions:void 0},this.DEFAULT_SECURITY_CONTEXT=rn.HTML,this._options=null,this._reload$=new $,this.reload$=this._reload$.asObservable(),this.options=c(wh,{optional:!0})}parse(e,t=this.DEFAULT_PARSE_OPTIONS){let{decodeHtml:r,inline:o,emoji:a,mermaid:s,disableSanitizer:l}=t,u=m(m({},this.options),t.markedOptions),f=u.renderer||this.renderer||new wn;this.extensions&&(this.renderer=this.extendsRendererForExtensions(f)),s&&(this.renderer=this.extendsRendererForMermaid(f));let y=this.trimIndentation(e),E=r?this.decodeHtml(y):y,Q=a?this.parseEmoji(E):E,I=this.parseMarked(Q,u,o);return l?I:this.sanitizeHtml(I)}render(e,t=this.DEFAULT_RENDER_OPTIONS,r){let{clipboard:o,clipboardOptions:a,katex:s,katexOptions:l,mermaid:u,mermaidOptions:f}=t;s&&this.renderKatex(e,m(m({},this.DEFAULT_KATEX_OPTIONS),l)),u&&this.renderMermaid(e,m(m(m({},this.DEFAULT_MERMAID_OPTIONS),this.mermaidOptions),f)),o&&this.renderClipboard(e,r,m(m(m({},this.DEFAULT_CLIPBOARD_OPTIONS),this.clipboardOptions),a)),this.highlight(e)}reload(){this._reload$.next()}getSource(e){if(!this.http)throw new Error(Rh);return this.http.get(e,{responseType:"text"}).pipe(ee(t=>this.handleExtension(e,t)))}highlight(e){if(!Pn(this.platform)||typeof Prism>"u"||typeof Prism.highlightAllUnder>"u")return;e||(e=document);let t=e.querySelectorAll('pre code:not([class*="language-"])');Array.prototype.forEach.call(t,r=>r.classList.add("language-none")),Prism.highlightAllUnder(e)}decodeHtml(e){if(!Pn(this.platform))return e;let t=document.createElement("textarea");return t.innerHTML=e,t.value}extendsRendererForExtensions(e){let t=e;return t.\u0275NgxMarkdownRendererExtendedForExtensions===!0||(this.extensions&&this.extensions.length>0&&K.use(...this.extensions),t.\u0275NgxMarkdownRendererExtendedForExtensions=!0),e}extendsRendererForMermaid(e){let t=e;if(t.\u0275NgxMarkdownRendererExtendedForMermaid===!0)return e;let r=e.code;return e.code=o=>o.lang==="mermaid"?`<div class="mermaid">${o.text}</div>`:r(o),t.\u0275NgxMarkdownRendererExtendedForMermaid=!0,e}handleExtension(e,t){let r=e.lastIndexOf("://"),o=r>-1?e.substring(r+4):e,a=o.lastIndexOf("/"),s=a>-1?o.substring(a+1).split("?")[0]:"",l=s.lastIndexOf("."),u=l>-1?s.substring(l+1):"";return u&&u!=="md"?"```"+u+`
`+t+"\n```":t}parseMarked(e,t,r=!1){if(t.renderer){let o=m({},t.renderer);delete o.\u0275NgxMarkdownRendererExtendedForExtensions,delete o.\u0275NgxMarkdownRendererExtendedForMermaid,delete t.renderer,K.use({renderer:o})}return r?K.parseInline(e,t):K.parse(e,t)}parseEmoji(e){if(!Pn(this.platform))return e;if(typeof joypixels>"u"||typeof joypixels.shortnameToUnicode>"u")throw new Error(Th);return joypixels.shortnameToUnicode(e)}renderKatex(e,t){if(Pn(this.platform)){if(typeof katex>"u"||typeof renderMathInElement>"u")throw new Error(Sh);renderMathInElement(e,t)}}renderClipboard(e,t,r){if(!Pn(this.platform))return;if(typeof ClipboardJS>"u")throw new Error(kh);if(!t)throw new Error(Mh);let{buttonComponent:o,buttonTemplate:a}=r,s=e.querySelectorAll("pre");for(let l=0;l<s.length;l++){let u=s.item(l),f=document.createElement("div");f.style.position="relative",u.parentNode.insertBefore(f,u),f.appendChild(u);let y=document.createElement("div");y.classList.add("markdown-clipboard-toolbar"),y.style.position="absolute",y.style.top=".5em",y.style.right=".5em",y.style.zIndex="1",f.insertAdjacentElement("beforeend",y),f.onmouseenter=()=>y.classList.add("hover"),f.onmouseleave=()=>y.classList.remove("hover");let E;if(o){let I=t.createComponent(o);E=I.hostView,I.changeDetectorRef.markForCheck()}else if(a)E=t.createEmbeddedView(a);else{let I=t.createComponent(_h);E=I.hostView,I.changeDetectorRef.markForCheck()}let Q;E.rootNodes.forEach(I=>{y.appendChild(I),Q=new ClipboardJS(I,{text:()=>u.innerText})}),E.onDestroy(()=>Q.destroy())}}renderMermaid(e,t=this.DEFAULT_MERMAID_OPTIONS){if(!Pn(this.platform))return;if(typeof mermaid>"u"||typeof mermaid.initialize>"u")throw new Error(Ih);let r=e.querySelectorAll(".mermaid");r.length!==0&&(mermaid.initialize(t),mermaid.run({nodes:r}))}trimIndentation(e){if(!e)return"";let t;return e.split(`
`).map(r=>{let o=t;return r.length>0&&(o=isNaN(o)?r.search(/\S|$/):Math.min(r.search(/\S|$/),o)),isNaN(t)&&(t=o),o?r.substring(o):r}).join(`
`)}async sanitizeHtml(e){return Dh(this.sanitize)?this.sanitize(await e):this.sanitize!==rn.NONE?this.sanitizer.sanitize(this.sanitize??this.DEFAULT_SECURITY_CONTEXT,e)??"":e}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=P({token:n,factory:n.\u0275fac})}}return n})(),Ns=(function(n){return n.CommandLine="command-line",n.LineHighlight="line-highlight",n.LineNumbers="line-numbers",n})(Ns||{}),En=(()=>{class n{constructor(){this.element=c(te),this.markdownService=c(Od),this.viewContainerRef=c(Ke),this.error=new C,this.load=new C,this.ready=new C,this._clipboard=!1,this._commandLine=!1,this._disableSanitizer=!1,this._emoji=!1,this._inline=!1,this._katex=!1,this._lineHighlight=!1,this._lineNumbers=!1,this._mermaid=!1,this.destroyed$=new $}get disableSanitizer(){return this._disableSanitizer}set disableSanitizer(e){this._disableSanitizer=this.coerceBooleanProperty(e)}get inline(){return this._inline}set inline(e){this._inline=this.coerceBooleanProperty(e)}get clipboard(){return this._clipboard}set clipboard(e){this._clipboard=this.coerceBooleanProperty(e)}get emoji(){return this._emoji}set emoji(e){this._emoji=this.coerceBooleanProperty(e)}get katex(){return this._katex}set katex(e){this._katex=this.coerceBooleanProperty(e)}get mermaid(){return this._mermaid}set mermaid(e){this._mermaid=this.coerceBooleanProperty(e)}get lineHighlight(){return this._lineHighlight}set lineHighlight(e){this._lineHighlight=this.coerceBooleanProperty(e)}get lineNumbers(){return this._lineNumbers}set lineNumbers(e){this._lineNumbers=this.coerceBooleanProperty(e)}get commandLine(){return this._commandLine}set commandLine(e){this._commandLine=this.coerceBooleanProperty(e)}ngOnChanges(){this.loadContent()}loadContent(){if(this.data!=null){this.handleData();return}if(this.src!=null){this.handleSrc();return}}ngAfterViewInit(){!this.data&&!this.src&&this.handleTransclusion(),this.markdownService.reload$.pipe(ue(this.destroyed$)).subscribe(()=>this.loadContent())}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}async render(e,t=!1){let r={decodeHtml:t,inline:this.inline,emoji:this.emoji,mermaid:this.mermaid,disableSanitizer:this.disableSanitizer},o={clipboard:this.clipboard,clipboardOptions:this.getClipboardOptions(),katex:this.katex,katexOptions:this.katexOptions,mermaid:this.mermaid,mermaidOptions:this.mermaidOptions},a=await this.markdownService.parse(e,r);this.element.nativeElement.innerHTML=a,this.handlePlugins(),this.markdownService.render(this.element.nativeElement,o,this.viewContainerRef),this.ready.emit()}coerceBooleanProperty(e){return e!=null&&`${String(e)}`!="false"}getClipboardOptions(){if(this.clipboardButtonComponent||this.clipboardButtonTemplate)return{buttonComponent:this.clipboardButtonComponent,buttonTemplate:this.clipboardButtonTemplate}}handleData(){this.render(this.data)}handleSrc(){this.markdownService.getSource(this.src).subscribe({next:e=>{this.render(e).then(()=>{this.load.emit(e)})},error:e=>this.error.emit(e)})}handleTransclusion(){this.render(this.element.nativeElement.innerHTML,!0)}handlePlugins(){this.commandLine&&(this.setPluginClass(this.element.nativeElement,Ns.CommandLine),this.setPluginOptions(this.element.nativeElement,{dataFilterOutput:this.filterOutput,dataHost:this.host,dataPrompt:this.prompt,dataOutput:this.output,dataUser:this.user})),this.lineHighlight&&this.setPluginOptions(this.element.nativeElement,{dataLine:this.line,dataLineOffset:this.lineOffset}),this.lineNumbers&&(this.setPluginClass(this.element.nativeElement,Ns.LineNumbers),this.setPluginOptions(this.element.nativeElement,{dataStart:this.start}))}setPluginClass(e,t){let r=e.querySelectorAll("pre");for(let o=0;o<r.length;o++){let a=t instanceof Array?t:[t];r.item(o).classList.add(...a)}}setPluginOptions(e,t){let r=e.querySelectorAll("pre");for(let o=0;o<r.length;o++)Object.keys(t).forEach(a=>{let s=t[a];if(s){let l=this.toLispCase(a);r.item(o).setAttribute(l,s.toString())}})}toLispCase(e){let t=e.match(/([A-Z])/g);if(!t)return e;let r=e.toString();for(let o=0,a=t.length;o<a;o++)r=r.replace(new RegExp(t[o]),"-"+t[o].toLowerCase());return r.slice(0,1)==="-"&&(r=r.slice(1)),r}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["markdown"],["","markdown",""]],inputs:{data:"data",src:"src",disableSanitizer:"disableSanitizer",inline:"inline",clipboard:"clipboard",clipboardButtonComponent:"clipboardButtonComponent",clipboardButtonTemplate:"clipboardButtonTemplate",emoji:"emoji",katex:"katex",katexOptions:"katexOptions",mermaid:"mermaid",mermaidOptions:"mermaidOptions",lineHighlight:"lineHighlight",line:"line",lineOffset:"lineOffset",lineNumbers:"lineNumbers",start:"start",commandLine:"commandLine",filterOutput:"filterOutput",host:"host",prompt:"prompt",output:"output",user:"user"},outputs:{error:"error",load:"load",ready:"ready"},features:[st],ngContentSelectors:bh,decls:1,vars:0,template:function(t,r){t&1&&(ye(),he(0))},encapsulation:2})}}return n})();function Ps(n){return[Od,n?.loader??[],n?.clipboardOptions??[],n?.markedOptions??[],n?.mermaidOptions??[],n?.markedExtensions??[],n?.sanitize??[]]}var Fn=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[Ps(e)]}}static forChild(){return{ngModule:n}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=ve({type:n})}static{this.\u0275inj=be({})}}return n})();var Os=class{_box;_destroyed=new $;_resizeSubject=new $;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new dn(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(He(e=>e.some(t=>t.target===i)),Mr({bufferSize:1,refCount:!0}),ue(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ld=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=c(fe);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Os(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xr=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Ls=class extends xr{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Dn=class extends xr{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Bs=class extends xr{element;constructor(i){super(),this.element=i instanceof te?i.nativeElement:i}},zs=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Ls)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Dn)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Bs)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Bd=(()=>{class n extends Dn{constructor(){let e=c(lt),t=c(Ke);super(e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[S]})}return n})(),wr=(()=>{class n extends zs{_moduleRef=c(Cl,{optional:!0});_document=c(at);_viewContainerRef=c(Ke);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new C;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[S]})}return n})(),zd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({})}return n})();var Vs=["*"];function Ah(n,i){n&1&&he(0)}var Nh=["tabListContainer"],Ph=["tabList"],Oh=["tabListInner"],Lh=["nextPaginator"],Bh=["previousPaginator"],zh=["content"];function Uh(n,i){}var jh=["tabBodyWrapper"],$h=["tabHeader"];function Hh(n,i){}function Vh(n,i){if(n&1&&St(0,Hh,0,0,"ng-template",12),n&2){let e=x().$implicit;g("cdkPortalOutlet",e.templateLabel)}}function qh(n,i){if(n&1&&b(0),n&2){let e=x().$implicit;j(e.textLabel)}}function Gh(n,i){if(n&1){let e=Qe();d(0,"div",7,2),T("click",function(){let r=Ie(e),o=r.$implicit,a=r.$index,s=x(),l=jt(1);return ke(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=Ie(e).$index,a=x();return ke(a._tabFocusChanged(r,o))}),F(2,"span",8)(3,"div",9),d(4,"span",10)(5,"span",11),z(6,Vh,1,1,null,12)(7,qh,1,1),p()()()}if(n&2){let e=i.$implicit,t=i.$index,r=jt(1),o=x();oe(e.labelClass),re("mdc-tab--active",o.selectedIndex===t),g("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),Y("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),h(3),g("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),h(3),U(e.templateLabel?6:7)}}function Wh(n,i){n&1&&he(0)}function Kh(n,i){if(n&1){let e=Qe();d(0,"mat-tab-body",13),T("_onCentered",function(){Ie(e);let r=x();return ke(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Ie(e);let o=x();return ke(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Ie(e);let o=x();return ke(o._bodyCentered(r))}),p()}if(n&2){let e=i.$implicit,t=i.$index,r=x();oe(e.bodyClass),g("id",r._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),Y("tabindex",r.contentTabIndex!=null&&r.selectedIndex===t?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,t))("aria-hidden",r.selectedIndex!==t)}}var Qh=new A("MatTabContent"),Zh=(()=>{class n{template=c(lt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","matTabContent",""]],features:[B([{provide:Qh,useExisting:n}])]})}return n})(),Yh=new A("MatTabLabel"),qd=new A("MAT_TAB"),Xh=(()=>{class n extends Bd{_closestTab=c(qd,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[B([{provide:Yh,useExisting:n}]),S]})}return n})(),Gd=new A("MAT_TAB_GROUP"),qs=(()=>{class n{_viewContainerRef=c(Ke);_closestTabGroup=c(Gd,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new $;position=null;origin=null;isActive=!1;constructor(){c(an).load(si)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Dn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-tab"]],contentQueries:function(t,r,o){if(t&1&&It(o,Xh,5)(o,Zh,7,lt),t&2){let a;V(a=q())&&(r.templateLabel=a.first),V(a=q())&&(r._explicitContent=a.first)}},viewQuery:function(t,r){if(t&1&&Ze(lt,7),t&2){let o;V(o=q())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,r){t&2&&Y("id",null)},inputs:{disabled:[2,"disabled","disabled",X],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[B([{provide:qd,useExisting:n}]),st],ngContentSelectors:Vs,decls:1,vars:0,template:function(t,r){t&1&&(ye(),Or(0,Ah,1,0,"ng-template"))},encapsulation:2})}return n})(),Us="mdc-tab-indicator--active",Ud="mdc-tab-indicator--no-transition",js=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let r=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},Jh=(()=>{class n{_elementRef=c(te);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Us);return}let r=t.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;t.classList.add(Ud),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Ud),t.classList.add(Us),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Us)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",X]}})}return n})();var Wd=(()=>{class n extends Jh{elementRef=c(te);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,r){t&2&&(Y("aria-disabled",!!r.disabled),re("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",X]},features:[S]})}return n})(),jd={passive:!0},eg=650,tg=100,ng=(()=>{class n{_elementRef=c(te);_changeDetectorRef=c(Ye);_viewportRuler=c(Wl);_dir=c(qi,{optional:!0});_ngZone=c(fe);_platform=c(ze);_sharedResizeObserver=c(Ld);_injector=c(Lt);_renderer=c(Tt);_animationsDisabled=mt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new $;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new $;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new C;indexFocused=new C;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),jd),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),jd))}ngAfterContentInit(){let e=this._dir?this._dir.change:D("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Zn(32),ue(this._destroyed)),r=this._viewportRuler.change(150).pipe(ue(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Bn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Yn(o,{injector:this._injector}),Qn(e,r,t,this._items.changes,this._itemsResized()).pipe(ue(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?je:this._items.changes.pipe(We(this._items),Ae(e=>new dn(t=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>t.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Rr(1),He(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!di(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=t.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let u=this.scrollDistance,f=this.scrollDistance+r;s<u?this.scrollDistance-=u-s:l>f&&(this.scrollDistance+=Math.min(l-f,s-u))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,r=e-t>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Sr(eg,tg).pipe(ue(Qn(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",X],selectedIndex:[2,"selectedIndex","selectedIndex",fn]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),ig=(()=>{class n extends ng{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new js(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,r,o){if(t&1&&It(o,Wd,4),t&2){let a;V(a=q())&&(r._items=a)}},viewQuery:function(t,r){if(t&1&&Ze(Nh,7)(Ph,7)(Oh,7)(Lh,5)(Bh,5),t&2){let o;V(o=q())&&(r._tabListContainer=o.first),V(o=q())&&(r._tabList=o.first),V(o=q())&&(r._tabListInner=o.first),V(o=q())&&(r._nextPaginator=o.first),V(o=q())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,r){t&2&&re("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",X]},features:[S],ngContentSelectors:Vs,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,r){t&1&&(ye(),d(0,"div",5,0),T("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),F(2,"div",6),p(),d(3,"div",7,1),T("keydown",function(a){return r._handleKeydown(a)}),d(5,"div",8,2),T("cdkObserveContent",function(){return r._onContentChanges()}),d(7,"div",9,3),he(9),p()()(),d(10,"div",10,4),T("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),F(12,"div",6),p()),t&2&&(re("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),g("matRippleDisabled",r._disableScrollBefore||r.disableRipple),h(3),re("_mat-animation-noopable",r._animationsDisabled),h(2),Y("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),h(5),re("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),g("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[er,gc],styles:[`.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}
`],encapsulation:2})}return n})(),rg=new A("MAT_TABS_CONFIG"),$d=(()=>{class n extends wr{_host=c($s);_ngZone=c(fe);_centeringSub=Le.EMPTY;_leavingSub=Le.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(We(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","matTabBodyHost",""]],features:[S]})}return n})(),$s=(()=>{class n{_elementRef=c(te);_dir=c(qi,{optional:!0});_ngZone=c(fe);_injector=c(Lt);_renderer=c(Tt);_diAnimationsDisabled=mt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Le.EMPTY;_position;_previousPosition;_onCentering=new C;_beforeCentering=new C;_afterLeavingCenter=new C;_onCentered=new C(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(Ye);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Yn(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Yn(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,r){if(t&1&&Ze($d,5)(zh,5),t&2){let o;V(o=q())&&(r._portalHost=o.first),V(o=q())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,r){t&2&&Y("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,r){t&1&&(d(0,"div",1,0),St(2,Uh,0,0,"ng-template",2),p()),t&2&&re("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[$d,Gl],styles:[`.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-tab-body-animating>.mat-mdc-tab-body-content{min-height:1px}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}
`],encapsulation:2})}return n})(),Kd=(()=>{class n{_elementRef=c(te);_changeDetectorRef=c(Ye);_ngZone=c(fe);_tabsSubscription=Le.EMPTY;_tabLabelSubscription=Le.EMPTY;_tabBodySubscription=Le.EMPTY;_diAnimationsDisabled=mt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Bt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new C;focusChange=new C;animationDone=new C;selectedTabChange=new C(!0);_groupId;_isServer=!c(ze).isBrowser;constructor(){let e=c(rg,{optional:!0});this._groupId=c(Ki).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,r)=>{t.position=r-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),r;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=t[o];break}!r&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(We(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Hs;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Qn(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,r){t.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,r)=>t._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,r,o){if(t&1&&It(o,qs,5),t&2){let a;V(a=q())&&(r._allTabs=a)}},viewQuery:function(t,r){if(t&1&&Ze(jh,5)($h,5)($s,5),t&2){let o;V(o=q())&&(r._tabBodyWrapper=o.first),V(o=q())&&(r._tabHeader=o.first),V(o=q())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,r){t&2&&(Y("mat-align-tabs",r.alignTabs),oe("mat-"+(r.color||"primary")),Br("--mat-tab-animation-duration",r.animationDuration),re("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",X],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",X],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",X],selectedIndex:[2,"selectedIndex","selectedIndex",fn],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",fn],disablePagination:[2,"disablePagination","disablePagination",X],disableRipple:[2,"disableRipple","disableRipple",X],preserveContent:[2,"preserveContent","preserveContent",X],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[B([{provide:Gd,useExisting:n}])],ngContentSelectors:Vs,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,r){t&1&&(ye(),d(0,"mat-tab-header",3,0),T("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),ne(2,Gh,8,17,"div",4,Nn),p(),z(4,Wh,1,0),d(5,"div",5,1),ne(7,Kh,1,10,"mat-tab-body",6,Nn),p()),t&2&&(g("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Sl("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),h(2),ie(r._tabs),h(2),U(r._isServer?4:-1),h(),re("_mat-animation-noopable",r._animationsDisabled()),h(2),ie(r._tabs))},dependencies:[ig,Wd,Ha,er,wr,$s],styles:[`.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}
`],encapsulation:2})}return n})(),Hs=class{index;tab};var Qd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[Ve]})}return n})();var ag=(n,i)=>i.label;function sg(n,i){if(n&1&&(d(0,"mat-tab",1),F(1,"markdown",2),pe(2,"language"),p()),n&2){let e=i.$implicit;g("label",e.label),h(),g("data",Re(2,2,e.content,e.language))}}var Oo=class n{codeAssets=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["code-tabs"]],inputs:{codeAssets:"codeAssets"},decls:3,vars:0,consts:[["mat-stretch-tabs","false","dynamicHeight",""],[3,"label"],[3,"data"]],template:function(e,t){e&1&&(d(0,"mat-tab-group",0),ne(1,sg,3,5,"mat-tab",1,ag),p()),e&2&&(h(),ie(t.codeAssets))},dependencies:[Qd,qs,Kd,Fn,En,Di],encapsulation:2})};var lg=["*"],Lo=class n{title="";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["demo-card"]],inputs:{title:"title"},ngContentSelectors:lg,decls:5,vars:1,consts:[[1,"demo-card"],[1,"demo-body"]],template:function(e,t){e&1&&(ye(),Me(0,"div",0)(1,"h3"),b(2),Be(),Me(3,"div",1),he(4),Be()()),e&2&&(h(2),j(t.title))},styles:[".demo-card[_ngcontent-%COMP%]{border:1px solid #eee;border-radius:10px;padding:20px;margin-bottom:30px;background:#fff}"]})};function cg(n,i){if(n&1&&(F(0,"markdown",0),pe(1,"json"),pe(2,"language")),n&2){let e=x();g("data",Re(2,3,un(1,1,e.value),"javascript"))}}var Bo=class n{value;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["result-viewer"]],inputs:{value:"value"},decls:1,vars:1,consts:[[3,"data"]],template:function(e,t){e&1&&z(0,cg,3,6,"markdown",0),e&2&&U(t.value?0:-1)},dependencies:[Fn,En,Ol,Di],encapsulation:2})};var Zd=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  FieldArray,\r
  FormRow,\r
  TextField,\r
  NumberField,\r
  OutputField,\r
  FormDivider,\r
  SubmitButton,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-cart-builder',\r
  template: \`\r
    <preforms-dynamic-form\r
      className="cart-form"\r
      (submittedData)="logData($event)"\r
      [fields]="fields"\r
    />\r
  \`,\r
  styleUrl: './cart-builder.component.scss',\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class CartBuilderComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new FieldArray({\r
      key: 'items',\r
      label: 'Shopping Cart',\r
      minItems: 1,\r
      maxItems: 8,\r
      addButton: true,\r
      removeButton: true,\r
\r
      value: [{ name: 'Wireless Mouse', price: 25, qty: 1 }],\r
\r
      fields: [\r
        new FormRow({\r
          className: 'cart-row',\r
          fields: [\r
            new TextField({\r
              key: 'name',\r
              placeholder: 'Product name',\r
              required: true,\r
            }),\r
\r
            new NumberField({\r
              key: 'price',\r
              label: 'Price',\r
              min: 1,\r
              value: 0,\r
              required: true,\r
            }),\r
\r
            new NumberField({\r
              key: 'qty',\r
              label: 'Qty',\r
              min: 1,\r
              value: 1,\r
              required: true,\r
            }),\r
\r
            new OutputField({\r
              key: 'subtotal',\r
              label: 'Subtotal',\r
              calculation: 'Number(items[$index].price) * Number(items[$index].qty)',\r
              for: ['price[$index]', 'qty[$index]'],\r
              disabled: true,\r
              className: 'subtotal',\r
            }),\r
          ],\r
        }),\r
      ],\r
\r
      aggregates: [\r
        {\r
          action: 'product', // Special action: \u03A3(price \xD7 qty) across all items\r
          field: ['price', 'qty'], // Fields to multiply per item\r
          value: 2000,\r
          operator: 'lte',\r
          message: 'Cart total cannot exceed $2000',\r
        },\r
        {\r
          action: 'unique',\r
          field: 'name',\r
        },\r
      ],\r
    }),\r
\r
    new FormDivider({ label: 'Summary' }),\r
\r
    new OutputField({\r
      key: 'cartTotal',\r
      label: 'Total',\r
      disabled: true,\r
      calculation: \`\r
        items.reduce(\r
          (sum, i) => sum + (Number(i.price) * Number(i.qty)),\r
          0\r
        )\r
      \`,\r
      for: ['price[*]', 'qty[*]'],\r
    }),\r
\r
    new SubmitButton('Checkout'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var Yd=`.cart-form {\r
  max-width: 820px;\r
  padding: 5px;\r
\r
  border-radius: 12px;\r
\r
  h2 {\r
    margin-bottom: 1rem;\r
  }\r
\r
  .cart-row {\r
    // display: grid;\r
    // grid-template-columns: 2fr 1fr 1fr 1fr auto;\r
    // gap: 1rem;\r
    // align-items: center;\r
    // // margin-bottom: 1rem;\r
\r
    input {\r
      width: 100%;\r
    }\r
\r
    .output {\r
      font-weight: 600;\r
      padding: 0.5rem 0;\r
    }\r
\r
    .subtotal {\r
      display: flex;\r
      flex-direction: column;\r
      text-align: center;\r
      padding: 5px;\r
    }\r
  }\r
\r
  button {\r
    margin-top: 1rem;\r
  }\r
\r
  [type='submit'] {\r
    margin-top: 2rem;\r
    width: 100%;\r
    padding: 0.9rem;\r
    font-weight: 600;\r
    border-radius: 8px;\r
  }\r
\r
  .form-divider {\r
    margin-top: 2rem;\r
  }\r
\r
  output[formcontrolname='cartTotal'] {\r
    font-size: 1.4rem;\r
    font-weight: 700;\r
    display: block;\r
    text-align: right;\r
    margin-top: 1rem;\r
  }\r
\r
  .form-array-row {\r
    display: flex;\r
    align-items: center;\r
  }\r
\r
  .form-array-remove-btn {\r
    cursor: pointer;\r
    border: none;\r
    padding: 0.5rem 1rem;\r
    border-radius: 6px;\r
    background-color: var(--color-danger, #f44336);\r
    color: white;\r
    height: fit-content;\r
    margin-bottom: 0.25rem;\r
    margin-left: auto;\r
    margin-top: 25px;\r
  }\r
\r
  .form-array-add-btn {\r
    background-color: var(--color-success, #4caf50);\r
    color: white;\r
    border: none;\r
    padding: 0.6rem 1.2rem;\r
    border-radius: 6px;\r
    cursor: pointer;\r
  }\r
\r
  .form-array-items {\r
    padding: 0.5rem;\r
    border-radius: 8px;\r
  }\r
\r
  .form-array-hint,\r
  .form-array-error {\r
    margin-left: 20px;\r
    margin-bottom: 10px;\r
    flex-wrap: wrap;\r
    font-size: 1rem;\r
  }\r
}\r
`;function Xd(n){return n.options!==void 0}var Ti=class extends bn{kind="array";key;fields;aggregates;minItems;maxItems;addButton;removeButton;constructor(i){super(m({component:"array"},i)),this.key=i.key,this.fields=i.fields,this.aggregates=i.aggregates||[],this.value=i.value||[],this.minItems=i.minItems,this.maxItems=i.maxItems,this.addButton=i.addButton,this.removeButton=i.removeButton,i.uniqueBy&&this.aggregates.push({field:i.uniqueBy,action:"unique"})}};var Pt=class extends bn{kind="group";fields;key;constructor(i){super(m({component:"group"},i)),this.fields=i.fields,this.key=i.key}};var Kt=class extends bn{kind="wrapper";fields;constructor(i){super(m({component:"wrapper"},i)),this.fields=i.fields}};var Qt=class extends bn{kind="button";type;formaction;formmethod;command;commandfor;icons;constructor(i){super(_(m({},i),{type:i.type??"button",component:"button"})),this.type=i.type,this.formaction=i.formaction,this.formmethod=i.formmethod,this.command=i.command,this.commandfor=i.commandfor,this.icons=i.icons}};var Er=class extends Kt{constructor(i,e){let t=typeof i=="string"?{label:i,fields:e}:i;if(!t.fields)throw new Error("Missing fields");super(_(m({},t),{component:"fieldset",fields:t.fields}))}};var Si=class extends Kt{gap;position;constructor(i,e={}){let t=Array.isArray(i)?_(m({},e),{fields:i}):i;super(_(m({},t),{component:"form-row"})),this.gap=t.gap??"5px",this.position=t.position??"start"}};var Ii=class extends Pt{closeBtn;width;constructor(i){super(_(m({},i),{component:"dialog"})),this.closeBtn=i.closeBtn??!0,this.width=i.width}};var Tn=class extends Ne{for;calculation;constructor(i){super(_(m({},i),{component:"output"})),this.for=i.for,this.calculation=i.calculation}};var we=class extends Ne{type;constructor(i){super(_(m({},i),{component:"input"})),this.type=i.type}};var N=class extends we{constructor(i,e,t=!1){let r=typeof i=="string"?{key:i,value:e,required:t}:i;super(_(m({},r),{key:r.key,type:"text"}))}};var Sn=class extends Ne{constructor(i,e,t=!1){let r=typeof i=="string"?{key:i,value:e,required:t}:i;super(_(m({},r),{key:r.key,component:"textarea",type:"text"}))}};var Wn=class extends we{constructor(i,e,t=!1){let r=typeof i=="string"?{key:i,value:e,required:t}:i;super(_(m({},r),{key:r.key,type:"date"}))}};var Oe=class extends Ne{constructor(i,e,t){let r=typeof i=="string"?{key:i,value:t,options:e}:i;super(_(m({},r),{key:r.key,component:"select"}))}};var In=class extends Ne{constructor(i,e){let t=typeof i=="string"?{key:i,value:e}:i;super(_(m({},t),{type:"checkbox",component:"checkbox"}))}};var zo=class extends Ti{constructor(i,e,t){let r=typeof i=="string"?{key:i,value:t,options:e}:i,o=r.options.map(a=>new Mt(a)).map(a=>new In(a.value,a.value));super(_(m({},r),{fields:o,component:"checkbox-group"}))}};var ki=class extends Ne{constructor(i,e,t){let r=typeof i=="string"?{key:i,options:e,value:t}:i;super(_(m({},r),{component:"radio"}))}};var ge=class extends Ne{constructor(i,e,t=!1){let r=typeof i=="string"?{key:i,value:e,required:t}:i;super(_(m({},r),{key:r.key,type:"number",component:"number"}))}};var Jd=["AF, Afghanistan","AL, Albania","DZ, Algeria","AD, Andorra","AO, Angola","AG, Antigua and Barbuda","AR, Argentina","AM, Armenia","AU, Australia","AT, Austria","AZ, Azerbaijan","BS, Bahamas","BH, Bahrain","BD, Bangladesh","BB, Barbados","BY, Belarus","BE, Belgium","BZ, Belize","BJ, Benin","BT, Bhutan","BO, Bolivia","BA, Bosnia and Herzegovina","BW, Botswana","BR, Brazil","BN, Brunei","BG, Bulgaria","BF, Burkina Faso","BI, Burundi","KH, Cambodia","CM, Cameroon","CA, Canada","CV, Cape Verde","CF, Central African Republic","TD, Chad","CL, Chile","CN, China","CO, Colombia","KM, Comoros","CG, Congo","CR, Costa Rica","HR, Croatia","CU, Cuba","CY, Cyprus","CZ, Czech Republic","DK, Denmark","DJ, Djibouti","DM, Dominica","DO, Dominican Republic","EC, Ecuador","EG, Egypt","SV, El Salvador","GQ, Equatorial Guinea","ER, Eritrea","EE, Estonia","SZ, Eswatini","ET, Ethiopia","FJ, Fiji","FI, Finland","FR, France","GA, Gabon","GM, Gambia","GE, Georgia","DE, Germany","GH, Ghana","GR, Greece","GD, Grenada","GT, Guatemala","GN, Guinea","GW, Guinea-Bissau","GY, Guyana","HT, Haiti","HN, Honduras","HU, Hungary","IS, Iceland","IN, India","ID, Indonesia","IR, Iran","IQ, Iraq","IE, Ireland","IL, Israel","IT, Italy","JM, Jamaica","JP, Japan","JO, Jordan","KZ, Kazakhstan","KE, Kenya","KI, Kiribati","KW, Kuwait","KG, Kyrgyzstan","LA, Laos","LV, Latvia","LB, Lebanon","LS, Lesotho","LR, Liberia","LY, Libya","LI, Liechtenstein","LT, Lithuania","LU, Luxembourg","MG, Madagascar","MW, Malawi","MY, Malaysia","MV, Maldives","ML, Mali","MT, Malta","MH, Marshall Islands","MR, Mauritania","MU, Mauritius","MX, Mexico","FM, Micronesia","MD, Moldova","MC, Monaco","MN, Mongolia","ME, Montenegro","MA, Morocco","MZ, Mozambique","MM, Myanmar","NA, Namibia","NR, Nauru","NP, Nepal","NL, Netherlands","NZ, New Zealand","NI, Nicaragua","NE, Niger","NG, Nigeria","KP, North Korea","MK, North Macedonia","NO, Norway","OM, Oman","PK, Pakistan","PW, Palau","PA, Panama","PG, Papua New Guinea","PY, Paraguay","PE, Peru","PH, Philippines","PL, Poland","PT, Portugal","QA, Qatar","RO, Romania","RU, Russia","RW, Rwanda","KN, Saint Kitts and Nevis","LC, Saint Lucia","VC, Saint Vincent and the Grenadines","WS, Samoa","SM, San Marino","ST, Sao Tome and Principe","SA, Saudi Arabia","SN, Senegal","RS, Serbia","SC, Seychelles","SL, Sierra Leone","SG, Singapore","SK, Slovakia","SI, Slovenia","SB, Solomon Islands","SO, Somalia","ZA, South Africa","KR, South Korea","SS, South Sudan","ES, Spain","LK, Sri Lanka","SD, Sudan","SR, Suriname","SE, Sweden","CH, Switzerland","SY, Syria","TW, Taiwan","TJ, Tajikistan","TZ, Tanzania","TH, Thailand","TG, Togo","TO, Tonga","TT, Trinidad and Tobago","TN, Tunisia","TR, Turkey","TM, Turkmenistan","TV, Tuvalu","UG, Uganda","UA, Ukraine","AE, United Arab Emirates","GB, United Kingdom","US, United States","UY, Uruguay","UZ, Uzbekistan","VU, Vanuatu","VA, Vatican City","VE, Venezuela","VN, Vietnam","YE, Yemen","ZM, Zambia","ZW, Zimbabwe"];var Mi=class extends Oe{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(_(m({},t),{key:"country",options:t.options??Jd}))}};var Ri=class extends N{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"city",aria:{"aria-label":"City"}},t))}};var Ai=class extends N{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"postalCode",aria:{"aria-label":"Postal Code"}},t))}};var Ni=class extends N{constructor(i="",e=!1){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"state",aria:{"aria-label":"State"}},t))}};var Pi=class extends N{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"street",aria:{"aria-label":"Street"}},t))}};var Uo=class extends Pt{constructor(i,e=!0,t="address"){let r=i&&"street"in i||i&&"city"in i?i:{value:i,required:e,key:t},o=r.fields??[new Pi(r.value?.street),new Ri(r.value?.city),new Ni(r.value?.state),new Ai(r.value?.postalCode),new Mi(r.value?.country)];super(_(m({fields:o},r),{key:t}))}};var jo=class extends Qt{constructor(i="Confirm"){let e=typeof i=="string"?{label:i,type:"submit"}:i;super(_(m({},e),{type:e.type??"submit"}))}};var em=[{code:"AED",name:"UAE Dirham",symbol:"\u062F.\u0625"},{code:"AFN",name:"Afghan Afghani",symbol:"\u060B"},{code:"ALL",name:"Albanian Lek",symbol:"L"},{code:"AMD",name:"Armenian Dram",symbol:"\u058F"},{code:"ANG",name:"Netherlands Antillean Guilder",symbol:"\u0192"},{code:"AOA",name:"Angolan Kwanza",symbol:"Kz"},{code:"ARS",name:"Argentine Peso",symbol:"$"},{code:"AUD",name:"Australian Dollar",symbol:"$"},{code:"AWG",name:"Aruban Florin",symbol:"\u0192"},{code:"AZN",name:"Azerbaijani Manat",symbol:"\u20BC"},{code:"BAM",name:"Bosnia and Herzegovina Convertible Mark",symbol:"KM"},{code:"BBD",name:"Barbadian Dollar",symbol:"$"},{code:"BDT",name:"Bangladeshi Taka",symbol:"\u09F3"},{code:"BGN",name:"Bulgarian Lev",symbol:"\u043B\u0432"},{code:"BHD",name:"Bahraini Dinar",symbol:".\u062F.\u0628"},{code:"BIF",name:"Burundian Franc",symbol:"FBu"},{code:"BMD",name:"Bermudian Dollar",symbol:"$"},{code:"BND",name:"Brunei Dollar",symbol:"$"},{code:"BOB",name:"Bolivian Boliviano",symbol:"Bs."},{code:"BRL",name:"Brazilian Real",symbol:"R$"},{code:"BSD",name:"Bahamian Dollar",symbol:"$"},{code:"BTN",name:"Bhutanese Ngultrum",symbol:"Nu."},{code:"BWP",name:"Botswana Pula",symbol:"P"},{code:"BYN",name:"Belarusian Ruble",symbol:"Br"},{code:"BZD",name:"Belize Dollar",symbol:"$"},{code:"CAD",name:"Canadian Dollar",symbol:"$"},{code:"CDF",name:"Congolese Franc",symbol:"FC"},{code:"CHF",name:"Swiss Franc",symbol:"CHF"},{code:"CLP",name:"Chilean Peso",symbol:"$"},{code:"CNY",name:"Chinese Yuan",symbol:"\xA5"},{code:"COP",name:"Colombian Peso",symbol:"$"},{code:"CRC",name:"Costa Rican Col\xF3n",symbol:"\u20A1"},{code:"CUP",name:"Cuban Peso",symbol:"$"},{code:"CVE",name:"Cape Verdean Escudo",symbol:"$"},{code:"CZK",name:"Czech Koruna",symbol:"K\u010D"},{code:"DJF",name:"Djiboutian Franc",symbol:"Fdj"},{code:"DKK",name:"Danish Krone",symbol:"kr"},{code:"DOP",name:"Dominican Peso",symbol:"$"},{code:"DZD",name:"Algerian Dinar",symbol:"\u062F\u062C"},{code:"EGP",name:"Egyptian Pound",symbol:"\xA3"},{code:"ERN",name:"Eritrean Nakfa",symbol:"Nfk"},{code:"ETB",name:"Ethiopian Birr",symbol:"Br"},{code:"EUR",name:"Euro",symbol:"\u20AC"},{code:"FJD",name:"Fijian Dollar",symbol:"$"},{code:"GBP",name:"British Pound",symbol:"\xA3"},{code:"GEL",name:"Georgian Lari",symbol:"\u20BE"},{code:"GHS",name:"Ghanaian Cedi",symbol:"\u20B5"},{code:"GMD",name:"Gambian Dalasi",symbol:"D"},{code:"GNF",name:"Guinean Franc",symbol:"FG"},{code:"GTQ",name:"Guatemalan Quetzal",symbol:"Q"},{code:"GYD",name:"Guyanese Dollar",symbol:"$"},{code:"HKD",name:"Hong Kong Dollar",symbol:"$"},{code:"HNL",name:"Honduran Lempira",symbol:"L"},{code:"HRK",name:"Croatian Kuna",symbol:"kn"},{code:"HTG",name:"Haitian Gourde",symbol:"G"},{code:"HUF",name:"Hungarian Forint",symbol:"Ft"},{code:"IDR",name:"Indonesian Rupiah",symbol:"Rp"},{code:"ILS",name:"Israeli New Shekel",symbol:"\u20AA"},{code:"INR",name:"Indian Rupee",symbol:"\u20B9"},{code:"IQD",name:"Iraqi Dinar",symbol:"\u0639.\u062F"},{code:"IRR",name:"Iranian Rial",symbol:"\uFDFC"},{code:"ISK",name:"Icelandic Kr\xF3na",symbol:"kr"},{code:"JMD",name:"Jamaican Dollar",symbol:"$"},{code:"JPY",name:"Japanese Yen",symbol:"\xA5"},{code:"JOD",name:"Jordanian Dinar",symbol:"\u062F.\u0627"},{code:"KES",name:"Kenyan Shilling",symbol:"Sh"},{code:"KGS",name:"Kyrgyzstani Som",symbol:"\u0441"},{code:"KHR",name:"Cambodian Riel",symbol:"\u17DB"},{code:"KRW",name:"South Korean Won",symbol:"\u20A9"},{code:"KWD",name:"Kuwaiti Dinar",symbol:"\u062F.\u0643"},{code:"KZT",name:"Kazakhstani Tenge",symbol:"\u20B8"},{code:"LAK",name:"Lao Kip",symbol:"\u20AD"},{code:"LBP",name:"Lebanese Pound",symbol:"\xA3"},{code:"LKR",name:"Sri Lankan Rupee",symbol:"Rs"},{code:"LRD",name:"Liberian Dollar",symbol:"$"},{code:"LYD",name:"Libyan Dinar",symbol:"\u0644.\u062F"},{code:"MAD",name:"Moroccan Dirham",symbol:"\u062F.\u0645."},{code:"MDL",name:"Moldovan Leu",symbol:"L"},{code:"MGA",name:"Malagasy Ariary",symbol:"Ar"},{code:"MKD",name:"Macedonian Denar",symbol:"\u0434\u0435\u043D"},{code:"MMK",name:"Myanmar Kyat",symbol:"Ks"},{code:"MNT",name:"Mongolian T\xF6gr\xF6g",symbol:"\u20AE"},{code:"MOP",name:"Macanese Pataca",symbol:"P"},{code:"MUR",name:"Mauritian Rupee",symbol:"\u20A8"},{code:"MXN",name:"Mexican Peso",symbol:"$"},{code:"MYR",name:"Malaysian Ringgit",symbol:"RM"},{code:"NAD",name:"Namibian Dollar",symbol:"$"},{code:"NGN",name:"Nigerian Naira",symbol:"\u20A6"},{code:"NIO",name:"Nicaraguan C\xF3rdoba",symbol:"C$"},{code:"NOK",name:"Norwegian Krone",symbol:"kr"},{code:"NPR",name:"Nepalese Rupee",symbol:"\u20A8"},{code:"NZD",name:"New Zealand Dollar",symbol:"$"},{code:"OMR",name:"Omani Rial",symbol:"\u0631.\u0639."},{code:"PAB",name:"Panamanian Balboa",symbol:"B/."},{code:"PEN",name:"Peruvian Sol",symbol:"S/"},{code:"PHP",name:"Philippine Peso",symbol:"\u20B1"},{code:"PKR",name:"Pakistani Rupee",symbol:"\u20A8"},{code:"PLN",name:"Polish Z\u0142oty",symbol:"z\u0142"},{code:"PYG",name:"Paraguayan Guaran\xED",symbol:"\u20B2"},{code:"QAR",name:"Qatari Riyal",symbol:"\u0631.\u0642"},{code:"RON",name:"Romanian Leu",symbol:"lei"},{code:"RSD",name:"Serbian Dinar",symbol:"\u0434\u0438\u043D"},{code:"RUB",name:"Russian Ruble",symbol:"\u20BD"},{code:"RWF",name:"Rwandan Franc",symbol:"RF"},{code:"SAR",name:"Saudi Riyal",symbol:"\u0631.\u0633"},{code:"SEK",name:"Swedish Krona",symbol:"kr"},{code:"SGD",name:"Singapore Dollar",symbol:"$"},{code:"SLL",name:"Sierra Leonean Leone",symbol:"Le"},{code:"SOS",name:"Somali Shilling",symbol:"Sh"},{code:"SRD",name:"Surinamese Dollar",symbol:"$"},{code:"SSP",name:"South Sudanese Pound",symbol:"\xA3"},{code:"THB",name:"Thai Baht",symbol:"\u0E3F"},{code:"TND",name:"Tunisian Dinar",symbol:"\u062F.\u062A"},{code:"TRY",name:"Turkish Lira",symbol:"\u20BA"},{code:"TWD",name:"New Taiwan Dollar",symbol:"$"},{code:"UAH",name:"Ukrainian Hryvnia",symbol:"\u20B4"},{code:"UGX",name:"Ugandan Shilling",symbol:"Sh"},{code:"USD",name:"US Dollar",symbol:"$"},{code:"UYU",name:"Uruguayan Peso",symbol:"$"},{code:"UZS",name:"Uzbekistani So\u02BBm",symbol:"so\u02BBm"},{code:"VES",name:"Venezuelan Bol\xEDvar",symbol:"Bs."},{code:"VND",name:"Vietnamese \u0110\u1ED3ng",symbol:"\u20AB"},{code:"XAF",name:"Central African CFA Franc",symbol:"FCFA"},{code:"XOF",name:"West African CFA Franc",symbol:"CFA"},{code:"YER",name:"Yemeni Rial",symbol:"\uFDFC"},{code:"ZAR",name:"South African Rand",symbol:"R"},{code:"ZMW",name:"Zambian Kwacha",symbol:"ZK"},{code:"ZWL",name:"Zimbabwean Dollar",symbol:"$"}];var $o=class extends Oe{constructor(i={}){let a=i,{currencies:e=em,labelFormat:t="code-name"}=a,r=Xs(a,["currencies","labelFormat"]),o=e.map(s=>new Mt(s.code,fg(s,t)));super(m({key:"currency",label:"Currency",options:o},r))}};function fg(n,i){switch(i){case"code":return n.code;case"name":return n.name;case"symbol-code":return n.symbol?`${n.symbol} ${n.code}`:n.code;default:return`${n.code} \u2014 ${n.name}`}}var Ho=class extends Wn{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"dateOfBirth"},t))}};var Vo=class extends Sn{constructor(i="",e=!1){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"description",aria:{"aria-label":"Description"}},t))}};var Ot=class extends we{constructor(i="",e=!0){let t=typeof i=="string"?{value:i}:i;super(_(m({},t),{key:t.key||"email",type:"email",required:e}))}};var qo=class extends N{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"firstName",aria:{"aria-label":"First Name"}},t))}};var Go=class extends N{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"fullName",aria:{"aria-label":"Full Name"}},t))}};var Wo=class extends N{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"lastName",aria:{"aria-label":"Last Name"}},t))}};var Ko=class extends N{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"name",aria:{"aria-label":"Name"}},t))}};var tt=class extends we{constructor(i="",e=!0){let t=typeof i=="string"?{value:i}:i;super(_(m({},t),{key:t.key||"password",type:"password",required:e}))}};var Qo=class extends we{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"phoneNumber",type:"tel"},t))}};var Zo=class extends Qt{constructor(i="Reset"){let e=typeof i=="string"?{label:i,type:"reset"}:i;super(_(m({},e),{type:"reset"}))}};var ce=class extends Qt{constructor(i="Submit"){let e=typeof i=="string"?{type:"submit",label:i}:i;super(_(m({},e),{type:"submit"}))}};var Oi=class extends N{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"username",aria:{"aria-label":"User Name"}},t))}};var Yo=class n extends ki{static OPTIONS=["male","female"];constructor(i="",e=!1){let t=typeof i=="string"?{value:i,required:e}:i;super(_(m({},t),{key:"gender",options:n.OPTIONS,aria:{"aria-label":"Gender"}}))}};var Xo=class extends N{constructor(i="",e=!1){let t=typeof i=="string"?{value:i,required:e}:i;super(m({key:"middleName",aria:{"aria-label":"Middle Name"}},t))}};var ft=class extends vn{constructor(i={}){super(_(m({},i),{component:"form-divider"}))}};var Zt=class extends vn{constructor(i){let e=typeof i=="string"?{value:i}:i;super(_(m({},e),{component:"form-description"}))}};var Jo=class extends vn{options;constructor(i){let e=Array.isArray(i)?{options:i}:i;super(_(m({className:e.className||"form-list"},e),{component:"form-list"})),this.options=e.options}};var Li=class extends vn{src;alt;width;height;constructor(i){let e=typeof i=="string"?{src:i}:i;super(_(m({className:e.className||"form-image"},e),{component:"form-image"})),this.src=e.src,this.alt=e.alt,this.width=e.width,this.height=e.height}};var ea=class{#e=c(ri,{optional:!0});destroyRef=c($i);get __eventService(){if(!this.#e)throw new Error(`

        [FormHost Error] EventService not found!

        This usually happens if you did NOT add:
        providers: [EventService]
        to this component or any parent component.
        
        Quick Fix:
          1. Add 'providers: [EventService]' to this component, or
          2. Make sure a parent component provides EventService.

        Without EventService, @FormEvent and @FormFieldEvent decorators and form events will NOT work.
          `);return this.#e}constructor(){this.__eventService.bindDecoratedHandlers(this,this.destroyRef)}};function tm(){return[rc,oi,nc,ic,{provide:ri,useFactory:n=>n??new ri,deps:[[new pl,new ul,ri]]}]}var kn=class kn extends ea{formSchema={fields:[]};formId=`dynamic-form-${crypto.randomUUID()}`;className="";set inputFields(i){this.formSchema={fields:i??[]},this.init()}set schema(i){i&&(this.formSchema=i,this.formId=i.id||this.formId,this.init())}set value(i){i&&this.form.patchValue(i)}submitted=new C;submittedData=new C;fieldChange=new C;get form(){return this.formService.form}get fields(){return this.formService.fields}get isInvalid(){return this.form.invalid}formService=c(oi);onReset(i){i?.preventDefault(),this.formService.reset()}onSubmit(i){if(this.form.markAllAsTouched(),this.form.updateValueAndValidity(),this.isInvalid)return;let e=this.formService.getMetadata(i);this.submitted.emit(this.formService.getEventPayload(e)),this.submittedData.emit(this.formService.getValues(e.buttonData))}onFieldChange(i){this.fieldChange.next(i)}init(){let i=this.formSchema.fields;this.formService.init(i)}static \u0275fac=(()=>{let i;return function(t){return(i||(i=k(kn)))(t||kn)}})();static \u0275cmp=v({type:kn,selectors:[["preforms-dynamic-form"]],inputs:{formId:"formId",className:"className",inputFields:[0,"fields","inputFields"],schema:"schema",value:"value"},outputs:{submitted:"submitted",submittedData:"submittedData",fieldChange:"fieldChange"},features:[B([tm()]),S],decls:2,vars:6,consts:[[3,"reset","ngSubmit","id","formGroup"],[3,"fields","control"]],template:function(e,t){e&1&&(d(0,"form",0),T("reset",function(o){return t.onReset(o)})("ngSubmit",function(o){return t.onSubmit(o)}),F(1,"preforms-dynamic-field-group",1),p()),e&2&&(oe(t.className),g("id",t.formId)("formGroup",t.form),h(),g("fields",t.fields)("control",t.form))},dependencies:[ae,Vr,ni,Jl,yn],encapsulation:2,changeDetection:0})};H([za("request:reset")],kn.prototype,"onReset",1),H([za("request:submit")],kn.prototype,"onSubmit",1),H([ii({field:"*",type:"change"})],kn.prototype,"onFieldChange",1);var W=kn;var hg=n=>["preforms-form-button",n];function gg(n,i){if(n&1&&F(0,"preforms-field-icon",1),n&2){let e=i.$implicit,t=x();g("icon",e)("field",t.field)("control",t.control)}}function bg(n,i){if(n&1&&F(0,"preforms-field-icon",1),n&2){let e=i.$implicit,t=x();g("icon",e)("field",t.field)("control",t.control)}}var ht=class extends le{get leftIcons(){return this.field.icons?.filter(i=>i.side==="left")??[]}get rightIcons(){return this.field.icons?.filter(i=>i.side==="right")??[]}};R(ht,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(ht)))(t||ht)}})()),R(ht,"\u0275cmp",v({type:ht,selectors:[["preforms-button-field"]],features:[S],decls:6,vars:13,consts:[[3,"type","value","disabled"],[3,"icon","field","control"]],template:function(e,t){e&1&&(d(0,"button",0),ne(1,gg,1,3,"preforms-field-icon",1,Ce),b(3),ne(4,bg,1,3,"preforms-field-icon",1,Ce),p()),e&2&&(oe(Ee(11,hg,t.field.className)),g("type",t.field.type)("value",t.field.value)("disabled",t.field.disabled),Y("name",t.field.name)("command",t.field.command)("commandfor",t.field.commandfor)("formaction",t.field.formaction,vl)("formmethod",t.field.formmethod),h(),ie(t.leftIcons),h(2),_e(" ",t.field.label," "),h(),ie(t.rightIcons))},dependencies:[ae,Wr],encapsulation:2})),ht=H([se({component:"button"})],ht);function vg(n,i){if(n&1){let e=Qe();d(0,"label")(1,"input",3),T("change",function(r){Ie(e);let o=x();return ke(o.update(r.target))}),p(),d(2,"span",4),b(3),p(),d(4,"span",5),b(5),p()()}if(n&2){let e=i.$implicit,t=x();oe(t.field.className),h(),g("value",e.value)("checked",t.isSelected(e.value)),h(2),j(e.label),h(2),j(e.description)}}var gt=class extends le{ngOnInit(){this.field.value&&this.field.value.forEach(i=>this.control.push(new Ba(i)))}update(i){i.checked?this.control.push(new Ba(i.value)):this.control.removeAt(this.control.value.indexOf(i.value))}isSelected(i){return this.control.value.includes(i)}};R(gt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(gt)))(t||gt)}})()),R(gt,"\u0275cmp",v({type:gt,selectors:[["preforms-checkbox-group"]],features:[S],decls:5,vars:2,consts:[[1,"preforms-checkbox-group",3,"formArray"],[1,"preforms-checkbox-group-header"],[3,"class"],["type","checkbox",3,"change","value","checked"],[1,"label-text"],[1,"description"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1),b(2),p(),ne(3,vg,6,6,"label",2,Ce),p()),e&2&&(g("formArray",t.control),h(2),_e(" ",t.field.label," "),h(),ie(t.field.fields))},dependencies:[ae,ni,Xl],encapsulation:2})),gt=H([se({component:"checkbox-group"})],gt);var bt=class extends le{};R(bt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(bt)))(t||bt)}})()),R(bt,"\u0275cmp",v({type:bt,selectors:[["preforms-details-field"]],features:[S],decls:6,vars:4,consts:[[1,"form-field-hint"],[3,"fields","control"]],template:function(e,t){e&1&&(d(0,"details")(1,"summary"),b(2),p(),d(3,"div",0),b(4),p(),F(5,"preforms-dynamic-field-group",1),p()),e&2&&(h(2),j(t.field.label),h(2),j(t.field.hint),h(),g("fields",t.field.fields)("control",t.control))},dependencies:[ae,yn],encapsulation:2})),bt=H([se({component:"details"})],bt);var yg=["dialog"],_g=n=>({width:n});function Cg(n,i){n&1&&(d(0,"form",2)(1,"button",4),b(2,"\u2716\uFE0F"),p()())}var vt=class extends le{dialogRef;untilDestroyed=tc();ngAfterViewInit(){this.control.statusChanges.pipe(this.untilDestroyed()).subscribe(()=>{let i=this.dialogRef.nativeElement;this.control.disabled?i.close():i.showModal()})}setValue(i){this.dialogRef.nativeElement.returnValue&&this.control.patchValue(i.data),this.dialogRef.nativeElement.close()}};R(vt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(vt)))(t||vt)}})()),R(vt,"\u0275cmp",v({type:vt,selectors:[["preforms-dialog-field"]],viewQuery:function(e,t){if(e&1&&Ze(yg,7),e&2){let r;V(r=q())&&(t.dialogRef=r.first)}},features:[S],decls:4,vars:8,consts:[["dialog",""],[3,"id","ngStyle"],["method","dialog",1,"close-btn"],[3,"submitted","fields"],[1,"dialog-close-btn"]],template:function(e,t){e&1&&(d(0,"dialog",1,0),z(2,Cg,3,0,"form",2),d(3,"preforms-dynamic-form",3),T("submitted",function(o){return t.setValue(o)}),p()()),e&2&&(oe(t.field.className),g("id",t.field.id)("ngStyle",Ee(6,_g,t.field.width||"500px")),h(2),U(t.field.closeBtn?2:-1),h(),g("fields",t.field.fields))},dependencies:[ae,Vr,ni,W,jr,Pl],styles:[".close-btn[_ngcontent-%COMP%]{display:flex;justify-content:end}.close-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;color:inherit;font:inherit;cursor:pointer}"]})),vt=H([se({component:"dialog"})],vt);var nm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[Ve]})}return n})();var yt=class extends le{};R(yt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(yt)))(t||yt)}})()),R(yt,"\u0275cmp",v({type:yt,selectors:[["preforms-fieldset-field"]],features:[S],decls:4,vars:3,consts:[[3,"fields","control"]],template:function(e,t){e&1&&(d(0,"fieldset")(1,"legend"),b(2),p(),F(3,"preforms-dynamic-field-group",0),p()),e&2&&(h(2),j(t.field.label),h(),g("fields",t.field.fields)("control",t.control))},dependencies:[ae,yn,nm],encapsulation:2})),yt=H([se({component:"fieldset"})],yt);var Bi=class n{ariaAttributes;el=c(te);renderer=c(Tt);ngOnChanges(){this.ariaAttributes&&Object.entries(this.ariaAttributes).forEach(([i,e])=>{e?this.renderer.setAttribute(this.el.nativeElement,i,String(e)):this.renderer.removeAttribute(this.el.nativeElement,i)})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["","pfAria",""]],inputs:{ariaAttributes:[0,"pfAria","ariaAttributes"]},features:[st]})};var xg=["*"],wg=n=>["preforms-form-field",n];function Eg(n,i){if(n&1&&(d(0,"label",0),b(1),p()),n&2){let e=x();g("for",e.field.id),h(),_e(" ",e.field.label," ")}}function Fg(n,i){if(n&1&&F(0,"preforms-field-icon",2),n&2){let e=i.$implicit,t=x();g("icon",e)("field",t.field)("control",t.control)}}function Dg(n,i){if(n&1&&F(0,"preforms-field-icon",2),n&2){let e=i.$implicit,t=x();g("icon",e)("field",t.field)("control",t.control)}}function Tg(n,i){if(n&1&&(d(0,"small",3),b(1),p()),n&2){let e=x();h(),_e(" ",e.field.hint," ")}}function Sg(n,i){if(n&1&&(d(0,"p",4),b(1),p()),n&2){let e=x();h(),_e(" ",e.error," ")}}var Yt=class n{field;control;error;get leftIcons(){return this.field.icons?.filter(i=>i.side==="left")??[]}get rightIcons(){return this.field.icons?.filter(i=>i.side==="right")??[]}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["preforms-form-field"]],inputs:{field:"field",control:"control",error:"error"},ngContentSelectors:xg,decls:10,vars:7,consts:[[1,"preforms-form-field-label",3,"for"],[1,"preforms-form-field-row"],[3,"icon","field","control"],[1,"preforms-form-field-hint"],["aria-live","polite",1,"preforms-form-field-error"]],template:function(e,t){e&1&&(ye(),d(0,"div"),z(1,Eg,2,2,"label",0),d(2,"div",1),ne(3,Fg,1,3,"preforms-field-icon",2,Ce),he(5),ne(6,Dg,1,3,"preforms-field-icon",2,Ce),p(),z(8,Tg,2,1,"small",3),z(9,Sg,2,1,"p",4),p()),e&2&&(oe(Ee(5,wg,t.field.className)),h(),U(t.field.label?1:-1),h(2),ie(t.leftIcons),h(3),ie(t.rightIcons),h(2),U(t.field.hint?8:-1),h(),U(t.error?9:-1))},dependencies:[Wr],encapsulation:2})};function Ig(n,i){if(n&1&&(d(0,"option",3),b(1),p()),n&2){let e=i.$implicit;g("value",e.value),h(),_e(" ",e.label," ")}}function kg(n,i){if(n&1&&(d(0,"datalist",2),ne(1,Ig,2,2,"option",3,Ce),p()),n&2){let e=x();g("id",e.listName),h(),ie(e.field.options)}}var _t=class extends le{get listName(){return this.field.options?`${this.field.id}-list`:void 0}};R(_t,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(_t)))(t||_t)}})()),R(_t,"\u0275cmp",v({type:_t,selectors:[["preforms-input-field"]],features:[S],decls:3,vars:15,consts:[[3,"field","control","error"],[1,"preforms-input-field",3,"id","type","name","pfAria","formControl"],[1,"preforms-form-field-datalist",3,"id"],[1,"preforms-form-field-datalist-option",3,"value"]],template:function(e,t){e&1&&(d(0,"preforms-form-field",0),F(1,"input",1),z(2,kg,3,1,"datalist",2),p()),e&2&&(g("field",t.field)("control",t.control)("error",t.error),h(),g("id",t.field.id)("type",t.field.type)("name",t.field.name)("pfAria",t.field.aria)("formControl",t.control),Y("list",t.listName)("multiple",t.field.multiple)("readonly",t.field.readonly)("spellcheck",t.field.spellcheck)("placeholder",t.field.placeholder)("autocomplete",t.field.autocomplete),h(),U(t.field.options?2:-1))},dependencies:[Yt,ae,qr,Gr,gn,ct,dt,Bi],encapsulation:2})),_t=H([se({component:"input"})],_t);function Mg(n,i){if(n&1&&(d(0,"label"),F(1,"input",4),d(2,"span",5),b(3),p(),d(4,"span",6),b(5),p()()),n&2){let e=i.$implicit,t=x();oe(t.field.className),h(),g("id",t.field.id)("name",t.field.key)("value",e.value)("formControl",t.control),h(2),j(e.label),h(2),j(e.description)}}function Rg(n,i){if(n&1&&(d(0,"small",2),b(1),p()),n&2){let e=x();h(),_e(" ",e.field.hint," ")}}function Ag(n,i){if(n&1&&(d(0,"p",3),b(1),p()),n&2){let e=x();h(),_e(" ",e.error," ")}}var Ct=class extends le{};R(Ct,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(Ct)))(t||Ct)}})()),R(Ct,"\u0275cmp",v({type:Ct,selectors:[["preforms-radio-field"]],features:[S],decls:6,vars:3,consts:[[1,"preforms-radio-field-header"],[3,"class"],[1,"preforms-form-field-hint"],["aria-live","polite",1,"preforms-form-field-error"],["type","radio",3,"id","name","value","formControl"],[1,"label-text"],[1,"description"]],template:function(e,t){e&1&&(d(0,"strong",0),b(1),p(),ne(2,Mg,6,8,"label",1,Ce),z(4,Rg,2,1,"small",2),z(5,Ag,2,1,"p",3)),e&2&&(h(),_e(" ",t.field.label," "),h(),ie(t.field.options),h(2),U(t.field.hint?4:-1),h(),U(t.error?5:-1))},dependencies:[ae,gn,Yl,ct,dt],encapsulation:2})),Ct=H([se({component:"radio"})],Ct);function Ng(n,i){}function Pg(n,i){if(n&1&&(d(0,"option",2),b(1),p()),n&2){let e=x().$implicit;g("value",e.value),h(),j(e.label)}}function Og(n,i){if(n&1&&z(0,Ng,0,0)(1,Pg,2,2,"option",2),n&2){let e=i.$implicit,t=x();U(t.isOptionGroup(e)?0:1)}}var xt=class extends le{isOptionGroup=Xd};R(xt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(xt)))(t||xt)}})()),R(xt,"\u0275cmp",v({type:xt,selectors:[["preforms-select-field"]],features:[S],decls:4,vars:10,consts:[[3,"field","control","error"],[1,"preforms-select-field",3,"id","formControl"],[3,"value"]],template:function(e,t){e&1&&(d(0,"preforms-form-field",0)(1,"select",1),ne(2,Og,2,1,null,null,Ce),p()()),e&2&&(g("field",t.field)("control",t.control)("error",t.error),h(),g("id",t.field.id)("formControl",t.control),Y("name",t.field.name)("size",t.field.size)("multiple",t.field.multiple)("autofocus",t.field.autofocus)("autocomplete",t.field.autocomplete),h(),ie(t.field.options))},dependencies:[ae,qr,Gr,ec,ct,dt,Yt],encapsulation:2})),xt=H([se({component:"select"})],xt);var wt=class extends le{};R(wt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(wt)))(t||wt)}})()),R(wt,"\u0275cmp",v({type:wt,selectors:[["preforms-input-field"]],features:[S],decls:3,vars:14,consts:[[3,"field","control","error"],[1,"preforms-input-field",3,"id","formControl","readonly","autofocus","spellcheck"]],template:function(e,t){e&1&&(d(0,"preforms-form-field",0)(1,"textarea",1),b(2,"      "),p()()),e&2&&(g("field",t.field)("control",t.control)("error",t.error),h(),g("id",t.field.id)("formControl",t.control)("readonly",t.field.readonly)("autofocus",t.field.autofocus)("spellcheck",t.field.spellcheck),Y("name",t.field.name)("rows",t.field.rows)("cols",t.field.cols)("wrap",t.field.wrap)("placeholder",t.field.placeholder)("autocapitalize",t.field.autocapitalize))},dependencies:[ae,gn,ct,dt,jr,Yt],encapsulation:2})),wt=H([se({component:"textarea"})],wt);var ta=class n{type;icon;field;control;handler;visible;static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,inputs:{type:"type",icon:"icon",field:"field",control:"control",handler:"handler",visible:"visible"}})};function Lg(n,i){if(n&1){let e=Qe();Me(0,"button",2),Lr("click",function(){Ie(e);let r=x(2);return ke(r.handler())}),b(1),Be()}if(n&2){let e=x(2);Y("title",e.icon.title),h(),_e(" ",e.icon.name," ")}}function Bg(n,i){if(n&1&&(Me(0,"span",1),b(1),Be()),n&2){let e=x(2);Y("title",e.icon.title),h(),_e(" ",e.icon.name," ")}}function zg(n,i){if(n&1&&z(0,Lg,2,2,"button",0)(1,Bg,2,2,"span",1),n&2){let e=x();U(e.type==="button"?0:1)}}var Rn=class n extends ta{static \u0275fac=(()=>{let i;return function(t){return(i||(i=k(n)))(t||n)}})();static \u0275cmp=v({type:n,selectors:[["preforms-field-icon-emoji"]],features:[S],decls:1,vars:1,consts:[["type","button",1,"preforms-field-icon","button"],[1,"preforms-field-icon"],["type","button",1,"preforms-field-icon","button",3,"click"]],template:function(e,t){e&1&&z(0,zg,2,1),e&2&&U(t.visible()?0:-1)},encapsulation:2})};var Et=class extends le{};R(Et,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(Et)))(t||Et)}})()),R(Et,"\u0275cmp",v({type:Et,selectors:[["preforms-checkbox-input"]],features:[S],decls:6,vars:5,consts:[["type","checkbox",3,"formControl"],[1,"label-text"],[1,"description"]],template:function(e,t){e&1&&(d(0,"label"),F(1,"input",0),d(2,"span",1),b(3),p(),d(4,"span",2),b(5),p()()),e&2&&(oe(t.field.className),h(),g("formControl",t.control),h(2),j(t.field.label),h(2),j(t.field.description))},dependencies:[ae,Kl,ct,dt],encapsulation:2})),Et=H([se({component:"checkbox"})],Et);var Ft=class extends le{get listName(){return this.field.options?`${this.field.id}-list`:void 0}};R(Ft,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(Ft)))(t||Ft)}})()),R(Ft,"\u0275cmp",v({type:Ft,selectors:[["preforms-number-input"]],features:[S],decls:2,vars:13,consts:[[3,"field","control","error"],["type","number",1,"preforms-input-field",3,"id","name","pfAria","formControl"]],template:function(e,t){e&1&&(d(0,"preforms-form-field",0),F(1,"input",1),p()),e&2&&(g("field",t.field)("control",t.control)("error",t.error),h(),g("id",t.field.id)("name",t.field.name)("pfAria",t.field.aria)("formControl",t.control),Y("list",t.listName)("step",t.field.step)("readonly",t.field.readonly)("autofocus",t.field.autofocus)("placeholder",t.field.placeholder)("autocomplete",t.field.autocomplete))},dependencies:[Yt,ae,gn,Zl,ct,dt,Bi],encapsulation:2})),Ft=H([se({component:"number"})],Ft);function Ug(n,i){if(n===i)return!0;if(n.includes("[*]")){let e=n.replace("[*]","");return i.startsWith(e+"[")}return!1}var nt=class extends le{output=null;formService=c(oi);ngOnInit(){this.calculate()}onInput(i){this.field.for.some(t=>Ug(t,i.id))&&this.calculate()}calculate(){if(this.field.disabled)return;let i=this.formService.getValues();if(this.field.calculation)try{let t=new Function("data",`with(data){ return (${this.field.calculation}); }`)(i);this.control.setValue(t,{emitEvent:!1}),this.output!==t&&this.emit("change"),this.output=t}catch(e){console.error("Error evaluating output calculation",e),this.output=null}}};R(nt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(nt)))(t||nt)}})()),R(nt,"\u0275cmp",v({type:nt,selectors:[["preforms-output-field"]],features:[S],decls:4,vars:5,consts:[[3,"for"]],template:function(e,t){e&1&&(Me(0,"label"),b(1),Me(2,"output",0),b(3),Be()()),e&2&&(oe(t.field.className),h(),_e(" ",t.field.label," "),h(),Ut("htmlFor",t.field.for.join(",")),h(),j(t.output))},dependencies:[ae],encapsulation:2})),H([ii({type:"input",field:"*"})],nt.prototype,"onInput",1),nt=H([se({component:"output"})],nt);var de=[Et,_t,Ct,nt,vt,ht,xt,Ft,bt,wt,yt,Rn,oc,gt];var na=class n{formChange=new C;fields=[new Ti({key:"items",label:"Shopping Cart",minItems:1,maxItems:8,addButton:!0,removeButton:!0,value:[{name:"Wireless Mouse",price:25,qty:1}],fields:[new Si({className:"cart-row",fields:[new N({key:"name",placeholder:"Product name",required:!0}),new ge({key:"price",label:"Price",min:1,value:0,required:!0}),new ge({key:"qty",label:"Qty",min:1,value:1,required:!0}),new Tn({key:"subtotal",label:"Subtotal",calculation:"Number(items[$index].price) * Number(items[$index].qty)",for:["price[$index]","qty[$index]"],disabled:!0,className:"subtotal"})]})],aggregates:[{action:"product",field:["price","qty"],value:2e3,operator:"lte",message:"Cart total cannot exceed $2000"},{action:"unique",field:"name"}]}),new ft({label:"Summary"}),new Tn({key:"cartTotal",label:"Total",disabled:!0,calculation:`
        items.reduce(
          (sum, i) => sum + (Number(i.price) * Number(i.qty)),
          0
        )
      `,for:["price[*]","qty[*]"]}),new ce("Checkout")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-cart-builder"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[["className","cart-form",3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],styles:[`.cart-form{max-width:820px;padding:5px;border-radius:12px}.cart-form h2{margin-bottom:1rem}.cart-form .cart-row input{width:100%}.cart-form .cart-row .output{font-weight:600;padding:.5rem 0}.cart-form .cart-row .subtotal{display:flex;flex-direction:column;text-align:center;padding:5px}.cart-form button{margin-top:1rem}.cart-form [type=submit]{margin-top:2rem;width:100%;padding:.9rem;font-weight:600;border-radius:8px}.cart-form .form-divider{margin-top:2rem}.cart-form output[formcontrolname=cartTotal]{font-size:1.4rem;font-weight:700;display:block;text-align:right;margin-top:1rem}.cart-form .form-array-row{display:flex;align-items:center}.cart-form .form-array-remove-btn{cursor:pointer;border:none;padding:.5rem 1rem;border-radius:6px;background-color:var(--color-danger, #f44336);color:#fff;height:fit-content;margin-bottom:.25rem;margin-left:auto;margin-top:25px}.cart-form .form-array-add-btn{background-color:var(--color-success, #4caf50);color:#fff;border:none;padding:.6rem 1.2rem;border-radius:6px;cursor:pointer}.cart-form .form-array-items{padding:.5rem;border-radius:8px}.cart-form .form-array-hint,.cart-form .form-array-error{margin-left:20px;margin-bottom:10px;flex-wrap:wrap;font-size:1rem}
`],encapsulation:2})};var im={id:"cart-builder",title:"Dynamic FieldArray",description:`
  A realistic **dynamic shopping cart** built entirely with Preforms.

  This example demonstrates how to use **FieldArray**, **FormRow**, **OutputField** for real-time calculations, 
  and the powerful **aggregates** system to enforce business rules all declaratively.

Users can add up to 8 items, remove items, edit product names, prices, and quantities. Subtotals and the grand total update automatically. 
Validation prevents duplicate product names and ensures the cart total does not exceed $2000.
### Features Demonstrated
- Dynamic array of items with **add** and **remove** buttons
- Per-item real-time subtotal calculation
- Grand total calculation using JavaScript expressions
- Cross-item validation using **aggregates**
- Clean tabular layout with **FormRow**
- Initial value seeding
### How It Works
#### 1 FieldArray
The FieldArray manages a dynamic list of cart items.
- minItems: 1 and maxItems: 8 enforce limits.
- addButton and removeButton provide built-in UI controls.
- value seeds the array with an initial item.

#### 2. Per-Item Row (FormRow)
Each row contains:
- TextField for product name
- NumberField for price and quantity
- OutputField for subtotal (read-only)

The subtotal uses the **$index** placeholder to reference the current array item.
#### 3. Real-Time Calculations
- Subtotal (inside array): Number(items[$index].price) * Number(items[$index].qty)
- Grand Total (outside array): Uses .reduce() over all items with the **[*]** wildcard to watch every price and quantity.
The **for** property tells Preforms which fields should trigger recalculation.
#### 4. Aggregates (Advanced Validation)
Aggregates let you define rules over the entire array without writing custom validators.
\`\`\`ts
TypeScriptaggregates: [
  {
    action: 'product',           // Special action: \u03A3(price \xD7 qty) across all items
    field: ['price', 'qty'],     // Fields to multiply per item
    value: 2000,
    operator: 'lte',             // \u2264
    message: 'Cart total cannot exceed $2000'
  },
  {
    action: 'unique',
    field: 'name',
    message: 'Product names must be unique'
  }
];
\`\`\`
**Supported Aggregate Actions**:
- "sum", "count", "avg" \u2014 standard numerical aggregations
- "product" \u2014 multiplies two fields per item then aggregates the results (ideal for price \xD7 quantity scenarios)
- "unique" \u2014 ensures all values in the specified field are distinct
`,category:"Advanced Components",component:na,assets:[{label:"TS",language:"typescript",content:Zd},{label:"SCSS",language:"css",content:Yd}]};var rm=`import { Component, EventEmitter, Output } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
\r
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FormFieldEventType, SubmitButton, TriggerAction, UserName } from '@preforms/ts';\r
import { of } from 'rxjs';\r
\r
@Component({\r
  selector: 'app-async-validate',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: DYNAMIC_FORM_FETCHER,\r
      useValue: (url: string) => {\r
        if (url.includes('/check-username/')) {\r
          const value = url.split('/').pop();\r
\r
          const errors = value === 'admin' ? { taken: { message: 'already taken' } } : null;\r
\r
          return of([{ errors, id: 'username' }]);\r
        }\r
\r
        return of([]);\r
      },\r
    },\r
  ],\r
})\r
export class AsyncValidationComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new UserName({\r
      triggers: [\r
        {\r
          on: FormFieldEventType.CHANGE,\r
          action: TriggerAction.ASYNC_VALIDATE,\r
          fetchUrl: '/api/check-username/$value',\r
        },\r
      ],\r
      required: true,\r
    }),\r
    new SubmitButton(),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var ia=class n{formChange=new C;fields=[new Oi({triggers:[{on:"change",action:"async_validate",fetchUrl:"/api/check-username/$value"}],required:!0}),new ce];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-async-validate"]],outputs:{formChange:"formChange"},features:[B([de,{provide:hn,useValue:i=>{if(i.includes("/check-username/")){let t=i.split("/").pop()==="admin"?{taken:{message:"already taken"}}:null;return D([{errors:t,id:"username"}])}return D([])}}])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var am={id:"async-validation",title:"Async Validation",description:`
Demonstrates how to use fetch triggers to perform asynchronous validation.
This example shows a username field that checks availability via an API endpoint
and displays validation hints dynamically.
  `,category:"Reactivity & Validation",component:ia,assets:[{label:"TS",language:"typescript",content:rm}]};var ra=class n{formChange=new C;fields=[new N({key:"name",label:"Full name",placeholder:"John Doe",required:!0}),new Ot({placeholder:"you@example.com"}),new ce("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-basic-form"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var sm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { EmailField, SubmitButton, TextField } from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-basic-form',\r
  template: \` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> \`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class BasicFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
  fields = [\r
    new TextField({\r
      key: 'name',\r
      label: 'Full name',\r
      placeholder: 'John Doe',\r
      required: true,\r
    }),\r
\r
    new EmailField({\r
      placeholder: 'you@example.com',\r
    }),\r
\r
    new SubmitButton('Save'),\r
  ];\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var lm={id:"basic-form",title:"Basic Form Example",description:"Minimal form with text and email fields to get started quickly.",category:"Getting Started",component:ra,assets:[{label:"TS",language:"typescript",content:sm}]};var cm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  Address,\r
  City,\r
  ConfirmButton,\r
  Country,\r
  CurrencyField,\r
  DateOfBirth,\r
  Description,\r
  EmailField,\r
  FirstName,\r
  FullName,\r
  Gender,\r
  LastName,\r
  MiddleName,\r
  Name,\r
  PasswordField,\r
  PhoneNumber,\r
  PostalCode,\r
  ResetButton,\r
  State,\r
  Street,\r
  SubmitButton,\r
  UserName,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-common-fields',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class CommonFieldsComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new FirstName(),\r
    new MiddleName(),\r
    new LastName(),\r
    new FullName(),\r
    new Name(),\r
    new EmailField(),\r
    new UserName(),\r
    new PasswordField(),\r
    new PhoneNumber(),\r
    new DateOfBirth(),\r
    new Gender(),\r
    new Address(),\r
    new Street(),\r
    new City(),\r
    new State(),\r
    new PostalCode(),\r
    new Country(),\r
    new CurrencyField(),\r
    new Description(),\r
    new SubmitButton(),\r
    new ResetButton(),\r
    new ConfirmButton(),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var oa=class n{formChange=new C;fields=[new qo,new Xo,new Wo,new Go,new Ko,new Ot,new Oi,new tt,new Qo,new Ho,new Yo,new Uo,new Pi,new Ri,new Ni,new Ai,new Mi,new $o,new Vo,new ce,new Zo,new jo];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-common-fields"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var dm={id:"common-fields",title:"Common Fields",description:`Displays all the prebuilt common fields available in the library, including
    name, email, address, phone, date of birth, gender, currency, description, and action buttons.
    Ideal for reference and testing.`,category:"Form Fields",component:oa,assets:[{label:"TS",language:"typescript",content:cm}]};var mm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  DateField,\r
  EmailField,\r
  NumberField,\r
  PasswordField,\r
  SubmitButton,\r
  TriggerAction,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-cross-validation-form',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class CrossValidationFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new PasswordField({\r
      minLength: 8,\r
      hint: 'At least 8 characters',\r
    }),\r
\r
    new PasswordField({\r
      key: 'confirmPassword',\r
      label: 'Confirm password',\r
      triggers: [\r
        {\r
          on: 'input',\r
          action: TriggerAction.VALIDATE,\r
          validation: {\r
            operator: 'eq',\r
            compareTo: 'password',\r
            message: 'must match password',\r
          },\r
        },\r
      ],\r
    }),\r
\r
    new EmailField({\r
      placeholder: 'you@example.com',\r
    }),\r
\r
    new EmailField({\r
      key: 'confirmEmail',\r
      label: 'Confirm Email',\r
      triggers: [\r
        {\r
          on: 'input',\r
          action: TriggerAction.VALIDATE,\r
          validation: {\r
            operator: 'eq',\r
            compareTo: 'email',\r
            message: 'must match email',\r
          },\r
        },\r
      ],\r
    }),\r
\r
    new DateField({\r
      key: 'startDate',\r
      label: 'Start date',\r
    }),\r
\r
    new DateField({\r
      key: 'endDate',\r
      label: 'End date',\r
      triggers: [\r
        {\r
          on: 'change',\r
          action: TriggerAction.VALIDATE,\r
          validation: {\r
            operator: 'gt',\r
            compareTo: 'startDate',\r
            message: 'must be after start date',\r
          },\r
          sourceField: ['startDate', 'endDate'],\r
        },\r
      ],\r
    }),\r
\r
    new NumberField({\r
      key: 'orderAmount',\r
      label: 'Order amount ($)',\r
      min: 0,\r
    }),\r
\r
    new NumberField({\r
      key: 'discount',\r
      label: 'Discount ($)',\r
      triggers: [\r
        {\r
          on: 'blur',\r
          action: TriggerAction.VALIDATE,\r
          validation: {\r
            operator: 'lt',\r
            compareTo: 'orderAmount',\r
            message: 'cannot exceed order amount',\r
          },\r
          sourceField: ['orderAmount', 'discount'],\r
        },\r
      ],\r
    }),\r
\r
    new SubmitButton('Create Account'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var aa=class n{formChange=new C;fields=[new tt({minLength:8,hint:"At least 8 characters"}),new tt({key:"confirmPassword",label:"Confirm password",triggers:[{on:"input",action:"validate",validation:{operator:"eq",compareTo:"password",message:"must match password"}}]}),new Ot({placeholder:"you@example.com"}),new Ot({key:"confirmEmail",label:"Confirm Email",triggers:[{on:"input",action:"validate",validation:{operator:"eq",compareTo:"email",message:"must match email"}}]}),new Wn({key:"startDate",label:"Start date"}),new Wn({key:"endDate",label:"End date",triggers:[{on:"change",action:"validate",validation:{operator:"gt",compareTo:"startDate",message:"must be after start date"},sourceField:["startDate","endDate"]}]}),new ge({key:"orderAmount",label:"Order amount ($)",min:0}),new ge({key:"discount",label:"Discount ($)",triggers:[{on:"blur",action:"validate",validation:{operator:"lt",compareTo:"orderAmount",message:"cannot exceed order amount"},sourceField:["orderAmount","discount"]}]}),new ce("Create Account")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-cross-validation-form"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var pm={id:"cross-field-validation",title:"Cross Field Validation",description:"Demonstrates real-world validation scenarios such as password confirmation, email confirmation, date ranges, and order validation.",category:"Reactivity & Validation",component:aa,assets:[{label:"TS",language:"typescript",content:mm}]};var um=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { PasswordField, SubmitButton } from '@preforms/ts';\r
import { PasswordStrengthField } from './PasswordStrengthField';\r
import { PasswordStenghtFieldComponent } from './password-strength';\r
\r
@Component({\r
  selector: 'app-extensible-form',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS, PasswordStenghtFieldComponent],\r
})\r
export class ExtensibleFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new PasswordField({ key: 'password', hint: 'At least 8 characters' }),\r
    new PasswordStrengthField({\r
      key: 'passwordStrength',\r
      min: 0,\r
      max: 4,\r
      low: 1,\r
      high: 4,\r
      optimum: 4,\r
    }),\r
    new SubmitButton('Save'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var fm=`import { Component } from '@angular/core';\r
import { FormControl, ReactiveFormsModule } from '@angular/forms';\r
\r
import { DynamicFormElement, FormFieldEvent } from '@preforms/angular/core/decorators';\r
import { BaseFieldComponent } from '@preforms/angular/core/fields';\r
import { FieldEventData, FormFieldEventType } from '@preforms/ts';\r
import { PasswordStrengthField } from './PasswordStrengthField';\r
\r
@DynamicFormElement({\r
  component: 'password-strength',\r
})\r
@Component({\r
  selector: 'app-pass-stenght-field',\r
  template: \`\r
    <div class="small" style="margin-top: 0.4rem">\r
      Strength:\r
      <meter\r
        [min]="field.min"\r
        [max]="field.max"\r
        [value]="score"\r
        [low]="field.low"\r
        [high]="field.high"\r
        [optimum]="field.optimum"\r
      ></meter>\r
      <span class="hint"> {{ hint }}</span>\r
    </div>\r
  \`,\r
  imports: [ReactiveFormsModule],\r
})\r
export class PasswordStenghtFieldComponent extends BaseFieldComponent<\r
  FormControl<number>,\r
  PasswordStrengthField\r
> {\r
  hint = '\u2014';\r
\r
  // computed score from control value\r
  get score(): number {\r
    return this.control.value ?? 0;\r
  }\r
\r
  // Listen to password field changes\r
  @FormFieldEvent({ type: FormFieldEventType.INPUT, field: 'password' })\r
  handlePasswordChange(e: FieldEventData) {\r
    const score = this.calculateStrength(e.value);\r
    this.control.setValue(score, { emitEvent: false }); // reactive, no circular trigger\r
    this.hint = this.getHint(score);\r
  }\r
\r
  private calculateStrength(p: string): number {\r
    let score = 0;\r
    if (!p) return 0;\r
    if (p.length >= 8) score++;\r
    if (/[0-9]/.test(p)) score++;\r
    if (/[A-Z]/.test(p)) score++;\r
    if (/[^A-Za-z0-9]/.test(p)) score++;\r
    return Math.min(score, 4);\r
  }\r
\r
  private getHint(score: number): string {\r
    const labels = ['Very weak', 'Weak', 'Okay', 'Good', 'Strong'];\r
    return labels[score];\r
  }\r
}\r
`;var hm=`import { InputFieldConfigDerived, NumberField } from '@preforms/ts';\r
\r
interface PasswordStrengthFieldConfig extends InputFieldConfigDerived<number> {\r
  low: number;\r
  high: number;\r
  optimum: number;\r
}\r
\r
export class PasswordStrengthField extends NumberField {\r
  override component = 'password-strength';\r
  low: number;\r
  high: number;\r
  optimum: number;\r
\r
  constructor(config: PasswordStrengthFieldConfig) {\r
    super(config);\r
    this.low = config.low;\r
    this.high = config.high;\r
    this.optimum = config.optimum;\r
  }\r
}\r
`;var sa=class extends ge{component="password-strength";low;high;optimum;constructor(i){super(i),this.low=i.low,this.high=i.high,this.optimum=i.optimum}};var it=class extends le{hint="\u2014";get score(){return this.control.value??0}handlePasswordChange(i){let e=this.calculateStrength(i.value);this.control.setValue(e,{emitEvent:!1}),this.hint=this.getHint(e)}calculateStrength(i){let e=0;return i?(i.length>=8&&e++,/[0-9]/.test(i)&&e++,/[A-Z]/.test(i)&&e++,/[^A-Za-z0-9]/.test(i)&&e++,Math.min(e,4)):0}getHint(i){return["Very weak","Weak","Okay","Good","Strong"][i]}};R(it,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(it)))(t||it)}})()),R(it,"\u0275cmp",v({type:it,selectors:[["app-pass-stenght-field"]],features:[S],decls:5,vars:7,consts:[[1,"small",2,"margin-top","0.4rem"],[3,"min","max","value","low","high","optimum"],[1,"hint"]],template:function(e,t){e&1&&(Me(0,"div",0),b(1," Strength: "),Xn(2,"meter",1),Me(3,"span",2),b(4),Be()()),e&2&&(h(2),Ut("min",t.field.min)("max",t.field.max)("value",t.score)("low",t.field.low)("high",t.field.high)("optimum",t.field.optimum),h(2),_e(" ",t.hint))},dependencies:[ae],encapsulation:2})),H([ii({type:"input",field:"password"})],it.prototype,"handlePasswordChange",1),it=H([se({component:"password-strength"})],it);var la=class n{formChange=new C;fields=[new tt({key:"password",hint:"At least 8 characters"}),new sa({key:"passwordStrength",min:0,max:4,low:1,high:4,optimum:4}),new ce("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-extensible-form"]],outputs:{formChange:"formChange"},features:[B([de,it])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var gm={id:"extensibility",title:"Custom Fields",description:"Shows custom fields like PasswordStrengthField and how to use the event system.",category:"Extensibility",component:la,assets:[{label:"TS",language:"typescript",content:um},{label:"Custom Component",language:"typescript",content:fm},{label:"Extened Field",language:"typescript",content:hm}]};var Kg=new A("MAT_BUTTON_CONFIG");function bm(n){return n==null?void 0:fn(n)}var vm=(()=>{class n{_elementRef=c(te);_ngZone=c(fe);_animationsDisabled=mt();_config=c(Kg,{optional:!0});_focusMonitor=c(Ln);_cleanupClick;_renderer=c(Tt);_rippleLoader=c(xc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(an).load(si);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(Y("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),oe(r.color?"mat-"+r.color:""),re("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",X],disabled:[2,"disabled","disabled",X],ariaDisabled:[2,"aria-disabled","ariaDisabled",X],disabledInteractive:[2,"disabledInteractive","disabledInteractive",X],tabIndex:[2,"tabIndex","tabIndex",bm],_tabindex:[2,"tabindex","_tabindex",bm]}})}return n})();var Qg=["matButton",""],Zg=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Yg=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ym=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),_m=(()=>{class n extends vm{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Xg(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?ym.get(this._appearance):null,o=ym.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[S],attrs:Qg,ngContentSelectors:Yg,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(ye(Zg),Xn(0,"span",0),he(1),Me(2,"span",1),he(3,1),Be(),he(4,2),Xn(5,"span",2)(6,"span",3)),t&2&&re("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base{text-decoration:none}.mat-mdc-button-base .mat-icon{min-height:fit-content;flex-shrink:0}@media(hover: none){.mat-mdc-button-base:hover>span.mat-mdc-button-persistent-ripple::before{opacity:0}}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-button-text-horizontal-padding, 12px);height:var(--mat-button-text-container-height, 40px);font-family:var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-text-label-text-transform);font-weight:var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight))}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mat-button-text-container-shape, var(--mat-sys-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mat-button-text-label-text-color, var(--mat-sys-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-button-text-with-icon-horizontal-padding, 16px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-state-layer-color, var(--mat-sys-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-text-touch-target-size, 48px);display:var(--mat-button-text-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-filled-container-height, 40px);font-family:var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-filled-label-text-transform);font-weight:var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-filled-horizontal-padding, 24px)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-unelevated-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-filled-touch-target-size, 48px);display:var(--mat-button-filled-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));background-color:var(--mat-button-filled-container-color, var(--mat-sys-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mat-button-filled-container-shape, var(--mat-sys-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);box-shadow:var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));height:var(--mat-button-protected-container-height, 40px);font-family:var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-protected-label-text-transform);font-weight:var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-protected-horizontal-padding, 24px)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-state-layer-color, var(--mat-sys-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-raised-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-raised-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-protected-touch-target-size, 48px);display:var(--mat-button-protected-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-raised-button:not(:disabled){color:var(--mat-button-protected-label-text-color, var(--mat-sys-primary));background-color:var(--mat-button-protected-container-color, var(--mat-sys-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mat-button-protected-container-shape, var(--mat-sys-corner-full))}@media(hover: hover){.mat-mdc-raised-button:hover{box-shadow:var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2))}}.mat-mdc-raised-button:focus{box-shadow:var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-outlined-container-height, 40px);font-family:var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-outlined-label-text-transform);font-weight:var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));border-radius:var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));border-width:var(--mat-button-outlined-outline-width, 1px);padding:0 var(--mat-button-outlined-horizontal-padding, 24px)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-outlined-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-outlined-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-outlined-touch-target-size, 48px);display:var(--mat-button-outlined-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-outlined-button:not(:disabled){color:var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));border-color:var(--mat-button-outlined-outline-color, var(--mat-sys-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-tonal-container-height, 40px);font-family:var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-tonal-label-text-transform);font-weight:var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-tonal-horizontal-padding, 24px)}.mat-tonal-button:not(:disabled){color:var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container))}.mat-tonal-button,.mat-tonal-button .mdc-button__ripple{border-radius:var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full))}.mat-tonal-button[disabled],.mat-tonal-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-tonal-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}[dir=rtl] .mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}.mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}[dir=rtl] .mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}.mat-tonal-button .mat-ripple-element{background-color:var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-tonal-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-tonal-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-tonal-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-tonal-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-tonal-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-tonal-touch-target-size, 48px);display:var(--mat-button-tonal-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button,.mat-tonal-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon,.mat-tonal-button .mdc-button__label,.mat-tonal-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-focus-indicator,.mat-mdc-unelevated-button .mat-focus-indicator,.mat-mdc-raised-button .mat-focus-indicator,.mat-mdc-outlined-button .mat-focus-indicator,.mat-tonal-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-unelevated-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-raised-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-outlined-button:focus-visible>.mat-focus-indicator::before,.mat-tonal-button:focus-visible>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable,.mat-tonal-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon,.mat-tonal-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-focus-indicator::before,.mat-tonal-button .mat-focus-indicator::before,.mat-mdc-raised-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}
`,`@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}
`],encapsulation:2,changeDetection:0})}return n})();function Xg(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Cm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[eo,Ve]})}return n})();var eb=["*"];function tb(n,i){n&1&&he(0)}var Ws=(()=>{class n{_elementRef=c(te);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Ks=(()=>{class n{template=c(lt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var Kn={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},nb=new A("STEPPER_GLOBAL_OPTIONS"),ca=(()=>{class n{_stepperOptions;_stepper=c(zi);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Z(!1);interactedStream=new C;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Z(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Z(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=Z(null);index=Z(-1);isSelected=$t(()=>this._stepper.selectedIndex===this.index());indicatorType=$t(()=>{let e=this.isSelected(),t=this.completed,r=this._state()??Kn.NUMBER,o=this._editable();return this._showError()&&this.hasError&&!e?Kn.ERROR:this._displayDefaultIndicatorType?!t||e?Kn.NUMBER:o?Kn.EDIT:Kn.DONE:t&&!e?Kn.DONE:t&&e?r:o&&e?Kn.EDIT:r});isNavigable=$t(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Z(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=c(nb,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["cdk-step"]],contentQueries:function(t,r,o){if(t&1&&It(o,Ks,5)(o,Ql,5),t&2){let a;V(a=q())&&(r.stepLabel=a.first),V(a=q())&&(r._childForms=a)}},viewQuery:function(t,r){if(t&1&&Ze(lt,7),t&2){let o;V(o=q())&&(r.content=o.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",X],optional:[2,"optional","optional",X],completed:[2,"completed","completed",X],hasError:[2,"hasError","hasError",X]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[st],ngContentSelectors:eb,decls:1,vars:0,template:function(t,r){t&1&&(ye(),Or(0,tb,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),zi=(()=>{class n{_dir=c(qi,{optional:!0});_changeDetectorRef=c(Ye);_elementRef=c(te);_destroyed=new $;_keyManager;_steps;steps=new Bt;_stepHeader;_sortedHeaders=new Bt;linear=!1;get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Z(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new C;selectedIndexChange=new C;_groupId=c(Ki).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(We(this._steps),ue(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,r)=>t.index.set(r)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(We(this._stepHeader),ue(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,r)=>t._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Bn(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:D()).pipe(We(this._layoutDirection()),ue(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),r=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:r,selectedStep:t[e],previouslySelectedStep:t[r]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=di(e),r=e.keyCode,o=this._keyManager;o?.activeItemIndex!=null&&!t&&(r===32||r===13)?(this.selectedIndex=o.activeItemIndex,e.preventDefault()):o?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let r=t.stepControl;return(r?r.invalid||r.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=Oa();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,r,o){if(t&1&&It(o,ca,5)(o,Ws,5),t&2){let a;V(a=q())&&(r._steps=a),V(a=q())&&(r._stepHeader=a)}},inputs:{linear:[2,"linear","linear",X],selectedIndex:[2,"selectedIndex","selectedIndex",fn],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),xm=(()=>{class n{_stepper=c(zi);type="submit";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,r){t&1&&T("click",function(){return r._stepper.next()}),t&2&&Ut("type",r.type)},inputs:{type:"type"}})}return n})(),wm=(()=>{class n{_stepper=c(zi);type="button";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,r){t&1&&T("click",function(){return r._stepper.previous()}),t&2&&Ut("type",r.type)},inputs:{type:"type"}})}return n})(),Em=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[Ve]})}return n})();function Fm(n){return Error(`Unable to find icon with the name "${n}"`)}function ib(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Dm(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Tm(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var cn=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Im=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new cn(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(rn.HTML,r);if(!a)throw Tm(r);let s=ci(a);return this._addSvgIconConfig(e,t,new cn("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new cn(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(rn.HTML,t);if(!o)throw Tm(t);let a=ci(o);return this._addSvgIconSetConfig(e,new cn("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(rn.RESOURCE_URL,e);if(!t)throw Dm(e);let r=this._cachedIconsByUrl.get(t);return r?D(da(r)):this._loadSvgIconFromConfig(new cn(e,null)).pipe(Te(o=>this._cachedIconsByUrl.set(t,o)),ee(o=>da(o)))}getNamedSvgIcon(e,t=""){let r=Sm(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Dr(Fm(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?D(da(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ee(t=>da(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return D(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ji(s=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(rn.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(u)),D(null)})));return il(o).pipe(ee(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Fm(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Te(t=>e.svgText=t),ee(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?D(null):this._fetchIcon(e).pipe(Te(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(ci("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(ci("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw ib();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(rn.RESOURCE_URL,t);if(!a)throw Dm(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ee(u=>ci(u)),kr(()=>this._inProgressUrlFetches.delete(a)),ol());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Sm(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return rb(o)?new cn(o.url,null,o.options):new cn(o,null)}}static \u0275fac=function(t){return new(t||n)(tn(ti,8),tn($r),tn(at,8),tn(Ar))};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function da(n){return n.cloneNode(!0)}function Sm(n,i){return n+":"+i}function rb(n){return!!(n.url&&n.options)}var ob=["*"],ab=new A("MAT_ICON_DEFAULT_OPTIONS"),sb=new A("mat-icon-location",{providedIn:"root",factory:()=>{let n=c(at),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),km=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],lb=km.map(n=>`[${n}]`).join(", "),cb=/^url\(['"]?#(.*?)['"]?\)$/,Mm=(()=>{class n{_elementRef=c(te);_iconRegistry=c(Im);_location=c(sb);_errorHandler=c(Ar);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Le.EMPTY;constructor(){let e=c(new Vi("aria-hidden"),{optional:!0}),t=c(ab,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(lb),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)km.forEach(a=>{let s=t[o],l=s.getAttribute(a),u=l?l.match(cb):null;if(u){let f=r.get(s);f||(f=[],r.set(s,f)),f.push({name:a,value:u[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(pn(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(Y("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),oe(r.color?"mat-"+r.color:""),re("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",X],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ob,decls:1,vars:0,template:function(t,r){t&1&&(ye(),he(0))},styles:[`mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}
`],encapsulation:2,changeDetection:0})}return n})(),Rm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[Ve]})}return n})();var db=(n,i,e)=>({index:n,active:i,optional:e});function mb(n,i){if(n&1&&zt(0,2),n&2){let e=x();g("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",kl(2,db,e.index,e.active,e.optional))}}function pb(n,i){if(n&1&&(d(0,"span",7),b(1),p()),n&2){let e=x(2);h(),j(e._getDefaultTextForState(e.state))}}function ub(n,i){if(n&1&&(d(0,"span",8),b(1),p()),n&2){let e=x(3);h(),j(e._intl.completedLabel)}}function fb(n,i){if(n&1&&(d(0,"span",8),b(1),p()),n&2){let e=x(3);h(),j(e._intl.editableLabel)}}function hb(n,i){if(n&1&&(z(0,ub,2,1,"span",8)(1,fb,2,1,"span",8),d(2,"mat-icon",7),b(3),p()),n&2){let e=x(2);U(e.state==="done"?0:e.state==="edit"?1:-1),h(3),j(e._getDefaultTextForState(e.state))}}function gb(n,i){if(n&1&&z(0,pb,2,1,"span",7)(1,hb,4,2),n&2){let e,t=x();U((e=t.state)==="number"?0:1)}}function bb(n,i){n&1&&(d(0,"div",4),zt(1,9),p()),n&2&&(h(),g("ngTemplateOutlet",i.template))}function vb(n,i){if(n&1&&(d(0,"div",4),b(1),p()),n&2){let e=x();h(),j(e.label)}}function yb(n,i){if(n&1&&(d(0,"div",5),b(1),p()),n&2){let e=x();h(),j(e._intl.optionalLabel)}}function _b(n,i){if(n&1&&(d(0,"div",6),b(1),p()),n&2){let e=x();h(),j(e.errorMessage)}}var Am=["*"];function Cb(n,i){}function xb(n,i){if(n&1&&(he(0),St(1,Cb,0,0,"ng-template",0)),n&2){let e=x();h(),g("cdkPortalOutlet",e._portal)}}var wb=["animatedContainer"],Nm=n=>({steps:n}),Pm=n=>({step:n});function Eb(n,i){n&1&&he(0)}function Fb(n,i){if(n&1&&(d(0,"div",5),zt(1,9)(2,6),p()),n&2){let e=x(2),t=jt(6);h(),g("ngTemplateOutlet",e.headerPrefix()),h(),g("ngTemplateOutlet",t)("ngTemplateOutletContext",Ee(3,Nm,e.steps))}}function Db(n,i){if(n&1&&zt(0,6),n&2){let e=x(2),t=jt(6);g("ngTemplateOutlet",t)("ngTemplateOutletContext",Ee(2,Nm,e.steps))}}function Tb(n,i){if(n&1&&(d(0,"div",10,2),zt(2,9),p()),n&2){let e=i.$implicit,t=i.$index,r=x(2);oe("mat-horizontal-stepper-content-"+r._getAnimationDirection(t)),g("id",r._getStepContentId(t)),Y("aria-labelledby",r._getStepLabelId(t))("inert",r.selectedIndex===t?null:""),h(2),g("ngTemplateOutlet",e.content)}}function Sb(n,i){if(n&1&&(d(0,"div",3),z(1,Fb,3,5,"div",5)(2,Db,1,4,"ng-container",6),d(3,"div",7),ne(4,Tb,3,6,"div",8,Nn),p()()),n&2){let e=x();h(),U(e.headerPrefix()?1:2),h(3),ie(e.steps)}}function Ib(n,i){if(n&1&&zt(0,9),n&2){let e=x(2);g("ngTemplateOutlet",e.headerPrefix())}}function kb(n,i){if(n&1&&(d(0,"div",11),zt(1,6),d(2,"div",12,2)(4,"div",13)(5,"div",14),zt(6,9),p()()()()),n&2){let e=i.$implicit,t=i.$index,r=i.$index,o=i.$count,a=x(2),s=jt(4);h(),g("ngTemplateOutlet",s)("ngTemplateOutletContext",Ee(10,Pm,e)),h(),re("mat-stepper-vertical-line",r!==o-1)("mat-vertical-content-container-active",a.selectedIndex===t),Y("inert",a.selectedIndex===t?null:""),h(2),g("id",a._getStepContentId(t)),Y("aria-labelledby",a._getStepLabelId(t)),h(2),g("ngTemplateOutlet",e.content)}}function Mb(n,i){if(n&1&&(d(0,"div",4),z(1,Ib,1,1,"ng-container",9),ne(2,kb,7,12,"div",11,Nn),p()),n&2){let e=x();h(),U(e.headerPrefix()?1:-1),h(),ie(e.steps)}}function Rb(n,i){if(n&1){let e=Qe();d(0,"mat-step-header",15),T("click",function(){let r=Ie(e).step;return ke(r.select())})("keydown",function(r){Ie(e);let o=x();return ke(o._onKeydown(r))}),p()}if(n&2){let e=i.step,t=x();re("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),g("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),Y("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function Ab(n,i){n&1&&F(0,"div",17)}function Nb(n,i){if(n&1&&(zt(0,6),z(1,Ab,1,0,"div",17)),n&2){let e=i.$implicit,t=i.$index,r=i.$count;x(2);let o=jt(4);g("ngTemplateOutlet",o)("ngTemplateOutletContext",Ee(3,Pm,e)),h(),U(t!==r-1?1:-1)}}function Pb(n,i){if(n&1&&(d(0,"div",16),ne(1,Nb,2,5,null,null,Nn),p()),n&2){let e=i.steps;h(),ie(e)}}var Fr=(()=>{class n extends Ks{static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["","matStepLabel",""]],features:[S]})}return n})(),Ob=(()=>{class n{changes=new $;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qs=(()=>{class n extends Ws{_intl=c(Ob);_focusMonitor=c(Ln);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=c(an);e.load(si),e.load(hc);let t=c(Ye);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof Fr?null:this.label}_templateLabel(){return this.label instanceof Fr?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,r){t&2&&(oe("mat-"+(r.color||"primary")),re("mat-step-header-empty-label",r._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[S],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,r){if(t&1&&(F(0,"div",0),d(1,"div")(2,"div",1),z(3,mb,1,6,"ng-container",2)(4,gb,2,1),p()(),d(5,"div",3),z(6,bb,2,1,"div",4)(7,vb,2,1,"div",4),z(8,yb,2,1,"div",5),z(9,_b,2,1,"div",6),p()),t&2){let o;g("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disableRipple),h(),oe(Il("mat-step-icon-state-",r.state," mat-step-icon")),re("mat-step-icon-selected",r.selected),h(2),U(r.iconOverrides&&r.iconOverrides[r.state]?3:4),h(2),re("mat-step-label-active",r.active)("mat-step-label-selected",r.selected)("mat-step-label-error",r.state=="error"),h(),U((o=r._templateLabel())?6:r._stringLabel()?7:-1,o),h(2),U(r._hasOptionalLabel()?8:-1),h(),U(r._hasErrorLabel()?9:-1)}},dependencies:[er,Na,Mm],styles:[`.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus-visible .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-header-empty-label .mat-step-label{min-width:0}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}
`],encapsulation:2,changeDetection:0})}return n})(),Lb=(()=>{class n{templateRef=c(lt);name;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),Bb=(()=>{class n{_template=c(lt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),Zs=(()=>{class n extends ca{_errorStateMatcher=c(Kr,{skipSelf:!0});_viewContainerRef=c(Ke);_isSelected=Le.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Ae(()=>this._stepper.selectionChange.pipe(ee(e=>e.selectedStep===this),We(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new Dn(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let r=this._errorStateMatcher.isErrorState(e,t),o=!!(e&&e.invalid&&this.interacted);return r||o}static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-step"]],contentQueries:function(t,r,o){if(t&1&&It(o,Fr,5)(o,Bb,5),t&2){let a;V(a=q())&&(r.stepLabel=a.first),V(a=q())&&(r._lazyContent=a.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[B([{provide:Kr,useExisting:n},{provide:ca,useExisting:n}]),S],ngContentSelectors:Am,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,r){t&1&&(ye(),St(0,xb,2,1,"ng-template"))},dependencies:[wr],encapsulation:2,changeDetection:0})}return n})(),Ys=(()=>{class n extends zi{_ngZone=c(fe);_renderer=c(Tt);_animationsDisabled=mt();_cleanupTransition;_isAnimating=Z(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Bt;_icons;animationDone=new C;disableRipple=!1;color;labelPosition="end";headerPosition="top";headerPrefix=zr(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!c(ze).isBrowser;constructor(){super();let t=c(te).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(ue(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(ue(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(We(null),ue(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let r=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),o=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(r||o)&&this._animatedContainers.find(s=>s.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,r,o){if(t&1&&It(o,Zs,5)(o,Lb,5),t&2){let a;V(a=q())&&(r._steps=a),V(a=q())&&(r._icons=a)}},viewQuery:function(t,r){if(t&1&&Ze(Qs,5)(wb,5),t&2){let o;V(o=q())&&(r._stepHeader=o),V(o=q())&&(r._animatedContainers=o)}},hostVars:14,hostBindings:function(t,r){t&2&&(Br("--mat-stepper-animation-duration",r._getAnimationDuration()),re("mat-stepper-horizontal",r.orientation==="horizontal")("mat-stepper-vertical",r.orientation==="vertical")("mat-stepper-label-position-end",r.orientation==="horizontal"&&r.labelPosition=="end")("mat-stepper-label-position-bottom",r.orientation==="horizontal"&&r.labelPosition=="bottom")("mat-stepper-header-position-bottom",r.headerPosition==="bottom")("mat-stepper-animating",r._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[B([{provide:zi,useExisting:n}]),S],ngContentSelectors:Am,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,r){if(t&1&&(ye(),z(0,Eb,1,0),z(1,Sb,6,1,"div",3)(2,Mb,4,1,"div",4),St(3,Rb,1,27,"ng-template",null,0,Hi)(5,Pb,3,0,"ng-template",null,1,Hi)),t&2){let o;U(r._isServer?0:-1),h(),U((o=r.orientation)==="horizontal"?1:o==="vertical"?2:-1)}},dependencies:[Na,Qs],styles:[`.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-wrapper{align-items:center;display:flex}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center;flex-grow:1}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon{margin:0}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}
`],encapsulation:2,changeDetection:0})}return n})(),Om=(()=>{class n extends xm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,r){t&2&&Ut("type",r.type)},features:[S]})}return n})(),Lm=(()=>{class n extends wm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,r){t&2&&Ut("type",r.type)},features:[S]})}return n})(),Bm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({providers:[Kr],imports:[zd,Em,Rm,eo,Ys,Qs,Ve]})}return n})();function Ub(n,i){n&1&&(d(0,"button",4),b(1,"Back"),p())}function jb(n,i){if(n&1&&(d(0,"mat-step",2),F(1,"preforms-dynamic-field-group",6),d(2,"div"),z(3,Ub,2,0,"button",4),d(4,"button",7),b(5,"Next"),p()()()),n&2){let e=i.$implicit,t=i.$index,r=x();g("stepControl",r.formGroup(e.key))("label",e.label),h(),g("fields",e.fields)("control",r.formGroup(e.key)),h(2),U(t?3:-1)}}function $b(n,i){n&1&&b(0,"Done")}var Dt=class extends le{formGroup(i){return this.control.get(i)}};R(Dt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=k(Dt)))(t||Dt)}})()),R(Dt,"\u0275cmp",v({type:Dt,selectors:[["app-wizard-field"]],features:[S],decls:13,vars:1,consts:[["stepper",""],["orientation","vertical",3,"linear"],[3,"stepControl","label"],["matStepLabel",""],["matButton","","matStepperPrevious",""],["matButton","",3,"click"],[3,"fields","control"],["matButton","","matStepperNext",""]],template:function(e,t){if(e&1){let r=Qe();d(0,"mat-stepper",1,0),ne(2,jb,6,5,"mat-step",2,Ce),d(4,"mat-step"),St(5,$b,1,0,"ng-template",3),d(6,"p"),b(7,"You are now done."),p(),d(8,"div")(9,"button",4),b(10,"Back"),p(),d(11,"button",5),T("click",function(){Ie(r);let a=jt(1);return ke(a.reset())}),b(12,"Reset"),p()()()()}e&2&&(g("linear",!0),h(2),ie(t.field.fields))},dependencies:[Cm,_m,Bm,Zs,Fr,Ys,Om,Lm,yn],encapsulation:2})),Dt=H([se({component:"wizard"})],Dt);var ma=class extends Kt{component="wizard";fields;constructor(i){super(i),this.fields=i.fields}};var pa=class n{formChange=new C;fields=[new ma({fields:[new Pt({key:"profile",description:"Fill out your name",fields:[new N({key:"name",placeholder:"Last name, First name",required:!0})]}),new Pt({key:"shipping",description:"Fill out your address",fields:[new N({key:"address",placeholder:"Ex. 1 Main St, New York, NY",required:!0})]})]})];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-extensible-form-wizard"]],outputs:{formChange:"formChange"},features:[B([de,Dt])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var zm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FieldGroup, TextField } from '@preforms/ts';\r
\r
import { WizardFieldComponent } from './wizard.component';\r
import { WizardField } from './wizard.field';\r
\r
@Component({\r
  selector: 'app-extensible-form-wizard',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS, WizardFieldComponent],\r
})\r
export class ExtensibleFormWizardComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new WizardField({\r
      fields: [\r
        new FieldGroup({\r
          key: 'profile',\r
          description: 'Fill out your name',\r
          fields: [\r
            new TextField({\r
              key: 'name',\r
              placeholder: 'Last name, First name',\r
              required: true,\r
            }),\r
          ],\r
        }),\r
        new FieldGroup({\r
          key: 'shipping',\r
          description: 'Fill out your address',\r
          fields: [\r
            new TextField({\r
              key: 'address',\r
              placeholder: 'Ex. 1 Main St, New York, NY',\r
              required: true,\r
            }),\r
          ],\r
        }),\r
      ],\r
    }),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var Um=`import { Component } from '@angular/core';\r
import { FormGroup } from '@angular/forms';\r
import { MatButtonModule } from '@angular/material/button';\r
import { MatStepperModule } from '@angular/material/stepper';\r
\r
import { WizardField } from './wizard.field';\r
import { DynamicFormElement } from '@preforms/angular/core/decorators';\r
import { BaseFieldComponent, DynamicFieldGroupComponent } from '@preforms/angular/core/fields';\r
\r
@DynamicFormElement({\r
  component: 'wizard',\r
})\r
@Component({\r
  selector: 'app-wizard-field',\r
  templateUrl: './wizard.component.html',\r
  imports: [MatButtonModule, MatStepperModule, DynamicFieldGroupComponent],\r
})\r
export class WizardFieldComponent extends BaseFieldComponent<FormGroup, WizardField> {\r
  formGroup(key: string) {\r
    return this.control.get(key) as FormGroup;\r
  }\r
}\r
`;var jm=`<mat-stepper #stepper [linear]="true" orientation="vertical">\r
  @for (field of field.fields; track $index; let i = $index) {\r
    <mat-step [stepControl]="formGroup(field.key)" [label]="field.label">\r
      <preforms-dynamic-field-group [fields]="field.fields" [control]="formGroup(field.key)" />\r
\r
      <div>\r
        @if (i) {\r
          <button matButton matStepperPrevious>Back</button>\r
        }\r
        <button matButton matStepperNext>Next</button>\r
      </div>\r
    </mat-step>\r
  }\r
\r
  <mat-step>\r
    <ng-template matStepLabel>Done</ng-template>\r
    <p>You are now done.</p>\r
    <div>\r
      <button matButton matStepperPrevious>Back</button>\r
      <button matButton (click)="stepper.reset()">Reset</button>\r
    </div>\r
  </mat-step>\r
</mat-stepper>\r
`;var $m=`import { FieldGroup, FieldWrapper, FieldWrapperConfig } from '@preforms/ts';\r
\r
export interface WizardFieldConfig extends FieldWrapperConfig {\r
  fields: FieldGroup[];\r
}\r
\r
export class WizardField extends FieldWrapper {\r
  override component = 'wizard';\r
  override fields: FieldGroup[];\r
\r
  constructor(config: WizardFieldConfig) {\r
    super(config);\r
    this.fields = config.fields;\r
  }\r
}\r
`;var Hm={id:"extensible-wizard",title:"Wizard Form",description:"Demonstrates how the form engine can be extended with custom fields. This example implements a WizardField component that renders multi-step form sections.",category:"Examples",component:pa,assets:[{label:"TS",language:"typescript",content:zm},{label:"wizard.component.ts",language:"typescript",content:Um},{label:"wizard.component.html",language:"html",content:jm},{label:"wizard.field.ts",language:"typescript",content:$m}]};var Vm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  FormElement,\r
  FormFieldEventType,\r
  NumberField,\r
  SelectField,\r
  SubmitButton,\r
  TextField,\r
  TriggerAction,\r
} from '@preforms/ts';\r
\r
import { Observable, of } from 'rxjs';\r
\r
@Component({\r
  selector: 'app-dynamic-form-fetch',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: DYNAMIC_FORM_FETCHER,\r
      useValue: (url: string): Observable<Partial<FormElement>[]> => {\r
        // simulate API returning fields based on selection\r
        const selection = url.split('/').pop();\r
\r
        const selectField = new SelectField({\r
          key: 'product',\r
          label: 'Select Product',\r
          value: selection,\r
          options: [\r
            { label: 'Product A', value: 'productA' },\r
            { label: 'Product B', value: 'productB' },\r
          ],\r
          triggers: [\r
            {\r
              on: FormFieldEventType.CHANGE,\r
              action: TriggerAction.FETCH,\r
              fetchUrl: '/api/forms/$value',\r
              mode: 'replace', // replace the current form with fetched fields\r
            },\r
          ],\r
        });\r
\r
        if (selection === 'productA') {\r
          return of([\r
            selectField,\r
            new TextField({\r
              key: 'productA_feature',\r
              label: 'Feature A',\r
              placeholder: 'Enter feature A',\r
              required: true,\r
            }),\r
            new NumberField({\r
              key: 'productA_quantity',\r
              label: 'Quantity',\r
              min: 1,\r
              value: 1,\r
            }),\r
          ]);\r
        }\r
\r
        if (selection === 'productB') {\r
          return of([\r
            selectField,\r
            new TextField({\r
              key: 'productB_color',\r
              label: 'Color',\r
              placeholder: 'Enter color',\r
              required: true,\r
            }),\r
            new NumberField({\r
              key: 'productB_units',\r
              label: 'Units',\r
              min: 1,\r
              value: 1,\r
            }),\r
          ]);\r
        }\r
\r
        return of([]);\r
      },\r
    },\r
  ],\r
})\r
export class DynamicFormFetchComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new SelectField({\r
      key: 'product',\r
      label: 'Select Product',\r
      options: [\r
        { label: 'Product A', value: 'productA' },\r
        { label: 'Product B', value: 'productB' },\r
      ],\r
      triggers: [\r
        {\r
          on: FormFieldEventType.CHANGE,\r
          action: TriggerAction.FETCH,\r
          fetchUrl: '/api/forms/$value',\r
          mode: 'replace', // replace the current form with fetched fields\r
        },\r
      ],\r
    }),\r
    new TextField({\r
      key: 'productA_feature',\r
      label: 'Feature A',\r
      placeholder: 'Enter feature A',\r
      required: true,\r
    }),\r
    new NumberField({\r
      key: 'productA_quantity',\r
      label: 'Quantity',\r
      min: 1,\r
      value: 1,\r
    }),\r
    new SubmitButton(),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var ua=class n{formChange=new C;fields=[new Oe({key:"product",label:"Select Product",options:[{label:"Product A",value:"productA"},{label:"Product B",value:"productB"}],triggers:[{on:"change",action:"fetch",fetchUrl:"/api/forms/$value",mode:"replace"}]}),new N({key:"productA_feature",label:"Feature A",placeholder:"Enter feature A",required:!0}),new ge({key:"productA_quantity",label:"Quantity",min:1,value:1}),new ce];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-dynamic-form-fetch"]],outputs:{formChange:"formChange"},features:[B([de,{provide:hn,useValue:i=>{let e=i.split("/").pop(),t=new Oe({key:"product",label:"Select Product",value:e,options:[{label:"Product A",value:"productA"},{label:"Product B",value:"productB"}],triggers:[{on:"change",action:"fetch",fetchUrl:"/api/forms/$value",mode:"replace"}]});return e==="productA"?D([t,new N({key:"productA_feature",label:"Feature A",placeholder:"Enter feature A",required:!0}),new ge({key:"productA_quantity",label:"Quantity",min:1,value:1})]):e==="productB"?D([t,new N({key:"productB_color",label:"Color",placeholder:"Enter color",required:!0}),new ge({key:"productB_units",label:"Units",min:1,value:1})]):D([])}}])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var qm={id:"dynamic-select-fetch",title:"Fetch Form",description:`
 ## Dynamic Form Replacement

This demo shows how to build a **multi-step / conditional form** that completely replaces its fields based on user selection \u2014 using a \`fetch\` trigger in \`'replace'\` mode.

### What it does

- Starts with a single **product selector** dropdown.
- When the user picks "Product A" or "Product B":
  - A \`fetch\` trigger fires on \`CHANGE\`.
  - The custom \`DYNAMIC_FORM_FETCHER\` simulates an API call to \`/api/forms/{selectedValue}\`.
  - It returns a new array of fields tailored to the chosen product.
  - \`mode: 'replace'\` **overwrites the entire form content** with the returned fields.
- Result: The form dynamically switches between different input sets (e.g. "Feature A + Quantity" vs "Color + Units").

### Key Features

- **Form-level replacement** via \`mode: 'replace'\` on fetch trigger
- Returning **full field definitions** from the fetcher (not just patches)
- Self-referencing trigger on the \`SelectField\` (\`fetchUrl: '/api/forms/$value'\`)
- Keeping the selected value preserved by including the \`SelectField\` in every response
- Clean simulation of backend-driven conditional forms

### Code Highlights

\`\`\`ts
// Trigger on the initial SelectField
triggers: [{
  on: FormFieldEventType.CHANGE,
  action: TriggerAction.FETCH,
  fetchUrl: '/api/forms/$value',   // $value = current selection
  mode: 'replace'
}]
// Fetcher returns different field sets
if (selection === 'productA') {
  return of([
    selectField,                    // preserve the selector
    new TextField({ key: 'productA_feature', ... }),
    new NumberField({ key: 'productA_quantity', ... }),
  ]);
}
\`\`\`
>  Ideal for wizards, product configurators, onboarding flows,
>  or any form where the structure changes significantly based on early choices \u2014 all without manual component swapping or complex *ngIf logic.
Perfect example of how @preforms/angular turns static forms into fully dynamic, backend-driven experiences.
  `,category:"Reactivity & Validation",component:ua,assets:[{label:"TS",language:"typescript",content:Vm}]};var fa=class n{formChange=new C;fields=[new N({key:"username",placeholder:"Username",required:!0}),new Ot({key:"email",placeholder:"you@example.com"}),new tt({key:"password",hint:"At least 8 characters"}),new ge({key:"age",min:1,max:120}),new Oe({key:"language",options:[new Mt({value:"en",label:"English"}),new Mt({value:"es",label:"Spanish"})]}),new zo("notifications",["email","sms"],["email"]),new we({type:"range",key:"volume",min:0,max:100}),new we({type:"file",key:"upload"}),new Sn({key:"bio",placeholder:"Short bio",maxLength:280}),new ce("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-form-fields"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var Gm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  TextField,\r
  EmailField,\r
  PasswordField,\r
  NumberField,\r
  SelectField,\r
  FormFieldOption,\r
  CheckboxGroupField,\r
  InputField,\r
  TextareaField,\r
  OutputField,\r
  SubmitButton,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-form-fields',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class FormFieldsComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new TextField({ key: 'username', placeholder: 'Username', required: true }),\r
    new EmailField({ key: 'email', placeholder: 'you@example.com' }),\r
    new PasswordField({\r
      key: 'password',\r
      hint: 'At least 8 characters',\r
    }),\r
    new NumberField({ key: 'age', min: 1, max: 120 }),\r
    new SelectField({\r
      key: 'language',\r
      options: [\r
        new FormFieldOption({ value: 'en', label: 'English' }),\r
        new FormFieldOption({ value: 'es', label: 'Spanish' }),\r
      ],\r
    }),\r
    new CheckboxGroupField('notifications', ['email', 'sms'], ['email']),\r
    new InputField({ type: 'range', key: 'volume', min: 0, max: 100 }),\r
    new InputField({ type: 'file', key: 'upload' }),\r
    new TextareaField({ key: 'bio', placeholder: 'Short bio', maxLength: 280 }),\r
    new SubmitButton('Save'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var Wm={id:"form-fields",title:"Form Fields Reference",description:"Shows all built-in fields with quick examples for each type.",category:"Form Fields",component:fa,assets:[{label:"TS",language:"typescript",content:Gm}]};var Km=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { FIELD_ICON_TEMPLATES } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FieldIconEmojiComponent } from '@preforms/angular/native/fields/field-icon-emoji.component';\r
import {\r
  DialogField,\r
  FormDescription,\r
  FormList,\r
  FormTitle,\r
  FormTitleLevel,\r
  NumberField,\r
  PasswordField,\r
  SubmitButton,\r
  TextField,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-icons-form',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: FIELD_ICON_TEMPLATES,\r
      useValue: FieldIconEmojiComponent,\r
    },\r
  ],\r
})\r
export class IconsFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new PasswordField({\r
      hint: 'At least 8 characters. Use a mix of letters and numbers.',\r
      minLength: 8,\r
      autocomplete: 'off',\r
      icons: [\r
        {\r
          name: '\u{1F3B2}',\r
          side: 'left',\r
          action: 'generatePassword',\r
          title: 'Generate a random password',\r
        },\r
        {\r
          name: '\u{1F511}',\r
          side: 'left',\r
          expressions: [\r
            "field.type = field.type === 'text' ? 'password' : 'text'",\r
            "icon.name = field.type === 'text' ? '\u{1F441}\uFE0F' : '\u{1F511}'",\r
          ],\r
        },\r
      ],\r
    }),\r
\r
    new NumberField({\r
      key: 'amount',\r
      value: 0,\r
      min: 0,\r
      icons: [\r
        {\r
          name: '\u2795',\r
          side: 'left',\r
          expressions: ['field.value++'],\r
        },\r
        {\r
          name: '\u2796',\r
          side: 'right',\r
          expressions: ['field.value--'],\r
        },\r
      ],\r
    }),\r
\r
    new TextField({\r
      key: 'search',\r
      icons: [\r
        {\r
          name: '\u274C',\r
          side: 'left',\r
          expressions: ['field.value = null'],\r
          visible: 'field.value',\r
        },\r
      ],\r
    }),\r
\r
    new TextField({\r
      key: 'SKU',\r
      placeholder: 'Enter unique product SKU',\r
      icons: [\r
        {\r
          name: '\u2139\uFE0F',\r
          side: 'left',\r
          emit: 'custom:skuInfoOpen',\r
        },\r
      ],\r
    }),\r
\r
    new DialogField({\r
      key: 'sku-info',\r
      disabled: true,\r
      closeBtn: true,\r
      width: '400px',\r
      fields: [\r
        new FormTitle('What is SKU?', FormTitleLevel.H2),\r
        new FormDescription(\r
          \`A SKU is a unique identifier for each product in your inventory. \r
           It helps you track stock, manage orders, and avoid duplicate listings.\`,\r
        ),\r
        new FormTitle('Tips for creating SKUs:', FormTitleLevel.H3),\r
        new FormList([\r
          'Keep it short and consistent (e.g., EB-AP-2026)',\r
          'Avoid spaces or special characters',\r
          'Use a pattern that reflects product type or brand',\r
        ]),\r
      ],\r
      triggers: [\r
        {\r
          on: 'custom:skuInfoOpen',\r
          action: 'update_state',\r
          applyState: { disabled: false },\r
          sourceField: 'SKU',\r
        },\r
      ],\r
    }),\r
\r
    new TextField({\r
      key: 'name',\r
      icons: [\r
        {\r
          name: '\u{1F524}',\r
          side: 'right',\r
          action: 'uppercase', // custom action injected via token\r
          title: 'Uppercase text',\r
        },\r
      ],\r
    }),\r
\r
    new SubmitButton(),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var Qm=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
import { provideNativeDateAdapter } from '@angular/material/core';\r
import { provideRouter } from '@angular/router';\r
import { routes } from './app.routes';\r
import { FieldActionContext } from '@preforms/angular/core/services';\r
import { FIELD_ACTIONS } from '@preforms/angular/core/tokens';\r
import { generatePassword } from './utils/generate-password';\r
\r
export const appConfig: ApplicationConfig = {\r
  providers: [\r
    provideBrowserGlobalErrorListeners(),\r
    provideNativeDateAdapter(),\r
    provideRouter(routes),\r
    {\r
      provide: FIELD_ACTIONS,\r
      useValue: {\r
        randomize: (ctx: FieldActionContext) => {\r
          // Example: set a random value\r
          if (ctx.control && typeof ctx.control.setValue === 'function') {\r
            ctx.control.setValue(Math.floor(Math.random() * 100));\r
          }\r
        },\r
        uppercase: (ctx: FieldActionContext) => {\r
          const val = ctx.control.value;\r
          ctx.control.setValue(typeof val === 'string' ? val.toUpperCase() : val);\r
        },\r
        generatePassword: (ctx: FieldActionContext) => {\r
          const newPwd = generatePassword(12, {\r
            uppercase: true,\r
            lowercase: true,\r
            numbers: true,\r
            symbols: true,\r
          });\r
          ctx.control.setValue(newPwd);\r
        },\r
      },\r
    },\r
  ],\r
};\r
`;var ha=class n{formChange=new C;fields=[new tt({hint:"At least 8 characters. Use a mix of letters and numbers.",minLength:8,autocomplete:"off",icons:[{name:"\u{1F3B2}",side:"left",action:"generatePassword",title:"Generate a random password"},{name:"\u{1F511}",side:"left",expressions:["field.type = field.type === 'text' ? 'password' : 'text'","icon.name = field.type === 'text' ? '\u{1F441}\uFE0F' : '\u{1F511}'"]}]}),new ge({key:"amount",value:0,min:0,icons:[{name:"\u2795",side:"left",expressions:["field.value++"]},{name:"\u2796",side:"right",expressions:["field.value--"]}]}),new N({key:"search",icons:[{name:"\u274C",side:"left",expressions:["field.value = null"],visible:"field.value"}]}),new N({key:"SKU",placeholder:"Enter unique product SKU",icons:[{name:"\u2139\uFE0F",side:"left",emit:"custom:skuInfoOpen"}]}),new Ii({key:"sku-info",disabled:!0,closeBtn:!0,width:"400px",fields:[new qe("What is SKU?",2),new Zt(`A SKU is a unique identifier for each product in your inventory. 
           It helps you track stock, manage orders, and avoid duplicate listings.`),new qe("Tips for creating SKUs:",3),new Jo(["Keep it short and consistent (e.g., EB-AP-2026)","Avoid spaces or special characters","Use a pattern that reflects product type or brand"])],triggers:[{on:"custom:skuInfoOpen",action:"update_state",applyState:{disabled:!1},sourceField:"SKU"}]}),new N({key:"name",icons:[{name:"\u{1F524}",side:"right",action:"uppercase",title:"Uppercase text"}]}),new ce];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-icons-form"]],outputs:{formChange:"formChange"},features:[B([de,{provide:Hr,useValue:Rn}])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var Ym={id:"icons-fields",title:"Icons & Input Actions",description:`
Demonstrates interactive field icons. Includes:
- Password show/hide and generate buttons
- Number increment/decrement icons
- Clearable text field
- Info icon triggering a dialog
- Custom event triggers
`,category:"Form Fields",component:ha,assets:[{label:"TS",language:"typescript",content:Km},{label:"App Config",language:"typescript",content:Qm}]};var ga=class extends Ne{constructor(i){super({component:"editor",key:i})}};var ba=class n{formChange=new C;fields=[new ga("blogContent"),new ce("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-lazy-loading"]],outputs:{formChange:"formChange"},decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var Xm=`import { Component, EventEmitter, Output } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { SubmitButton } from '@preforms/ts';\r
import { EditorField } from './editor';\r
\r
@Component({\r
  selector: 'app-lazy-loading',\r
  template: \` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> \`,\r
  imports: [DynamicFormComponent],\r
})\r
export class LazyLoadingFieldsComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
  fields = [new EditorField('blogContent'), new SubmitButton('Save')];\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var Jm=`import { Component, OnInit } from '@angular/core';\r
import { FormControl, ReactiveFormsModule } from '@angular/forms';\r
import { BaseFieldComponent } from '@preforms/angular/core/fields';\r
import { FormField } from '@preforms/ts';\r
import { QuillModule } from 'ngx-quill';\r
\r
export class EditorField extends FormField<string> {\r
  constructor(key: string) {\r
    super({ component: 'editor', key });\r
  }\r
}\r
\r
@Component({\r
  selector: 'app-editor',\r
  imports: [QuillModule, ReactiveFormsModule],\r
  template: '<quill-editor [formControl]="control" />',\r
})\r
export class EditorComponent\r
  extends BaseFieldComponent<FormControl<string>, EditorField>\r
  implements OnInit\r
{\r
  // lazy load css\r
  ngOnInit() {\r
    const id = 'quill-theme';\r
    if (!document.getElementById(id)) {\r
      const link = document.createElement('link');\r
      link.id = id;\r
      link.rel = 'stylesheet';\r
      link.href = 'https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css';\r
      document.head.appendChild(link);\r
    }\r
  }\r
}`;var ep=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
import { provideNativeDateAdapter } from '@angular/material/core';\r
import { provideRouter } from '@angular/router';\r
import { routes } from './app.routes';\r
\r
\r
export const appConfig: ApplicationConfig = {\r
  providers: [\r
    provideBrowserGlobalErrorListeners(),\r
    provideNativeDateAdapter(),\r
    provideRouter(routes),\r
    provideDynamicFormLazyFields([\r
      {\r
        type: 'editor',\r
        loader: () => import('./custom-form-fields/editor/editor.component')\r
          .then((m) => m.EditorComponent),\r
      },\r
    ]),\r
  ],\r
};\r
`;var tp={id:"lazy-loading-fields",title:"Lazy Loaded Fields",description:"Demonstrates lazy-loading custom fields. The editor field component is loaded only when required.",category:"Extensibility",component:ba,assets:[{label:"TS",language:"typescript",content:Xm},{label:"editor.component.ts",language:"typescript",content:Jm},{label:"app.config.ts",language:"typescript",content:ep}]};var va=class n{formChange=new C;fields=[new ge({key:"id",value:2316,hidden:!0}),new Li({src:"chickengarlic.jpg",width:"400px"}),new qe("Garlic Knot Chicken Breasts"),new qe("$9.34 \u{1F3F7}\uFE0F",2),new Zt("Tender chicken breast with garlic, rosemary, and a hint of lemon."),new Er("Sides Dish",[new ki({key:"side",options:[new Mt({value:"na",label:"No Side",description:"$0.00"}),new Mt({value:"fries",label:"Fries",description:"$5.00"}),new Mt({value:"rice",label:"Rice",description:"$4.50"})],className:"app-selection",required:!0})]),new Er("Cutlery",[new In({key:"cutlery",label:"Add cutlery",className:"app-selection"})]),new Sn({key:"notes",placeholder:"it may not be possible to meetall requests"}),new ft({className:"form-end"}),new Si({position:"space-between",fields:[new ge({key:"amount",label:"",value:1,readonly:!0,min:1,max:5,icons:[{name:"\u2795",side:"left",action:"increment"},{name:"\u2796",side:"right",action:"decrement"}],className:"amount-control"}),new ce({label:"Add $9.34",className:"primary",triggers:[{on:"change",action:"fetch",fetchUrl:"/api/calculate-price?amount={amount}&side={side}",sourceField:["side","amount"],mode:"patch"}]})]})];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-order-form-demo"]],outputs:{formChange:"formChange"},features:[B([de,{provide:Hr,useValue:Rn},{provide:hn,useValue:i=>{let e=new URLSearchParams(i.split("?")[1]),t=Number(e.get("amount")??1),r=e.get("side"),s=(9.34+({fries:5,rice:4.5}[r]??0))*t;return D([{label:`Add $${s.toFixed(2)}`}])}}])],decls:1,vars:1,consts:[["className","product-form",3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],styles:[`.product-form{max-width:400px}.product-form .app-selection{flex-direction:row;align-items:center}.product-form .app-selection .label-text{margin-left:8px}.product-form .app-selection .description{color:#666;font-size:.9rem;margin-left:auto}.product-form .preforms-input-field{width:100%;border:0;padding:.5rem .6rem}.product-form .form-end{height:20px}.product-form fieldset{border:1px solid #e6e9ef;padding:1rem;border-radius:8px;margin-bottom:1rem}.product-form label{display:flex;flex-direction:column;margin-bottom:.25rem;align-items:start}.product-form .preforms-form-field{border:1px solid #cfd6e3;border-radius:6px}.product-form .preforms-form-field:focus-within{outline:3px solid rgba(99,102,241,.12);border-color:#6366f1}.product-form .preforms-input-field:focus{outline:none;border:none}.product-form .primary{background-color:#fb0;padding:.6rem 2rem;border:1px solid #cfd6e3;border-radius:25px;font-weight:700}.product-form .amount-control{border:1px solid #cfd6e3;border-radius:25px}.product-form .amount-control .preforms-form-field-row{display:flex}.product-form .amount-control .preforms-input-field{border:0;width:50px;text-align:center}.product-form .amount-control .preforms-input-field::-webkit-inner-spin-button{appearance:none}.product-form .amount-control button{background:none;border:none;color:inherit;font:inherit;cursor:pointer;padding:.4rem;height:100%}.product-form .amount-control button:active{background:inherit;scale:.8}.product-form .preforms-radio-field-header{display:none}.product-form .textarea label{margin-left:10px}
`],encapsulation:2})};var np=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { DYNAMIC_FORM_FETCHER, FIELD_ICON_TEMPLATES } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FieldIconEmojiComponent } from '@preforms/angular/native/fields/field-icon-emoji.component';\r
import {\r
  CheckboxField,\r
  ConfirmButton,\r
  Fieldset,\r
  FormDescription,\r
  FormDivider,\r
  FormElement,\r
  FormField,\r
  FormFieldOption,\r
  FormImage,\r
  FormRow,\r
  FormTitle,\r
  FormTitleLevel,\r
  NumberField,\r
  RadioField,\r
  SubmitButton,\r
  TextareaField,\r
} from '@preforms/ts';\r
import { Observable, of } from 'rxjs';\r
\r
@Component({\r
  selector: 'app-order-form-demo',\r
  template: \`<preforms-dynamic-form\r
    className="product-form"\r
    (submittedData)="logData($event)"\r
    [fields]="fields"\r
  /> \`,\r
  styleUrl: './order-form-demo.component.scss',\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: FIELD_ICON_TEMPLATES,\r
      useValue: FieldIconEmojiComponent,\r
    },\r
    {\r
      provide: DYNAMIC_FORM_FETCHER,\r
      useValue: (url: string): Observable<Partial<FormElement>[]> => {\r
        const params = new URLSearchParams(url.split('?')[1]);\r
\r
        const amount = Number(params.get('amount') ?? 1);\r
        const side = params.get('side');\r
\r
        const base = 9.34;\r
        const sides = { fries: 5, rice: 4.5 };\r
\r
        const price = (base + (sides[side as keyof typeof sides] ?? 0)) * amount;\r
\r
        return of([\r
          {\r
            label: \`Add $\${price.toFixed(2)}\`,\r
          },\r
        ]);\r
      },\r
    },\r
  ],\r
})\r
export class OrderFormDemoComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new NumberField({ key: 'id', value: 2316, hidden: true }),\r
    new FormImage({\r
      src: 'chickengarlic.jpg',\r
      width: '400px',\r
    }),\r
    new FormTitle('Garlic Knot Chicken Breasts'),\r
    new FormTitle('$9.34 \u{1F3F7}\uFE0F', FormTitleLevel.H2),\r
    new FormDescription('Tender chicken breast with garlic, rosemary, and a hint of lemon.'),\r
\r
    new Fieldset('Sides Dish', [\r
      new RadioField({\r
        key: 'side',\r
        options: [\r
          new FormFieldOption({ value: 'na', label: 'No Side', description: '$0.00' }),\r
          new FormFieldOption({ value: 'fries', label: 'Fries', description: '$5.00' }),\r
          new FormFieldOption({ value: 'rice', label: 'Rice', description: '$4.50' }),\r
        ],\r
        className: 'app-selection',\r
        required: true,\r
      }),\r
    ]),\r
\r
    new Fieldset('Cutlery', [\r
      new CheckboxField({\r
        key: 'cutlery',\r
        label: 'Add cutlery',\r
        className: 'app-selection',\r
      }),\r
    ]),\r
\r
    new TextareaField({\r
      key: 'notes',\r
      placeholder: 'it may not be possible to meetall requests',\r
    }),\r
\r
    new FormDivider({ className: 'form-end' }),\r
\r
    new FormRow({\r
      position: 'space-between',\r
      fields: [\r
        new NumberField({\r
          key: 'amount',\r
          label: '',\r
          value: 1,\r
          readonly: true,\r
          min: 1,\r
          max: 5,\r
          icons: [\r
            {\r
              name: '\u2795',\r
              side: 'left',\r
              action: 'increment',\r
            },\r
            {\r
              name: '\u2796',\r
              side: 'right',\r
              action: 'decrement',\r
            },\r
          ],\r
          className: 'amount-control',\r
        }),\r
        new SubmitButton({\r
          label: 'Add $9.34',\r
          className: 'primary',\r
          triggers: [\r
            {\r
              on: 'change',\r
              action: 'fetch',\r
              fetchUrl: '/api/calculate-price?amount={amount}&side={side}',\r
              sourceField: ['side', 'amount'],\r
              mode: 'patch',\r
            },\r
          ],\r
        }),\r
      ],\r
    }),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var ip=`.product-form {\r
  max-width: 400px;\r
\r
  .app-selection {\r
    flex-direction: row;\r
    align-items: center;\r
\r
    .label-text {\r
      margin-left: 8px;\r
    }\r
\r
    .description {\r
      color: #666;\r
      font-size: 0.9rem;\r
      margin-left: auto;\r
    }\r
  }\r
\r
  .preforms-input-field {\r
    width: 100%;\r
    border: 0;\r
    padding: 0.5rem 0.6rem;\r
  }\r
\r
  .form-end {\r
    height: 20px;\r
  }\r
\r
  fieldset {\r
    border: 1px solid #e6e9ef;\r
    padding: 1rem;\r
    border-radius: 8px;\r
    margin-bottom: 1rem;\r
  }\r
\r
  label {\r
    display: flex;\r
    flex-direction: column;\r
    margin-bottom: 0.25rem;\r
    align-items: start;\r
  }\r
\r
  .preforms-form-field {\r
    border: 1px solid #cfd6e3;\r
    border-radius: 6px;\r
  }\r
\r
  .preforms-form-field:focus-within {\r
    outline: 3px solid rgba(99, 102, 241, 0.12);\r
    border-color: #6366f1;\r
  }\r
\r
  .preforms-input-field:focus {\r
    outline: none;\r
    border: none;\r
  }\r
\r
  .primary {\r
    background-color: rgb(255, 187, 0);\r
    padding: 0.6rem 2rem;\r
    border: 1px solid #cfd6e3;\r
    border-radius: 25px;\r
    font-weight: 700;\r
  }\r
\r
  .amount-control {\r
    border: 1px solid #cfd6e3;\r
    border-radius: 25px;\r
    .preforms-form-field-row {\r
      display: flex;\r
    }\r
    .preforms-input-field {\r
      border: 0;\r
      width: 50px;\r
      text-align: center;\r
    }\r
\r
    .preforms-input-field::-webkit-inner-spin-button {\r
      appearance: none;\r
    }\r
\r
    button {\r
      background: none;\r
      border: none;\r
      color: inherit;\r
      font: inherit;\r
      cursor: pointer;\r
      padding: 0.4rem;\r
      height: 100%;\r
    }\r
\r
    button:active {\r
      background: inherit;\r
      scale: 0.8;\r
    }\r
  }\r
\r
  .preforms-radio-field-header {\r
    display: none;\r
  }\r
\r
  .textarea {\r
    label {\r
      margin-left: 10px;\r
    }\r
  }\r
}\r
`;var rp=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
import { provideNativeDateAdapter } from '@angular/material/core';\r
import { provideRouter } from '@angular/router';\r
import { routes } from './app.routes';\r
import { FieldActionContext } from '@preforms/angular/core/services';\r
import { FIELD_ACTIONS } from '@preforms/angular/core/tokens';\r
\r
export const appConfig: ApplicationConfig = {\r
  providers: [\r
    provideBrowserGlobalErrorListeners(),\r
    provideNativeDateAdapter(),\r
    provideRouter(routes),\r
    {\r
      provide: FIELD_ACTIONS,\r
      useValue: {\r
        increment: (ctx: FieldActionContext) => {\r
          const val = ctx.control.value;\r
          ctx.control.setValue(typeof val === 'number' ? Math.min(val + 1, ctx.field.max) : val);\r
        },\r
        decrement: (ctx: FieldActionContext) => {\r
          const val = ctx.control.value;\r
          ctx.control.setValue(typeof val === 'number' ? Math.max(val - 1, ctx.field.min) : val);\r
        },\r
      },\r
    },\r
  ],\r
};\r
`;var op={id:"order-form",title:"Order Form",description:`
  Modern product/order form demo built with @preforms/angular featuring:

  - live price recalculation
  - dynamic submit button text
  - quantity stepper with emoji buttons
  - conditional field visibility/logic
  - fieldsets, rows & dividers
  - product image + rich typography
  - fully declarative field & layout definition

  No handwritten template HTML or reactive forms boilerplate \u2014 everything is defined in clean TypeScript objects.
  `,component:va,category:"Examples",assets:[{label:"TS",language:"typescript",content:np},{label:"SCSS",language:"css",content:ip},{label:"App Config",language:"typescript",content:rp}]};var ap=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  SelectField,\r
  FormDivider,\r
  FormTitle,\r
  FormTitleLevel,\r
  FormDescription,\r
  SubmitButton,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-room-selection',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class RoomSelectionComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new SelectField({\r
      key: 'room',\r
      value: 'king',\r
      label: 'Choose a room',\r
      options: ['king', 'queen', 'junior'],\r
      required: true,\r
      triggers: [\r
        {\r
          on: 'change',\r
          action: 'update_state',\r
          applyState: { hidden: true },\r
          targetField: [\r
            'king-title',\r
            'queen-title',\r
            'junior-title',\r
            'king-description',\r
            'queen-description',\r
            'junior-description',\r
          ],\r
        },\r
        {\r
          on: 'change',\r
          action: 'update_state',\r
          applyState: { hidden: false },\r
          targetField: ['$value-title', '$value-description'],\r
        },\r
      ],\r
    }),\r
\r
    new FormDivider({ label: 'Room Details' }),\r
\r
    new FormTitle({ value: 'King Room', id: 'king-title' }, FormTitleLevel.H2),\r
    new FormTitle({ value: 'Queen Room', hidden: true, id: 'queen-title' }, FormTitleLevel.H2),\r
    new FormTitle({ value: 'Junior Room', hidden: true, id: 'junior-title' }, FormTitleLevel.H2),\r
\r
    new FormDescription({\r
      value: \`A majestic retreat designed for travelers who appreciate space and elegance. \r
The King Room features a sprawling bed fit for royalty, panoramic city views, \r
and an oversized lounge area perfect for relaxing after a day of adventure.\`,\r
      id: 'king-description',\r
    }),\r
\r
    new FormDescription({\r
      value: \`Comfort meets sophistication in the Queen Room. Cozy yet stylish, \r
it boasts a plush queen-sized bed, ambient lighting, and curated decor.\`,\r
      hidden: true,\r
      id: 'queen-description',\r
    }),\r
\r
    new FormDescription({\r
      value: \`The Junior Room is compact but clever. Smart furniture and quirky \r
design touches make it perfect for travelers who want efficiency with style.\`,\r
      hidden: true,\r
      id: 'junior-description',\r
    }),\r
\r
    new SubmitButton('Book Room'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var ya=class n{formChange=new C;fields=[new Oe({key:"room",value:"king",label:"Choose a room",options:["king","queen","junior"],required:!0,triggers:[{on:"change",action:"update_state",applyState:{hidden:!0},targetField:["king-title","queen-title","junior-title","king-description","queen-description","junior-description"]},{on:"change",action:"update_state",applyState:{hidden:!1},targetField:["$value-title","$value-description"]}]}),new ft({label:"Room Details"}),new qe({value:"King Room",id:"king-title"},2),new qe({value:"Queen Room",hidden:!0,id:"queen-title"},2),new qe({value:"Junior Room",hidden:!0,id:"junior-title"},2),new Zt({value:`A majestic retreat designed for travelers who appreciate space and elegance. 
The King Room features a sprawling bed fit for royalty, panoramic city views, 
and an oversized lounge area perfect for relaxing after a day of adventure.`,id:"king-description"}),new Zt({value:`Comfort meets sophistication in the Queen Room. Cozy yet stylish, 
it boasts a plush queen-sized bed, ambient lighting, and curated decor.`,hidden:!0,id:"queen-description"}),new Zt({value:`The Junior Room is compact but clever. Smart furniture and quirky 
design touches make it perfect for travelers who want efficiency with style.`,hidden:!0,id:"junior-description"}),new ce("Book Room")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-room-selection"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var sp={id:"room-selection",title:"Dynamic Content",description:"Shows how triggers can dynamically reveal content based on a selected value. Selecting a room type displays the corresponding title and description.",category:"Reactivity & Validation",component:ya,assets:[{label:"TS",language:"typescript",content:ap}]};var lp=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { SubmitButton, TextField } from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-validation-form',\r
  template: \` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> \`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class ValidationFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
  fields = [\r
    new TextField({\r
      key: 'username',\r
      hint: '3\u201330 characters. No spaces.',\r
      minLength: 3,\r
      maxLength: 30,\r
      pattern: ['^[a-zA-Z0-9_]+$', 'letters, numbers, underscore only'],\r
      required: true,\r
    }),\r
\r
    new SubmitButton('Save'),\r
  ];\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var _a=class n{formChange=new C;fields=[new N({key:"username",hint:"3\u201330 characters. No spaces.",minLength:3,maxLength:30,pattern:["^[a-zA-Z0-9_]+$","letters, numbers, underscore only"],required:!0}),new ce("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-validation-form"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var cp={id:"simple-validation-form",title:"Simple validation",description:"",component:_a,category:"Form Fields",assets:[{label:"TS",language:"typescript",content:lp}]};var dp=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  CheckboxField,\r
  DialogField,\r
  FieldButton,\r
  FieldGroup,\r
  FieldWrapper,\r
  FormDivider,\r
  FormFieldEventType,\r
  FormImage,\r
  FormTitle,\r
  InputField,\r
  NumberField,\r
  OutputField,\r
  SelectField,\r
  TriggerAction,\r
} from '@preforms/ts';\r
\r
import { from } from 'rxjs';\r
\r
function randomIntBetween(min: number, max: number): number {\r
  return Math.floor(Math.random() * (max - min + 1)) + min;\r
}\r
\r
function createPlayer(playerName: string, url = '$value', showdown = 'back_default') {\r
  return new FieldGroup({\r
    key: playerName,\r
    hidden: true,\r
    fields: [\r
      new FormImage({\r
        src: '',\r
        key: 'image',\r
      }),\r
      new InputField({\r
        type: 'range',\r
        key: 'hp',\r
        value: 0,\r
        className: 'indicator',\r
      }),\r
      new InputField({ type: 'range', key: 'attack', value: 0, className: 'indicator' }),\r
      new InputField({ type: 'range', key: 'defense', value: 0, className: 'indicator' }),\r
      new NumberField({\r
        key: 'hit',\r
        readonly: true,\r
        className: 'hit',\r
      }),\r
      new OutputField({\r
        key: 'damage',\r
        calculation: \`Number(\${playerName}.hit) - Number(\${playerName}.defense) / 2\`,\r
        for: ['p1', 'p2'],\r
      }),\r
    ],\r
    triggers: [\r
      {\r
        on: FormFieldEventType.SELECTED,\r
        action: TriggerAction.FETCH,\r
        fetchUrl: url,\r
        sourceField: 'pokemon',\r
        mode: 'patch',\r
        projection: {\r
          target: 'value',\r
          select: {\r
            hp: 'stats[0].base_stat',\r
            attack: 'stats[1].base_stat',\r
            defense: 'stats[2].base_stat',\r
            image: \`sprites.other.showdown.\${showdown}\`,\r
          },\r
        },\r
      },\r
      {\r
        on: FormFieldEventType.SELECTED,\r
        action: TriggerAction.UPDATE_STATE,\r
        applyState: {\r
          hidden: false,\r
        },\r
      },\r
    ],\r
  });\r
}\r
\r
@Component({\r
  selector: 'app-dynamic-form-fetch-remote',\r
  template: \`<preforms-dynamic-form\r
    (submittedData)="logData($event)"\r
    [fields]="fields"\r
    className="pokemon"\r
  />\`,\r
  imports: [DynamicFormComponent],\r
  styles: [\r
    \`\r
      .pokemon {\r
        .grid {\r
          max-width: 400px;\r
          padding: 20px;\r
          display: grid;\r
          grid-template-areas: 'a a' 'b b';\r
          gap: 10px;\r
          grid-auto-rows: 40px 300px;\r
          align-items: end;\r
        }\r
\r
        .hit {\r
          .preforms-input-field {\r
            all: unset;\r
          }\r
        }\r
\r
        .indicator {\r
          .preforms-input-field {\r
            max-width: 100%;\r
          }\r
        }\r
\r
        .primary {\r
          background-color: rgb(255, 187, 0);\r
          padding: 0.6rem 2rem;\r
          border: 1px solid #cfd6e3;\r
          border-radius: 25px;\r
          font-weight: 700;\r
          margin-top: 30px;\r
          display: inline-block;\r
        }\r
      }\r
    \`,\r
  ],\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: DYNAMIC_FORM_FETCHER,\r
      useValue: (url: string) => {\r
        return from(fetch(url).then((res) => res.json()));\r
      },\r
    },\r
  ],\r
  encapsulation: ViewEncapsulation.None,\r
})\r
export class DynamicFormFetchRemoteComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new CheckboxField({ key: 'done', hidden: true }),\r
    new OutputField({\r
      key: 'score',\r
      calculation: 'Number(p1.damage) - Number(p2.damage)',\r
      for: ['done'],\r
    }),\r
    new DialogField({\r
      key: 'popup',\r
      disabled: true,\r
      fields: [new FormTitle('Tie!')],\r
      triggers: [\r
        {\r
          on: 'change',\r
          action: 'update_state',\r
          applyState: {\r
            fields: [new FormTitle('You win!')],\r
          },\r
          sourceField: 'score',\r
          condition: {\r
            operator: 'gt',\r
            value: 0,\r
          },\r
        },\r
        {\r
          on: 'change',\r
          action: 'update_state',\r
          applyState: {\r
            fields: [new FormTitle('You loss')],\r
          },\r
          sourceField: 'score',\r
          condition: {\r
            operator: 'lt',\r
            value: 0,\r
          },\r
        },\r
      ],\r
    }),\r
\r
    new FieldWrapper({\r
      className: 'grid',\r
      fields: [\r
        new FormDivider({ label: 'Player' }),\r
        new FormDivider({ label: 'Enemy' }),\r
        createPlayer('p1'),\r
        createPlayer(\r
          'p2',\r
          'https://pokeapi.co/api/v2/pokemon/' + randomIntBetween(1, 151),\r
          'front_default',\r
        ),\r
      ],\r
    }),\r
\r
    new FormDivider({ label: 'Play!' }),\r
\r
    new SelectField({\r
      key: 'type',\r
      label: 'Select Pokemon Type',\r
      options: [],\r
      triggers: [\r
        {\r
          on: FormFieldEventType.INIT,\r
          action: TriggerAction.FETCH,\r
          fetchUrl: 'https://pokeapi.co/api/v2/type/',\r
          mode: 'patch',\r
          projection: {\r
            target: 'options',\r
            select: {\r
              value: 'url',\r
              label: 'name',\r
            },\r
            source: 'results',\r
          },\r
        },\r
      ],\r
    }),\r
\r
    new SelectField({\r
      key: 'pokemon',\r
      label: 'Select Pokemon',\r
      hidden: true,\r
      options: [],\r
      triggers: [\r
        {\r
          on: FormFieldEventType.CHANGE,\r
          sourceField: 'type',\r
          action: TriggerAction.FETCH,\r
          fetchUrl: '$value',\r
          mode: 'patch',\r
          projection: {\r
            target: 'options',\r
            select: {\r
              value: 'pokemon.url',\r
              label: 'pokemon.name',\r
            },\r
            source: 'pokemon',\r
          },\r
        },\r
        {\r
          on: FormFieldEventType.SELECTED,\r
          sourceField: 'type',\r
          action: TriggerAction.UPDATE_STATE,\r
          applyState: {\r
            hidden: false,\r
          },\r
        },\r
      ],\r
    }),\r
\r
    new FieldButton({\r
      type: 'button',\r
      label: 'Attack!',\r
      hidden: true,\r
      className: 'primary',\r
      triggers: [\r
        {\r
          on: 'selected',\r
          sourceField: 'pokemon',\r
          action: 'update_state',\r
          applyState: {\r
            hidden: false,\r
          },\r
        },\r
        {\r
          on: 'click',\r
          action: 'update_state',\r
          applyState: {\r
            value: {\r
              hit: 'p1.attack',\r
            },\r
          },\r
          targetField: ['p2'],\r
        },\r
        {\r
          on: 'click',\r
          action: 'update_state',\r
          applyState: {\r
            value: {\r
              hit: 'p2.attack',\r
            },\r
          },\r
          targetField: ['p1'],\r
          debounce: 1000,\r
        },\r
        {\r
          on: 'click',\r
          action: 'update_state',\r
          applyState: {\r
            value: true,\r
          },\r
          targetField: ['done'],\r
          debounce: 1001,\r
        },\r
        {\r
          on: 'click',\r
          action: 'update_state',\r
          applyState: {\r
            disabled: false,\r
          },\r
          targetField: ['popup'],\r
          debounce: 1002,\r
        },\r
      ],\r
    }),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;function av(n,i){return Math.floor(Math.random()*(i-n+1))+n}function mp(n,i="$value",e="back_default"){return new Pt({key:n,hidden:!0,fields:[new Li({src:"",key:"image"}),new we({type:"range",key:"hp",value:0,className:"indicator"}),new we({type:"range",key:"attack",value:0,className:"indicator"}),new we({type:"range",key:"defense",value:0,className:"indicator"}),new ge({key:"hit",readonly:!0,className:"hit"}),new Tn({key:"damage",calculation:`Number(${n}.hit) - Number(${n}.defense) / 2`,for:["p1","p2"]})],triggers:[{on:"selected",action:"fetch",fetchUrl:i,sourceField:"pokemon",mode:"patch",projection:{target:"value",select:{hp:"stats[0].base_stat",attack:"stats[1].base_stat",defense:"stats[2].base_stat",image:`sprites.other.showdown.${e}`}}},{on:"selected",action:"update_state",applyState:{hidden:!1}}]})}var Ca=class n{formChange=new C;fields=[new In({key:"done",hidden:!0}),new Tn({key:"score",calculation:"Number(p1.damage) - Number(p2.damage)",for:["done"]}),new Ii({key:"popup",disabled:!0,fields:[new qe("Tie!")],triggers:[{on:"change",action:"update_state",applyState:{fields:[new qe("You win!")]},sourceField:"score",condition:{operator:"gt",value:0}},{on:"change",action:"update_state",applyState:{fields:[new qe("You loss")]},sourceField:"score",condition:{operator:"lt",value:0}}]}),new Kt({className:"grid",fields:[new ft({label:"Player"}),new ft({label:"Enemy"}),mp("p1"),mp("p2","https://pokeapi.co/api/v2/pokemon/"+av(1,151),"front_default")]}),new ft({label:"Play!"}),new Oe({key:"type",label:"Select Pokemon Type",options:[],triggers:[{on:"init",action:"fetch",fetchUrl:"https://pokeapi.co/api/v2/type/",mode:"patch",projection:{target:"options",select:{value:"url",label:"name"},source:"results"}}]}),new Oe({key:"pokemon",label:"Select Pokemon",hidden:!0,options:[],triggers:[{on:"change",sourceField:"type",action:"fetch",fetchUrl:"$value",mode:"patch",projection:{target:"options",select:{value:"pokemon.url",label:"pokemon.name"},source:"pokemon"}},{on:"selected",sourceField:"type",action:"update_state",applyState:{hidden:!1}}]}),new Qt({type:"button",label:"Attack!",hidden:!0,className:"primary",triggers:[{on:"selected",sourceField:"pokemon",action:"update_state",applyState:{hidden:!1}},{on:"click",action:"update_state",applyState:{value:{hit:"p1.attack"}},targetField:["p2"]},{on:"click",action:"update_state",applyState:{value:{hit:"p2.attack"}},targetField:["p1"],debounce:1e3},{on:"click",action:"update_state",applyState:{value:!0},targetField:["done"],debounce:1001},{on:"click",action:"update_state",applyState:{disabled:!1},targetField:["popup"],debounce:1002}]})];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-dynamic-form-fetch-remote"]],outputs:{formChange:"formChange"},features:[B([de,{provide:hn,useValue:i=>$e(fetch(i).then(e=>e.json()))}])],decls:1,vars:1,consts:[["className","pokemon",3,"submittedData","fields"]],template:function(e,t){e&1&&(d(0,"preforms-dynamic-form",0),T("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],styles:[`.pokemon .grid{max-width:400px;padding:20px;display:grid;grid-template-areas:"a a" "b b";gap:10px;grid-auto-rows:40px 300px;align-items:end}.pokemon .hit .preforms-input-field{all:unset}.pokemon .indicator .preforms-input-field{max-width:100%}.pokemon .primary{background-color:#fb0;padding:.6rem 2rem;border:1px solid #cfd6e3;border-radius:25px;font-weight:700;margin-top:30px;display:inline-block}
`],encapsulation:2})};var pp={id:"dynamic-select-fetch-remote",title:"Pokemon Game",description:"",category:"Examples",component:Ca,assets:[{label:"TS",language:"typescript",content:dp}]};var xa=[lm,Wm,cp,op,gm,pm,Hm,am,qm,dm,Ym,sp,im,tp,pp];var sv=["demoContainer"];function lv(n,i){}function cv(n,i){if(n&1&&(d(0,"h1"),b(1),p(),d(2,"div",1),F(3,"markdown",2),p(),d(4,"div",3)(5,"demo-card",4),St(6,lv,0,0,"ng-template",null,0,Hi),p(),d(8,"demo-card",5),F(9,"result-viewer",6),p()(),F(10,"code-tabs",7)(11,"br")(12,"br")),n&2){let e=x();h(),j(e.example.title),h(2),g("data",e.example.description),h(6),g("value",e.formValue),h(),g("codeAssets",e.example.assets)}}var wa=class n{constructor(i,e){this.route=i;this.cd=e}container;example;compRef;formValue;codeAssets=[];sub;loadComponent(){this.container.clear(),this.compRef=this.container.createComponent(this.example.component,{bindings:[_l("formChange",i=>{this.formValue=i})]})}ngAfterViewInit(){this.sub=this.route.params.subscribe(i=>{this.example=xa.find(e=>e.id===i.id),this.formValue=void 0,this.cd.detectChanges(),this.loadComponent()})}ngOnDestroy(){this.compRef&&(this.compRef.destroy(),this.compRef=void 0),this.container?.clear(),this.sub?.unsubscribe()}static \u0275fac=function(e){return new(e||n)(on(Rt),on(Ye))};static \u0275cmp=v({type:n,selectors:[["app-example-page"]],viewQuery:function(e,t){if(e&1&&Ze(sv,5,Ke),e&2){let r;V(r=q())&&(t.container=r.first)}},decls:1,vars:1,consts:[["demoContainer",""],[1,"info"],[3,"data"],[1,"demo-layout"],["title","Live Demo"],["title","Result"],[3,"value"],[3,"codeAssets"]],template:function(e,t){e&1&&z(0,cv,13,4),e&2&&U(t.example?0:-1)},dependencies:[Lo,Bo,Fn,En,Oo],styles:[".info[_ngcontent-%COMP%]{max-width:800px}"]})};var up=`new NumberField({ key: 'amount' })\r
new InputField({ key: 'username' })`;var fp=`new PasswordField({\r
  key: 'confirmPassword',\r
  triggers: [\r
    {\r
      on: 'input',\r
      action: TriggerAction.VALIDATE,\r
      validation: {\r
        operator: 'eq',\r
        compareTo: 'password',\r
        message: 'must match password'\r
      }\r
    }\r
  ]\r
})`;var hp=`new EmailField()\r
new PasswordField()\r
new PhoneNumberField()`;var gp=`new Address()\r
new Currency()\r
new DateOfBirth()\r
new FullName()`;var bp=`fields = [\r
  new EmailField(),\r
\r
  new PasswordField(),\r
\r
  new PasswordField({\r
    key: 'confirmPassword',\r
    triggers: [\r
      {\r
        on: 'blur',\r
        action: TriggerAction.VALIDATE,\r
        validation: {\r
          operator: 'eq',\r
          compareTo: 'password',\r
          message: 'must match password'\r
        }\r
      }\r
    ]\r
  }),\r
\r
  new Address()\r
];`;var vp=`@DynamicFormElement({\r
  component: 'password-strength',\r
})\r
export class PasswordStrengthComponent extends BaseFieldComponent<\r
  FormControl<number>,\r
  PasswordStrengthField\r
> {}`;var yp=`export class PasswordStrengthField extends NumberField {\r
  constructor() {\r
    super({\r
      key: 'strength',\r
      component: 'password-strength',\r
    });\r
  }\r
}`;var _p=`fields = [\r
  new EmailField(),\r
  new NumberField({ key: 'amount' })\r
];`;var Ea=class n{code=[up,fp,hp,gp,bp,vp,yp,_p,'<preforms-dynamic-form [fields]="fields" (submittedData)="onSubmit($event)"/>',`new EmailField()
new PasswordField()`,`new NumberField({ key: 'amount' })
new InputField({ key: 'username' })`,`export class AmountField extends NumberField {
  constructor() {
    super({
      key: 'amount',
      label: 'Amount',
      min: 0
    });
  }
}`];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-home"]],decls:126,vars:48,consts:[["data","TBD"],[3,"data"]],template:function(e,t){e&1&&(d(0,"h1"),b(1,"Preforms"),p(),d(2,"h2"),b(3,"A class-based form modeling system for Angular"),p(),d(4,"p"),b(5,"Build forms as real domain models \u2014 not configuration objects."),p(),d(6,"p"),b(7,` Preforms gives you a strongly-typed form modeling system with a built-in trigger engine for cross-field validation, behavior and a domain-ready field library.
`),p(),d(8,"h2"),b(9,"Why Preforms"),p(),d(10,"p"),b(11,"Most Angular form solutions treat forms as configuration:"),p(),d(12,"ul")(13,"li"),b(14,"JSON schemas"),p(),d(15,"li"),b(16,"Config objects"),p(),d(17,"li"),b(18,"Template-driven mappings"),p()(),d(19,"p"),b(20,"Preforms takes a different approach:"),p(),d(21,"blockquote"),b(22,"Forms are object models with behavior."),p(),d(23,"p"),b(24," You define forms using classes like "),d(25,"strong"),b(26,"FormField"),p(),b(27,", "),d(28,"strong"),b(29,"FieldGroup"),p(),b(30,", "),d(31,"strong"),b(32,"NumberField"),p(),b(33,`, and compose them like a real domain model.
`),p(),d(34,"h2"),b(35,"Get Started in 30 Seconds"),p(),d(36,"p"),b(37,"Install:"),p(),F(38,"markdown",0),d(39,"p"),b(40,"Define a form:"),p(),F(41,"markdown",1),pe(42,"language"),d(43,"p"),b(44,"Render (Angular adapter handles UI automatically):"),p(),F(45,"markdown",1),pe(46,"language"),d(47,"p"),b(48," Preforms models are rendered automatically by the Angular adapter. "),F(49,"br"),b(50,` No manual form wiring is required \u2014 models are interpreted into reactive forms and UI components.
`),p(),d(51,"h3"),b(52,"1. Form Modeling System"),p(),d(53,"p"),b(54,"Define forms using strongly-typed classes."),p(),F(55,"markdown",1),pe(56,"language"),d(57,"h3"),b(58,"2. Trigger Engine"),p(),d(59,"p"),b(60,"Add cross-field behavior directly inside field definitions."),p(),F(61,"markdown",1),pe(62,"language"),d(63,"h3"),b(64,"3. Domain Field Library (DX layer)"),p(),d(65,"p"),b(66,"Preforms ships with a rich set of domain-ready field primitives."),p(),d(67,"strong"),b(68,"Semantic Fields"),p(),F(69,"markdown",1),pe(70,"language"),d(71,"p"),b(72,"These fields include sensible defaults, structure, and validation."),p(),d(73,"strong"),b(74,"Domain Fields"),p(),F(75,"markdown",1),pe(76,"language"),d(77,"h2"),b(78,"Smart Defaults vs Explicit Control"),p(),d(79,"p"),b(80,"Preforms balances minimal configuration with explicit identity."),p(),d(81,"p"),b(82,"Intent-based fields (no key required)"),p(),F(83,"markdown",1),pe(84,"language"),d(85,"p"),b(86,"Data-bound fields (explicit identity required)"),p(),F(87,"markdown",1),pe(88,"language"),d(89,"h2"),b(90,"Extensible UI System"),p(),d(91,"p"),b(92,"You can create your own strongly-typed fields."),p(),F(93,"markdown",1),pe(94,"language"),d(95,"p"),b(96,"Preforms allows custom field components to be plugged directly into the form model."),p(),d(97,"strong"),b(98,"Custom Field Components"),p(),d(99,"p"),b(100,"Preforms lets you create fully custom UI field components."),p(),F(101,"markdown",1),pe(102,"language"),d(103,"strong"),b(104,"Bind it to a field model"),p(),F(105,"markdown",1),pe(106,"language"),d(107,"h2"),b(108,"What makes Preforms different"),p(),d(109,"ul")(110,"li"),b(111,"Strongly typed form models"),p(),d(112,"li"),b(113,"Object-oriented field system"),p(),d(114,"li"),b(115,"Built-in cross-field validation"),p(),d(116,"li"),b(117,"Declarative trigger engine"),p(),d(118,"li"),b(119,"No JSON schema required"),p()(),d(120,"h2"),b(121,"Example"),p(),F(122,"markdown",1),pe(123,"language"),F(124,"br")(125,"br")),e&2&&(h(41),g("data",Re(42,12,t.code[7],"typescript")),h(4),g("data",Re(46,15,t.code[8],"html")),h(10),g("data",Re(56,18,t.code[0],"typescript")),h(6),g("data",Re(62,21,t.code[1],"typescript")),h(8),g("data",Re(70,24,t.code[2],"typescript")),h(6),g("data",Re(76,27,t.code[3],"typescript")),h(8),g("data",Re(84,30,t.code[9],"typescript")),h(4),g("data",Re(88,33,t.code[10],"typescript")),h(6),g("data",Re(94,36,t.code[11],"typescript")),h(8),g("data",Re(102,39,t.code[5],"typescript")),h(4),g("data",Re(106,42,t.code[6],"typescript")),h(17),g("data",Re(123,45,t.code[4],"typescript")))},dependencies:[Fn,En,Di],encapsulation:2})};var Cp=[{path:"",component:Ea},{path:"examples/:id",component:wa}];function xp(n=12,i={uppercase:!0,lowercase:!0,numbers:!0,symbols:!0}){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t="abcdefghijklmnopqrstuvwxyz",r="0123456789",o="!@#$%^&*()-_=+[]{}|;:,.<>?",a="";if(i.uppercase&&(a+=e),i.lowercase&&(a+=t),i.numbers&&(a+=r),i.symbols&&(a+=o),!a)throw new Error("At least one character type must be enabled");let s="";for(let l=0;l<n;l++)s+=a[Math.floor(Math.random()*a.length)];return s}function wp(n){return{provide:Hl,useValue:n}}var Ep={providers:[Bl(zl()),Ps({loader:ti}),dl(),wc(),Cs(Cp),wp([{type:"editor",loader:()=>import("./chunk-EIDXEUOP.js").then(n=>n.EditorComponent)}]),{provide:Vl,useValue:{randomize:n=>{n.control&&typeof n.control.setValue=="function"&&n.control.setValue(Math.floor(Math.random()*100))},uppercase:n=>{let i=n.control.value;n.control.setValue(typeof i=="string"?i.toUpperCase():i)},increment:n=>{let i=n.control.value;n.control.setValue(typeof i=="number"?Math.min(i+1,n.field.max):i)},decrement:n=>{let i=n.control.value;n.control.setValue(typeof i=="number"?Math.max(i-1,n.field.min):i)},generatePassword:n=>{let i=xp(12,{uppercase:!0,lowercase:!0,numbers:!0,symbols:!0});n.control.setValue(i)}}},$l(jl())]};var An=class n{isOpen=new De(!1);isOpen$=this.isOpen.asObservable();open(){this.isOpen.next(!0)}close(){this.isOpen.next(!1)}toggle(){this.isOpen.next(!this.isOpen.value)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"})};var vv=n=>({open:n}),yv=n=>["examples",n];function _v(n,i){if(n&1){let e=Qe();d(0,"li")(1,"a",3),T("click",function(){Ie(e);let r=x(2);return ke(r.sidenav.close())}),b(2),p()()}if(n&2){let e=i.$implicit;h(),g("routerLink",Ee(2,yv,e.id)),h(),j(e.title)}}function Cv(n,i){if(n&1&&(d(0,"div",1)(1,"div",2),b(2),p(),d(3,"ul"),ne(4,_v,3,4,"li",null,Ce),p()()),n&2){let e=i.$implicit;h(2),j(e.name),h(2),ie(e.examples)}}var Fa=class n{sidenav=c(An);groupedExamples=[];constructor(){this.groupedExamples=this.groupByCategory(xa)}groupByCategory(i){let e={};return i.forEach(t=>{let r=t.category||"";e[r]||(e[r]=[]),e[r].push(t)}),Object.keys(e).map(t=>({name:t,examples:e[t]}))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-sidebar"]],decls:6,vars:5,consts:[[1,"sidebar",3,"ngClass"],[1,"category"],[1,"category-title"],[3,"click","routerLink"]],template:function(e,t){e&1&&(d(0,"nav",0),pe(1,"async"),ne(2,Cv,6,1,"div",1,Ce),F(4,"br")(5,"br"),p()),e&2&&(g("ngClass",Ee(3,vv,un(1,1,t.sidenav.isOpen$))),h(2),ie(t.groupedExamples))},dependencies:[Ei,Jn,ei],styles:[".sidebar[_ngcontent-%COMP%]{width:250px;padding:1rem;background-color:#f5f6fa;border-right:1px solid #e0e0e0;height:calc(100vh - 60px);overflow:auto}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-weight:700;color:#333}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 1rem;cursor:pointer;border-radius:4px;display:block}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block}"]})};var xv=n=>({open:n}),Da=class n{sidenav=c(An);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-toolbar"]],decls:10,vars:5,consts:[[1,"toolbar"],[1,"title"],["routerLink",""],["id","toggle-sidenav",3,"click"],[1,"menu_icon",3,"ngClass"],[1,"bar1"],[1,"bar2"],[1,"bar3"]],template:function(e,t){e&1&&(d(0,"header",0)(1,"div",1)(2,"a",2),b(3,"Preforms Showcase"),p()(),d(4,"button",3),T("click",function(){return t.sidenav.toggle()}),d(5,"div",4),pe(6,"async"),F(7,"div",5)(8,"div",6)(9,"div",7),p()()()),e&2&&(h(5),g("ngClass",Ee(3,xv,un(6,1,t.sidenav.isOpen$))))},dependencies:[Jn,Ei,ei],styles:[".toolbar[_ngcontent-%COMP%]{height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;background-color:#24292e;color:#fff}.toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#24292e;border:none;padding:.5rem 1rem}@media only screen and (min-width:800px){#toggle-sidenav[_ngcontent-%COMP%]{display:none}}.menu_icon[_ngcontent-%COMP%]{display:inline-block;cursor:pointer}.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%]{width:35px;height:5px;background-color:#fff;margin:6px 0;transition:.4s}.open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%]{transform:translateY(11px) rotate(-45deg)}.open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%]{opacity:0}.open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%]{transform:translateY(-11px) rotate(45deg)}"]})};var wv=n=>({open:n}),Ta=class n{service=c(An);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-root"]],decls:6,vars:5,consts:[[1,"layout",3,"ngClass"],[1,"content"]],template:function(e,t){e&1&&(F(0,"app-toolbar"),d(1,"div",0),pe(2,"async"),F(3,"app-sidebar"),d(4,"main",1),F(5,"router-outlet"),p()()),e&2&&(h(),g("ngClass",Ee(3,wv,un(2,1,t.service.isOpen$))))},dependencies:[hr,Fa,Da,Jn,ei],styles:[".layout[_ngcontent-%COMP%]{display:flex;position:fixed;transition:left .1s;overflow:hidden;height:100%;width:100%}.content[_ngcontent-%COMP%]{padding:20px;overflow:auto;flex:1}@media only screen and (max-width:800px){.layout[_ngcontent-%COMP%]{left:-250px;width:calc(100vw + 250px)}.layout.open[_ngcontent-%COMP%]{left:0}}"]})};Ll(Ta,Ep).catch(n=>console.error(n));
