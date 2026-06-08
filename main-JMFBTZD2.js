import{$ as Hi,$a as m,$c as le,A as Ir,Aa as an,Ab as B,Ac as Yl,B as Mr,Ba as wl,Bb as Te,Bc as Xl,C as nn,Ca as Ze,Cb as Nl,D as Pa,Da as El,Db as Pl,Dc as Jl,E as ll,Ea as Fl,Eb as pe,Ec as _n,F as Rr,Fa as Oa,Fb as gn,G as Ar,Ga as v,Gb as Re,Gc as ec,H as Ke,Ha as ve,Hb as Vi,Hc as pt,I as Ae,Ia as O,Ib as Ol,Ic as qr,J as ue,Ja as Tl,Jb as Ll,Jc as $a,K as ke,Ka as S,Kb as Ee,Kc as tc,L as Ie,La as It,Lb as Ht,Lc as nc,M as cl,Ma as Lr,Mb as Bl,Mc as ic,Na as Dl,Nb as qi,Nc as rc,O as A,Oa as La,Ob as Ur,Oc as ut,P as be,Pa as Sl,Pb as Xe,Pc as oc,Q as dl,Qa as kl,Qb as X,Qc as ac,R as N,Ra as Il,Rb as bn,Rc as Gr,S as St,Sa as Ml,Sb as zl,Sc as Wr,T as c,Ta as Y,Tb as jr,Tc as se,U as ml,Ua as z,Ub as ni,Uc as xn,V as rn,Va as U,Vb as Ul,Vc as qt,W as lt,Wa as we,Wb as Ba,Wc as At,X as xe,Xa as On,Xb as ii,Xc as Ne,Y as Ce,Ya as ie,Yb as jl,Yc as Je,Z as Bt,Za as re,Zb as $r,Zc as ri,_ as ct,_a as g,_b as Ln,_c as oi,a as Le,aa as pl,ab as p,ac as $l,ad as Cn,b as nl,ba as x,bb as F,bc as vn,bd as ai,c as un,ca as fe,cb as Me,cc as Hl,cd as sc,d as H,da as Nr,db as Be,dc as Vl,dd as lc,e as Se,ea as Pr,eb as ti,ec as ql,ed as cc,f as $e,fa as ul,fb as Ut,fc as Hr,fd as dc,g as He,ga as Z,gb as ze,gc as Gl,gd as si,h as T,ha as fl,hb as jt,hc as Wl,hd as ce,i as Dr,ia as hl,ib as D,ic as Ue,id as mc,j as Aa,ja as gl,jb as Br,jc as Gi,jd as Qr,k as il,ka as dt,kb as C,kc as qe,kd as pc,l as ee,la as I,lb as ye,lc as za,m as rl,ma as bl,mb as he,mc as Ua,n as fn,na as te,nb as Mt,nc as Rt,o as ol,oa as zt,ob as Ye,oc as Wi,p as Sr,pa as vl,pb as V,pc as Qi,q as al,qa as yl,qb as q,qc as ja,ra as _l,rb as $t,rc as Vt,s as kr,sa as on,sb as zr,sc as sn,t as Xn,ta as xl,tb as oe,tc as Ki,u as Ve,ua as Cl,ub as Rl,uc as yn,v as $i,va as h,vb as ae,vc as Ql,w as Na,wa as ei,wb as b,wc as Vr,x as Jn,xa as mt,xb as j,xc as Kl,y as hn,ya as Or,yb as _e,z as sl,za as kt,zb as Al,zc as Zl}from"./chunk-ZCRIZLYR.js";import{a as d,b as _,d as tl,h as $,i as R}from"./chunk-PGHOU3HN.js";var uc=new Set,Bn,Ha=(()=>{class n{_platform=c(Ue);_nonce=c(_l,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pp}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Np(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Np(n,i){if(!uc.has(n))try{Bn||(Bn=document.createElement("style"),i&&Bn.setAttribute("nonce",i),Bn.setAttribute("type","text/css"),document.head.appendChild(Bn)),Bn.sheet&&(Bn.sheet.insertRule(`@media ${n} {body{ }}`,0),uc.add(n))}catch(e){console.error(e)}}function Pp(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Op=new N("MATERIAL_ANIMATIONS"),fc=null;function Lp(){return c(Op,{optional:!0})?.animationsDisabled||c(yl,{optional:!0})==="NoopAnimations"?"di-disabled":(fc??=c(Ha).matchMedia("(prefers-reduced-motion)").matches,fc?"reduced-motion":"enabled")}function ft(){return Lp()!=="enabled"}var Va=new N("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>c(Ll)}),li="Method not implemented",Zi=class{locale;_localeChanges=new H;localeChanges=this._localeChanges;setTime(i,e,t,r){throw new Error(li)}getHours(i){throw new Error(li)}getMinutes(i){throw new Error(li)}getSeconds(i){throw new Error(li)}parseTime(i,e){throw new Error(li)}addSeconds(i,e){throw new Error(li)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareDate(i,e):t==r}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),r=this.isValid(e);return t&&r?!this.compareTime(i,e):t==r}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},hc=new N("mat-date-formats");var Kr=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus-visible::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}
`],encapsulation:2,changeDetection:0})}return n})();var Yi;function gc(){if(Yi==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Yi=!0}))}finally{Yi=Yi||!1}return Yi}function di(n){return gc()?n:!!n.capture}var bc=new N("cdk-input-modality-detector-options"),vc={ignoreKeys:[18,17,224,91,16]},yc=650,qa={passive:!0,capture:!0},_c=(()=>{class n{_platform=c(Ue);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Se(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Rt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<yc||(this._modality.next(Wi(e)?"keyboard":"mouse"),this._mostRecentTarget=Rt(e))};_onTouchstart=e=>{if(Qi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Rt(e)};constructor(){let e=c(fe),t=c(ct),r=c(bc,{optional:!0});if(this._options=d(d({},vc),r),this.modalityDetected=this._modality.pipe(Ar(1)),this.modalityChanged=this.modalityDetected.pipe(Ir()),this._platform.isBrowser){let o=c(Or).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,qa),o.listen(t,"mousedown",this._onMousedown,qa),o.listen(t,"touchstart",this._onTouchstart,qa)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xi=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Xi||{}),xc=new N("cdk-focus-monitor-default-options"),Zr=di({passive:!0,capture:!0}),zn=(()=>{class n{_ngZone=c(fe);_platform=c(Ue);_inputModalityDetector=c(_c);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(ct);_stopInputModalityDetector=new H;constructor(){let e=c(xc,{optional:!0});this._detectionMode=e?.detectionMode||Xi.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Rt(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Vt(e);if(!this._platform.isBrowser||r.nodeType!==1)return T();let o=za(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new H,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=Vt(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Vt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Xi.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Xi.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?yc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Rt(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Zr),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Zr)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ue(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Zr),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Zr),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ga=(()=>{class n{_elementRef=c(te);_focusMonitor=c(zn);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new x;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var Cc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}
`],encapsulation:2,changeDetection:0})}return n})(),Yr;function Bp(){if(Yr===void 0&&(Yr=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Yr=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Yr}function mi(n){return Bp()?.createHTML(n)||n}function zp(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Up=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),jp=(()=>{class n{_mutationObserverFactory=c(Up);_observedElements=new Map;_ngZone=c(fe);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Vt(e);return new un(r=>{let a=this._observeElement(t).pipe(ee(s=>s.filter(l=>!zp(l))),Ve(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new H,r=this._mutationObserverFactory.create(o=>t.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wc=(()=>{class n{_contentObserver=c(jp);_elementRef=c(te);event=new x;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ja(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Jn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",X],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})();var $p=200,Xr=class{_letterKeyStream=new H;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new H;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:$p;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(ke(e=>this._pressedLetters.push(e)),Jn(i),Ve(()=>this._pressedLetters.length>0),ee(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function pi(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Jr=class{_items;_activeItemIndex=Z(-1);_activeItem=Z(null);_wrap=!1;_typeaheadSubscription=Le.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof zt?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):La(i)&&(this._effectRef=fl(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new H;change=new H;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Xr(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||pi(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return La(this._items)?this._items():this._items instanceof zt?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Un=class extends Jr{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var ht=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ht||{}),Wa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ht.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Ec=di({passive:!0,capture:!0}),Qa=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ec)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Ec)))}_delegateEventHandler=i=>{let e=Rt(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Ji={enterDuration:225,exitDuration:150},Hp=800,Fc=di({passive:!0,capture:!0}),Tc=["mousedown","touchstart"],Dc=["mouseup","mouseleave","touchend","touchcancel"],Vp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}
`],encapsulation:2,changeDetection:0})}return n})(),er=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Qa;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Vt(t)),o&&o.get(sn).load(Vp)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=d(d({},Ji),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||qp(i,e,r),s=i-r.left,l=e-r.top,u=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${l-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(f);let y=window.getComputedStyle(f),E=y.transitionProperty,K=y.transitionDuration,k=E==="none"||K==="0s"||K==="0s, 0s"||r.width===0&&r.height===0,me=new Wa(this,f,t,k);f.style.transform="scale3d(1, 1, 1)",me.state=ht.FADING_IN,t.persistent||(this._mostRecentTransientRipple=me);let Qe=null;return!k&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let en=()=>{Qe&&(Qe.fallbackTimer=null),clearTimeout(tn),this._finishRippleTransition(me)},st=()=>this._destroyRipple(me),tn=setTimeout(st,u+100);f.addEventListener("transitionend",en),f.addEventListener("transitioncancel",st),Qe={onTransitionEnd:en,onTransitionCancel:st,fallbackTimer:tn}}),this._activeRipples.set(me,Qe),(k||!u)&&this._finishRippleTransition(me),me}fadeOutRipple(i){if(i.state===ht.FADING_OUT||i.state===ht.HIDDEN)return;let e=i.element,t=d(d({},Ji),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=ht.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Vt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Tc.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Dc.forEach(e=>{this._triggerElement.addEventListener(e,this,Fc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ht.FADING_IN?this._startFadeOutTransition(i):i.state===ht.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=ht.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ht.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Wi(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Hp;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Qi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ht.VISIBLE||i.config.terminateOnPointerUp&&i.state===ht.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Tc.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Dc.forEach(e=>i.removeEventListener(e,this,Fc)),this._pointerUpEventsRegistered=!1))}};function qp(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var eo=new N("mat-ripple-global-options"),tr=(()=>{class n{_elementRef=c(te);_animationsDisabled=ft();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(fe),t=c(Ue),r=c(eo,{optional:!0}),o=c(Bt);this._globalOptions=r||{},this._rippleRenderer=new er(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:d(d(d({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,d(d({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,d(d({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&oe("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var to=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[qe]})}return n})();var Gp={capture:!0},Wp=["focus","mousedown","mouseenter","touchstart"],Ka="mat-ripple-loader-uninitialized",Za="mat-ripple-loader-class-name",Sc="mat-ripple-loader-centered",no="mat-ripple-loader-disabled",kc=(()=>{class n{_document=c(ct);_animationsDisabled=ft();_globalRippleOptions=c(eo,{optional:!0});_platform=c(Ue);_ngZone=c(fe);_injector=c(Bt);_eventCleanups;_hosts=new Map;constructor(){let e=c(Or).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Wp.map(t=>e.listen(this._document,t,this._onInteraction,Gp)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ka,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Za))&&e.setAttribute(Za,t.className||""),t.centered&&e.setAttribute(Sc,""),t.disabled&&e.setAttribute(no,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(no,""):e.removeAttribute(no)}_onInteraction=e=>{let t=Rt(e);if(t instanceof HTMLElement){let r=t.closest(`[${Ka}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Za)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ji.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Ji.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(no),rippleConfig:{centered:e.hasAttribute(Sc),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new er(s,this._ngZone,t,this._platform,this._injector),u=!s.rippleDisabled;u&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:u}),e.removeAttribute(Ka)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Qp=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Kp=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Ya(n,i){let e=Array(n);for(let t=0;t<n;t++)e[t]=i(t);return e}var Zp=(()=>{class n extends Zi{_matDateLocale=c(Va,{optional:!0});constructor(){super();let e=c(Va,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Ya(12,r=>this._format(t,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Ya(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Ya(7,r=>this._format(t,new Date(2017,0,r+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,r){let o=this._createDateWithOverflow(e,t,r);return o.getMonth()!=t,o}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let r=new Intl.DateTimeFormat(this.locale,_(d({},t),{timeZone:"utc"}));return this._format(r,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+t)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(Qp.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,r,o){let a=this.clone(e);return a.setHours(t,r,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let o=this._parseTimeString(r);if(o===null){let a=r.replace(/[^0-9:(AM|PM)]/gi,"").trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,r){let o=new Date;return o.setFullYear(e,t,r),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let r=new Date;return r.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),r.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(r)}_parseTimeString(e){let t=e.toUpperCase().match(Kp);if(t){let r=parseInt(t[1]),o=parseInt(t[2]),a=t[3]==null?void 0:parseInt(t[3]),s=t[4];if(r===12?r=s==="AM"?0:r:s==="PM"&&(r+=12),Xa(r,0,23)&&Xa(o,0,59)&&(a==null||Xa(a,0,59)))return this.setTime(this.today(),r,o,a||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();function Xa(n,i,e){return!isNaN(n)&&n>=i&&n<=e}var Yp={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function Ic(n=Yp){return[{provide:Zi,useClass:Zp},{provide:hc,useValue:n}]}var M="primary",hr=Symbol("RouteTitle"),is=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function $n(n){return new is(n)}function Ja(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Bc(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let l={},u=n.slice(0,t.length);return Ja(t,u,l)?{consumed:u,posParams:l}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Ja(o,n.slice(0,o.length),s)||!Ja(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function lo(n){return new Promise((i,e)=>{n.pipe(nn()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Jp(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!Gt(n[e],i[e]))return!1;return!0}function Gt(n,i){let e=n?rs(n):void 0,t=i?rs(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!zc(n[r],i[r]))return!1;return!0}function rs(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function zc(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function eu(n){return n.length>0?n[n.length-1]:null}function qn(n){return Aa(n)?n:Sl(n)?He(Promise.resolve(n)):T(n)}function Uc(n){return Aa(n)?lo(n):Promise.resolve(n)}var tu={exact:Hc,subset:Vc},jc={exact:nu,subset:iu,ignored:()=>!0},$c={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},os={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Mc(n,i,e){return tu[e.paths](n.root,i.root,e.matrixParams)&&jc[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function nu(n,i){return Gt(n,i)}function Hc(n,i,e){if(!jn(n.segments,i.segments)||!oo(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Hc(n.children[t],i.children[t],e))return!1;return!0}function iu(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>zc(n[e],i[e]))}function Vc(n,i,e){return qc(n,i,i.segments,e)}function qc(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!jn(r,e)||i.hasChildren()||!oo(r,e,t))}else if(n.segments.length===e.length){if(!jn(n.segments,e)||!oo(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Vc(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!jn(n.segments,r)||!oo(n.segments,r,t)||!n.children[M]?!1:qc(n.children[M],i,o,t)}}function oo(n,i,e){return i.every((t,r)=>jc[e](n[r].parameters,t.parameters))}var tt=class{root;queryParams;fragment;_queryParamMap;constructor(i=new J([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=$n(this.queryParams),this._queryParamMap}toString(){return au.serialize(this)}},J=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ao(this)}},wn=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=$n(this.parameters),this._parameterMap}toString(){return Wc(this)}};function ru(n,i){return jn(n,i)&&n.every((e,t)=>Gt(e.parameters,i[t].parameters))}function jn(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function ou(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===M&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==M&&(e=e.concat(i(r,t)))}),e}var xi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:()=>new En,providedIn:"root"})}return n})(),En=class{parse(i){let e=new ss(i);return new tt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${nr(i.root,!0)}`,t=cu(i.queryParams),r=typeof i.fragment=="string"?`#${su(i.fragment)}`:"";return`${e}${t}${r}`}},au=new En;function ao(n){return n.segments.map(i=>Wc(i)).join("/")}function nr(n,i){if(!n.hasChildren())return ao(n);if(i){let e=n.children[M]?nr(n.children[M],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==M&&t.push(`${r}:${nr(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=ou(n,(t,r)=>r===M?[nr(n.children[M],!1)]:[`${r}:${nr(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[M]!=null?`${ao(n)}/${e[0]}`:`${ao(n)}/(${e.join("//")})`}}function Gc(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function io(n){return Gc(n).replace(/%3B/gi,";")}function su(n){return encodeURI(n)}function as(n){return Gc(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function so(n){return decodeURIComponent(n)}function Rc(n){return so(n.replace(/\+/g,"%20"))}function Wc(n){return`${as(n.path)}${lu(n.parameters)}`}function lu(n){return Object.entries(n).map(([i,e])=>`;${as(i)}=${as(e)}`).join("")}function cu(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${io(e)}=${io(r)}`).join("&"):`${io(e)}=${io(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var du=/^[^\/()?;#]+/;function es(n){let i=n.match(du);return i?i[0]:""}var mu=/^[^\/()?;=#]+/;function pu(n){let i=n.match(mu);return i?i[0]:""}var uu=/^[^=?&#]+/;function fu(n){let i=n.match(uu);return i?i[0]:""}var hu=/^[^&#]+/;function gu(n){let i=n.match(hu);return i?i[0]:""}var ss=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new J([],{}):new J([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new Ie(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[M]=new J(e,t)),r}parseSegment(){let i=es(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new Ie(4009,!1);return this.capture(i),new wn(so(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=pu(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=es(this.remaining);r&&(t=r,this.capture(t))}i[so(e)]=so(t)}parseQueryParam(i){let e=fu(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=gu(this.remaining);a&&(t=a,this.capture(t))}let r=Rc(e),o=Rc(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=es(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new Ie(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=M);let s=this.parseChildren(e+1);t[a??M]=Object.keys(s).length===1&&s[M]?s[M]:new J([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new Ie(4011,!1)}};function Qc(n){return n.segments.length>0?new J([],{[M]:n}):n}function Kc(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=Kc(r);if(t===M&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new J(n.segments,i);return bu(e)}function bu(n){if(n.numberOfChildren===1&&n.children[M]){let i=n.children[M];return new J(n.segments.concat(i.segments),i.children)}return n}function Fn(n){return n instanceof tt}function Zc(n,i,e=null,t=null,r=new En){let o=Yc(n);return Xc(o,i,e,t,r)}function Yc(n){let i;function e(o){let a={};for(let l of o.children){let u=e(l);a[l.outlet]=u}let s=new J(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=Qc(t);return i??r}function Xc(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return ts(o,o,o,e,t,r);let a=vu(i);if(a.toRoot())return ts(o,o,new J([],{}),e,t,r);let s=yu(a,o,n),l=s.processChildren?rr(s.segmentGroup,s.index,a.commands):ed(s.segmentGroup,s.index,a.commands);return ts(o,s.segmentGroup,l,e,t,r)}function co(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function sr(n){return typeof n=="object"&&n!=null&&n.outlets}function Ac(n,i,e){n||="\u0275";let t=new tt;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function ts(n,i,e,t,r,o){let a={};for(let[u,f]of Object.entries(t??{}))a[u]=Array.isArray(f)?f.map(y=>Ac(u,y,o)):Ac(u,f,o);let s;n===i?s=e:s=Jc(n,i,e);let l=Qc(Kc(s));return new tt(l,a,r)}function Jc(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Jc(o,i,e)}),new J(n.segments,t)}var mo=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&co(t[0]))throw new Ie(4003,!1);let r=t.find(sr);if(r&&r!==eu(t))throw new Ie(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vu(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new mo(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,u])=>{s[l]=typeof u=="string"?u.split("/"):u}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new mo(e,i,t)}var fi=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function yu(n,i,e){if(n.isAbsolute)return new fi(i,!0,0);if(!e)return new fi(i,!1,NaN);if(e.parent===null)return new fi(e,!0,0);let t=co(n.commands[0])?0:1,r=e.segments.length-1+t;return _u(e,r,n.numberOfDoubleDots)}function _u(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new Ie(4005,!1);r=t.segments.length}return new fi(t,!1,r-o)}function xu(n){return sr(n[0])?n[0].outlets:{[M]:n}}function ed(n,i,e){if(n??=new J([],{}),n.segments.length===0&&n.hasChildren())return rr(n,i,e);let t=Cu(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new J(n.segments.slice(0,t.pathIndex),{});return o.children[M]=new J(n.segments.slice(t.pathIndex),n.children),rr(o,0,r)}else return t.match&&r.length===0?new J(n.segments,{}):t.match&&!n.hasChildren()?ls(n,i,e):t.match?rr(n,0,r):ls(n,i,e)}function rr(n,i,e){if(e.length===0)return new J(n.segments,{});{let t=xu(e),r={};if(Object.keys(t).some(o=>o!==M)&&n.children[M]&&n.numberOfChildren===1&&n.children[M].segments.length===0){let o=rr(n.children[M],i,e);return new J(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=ed(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new J(n.segments,r)}}function Cu(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(sr(s))break;let l=`${s}`,u=t<e.length-1?e[t+1]:null;if(r>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!Pc(l,u,a))return o;t+=2}else{if(!Pc(l,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function ls(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(sr(o)){let l=wu(o.outlets);return new J(t,l)}if(r===0&&co(e[0])){let l=n.segments[i];t.push(new wn(l.path,Nc(e[0]))),r++;continue}let a=sr(o)?o.outlets[M]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&co(s)?(t.push(new wn(a,Nc(s))),r+=2):(t.push(new wn(a,{})),r++)}return new J(t,{})}function wu(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=ls(new J([],{}),0,t))}),i}function Nc(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Pc(n,i,e){return n==e.path&&Gt(i,e.parameters)}var or="imperative",De=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(De||{}),nt=class{id;url;constructor(i,e){this.id=i,this.url=e}},Hn=class extends nt{type=De.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Qt=class extends nt{urlAfterRedirects;type=De.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Pe=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Pe||{}),lr=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(lr||{}),gt=class extends nt{reason;code;type=De.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function td(n){return n instanceof gt&&(n.code===Pe.Redirect||n.code===Pe.SupersededByNewNavigation)}var cn=class extends nt{reason;code;type=De.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},Vn=class extends nt{error;target;type=De.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},cr=class extends nt{urlAfterRedirects;state;type=De.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},po=class extends nt{urlAfterRedirects;state;type=De.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},uo=class extends nt{urlAfterRedirects;state;shouldActivate;type=De.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},fo=class extends nt{urlAfterRedirects;state;type=De.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ho=class extends nt{urlAfterRedirects;state;type=De.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},go=class{route;type=De.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},bo=class{route;type=De.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},vo=class{snapshot;type=De.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yo=class{snapshot;type=De.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_o=class{snapshot;type=De.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xo=class{snapshot;type=De.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var gi=class{},dr=class{},bi=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Eu(n){return!(n instanceof gi)&&!(n instanceof bi)&&!(n instanceof dr)}var Co=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Ci(this.rootInjector)}},Ci=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Co(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(St(rn))};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wo=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=cs(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=cs(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=ds(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return ds(i,this._root).map(e=>e.value)}};function cs(n,i){if(n===i.value)return i;for(let e of i.children){let t=cs(n,e);if(t)return t}return null}function ds(n,i){if(n===i.value)return[i];for(let e of i.children){let t=ds(n,e);if(t.length)return t.unshift(i),t}return[]}var et=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function ui(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var mr=class extends wo{snapshot;constructor(i,e){super(i),this.snapshot=e,ys(this,i)}toString(){return this.snapshot.toString()}};function nd(n,i){let e=Fu(n,i),t=new Se([new wn("",{})]),r=new Se({}),o=new Se({}),a=new Se({}),s=new Se(""),l=new Nt(t,r,a,s,o,M,n,e.root);return l.snapshot=e.root,new mr(new et(l,[]),e)}function Fu(n,i){let e={},t={},r={},a=new vi([],e,r,"",t,M,n,null,{},i);return new pr("",new et(a,[]))}var Nt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ee(u=>u[hr]))??T(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ee(i=>$n(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ee(i=>$n(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function vs(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:d(d({},i.params),n.params),data:d(d({},i.data),n.data),resolve:d(d(d(d({},n.data),i.data),r?.data),n._resolvedData)}:t={params:d({},n.params),data:d({},n.data),resolve:d(d({},n.data),n._resolvedData??{})},r&&rd(r)&&(t.resolve[hr]=r.title),t}var vi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[hr]}constructor(i,e,t,r,o,a,s,l,u,f){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=u,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=$n(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=$n(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},pr=class extends wo{url;constructor(i,e){super(e),this.url=i,ys(this,e)}toString(){return id(this._root)}};function ys(n,i){i.value._routerState=n,i.children.forEach(e=>ys(n,e))}function id(n){let i=n.children.length>0?` { ${n.children.map(id).join(", ")} } `:"";return`${n.value}${i}`}function ns(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Gt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Gt(i.params,e.params)||n.paramsSubject.next(e.params),Jp(i.url,e.url)||n.urlSubject.next(e.url),Gt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ms(n,i){let e=Gt(n.params,i.params)&&ru(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||ms(n.parent,i.parent))}function rd(n){return typeof n.title=="string"||n.title===null}var od=new N(""),gr=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=M;activateEvents=new x;deactivateEvents=new x;attachEvents=new x;detachEvents=new x;routerOutletData=Ur();parentContexts=c(Ci);location=c(Ze);changeDetector=c(Xe);inputBinder=c(Do,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ie(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ie(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ie(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Ie(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new ps(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[dt]})}return n})(),ps=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===Nt?this.route:i===Ci?this.childContexts:i===od?this.outletData:this.parent.get(i,e)}},Do=new N("");var _s=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&F(0,"router-outlet")},dependencies:[gr],encapsulation:2})}return n})();function xs(n){let i=n.children&&n.children.map(xs),e=i?_(d({},n),{children:i}):d({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==M&&(e.component=_s),e}function Tu(n,i,e){let t=ur(n,i._root,e?e._root:void 0);return new mr(t,i)}function ur(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=Du(n,i,e);return new et(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>ur(n,s)),a}}let t=Su(i.value),r=i.children.map(o=>ur(n,o));return new et(t,r)}}function Du(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return ur(n,t,r);return ur(n,t)})}function Su(n){return new Nt(new Se(n.url),new Se(n.params),new Se(n.queryParams),new Se(n.fragment),new Se(n.data),n.outlet,n.component,n)}var yi=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},ad="ngNavigationCancelingError";function Eo(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Fn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=sd(!1,Pe.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function sd(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[ad]=!0,e.cancellationCode=i,e}function ku(n){return ld(n)&&Fn(n.url)}function ld(n){return!!n&&n[ad]}var us=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),ns(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=ui(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=ui(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=ui(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=ui(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new xo(o.value.snapshot))}),i.children.length&&this.forwardEvent(new yo(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(ns(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),ns(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},Fo=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},hi=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Iu(n,i,e){let t=n._root,r=i?i._root:null;return ir(t,r,e,[t.value])}function Mu(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function wi(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!dl(n)?n:i.get(n):t}function ir(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ui(i);return n.children.forEach(a=>{Ru(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>ar(s,e.getContext(a),r)),r}function Ru(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Au(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Fo(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ir(n,i,s?s.children:null,t,r):ir(n,i,e,t,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new hi(s.outlet.component,a))}else a&&ar(i,s,r),r.canActivateChecks.push(new Fo(t)),o.component?ir(n,null,s?s.children:null,t,r):ir(n,null,e,t,r);return r}function Au(n,i,e){if(typeof e=="function")return lt(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!jn(n.url,i.url);case"pathParamsOrQueryParamsChange":return!jn(n.url,i.url)||!Gt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ms(n,i)||!Gt(n.queryParams,i.queryParams);default:return!ms(n,i)}}function ar(n,i,e){let t=ui(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?ar(a,i.children.getContext(o),e):ar(a,null,e):ar(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new hi(i.outlet.component,r)):e.canDeactivateChecks.push(new hi(null,r)):e.canDeactivateChecks.push(new hi(null,r))}function br(n){return typeof n=="function"}function Nu(n){return typeof n=="boolean"}function Pu(n){return n&&br(n.canLoad)}function Ou(n){return n&&br(n.canActivate)}function Lu(n){return n&&br(n.canActivateChild)}function Bu(n){return n&&br(n.canDeactivate)}function zu(n){return n&&br(n.canMatch)}function cd(n){return n instanceof il||n?.name==="EmptyError"}var ro=Symbol("INITIAL_VALUE");function _i(){return Ae(n=>rl(n.map(i=>i.pipe(hn(1),Ke(ro)))).pipe(ee(i=>{for(let e of i)if(e!==!0){if(e===ro)return ro;if(e===!1||Uu(e))return e}return!0}),Ve(i=>i!==ro),hn(1)))}function Uu(n){return Fn(n)||n instanceof yi}function dd(n){return n.aborted?T(void 0).pipe(hn(1)):new un(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function md(n){return ue(dd(n))}function ju(n){return fn(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?T(_(d({},i),{guardsResult:!0})):$u(o,e,t).pipe(fn(a=>a&&Nu(a)?Hu(e,r,n):T(a)),ee(a=>_(d({},i),{guardsResult:a})))})}function $u(n,i,e){return He(n).pipe(fn(t=>Qu(t.component,t.route,e,i)),nn(t=>t!==!0,!0))}function Hu(n,i,e){return He(i).pipe(Na(t=>ol(qu(t.route.parent,e),Vu(t.route,e),Wu(n,t.path),Gu(n,t.route))),nn(t=>t!==!0,!0))}function Vu(n,i){return n!==null&&i&&i(new _o(n)),T(!0)}function qu(n,i){return n!==null&&i&&i(new vo(n)),T(!0)}function Gu(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return T(!0);let t=e.map(r=>Sr(()=>{let o=i._environmentInjector,a=wi(r,o),s=Ou(a)?a.canActivate(i,n):lt(o,()=>a(i,n));return qn(s).pipe(nn())}));return T(t).pipe(_i())}function Wu(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Mu(o)).filter(o=>o!==null).map(o=>Sr(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,u=wi(s,l),f=Lu(u)?u.canActivateChild(e,n):lt(l,()=>u(e,n));return qn(f).pipe(nn())});return T(a).pipe(_i())}));return T(r).pipe(_i())}function Qu(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return T(!0);let o=r.map(a=>{let s=i._environmentInjector,l=wi(a,s),u=Bu(l)?l.canDeactivate(n,i,e,t):lt(s,()=>l(n,i,e,t));return qn(u).pipe(nn())});return T(o).pipe(_i())}function Ku(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return T(!0);let a=o.map(s=>{let l=wi(s,n),u=Pu(l)?l.canLoad(i,e):lt(n,()=>l(i,e)),f=qn(u);return r?f.pipe(md(r)):f});return T(a).pipe(_i(),pd(t))}function pd(n){return nl(ke(i=>{if(typeof i!="boolean")throw Eo(n,i)}),ee(i=>i===!0))}function Zu(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return T(!0);let s=a.map(l=>{let u=wi(l,n),f=zu(u)?u.canMatch(i,e,r):lt(n,()=>u(i,e,r));return qn(f).pipe(md(o))});return T(s).pipe(_i(),pd(t))}var ln=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},fr=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Yu(n){throw new Ie(4e3,!1)}function Xu(n){throw sd(!1,Pe.GuardRejected)}var fs=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[M])throw Yu(`${i.redirectTo}`);r=r.children[M]}}async applyRedirectCommands(i,e,t,r,o){let a=await Ju(e,r,o);if(a instanceof tt)throw new fr(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new fr(s);return s}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new tt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,t,r)}),new J(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new Ie(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function Ju(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return lo(qn(lt(e,()=>t(i))))}function ef(n,i){return n.providers&&!n._injector&&(n._injector=Oa(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Wt(n){return n.outlet||M}function tf(n,i){let e=n.filter(t=>Wt(t)===i);return e.push(...n.filter(t=>Wt(t)!==i)),e}var hs={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ud(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function nf(n,i,e,t,r,o,a){let s=fd(n,i,e);if(!s.matched)return T(s);let l=ud(o(s));return t=ef(i,t),Zu(t,i,e,r,l,a).pipe(ee(u=>u===!0?s:d({},hs)))}function fd(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?d({},hs):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Bc)(e,n,i);if(!r)return d({},hs);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?d(d({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Oc(n,i,e,t){return e.length>0&&af(n,e,t)?{segmentGroup:new J(i,of(t,new J(e,n.children))),slicedSegments:[]}:e.length===0&&sf(n,e,t)?{segmentGroup:new J(n.segments,rf(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new J(n.segments,n.children),slicedSegments:e}}function rf(n,i,e,t){let r={};for(let o of e)if(So(n,i,o)&&!t[Wt(o)]){let a=new J([],{});r[Wt(o)]=a}return d(d({},t),r)}function of(n,i){let e={};e[M]=i;for(let t of n)if(t.path===""&&Wt(t)!==M){let r=new J([],{});e[Wt(t)]=r}return e}function af(n,i,e){return e.some(t=>So(n,i,t)&&Wt(t)!==M)}function sf(n,i,e){return e.some(t=>So(n,i,t))}function So(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function lf(n,i,e){return i.length===0&&!n.children[e]}var gs=class{};async function cf(n,i,e,t,r,o,a="emptyOnly",s){return new bs(n,i,e,t,r,a,o,s).recognize()}var df=31,bs=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new fs(this.urlSerializer,this.urlTree)}noMatchError(i){return new Ie(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Oc(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new et(t,e),o=new pr("",r),a=Zc(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new vi([],Object.freeze({}),Object.freeze(d({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,M,e),rootSnapshot:e}}catch(t){if(t instanceof fr)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof ln?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof et?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let l of Object.keys(t.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let u=t.children[l],f=tf(e,l),y=await this.processSegmentGroup(i,f,u,l,r);a.push(...y)}let s=hd(a);return mf(s),s}async processSegment(i,e,t,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??i,e,l,t,r,o,a,s)}catch(u){if(u instanceof ln||cd(u))continue;throw u}if(lf(t,r,o))return new gs;throw new ln(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,s,l){if(Wt(t)!==a&&(a===M||!So(r,o,t)))throw new ln(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,l);throw new ln(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){let{matched:l,parameters:u,consumedSegments:f,positionalParamSegments:y,remainingSegments:E}=fd(e,r,o);if(!l)throw new ln(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>df&&(this.allowRedirects=!1));let K=this.createSnapshot(i,r,o,u,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let k=await this.applyRedirects.applyRedirectCommands(f,r.redirectTo,y,ud(K),i),me=await this.applyRedirects.lineralizeSegments(r,k);return this.processSegment(i,t,e,me.concat(E),a,!1,s)}createSnapshot(i,e,t,r,o){let a=new vi(t,r,Object.freeze(d({},this.urlTree.queryParams)),this.urlTree.fragment,uf(e),Wt(e),e.component??e._loadedComponent??null,e,ff(e),i),s=vs(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=tn=>this.createSnapshot(i,t,tn.consumedSegments,tn.parameters,a),l=await lo(nf(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!l?.matched)throw new ln(e);i=t._injector??i;let{routes:u}=await this.getChildConfig(i,t,r),f=t._loadedInjector??i,{parameters:y,consumedSegments:E,remainingSegments:K}=l,k=this.createSnapshot(i,t,E,y,a),{segmentGroup:me,slicedSegments:Qe}=Oc(e,E,K,u);if(Qe.length===0&&me.hasChildren()){let tn=await this.processChildren(f,u,me,k);return new et(k,tn)}if(u.length===0&&Qe.length===0)return new et(k,[]);let en=Wt(t)===o,st=await this.processSegment(f,u,me,Qe,en?M:o,!0,k);return new et(k,st instanceof et?[st]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await lo(Ku(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Xu(e)}return{routes:[],injector:i}}};function mf(n){n.sort((i,e)=>i.value.outlet===M?-1:e.value.outlet===M?1:i.value.outlet.localeCompare(e.value.outlet))}function pf(n){let i=n.value.routeConfig;return i&&i.path===""}function hd(n){let i=[],e=new Set;for(let t of n){if(!pf(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=hd(t.children);i.push(new et(t.value,r))}return i.filter(t=>!e.has(t))}function uf(n){return n.data||{}}function ff(n){return n.resolve||{}}function hf(n,i,e,t,r,o,a){return fn(async s=>{let{state:l,tree:u}=await cf(n,i,e,t,s.extractedUrl,r,o,a);return _(d({},s),{targetSnapshot:l,urlAfterRedirects:u})})}function gf(n){return fn(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return T(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of gd(s))o.add(l);let a=0;return He(o).pipe(Na(s=>r.has(s)?bf(s,e,n):(s.data=vs(s,s.parent,n).resolve,T(void 0))),ke(()=>a++),Pa(1),fn(s=>a===o.size?T(i):$e))})}function gd(n){let i=n.children.map(e=>gd(e)).flat();return[n,...i]}function bf(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!rd(t)&&(r[hr]=t.title),Sr(()=>(n.data=vs(n,n.parent,e).resolve,vf(r,n,i).pipe(ee(o=>(n._resolvedData=o,n.data=d(d({},n.data),o),null)))))}function vf(n,i,e){let t=rs(n);if(t.length===0)return T({});let r={};return He(t).pipe(fn(o=>yf(n[o],i,e).pipe(nn(),ke(a=>{if(a instanceof yi)throw Eo(new En,a);r[o]=a}))),Pa(1),ee(()=>r),$i(o=>cd(o)?$e:Dr(o)))}function yf(n,i,e){let t=i._environmentInjector,r=wi(n,t),o=r.resolve?r.resolve(i,e):lt(t,()=>r(i,e));return qn(o)}function Lc(n){return Ae(i=>{let e=n(i);return e?He(e).pipe(ee(()=>i)):T(i)})}var Cs=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===M);return t}getResolvedTitleForRoute(e){return e.data[hr]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:()=>c(bd),providedIn:"root"})}return n})(),bd=(()=>{class n extends Cs{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(St(ql))};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ei=new N("",{factory:()=>({})}),vr=new N(""),vd=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(Ol);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Uc(lt(e,()=>t.loadComponent())),a=await xd(_d(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await yd(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function yd(n,i,e,t){let r=await Uc(lt(e,()=>n.loadChildren())),o=await xd(_d(r)),a;o instanceof Fl||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let s,l,u=!1,f;return Array.isArray(a)?(l=a,u=!0):(s=a.create(e).injector,f=a,l=s.get(vr,[],{optional:!0,self:!0}).flat()),{routes:l.map(xs),injector:s,factory:f}}function _f(n){return n&&typeof n=="object"&&"default"in n}function _d(n){return _f(n)?n.default:n}async function xd(n){return n}var ko=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:()=>c(xf),providedIn:"root"})}return n})(),xf=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cd=new N("");var Cf=()=>{},wd=new N(""),Ed=(()=>{class n{currentNavigation=Z(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Z(null);events=new H;transitionAbortWithErrorSubject=new H;configLoader=c(vd);environmentInjector=c(rn);destroyRef=c(Hi);urlSerializer=c(xi);rootContexts=c(Ci);location=c(jr);inputBindingEnabled=c(Do,{optional:!0})!==null;titleStrategy=c(Cs);options=c(Ei,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(ko);createViewTransition=c(Cd,{optional:!0});navigationErrorHandler=c(wd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>T(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new go(r)),t=r=>this.events.next(new bo(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Ee(()=>{this.transitions?.next(_(d({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Se(null),this.transitions.pipe(Ve(t=>t!==null),Ae(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return T(t).pipe(Ae(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Pe.SupersededByNewNavigation),$e;this.currentTransition=t;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?_(d({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&f!=="reload")return this.events.next(new cn(s.id,this.urlSerializer.serialize(s.rawUrl),"",lr.IgnoredSameUrlNavigation)),s.resolve(!1),$e;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return T(s).pipe(Ae(y=>(this.events.next(new Hn(y.id,this.urlSerializer.serialize(y.extractedUrl),y.source,y.restoredState)),y.id!==this.navigationId?$e:Promise.resolve(y))),hf(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ke(y=>{t.targetSnapshot=y.targetSnapshot,t.urlAfterRedirects=y.urlAfterRedirects,this.currentNavigation.update(E=>(E.finalUrl=y.urlAfterRedirects,E)),this.events.next(new dr)}),Ae(y=>He(t.routesRecognizeHandler.deferredHandle??T(void 0)).pipe(ee(()=>y))),ke(()=>{let y=new cr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:y,extractedUrl:E,source:K,restoredState:k,extras:me}=s,Qe=new Hn(y,this.urlSerializer.serialize(E),K,k);this.events.next(Qe);let en=nd(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=_(d({},s),{targetSnapshot:en,urlAfterRedirects:E,extras:_(d({},me),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(st=>(st.finalUrl=E,st)),T(t)}else return this.events.next(new cn(s.id,this.urlSerializer.serialize(s.extractedUrl),"",lr.IgnoredByUrlHandlingStrategy)),s.resolve(!1),$e}),ee(s=>{let l=new po(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=t=_(d({},s),{guards:Iu(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),ju(s=>this.events.next(s)),Ae(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Eo(this.urlSerializer,s.guardsResult);let l=new uo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return $e;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Pe.GuardRejected),$e;if(s.guards.canActivateChecks.length===0)return T(s);let u=new fo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!a())return $e;let f=!1;return T(s).pipe(gf(this.paramsInheritanceStrategy),ke({next:()=>{f=!0;let y=new ho(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)},complete:()=>{f||this.cancelNavigationTransition(s,"",Pe.NoDataFromResolver)}}))}),Lc(s=>{let l=f=>{let y=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let E=f._environmentInjector;y.push(this.configLoader.loadComponent(E,f.routeConfig).then(K=>{f.component=K}))}for(let E of f.children)y.push(...l(E));return y},u=l(s.targetSnapshot.root);return u.length===0?T(s):He(Promise.all(u).then(()=>s))}),Lc(()=>this.afterPreactivation()),Ae(()=>{let{currentSnapshot:s,targetSnapshot:l}=t,u=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return u?He(u).pipe(ee(()=>t)):T(t)}),hn(1),Ae(s=>{let l=Tu(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=_(d({},s),{targetRouterState:l}),this.currentNavigation.update(f=>(f.targetRouterState=l,f)),this.events.next(new gi);let u=t.beforeActivateHandler.deferredHandle;return u?He(u.then(()=>s)):T(s)}),ke(s=>{new us(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=Cf,l)),this.lastSuccessfulNavigation.set(Ee(this.currentNavigation)),this.events.next(new Qt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ue(dd(o.signal).pipe(Ve(()=>!r&&!t.targetRouterState),ke(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Pe.Aborted)}))),ke({complete:()=>{r=!0}}),ue(this.transitionAbortWithErrorSubject.pipe(ke(s=>{throw s}))),Mr(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",Pe.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),$i(s=>{if(r=!0,this.destroyed)return t.resolve(!1),$e;if(ld(s))this.events.next(new gt(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),ku(s)?this.events.next(new bi(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let l=new Vn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let u=lt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof yi){let{message:f,cancellationCode:y}=Eo(this.urlSerializer,u);this.events.next(new gt(t.id,this.urlSerializer.serialize(t.extractedUrl),f,y)),this.events.next(new bi(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(u){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(u)}}return $e}))}))}cancelNavigationTransition(e,t,r){let o=new gt(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Ee(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wf(n){return n!==or}var Fd=new N("");var Td=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:()=>c(Ef),providedIn:"root"})}return n})(),To=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Ef=(()=>{class n extends To{static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Io=(()=>{class n{urlSerializer=c(xi);options=c(Ei,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(jr);urlHandlingStrategy=c(ko);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new tt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof tt?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=nd(null,c(rn));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:()=>c(Ff),providedIn:"root"})}return n})(),Ff=(()=>{class n extends Io{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof Hn?this.updateStateMemento():e instanceof cn?this.commitTransition(t):e instanceof cr?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof gi?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof gt&&!td(e)?this.restoreHistory(t):e instanceof Vn?this.restoreHistory(t,!0):e instanceof Qt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:t,id:r}){let{replaceUrl:o,state:a}=t;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=d(d({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=d(d({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ws(n,i){n.events.pipe(Ve(e=>e instanceof Qt||e instanceof gt||e instanceof Vn||e instanceof cn),ee(e=>e instanceof Qt||e instanceof cn?0:(e instanceof gt?e.code===Pe.Redirect||e.code===Pe.SupersededByNewNavigation:!1)?2:1),Ve(e=>e!==2),hn(1)).subscribe(()=>{i()})}var Fi=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Dl);stateManager=c(Io);options=c(Ei,{optional:!0})||{};pendingTasks=c(pl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Ed);urlSerializer=c(xi);location=c(jr);urlHandlingStrategy=c(ko);injector=c(rn);_events=new H;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(Td);injectorCleanup=c(Fd,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(vr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Do,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Le;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Ee(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof gt&&t.code!==Pe.Redirect&&t.code!==Pe.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Qt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof bi){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),l=d({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||wf(r.source)},a);this.scheduleNavigation(s,or,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Eu(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),or,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null;if(r){let l=d({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,t,a,o).catch(l=>{this.disposed||this.injector.get(Pr)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ee(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(xs),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=t,u=l?this.currentUrlTree.fragment:a,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=d(d({},this.currentUrlTree.queryParams),o);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=o||null}f!==null&&(f=this.removeEmptyProps(f));let y;try{let E=r?r.snapshot:this.routerState.snapshot.root;y=Yc(E)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),y=this.currentUrlTree.root}return Xc(y,e,f,u??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Fn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,or,null,t)}navigate(e,t={skipLocationChange:!1}){return Tf(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(cl(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=d({},$c):t===!1?r=d({},os):r=d(d({},os),t),Fn(e))return Mc(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Mc(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,u;a?(s=a.resolve,l=a.reject,u=a.promise):u=new Promise((y,E)=>{s=y,l=E});let f=this.pendingTasks.add();return ws(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tf(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new Ie(4008,!1)}var If=(()=>{class n{router=c(Fi);stateManager=c(Io);fragment=Z("");queryParams=Z({});path=Z("");serializer=c(xi);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Qt&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new tt(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ti=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new qi("href"),{optional:!0});reactiveHref=Bl(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Ee(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ee(this._target)}_target=Z(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ee(this._queryParams)}_queryParams=Z(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ee(this._fragment)}_fragment=Z(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ee(this._queryParamsHandling)}_queryParamsHandling=Z(void 0);set state(e){this._state.set(e)}get state(){return Ee(this._state)}_state=Z(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ee(this._info)}_info=Z(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ee(this._relativeTo)}_relativeTo=Z(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ee(this._preserveFragment)}_preserveFragment=Z(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ee(this._skipLocationChange)}_skipLocationChange=Z(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ee(this._replaceUrl)}_replaceUrl=Z(!1);isAnchorElement;onChanges=new H;applicationErrorHandler=c(Pr);options=c(Ei,{optional:!0});reactiveRouterState=c(If);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Z(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Fn(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=Ht(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:Fn(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return Ee(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(an(Fi),an(Nt),bl("tabindex"),an(kt),an(te),an(zl))};static \u0275dir=O({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&D("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&Y("href",r.reactiveHref(),Cl)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",X],skipLocationChange:[2,"skipLocationChange","skipLocationChange",X],replaceUrl:[2,"replaceUrl","replaceUrl",X],routerLink:"routerLink"},features:[dt]})}return n})();var Mf=new N("");function Es(n,...i){return ml([{provide:vr,multi:!0,useValue:n},[],{provide:Nt,useFactory:Rf},{provide:kl,multi:!0,useFactory:Af},i.map(e=>e.\u0275providers)])}function Rf(){return c(Fi).routerState.root}function Af(){let n=c(Bt);return i=>{let e=n.get(Il);if(i!==e.components[0])return;let t=n.get(Fi),r=n.get(Nf);n.get(Pf)===1&&t.initialNavigation(),n.get(Of,null,{optional:!0})?.setUpPreloading(),n.get(Mf,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Nf=new N("",{factory:()=>new H}),Pf=new N("",{factory:()=>1});var Of=new N("");function Ss(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Qn=Ss();function Ad(n){Qn=n}var Gn={exec:()=>null};function G(n,i=""){let e=typeof n=="string"?n:n.source,t={replace:(r,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(je.caret,"$1"),e=e.replace(r,a),t},getRegex:()=>new RegExp(e,i)};return t}var Bf=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),je={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}>`)},zf=/^(?:[ \t]*(?:\n|$))+/,Uf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,jf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Cr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$f=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ks=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Nd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Pd=G(Nd).replace(/bull/g,ks).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Hf=G(Nd).replace(/bull/g,ks).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Is=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Vf=/^[^\n]+/,Ms=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,qf=G(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ms).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Gf=G(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ks).getRegex(),No="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Rs=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Wf=G("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Rs).replace("tag",No).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Od=G(Is).replace("hr",Cr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",No).getRegex(),Qf=G(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Od).getRegex(),As={blockquote:Qf,code:Uf,def:qf,fences:jf,heading:$f,hr:Cr,html:Wf,lheading:Pd,list:Gf,newline:zf,paragraph:Od,table:Gn,text:Vf},Dd=G("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Cr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",No).getRegex(),Kf=_(d({},As),{lheading:Hf,table:Dd,paragraph:G(Is).replace("hr",Cr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Dd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",No).getRegex()}),Zf=_(d({},As),{html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Rs).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Gn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:G(Is).replace("hr",Cr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Pd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),Yf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ld=/^( {2,}|\\)\n(?!\s*$)/,Jf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Di=/[\p{P}\p{S}]/u,Po=/[\s\p{P}\p{S}]/u,Ns=/[^\s\p{P}\p{S}]/u,eh=G(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Po).getRegex(),Bd=/(?!~)[\p{P}\p{S}]/u,th=/(?!~)[\s\p{P}\p{S}]/u,nh=/(?:[^\s\p{P}\p{S}]|~)/u,ih=G(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Bf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),zd=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,rh=G(zd,"u").replace(/punct/g,Di).getRegex(),oh=G(zd,"u").replace(/punct/g,Bd).getRegex(),Ud="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ah=G(Ud,"gu").replace(/notPunctSpace/g,Ns).replace(/punctSpace/g,Po).replace(/punct/g,Di).getRegex(),sh=G(Ud,"gu").replace(/notPunctSpace/g,nh).replace(/punctSpace/g,th).replace(/punct/g,Bd).getRegex(),lh=G("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ns).replace(/punctSpace/g,Po).replace(/punct/g,Di).getRegex(),ch=G(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Di).getRegex(),dh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",mh=G(dh,"gu").replace(/notPunctSpace/g,Ns).replace(/punctSpace/g,Po).replace(/punct/g,Di).getRegex(),ph=G(/\\(punct)/,"gu").replace(/punct/g,Di).getRegex(),uh=G(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),fh=G(Rs).replace("(?:-->|$)","-->").getRegex(),hh=G("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",fh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ro=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,gh=G(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ro).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jd=G(/^!?\[(label)\]\[(ref)\]/).replace("label",Ro).replace("ref",Ms).getRegex(),$d=G(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ms).getRegex(),bh=G("reflink|nolink(?!\\()","g").replace("reflink",jd).replace("nolink",$d).getRegex(),Sd=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ps={_backpedal:Gn,anyPunctuation:ph,autolink:uh,blockSkip:ih,br:Ld,code:Xf,del:Gn,delLDelim:Gn,delRDelim:Gn,emStrongLDelim:rh,emStrongRDelimAst:ah,emStrongRDelimUnd:lh,escape:Yf,link:gh,nolink:$d,punctuation:eh,reflink:jd,reflinkSearch:bh,tag:hh,text:Jf,url:Gn},vh=_(d({},Ps),{link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",Ro).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ro).getRegex()}),Fs=_(d({},Ps),{emStrongRDelimAst:sh,emStrongLDelim:oh,delLDelim:ch,delRDelim:mh,url:G(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Sd).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:G(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Sd).getRegex()}),yh=_(d({},Fs),{br:G(Ld).replace("{2,}","*").getRegex(),text:G(Fs.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),Mo={normal:As,gfm:Kf,pedantic:Zf},yr={normal:Ps,gfm:Fs,breaks:yh,pedantic:vh},_h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},kd=n=>_h[n];function Kt(n,i){if(i){if(je.escapeTest.test(n))return n.replace(je.escapeReplace,kd)}else if(je.escapeTestNoEncode.test(n))return n.replace(je.escapeReplaceNoEncode,kd);return n}function Id(n){try{n=encodeURI(n).replace(je.percentDecode,"%")}catch{return null}return n}function Md(n,i){let e=n.replace(je.findPipe,(o,a,s)=>{let l=!1,u=a;for(;--u>=0&&s[u]==="\\";)l=!l;return l?"|":" |"}),t=e.split(je.splitPipe),r=0;if(t[0].trim()||t.shift(),t.length>0&&!t.at(-1)?.trim()&&t.pop(),i)if(t.length>i)t.splice(i);else for(;t.length<i;)t.push("");for(;r<t.length;r++)t[r]=t[r].trim().replace(je.slashPipe,"|");return t}function _r(n,i,e){let t=n.length;if(t===0)return"";let r=0;for(;r<t;){let o=n.charAt(t-r-1);if(o===i&&!e)r++;else if(o!==i&&e)r++;else break}return n.slice(0,t-r)}function xh(n,i){if(n.indexOf(i[1])===-1)return-1;let e=0;for(let t=0;t<n.length;t++)if(n[t]==="\\")t++;else if(n[t]===i[0])e++;else if(n[t]===i[1]&&(e--,e<0))return t;return e>0?-2:-1}function Ch(n,i=0){let e=i,t="";for(let r of n)if(r==="	"){let o=4-e%4;t+=" ".repeat(o),e+=o}else t+=r,e++;return t}function Rd(n,i,e,t,r){let o=i.href,a=i.title||null,s=n[1].replace(r.other.outputLinkReplace,"$1");t.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:e,href:o,title:a,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,l}function wh(n,i,e){let t=n.match(e.other.indentCodeCompensation);if(t===null)return i;let r=t[1];return i.split(`
`).map(o=>{let a=o.match(e.other.beginningSpace);if(a===null)return o;let[s]=a;return s.length>=r.length?o.slice(r.length):o}).join(`
`)}var Ao=class{options;rules;lexer;constructor(n){this.options=n||Qn}space(n){let i=this.rules.block.newline.exec(n);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(n){let i=this.rules.block.code.exec(n);if(i){let e=i[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?e:_r(e,`
`)}}}fences(n){let i=this.rules.block.fences.exec(n);if(i){let e=i[0],t=wh(e,i[3]||"",this.rules);return{type:"code",raw:e,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:t}}}heading(n){let i=this.rules.block.heading.exec(n);if(i){let e=i[2].trim();if(this.rules.other.endingHash.test(e)){let t=_r(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){let i=this.rules.block.hr.exec(n);if(i)return{type:"hr",raw:_r(i[0],`
`)}}blockquote(n){let i=this.rules.block.blockquote.exec(n);if(i){let e=_r(i[0],`
`).split(`
`),t="",r="",o=[];for(;e.length>0;){let a=!1,s=[],l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))s.push(e[l]),a=!0;else if(!a)s.push(e[l]);else break;e=e.slice(l);let u=s.join(`
`),f=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${u}`:u,r=r?`${r}
${f}`:f;let y=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,o,!0),this.lexer.state.top=y,e.length===0)break;let E=o.at(-1);if(E?.type==="code")break;if(E?.type==="blockquote"){let K=E,k=K.raw+`
`+e.join(`
`),me=this.blockquote(k);o[o.length-1]=me,t=t.substring(0,t.length-K.raw.length)+me.raw,r=r.substring(0,r.length-K.text.length)+me.text;break}else if(E?.type==="list"){let K=E,k=K.raw+`
`+e.join(`
`),me=this.list(k);o[o.length-1]=me,t=t.substring(0,t.length-E.raw.length)+me.raw,r=r.substring(0,r.length-K.raw.length)+me.raw,e=k.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:o,text:r}}}list(n){let i=this.rules.block.list.exec(n);if(i){let e=i[1].trim(),t=e.length>1,r={type:"list",raw:"",ordered:t,start:t?+e.slice(0,-1):"",loose:!1,items:[]};e=t?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=t?e:"[*+-]");let o=this.rules.other.listItemRegex(e),a=!1;for(;n;){let l=!1,u="",f="";if(!(i=o.exec(n))||this.rules.block.hr.test(n))break;u=i[0],n=n.substring(u.length);let y=Ch(i[2].split(`
`,1)[0],i[1].length),E=n.split(`
`,1)[0],K=!y.trim(),k=0;if(this.options.pedantic?(k=2,f=y.trimStart()):K?k=i[1].length+1:(k=y.search(this.rules.other.nonSpaceChar),k=k>4?1:k,f=y.slice(k),k+=i[1].length),K&&this.rules.other.blankLine.test(E)&&(u+=E+`
`,n=n.substring(E.length+1),l=!0),!l){let me=this.rules.other.nextBulletRegex(k),Qe=this.rules.other.hrRegex(k),en=this.rules.other.fencesBeginRegex(k),st=this.rules.other.headingBeginRegex(k),tn=this.rules.other.htmlBeginRegex(k),Ap=this.rules.other.blockquoteBeginRegex(k);for(;n;){let Ra=n.split(`
`,1)[0],ji;if(E=Ra,this.options.pedantic?(E=E.replace(this.rules.other.listReplaceNesting,"  "),ji=E):ji=E.replace(this.rules.other.tabCharGlobal,"    "),en.test(E)||st.test(E)||tn.test(E)||Ap.test(E)||me.test(E)||Qe.test(E))break;if(ji.search(this.rules.other.nonSpaceChar)>=k||!E.trim())f+=`
`+ji.slice(k);else{if(K||y.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||en.test(y)||st.test(y)||Qe.test(y))break;f+=`
`+E}K=!E.trim(),u+=Ra+`
`,n=n.substring(Ra.length+1),y=ji.slice(k)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0)),r.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(f),loose:!1,text:f,tokens:[]}),r.raw+=u}let s=r.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l of r.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let f={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=f.checked,r.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=f.raw+l.tokens[0].raw,l.tokens[0].text=f.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(f)):l.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):l.tokens.unshift(f)}}if(!r.loose){let u=l.tokens.filter(y=>y.type==="space"),f=u.length>0&&u.some(y=>this.rules.other.anyLine.test(y.raw));r.loose=f}}if(r.loose)for(let l of r.items){l.loose=!0;for(let u of l.tokens)u.type==="text"&&(u.type="paragraph")}return r}}html(n){let i=this.rules.block.html.exec(n);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(n){let i=this.rules.block.def.exec(n);if(i){let e=i[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=i[2]?i[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:e,raw:i[0],href:t,title:r}}}table(n){let i=this.rules.block.table.exec(n);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let e=Md(i[1]),t=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=i[3]?.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:i[0],header:[],align:[],rows:[]};if(e.length===t.length){for(let a of t)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<e.length;a++)o.header.push({text:e[a],tokens:this.lexer.inline(e[a]),header:!0,align:o.align[a]});for(let a of r)o.rows.push(Md(a,o.header.length).map((s,l)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:o.align[l]})));return o}}lheading(n){let i=this.rules.block.lheading.exec(n);if(i){let e=i[1].trim();return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(n){let i=this.rules.block.paragraph.exec(n);if(i){let e=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:e,tokens:this.lexer.inline(e)}}}text(n){let i=this.rules.block.text.exec(n);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(n){let i=this.rules.inline.escape.exec(n);if(i)return{type:"escape",raw:i[0],text:i[1]}}tag(n){let i=this.rules.inline.tag.exec(n);if(i)return!this.lexer.state.inLink&&this.rules.other.startATag.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(n){let i=this.rules.inline.link.exec(n);if(i){let e=i[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let o=_r(e.slice(0,-1),"\\");if((e.length-o.length)%2===0)return}else{let o=xh(i[2],"()");if(o===-2)return;if(o>-1){let a=(i[0].indexOf("!")===0?5:4)+i[1].length+o;i[2]=i[2].substring(0,o),i[0]=i[0].substring(0,a).trim(),i[3]=""}}let t=i[2],r="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(t);o&&(t=o[1],r=o[3])}else r=i[3]?i[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?t=t.slice(1):t=t.slice(1,-1)),Rd(i,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer,this.rules)}}reflink(n,i){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let t=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=i[t.toLowerCase()];if(!r){let o=e[0].charAt(0);return{type:"text",raw:o,text:o}}return Rd(e,r,e[0],this.lexer,this.rules)}}emStrong(n,i,e=""){let t=this.rules.inline.emStrongLDelim.exec(n);if(!(!t||!t[1]&&!t[2]&&!t[3]&&!t[4]||t[4]&&e.match(this.rules.other.unicodeAlphaNumeric))&&(!(t[1]||t[3])||!e||this.rules.inline.punctuation.exec(e))){let r=[...t[0]].length-1,o,a,s=r,l=0,u=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,i=i.slice(-1*n.length+r);(t=u.exec(i))!=null;){if(o=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!o)continue;if(a=[...o].length,t[3]||t[4]){s+=a;continue}else if((t[5]||t[6])&&r%3&&!((r+a)%3)){l+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s+l);let f=[...t[0]][0].length,y=n.slice(0,r+t.index+f+a);if(Math.min(r,a)%2){let K=y.slice(1,-1);return{type:"em",raw:y,text:K,tokens:this.lexer.inlineTokens(K)}}let E=y.slice(2,-2);return{type:"strong",raw:y,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(n){let i=this.rules.inline.code.exec(n);if(i){let e=i[2].replace(this.rules.other.newLineCharGlobal," "),t=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return t&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:i[0],text:e}}}br(n){let i=this.rules.inline.br.exec(n);if(i)return{type:"br",raw:i[0]}}del(n,i,e=""){let t=this.rules.inline.delLDelim.exec(n);if(t&&(!t[1]||!e||this.rules.inline.punctuation.exec(e))){let r=[...t[0]].length-1,o,a,s=r,l=this.rules.inline.delRDelim;for(l.lastIndex=0,i=i.slice(-1*n.length+r);(t=l.exec(i))!=null;){if(o=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!o||(a=[...o].length,a!==r))continue;if(t[3]||t[4]){s+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s);let u=[...t[0]][0].length,f=n.slice(0,r+t.index+u+a),y=f.slice(r,-r);return{type:"del",raw:f,text:y,tokens:this.lexer.inlineTokens(y)}}}}autolink(n){let i=this.rules.inline.autolink.exec(n);if(i){let e,t;return i[2]==="@"?(e=i[1],t="mailto:"+e):(e=i[1],t=e),{type:"link",raw:i[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}url(n){let i;if(i=this.rules.inline.url.exec(n)){let e,t;if(i[2]==="@")e=i[0],t="mailto:"+e;else{let r;do r=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])?.[0]??"";while(r!==i[0]);e=i[0],i[1]==="www."?t="http://"+i[0]:t=i[0]}return{type:"link",raw:i[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(n){let i=this.rules.inline.text.exec(n);if(i){let e=this.lexer.state.inRawBlock;return{type:"text",raw:i[0],text:i[0],escaped:e}}}},Pt=class Ts{tokens;options;state;inlineQueue;tokenizer;constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||Qn,this.options.tokenizer=this.options.tokenizer||new Ao,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:je,block:Mo.normal,inline:yr.normal};this.options.pedantic?(e.block=Mo.pedantic,e.inline=yr.pedantic):this.options.gfm&&(e.block=Mo.gfm,this.options.breaks?e.inline=yr.breaks:e.inline=yr.gfm),this.tokenizer.rules=e}static get rules(){return{block:Mo,inline:yr}}static lex(i,e){return new Ts(e).lex(i)}static lexInline(i,e){return new Ts(e).inlineTokens(i)}lex(i){i=i.replace(je.carriageReturn,`
`),this.blockTokens(i,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(i,e=[],t=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(i=i.replace(je.tabCharGlobal,"    ").replace(je.spaceLine,""));i;){let r;if(this.options.extensions?.block?.some(a=>(r=a.call({lexer:this},i,e))?(i=i.substring(r.raw.length),e.push(r),!0):!1))continue;if(r=this.tokenizer.space(i)){i=i.substring(r.raw.length);let a=e.at(-1);r.raw.length===1&&a!==void 0?a.raw+=`
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
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):e.push(r);continue}if(i){let a="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,e}inline(i,e=[]){return this.inlineQueue.push({src:i,tokens:e}),e}inlineTokens(i,e=[]){this.tokenizer.lexer=this;let t=i,r=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(t))!=null;)l.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(t))!=null;)t=t.slice(0,r.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(t))!=null;)o=r[2]?r[2].length:0,t=t.slice(0,r.index+o)+"["+"a".repeat(r[0].length-o-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t;let a=!1,s="";for(;i;){a||(s=""),a=!1;let l;if(this.options.extensions?.inline?.some(f=>(l=f.call({lexer:this},i,e))?(i=i.substring(l.raw.length),e.push(l),!0):!1))continue;if(l=this.tokenizer.escape(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.tag(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.link(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.reflink(i,this.tokens.links)){i=i.substring(l.raw.length);let f=e.at(-1);l.type==="text"&&f?.type==="text"?(f.raw+=l.raw,f.text+=l.text):e.push(l);continue}if(l=this.tokenizer.emStrong(i,t,s)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.codespan(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.br(i)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.del(i,t,s)){i=i.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.autolink(i)){i=i.substring(l.raw.length),e.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(i))){i=i.substring(l.raw.length),e.push(l);continue}let u=i;if(this.options.extensions?.startInline){let f=1/0,y=i.slice(1),E;this.options.extensions.startInline.forEach(K=>{E=K.call({lexer:this},y),typeof E=="number"&&E>=0&&(f=Math.min(f,E))}),f<1/0&&f>=0&&(u=i.substring(0,f+1))}if(l=this.tokenizer.inlineText(u)){i=i.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(s=l.raw.slice(-1)),a=!0;let f=e.at(-1);f?.type==="text"?(f.raw+=l.raw,f.text+=l.text):e.push(l);continue}if(i){let f="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return e}},Tn=class{options;parser;constructor(n){this.options=n||Qn}space(n){return""}code({text:n,lang:i,escaped:e}){let t=(i||"").match(je.notSpaceStart)?.[0],r=n.replace(je.endingNewline,"")+`
`;return t?'<pre><code class="language-'+Kt(t)+'">'+(e?r:Kt(r,!0))+`</code></pre>
`:"<pre><code>"+(e?r:Kt(r,!0))+`</code></pre>
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
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Kt(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:i,tokens:e}){let t=this.parser.parseInline(e),r=Id(n);if(r===null)return t;n=r;let o='<a href="'+n+'"';return i&&(o+=' title="'+Kt(i)+'"'),o+=">"+t+"</a>",o}image({href:n,title:i,text:e,tokens:t}){t&&(e=this.parser.parseInline(t,this.parser.textRenderer));let r=Id(n);if(r===null)return Kt(e);n=r;let o=`<img src="${n}" alt="${Kt(e)}"`;return i&&(o+=` title="${Kt(i)}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Kt(n.text)}},Os=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},Ot=class Ds{options;renderer;textRenderer;constructor(i){this.options=i||Qn,this.options.renderer=this.options.renderer||new Tn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Os}static parse(i,e){return new Ds(e).parse(i)}static parseInline(i,e){return new Ds(e).parseInline(i)}parse(i){this.renderer.parser=this;let e="";for(let t=0;t<i.length;t++){let r=i[t];if(this.options.extensions?.renderers?.[r.type]){let a=r,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){e+=s||"";continue}}let o=r;switch(o.type){case"space":{e+=this.renderer.space(o);break}case"hr":{e+=this.renderer.hr(o);break}case"heading":{e+=this.renderer.heading(o);break}case"code":{e+=this.renderer.code(o);break}case"table":{e+=this.renderer.table(o);break}case"blockquote":{e+=this.renderer.blockquote(o);break}case"list":{e+=this.renderer.list(o);break}case"checkbox":{e+=this.renderer.checkbox(o);break}case"html":{e+=this.renderer.html(o);break}case"def":{e+=this.renderer.def(o);break}case"paragraph":{e+=this.renderer.paragraph(o);break}case"text":{e+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return e}parseInline(i,e=this.renderer){this.renderer.parser=this;let t="";for(let r=0;r<i.length;r++){let o=i[r];if(this.options.extensions?.renderers?.[o.type]){let s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){t+=s||"";continue}}let a=o;switch(a.type){case"escape":{t+=e.text(a);break}case"html":{t+=e.html(a);break}case"link":{t+=e.link(a);break}case"image":{t+=e.image(a);break}case"checkbox":{t+=e.checkbox(a);break}case"strong":{t+=e.strong(a);break}case"em":{t+=e.em(a);break}case"codespan":{t+=e.codespan(a);break}case"br":{t+=e.br(a);break}case"del":{t+=e.del(a);break}case"text":{t+=e.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}},xr=class{options;block;constructor(n){this.options=n||Qn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?Pt.lex:Pt.lexInline}provideParser(){return this.block?Ot.parse:Ot.parseInline}},Eh=class{defaults=Ss();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ot;Renderer=Tn;TextRenderer=Os;Lexer=Pt;Tokenizer=Ao;Hooks=xr;constructor(...n){this.use(...n)}walkTokens(n,i){let e=[];for(let t of n)switch(e=e.concat(i.call(this,t)),t.type){case"table":{let r=t;for(let o of r.header)e=e.concat(this.walkTokens(o.tokens,i));for(let o of r.rows)for(let a of o)e=e.concat(this.walkTokens(a.tokens,i));break}case"list":{let r=t;e=e.concat(this.walkTokens(r.items,i));break}default:{let r=t;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let a=r[o].flat(1/0);e=e.concat(this.walkTokens(a,i))}):r.tokens&&(e=e.concat(this.walkTokens(r.tokens,i)))}}return e}use(...n){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{let t=d({},e);if(t.async=this.defaults.async||t.async||!1,e.extensions&&(e.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let o=i.renderers[r.name];o?i.renderers[r.name]=function(...a){let s=r.renderer.apply(this,a);return s===!1&&(s=o.apply(this,a)),s}:i.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=i[r.level];o?o.unshift(r.tokenizer):i[r.level]=[r.tokenizer],r.start&&(r.level==="block"?i.startBlock?i.startBlock.push(r.start):i.startBlock=[r.start]:r.level==="inline"&&(i.startInline?i.startInline.push(r.start):i.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(i.childTokens[r.name]=r.childTokens)}),t.extensions=i),e.renderer){let r=this.defaults.renderer||new Tn(this.defaults);for(let o in e.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,s=e.renderer[a],l=r[a];r[a]=(...u)=>{let f=s.apply(r,u);return f===!1&&(f=l.apply(r,u)),f||""}}t.renderer=r}if(e.tokenizer){let r=this.defaults.tokenizer||new Ao(this.defaults);for(let o in e.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,s=e.tokenizer[a],l=r[a];r[a]=(...u)=>{let f=s.apply(r,u);return f===!1&&(f=l.apply(r,u)),f}}t.tokenizer=r}if(e.hooks){let r=this.defaults.hooks||new xr;for(let o in e.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,s=e.hooks[a],l=r[a];xr.passThroughHooks.has(o)?r[a]=u=>{if(this.defaults.async&&xr.passThroughHooksRespectAsync.has(o))return(async()=>{let y=await s.call(r,u);return l.call(r,y)})();let f=s.call(r,u);return l.call(r,f)}:r[a]=(...u)=>{if(this.defaults.async)return(async()=>{let y=await s.apply(r,u);return y===!1&&(y=await l.apply(r,u)),y})();let f=s.apply(r,u);return f===!1&&(f=l.apply(r,u)),f}}t.hooks=r}if(e.walkTokens){let r=this.defaults.walkTokens,o=e.walkTokens;t.walkTokens=function(a){let s=[];return s.push(o.call(this,a)),r&&(s=s.concat(r.call(this,a))),s}}this.defaults=d(d({},this.defaults),t)}),this}setOptions(n){return this.defaults=d(d({},this.defaults),n),this}lexer(n,i){return Pt.lex(n,i??this.defaults)}parser(n,i){return Ot.parse(n,i??this.defaults)}parseMarkdown(n){return(i,e)=>{let t=d({},e),r=d(d({},this.defaults),t),o=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&t.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let a=r.hooks?await r.hooks.preprocess(i):i,s=await(r.hooks?await r.hooks.provideLexer():n?Pt.lex:Pt.lexInline)(a,r),l=r.hooks?await r.hooks.processAllTokens(s):s;r.walkTokens&&await Promise.all(this.walkTokens(l,r.walkTokens));let u=await(r.hooks?await r.hooks.provideParser():n?Ot.parse:Ot.parseInline)(l,r);return r.hooks?await r.hooks.postprocess(u):u})().catch(o);try{r.hooks&&(i=r.hooks.preprocess(i));let a=(r.hooks?r.hooks.provideLexer():n?Pt.lex:Pt.lexInline)(i,r);r.hooks&&(a=r.hooks.processAllTokens(a)),r.walkTokens&&this.walkTokens(a,r.walkTokens);let s=(r.hooks?r.hooks.provideParser():n?Ot.parse:Ot.parseInline)(a,r);return r.hooks&&(s=r.hooks.postprocess(s)),s}catch(a){return o(a)}}}onError(n,i){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let t="<p>An error occurred:</p><pre>"+Kt(e.message+"",!0)+"</pre>";return i?Promise.resolve(t):t}if(i)return Promise.reject(e);throw e}}},Wn=new Eh;function Q(n,i){return Wn.parse(n,i)}Q.options=Q.setOptions=function(n){return Wn.setOptions(n),Q.defaults=Wn.defaults,Ad(Q.defaults),Q};Q.getDefaults=Ss;Q.defaults=Qn;Q.use=function(...n){return Wn.use(...n),Q.defaults=Wn.defaults,Ad(Q.defaults),Q};Q.walkTokens=function(n,i){return Wn.walkTokens(n,i)};Q.parseInline=Wn.parseInline;Q.Parser=Ot;Q.parser=Ot.parse;Q.Renderer=Tn;Q.TextRenderer=Os;Q.Lexer=Pt;Q.lexer=Pt.lex;Q.Tokenizer=Ao;Q.Hooks=xr;Q.parse=Q;var Z0=Q.options,Y0=Q.setOptions,X0=Q.use,J0=Q.walkTokens,ex=Q.parseInline;var tx=Ot.parse,nx=Pt.lex;var Fh=["*"],Th="Copy",Dh="Copied",Sh=(()=>{class n{constructor(){this._buttonClick$=new H,this.copied=Zl(this._buttonClick$.pipe(Ae(()=>Xn(T(!0),kr(3e3).pipe(sl(!1)))),Ir(),Rr(1))),this.copiedText=Ht(()=>this.copied()?Dh:Th)}onCopyToClipboardClick(){this._buttonClick$.next()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["markdown-clipboard"]],decls:2,vars:3,consts:[[1,"markdown-clipboard-button",3,"click"]],template:function(t,r){t&1&&(Me(0,"button",0),Br("click",function(){return r.onCopyToClipboardClick()}),b(1),Be()),t&2&&(oe("copied",r.copied()),h(),j(r.copiedText()))},encapsulation:2,changeDetection:0})}}return n})(),kh=new N("CLIPBOARD_OPTIONS");var Si=(()=>{class n{transform(e,t){return e==null&&(e=""),t==null&&(t=""),typeof e!="string"?(console.error(`LanguagePipe has been invoked with an invalid value type [${typeof e}]`),e):typeof t!="string"?(console.error(`LanguagePipe has been invoked with an invalid parameter [${typeof t}]`),e):"```"+t+`
`+e+"\n```"}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275pipe=Tl({name:"language",type:n,pure:!0})}}return n})(),Ih=new N("MARKED_EXTENSIONS"),Mh=new N("MARKED_OPTIONS"),Rh=new N("MERMAID_OPTIONS"),Ah=new N("SANITIZE");function Nh(n){return typeof n=="function"}var Ph="[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information",Oh="[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information",Lh="[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information",Bh="[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information",zh="[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function",Uh="[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information";var Hd=(()=>{class n{get options(){return this._options}set options(e){this._options=d(d({},this.DEFAULT_MARKED_OPTIONS),e)}get renderer(){return this.options.renderer}set renderer(e){this.options.renderer=e}constructor(){this.clipboardOptions=c(kh,{optional:!0}),this.extensions=c(Ih,{optional:!0}),this.http=c(vn,{optional:!0}),this.mermaidOptions=c(Rh,{optional:!0}),this.platform=c(vl),this.sanitize=c(Ah,{optional:!0}),this.sanitizer=c(Hr),this.DEFAULT_MARKED_OPTIONS={renderer:new Tn},this.DEFAULT_KATEX_OPTIONS={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}]},this.DEFAULT_MERMAID_OPTIONS={startOnLoad:!1},this.DEFAULT_CLIPBOARD_OPTIONS={buttonComponent:void 0},this.DEFAULT_PARSE_OPTIONS={decodeHtml:!1,inline:!1,emoji:!1,mermaid:!1,markedOptions:void 0,disableSanitizer:!1},this.DEFAULT_RENDER_OPTIONS={clipboard:!1,clipboardOptions:void 0,katex:!1,katexOptions:void 0,mermaid:!1,mermaidOptions:void 0},this.DEFAULT_SECURITY_CONTEXT=on.HTML,this._options=null,this._reload$=new H,this.reload$=this._reload$.asObservable(),this.options=c(Mh,{optional:!0})}parse(e,t=this.DEFAULT_PARSE_OPTIONS){let{decodeHtml:r,inline:o,emoji:a,mermaid:s,disableSanitizer:l}=t,u=d(d({},this.options),t.markedOptions),f=u.renderer||this.renderer||new Tn;this.extensions&&(this.renderer=this.extendsRendererForExtensions(f)),s&&(this.renderer=this.extendsRendererForMermaid(f));let y=this.trimIndentation(e),E=r?this.decodeHtml(y):y,K=a?this.parseEmoji(E):E,k=this.parseMarked(K,u,o);return l?k:this.sanitizeHtml(k)}render(e,t=this.DEFAULT_RENDER_OPTIONS,r){let{clipboard:o,clipboardOptions:a,katex:s,katexOptions:l,mermaid:u,mermaidOptions:f}=t;s&&this.renderKatex(e,d(d({},this.DEFAULT_KATEX_OPTIONS),l)),u&&this.renderMermaid(e,d(d(d({},this.DEFAULT_MERMAID_OPTIONS),this.mermaidOptions),f)),o&&this.renderClipboard(e,r,d(d(d({},this.DEFAULT_CLIPBOARD_OPTIONS),this.clipboardOptions),a)),this.highlight(e)}reload(){this._reload$.next()}getSource(e){if(!this.http)throw new Error(Uh);return this.http.get(e,{responseType:"text"}).pipe(ee(t=>this.handleExtension(e,t)))}highlight(e){if(!Ln(this.platform)||typeof Prism>"u"||typeof Prism.highlightAllUnder>"u")return;e||(e=document);let t=e.querySelectorAll('pre code:not([class*="language-"])');Array.prototype.forEach.call(t,r=>r.classList.add("language-none")),Prism.highlightAllUnder(e)}decodeHtml(e){if(!Ln(this.platform))return e;let t=document.createElement("textarea");return t.innerHTML=e,t.value}extendsRendererForExtensions(e){let t=e;return t.\u0275NgxMarkdownRendererExtendedForExtensions===!0||(this.extensions&&this.extensions.length>0&&Q.use(...this.extensions),t.\u0275NgxMarkdownRendererExtendedForExtensions=!0),e}extendsRendererForMermaid(e){let t=e;if(t.\u0275NgxMarkdownRendererExtendedForMermaid===!0)return e;let r=e.code;return e.code=o=>o.lang==="mermaid"?`<div class="mermaid">${o.text}</div>`:r(o),t.\u0275NgxMarkdownRendererExtendedForMermaid=!0,e}handleExtension(e,t){let r=e.lastIndexOf("://"),o=r>-1?e.substring(r+4):e,a=o.lastIndexOf("/"),s=a>-1?o.substring(a+1).split("?")[0]:"",l=s.lastIndexOf("."),u=l>-1?s.substring(l+1):"";return u&&u!=="md"?"```"+u+`
`+t+"\n```":t}parseMarked(e,t,r=!1){if(t.renderer){let o=d({},t.renderer);delete o.\u0275NgxMarkdownRendererExtendedForExtensions,delete o.\u0275NgxMarkdownRendererExtendedForMermaid,delete t.renderer,Q.use({renderer:o})}return r?Q.parseInline(e,t):Q.parse(e,t)}parseEmoji(e){if(!Ln(this.platform))return e;if(typeof joypixels>"u"||typeof joypixels.shortnameToUnicode>"u")throw new Error(Ph);return joypixels.shortnameToUnicode(e)}renderKatex(e,t){if(Ln(this.platform)){if(typeof katex>"u"||typeof renderMathInElement>"u")throw new Error(Oh);renderMathInElement(e,t)}}renderClipboard(e,t,r){if(!Ln(this.platform))return;if(typeof ClipboardJS>"u")throw new Error(Bh);if(!t)throw new Error(zh);let{buttonComponent:o,buttonTemplate:a}=r,s=e.querySelectorAll("pre");for(let l=0;l<s.length;l++){let u=s.item(l),f=document.createElement("div");f.style.position="relative",u.parentNode.insertBefore(f,u),f.appendChild(u);let y=document.createElement("div");y.classList.add("markdown-clipboard-toolbar"),y.style.position="absolute",y.style.top=".5em",y.style.right=".5em",y.style.zIndex="1",f.insertAdjacentElement("beforeend",y),f.onmouseenter=()=>y.classList.add("hover"),f.onmouseleave=()=>y.classList.remove("hover");let E;if(o){let k=t.createComponent(o);E=k.hostView,k.changeDetectorRef.markForCheck()}else if(a)E=t.createEmbeddedView(a);else{let k=t.createComponent(Sh);E=k.hostView,k.changeDetectorRef.markForCheck()}let K;E.rootNodes.forEach(k=>{y.appendChild(k),K=new ClipboardJS(k,{text:()=>u.innerText})}),E.onDestroy(()=>K.destroy())}}renderMermaid(e,t=this.DEFAULT_MERMAID_OPTIONS){if(!Ln(this.platform))return;if(typeof mermaid>"u"||typeof mermaid.initialize>"u")throw new Error(Lh);let r=e.querySelectorAll(".mermaid");r.length!==0&&(mermaid.initialize(t),mermaid.run({nodes:r}))}trimIndentation(e){if(!e)return"";let t;return e.split(`
`).map(r=>{let o=t;return r.length>0&&(o=isNaN(o)?r.search(/\S|$/):Math.min(r.search(/\S|$/),o)),isNaN(t)&&(t=o),o?r.substring(o):r}).join(`
`)}async sanitizeHtml(e){return Nh(this.sanitize)?this.sanitize(await e):this.sanitize!==on.NONE?this.sanitizer.sanitize(this.sanitize??this.DEFAULT_SECURITY_CONTEXT,e)??"":e}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=A({token:n,factory:n.\u0275fac})}}return n})(),Ls=(function(n){return n.CommandLine="command-line",n.LineHighlight="line-highlight",n.LineNumbers="line-numbers",n})(Ls||{}),Dn=(()=>{class n{constructor(){this.element=c(te),this.markdownService=c(Hd),this.viewContainerRef=c(Ze),this.error=new x,this.load=new x,this.ready=new x,this._clipboard=!1,this._commandLine=!1,this._disableSanitizer=!1,this._emoji=!1,this._inline=!1,this._katex=!1,this._lineHighlight=!1,this._lineNumbers=!1,this._mermaid=!1,this.destroyed$=new H}get disableSanitizer(){return this._disableSanitizer}set disableSanitizer(e){this._disableSanitizer=this.coerceBooleanProperty(e)}get inline(){return this._inline}set inline(e){this._inline=this.coerceBooleanProperty(e)}get clipboard(){return this._clipboard}set clipboard(e){this._clipboard=this.coerceBooleanProperty(e)}get emoji(){return this._emoji}set emoji(e){this._emoji=this.coerceBooleanProperty(e)}get katex(){return this._katex}set katex(e){this._katex=this.coerceBooleanProperty(e)}get mermaid(){return this._mermaid}set mermaid(e){this._mermaid=this.coerceBooleanProperty(e)}get lineHighlight(){return this._lineHighlight}set lineHighlight(e){this._lineHighlight=this.coerceBooleanProperty(e)}get lineNumbers(){return this._lineNumbers}set lineNumbers(e){this._lineNumbers=this.coerceBooleanProperty(e)}get commandLine(){return this._commandLine}set commandLine(e){this._commandLine=this.coerceBooleanProperty(e)}ngOnChanges(){this.loadContent()}loadContent(){if(this.data!=null){this.handleData();return}if(this.src!=null){this.handleSrc();return}}ngAfterViewInit(){!this.data&&!this.src&&this.handleTransclusion(),this.markdownService.reload$.pipe(ue(this.destroyed$)).subscribe(()=>this.loadContent())}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}async render(e,t=!1){let r={decodeHtml:t,inline:this.inline,emoji:this.emoji,mermaid:this.mermaid,disableSanitizer:this.disableSanitizer},o={clipboard:this.clipboard,clipboardOptions:this.getClipboardOptions(),katex:this.katex,katexOptions:this.katexOptions,mermaid:this.mermaid,mermaidOptions:this.mermaidOptions},a=await this.markdownService.parse(e,r);this.element.nativeElement.innerHTML=a,this.handlePlugins(),this.markdownService.render(this.element.nativeElement,o,this.viewContainerRef),this.ready.emit()}coerceBooleanProperty(e){return e!=null&&`${String(e)}`!="false"}getClipboardOptions(){if(this.clipboardButtonComponent||this.clipboardButtonTemplate)return{buttonComponent:this.clipboardButtonComponent,buttonTemplate:this.clipboardButtonTemplate}}handleData(){this.render(this.data)}handleSrc(){this.markdownService.getSource(this.src).subscribe({next:e=>{this.render(e).then(()=>{this.load.emit(e)})},error:e=>this.error.emit(e)})}handleTransclusion(){this.render(this.element.nativeElement.innerHTML,!0)}handlePlugins(){this.commandLine&&(this.setPluginClass(this.element.nativeElement,Ls.CommandLine),this.setPluginOptions(this.element.nativeElement,{dataFilterOutput:this.filterOutput,dataHost:this.host,dataPrompt:this.prompt,dataOutput:this.output,dataUser:this.user})),this.lineHighlight&&this.setPluginOptions(this.element.nativeElement,{dataLine:this.line,dataLineOffset:this.lineOffset}),this.lineNumbers&&(this.setPluginClass(this.element.nativeElement,Ls.LineNumbers),this.setPluginOptions(this.element.nativeElement,{dataStart:this.start}))}setPluginClass(e,t){let r=e.querySelectorAll("pre");for(let o=0;o<r.length;o++){let a=t instanceof Array?t:[t];r.item(o).classList.add(...a)}}setPluginOptions(e,t){let r=e.querySelectorAll("pre");for(let o=0;o<r.length;o++)Object.keys(t).forEach(a=>{let s=t[a];if(s){let l=this.toLispCase(a);r.item(o).setAttribute(l,s.toString())}})}toLispCase(e){let t=e.match(/([A-Z])/g);if(!t)return e;let r=e.toString();for(let o=0,a=t.length;o<a;o++)r=r.replace(new RegExp(t[o]),"-"+t[o].toLowerCase());return r.slice(0,1)==="-"&&(r=r.slice(1)),r}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["markdown"],["","markdown",""]],inputs:{data:"data",src:"src",disableSanitizer:"disableSanitizer",inline:"inline",clipboard:"clipboard",clipboardButtonComponent:"clipboardButtonComponent",clipboardButtonTemplate:"clipboardButtonTemplate",emoji:"emoji",katex:"katex",katexOptions:"katexOptions",mermaid:"mermaid",mermaidOptions:"mermaidOptions",lineHighlight:"lineHighlight",line:"line",lineOffset:"lineOffset",lineNumbers:"lineNumbers",start:"start",commandLine:"commandLine",filterOutput:"filterOutput",host:"host",prompt:"prompt",output:"output",user:"user"},outputs:{error:"error",load:"load",ready:"ready"},features:[dt],ngContentSelectors:Fh,decls:1,vars:0,template:function(t,r){t&1&&(ye(),he(0))},encapsulation:2})}}return n})();function Bs(n){return[Hd,n?.loader??[],n?.clipboardOptions??[],n?.markedOptions??[],n?.mermaidOptions??[],n?.markedExtensions??[],n?.sanitize??[]]}var Sn=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[Bs(e)]}}static forChild(){return{ngModule:n}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=ve({type:n})}static{this.\u0275inj=be({})}}return n})();var zs=class{_box;_destroyed=new H;_resizeSubject=new H;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new un(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Ve(e=>e.some(t=>t.target===i)),Rr({bufferSize:1,refCount:!0}),ue(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Vd=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=c(fe);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new zs(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wr=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Us=class extends wr{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},kn=class extends wr{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},js=class extends wr{element;constructor(i){super(),this.element=i instanceof te?i.nativeElement:i}},$s=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Us)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof kn)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof js)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var qd=(()=>{class n extends kn{constructor(){let e=c(mt),t=c(Ze);super(e,t)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[S]})}return n})(),Er=(()=>{class n extends $s{_moduleRef=c(El,{optional:!0});_document=c(ct);_viewContainerRef=c(Ze);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new x;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[S]})}return n})(),Gd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({})}return n})();var Ws=["*"];function jh(n,i){n&1&&he(0)}var $h=["tabListContainer"],Hh=["tabList"],Vh=["tabListInner"],qh=["nextPaginator"],Gh=["previousPaginator"],Wh=["content"];function Qh(n,i){}var Kh=["tabBodyWrapper"],Zh=["tabHeader"];function Yh(n,i){}function Xh(n,i){if(n&1&&It(0,Yh,0,0,"ng-template",12),n&2){let e=C().$implicit;g("cdkPortalOutlet",e.templateLabel)}}function Jh(n,i){if(n&1&&b(0),n&2){let e=C().$implicit;j(e.textLabel)}}function eg(n,i){if(n&1){let e=ze();m(0,"div",7,2),D("click",function(){let r=xe(e),o=r.$implicit,a=r.$index,s=C(),l=$t(1);return Ce(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=xe(e).$index,a=C();return Ce(a._tabFocusChanged(r,o))}),F(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),z(6,Xh,1,1,null,12)(7,Jh,1,1),p()()()}if(n&2){let e=i.$implicit,t=i.$index,r=$t(1),o=C();ae(e.labelClass),oe("mdc-tab--active",o.selectedIndex===t),g("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),Y("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),h(3),g("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),h(3),U(e.templateLabel?6:7)}}function tg(n,i){n&1&&he(0)}function ng(n,i){if(n&1){let e=ze();m(0,"mat-tab-body",13),D("_onCentered",function(){xe(e);let r=C();return Ce(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){xe(e);let o=C();return Ce(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){xe(e);let o=C();return Ce(o._bodyCentered(r))}),p()}if(n&2){let e=i.$implicit,t=i.$index,r=C();ae(e.bodyClass),g("id",r._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),Y("tabindex",r.contentTabIndex!=null&&r.selectedIndex===t?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,t))("aria-hidden",r.selectedIndex!==t)}}var ig=new N("MatTabContent"),rg=(()=>{class n{template=c(mt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","matTabContent",""]],features:[B([{provide:ig,useExisting:n}])]})}return n})(),og=new N("MatTabLabel"),Xd=new N("MAT_TAB"),ag=(()=>{class n extends qd{_closestTab=c(Xd,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[B([{provide:og,useExisting:n}]),S]})}return n})(),Jd=new N("MAT_TAB_GROUP"),Qs=(()=>{class n{_viewContainerRef=c(Ze);_closestTabGroup=c(Jd,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new H;position=null;origin=null;isActive=!1;constructor(){c(sn).load(ci)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new kn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-tab"]],contentQueries:function(t,r,o){if(t&1&&Mt(o,ag,5)(o,rg,7,mt),t&2){let a;V(a=q())&&(r.templateLabel=a.first),V(a=q())&&(r._explicitContent=a.first)}},viewQuery:function(t,r){if(t&1&&Ye(mt,7),t&2){let o;V(o=q())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,r){t&2&&Y("id",null)},inputs:{disabled:[2,"disabled","disabled",X],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[B([{provide:Xd,useExisting:n}]),dt],ngContentSelectors:Ws,decls:1,vars:0,template:function(t,r){t&1&&(ye(),Lr(0,jh,1,0,"ng-template"))},encapsulation:2})}return n})(),Hs="mdc-tab-indicator--active",Wd="mdc-tab-indicator--no-transition",Vs=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(r=>r.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let r=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},sg=(()=>{class n{_elementRef=c(te);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Hs);return}let r=t.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;t.classList.add(Wd),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(Wd),t.classList.add(Hs),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Hs)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",X]}})}return n})();var em=(()=>{class n extends sg{elementRef=c(te);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,r){t&2&&(Y("aria-disabled",!!r.disabled),oe("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",X]},features:[S]})}return n})(),Qd={passive:!0},lg=650,cg=100,dg=(()=>{class n{_elementRef=c(te);_changeDetectorRef=c(Xe);_viewportRuler=c(Xl);_dir=c(Gi,{optional:!0});_ngZone=c(fe);_platform=c(Ue);_sharedResizeObserver=c(Vd);_injector=c(Bt);_renderer=c(kt);_animationsDisabled=ft();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new H;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new H;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new x;indexFocused=new x;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Qd),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Qd))}ngAfterContentInit(){let e=this._dir?this._dir.change:T("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Jn(32),ue(this._destroyed)),r=this._viewportRuler.change(150).pipe(ue(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Un(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ei(o,{injector:this._injector}),Xn(e,r,t,this._items.changes,this._itemsResized()).pipe(ue(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?$e:this._items.changes.pipe(Ke(this._items),Ae(e=>new un(t=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>t.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Ar(1),Ve(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!pi(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=t.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let u=this.scrollDistance,f=this.scrollDistance+r;s<u?this.scrollDistance-=u-s:l>f&&(this.scrollDistance+=Math.min(l-f,s-u))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,r=e-t>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),kr(lg,cg).pipe(ue(Xn(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",X],selectedIndex:[2,"selectedIndex","selectedIndex",bn]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),mg=(()=>{class n extends dg{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Vs(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,r,o){if(t&1&&Mt(o,em,4),t&2){let a;V(a=q())&&(r._items=a)}},viewQuery:function(t,r){if(t&1&&Ye($h,7)(Hh,7)(Vh,7)(qh,5)(Gh,5),t&2){let o;V(o=q())&&(r._tabListContainer=o.first),V(o=q())&&(r._tabList=o.first),V(o=q())&&(r._tabListInner=o.first),V(o=q())&&(r._nextPaginator=o.first),V(o=q())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,r){t&2&&oe("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",X]},features:[S],ngContentSelectors:Ws,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,r){t&1&&(ye(),m(0,"div",5,0),D("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),F(2,"div",6),p(),m(3,"div",7,1),D("keydown",function(a){return r._handleKeydown(a)}),m(5,"div",8,2),D("cdkObserveContent",function(){return r._onContentChanges()}),m(7,"div",9,3),he(9),p()()(),m(10,"div",10,4),D("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),F(12,"div",6),p()),t&2&&(oe("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),g("matRippleDisabled",r._disableScrollBefore||r.disableRipple),h(3),oe("_mat-animation-noopable",r._animationsDisabled),h(2),Y("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),h(5),oe("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),g("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[tr,wc],styles:[`.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}
`],encapsulation:2})}return n})(),pg=new N("MAT_TABS_CONFIG"),Kd=(()=>{class n extends Er{_host=c(qs);_ngZone=c(fe);_centeringSub=Le.EMPTY;_leavingSub=Le.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ke(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","matTabBodyHost",""]],features:[S]})}return n})(),qs=(()=>{class n{_elementRef=c(te);_dir=c(Gi,{optional:!0});_ngZone=c(fe);_injector=c(Bt);_renderer=c(kt);_diAnimationsDisabled=ft();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Le.EMPTY;_position;_previousPosition;_onCentering=new x;_beforeCentering=new x;_afterLeavingCenter=new x;_onCentered=new x(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(Xe);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ei(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ei(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,r){if(t&1&&Ye(Kd,5)(Wh,5),t&2){let o;V(o=q())&&(r._portalHost=o.first),V(o=q())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,r){t&2&&Y("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,r){t&1&&(m(0,"div",1,0),It(2,Qh,0,0,"ng-template",2),p()),t&2&&oe("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[Kd,Yl],styles:[`.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-tab-body-animating>.mat-mdc-tab-body-content{min-height:1px}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}
`],encapsulation:2})}return n})(),tm=(()=>{class n{_elementRef=c(te);_changeDetectorRef=c(Xe);_ngZone=c(fe);_tabsSubscription=Le.EMPTY;_tabLabelSubscription=Le.EMPTY;_tabBodySubscription=Le.EMPTY;_diAnimationsDisabled=ft();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new zt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new x;focusChange=new x;animationDone=new x;selectedTabChange=new x(!0);_groupId;_isServer=!c(Ue).isBrowser;constructor(){let e=c(pg,{optional:!0});this._groupId=c(Ki).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,r)=>{t.position=r-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),r;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=t[o];break}!r&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ke(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Gs;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Xn(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,r){t.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,r)=>t._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,r,o){if(t&1&&Mt(o,Qs,5),t&2){let a;V(a=q())&&(r._allTabs=a)}},viewQuery:function(t,r){if(t&1&&Ye(Kh,5)(Zh,5)(qs,5),t&2){let o;V(o=q())&&(r._tabBodyWrapper=o.first),V(o=q())&&(r._tabHeader=o.first),V(o=q())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,r){t&2&&(Y("mat-align-tabs",r.alignTabs),ae("mat-"+(r.color||"primary")),zr("--mat-tab-animation-duration",r.animationDuration),oe("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",X],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",X],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",X],selectedIndex:[2,"selectedIndex","selectedIndex",bn],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",bn],disablePagination:[2,"disablePagination","disablePagination",X],disableRipple:[2,"disableRipple","disableRipple",X],preserveContent:[2,"preserveContent","preserveContent",X],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[B([{provide:Jd,useExisting:n}])],ngContentSelectors:Ws,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,r){t&1&&(ye(),m(0,"mat-tab-header",3,0),D("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),ie(2,eg,8,17,"div",4,On),p(),z(4,tg,1,0),m(5,"div",5,1),ie(7,ng,1,10,"mat-tab-body",6,On),p()),t&2&&(g("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Ml("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),h(2),re(r._tabs),h(2),U(r._isServer?4:-1),h(),oe("_mat-animation-noopable",r._animationsDisabled()),h(2),re(r._tabs))},dependencies:[mg,em,Ga,tr,Er,qs],styles:[`.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}
`],encapsulation:2})}return n})(),Gs=class{index;tab};var nm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[qe]})}return n})();var fg=(n,i)=>i.label;function hg(n,i){if(n&1&&(m(0,"mat-tab",1),F(1,"markdown",2),pe(2,"language"),p()),n&2){let e=i.$implicit;g("label",e.label),h(),g("data",Re(2,2,e.content,e.language))}}var Lo=class n{codeAssets=[];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["code-tabs"]],inputs:{codeAssets:"codeAssets"},decls:3,vars:0,consts:[["mat-stretch-tabs","false","dynamicHeight",""],[3,"label"],[3,"data"]],template:function(e,t){e&1&&(m(0,"mat-tab-group",0),ie(1,hg,3,5,"mat-tab",1,fg),p()),e&2&&(h(),re(t.codeAssets))},dependencies:[nm,Qs,tm,Sn,Dn,Si],encapsulation:2})};var gg=["*"],Bo=class n{title="";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["demo-card"]],inputs:{title:"title"},ngContentSelectors:gg,decls:5,vars:1,consts:[[1,"demo-card"],[1,"demo-body"]],template:function(e,t){e&1&&(ye(),Me(0,"div",0)(1,"h3"),b(2),Be(),Me(3,"div",1),he(4),Be()()),e&2&&(h(2),j(t.title))},styles:[".demo-card[_ngcontent-%COMP%]{border:1px solid #eee;border-radius:10px;padding:20px;margin-bottom:30px;background:#fff}"]})};function bg(n,i){if(n&1&&(F(0,"markdown",0),pe(1,"json"),pe(2,"language")),n&2){let e=C();g("data",Re(2,3,gn(1,1,e.value),"javascript"))}}var zo=class n{value;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["result-viewer"]],inputs:{value:"value"},decls:1,vars:1,consts:[[3,"data"]],template:function(e,t){e&1&&z(0,bg,3,6,"markdown",0),e&2&&U(t.value?0:-1)},dependencies:[Sn,Dn,jl,Si],encapsulation:2})};var im=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
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
  FieldButton,\r
  DialogField,\r
  TextareaField,\r
  Aggregate,\r
  FormGrid,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-cart-builder',\r
  template: \`\r
    <preforms className="cart-form" (submittedData)="logData($event)" [fields]="fields" />\r
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
        new FormGrid({\r
          className: 'cart-row',\r
          gap: '1rem',\r
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
            new FieldButton({\r
              type: 'button',\r
              label: 'Comment',\r
              command: 'show-modal',\r
              commandfor: 'comment-dialog[$index]',\r
              className: 'comment-btn',\r
            }),\r
\r
            new OutputField({\r
              key: 'totalPrice',\r
              calculation:\r
                '"$"+(Number(items[$index].price) * Number(items[$index].qty)).toFixed(2)',\r
              for: ['price[$index]', 'qty[$index]'],\r
              className: 'subtotal',\r
            }),\r
\r
            new DialogField({\r
              id: 'comment-dialog[$index]',\r
              fields: [\r
                new TextareaField({\r
                  key: 'comment',\r
                  rows: 5,\r
                }),\r
\r
                new FormRow([\r
                  new SubmitButton('Save'),\r
\r
                  new FieldButton({\r
                    label: 'Close',\r
                    type: 'button',\r
                    command: 'close',\r
                    commandfor: 'comment-dialog[$index]',\r
                  }),\r
                ]),\r
              ],\r
            }),\r
          ],\r
          columns: '1fr 1fr 1fr 1fr',\r
        }),\r
      ],\r
\r
      aggregates: [\r
        // Special action: \u03A3(price \xD7 qty) across all items\r
        Aggregate.product({\r
          field: ['price', 'qty'], // Fields to multiply per item\r
          value: 2000,\r
          operator: 'lte',\r
          message: 'total cannot exceed $2000',\r
        }),\r
\r
        Aggregate.unique('name'),\r
      ],\r
    }),\r
\r
    new FormDivider({ label: 'Summary' }),\r
\r
    new OutputField({\r
      key: 'total',\r
      calculation: \`\r
        "$" + items.reduce(\r
          (sum, i) => sum + (Number(i.price) * Number(i.qty)),\r
          0\r
        )\r
      \`,\r
      for: ['price[*]', 'qty[*]', 'items'],\r
    }),\r
\r
    new SubmitButton({\r
      label: 'Checkout',\r
      className: 'checkout-btn',\r
    }),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var rm=`.cart-form {\r
  --bg: #f7f8ff;\r
  --card: rgba(255, 255, 255, 0.82);\r
  --text: #11143d;\r
  --muted: #667099;\r
  --primary: #6c4df6;\r
  --primary-dark: #4b34d8;\r
  --danger: #ef3f61;\r
  --border: rgba(124, 135, 190, 0.22);\r
  --shadow: 0 24px 70px rgba(64, 70, 130, 0.16);\r
  --radius: 24px;\r
\r
  max-width: 900px;\r
\r
  .preforms-array-container {\r
    overflow: auto;\r
  }\r
\r
  .preforms-array-header {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 24px;\r
  }\r
\r
  .preforms-array-add {\r
    border: 0;\r
    border-radius: 14px;\r
    padding: 14px 22px;\r
    color: #fff;\r
    font-weight: 700;\r
    cursor: pointer;\r
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));\r
    box-shadow: 0 12px 24px rgba(108, 77, 246, 0.28);\r
  }\r
\r
  .preforms-array-item {\r
    display: grid;\r
    grid-template-columns: 72px 1.4fr 1.2fr 1.2fr 100px;\r
    gap: 24px;\r
    align-items: center;\r
    padding: 22px;\r
    margin-bottom: 16px;\r
    border: 1px solid var(--border);\r
    border-radius: 18px;\r
    min-width: 700px;\r
  }\r
\r
  .preforms-array-item:nth-child(odd) {\r
    background: linear-gradient(90deg, #fbf7ff, #ffffff);\r
  }\r
\r
  .preforms-array-item:nth-child(even) {\r
    background: linear-gradient(90deg, #f2f8ff, #ffffff);\r
  }\r
\r
  .preforms-array-item:nth-child(3n) {\r
    background: linear-gradient(90deg, #f2fff6, #ffffff);\r
  }\r
\r
  label {\r
    display: block;\r
    margin-bottom: 10px;\r
    font-size: 14px;\r
    font-weight: 700;\r
    color: #3f4774;\r
  }\r
\r
  input {\r
    width: 100%;\r
    height: 52px;\r
    border: 1px solid var(--border);\r
    border-radius: 12px;\r
    padding: 0 16px;\r
    font-size: 16px;\r
    outline: none;\r
    background: #fff;\r
    color: var(--text);\r
  }\r
\r
  input:focus {\r
    border-color: var(--primary);\r
    box-shadow: 0 0 0 4px rgba(108, 77, 246, 0.12);\r
  }\r
\r
  .preforms-array-remove {\r
    border: 0;\r
    color: #d9153d;\r
    background: transparent;\r
    font-size: 20px;\r
    cursor: pointer;\r
  }\r
\r
  .preforms-array-label {\r
    text-align: center;\r
    font-size: 40px;\r
    margin: 0;\r
    font-weight: 800;\r
    letter-spacing: -0.04em;\r
  }\r
\r
  input,\r
  textarea {\r
    width: 100%;\r
  }\r
\r
  .checkout-btn {\r
    padding: 0.5rem 0.875rem;\r
    border: 1px solid #d0d7de;\r
    border-radius: 8px;\r
    border-radius: 18px;\r
    background: linear-gradient(135deg, yellow, orange);\r
    border: 1px solid rgba(240, 190, 110, 0.25);\r
  }\r
\r
  .checkout-btn:active {\r
    transform: scale(0.9);\r
  }\r
\r
  .checkout-btn:hover {\r
    background: #f6f8fa;\r
    border-color: #8c959f;\r
  }\r
\r
  .comment-btn {\r
    padding: 18px;\r
    border-radius: 18px;\r
    border: 1px solid var(--border);\r
    background: rgba(255, 255, 255, 0.7);\r
    margin-top: 30px;\r
    cursor: pointer;\r
  }\r
\r
  output[formcontrolname='cartTotal'] {\r
    font-size: 1.4rem;\r
    font-weight: 700;\r
    display: block;\r
    text-align: right;\r
    margin-top: 1rem;\r
  }\r
}\r
`;var Fr=class{static sum(i){return d({action:"sum"},i)}static count(i){return d({action:"count"},i)}static avg(i){return d({action:"avg"},i)}static product(i){return d({action:"product"},i)}static unique(i,e){return d({action:"unique"},typeof i=="string"?{field:i,message:e}:i)}};function om(n){return n.options!==void 0}var ki=class extends xn{kind="array";key;fields;aggregates;minItems;maxItems;addButton;removeButton;constructor(i){super(d({component:"array"},i)),this.key=i.key,this.fields=i.fields,this.aggregates=i.aggregates||[],this.value=i.value||[],this.minItems=i.minItems,this.maxItems=i.maxItems,this.addButton=i.addButton,this.removeButton=i.removeButton,i.uniqueBy&&this.aggregates.push({field:i.uniqueBy,action:"unique"})}};var dn=class extends xn{kind="group";fields;key;constructor(i){super(d({component:"group"},i)),this.fields=i.fields,this.key=i.key}};var Ge=class extends xn{kind="wrapper";fields;constructor(i){super(d({component:"wrapper"},i)),this.fields=i.fields}};var it=class extends xn{kind="button";type;formaction;formmethod;command;commandfor;icons;constructor(i){super(_(d({},i),{type:i.type??"button",component:"button"})),this.type=i.type,this.formaction=i.formaction,this.formmethod=i.formmethod,this.command=i.command,this.commandfor=i.commandfor,this.icons=i.icons}};var In=class extends Ge{constructor(i,e){let t=typeof i=="string"?{label:i,fields:e}:i;if(!t.fields)throw new Error("Missing fields");super(_(d({},t),{component:"fieldset",fields:t.fields}))}};var Uo=class extends Ge{columns;rows;gap;constructor(i,e={}){let t=Array.isArray(i)?_(d({},e),{fields:i}):i;super(_(d({},t),{component:"form-grid"})),this.columns=t.columns||"1fr",this.rows=t.rows||"1fr",this.gap=t.gap||"1rem"}};var mn=class extends Ge{gap;position;constructor(i,e={}){let t=Array.isArray(i)?_(d({},e),{fields:i}):i;super(_(d({},t),{component:"form-row"})),this.gap=t.gap??"5px",this.position=t.position??"start"}};var Mn=class extends Ge{closeBtn;width;height;constructor(i){super(_(d({},i),{component:"dialog"})),this.closeBtn=i.closeBtn??!0,this.width=i.width,this.height=i.height}};var Rn=class extends Ne{for;calculation;constructor(i){super(_(d({},i),{component:"output"})),this.for=i.for,this.calculation=i.calculation}};var Fe=class extends Ne{type;constructor(i){super(_(d({},i),{component:"input"})),this.type=i.type}};var P=class extends Fe{constructor(i,e,t=!1){let r=typeof i=="string"?{key:i,value:e,required:t}:i;super(_(d({},r),{key:r.key,type:"text"}))}};var Zt=class extends Ne{constructor(i,e,t=!1){let r=typeof i=="string"?{key:i,value:e,required:t}:i;super(_(d({},r),{key:r.key,component:"textarea",type:"text"}))}};var Kn=class extends Fe{constructor(i,e,t=!1){let r=typeof i=="string"?{key:i,value:e,required:t}:i;super(_(d({},r),{key:r.key,type:"date"}))}};var Oe=class extends Ne{constructor(i,e,t){let r=typeof i=="string"?{key:i,value:t,options:e}:i;super(_(d({},r),{key:r.key,component:"select"}))}};var Ii=class extends Ne{constructor(i,e){let t=typeof i=="string"?{key:i,value:e}:i;super(_(d({},t),{type:"checkbox",component:"checkbox"}))}};var jo=class extends ki{constructor(i,e,t){let r=typeof i=="string"?{key:i,value:t,options:e}:i,o=r.options.map(a=>new At(a)).map(a=>new Ii(a.value,a.value));super(_(d({},r),{fields:o,component:"checkbox-group"}))}};var Mi=class extends Ne{constructor(i,e,t){let r=typeof i=="string"?{key:i,options:e,value:t}:i;super(_(d({},r),{component:"radio"}))}};var ge=class extends Ne{constructor(i,e,t=!1){let r=typeof i=="string"?{key:i,value:e,required:t}:i;super(_(d({},r),{key:r.key,type:"number",component:"number"}))}};var am=["AF, Afghanistan","AL, Albania","DZ, Algeria","AD, Andorra","AO, Angola","AG, Antigua and Barbuda","AR, Argentina","AM, Armenia","AU, Australia","AT, Austria","AZ, Azerbaijan","BS, Bahamas","BH, Bahrain","BD, Bangladesh","BB, Barbados","BY, Belarus","BE, Belgium","BZ, Belize","BJ, Benin","BT, Bhutan","BO, Bolivia","BA, Bosnia and Herzegovina","BW, Botswana","BR, Brazil","BN, Brunei","BG, Bulgaria","BF, Burkina Faso","BI, Burundi","KH, Cambodia","CM, Cameroon","CA, Canada","CV, Cape Verde","CF, Central African Republic","TD, Chad","CL, Chile","CN, China","CO, Colombia","KM, Comoros","CG, Congo","CR, Costa Rica","HR, Croatia","CU, Cuba","CY, Cyprus","CZ, Czech Republic","DK, Denmark","DJ, Djibouti","DM, Dominica","DO, Dominican Republic","EC, Ecuador","EG, Egypt","SV, El Salvador","GQ, Equatorial Guinea","ER, Eritrea","EE, Estonia","SZ, Eswatini","ET, Ethiopia","FJ, Fiji","FI, Finland","FR, France","GA, Gabon","GM, Gambia","GE, Georgia","DE, Germany","GH, Ghana","GR, Greece","GD, Grenada","GT, Guatemala","GN, Guinea","GW, Guinea-Bissau","GY, Guyana","HT, Haiti","HN, Honduras","HU, Hungary","IS, Iceland","IN, India","ID, Indonesia","IR, Iran","IQ, Iraq","IE, Ireland","IL, Israel","IT, Italy","JM, Jamaica","JP, Japan","JO, Jordan","KZ, Kazakhstan","KE, Kenya","KI, Kiribati","KW, Kuwait","KG, Kyrgyzstan","LA, Laos","LV, Latvia","LB, Lebanon","LS, Lesotho","LR, Liberia","LY, Libya","LI, Liechtenstein","LT, Lithuania","LU, Luxembourg","MG, Madagascar","MW, Malawi","MY, Malaysia","MV, Maldives","ML, Mali","MT, Malta","MH, Marshall Islands","MR, Mauritania","MU, Mauritius","MX, Mexico","FM, Micronesia","MD, Moldova","MC, Monaco","MN, Mongolia","ME, Montenegro","MA, Morocco","MZ, Mozambique","MM, Myanmar","NA, Namibia","NR, Nauru","NP, Nepal","NL, Netherlands","NZ, New Zealand","NI, Nicaragua","NE, Niger","NG, Nigeria","KP, North Korea","MK, North Macedonia","NO, Norway","OM, Oman","PK, Pakistan","PW, Palau","PA, Panama","PG, Papua New Guinea","PY, Paraguay","PE, Peru","PH, Philippines","PL, Poland","PT, Portugal","QA, Qatar","RO, Romania","RU, Russia","RW, Rwanda","KN, Saint Kitts and Nevis","LC, Saint Lucia","VC, Saint Vincent and the Grenadines","WS, Samoa","SM, San Marino","ST, Sao Tome and Principe","SA, Saudi Arabia","SN, Senegal","RS, Serbia","SC, Seychelles","SL, Sierra Leone","SG, Singapore","SK, Slovakia","SI, Slovenia","SB, Solomon Islands","SO, Somalia","ZA, South Africa","KR, South Korea","SS, South Sudan","ES, Spain","LK, Sri Lanka","SD, Sudan","SR, Suriname","SE, Sweden","CH, Switzerland","SY, Syria","TW, Taiwan","TJ, Tajikistan","TZ, Tanzania","TH, Thailand","TG, Togo","TO, Tonga","TT, Trinidad and Tobago","TN, Tunisia","TR, Turkey","TM, Turkmenistan","TV, Tuvalu","UG, Uganda","UA, Ukraine","AE, United Arab Emirates","GB, United Kingdom","US, United States","UY, Uruguay","UZ, Uzbekistan","VU, Vanuatu","VA, Vatican City","VE, Venezuela","VN, Vietnam","YE, Yemen","ZM, Zambia","ZW, Zimbabwe"];var Ri=class extends Oe{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(_(d({},t),{key:"country",options:t.options??am}))}};var Ai=class extends P{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"city",aria:{"aria-label":"City"}},t))}};var Ni=class extends P{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"postalCode",aria:{"aria-label":"Postal Code"}},t))}};var Pi=class extends P{constructor(i="",e=!1){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"state",aria:{"aria-label":"State"}},t))}};var Oi=class extends P{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"street",aria:{"aria-label":"Street"}},t))}};var $o=class extends dn{constructor(i,e=!0,t="address"){let r=i&&"street"in i||i&&"city"in i?i:{value:i,required:e,key:t},o=r.fields??[new Oi(r.value?.street),new Ai(r.value?.city),new Pi(r.value?.state),new Ni(r.value?.postalCode),new Ri(r.value?.country)];super(_(d({fields:o},r),{key:t}))}};var Ho=class extends it{constructor(i="Confirm"){let e=typeof i=="string"?{label:i,type:"submit"}:i;super(_(d({},e),{type:e.type??"submit"}))}};var sm=[{code:"AED",name:"UAE Dirham",symbol:"\u062F.\u0625"},{code:"AFN",name:"Afghan Afghani",symbol:"\u060B"},{code:"ALL",name:"Albanian Lek",symbol:"L"},{code:"AMD",name:"Armenian Dram",symbol:"\u058F"},{code:"ANG",name:"Netherlands Antillean Guilder",symbol:"\u0192"},{code:"AOA",name:"Angolan Kwanza",symbol:"Kz"},{code:"ARS",name:"Argentine Peso",symbol:"$"},{code:"AUD",name:"Australian Dollar",symbol:"$"},{code:"AWG",name:"Aruban Florin",symbol:"\u0192"},{code:"AZN",name:"Azerbaijani Manat",symbol:"\u20BC"},{code:"BAM",name:"Bosnia and Herzegovina Convertible Mark",symbol:"KM"},{code:"BBD",name:"Barbadian Dollar",symbol:"$"},{code:"BDT",name:"Bangladeshi Taka",symbol:"\u09F3"},{code:"BGN",name:"Bulgarian Lev",symbol:"\u043B\u0432"},{code:"BHD",name:"Bahraini Dinar",symbol:".\u062F.\u0628"},{code:"BIF",name:"Burundian Franc",symbol:"FBu"},{code:"BMD",name:"Bermudian Dollar",symbol:"$"},{code:"BND",name:"Brunei Dollar",symbol:"$"},{code:"BOB",name:"Bolivian Boliviano",symbol:"Bs."},{code:"BRL",name:"Brazilian Real",symbol:"R$"},{code:"BSD",name:"Bahamian Dollar",symbol:"$"},{code:"BTN",name:"Bhutanese Ngultrum",symbol:"Nu."},{code:"BWP",name:"Botswana Pula",symbol:"P"},{code:"BYN",name:"Belarusian Ruble",symbol:"Br"},{code:"BZD",name:"Belize Dollar",symbol:"$"},{code:"CAD",name:"Canadian Dollar",symbol:"$"},{code:"CDF",name:"Congolese Franc",symbol:"FC"},{code:"CHF",name:"Swiss Franc",symbol:"CHF"},{code:"CLP",name:"Chilean Peso",symbol:"$"},{code:"CNY",name:"Chinese Yuan",symbol:"\xA5"},{code:"COP",name:"Colombian Peso",symbol:"$"},{code:"CRC",name:"Costa Rican Col\xF3n",symbol:"\u20A1"},{code:"CUP",name:"Cuban Peso",symbol:"$"},{code:"CVE",name:"Cape Verdean Escudo",symbol:"$"},{code:"CZK",name:"Czech Koruna",symbol:"K\u010D"},{code:"DJF",name:"Djiboutian Franc",symbol:"Fdj"},{code:"DKK",name:"Danish Krone",symbol:"kr"},{code:"DOP",name:"Dominican Peso",symbol:"$"},{code:"DZD",name:"Algerian Dinar",symbol:"\u062F\u062C"},{code:"EGP",name:"Egyptian Pound",symbol:"\xA3"},{code:"ERN",name:"Eritrean Nakfa",symbol:"Nfk"},{code:"ETB",name:"Ethiopian Birr",symbol:"Br"},{code:"EUR",name:"Euro",symbol:"\u20AC"},{code:"FJD",name:"Fijian Dollar",symbol:"$"},{code:"GBP",name:"British Pound",symbol:"\xA3"},{code:"GEL",name:"Georgian Lari",symbol:"\u20BE"},{code:"GHS",name:"Ghanaian Cedi",symbol:"\u20B5"},{code:"GMD",name:"Gambian Dalasi",symbol:"D"},{code:"GNF",name:"Guinean Franc",symbol:"FG"},{code:"GTQ",name:"Guatemalan Quetzal",symbol:"Q"},{code:"GYD",name:"Guyanese Dollar",symbol:"$"},{code:"HKD",name:"Hong Kong Dollar",symbol:"$"},{code:"HNL",name:"Honduran Lempira",symbol:"L"},{code:"HRK",name:"Croatian Kuna",symbol:"kn"},{code:"HTG",name:"Haitian Gourde",symbol:"G"},{code:"HUF",name:"Hungarian Forint",symbol:"Ft"},{code:"IDR",name:"Indonesian Rupiah",symbol:"Rp"},{code:"ILS",name:"Israeli New Shekel",symbol:"\u20AA"},{code:"INR",name:"Indian Rupee",symbol:"\u20B9"},{code:"IQD",name:"Iraqi Dinar",symbol:"\u0639.\u062F"},{code:"IRR",name:"Iranian Rial",symbol:"\uFDFC"},{code:"ISK",name:"Icelandic Kr\xF3na",symbol:"kr"},{code:"JMD",name:"Jamaican Dollar",symbol:"$"},{code:"JPY",name:"Japanese Yen",symbol:"\xA5"},{code:"JOD",name:"Jordanian Dinar",symbol:"\u062F.\u0627"},{code:"KES",name:"Kenyan Shilling",symbol:"Sh"},{code:"KGS",name:"Kyrgyzstani Som",symbol:"\u0441"},{code:"KHR",name:"Cambodian Riel",symbol:"\u17DB"},{code:"KRW",name:"South Korean Won",symbol:"\u20A9"},{code:"KWD",name:"Kuwaiti Dinar",symbol:"\u062F.\u0643"},{code:"KZT",name:"Kazakhstani Tenge",symbol:"\u20B8"},{code:"LAK",name:"Lao Kip",symbol:"\u20AD"},{code:"LBP",name:"Lebanese Pound",symbol:"\xA3"},{code:"LKR",name:"Sri Lankan Rupee",symbol:"Rs"},{code:"LRD",name:"Liberian Dollar",symbol:"$"},{code:"LYD",name:"Libyan Dinar",symbol:"\u0644.\u062F"},{code:"MAD",name:"Moroccan Dirham",symbol:"\u062F.\u0645."},{code:"MDL",name:"Moldovan Leu",symbol:"L"},{code:"MGA",name:"Malagasy Ariary",symbol:"Ar"},{code:"MKD",name:"Macedonian Denar",symbol:"\u0434\u0435\u043D"},{code:"MMK",name:"Myanmar Kyat",symbol:"Ks"},{code:"MNT",name:"Mongolian T\xF6gr\xF6g",symbol:"\u20AE"},{code:"MOP",name:"Macanese Pataca",symbol:"P"},{code:"MUR",name:"Mauritian Rupee",symbol:"\u20A8"},{code:"MXN",name:"Mexican Peso",symbol:"$"},{code:"MYR",name:"Malaysian Ringgit",symbol:"RM"},{code:"NAD",name:"Namibian Dollar",symbol:"$"},{code:"NGN",name:"Nigerian Naira",symbol:"\u20A6"},{code:"NIO",name:"Nicaraguan C\xF3rdoba",symbol:"C$"},{code:"NOK",name:"Norwegian Krone",symbol:"kr"},{code:"NPR",name:"Nepalese Rupee",symbol:"\u20A8"},{code:"NZD",name:"New Zealand Dollar",symbol:"$"},{code:"OMR",name:"Omani Rial",symbol:"\u0631.\u0639."},{code:"PAB",name:"Panamanian Balboa",symbol:"B/."},{code:"PEN",name:"Peruvian Sol",symbol:"S/"},{code:"PHP",name:"Philippine Peso",symbol:"\u20B1"},{code:"PKR",name:"Pakistani Rupee",symbol:"\u20A8"},{code:"PLN",name:"Polish Z\u0142oty",symbol:"z\u0142"},{code:"PYG",name:"Paraguayan Guaran\xED",symbol:"\u20B2"},{code:"QAR",name:"Qatari Riyal",symbol:"\u0631.\u0642"},{code:"RON",name:"Romanian Leu",symbol:"lei"},{code:"RSD",name:"Serbian Dinar",symbol:"\u0434\u0438\u043D"},{code:"RUB",name:"Russian Ruble",symbol:"\u20BD"},{code:"RWF",name:"Rwandan Franc",symbol:"RF"},{code:"SAR",name:"Saudi Riyal",symbol:"\u0631.\u0633"},{code:"SEK",name:"Swedish Krona",symbol:"kr"},{code:"SGD",name:"Singapore Dollar",symbol:"$"},{code:"SLL",name:"Sierra Leonean Leone",symbol:"Le"},{code:"SOS",name:"Somali Shilling",symbol:"Sh"},{code:"SRD",name:"Surinamese Dollar",symbol:"$"},{code:"SSP",name:"South Sudanese Pound",symbol:"\xA3"},{code:"THB",name:"Thai Baht",symbol:"\u0E3F"},{code:"TND",name:"Tunisian Dinar",symbol:"\u062F.\u062A"},{code:"TRY",name:"Turkish Lira",symbol:"\u20BA"},{code:"TWD",name:"New Taiwan Dollar",symbol:"$"},{code:"UAH",name:"Ukrainian Hryvnia",symbol:"\u20B4"},{code:"UGX",name:"Ugandan Shilling",symbol:"Sh"},{code:"USD",name:"US Dollar",symbol:"$"},{code:"UYU",name:"Uruguayan Peso",symbol:"$"},{code:"UZS",name:"Uzbekistani So\u02BBm",symbol:"so\u02BBm"},{code:"VES",name:"Venezuelan Bol\xEDvar",symbol:"Bs."},{code:"VND",name:"Vietnamese \u0110\u1ED3ng",symbol:"\u20AB"},{code:"XAF",name:"Central African CFA Franc",symbol:"FCFA"},{code:"XOF",name:"West African CFA Franc",symbol:"CFA"},{code:"YER",name:"Yemeni Rial",symbol:"\uFDFC"},{code:"ZAR",name:"South African Rand",symbol:"R"},{code:"ZMW",name:"Zambian Kwacha",symbol:"ZK"},{code:"ZWL",name:"Zimbabwean Dollar",symbol:"$"}];var Vo=class extends Oe{constructor(i={}){let a=i,{currencies:e=sm,labelFormat:t="code-name"}=a,r=tl(a,["currencies","labelFormat"]),o=e.map(s=>new At(s.code,Cg(s,t)));super(d({key:"currency",label:"Currency",options:o},r))}};function Cg(n,i){switch(i){case"code":return n.code;case"name":return n.name;case"symbol-code":return n.symbol?`${n.symbol} ${n.code}`:n.code;default:return`${n.code} \u2014 ${n.name}`}}var qo=class extends Kn{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"dateOfBirth"},t))}};var Go=class extends Zt{constructor(i="",e=!1){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"description",aria:{"aria-label":"Description"}},t))}};var Lt=class extends Fe{constructor(i="",e=!0){let t=typeof i=="string"?{value:i}:i;super(_(d({},t),{key:t.key||"email",type:"email",required:e}))}};var Wo=class extends P{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"firstName",aria:{"aria-label":"First Name"}},t))}};var Qo=class extends P{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"fullName",aria:{"aria-label":"Full Name"}},t))}};var Ko=class extends P{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"lastName",aria:{"aria-label":"Last Name"}},t))}};var Zo=class extends P{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"name",aria:{"aria-label":"Name"}},t))}};var rt=class extends Fe{constructor(i="",e=!0){let t=typeof i=="string"?{value:i}:i;super(_(d({},t),{key:t.key||"password",type:"password",required:e}))}};var Yo=class extends Fe{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"phoneNumber",type:"tel"},t))}};var Xo=class extends it{constructor(i="Reset"){let e=typeof i=="string"?{label:i,type:"reset"}:i;super(_(d({},e),{type:"reset"}))}};var ne=class extends it{constructor(i="Submit"){let e=typeof i=="string"?{type:"submit",label:i}:i;super(_(d({},e),{type:"submit"}))}};var Li=class extends P{constructor(i="",e=!0){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"username",aria:{"aria-label":"User Name"}},t))}};var Jo=class n extends Mi{static OPTIONS=["male","female"];constructor(i="",e=!1){let t=typeof i=="string"?{value:i,required:e}:i;super(_(d({},t),{key:"gender",options:n.OPTIONS,aria:{"aria-label":"Gender"}}))}};var ea=class extends P{constructor(i="",e=!1){let t=typeof i=="string"?{value:i,required:e}:i;super(d({key:"middleName",aria:{"aria-label":"Middle Name"}},t))}};var Yt=class extends qt{constructor(i={}){super(_(d({},i),{component:"form-divider"}))}};var Xt=class extends qt{constructor(i){let e=typeof i=="string"?{value:i}:i;super(_(d({},e),{component:"form-description"}))}};var ta=class extends qt{options;constructor(i){let e=Array.isArray(i)?{options:i}:i;super(_(d({className:e.className||"form-list"},e),{component:"form-list"})),this.options=e.options}};var Bi=class extends qt{src;alt;width;height;constructor(i){let e=typeof i=="string"?{src:i}:i;super(_(d({className:e.className||"form-image"},e),{component:"form-image"})),this.src=e.src,this.alt=e.alt,this.width=e.width,this.height=e.height}};var na=class extends qt{constructor(i={}){super(_(d({},i),{component:"form-spacer"}))}};var ia=class{#e=c(ai,{optional:!0});destroyRef=c(Hi);get __eventService(){if(!this.#e)throw new Error(`

        [FormHost Error] EventService not found!

        This usually happens if you did NOT add:
        providers: [EventService]
        to this component or any parent component.
        
        Quick Fix:
          1. Add 'providers: [EventService]' to this component, or
          2. Make sure a parent component provides EventService.

        Without EventService, @FormEvent and @FormFieldEvent decorators and form events will NOT work.
          `);return this.#e}constructor(){this.__eventService.bindDecoratedHandlers(this,this.destroyRef)}};function lm(){return[mc,si,sc,lc,dc,{provide:ai,useFactory:n=>n??new ai,deps:[[new hl,new gl,ai]]}]}var An=class An extends ia{formSchema={fields:[]};formId=`dynamic-form-${crypto.randomUUID()}`;className="";set inputFields(i){this.formSchema={fields:i??[]},this.init()}set schema(i){i&&(this.formSchema=i,this.formId=i.id||this.formId,this.init())}set value(i){i&&this.form.patchValue(i)}submitted=new x;submittedData=new x;fieldChange=new x;get form(){return this.formService.form}get fields(){return this.formService.fields}get isInvalid(){return this.form.invalid}formService=c(si);onReset(i){i?.preventDefault(),this.formService.reset()}onSubmit(i){if(this.form.markAllAsTouched(),this.form.updateValueAndValidity(),this.isInvalid)return;let e=this.formService.getMetadata(i);this.submitted.emit(this.formService.getEventPayload(e)),this.submittedData.emit(this.formService.getValues(e.buttonData))}onFieldChange(i){this.fieldChange.next(i)}init(){let i=this.formSchema.fields;this.formService.init(i)}static \u0275fac=(()=>{let i;return function(t){return(i||(i=I(An)))(t||An)}})();static \u0275cmp=v({type:An,selectors:[["preforms"]],inputs:{formId:"formId",className:"className",inputFields:[0,"fields","inputFields"],schema:"schema",value:"value"},outputs:{submitted:"submitted",submittedData:"submittedData",fieldChange:"fieldChange"},features:[B([lm()]),S],decls:2,vars:6,consts:[[3,"reset","ngSubmit","id","formGroup"],[3,"fields","control"]],template:function(e,t){e&1&&(m(0,"form",0),D("reset",function(o){return t.onReset(o)})("ngSubmit",function(o){return t.onSubmit(o)}),F(1,"preforms-group",1),p()),e&2&&(ae(t.className),g("id",t.formId)("formGroup",t.form),h(),g("fields",t.fields)("control",t.form))},dependencies:[se,tc,qr,oc,Cn],encapsulation:2,changeDetection:0})};$([ri("request:reset")],An.prototype,"onReset",1),$([ri("request:submit")],An.prototype,"onSubmit",1),$([oi({field:"*",type:"change"})],An.prototype,"onFieldChange",1);var W=An;var wg=n=>["preforms-button",n];function Eg(n,i){if(n&1&&F(0,"preforms-field-icon",1),n&2){let e=i.$implicit,t=C();g("icon",e)("field",t.field)("control",t.control)}}function Fg(n,i){if(n&1&&F(0,"preforms-field-icon",1),n&2){let e=i.$implicit,t=C();g("icon",e)("field",t.field)("control",t.control)}}var bt=class extends ce{get leftIcons(){return this.field.icons?.filter(i=>i.side==="left")??[]}get rightIcons(){return this.field.icons?.filter(i=>i.side==="right")??[]}};R(bt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(bt)))(t||bt)}})()),R(bt,"\u0275cmp",v({type:bt,selectors:[["preforms-button"]],features:[S],decls:6,vars:15,consts:[[3,"type","value","disabled"],[3,"icon","field","control"]],template:function(e,t){e&1&&(m(0,"button",0),ie(1,Eg,1,3,"preforms-field-icon",1,we),b(3),ie(4,Fg,1,3,"preforms-field-icon",1,we),p()),e&2&&(Rl(t.field.style),ae(Te(13,wg,t.field.className)),g("type",t.field.type)("value",t.field.value)("disabled",t.field.disabled),Y("name",t.field.name)("command",t.field.command)("commandfor",t.field.commandfor)("formaction",t.field.formaction,xl)("formmethod",t.field.formmethod),h(),re(t.leftIcons),h(2),_e(" ",t.field.label," "),h(),re(t.rightIcons))},dependencies:[se,Qr],encapsulation:2})),bt=$([le({component:"button"})],bt);function Tg(n,i){if(n&1){let e=ze();m(0,"label")(1,"input",3),D("change",function(r){xe(e);let o=C();return Ce(o.update(r.target))}),p(),m(2,"span",4),b(3),p(),m(4,"span",5),b(5),p()()}if(n&2){let e=i.$implicit,t=C();ae(t.field.className),h(),g("value",e.value)("checked",t.isSelected(e.value)),h(2),j(e.label),h(2),j(e.description)}}var vt=class extends ce{ngOnInit(){this.field.value&&this.field.value.forEach(i=>this.control.push(new $a(i)))}update(i){i.checked?this.control.push(new $a(i.value)):this.control.removeAt(this.control.value.indexOf(i.value))}isSelected(i){return this.control.value.includes(i)}};R(vt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(vt)))(t||vt)}})()),R(vt,"\u0275cmp",v({type:vt,selectors:[["preforms-checkbox-group"]],features:[S],decls:5,vars:2,consts:[[1,"preforms-checkbox-group",3,"formArray"],[1,"preforms-checkbox-group-header"],[3,"class"],["type","checkbox",3,"change","value","checked"],[1,"preforms-checkbox-label"],[1,"preforms-checkbox-description"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),b(2),p(),ie(3,Tg,6,6,"label",2,we),p()),e&2&&(g("formArray",t.control),h(2),_e(" ",t.field.label," "),h(),re(t.field.fields))},dependencies:[se,qr,rc],encapsulation:2})),vt=$([le({component:"checkbox-group"})],vt);var yt=class extends ce{};R(yt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(yt)))(t||yt)}})()),R(yt,"\u0275cmp",v({type:yt,selectors:[["preforms-details"]],features:[S],decls:6,vars:4,consts:[[1,"form-field-hint"],[3,"fields","control"]],template:function(e,t){e&1&&(m(0,"details")(1,"summary"),b(2),p(),m(3,"div",0),b(4),p(),F(5,"preforms-group",1),p()),e&2&&(h(2),j(t.field.label),h(2),j(t.field.hint),h(),g("fields",t.field.fields)("control",t.control))},dependencies:[se,Cn],encapsulation:2})),yt=$([le({component:"details"})],yt);var Dg=["dialog"],Sg=n=>["preforms-dialog",n],kg=(n,i)=>({width:n,height:i});function Ig(n,i){if(n&1){let e=ze();m(0,"div",3)(1,"button",6),D("click",function(){xe(e);let r=C();return Ce(r.closeDialog())}),b(2," \u2715 "),p()()}}var We=class extends ce{dialog;closeDialog(){this.dialog.nativeElement.close()}submit(i){this.control.patchValue(i),this.closeDialog()}handleOpen(i){this.handleDialogEvent(i,"open")}handleClose(i){this.handleDialogEvent(i,"close")}handleDialogEvent(i,e){if(!("target"in i)||i.target!==this.field.id)return;let t=this.dialog.nativeElement;e==="open"&&!t.open&&t.showModal(),e==="close"&&t.open&&t.close()}};R(We,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(We)))(t||We)}})()),R(We,"\u0275cmp",v({type:We,selectors:[["preforms-dialog"]],viewQuery:function(e,t){if(e&1&&Ye(Dg,5),e&2){let r;V(r=q())&&(t.dialog=r.first)}},hostAttrs:["ngSkipHydration","true"],features:[S],decls:6,vars:11,consts:[["dialog",""],[3,"id","ngStyle"],[1,"preforms-dialog-panel"],[1,"preforms-dialog-header"],[1,"preforms-dialog-content"],[3,"submittedData","fields"],["type","button","aria-label","Close dialog",1,"preforms-dialog-close-btn",3,"click"]],template:function(e,t){e&1&&(m(0,"dialog",1,0)(2,"div",2),z(3,Ig,3,0,"div",3),m(4,"div",4)(5,"preforms",5),D("submittedData",function(o){return t.submit(o)}),p()()()()),e&2&&(ae(Te(6,Sg,t.field.className)),g("id",t.field.id)("ngStyle",Nl(8,kg,t.field.width||"350px",t.field.height||"250px")),h(3),U(t.field.closeBtn?3:-1),h(2),g("fields",t.field.fields))},dependencies:[se,W,$r,Ul],styles:[".preforms-dialog[_ngcontent-%COMP%]{border:0;border-radius:12px;padding:0;max-width:min(90vw,500px);max-height:90vh;overflow:hidden}.preforms-dialog-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:#fff}.preforms-dialog-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:.5rem}.preforms-dialog-close-btn[_ngcontent-%COMP%]{width:2rem;height:2rem;border:0;border-radius:999px;background:transparent;cursor:pointer;display:grid;place-items:center;font:inherit;line-height:1}.preforms-dialog-content[_ngcontent-%COMP%]{padding:1rem;flex:1;overflow:auto}.preforms-dialog[_ngcontent-%COMP%]::backdrop{background:#00000073}"]})),$([ri("open_dialog")],We.prototype,"handleOpen",1),$([ri("close_dialog")],We.prototype,"handleClose",1),We=$([le({component:"dialog"})],We);var cm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[qe]})}return n})();var _t=class extends ce{};R(_t,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(_t)))(t||_t)}})()),R(_t,"\u0275cmp",v({type:_t,selectors:[["preforms-fieldset"]],features:[S],decls:4,vars:3,consts:[[3,"fields","control"]],template:function(e,t){e&1&&(m(0,"fieldset")(1,"legend"),b(2),p(),F(3,"preforms-group",0),p()),e&2&&(h(2),j(t.field.label),h(),g("fields",t.field.fields)("control",t.control))},dependencies:[se,Cn,cm],encapsulation:2})),_t=$([le({component:"fieldset"})],_t);var zi=class n{ariaAttributes;el=c(te);renderer=c(kt);ngOnChanges(){this.ariaAttributes&&Object.entries(this.ariaAttributes).forEach(([i,e])=>{e?this.renderer.setAttribute(this.el.nativeElement,i,String(e)):this.renderer.removeAttribute(this.el.nativeElement,i)})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["","pfAria",""]],inputs:{ariaAttributes:[0,"pfAria","ariaAttributes"]},features:[dt]})};var Mg=["*"],Rg=n=>["preforms-form-field",n];function Ag(n,i){if(n&1&&(m(0,"label",0),b(1),p()),n&2){let e=C();g("for",e.field.id),h(),_e(" ",e.field.label," ")}}function Ng(n,i){if(n&1&&F(0,"preforms-field-icon",2),n&2){let e=i.$implicit,t=C();g("icon",e)("field",t.field)("control",t.control)}}function Pg(n,i){if(n&1&&F(0,"preforms-field-icon",2),n&2){let e=i.$implicit,t=C();g("icon",e)("field",t.field)("control",t.control)}}function Og(n,i){if(n&1&&(m(0,"small",3),b(1),p()),n&2){let e=C();h(),_e(" ",e.field.hint," ")}}function Lg(n,i){if(n&1&&(m(0,"small",4),b(1),p()),n&2){let e=C();h(),_e(" ",e.error," ")}}var Jt=class n{field;control;error;get leftIcons(){return this.field.icons?.filter(i=>i.side==="left")??[]}get rightIcons(){return this.field.icons?.filter(i=>i.side==="right")??[]}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["preforms-form-field"]],inputs:{field:"field",control:"control",error:"error"},ngContentSelectors:Mg,decls:10,vars:7,consts:[[1,"preforms-form-field-label",3,"for"],[1,"preforms-form-field-row"],[3,"icon","field","control"],[1,"preforms-field-hint"],["aria-live","polite",1,"preforms-field-error"]],template:function(e,t){e&1&&(ye(),m(0,"div"),z(1,Ag,2,2,"label",0),m(2,"div",1),ie(3,Ng,1,3,"preforms-field-icon",2,we),he(5),ie(6,Pg,1,3,"preforms-field-icon",2,we),p(),z(8,Og,2,1,"small",3),z(9,Lg,2,1,"small",4),p()),e&2&&(ae(Te(5,Rg,t.field.className)),h(),U(t.field.label?1:-1),h(2),re(t.leftIcons),h(3),re(t.rightIcons),h(2),U(t.field.hint?8:-1),h(),U(t.error?9:-1))},dependencies:[Qr],encapsulation:2})};function Bg(n,i){if(n&1&&(m(0,"option",3),b(1),p()),n&2){let e=i.$implicit;g("value",e.value),h(),_e(" ",e.label," ")}}function zg(n,i){if(n&1&&(m(0,"datalist",2),ie(1,Bg,2,2,"option",3,we),p()),n&2){let e=C();g("id",e.listName),h(),re(e.field.options)}}var xt=class extends ce{get listName(){return this.field.options?`${this.field.id}-list`:void 0}};R(xt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(xt)))(t||xt)}})()),R(xt,"\u0275cmp",v({type:xt,selectors:[["preforms-input"]],features:[S],decls:3,vars:15,consts:[[3,"field","control","error"],[1,"preforms-input",3,"id","type","name","pfAria","formControl"],[1,"preforms-datalist",3,"id"],[1,"preforms-datalist-option",3,"value"]],template:function(e,t){e&1&&(m(0,"preforms-form-field",0),F(1,"input",1),z(2,zg,3,1,"datalist",2),p()),e&2&&(g("field",t.field)("control",t.control)("error",t.error),h(),g("id",t.field.id)("type",t.field.type)("name",t.field.name)("pfAria",t.field.aria)("formControl",t.control),Y("list",t.listName)("multiple",t.field.multiple)("readonly",t.field.readonly)("spellcheck",t.field.spellcheck)("placeholder",t.field.placeholder)("autocomplete",t.field.autocomplete),h(),U(t.field.options?2:-1))},dependencies:[Jt,se,Gr,Wr,_n,pt,ut,zi],encapsulation:2})),xt=$([le({component:"input"})],xt);function Ug(n,i){if(n&1&&(m(0,"label"),F(1,"input",4),m(2,"span",5),b(3),p(),m(4,"span",6),b(5),p()()),n&2){let e=i.$implicit,t=C();ae(t.field.className),h(),g("id",t.field.id)("name",t.field.key)("value",e.value)("formControl",t.control),h(2),j(e.label),h(2),j(e.description)}}function jg(n,i){if(n&1&&(m(0,"small",2),b(1),p()),n&2){let e=C();h(),_e(" ",e.field.hint," ")}}function $g(n,i){if(n&1&&(m(0,"small",3),b(1),p()),n&2){let e=C();h(),_e(" ",e.error," ")}}var Ct=class extends ce{};R(Ct,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(Ct)))(t||Ct)}})()),R(Ct,"\u0275cmp",v({type:Ct,selectors:[["preforms-radio-field"]],features:[S],decls:6,vars:3,consts:[[1,"preforms-radio-field-header"],[3,"class"],[1,"preforms-field-hint"],["aria-live","polite",1,"preforms-field-error"],["type","radio",3,"id","name","value","formControl"],[1,"preforms-radio-label"],[1,"preforms-radio-description"]],template:function(e,t){e&1&&(m(0,"strong",0),b(1),p(),ie(2,Ug,6,8,"label",1,we),z(4,jg,2,1,"small",2),z(5,$g,2,1,"small",3)),e&2&&(h(),_e(" ",t.field.label," "),h(),re(t.field.options),h(2),U(t.field.hint?4:-1),h(),U(t.error?5:-1))},dependencies:[se,_n,ic,pt,ut],encapsulation:2})),Ct=$([le({component:"radio"})],Ct);function Hg(n,i){}function Vg(n,i){if(n&1&&(m(0,"option",2),b(1),p()),n&2){let e=C().$implicit;g("value",e.value),h(),j(e.label)}}function qg(n,i){if(n&1&&z(0,Hg,0,0)(1,Vg,2,2,"option",2),n&2){let e=i.$implicit,t=C();U(t.isOptionGroup(e)?0:1)}}var wt=class extends ce{isOptionGroup=om};R(wt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(wt)))(t||wt)}})()),R(wt,"\u0275cmp",v({type:wt,selectors:[["preforms-select"]],features:[S],decls:4,vars:10,consts:[[3,"field","control","error"],[1,"preforms-select-field",3,"id","formControl"],[3,"value"]],template:function(e,t){e&1&&(m(0,"preforms-form-field",0)(1,"select",1),ie(2,qg,2,1,null,null,we),p()()),e&2&&(g("field",t.field)("control",t.control)("error",t.error),h(),g("id",t.field.id)("formControl",t.control),Y("name",t.field.name)("size",t.field.size)("multiple",t.field.multiple)("autofocus",t.field.autofocus)("autocomplete",t.field.autocomplete),h(),re(t.field.options))},dependencies:[se,Gr,Wr,ac,pt,ut,Jt],encapsulation:2})),wt=$([le({component:"select"})],wt);var Et=class extends ce{};R(Et,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(Et)))(t||Et)}})()),R(Et,"\u0275cmp",v({type:Et,selectors:[["preforms-textarea"]],features:[S],decls:3,vars:14,consts:[[3,"field","control","error"],[1,"preforms-textarea",3,"id","formControl","readonly","autofocus","spellcheck"]],template:function(e,t){e&1&&(m(0,"preforms-form-field",0)(1,"textarea",1),b(2,"      "),p()()),e&2&&(g("field",t.field)("control",t.control)("error",t.error),h(),g("id",t.field.id)("formControl",t.control)("readonly",t.field.readonly)("autofocus",t.field.autofocus)("spellcheck",t.field.spellcheck),Y("name",t.field.name)("rows",t.field.rows)("cols",t.field.cols)("wrap",t.field.wrap)("placeholder",t.field.placeholder)("autocapitalize",t.field.autocapitalize))},dependencies:[se,_n,pt,ut,$r,Jt],encapsulation:2})),Et=$([le({component:"textarea"})],Et);var ra=class n{type;icon;field;control;handler;visible;static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,inputs:{type:"type",icon:"icon",field:"field",control:"control",handler:"handler",visible:"visible"}})};function Gg(n,i){if(n&1){let e=ze();Me(0,"button",2),Br("click",function(){xe(e);let r=C(2);return Ce(r.handler())}),b(1),Be()}if(n&2){let e=C(2);Y("title",e.icon.title)("command",e.icon.command)("commandfor",e.icon.commandfor),h(),_e(" ",e.icon.name," ")}}function Wg(n,i){if(n&1&&(Me(0,"span",1),b(1),Be()),n&2){let e=C(2);Y("title",e.icon.title),h(),_e(" ",e.icon.name," ")}}function Qg(n,i){if(n&1&&z(0,Gg,2,4,"button",0)(1,Wg,2,2,"span",1),n&2){let e=C();U(e.type==="button"?0:1)}}var Nn=class n extends ra{static \u0275fac=(()=>{let i;return function(t){return(i||(i=I(n)))(t||n)}})();static \u0275cmp=v({type:n,selectors:[["preforms-icon"]],features:[S],decls:1,vars:1,consts:[["type","button",1,"preforms-icon"],[1,"preforms-icon"],["type","button",1,"preforms-icon",3,"click"]],template:function(e,t){e&1&&z(0,Qg,2,1),e&2&&U(t.visible()?0:-1)},encapsulation:2})};var Ft=class extends ce{};R(Ft,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(Ft)))(t||Ft)}})()),R(Ft,"\u0275cmp",v({type:Ft,selectors:[["preforms-checkbox"]],features:[S],decls:6,vars:5,consts:[["type","checkbox",3,"formControl"],[1,"preforms-checkbox-label"],[1,"preforms-checkbox-description"]],template:function(e,t){e&1&&(m(0,"label"),F(1,"input",0),m(2,"span",1),b(3),p(),m(4,"span",2),b(5),p()()),e&2&&(ae(t.field.className),h(),g("formControl",t.control),h(2),j(t.field.label),h(2),j(t.field.description))},dependencies:[se,Jl,pt,ut],encapsulation:2})),Ft=$([le({component:"checkbox"})],Ft);var Tt=class extends ce{get listName(){return this.field.options?`${this.field.id}-list`:void 0}};R(Tt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(Tt)))(t||Tt)}})()),R(Tt,"\u0275cmp",v({type:Tt,selectors:[["preforms-number"]],features:[S],decls:2,vars:13,consts:[[3,"field","control","error"],["type","number",1,"preforms-input",3,"id","name","pfAria","formControl"]],template:function(e,t){e&1&&(m(0,"preforms-form-field",0),F(1,"input",1),p()),e&2&&(g("field",t.field)("control",t.control)("error",t.error),h(),g("id",t.field.id)("name",t.field.name)("pfAria",t.field.aria)("formControl",t.control),Y("list",t.listName)("step",t.field.step)("readonly",t.field.readonly)("autofocus",t.field.autofocus)("placeholder",t.field.placeholder)("autocomplete",t.field.autocomplete))},dependencies:[Jt,se,_n,nc,pt,ut,zi],encapsulation:2})),Tt=$([le({component:"number"})],Tt);function Kg(n,i){if(n===i)return!0;if(n.includes("[*]")){let e=n.replace("[*]","");return i.startsWith(e+"[")}return!1}var ot=class extends ce{output=null;formService=c(si);ngOnInit(){this.calculate()}onInput(i){this.field.for.some(t=>Kg(t,i.id))&&this.calculate()}calculate(){if(this.field.disabled)return;let i=this.formService.getValues();if(this.field.calculation)try{let t=new Function("data",`with(data){ return (${this.field.calculation}); }`)(i);this.control.setValue(t,{emitEvent:!1}),this.output!==t&&this.emit("change"),this.output=t}catch(e){console.error("Error evaluating output calculation",e),this.output=null}}};R(ot,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(ot)))(t||ot)}})()),R(ot,"\u0275cmp",v({type:ot,selectors:[["preforms-output"]],features:[S],decls:4,vars:5,consts:[[3,"for"]],template:function(e,t){e&1&&(Me(0,"label"),b(1),Me(2,"output",0),b(3),Be()()),e&2&&(ae(t.field.className),h(),_e(" ",t.field.label," "),h(),jt("htmlFor",t.field.for.join(",")),h(),j(t.output))},dependencies:[se],encapsulation:2})),$([oi({type:"input",field:"*"})],ot.prototype,"onInput",1),ot=$([le({component:"output"})],ot);var de=[Ft,xt,Ct,ot,We,bt,wt,Tt,yt,Et,_t,Nn,pc,vt];var oa=class n{formChange=new x;fields=[new ki({key:"items",label:"Shopping Cart",minItems:1,maxItems:8,addButton:!0,removeButton:!0,value:[{name:"Wireless Mouse",price:25,qty:1}],fields:[new Uo({className:"cart-row",gap:"1rem",fields:[new P({key:"name",placeholder:"Product name",required:!0}),new ge({key:"price",label:"Price",min:1,value:0,required:!0}),new ge({key:"qty",label:"Qty",min:1,value:1,required:!0}),new it({type:"button",label:"Comment",command:"show-modal",commandfor:"comment-dialog[$index]",className:"comment-btn"}),new Rn({key:"totalPrice",calculation:'"$"+(Number(items[$index].price) * Number(items[$index].qty)).toFixed(2)',for:["price[$index]","qty[$index]"],className:"subtotal"}),new Mn({id:"comment-dialog[$index]",fields:[new Zt({key:"comment",rows:5}),new mn([new ne("Save"),new it({label:"Close",type:"button",command:"close",commandfor:"comment-dialog[$index]"})])]})],columns:"1fr 1fr 1fr 1fr"})],aggregates:[Fr.product({field:["price","qty"],value:2e3,operator:"lte",message:"total cannot exceed $2000"}),Fr.unique("name")]}),new Yt({label:"Summary"}),new Rn({key:"total",calculation:`
        "$" + items.reduce(
          (sum, i) => sum + (Number(i.price) * Number(i.qty)),
          0
        )
      `,for:["price[*]","qty[*]","items"]}),new ne({label:"Checkout",className:"checkout-btn"})];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-cart-builder"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[["className","cart-form",3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],styles:[`.cart-form{--bg: #f7f8ff;--card: rgba(255, 255, 255, .82);--text: #11143d;--muted: #667099;--primary: #6c4df6;--primary-dark: #4b34d8;--danger: #ef3f61;--border: rgba(124, 135, 190, .22);--shadow: 0 24px 70px rgba(64, 70, 130, .16);--radius: 24px;max-width:900px}.cart-form .preforms-array-container{overflow:auto}.cart-form .preforms-array-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.cart-form .preforms-array-add{border:0;border-radius:14px;padding:14px 22px;color:#fff;font-weight:700;cursor:pointer;background:linear-gradient(135deg,var(--primary),var(--primary-dark));box-shadow:0 12px 24px #6c4df647}.cart-form .preforms-array-item{display:grid;grid-template-columns:72px 1.4fr 1.2fr 1.2fr 100px;gap:24px;align-items:center;padding:22px;margin-bottom:16px;border:1px solid var(--border);border-radius:18px;min-width:700px}.cart-form .preforms-array-item:nth-child(odd){background:linear-gradient(90deg,#fbf7ff,#fff)}.cart-form .preforms-array-item:nth-child(2n){background:linear-gradient(90deg,#f2f8ff,#fff)}.cart-form .preforms-array-item:nth-child(3n){background:linear-gradient(90deg,#f2fff6,#fff)}.cart-form label{display:block;margin-bottom:10px;font-size:14px;font-weight:700;color:#3f4774}.cart-form input{width:100%;height:52px;border:1px solid var(--border);border-radius:12px;padding:0 16px;font-size:16px;outline:none;background:#fff;color:var(--text)}.cart-form input:focus{border-color:var(--primary);box-shadow:0 0 0 4px #6c4df61f}.cart-form .preforms-array-remove{border:0;color:#d9153d;background:transparent;font-size:20px;cursor:pointer}.cart-form .preforms-array-label{text-align:center;font-size:40px;margin:0;font-weight:800;letter-spacing:-.04em}.cart-form input,.cart-form textarea{width:100%}.cart-form .checkout-btn{padding:.5rem .875rem;border:1px solid #d0d7de;border-radius:18px;background:linear-gradient(135deg,#ff0,orange);border:1px solid rgba(240,190,110,.25)}.cart-form .checkout-btn:active{transform:scale(.9)}.cart-form .checkout-btn:hover{background:#f6f8fa;border-color:#8c959f}.cart-form .comment-btn{padding:18px;border-radius:18px;border:1px solid var(--border);background:#ffffffb3;margin-top:30px;cursor:pointer}.cart-form output[formcontrolname=cartTotal]{font-size:1.4rem;font-weight:700;display:block;text-align:right;margin-top:1rem}
`],encapsulation:2})};var dm={id:"cart-builder",title:"Dynamic FieldArray",description:`
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
`,category:"Advanced Components",component:oa,assets:[{label:"TS",language:"typescript",content:im},{label:"SCSS",language:"css",content:rm}]};var mm=`import { Component, EventEmitter, Output } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
\r
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FormFieldEventType, SubmitButton, TriggerAction, UserName } from '@preforms/ts';\r
import { of } from 'rxjs';\r
\r
@Component({\r
  selector: 'app-async-validate',\r
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
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
`;var aa=class n{formChange=new x;fields=[new Li({triggers:[{on:"change",action:"async_validate",fetchUrl:"/api/check-username/$value"}],required:!0}),new ne];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-async-validate"]],outputs:{formChange:"formChange"},features:[B([de,{provide:yn,useValue:i=>{if(i.includes("/check-username/")){let t=i.split("/").pop()==="admin"?{taken:{message:"already taken"}}:null;return T([{errors:t,id:"username"}])}return T([])}}])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var um={id:"async-validation",title:"Async Validation",description:`
Demonstrates how to use fetch triggers to perform asynchronous validation.
This example shows a username field that checks availability via an API endpoint
and displays validation hints dynamically.
  `,category:"Reactivity & Validation",component:aa,assets:[{label:"TS",language:"typescript",content:mm}]};var sa=class n{formChange=new x;fields=[new P({key:"name",label:"Full name",placeholder:"John Doe",required:!0}),new Lt({placeholder:"you@example.com"}),new ne("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-basic-form"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var fm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { EmailField, SubmitButton, TextField } from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-basic-form',\r
  template: \` <preforms (submittedData)="logData($event)" [fields]="fields" /> \`,\r
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
`;var hm={id:"basic-form",title:"Basic Form Example",description:"Minimal form with text and email fields to get started quickly.",category:"Getting Started",component:sa,assets:[{label:"TS",language:"typescript",content:fm}]};var gm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
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
  Fieldset,\r
  FirstName,\r
  FormRow,\r
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
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class CommonFieldsComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new FormRow([new FirstName(), new MiddleName(), new LastName()]),\r
\r
    new FullName(),\r
    new Name(),\r
    new UserName(),\r
    new EmailField(),\r
    new PasswordField(),\r
    new PhoneNumber(),\r
    new DateOfBirth(),\r
    new Gender(),\r
    new Fieldset({\r
      label: 'Address',\r
      fields: [new Address()],\r
    }),\r
    new Fieldset({\r
      label: 'Address composed',\r
      fields: [new Street(), new City(), new State(), new PostalCode(), new Country()],\r
    }),\r
    new CurrencyField(),\r
    new Description(),\r
\r
    new FormRow([new SubmitButton(), new ResetButton(), new ConfirmButton()]),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var la=class n{formChange=new x;fields=[new mn([new Wo,new ea,new Ko]),new Qo,new Zo,new Li,new Lt,new rt,new Yo,new qo,new Jo,new In({label:"Address",fields:[new $o]}),new In({label:"Address composed",fields:[new Oi,new Ai,new Pi,new Ni,new Ri]}),new Vo,new Go,new mn([new ne,new Xo,new Ho])];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-common-fields"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var bm={id:"common-fields",title:"Common Fields",description:`Displays all the prebuilt common fields available in the library, including
    name, email, address, phone, date of birth, gender, currency, description, and action buttons.
    Ideal for reference and testing.`,category:"Form Fields",component:la,assets:[{label:"TS",language:"typescript",content:gm}]};var vm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
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
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
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
`;var ca=class n{formChange=new x;fields=[new rt({minLength:8,hint:"At least 8 characters"}),new rt({key:"confirmPassword",label:"Confirm password",triggers:[{on:"input",action:"validate",validation:{operator:"eq",compareTo:"password",message:"must match password"}}]}),new Lt({placeholder:"you@example.com"}),new Lt({key:"confirmEmail",label:"Confirm Email",triggers:[{on:"input",action:"validate",validation:{operator:"eq",compareTo:"email",message:"must match email"}}]}),new Kn({key:"startDate",label:"Start date"}),new Kn({key:"endDate",label:"End date",triggers:[{on:"change",action:"validate",validation:{operator:"gt",compareTo:"startDate",message:"must be after start date"},sourceField:["startDate","endDate"]}]}),new ge({key:"orderAmount",label:"Order amount ($)",min:0}),new ge({key:"discount",label:"Discount ($)",triggers:[{on:"blur",action:"validate",validation:{operator:"lt",compareTo:"orderAmount",message:"cannot exceed order amount"},sourceField:["orderAmount","discount"]}]}),new ne("Create Account")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-cross-validation-form"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var ym={id:"cross-field-validation",title:"Cross Field Validation",description:"Demonstrates real-world validation scenarios such as password confirmation, email confirmation, date ranges, and order validation.",category:"Reactivity & Validation",component:ca,assets:[{label:"TS",language:"typescript",content:vm}]};var _m=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { PasswordField, SubmitButton } from '@preforms/ts';\r
import { PasswordStrengthField } from './PasswordStrengthField';\r
import { PasswordStenghtFieldComponent } from './password-strength';\r
\r
@Component({\r
  selector: 'app-extensible-form',\r
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
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
`;var xm=`import { Component } from '@angular/core';\r
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
`;var Cm=`import { InputFieldConfigDerived, NumberField } from '@preforms/ts';\r
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
`;var da=class extends ge{component="password-strength";low;high;optimum;constructor(i){super(i),this.low=i.low,this.high=i.high,this.optimum=i.optimum}};var at=class extends ce{hint="\u2014";get score(){return this.control.value??0}handlePasswordChange(i){let e=this.calculateStrength(i.value);this.control.setValue(e,{emitEvent:!1}),this.hint=this.getHint(e)}calculateStrength(i){let e=0;return i?(i.length>=8&&e++,/[0-9]/.test(i)&&e++,/[A-Z]/.test(i)&&e++,/[^A-Za-z0-9]/.test(i)&&e++,Math.min(e,4)):0}getHint(i){return["Very weak","Weak","Okay","Good","Strong"][i]}};R(at,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(at)))(t||at)}})()),R(at,"\u0275cmp",v({type:at,selectors:[["app-pass-stenght-field"]],features:[S],decls:5,vars:7,consts:[[1,"small",2,"margin-top","0.4rem"],[3,"min","max","value","low","high","optimum"],[1,"hint"]],template:function(e,t){e&1&&(Me(0,"div",0),b(1," Strength: "),ti(2,"meter",1),Me(3,"span",2),b(4),Be()()),e&2&&(h(2),jt("min",t.field.min)("max",t.field.max)("value",t.score)("low",t.field.low)("high",t.field.high)("optimum",t.field.optimum),h(2),_e(" ",t.hint))},dependencies:[se],encapsulation:2})),$([oi({type:"input",field:"password"})],at.prototype,"handlePasswordChange",1),at=$([le({component:"password-strength"})],at);var ma=class n{formChange=new x;fields=[new rt({key:"password",hint:"At least 8 characters"}),new da({key:"passwordStrength",min:0,max:4,low:1,high:4,optimum:4}),new ne("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-extensible-form"]],outputs:{formChange:"formChange"},features:[B([de,at])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var wm={id:"extensibility",title:"Custom Fields",description:"Shows custom fields like PasswordStrengthField and how to use the event system.",category:"Extensibility",component:ma,assets:[{label:"TS",language:"typescript",content:_m},{label:"Custom Component",language:"typescript",content:xm},{label:"Extened Field",language:"typescript",content:Cm}]};var ib=new N("MAT_BUTTON_CONFIG");function Em(n){return n==null?void 0:bn(n)}var Fm=(()=>{class n{_elementRef=c(te);_ngZone=c(fe);_animationsDisabled=ft();_config=c(ib,{optional:!0});_focusMonitor=c(zn);_cleanupClick;_renderer=c(kt);_rippleLoader=c(kc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(sn).load(ci);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(Y("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),ae(r.color?"mat-"+r.color:""),oe("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",X],disabled:[2,"disabled","disabled",X],ariaDisabled:[2,"aria-disabled","ariaDisabled",X],disabledInteractive:[2,"disabledInteractive","disabledInteractive",X],tabIndex:[2,"tabIndex","tabIndex",Em],_tabindex:[2,"tabindex","_tabindex",Em]}})}return n})();var rb=["matButton",""],ob=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ab=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Tm=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Dm=(()=>{class n extends Fm{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=sb(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Tm.get(this._appearance):null,o=Tm.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[S],attrs:rb,ngContentSelectors:ab,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(ye(ob),ti(0,"span",0),he(1),Me(2,"span",1),he(3,1),Be(),he(4,2),ti(5,"span",2)(6,"span",3)),t&2&&oe("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base{text-decoration:none}.mat-mdc-button-base .mat-icon{min-height:fit-content;flex-shrink:0}@media(hover: none){.mat-mdc-button-base:hover>span.mat-mdc-button-persistent-ripple::before{opacity:0}}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-button-text-horizontal-padding, 12px);height:var(--mat-button-text-container-height, 40px);font-family:var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-text-label-text-transform);font-weight:var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight))}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mat-button-text-container-shape, var(--mat-sys-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mat-button-text-label-text-color, var(--mat-sys-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-button-text-with-icon-horizontal-padding, 16px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-state-layer-color, var(--mat-sys-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-text-touch-target-size, 48px);display:var(--mat-button-text-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-filled-container-height, 40px);font-family:var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-filled-label-text-transform);font-weight:var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-filled-horizontal-padding, 24px)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-unelevated-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-filled-touch-target-size, 48px);display:var(--mat-button-filled-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));background-color:var(--mat-button-filled-container-color, var(--mat-sys-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mat-button-filled-container-shape, var(--mat-sys-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);box-shadow:var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));height:var(--mat-button-protected-container-height, 40px);font-family:var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-protected-label-text-transform);font-weight:var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-protected-horizontal-padding, 24px)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-state-layer-color, var(--mat-sys-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-raised-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-raised-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-protected-touch-target-size, 48px);display:var(--mat-button-protected-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-raised-button:not(:disabled){color:var(--mat-button-protected-label-text-color, var(--mat-sys-primary));background-color:var(--mat-button-protected-container-color, var(--mat-sys-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mat-button-protected-container-shape, var(--mat-sys-corner-full))}@media(hover: hover){.mat-mdc-raised-button:hover{box-shadow:var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2))}}.mat-mdc-raised-button:focus{box-shadow:var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-outlined-container-height, 40px);font-family:var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-outlined-label-text-transform);font-weight:var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));border-radius:var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));border-width:var(--mat-button-outlined-outline-width, 1px);padding:0 var(--mat-button-outlined-horizontal-padding, 24px)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-outlined-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-outlined-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-outlined-touch-target-size, 48px);display:var(--mat-button-outlined-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-outlined-button:not(:disabled){color:var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));border-color:var(--mat-button-outlined-outline-color, var(--mat-sys-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-tonal-container-height, 40px);font-family:var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-tonal-label-text-transform);font-weight:var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-tonal-horizontal-padding, 24px)}.mat-tonal-button:not(:disabled){color:var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container))}.mat-tonal-button,.mat-tonal-button .mdc-button__ripple{border-radius:var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full))}.mat-tonal-button[disabled],.mat-tonal-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-tonal-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}[dir=rtl] .mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}.mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}[dir=rtl] .mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}.mat-tonal-button .mat-ripple-element{background-color:var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-tonal-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-tonal-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-tonal-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-tonal-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-tonal-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-tonal-touch-target-size, 48px);display:var(--mat-button-tonal-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button,.mat-tonal-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon,.mat-tonal-button .mdc-button__label,.mat-tonal-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-focus-indicator,.mat-mdc-unelevated-button .mat-focus-indicator,.mat-mdc-raised-button .mat-focus-indicator,.mat-mdc-outlined-button .mat-focus-indicator,.mat-tonal-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-unelevated-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-raised-button:focus-visible>.mat-focus-indicator::before,.mat-mdc-outlined-button:focus-visible>.mat-focus-indicator::before,.mat-tonal-button:focus-visible>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable,.mat-tonal-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon,.mat-tonal-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-focus-indicator::before,.mat-tonal-button .mat-focus-indicator::before,.mat-mdc-raised-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}
`,`@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}
`],encapsulation:2,changeDetection:0})}return n})();function sb(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Sm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[to,qe]})}return n})();var cb=["*"];function db(n,i){n&1&&he(0)}var Zs=(()=>{class n{_elementRef=c(te);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Ys=(()=>{class n{template=c(mt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var Yn={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},mb=new N("STEPPER_GLOBAL_OPTIONS"),pa=(()=>{class n{_stepperOptions;_stepper=c(Ui);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Z(!1);interactedStream=new x;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Z(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Z(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=Z(null);index=Z(-1);isSelected=Ht(()=>this._stepper.selectedIndex===this.index());indicatorType=Ht(()=>{let e=this.isSelected(),t=this.completed,r=this._state()??Yn.NUMBER,o=this._editable();return this._showError()&&this.hasError&&!e?Yn.ERROR:this._displayDefaultIndicatorType?!t||e?Yn.NUMBER:o?Yn.EDIT:Yn.DONE:t&&!e?Yn.DONE:t&&e?r:o&&e?Yn.EDIT:r});isNavigable=Ht(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Z(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=c(mb,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["cdk-step"]],contentQueries:function(t,r,o){if(t&1&&Mt(o,Ys,5)(o,ec,5),t&2){let a;V(a=q())&&(r.stepLabel=a.first),V(a=q())&&(r._childForms=a)}},viewQuery:function(t,r){if(t&1&&Ye(mt,7),t&2){let o;V(o=q())&&(r.content=o.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",X],optional:[2,"optional","optional",X],completed:[2,"completed","completed",X],hasError:[2,"hasError","hasError",X]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[dt],ngContentSelectors:cb,decls:1,vars:0,template:function(t,r){t&1&&(ye(),Lr(0,db,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),Ui=(()=>{class n{_dir=c(Gi,{optional:!0});_changeDetectorRef=c(Xe);_elementRef=c(te);_destroyed=new H;_keyManager;_steps;steps=new zt;_stepHeader;_sortedHeaders=new zt;linear=!1;get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Z(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new x;selectedIndexChange=new x;_groupId=c(Ki).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(Ke(this._steps),ue(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,r)=>t.index.set(r)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Ke(this._stepHeader),ue(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,r)=>t._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Un(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:T()).pipe(Ke(this._layoutDirection()),ue(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),r=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:r,selectedStep:t[e],previouslySelectedStep:t[r]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=pi(e),r=e.keyCode,o=this._keyManager;o?.activeItemIndex!=null&&!t&&(r===32||r===13)?(this.selectedIndex=o.activeItemIndex,e.preventDefault()):o?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let r=t.stepControl;return(r?r.invalid||r.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=Ua();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,r,o){if(t&1&&Mt(o,pa,5)(o,Zs,5),t&2){let a;V(a=q())&&(r._steps=a),V(a=q())&&(r._stepHeader=a)}},inputs:{linear:[2,"linear","linear",X],selectedIndex:[2,"selectedIndex","selectedIndex",bn],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),km=(()=>{class n{_stepper=c(Ui);type="submit";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,r){t&1&&D("click",function(){return r._stepper.next()}),t&2&&jt("type",r.type)},inputs:{type:"type"}})}return n})(),Im=(()=>{class n{_stepper=c(Ui);type="button";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,r){t&1&&D("click",function(){return r._stepper.previous()}),t&2&&jt("type",r.type)},inputs:{type:"type"}})}return n})(),Mm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[qe]})}return n})();function Rm(n){return Error(`Unable to find icon with the name "${n}"`)}function ub(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Am(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Nm(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var pn=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Om=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new pn(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(on.HTML,r);if(!a)throw Nm(r);let s=mi(a);return this._addSvgIconConfig(e,t,new pn("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new pn(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(on.HTML,t);if(!o)throw Nm(t);let a=mi(o);return this._addSvgIconSetConfig(e,new pn("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(on.RESOURCE_URL,e);if(!t)throw Am(e);let r=this._cachedIconsByUrl.get(t);return r?T(ua(r)):this._loadSvgIconFromConfig(new pn(e,null)).pipe(ke(o=>this._cachedIconsByUrl.set(t,o)),ee(o=>ua(o)))}getNamedSvgIcon(e,t=""){let r=Pm(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Dr(Rm(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?T(ua(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ee(t=>ua(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return T(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe($i(s=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(on.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(u)),T(null)})));return al(o).pipe(ee(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Rm(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ke(t=>e.svgText=t),ee(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?T(null):this._fetchIcon(e).pipe(ke(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(mi("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(mi("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw ub();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(on.RESOURCE_URL,t);if(!a)throw Am(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ee(u=>mi(u)),Mr(()=>this._inProgressUrlFetches.delete(a)),ll());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Pm(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return fb(o)?new pn(o.url,null,o.options):new pn(o,null)}}static \u0275fac=function(t){return new(t||n)(St(vn,8),St(Hr),St(ct,8),St(Nr))};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ua(n){return n.cloneNode(!0)}function Pm(n,i){return n+":"+i}function fb(n){return!!(n.url&&n.options)}var hb=["*"],gb=new N("MAT_ICON_DEFAULT_OPTIONS"),bb=new N("mat-icon-location",{providedIn:"root",factory:()=>{let n=c(ct),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Lm=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],vb=Lm.map(n=>`[${n}]`).join(", "),yb=/^url\(['"]?#(.*?)['"]?\)$/,Bm=(()=>{class n{_elementRef=c(te);_iconRegistry=c(Om);_location=c(bb);_errorHandler=c(Nr);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Le.EMPTY;constructor(){let e=c(new qi("aria-hidden"),{optional:!0}),t=c(gb,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(vb),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Lm.forEach(a=>{let s=t[o],l=s.getAttribute(a),u=l?l.match(yb):null;if(u){let f=r.get(s);f||(f=[],r.set(s,f)),f.push({name:a,value:u[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(hn(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(Y("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),ae(r.color?"mat-"+r.color:""),oe("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",X],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:hb,decls:1,vars:0,template:function(t,r){t&1&&(ye(),he(0))},styles:[`mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}
`],encapsulation:2,changeDetection:0})}return n})(),zm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({imports:[qe]})}return n})();var _b=(n,i,e)=>({index:n,active:i,optional:e});function xb(n,i){if(n&1&&Ut(0,2),n&2){let e=C();g("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",Pl(2,_b,e.index,e.active,e.optional))}}function Cb(n,i){if(n&1&&(m(0,"span",7),b(1),p()),n&2){let e=C(2);h(),j(e._getDefaultTextForState(e.state))}}function wb(n,i){if(n&1&&(m(0,"span",8),b(1),p()),n&2){let e=C(3);h(),j(e._intl.completedLabel)}}function Eb(n,i){if(n&1&&(m(0,"span",8),b(1),p()),n&2){let e=C(3);h(),j(e._intl.editableLabel)}}function Fb(n,i){if(n&1&&(z(0,wb,2,1,"span",8)(1,Eb,2,1,"span",8),m(2,"mat-icon",7),b(3),p()),n&2){let e=C(2);U(e.state==="done"?0:e.state==="edit"?1:-1),h(3),j(e._getDefaultTextForState(e.state))}}function Tb(n,i){if(n&1&&z(0,Cb,2,1,"span",7)(1,Fb,4,2),n&2){let e,t=C();U((e=t.state)==="number"?0:1)}}function Db(n,i){n&1&&(m(0,"div",4),Ut(1,9),p()),n&2&&(h(),g("ngTemplateOutlet",i.template))}function Sb(n,i){if(n&1&&(m(0,"div",4),b(1),p()),n&2){let e=C();h(),j(e.label)}}function kb(n,i){if(n&1&&(m(0,"div",5),b(1),p()),n&2){let e=C();h(),j(e._intl.optionalLabel)}}function Ib(n,i){if(n&1&&(m(0,"div",6),b(1),p()),n&2){let e=C();h(),j(e.errorMessage)}}var Um=["*"];function Mb(n,i){}function Rb(n,i){if(n&1&&(he(0),It(1,Mb,0,0,"ng-template",0)),n&2){let e=C();h(),g("cdkPortalOutlet",e._portal)}}var Ab=["animatedContainer"],jm=n=>({steps:n}),$m=n=>({step:n});function Nb(n,i){n&1&&he(0)}function Pb(n,i){if(n&1&&(m(0,"div",5),Ut(1,9)(2,6),p()),n&2){let e=C(2),t=$t(6);h(),g("ngTemplateOutlet",e.headerPrefix()),h(),g("ngTemplateOutlet",t)("ngTemplateOutletContext",Te(3,jm,e.steps))}}function Ob(n,i){if(n&1&&Ut(0,6),n&2){let e=C(2),t=$t(6);g("ngTemplateOutlet",t)("ngTemplateOutletContext",Te(2,jm,e.steps))}}function Lb(n,i){if(n&1&&(m(0,"div",10,2),Ut(2,9),p()),n&2){let e=i.$implicit,t=i.$index,r=C(2);ae("mat-horizontal-stepper-content-"+r._getAnimationDirection(t)),g("id",r._getStepContentId(t)),Y("aria-labelledby",r._getStepLabelId(t))("inert",r.selectedIndex===t?null:""),h(2),g("ngTemplateOutlet",e.content)}}function Bb(n,i){if(n&1&&(m(0,"div",3),z(1,Pb,3,5,"div",5)(2,Ob,1,4,"ng-container",6),m(3,"div",7),ie(4,Lb,3,6,"div",8,On),p()()),n&2){let e=C();h(),U(e.headerPrefix()?1:2),h(3),re(e.steps)}}function zb(n,i){if(n&1&&Ut(0,9),n&2){let e=C(2);g("ngTemplateOutlet",e.headerPrefix())}}function Ub(n,i){if(n&1&&(m(0,"div",11),Ut(1,6),m(2,"div",12,2)(4,"div",13)(5,"div",14),Ut(6,9),p()()()()),n&2){let e=i.$implicit,t=i.$index,r=i.$index,o=i.$count,a=C(2),s=$t(4);h(),g("ngTemplateOutlet",s)("ngTemplateOutletContext",Te(10,$m,e)),h(),oe("mat-stepper-vertical-line",r!==o-1)("mat-vertical-content-container-active",a.selectedIndex===t),Y("inert",a.selectedIndex===t?null:""),h(2),g("id",a._getStepContentId(t)),Y("aria-labelledby",a._getStepLabelId(t)),h(2),g("ngTemplateOutlet",e.content)}}function jb(n,i){if(n&1&&(m(0,"div",4),z(1,zb,1,1,"ng-container",9),ie(2,Ub,7,12,"div",11,On),p()),n&2){let e=C();h(),U(e.headerPrefix()?1:-1),h(),re(e.steps)}}function $b(n,i){if(n&1){let e=ze();m(0,"mat-step-header",15),D("click",function(){let r=xe(e).step;return Ce(r.select())})("keydown",function(r){xe(e);let o=C();return Ce(o._onKeydown(r))}),p()}if(n&2){let e=i.step,t=C();oe("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),g("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),Y("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function Hb(n,i){n&1&&F(0,"div",17)}function Vb(n,i){if(n&1&&(Ut(0,6),z(1,Hb,1,0,"div",17)),n&2){let e=i.$implicit,t=i.$index,r=i.$count;C(2);let o=$t(4);g("ngTemplateOutlet",o)("ngTemplateOutletContext",Te(3,$m,e)),h(),U(t!==r-1?1:-1)}}function qb(n,i){if(n&1&&(m(0,"div",16),ie(1,Vb,2,5,null,null,On),p()),n&2){let e=i.steps;h(),re(e)}}var Tr=(()=>{class n extends Ys{static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["","matStepLabel",""]],features:[S]})}return n})(),Gb=(()=>{class n{changes=new H;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xs=(()=>{class n extends Zs{_intl=c(Gb);_focusMonitor=c(zn);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=c(sn);e.load(ci),e.load(Cc);let t=c(Xe);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof Tr?null:this.label}_templateLabel(){return this.label instanceof Tr?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,r){t&2&&(ae("mat-"+(r.color||"primary")),oe("mat-step-header-empty-label",r._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[S],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,r){if(t&1&&(F(0,"div",0),m(1,"div")(2,"div",1),z(3,xb,1,6,"ng-container",2)(4,Tb,2,1),p()(),m(5,"div",3),z(6,Db,2,1,"div",4)(7,Sb,2,1,"div",4),z(8,kb,2,1,"div",5),z(9,Ib,2,1,"div",6),p()),t&2){let o;g("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disableRipple),h(),ae(Al("mat-step-icon-state-",r.state," mat-step-icon")),oe("mat-step-icon-selected",r.selected),h(2),U(r.iconOverrides&&r.iconOverrides[r.state]?3:4),h(2),oe("mat-step-label-active",r.active)("mat-step-label-selected",r.selected)("mat-step-label-error",r.state=="error"),h(),U((o=r._templateLabel())?6:r._stringLabel()?7:-1,o),h(2),U(r._hasOptionalLabel()?8:-1),h(),U(r._hasErrorLabel()?9:-1)}},dependencies:[tr,Ba,Bm],styles:[`.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus-visible .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-header-empty-label .mat-step-label{min-width:0}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}
`],encapsulation:2,changeDetection:0})}return n})(),Wb=(()=>{class n{templateRef=c(mt);name;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),Qb=(()=>{class n{_template=c(mt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),Js=(()=>{class n extends pa{_errorStateMatcher=c(Kr,{skipSelf:!0});_viewContainerRef=c(Ze);_isSelected=Le.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Ae(()=>this._stepper.selectionChange.pipe(ee(e=>e.selectedStep===this),Ke(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new kn(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let r=this._errorStateMatcher.isErrorState(e,t),o=!!(e&&e.invalid&&this.interacted);return r||o}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275cmp=v({type:n,selectors:[["mat-step"]],contentQueries:function(t,r,o){if(t&1&&Mt(o,Tr,5)(o,Qb,5),t&2){let a;V(a=q())&&(r.stepLabel=a.first),V(a=q())&&(r._lazyContent=a.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[B([{provide:Kr,useExisting:n},{provide:pa,useExisting:n}]),S],ngContentSelectors:Um,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,r){t&1&&(ye(),It(0,Rb,2,1,"ng-template"))},dependencies:[Er],encapsulation:2,changeDetection:0})}return n})(),el=(()=>{class n extends Ui{_ngZone=c(fe);_renderer=c(kt);_animationsDisabled=ft();_cleanupTransition;_isAnimating=Z(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new zt;_icons;animationDone=new x;disableRipple=!1;color;labelPosition="end";headerPosition="top";headerPrefix=Ur(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!c(Ue).isBrowser;constructor(){super();let t=c(te).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(ue(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(ue(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(Ke(null),ue(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let r=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),o=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(r||o)&&this._animatedContainers.find(s=>s.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,r,o){if(t&1&&Mt(o,Js,5)(o,Wb,5),t&2){let a;V(a=q())&&(r._steps=a),V(a=q())&&(r._icons=a)}},viewQuery:function(t,r){if(t&1&&Ye(Xs,5)(Ab,5),t&2){let o;V(o=q())&&(r._stepHeader=o),V(o=q())&&(r._animatedContainers=o)}},hostVars:14,hostBindings:function(t,r){t&2&&(zr("--mat-stepper-animation-duration",r._getAnimationDuration()),oe("mat-stepper-horizontal",r.orientation==="horizontal")("mat-stepper-vertical",r.orientation==="vertical")("mat-stepper-label-position-end",r.orientation==="horizontal"&&r.labelPosition=="end")("mat-stepper-label-position-bottom",r.orientation==="horizontal"&&r.labelPosition=="bottom")("mat-stepper-header-position-bottom",r.headerPosition==="bottom")("mat-stepper-animating",r._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[B([{provide:Ui,useExisting:n}]),S],ngContentSelectors:Um,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,r){if(t&1&&(ye(),z(0,Nb,1,0),z(1,Bb,6,1,"div",3)(2,jb,4,1,"div",4),It(3,$b,1,27,"ng-template",null,0,Vi)(5,qb,3,0,"ng-template",null,1,Vi)),t&2){let o;U(r._isServer?0:-1),h(),U((o=r.orientation)==="horizontal"?1:o==="vertical"?2:-1)}},dependencies:[Ba,Xs],styles:[`.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-wrapper{align-items:center;display:flex}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center;flex-grow:1}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon{margin:0}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}
`],encapsulation:2,changeDetection:0})}return n})(),Hm=(()=>{class n extends km{static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,r){t&2&&jt("type",r.type)},features:[S]})}return n})(),Vm=(()=>{class n extends Im{static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(n)))(r||n)}})();static \u0275dir=O({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,r){t&2&&jt("type",r.type)},features:[S]})}return n})(),qm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=be({providers:[Kr],imports:[Gd,Mm,zm,to,el,Xs,qe]})}return n})();function Zb(n,i){n&1&&(m(0,"button",4),b(1,"Back"),p())}function Yb(n,i){if(n&1&&(m(0,"mat-step",2),F(1,"preforms-group",6),m(2,"div"),z(3,Zb,2,0,"button",4),m(4,"button",7),b(5,"Next"),p()()()),n&2){let e=i.$implicit,t=i.$index,r=C();g("stepControl",r.formGroup(e.key))("label",e.label),h(),g("fields",e.fields)("control",r.formGroup(e.key)),h(2),U(t?3:-1)}}function Xb(n,i){n&1&&b(0,"Done")}var Dt=class extends ce{formGroup(i){return this.control.get(i)}};R(Dt,"\u0275fac",(()=>{let i;return function(t){return(i||(i=I(Dt)))(t||Dt)}})()),R(Dt,"\u0275cmp",v({type:Dt,selectors:[["app-wizard-field"]],features:[S],decls:13,vars:1,consts:[["stepper",""],["orientation","vertical",3,"linear"],[3,"stepControl","label"],["matStepLabel",""],["matButton","","matStepperPrevious",""],["matButton","",3,"click"],[3,"fields","control"],["matButton","","matStepperNext",""]],template:function(e,t){if(e&1){let r=ze();m(0,"mat-stepper",1,0),ie(2,Yb,6,5,"mat-step",2,we),m(4,"mat-step"),It(5,Xb,1,0,"ng-template",3),m(6,"p"),b(7,"You are now done."),p(),m(8,"div")(9,"button",4),b(10,"Back"),p(),m(11,"button",5),D("click",function(){xe(r);let a=$t(1);return Ce(a.reset())}),b(12,"Reset"),p()()()()}e&2&&(g("linear",!0),h(2),re(t.field.fields))},dependencies:[Sm,Dm,qm,Js,Tr,el,Hm,Vm,Cn],encapsulation:2})),Dt=$([le({component:"wizard"})],Dt);var fa=class extends Ge{component="wizard";fields;constructor(i){super(i),this.fields=i.fields}};var ha=class n{formChange=new x;fields=[new fa({fields:[new dn({key:"profile",description:"Fill out your name",fields:[new P({key:"name",placeholder:"Last name, First name",required:!0})]}),new dn({key:"shipping",description:"Fill out your address",fields:[new P({key:"address",placeholder:"Ex. 1 Main St, New York, NY",required:!0})]})]})];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-extensible-form-wizard"]],outputs:{formChange:"formChange"},features:[B([de,Dt])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var Gm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FieldGroup, TextField } from '@preforms/ts';\r
\r
import { WizardFieldComponent } from './wizard.component';\r
import { WizardField } from './wizard.field';\r
\r
@Component({\r
  selector: 'app-extensible-form-wizard',\r
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
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
`;var Wm=`import { Component } from '@angular/core';\r
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
`;var Qm=`<mat-stepper #stepper [linear]="true" orientation="vertical">\r
  @for (field of field.fields; track $index; let i = $index) {\r
    <mat-step [stepControl]="formGroup(field.key)" [label]="field.label">\r
      <preforms-group [fields]="field.fields" [control]="formGroup(field.key)" />\r
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
`;var Km=`import { FieldGroup, FieldWrapper, FieldWrapperConfig } from '@preforms/ts';\r
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
`;var Zm={id:"extensible-wizard",title:"Wizard Form",description:"Demonstrates how the form engine can be extended with custom fields. This example implements a WizardField component that renders multi-step form sections.",category:"Examples",component:ha,assets:[{label:"TS",language:"typescript",content:Gm},{label:"wizard.component.ts",language:"typescript",content:Wm},{label:"wizard.component.html",language:"html",content:Qm},{label:"wizard.field.ts",language:"typescript",content:Km}]};var Ym=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
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
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
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
`;var ga=class n{formChange=new x;fields=[new Oe({key:"product",label:"Select Product",options:[{label:"Product A",value:"productA"},{label:"Product B",value:"productB"}],triggers:[{on:"change",action:"fetch",fetchUrl:"/api/forms/$value",mode:"replace"}]}),new P({key:"productA_feature",label:"Feature A",placeholder:"Enter feature A",required:!0}),new ge({key:"productA_quantity",label:"Quantity",min:1,value:1}),new ne];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-dynamic-form-fetch"]],outputs:{formChange:"formChange"},features:[B([de,{provide:yn,useValue:i=>{let e=i.split("/").pop(),t=new Oe({key:"product",label:"Select Product",value:e,options:[{label:"Product A",value:"productA"},{label:"Product B",value:"productB"}],triggers:[{on:"change",action:"fetch",fetchUrl:"/api/forms/$value",mode:"replace"}]});return e==="productA"?T([t,new P({key:"productA_feature",label:"Feature A",placeholder:"Enter feature A",required:!0}),new ge({key:"productA_quantity",label:"Quantity",min:1,value:1})]):e==="productB"?T([t,new P({key:"productB_color",label:"Color",placeholder:"Enter color",required:!0}),new ge({key:"productB_units",label:"Units",min:1,value:1})]):T([])}}])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var Xm={id:"dynamic-select-fetch",title:"Fetch Form",description:`
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
  `,category:"Reactivity & Validation",component:ga,assets:[{label:"TS",language:"typescript",content:Ym}]};var ba=class n{formChange=new x;fields=[new P({key:"username",placeholder:"Username",required:!0}),new Lt({key:"email",placeholder:"you@example.com"}),new rt({key:"password",hint:"At least 8 characters"}),new ge({key:"age",min:1,max:120}),new Oe({key:"language",options:[new At({value:"en",label:"English"}),new At({value:"es",label:"Spanish"})]}),new jo("notifications",["email","sms"],["email"]),new Fe({type:"range",key:"volume",min:0,max:100}),new Fe({type:"file",key:"upload"}),new Zt({key:"bio",placeholder:"Short bio",maxLength:280}),new ne("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-form-fields"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var Jm=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  CheckboxGroupField,\r
  EmailField,\r
  FormFieldOption,\r
  InputField,\r
  NumberField,\r
  PasswordField,\r
  SelectField,\r
  SubmitButton,\r
  TextareaField,\r
  TextField,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-form-fields',\r
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
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
`;var ep={id:"form-fields",title:"Form Fields Reference",description:"Shows all built-in fields with quick examples for each type.",category:"Form Fields",component:ba,assets:[{label:"TS",language:"typescript",content:Jm}]};var tp=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
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
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
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
          command: 'show-modal',\r
          commandfor: 'sku-info',\r
        },\r
      ],\r
    }),\r
\r
    new DialogField({\r
      key: 'sku-info',\r
      disabled: true,\r
      closeBtn: true,\r
      width: '400px',\r
      height: '350px',\r
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
`;var np=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
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
`;var va=class n{formChange=new x;fields=[new rt({hint:"At least 8 characters. Use a mix of letters and numbers.",minLength:8,autocomplete:"off",icons:[{name:"\u{1F3B2}",side:"left",action:"generatePassword",title:"Generate a random password"},{name:"\u{1F511}",side:"left",expressions:["field.type = field.type === 'text' ? 'password' : 'text'","icon.name = field.type === 'text' ? '\u{1F441}\uFE0F' : '\u{1F511}'"]}]}),new ge({key:"amount",value:0,min:0,icons:[{name:"\u2795",side:"left",expressions:["field.value++"]},{name:"\u2796",side:"right",expressions:["field.value--"]}]}),new P({key:"search",icons:[{name:"\u274C",side:"left",expressions:["field.value = null"],visible:"field.value"}]}),new P({key:"SKU",placeholder:"Enter unique product SKU",icons:[{name:"\u2139\uFE0F",side:"left",emit:"custom:skuInfoOpen",command:"show-modal",commandfor:"sku-info"}]}),new Mn({key:"sku-info",disabled:!0,closeBtn:!0,width:"400px",height:"350px",fields:[new Je("What is SKU?",2),new Xt(`A SKU is a unique identifier for each product in your inventory. 
           It helps you track stock, manage orders, and avoid duplicate listings.`),new Je("Tips for creating SKUs:",3),new ta(["Keep it short and consistent (e.g., EB-AP-2026)","Avoid spaces or special characters","Use a pattern that reflects product type or brand"])]}),new P({key:"name",icons:[{name:"\u{1F524}",side:"right",action:"uppercase",title:"Uppercase text"}]}),new ne];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-icons-form"]],outputs:{formChange:"formChange"},features:[B([de,{provide:Vr,useValue:Nn}])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var rp={id:"icons-fields",title:"Icons & Input Actions",description:`
Demonstrates interactive field icons. Includes:
- Password show/hide and generate buttons
- Number increment/decrement icons
- Clearable text field
- Info icon triggering a dialog
- Custom event triggers
`,category:"Form Fields",component:va,assets:[{label:"TS",language:"typescript",content:tp},{label:"App Config",language:"typescript",content:np}]};var ya=class extends Ne{constructor(i){super({component:"editor",key:i})}};var _a=class n{formChange=new x;fields=[new ya("blogContent"),new ne("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-lazy-loading"]],outputs:{formChange:"formChange"},decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var op=`import { Component, EventEmitter, Output } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { SubmitButton } from '@preforms/ts';\r
import { EditorField } from './editor';\r
\r
@Component({\r
  selector: 'app-lazy-loading',\r
  template: \` <preforms (submittedData)="logData($event)" [fields]="fields" /> \`,\r
  imports: [DynamicFormComponent],\r
})\r
export class LazyLoadingFieldsComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
  fields = [new EditorField('blogContent'), new SubmitButton('Save')];\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;var ap=`import { Component, OnInit } from '@angular/core';\r
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
}`;var sp=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
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
`;var lp={id:"lazy-loading-fields",title:"Lazy Loaded Fields",description:"Demonstrates lazy-loading custom fields. The editor field component is loaded only when required.",category:"Extensibility",component:_a,assets:[{label:"TS",language:"typescript",content:op},{label:"editor.component.ts",language:"typescript",content:ap},{label:"app.config.ts",language:"typescript",content:sp}]};var xa=class n{formChange=new x;fields=[new ge({key:"id",value:2316,hidden:!0}),new Bi({src:"chickengarlic.jpg",width:"400px"}),new Je("Garlic Knot Chicken Breasts"),new Je("$9.34 \u{1F3F7}\uFE0F",2),new Xt("Tender chicken breast with garlic, rosemary, and a hint of lemon."),new In("Sides Dish",[new Mi({key:"side",options:[new At({value:"na",label:"No Side",description:"$0.00"}),new At({value:"fries",label:"Fries",description:"$5.00"}),new At({value:"rice",label:"Rice",description:"$4.50"})],className:"app-selection",required:!0})]),new In("Cutlery",[new Ii({key:"cutlery",label:"Add cutlery",className:"app-selection"})]),new Zt({key:"notes",placeholder:"it may not be possible to meetall requests"}),new na,new mn({position:"space-between",fields:[new ge({key:"amount",label:"",value:1,readonly:!0,min:1,max:5,icons:[{name:"\u2795",side:"left",action:"increment"},{name:"\u2796",side:"right",action:"decrement"}],className:"amount-control"}),new ne({label:"Add $9.34",className:"primary",triggers:[{on:"change",action:"fetch",fetchUrl:"/api/calculate-price?amount={amount}&side={side}",sourceField:["side","amount"],mode:"patch"}]})]})];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-order-form-demo"]],outputs:{formChange:"formChange"},features:[B([de,{provide:Vr,useValue:Nn},{provide:yn,useValue:i=>{let e=new URLSearchParams(i.split("?")[1]),t=Number(e.get("amount")??1),r=e.get("side"),s=(9.34+({fries:5,rice:4.5}[r]??0))*t;return T([{label:`Add $${s.toFixed(2)}`}])}}])],decls:1,vars:1,consts:[["className","product-form",3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],styles:[`.product-form{max-width:400px}.product-form .app-selection{flex-direction:row;align-items:center}.product-form .app-selection .preforms-radio-label{margin-left:8px}.product-form .app-selection .preforms-radio-description{color:#666;font-size:.9rem;margin-left:auto}.product-form .preforms-textarea{width:100%;border:0;padding:.5rem .6rem}.product-form .preforms-form-field-label{margin-left:10px}.product-form fieldset{border:1px solid #e6e9ef;padding:1rem;border-radius:8px;margin-bottom:1rem}.product-form label{display:flex;flex-direction:column;margin-bottom:.25rem;align-items:start}.product-form .preforms-form-field{border:1px solid #cfd6e3;border-radius:6px}.product-form .preforms-form-field:focus-within{outline:3px solid rgba(99,102,241,.12);border-color:#6366f1}.product-form .preforms-input:focus{outline:none;border:none}.product-form .primary{background-color:#fb0;padding:.6rem 2rem;border:1px solid #cfd6e3;border-radius:25px;font-weight:700}.product-form .amount-control{border:1px solid #cfd6e3;border-radius:25px}.product-form .amount-control .preforms-form-field-row{display:flex}.product-form .amount-control .preforms-input{border:0;width:50px;text-align:center}.product-form .amount-control .preforms-input::-webkit-inner-spin-button{appearance:none}.product-form .amount-control button{background:none;border:none;color:inherit;font:inherit;cursor:pointer;padding:.4rem;height:100%}.product-form .amount-control button:active{background:inherit;scale:.8}.product-form .preforms-radio-header{display:none}
`],encapsulation:2})};var cp=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
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
  FormSpacer,\r
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
  template: \`<preforms\r
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
    new FormSpacer(),\r
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
`;var dp=`.product-form {\r
  max-width: 400px;\r
\r
  .app-selection {\r
    flex-direction: row;\r
    align-items: center;\r
\r
    .preforms-radio-label {\r
      margin-left: 8px;\r
    }\r
\r
    .preforms-radio-description {\r
      color: #666;\r
      font-size: 0.9rem;\r
      margin-left: auto;\r
    }\r
  }\r
\r
  .preforms-textarea {\r
    width: 100%;\r
    border: 0;\r
    padding: 0.5rem 0.6rem;\r
  }\r
\r
  .preforms-form-field-label {\r
    margin-left: 10px;\r
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
  .preforms-input:focus {\r
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
    .preforms-input {\r
      border: 0;\r
      width: 50px;\r
      text-align: center;\r
    }\r
\r
    .preforms-input::-webkit-inner-spin-button {\r
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
  .preforms-radio-header {\r
    display: none;\r
  }\r
}\r
`;var mp=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
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
`;var pp={id:"order-form",title:"Order Form",description:`
  Modern product/order form demo built with @preforms/angular featuring:

  - live price recalculation
  - dynamic submit button text
  - quantity stepper with emoji buttons
  - conditional field visibility/logic
  - fieldsets, rows & dividers
  - product image + rich typography
  - fully declarative field & layout definition

  No handwritten template HTML or reactive forms boilerplate \u2014 everything is defined in clean TypeScript objects.
  `,component:xa,category:"Examples",assets:[{label:"TS",language:"typescript",content:cp},{label:"SCSS",language:"css",content:dp},{label:"App Config",language:"typescript",content:mp}]};var up=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
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
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" />\`,\r
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
`;var Ca=class n{formChange=new x;fields=[new Oe({key:"room",value:"king",label:"Choose a room",options:["king","queen","junior"],required:!0,triggers:[{on:"change",action:"update_state",applyState:{hidden:!0},targetField:["king-title","queen-title","junior-title","king-description","queen-description","junior-description"]},{on:"change",action:"update_state",applyState:{hidden:!1},targetField:["$value-title","$value-description"]}]}),new Yt({label:"Room Details"}),new Je({value:"King Room",id:"king-title"},2),new Je({value:"Queen Room",hidden:!0,id:"queen-title"},2),new Je({value:"Junior Room",hidden:!0,id:"junior-title"},2),new Xt({value:`A majestic retreat designed for travelers who appreciate space and elegance. 
The King Room features a sprawling bed fit for royalty, panoramic city views, 
and an oversized lounge area perfect for relaxing after a day of adventure.`,id:"king-description"}),new Xt({value:`Comfort meets sophistication in the Queen Room. Cozy yet stylish, 
it boasts a plush queen-sized bed, ambient lighting, and curated decor.`,hidden:!0,id:"queen-description"}),new Xt({value:`The Junior Room is compact but clever. Smart furniture and quirky 
design touches make it perfect for travelers who want efficiency with style.`,hidden:!0,id:"junior-description"}),new ne("Book Room")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-room-selection"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var fp={id:"room-selection",title:"Dynamic Content",description:"Shows how triggers can dynamically reveal content based on a selected value. Selecting a room type displays the corresponding title and description.",category:"Reactivity & Validation",component:Ca,assets:[{label:"TS",language:"typescript",content:up}]};var hp=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { SubmitButton, TextField } from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-validation-form',\r
  template: \` <preforms (submittedData)="logData($event)" [fields]="fields" /> \`,\r
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
`;var wa=class n{formChange=new x;fields=[new P({key:"username",hint:"3\u201330 characters. No spaces.",minLength:3,maxLength:30,pattern:["^[a-zA-Z0-9_]+$","letters, numbers, underscore only"],required:!0}),new ne("Save")];logData(i){this.formChange.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-validation-form"]],outputs:{formChange:"formChange"},features:[B([de])],decls:1,vars:1,consts:[[3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],encapsulation:2})};var gp={id:"simple-validation-form",title:"Simple validation",description:"",component:wa,category:"Form Fields",assets:[{label:"TS",language:"typescript",content:hp}]};var bp=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
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
        type: 'number',\r
        key: 'hp',\r
        value: 0,\r
        className: 'indicator',\r
        readonly: true,\r
      }),\r
      new InputField({\r
        type: 'number',\r
        key: 'attack',\r
        value: 0,\r
        className: 'indicator',\r
        readonly: true,\r
      }),\r
      new InputField({\r
        type: 'number',\r
        key: 'defense',\r
        value: 0,\r
        className: 'indicator',\r
        readonly: true,\r
      }),\r
      new NumberField({\r
        key: 'hit',\r
        readonly: true,\r
        className: 'hit',\r
      }),\r
      new OutputField({\r
        key: 'damage',\r
        calculation: \`\r
        \${playerName}.hit ? Number(\${playerName}.defense) - Number(\${playerName}.hit) : 0\`,\r
        for: ['p1', 'p2'],\r
        // hidden: true,\r
      }),\r
    ],\r
    triggers: [\r
      {\r
        on: FormFieldEventType.SELECT,\r
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
        on: FormFieldEventType.SELECT,\r
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
  template: \`<preforms (submittedData)="logData($event)" [fields]="fields" className="pokemon" />\`,\r
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
    new OutputField({\r
      key: 'score',\r
      calculation: 'Number(p1.damage) > Number(p2.damage)',\r
      for: ['p1', 'p2'],\r
      hidden: true,\r
    }),\r
    new DialogField({\r
      key: 'popup',\r
      fields: [],\r
      triggers: [\r
        {\r
          on: 'change',\r
          action: 'update_state',\r
          applyState: {\r
            fields: [new FormTitle('You win!')],\r
          },\r
          condition: true,\r
          sourceField: 'score',\r
        },\r
        {\r
          on: 'change',\r
          action: 'update_state',\r
          applyState: {\r
            fields: [new FormTitle('You lose!')],\r
          },\r
          condition: false,\r
          sourceField: 'score',\r
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
    new FormDivider({ label: 'Play!' }),\r
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
          on: FormFieldEventType.SELECT,\r
          sourceField: 'type',\r
          action: TriggerAction.UPDATE_STATE,\r
          applyState: {\r
            hidden: false,\r
          },\r
        },\r
      ],\r
    }),\r
    new FieldButton({\r
      type: 'button',\r
      label: 'Attack!',\r
      hidden: true,\r
      className: 'primary',\r
      triggers: [\r
        {\r
          on: 'select',\r
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
        },\r
        {\r
          on: 'click',\r
          action: TriggerAction.OPEN_DIALOG,\r
          target: 'popup',\r
          debounce: 500,\r
        },\r
      ],\r
    }),\r
  ];\r
\r
  logData(data: any) {\r
    console.log(data);\r
\r
    // this.formChange.emit(data);\r
  }\r
}\r
`;function gv(n,i){return Math.floor(Math.random()*(i-n+1))+n}function vp(n,i="$value",e="back_default"){return new dn({key:n,hidden:!0,fields:[new Bi({src:"",key:"image"}),new Fe({type:"number",key:"hp",value:0,className:"indicator",readonly:!0}),new Fe({type:"number",key:"attack",value:0,className:"indicator",readonly:!0}),new Fe({type:"number",key:"defense",value:0,className:"indicator",readonly:!0}),new ge({key:"hit",readonly:!0,className:"hit"}),new Rn({key:"damage",calculation:`
        ${n}.hit ? Number(${n}.defense) - Number(${n}.hit) : 0`,for:["p1","p2"]})],triggers:[{on:"select",action:"fetch",fetchUrl:i,sourceField:"pokemon",mode:"patch",projection:{target:"value",select:{hp:"stats[0].base_stat",attack:"stats[1].base_stat",defense:"stats[2].base_stat",image:`sprites.other.showdown.${e}`}}},{on:"select",action:"update_state",applyState:{hidden:!1}}]})}var Ea=class n{formChange=new x;fields=[new Rn({key:"score",calculation:"Number(p1.damage) > Number(p2.damage)",for:["p1","p2"],hidden:!0}),new Mn({key:"popup",fields:[],triggers:[{on:"change",action:"update_state",applyState:{fields:[new Je("You win!")]},condition:!0,sourceField:"score"},{on:"change",action:"update_state",applyState:{fields:[new Je("You lose!")]},condition:!1,sourceField:"score"}]}),new Ge({className:"grid",fields:[new Yt({label:"Player"}),new Yt({label:"Enemy"}),vp("p1"),vp("p2","https://pokeapi.co/api/v2/pokemon/"+gv(1,151),"front_default")]}),new Yt({label:"Play!"}),new Oe({key:"type",label:"Select Pokemon Type",options:[],triggers:[{on:"init",action:"fetch",fetchUrl:"https://pokeapi.co/api/v2/type/",mode:"patch",projection:{target:"options",select:{value:"url",label:"name"},source:"results"}}]}),new Oe({key:"pokemon",label:"Select Pokemon",hidden:!0,options:[],triggers:[{on:"change",sourceField:"type",action:"fetch",fetchUrl:"$value",mode:"patch",projection:{target:"options",select:{value:"pokemon.url",label:"pokemon.name"},source:"pokemon"}},{on:"select",sourceField:"type",action:"update_state",applyState:{hidden:!1}}]}),new it({type:"button",label:"Attack!",hidden:!0,className:"primary",triggers:[{on:"select",sourceField:"pokemon",action:"update_state",applyState:{hidden:!1}},{on:"click",action:"update_state",applyState:{value:{hit:"p1.attack"}},targetField:["p2"]},{on:"click",action:"update_state",applyState:{value:{hit:"p2.attack"}},targetField:["p1"]},{on:"click",action:"open_dialog",target:"popup",debounce:500}]})];logData(i){console.log(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-dynamic-form-fetch-remote"]],outputs:{formChange:"formChange"},features:[B([de,{provide:yn,useValue:i=>He(fetch(i).then(e=>e.json()))}])],decls:1,vars:1,consts:[["className","pokemon",3,"submittedData","fields"]],template:function(e,t){e&1&&(m(0,"preforms",0),D("submittedData",function(o){return t.logData(o)}),p()),e&2&&g("fields",t.fields)},dependencies:[W],styles:[`.pokemon .grid{max-width:400px;padding:20px;display:grid;grid-template-areas:"a a" "b b";gap:10px;grid-auto-rows:40px 300px;align-items:end}.pokemon .hit .preforms-input-field{all:unset}.pokemon .indicator .preforms-input-field{max-width:100%}.pokemon .primary{background-color:#fb0;padding:.6rem 2rem;border:1px solid #cfd6e3;border-radius:25px;font-weight:700;margin-top:30px;display:inline-block}
`],encapsulation:2})};var yp={id:"dynamic-select-fetch-remote",title:"Pokemon Game",description:`
  # Remote Fetch + Projection Example

This example shows how to fetch remote data and map it into multiple fields when a user selects a value.

---

## What this example demonstrates

- Remote API fetch
- Mapping API response to fields (projection)
- Updating multiple fields from one request
- Calculated fields
- Event \u2192 Trigger \u2192 Action flow

---

## Basic Idea

Change \u2192 Fetch \u2192 Map Response \u2192 Update Fields \u2192 Recalculate

Everything is configured declaratively in the field model.

---

## Triggering a Remote Fetch

When the user selects a value, a fetch action is triggered.

\`\`\`ts
{
  triggers: [
    {
      on: 'change',
      action: 'fetch',
      fetchUrl: '$value',
      projection: {
        hp: 'stats[0].base_stat',
        attack: 'stats[1].base_stat',
        defense: 'stats[2].base_stat',
        image: 'sprites.other.showdown.front_default'
      }
      sourceField: 'type',
    }
  ]
}
\`\`\`

The engine will:
1. Call the API  
2. Read the response  
3. Map values into fields  
4. Update the UI  

---

## Projection (Mapping API Response)

Projection maps API response fields into form fields.

\`\`\`ts
{
  projection: {
    hp: 'stats[0].base_stat',
    attack: 'stats[1].base_stat',
    defense: 'stats[2].base_stat',
    image: 'sprites.other.showdown.front_default'
  }
}
\`\`\`

This allows updating multiple fields from a single API response without writing component code.

---

## Calculated Fields

Fields can calculate values based on other fields.

\`\`\`ts
new OutputField({
  key: 'damage',
  label: 'Damage',
  calculation: 'Number(player.attack) - Number(opponent.defense) / 2'
})
\`\`\`

Calculated fields automatically update when dependent values change.

---

## Mental Model

Think in this pattern when building forms:

User action \u2192 Trigger \u2192 Action \u2192 State update \u2192 UI update

Examples:
- Select value \u2192 fetch related data  
- Enter input \u2192 validate asynchronously  
- Change number \u2192 recalculate result  
- Click button \u2192 trigger action  
- Select item \u2192 load additional details  

---

## Why This Example Matters

This example demonstrates that Preforms is not just a form renderer.  
It is a declarative, event-driven form engine where behavior is defined using triggers and actions instead of component code.

---

## One Sentence Summary

> When something happens, trigger an action that updates field state, and the UI updates automatically.
  
  `,category:"Examples",component:Ea,assets:[{label:"TS",language:"typescript",content:bp}]};var Fa=[hm,ep,gp,pp,wm,ym,Zm,um,Xm,bm,rp,fp,dm,lp,yp];var bv=["demoContainer"];function vv(n,i){}function yv(n,i){if(n&1&&(m(0,"h1"),b(1),p(),m(2,"div",1),F(3,"markdown",2),p(),m(4,"div",3)(5,"demo-card",4),It(6,vv,0,0,"ng-template",null,0,Vi),p(),m(8,"demo-card",5),F(9,"result-viewer",6),p()(),F(10,"code-tabs",7)(11,"br")(12,"br")),n&2){let e=C();h(),j(e.example.title),h(2),g("data",e.example.description),h(6),g("value",e.formValue),h(),g("codeAssets",e.example.assets)}}var Ta=class n{constructor(i,e){this.route=i;this.cd=e}container;example;compRef;formValue;codeAssets=[];sub;loadComponent(){this.container.clear(),this.compRef=this.container.createComponent(this.example.component,{bindings:[wl("formChange",i=>{this.formValue=i})]})}ngAfterViewInit(){this.sub=this.route.params.subscribe(i=>{this.example=Fa.find(e=>e.id===i.id),this.formValue=void 0,this.cd.detectChanges(),this.loadComponent()})}ngOnDestroy(){this.compRef&&(this.compRef.destroy(),this.compRef=void 0),this.container?.clear(),this.sub?.unsubscribe()}static \u0275fac=function(e){return new(e||n)(an(Nt),an(Xe))};static \u0275cmp=v({type:n,selectors:[["app-example-page"]],viewQuery:function(e,t){if(e&1&&Ye(bv,5,Ze),e&2){let r;V(r=q())&&(t.container=r.first)}},decls:1,vars:1,consts:[["demoContainer",""],[1,"info"],[3,"data"],[1,"demo-layout"],["title","Live Demo"],["title","Result"],[3,"value"],[3,"codeAssets"]],template:function(e,t){e&1&&z(0,yv,13,4),e&2&&U(t.example?0:-1)},dependencies:[Bo,zo,Sn,Dn,Lo],styles:[".info[_ngcontent-%COMP%]{max-width:800px}"]})};var _p=`new NumberField({ key: 'amount' })\r
new InputField({ key: 'username' })`;var xp=`new PasswordField({\r
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
})`;var Cp=`new EmailField()\r
new PasswordField()\r
new PhoneNumberField()`;var wp=`new Address()\r
new Currency()\r
new DateOfBirth()\r
new FullName()`;var Ep=`fields = [\r
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
];`;var Fp=`@DynamicFormElement({\r
  component: 'password-strength',\r
})\r
export class PasswordStrengthComponent extends BaseFieldComponent<\r
  FormControl<number>,\r
  PasswordStrengthField\r
> {}`;var Tp=`export class PasswordStrengthField extends NumberField {\r
  constructor() {\r
    super({\r
      key: 'strength',\r
      component: 'password-strength',\r
    });\r
  }\r
}`;var Dp=`fields = [\r
  new EmailField(),\r
  new NumberField({ key: 'amount' }),\r
  new SubmitButton('Checkout')\r
];`;var Da=class n{code=[_p,xp,Cp,wp,Ep,Fp,Tp,Dp,'<preforms [fields]="fields" (submittedData)="onSubmit($event)"/>',`new EmailField()
new PasswordField()`,`new NumberField({ key: 'amount' })
new InputField({ key: 'username' })`,`export class AmountField extends NumberField {
  constructor() {
    super({
      key: 'amount',
      label: 'Amount',
      min: 0
    });
  }
}`];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-home"]],decls:126,vars:48,consts:[["data","TBD"],[3,"data"]],template:function(e,t){e&1&&(m(0,"h1"),b(1,"Preforms"),p(),m(2,"h2"),b(3,"A class-based form modeling system for Angular"),p(),m(4,"p"),b(5,"Build forms as real domain models \u2014 not configuration objects."),p(),m(6,"p"),b(7,` Preforms gives you a strongly-typed form modeling system with a built-in trigger engine for cross-field validation, behavior and a domain-ready field library.
`),p(),m(8,"h2"),b(9,"Why Preforms"),p(),m(10,"p"),b(11,"Most Angular form solutions treat forms as configuration:"),p(),m(12,"ul")(13,"li"),b(14,"JSON schemas"),p(),m(15,"li"),b(16,"Config objects"),p(),m(17,"li"),b(18,"Template-driven mappings"),p()(),m(19,"p"),b(20,"Preforms takes a different approach:"),p(),m(21,"blockquote"),b(22,"Forms are object models with behavior."),p(),m(23,"p"),b(24," You define forms using classes like "),m(25,"strong"),b(26,"FormField"),p(),b(27,", "),m(28,"strong"),b(29,"FieldGroup"),p(),b(30,", "),m(31,"strong"),b(32,"NumberField"),p(),b(33,`, and compose them like a real domain model.
`),p(),m(34,"h2"),b(35,"Get Started in 30 Seconds"),p(),m(36,"p"),b(37,"Install:"),p(),F(38,"markdown",0),m(39,"p"),b(40,"Define a form:"),p(),F(41,"markdown",1),pe(42,"language"),m(43,"p"),b(44,"Render (Angular adapter handles UI automatically):"),p(),F(45,"markdown",1),pe(46,"language"),m(47,"p"),b(48," Preforms models are rendered automatically by the Angular adapter. "),F(49,"br"),b(50,` No manual form wiring is required \u2014 models are interpreted into reactive forms and UI components.
`),p(),m(51,"h3"),b(52,"1. Form Modeling System"),p(),m(53,"p"),b(54,"Define forms using strongly-typed classes."),p(),F(55,"markdown",1),pe(56,"language"),m(57,"h3"),b(58,"2. Trigger Engine"),p(),m(59,"p"),b(60,"Add cross-field behavior directly inside field definitions."),p(),F(61,"markdown",1),pe(62,"language"),m(63,"h3"),b(64,"3. Domain Field Library (DX layer)"),p(),m(65,"p"),b(66,"Preforms ships with a rich set of domain-ready field primitives."),p(),m(67,"strong"),b(68,"Semantic Fields"),p(),F(69,"markdown",1),pe(70,"language"),m(71,"p"),b(72,"These fields include sensible defaults, structure, and validation."),p(),m(73,"strong"),b(74,"Domain Fields"),p(),F(75,"markdown",1),pe(76,"language"),m(77,"h2"),b(78,"Smart Defaults vs Explicit Control"),p(),m(79,"p"),b(80,"Preforms balances minimal configuration with explicit identity."),p(),m(81,"p"),b(82,"Intent-based fields (no key required)"),p(),F(83,"markdown",1),pe(84,"language"),m(85,"p"),b(86,"Data-bound fields (explicit identity required)"),p(),F(87,"markdown",1),pe(88,"language"),m(89,"h2"),b(90,"Extensible UI System"),p(),m(91,"p"),b(92,"You can create your own strongly-typed fields."),p(),F(93,"markdown",1),pe(94,"language"),m(95,"p"),b(96,"Preforms allows custom field components to be plugged directly into the form model."),p(),m(97,"strong"),b(98,"Custom Field Components"),p(),m(99,"p"),b(100,"Preforms lets you create fully custom UI field components."),p(),F(101,"markdown",1),pe(102,"language"),m(103,"strong"),b(104,"Bind it to a field model"),p(),F(105,"markdown",1),pe(106,"language"),m(107,"h2"),b(108,"What makes Preforms different"),p(),m(109,"ul")(110,"li"),b(111,"Strongly typed form models"),p(),m(112,"li"),b(113,"Object-oriented field system"),p(),m(114,"li"),b(115,"Built-in cross-field validation"),p(),m(116,"li"),b(117,"Declarative trigger engine"),p(),m(118,"li"),b(119,"No JSON schema required"),p()(),m(120,"h2"),b(121,"Example"),p(),F(122,"markdown",1),pe(123,"language"),F(124,"br")(125,"br")),e&2&&(h(41),g("data",Re(42,12,t.code[7],"typescript")),h(4),g("data",Re(46,15,t.code[8],"html")),h(10),g("data",Re(56,18,t.code[0],"typescript")),h(6),g("data",Re(62,21,t.code[1],"typescript")),h(8),g("data",Re(70,24,t.code[2],"typescript")),h(6),g("data",Re(76,27,t.code[3],"typescript")),h(8),g("data",Re(84,30,t.code[9],"typescript")),h(4),g("data",Re(88,33,t.code[10],"typescript")),h(6),g("data",Re(94,36,t.code[11],"typescript")),h(8),g("data",Re(102,39,t.code[5],"typescript")),h(4),g("data",Re(106,42,t.code[6],"typescript")),h(17),g("data",Re(123,45,t.code[4],"typescript")))},dependencies:[Sn,Dn,Si],encapsulation:2})};var Sp=[{path:"",component:Da},{path:"examples/:id",component:Ta}];function kp(n=12,i={uppercase:!0,lowercase:!0,numbers:!0,symbols:!0}){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t="abcdefghijklmnopqrstuvwxyz",r="0123456789",o="!@#$%^&*()-_=+[]{}|;:,.<>?",a="";if(i.uppercase&&(a+=e),i.lowercase&&(a+=t),i.numbers&&(a+=r),i.symbols&&(a+=o),!a)throw new Error("At least one character type must be enabled");let s="";for(let l=0;l<n;l++)s+=a[Math.floor(Math.random()*a.length)];return s}function Ip(n){return{provide:Ql,useValue:n}}function Mp(n){return{provide:cc,useClass:n,multi:!0}}var Sa=class n{constructor(i){this.http=i}protocol="http";execute(i){let e=i.method||"GET";return this.http.request(e,i.url,{body:i.body,params:i.params})}static \u0275fac=function(e){return new(e||n)(St(vn))};static \u0275prov=A({token:n,factory:n.\u0275fac})};var Rp={providers:[Mp(Sa),Hl(Vl()),Bs({loader:vn}),ul(),Ic(),Es(Sp),Ip([{type:"editor",loader:()=>import("./chunk-RI5BYZFP.js").then(n=>n.EditorComponent)}]),{provide:Kl,useValue:{randomize:n=>{n.control&&typeof n.control.setValue=="function"&&n.control.setValue(Math.floor(Math.random()*100))},uppercase:n=>{let i=n.control.value;n.control.setValue(typeof i=="string"?i.toUpperCase():i)},increment:n=>{let i=n.control.value;n.control.setValue(typeof i=="number"?Math.min(i+1,n.field.max):i)},decrement:n=>{let i=n.control.value;n.control.setValue(typeof i=="number"?Math.max(i-1,n.field.min):i)},generatePassword:n=>{let i=kp(12,{uppercase:!0,lowercase:!0,numbers:!0,symbols:!0});n.control.setValue(i)}}},Wl(Gl())]};var Pn=class n{isOpen=new Se(!1);isOpen$=this.isOpen.asObservable();open(){this.isOpen.next(!0)}close(){this.isOpen.next(!1)}toggle(){this.isOpen.next(!this.isOpen.value)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})};var Sv=n=>({open:n}),kv=n=>["examples",n];function Iv(n,i){if(n&1){let e=ze();m(0,"li")(1,"a",3),D("click",function(){xe(e);let r=C(2);return Ce(r.sidenav.close())}),b(2),p()()}if(n&2){let e=i.$implicit;h(),g("routerLink",Te(2,kv,e.id)),h(),j(e.title)}}function Mv(n,i){if(n&1&&(m(0,"div",1)(1,"div",2),b(2),p(),m(3,"ul"),ie(4,Iv,3,4,"li",null,we),p()()),n&2){let e=i.$implicit;h(2),j(e.name),h(2),re(e.examples)}}var ka=class n{sidenav=c(Pn);groupedExamples=[];constructor(){this.groupedExamples=this.groupByCategory(Fa)}groupByCategory(i){let e={};return i.forEach(t=>{let r=t.category||"";e[r]||(e[r]=[]),e[r].push(t)}),Object.keys(e).map(t=>({name:t,examples:e[t]}))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-sidebar"]],decls:6,vars:5,consts:[[1,"sidebar",3,"ngClass"],[1,"category"],[1,"category-title"],[3,"click","routerLink"]],template:function(e,t){e&1&&(m(0,"nav",0),pe(1,"async"),ie(2,Mv,6,1,"div",1,we),F(4,"br")(5,"br"),p()),e&2&&(g("ngClass",Te(3,Sv,gn(1,1,t.sidenav.isOpen$))),h(2),re(t.groupedExamples))},dependencies:[Ti,ni,ii],styles:[".sidebar[_ngcontent-%COMP%]{width:250px;padding:1rem;background-color:#f5f6fa;border-right:1px solid #e0e0e0;height:calc(100vh - 60px);overflow:auto}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-weight:700;color:#333}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 1rem;cursor:pointer;border-radius:4px;display:block}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.sidebar[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block}"]})};var Rv=n=>({open:n}),Ia=class n{sidenav=c(Pn);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-toolbar"]],decls:10,vars:5,consts:[[1,"toolbar"],[1,"title"],["routerLink",""],["id","toggle-sidenav",3,"click"],[1,"menu_icon",3,"ngClass"],[1,"bar1"],[1,"bar2"],[1,"bar3"]],template:function(e,t){e&1&&(m(0,"header",0)(1,"div",1)(2,"a",2),b(3,"Preforms Showcase"),p()(),m(4,"button",3),D("click",function(){return t.sidenav.toggle()}),m(5,"div",4),pe(6,"async"),F(7,"div",5)(8,"div",6)(9,"div",7),p()()()),e&2&&(h(5),g("ngClass",Te(3,Rv,gn(6,1,t.sidenav.isOpen$))))},dependencies:[ni,Ti,ii],styles:[".toolbar[_ngcontent-%COMP%]{height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;background-color:#24292e;color:#fff}.toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#24292e;border:none;padding:.5rem 1rem}@media only screen and (min-width:800px){#toggle-sidenav[_ngcontent-%COMP%]{display:none}}.menu_icon[_ngcontent-%COMP%]{display:inline-block;cursor:pointer}.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%]{width:35px;height:5px;background-color:#fff;margin:6px 0;transition:.4s}.open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%]{transform:translateY(11px) rotate(-45deg)}.open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%]{opacity:0}.open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%]{transform:translateY(-11px) rotate(45deg)}"]})};var Av=n=>({open:n}),Ma=class n{service=c(Pn);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-root"]],decls:6,vars:5,consts:[[1,"layout",3,"ngClass"],[1,"content"]],template:function(e,t){e&1&&(F(0,"app-toolbar"),m(1,"div",0),pe(2,"async"),F(3,"app-sidebar"),m(4,"main",1),F(5,"router-outlet"),p()()),e&2&&(h(),g("ngClass",Te(3,Av,gn(2,1,t.service.isOpen$))))},dependencies:[gr,ka,Ia,ni,ii],styles:[".layout[_ngcontent-%COMP%]{display:flex;position:fixed;transition:left .1s;overflow:hidden;height:100%;width:100%}.content[_ngcontent-%COMP%]{padding:20px;overflow:auto;flex:1}@media only screen and (max-width:800px){.layout[_ngcontent-%COMP%]{left:-250px;width:calc(100vw + 250px)}.layout.open[_ngcontent-%COMP%]{left:0}}"]})};$l(Ma,Rp).catch(n=>console.error(n));
