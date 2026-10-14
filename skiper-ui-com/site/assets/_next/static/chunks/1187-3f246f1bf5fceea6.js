"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1187],{17740:(e,t,i)=>{i.d(t,{z:()=>h});var a=i(30645),r=i(7364),s=i(71525);function n(e){return"number"==typeof e?e:parseFloat(e)}var o=i(94050),l=i(9145),d=i(37436),u=i(7372);function h(e,t={}){let{isStatic:i}=(0,o.useContext)(l.Q),c=()=>(0,a.S)(e)?e.get():e;if(i)return(0,u.G)(c);let m=(0,d.d)(c());return(0,o.useInsertionEffect)(()=>(function(e,t,i){let o,l,d=e.get(),u=null,h=d,c="string"==typeof d?d.replace(/[\d.-]/g,""):void 0,m=()=>{u&&(u.stop(),u=null)},E=()=>{m(),u=new r.s({keyframes:[n(e.get()),n(h)],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...i,onUpdate:o})};return e.attach((t,i)=>(h=t,o=e=>{var t,a;return i((t=e,(a=c)?t+a:t))},s.Gt.postRender(E),e.get()),m),(0,a.S)(t)&&(l=t.on("change",t=>{var i,a;return e.set((i=t,(a=c)?i+a:i))}),e.on("destroy",l)),l})(m,e,t),[m,JSON.stringify(t)]),m}},21817:(e,t,i)=>{i.d(t,{A:()=>a});let a=(0,i(73659).A)("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]])},33495:(e,t,i)=>{i.d(t,{A:()=>a});let a=(0,i(73659).A)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},69714:(e,t,i)=>{let a,r;i.d(t,{Ph:()=>sp,xX:()=>sE,aH:()=>sv,nN:()=>sb,ex:()=>sg,AD:()=>sA,WW:()=>sf,td:()=>s_,qD:()=>sI});var s,n,o,l,d,u,h,c,m,E,p,v,b,g,A,f,_,I,T,y,w,S,L,M,k,R,D,C,O,N,U,x,P,H,V,W,$,F,B,G,K,q,Y,Q,j,Z,z,X,J,ee,et,ei,ea,er,es,en,eo,el,ed,eu,eh,ec,em,eE,ep,ev,eb,eg,eA,ef,e_,eI,eT,ey,ew,eS,eL,eM,ek,eR,eD,eC,eO,eN,eU,ex,eP,eH,eV,eW,e$,eF,eB,eG,eK,eq,eY,eQ,ej,eZ,ez,eX,eJ,e0,e1,e2,e3,e5,e4,e7,e8,e6,e9,te,tt,ti,ta,tr,ts,tn,to,tl,td,tu,th,tc,tm,tE,tp,tv,tb,tg,tA,tf=i(94050);let t_=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),tI={className:"class",htmlFor:"for"};function tT(e){return e.toLowerCase()}function ty(e){return"boolean"==typeof e?e?"":void 0:"function"==typeof e?void 0:"object"!=typeof e||null===e?e:void 0}function tw({react:e,tagName:t,elementClass:i,events:a,displayName:r,defaultProps:s,toAttributeName:n=tT,toAttributeValue:o=ty}){let l=Number.parseInt(e.version)>=19,d=e.forwardRef((r,d)=>{let u=e.useRef(null),h=e.useRef(new Map),c={},m={},E={},p={};for(let[e,t]of Object.entries(r)){if(t_.has(e)){E[e]=t;continue}let a=n(tI[e]??e);if(i.prototype&&e in i.prototype&&!(e in(globalThis.HTMLElement?.prototype??{}))&&!i.observedAttributes?.some(e=>e===a)){p[e]=t;continue}if(e.startsWith("on")){c[e]=t;continue}let r=o(t);a&&null!=r&&(m[a]=String(r),l||(E[a]=r)),a&&l&&(r!==ty(t)?E[a]=r:E[a]=t)}if("undefined"!=typeof window){for(let t in c){let i=c[t],r=t.endsWith("Capture"),s=(a?.[t]??t.slice(2).toLowerCase()).slice(0,r?-7:void 0);e.useLayoutEffect(()=>{let e=u?.current;if(e&&"function"==typeof i)return e.addEventListener(s,i,r),()=>{e.removeEventListener(s,i,r)}},[u?.current,i])}e.useLayoutEffect(()=>{if(null===u.current)return;let e=new Map;for(let t in p)tS(u.current,t,p[t]),h.current.delete(t),e.set(t,p[t]);for(let[e,t]of h.current)tS(u.current,e,void 0);h.current=e})}if("undefined"==typeof window&&i?.getTemplateHTML&&i?.shadowRootOptions){let{mode:t,delegatesFocus:a}=i.shadowRootOptions;E.children=[e.createElement("template",{shadowrootmode:t,shadowrootdelegatesfocus:a,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(m,r)}}),E.children]}return e.createElement(t,{...s,...E,ref:e.useCallback(e=>{u.current=e,"function"==typeof d?d(e):null!==d&&(d.current=e)},[d])})});return d.displayName=r??i.name,d}function tS(e,t,i){e[t]=i,null==i&&t in(globalThis.HTMLElement?.prototype??{})&&e.removeAttribute(t)}let tL={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},tM={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},tk={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},tR=Object.entries(tk),tD=tR.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),tC=tR.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(tC).reduce((e,[t,i])=>{let a=tD[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let tO=Object.entries(tD).reduce((e,[t,i])=>{let a=tC[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),tN={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},tU={DISABLED:"disabled",SHOWING:"showing"},tx={MOUSE:"mouse",TOUCH:"touch"},tP={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},tH={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},tV={FULLSCREEN:"fullscreen"};function tW(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function t$(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function tF(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}let tB=e=>new Promise(t=>setTimeout(t,e)),tG=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],tK=e=>{if(!tF(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&((e,t)=>{let i=1===e?tG[t].singular:tG[t].plural;return`${e} ${i}`})(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function tq(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),s=Math.floor(e/3600),n=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(s=r=a="0"),r=(((s=s>0||o>0?s+":":"")||n>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+s+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let tY={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},tQ=(null==(s=globalThis.navigator)?void 0:s.language)||"en",tj=(e,t={})=>(e=>{var t,i,a;let[r]=tQ.split("-");return(null==(t=tY[tQ])?void 0:t[e])||(null==(i=tY[r])?void 0:i[e])||(null==(a=tY.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class tZ{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class tz extends tZ{}class tX extends tz{constructor(){super(...arguments),this.role=null}}class tJ{observe(){}unobserve(){}disconnect(){}}let t0={createElement:function(){return new t1.HTMLElement},createElementNS:function(){return new t1.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},t1={ResizeObserver:tJ,document:t0,Node:tz,Element:tX,HTMLElement:class extends tX{constructor(){super(...arguments),this.innerHTML=""}get content(){return new t1.DocumentFragment}},DocumentFragment:class extends tZ{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},t2="undefined"==typeof window||void 0===window.customElements,t3=Object.keys(t1).every(e=>e in globalThis),t5=t2&&!t3?t1:globalThis,t4=t2&&!t3?t0:globalThis.document,t7=new WeakMap,t8=e=>{let t=t7.get(e);return t||t7.set(e,t=new Set),t},t6=new t5.ResizeObserver(e=>{for(let t of e)for(let e of t8(t.target))e(t)});function t9(e,t){t8(e).add(t),t6.observe(e)}function ie(e,t){let i=t8(e);i.delete(t),i.size||t6.unobserve(e)}function it(e){let t={};for(let i of e)t[i.name]=i.value;return t}let ii=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},ia=(e,t)=>((e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]})(e,t)[0],ir=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||ir(e,t.getRootNode().host)),is=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||is(e.getRootNode().host,t)};function io(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function il(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||function(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],s=null==r?void 0:r[r.length-1];return(null==s?void 0:s.sheet)?(null==s||s.sheet.insertRule(`${t}{}`,s.sheet.cssRules.length),null==(a=s.sheet.cssRules)?void 0:a[s.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}(e,t)}function id(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function iu(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}id(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function ih(e,t){return e.hasAttribute(t)}function ic(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}ih(e,t)!=i&&e.toggleAttribute(t,i)}function im(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function iE(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;im(e,t,void 0)!==a&&e.setAttribute(t,a)}var ip=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iv=(e,t,i)=>(ip(e,t,"read from private field"),i?i.call(e):t.get(e)),ib=(e,t,i,a)=>(ip(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ig extends t5.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,n,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tM.MEDIA_CONTROLLER,tD.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,s,o,l;e===tM.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iv(this,n))?void 0:a.unassociateElement)||r.call(a,this),ib(this,n,null)),i&&this.isConnected&&(ib(this,n,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(l=null==(o=iv(this,n))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ib(this,n,function(e){var t;let i=e.getAttribute(tM.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):is(e,"media-controller")}(this)),this.getAttribute(tM.MEDIA_CONTROLLER)&&(null==(t=null==(e=iv(this,n))?void 0:e.associateElement)||t.call(e,this)),null==(i=iv(this,n))||i.addEventListener("pointerdown",this),null==(a=iv(this,n))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(tM.MEDIA_CONTROLLER)&&(null==(t=null==(e=iv(this,n))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=iv(this,n))||i.removeEventListener("pointerdown",this),null==(a=iv(this,n))||a.removeEventListener("click",this),ib(this,n,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:s,height:n}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>s||l>n||0===s&&0===n)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===tx.TOUCH)return void this.handleTap(e);if(d===tx.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return ih(this,tD.MEDIA_PAUSED)}set mediaPaused(e){ic(this,tD.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?tL.MEDIA_PLAY_REQUEST:tL.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new t5.CustomEvent(t,{composed:!0,bubbles:!0}))}}n=new WeakMap,ig.shadowRootOptions={mode:"open"},ig.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},t5.customElements.get("media-gesture-receiver")||t5.customElements.define("media-gesture-receiver",ig);var iA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i_=(e,t,i)=>(iA(e,t,"read from private field"),i?i.call(e):t.get(e)),iI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iT=(e,t,i,a)=>(iA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iy=(e,t,i)=>(iA(e,t,"access private method"),i);let iw={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},iS=Object.values(tD);function iL(e,t){var i,a,r;if(!e.isConnected)return;let s=Object.fromEntries((null!=(i=e.getAttribute(iw.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),n=(a=s,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(s).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(tC.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(tC.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class iM extends t5.HTMLElement{constructor(){if(super(),iI(this,c),iI(this,v),iI(this,g),iI(this,f),iI(this,I),iI(this,y),iI(this,o,0),iI(this,l,null),iI(this,d,null),iI(this,u,void 0),this.breakpointsComputed=!1,iI(this,h,new MutationObserver(iy(this,c,m).bind(this))),iI(this,E,!1),iI(this,p,e=>{i_(this,E)||(setTimeout(()=>{!function(e){iL(e.target,e.contentRect.width)}(e),iT(this,E,!1)},0),iT(this,E,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}let e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){i_(this,l)&&this.mediaUnsetCallback(i_(this,l));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[iw.AUTOHIDE,iw.GESTURES_DISABLED].concat(iS).filter(e=>![tD.MEDIA_RENDITION_LIST,tD.MEDIA_AUDIO_TRACK_LIST,tD.MEDIA_CHAPTERS_CUES,tD.MEDIA_WIDTH,tD.MEDIA_HEIGHT,tD.MEDIA_ERROR,tD.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==iw.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(iT(this,l,e),e.localName.includes("-")&&await t5.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;i_(this,h).observe(this,{childList:!0,subtree:!0}),t9(this,i_(this,p));let t=null!=this.getAttribute(iw.AUDIO)?tj("audio player"):tj("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(iw.USER_INACTIVE,""),iL(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=t5.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;i_(this,h).disconnect(),ie(this,i_(this,p)),this.media&&this.mediaUnsetCallback(this.media),null==(e=t5.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){iT(this,l,null)}handleEvent(e){switch(e.type){case"pointerdown":iT(this,o,e.timeStamp);break;case"pointermove":iy(this,v,b).call(this,e);break;case"pointerup":iy(this,g,A).call(this,e);break;case"mouseleave":iy(this,f,_).call(this);break;case"mouseup":this.removeAttribute(iw.KEYBOARD_CONTROL);break;case"keyup":iy(this,y,w).call(this),this.setAttribute(iw.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);iT(this,u,isNaN(t)?0:t)}get autohide(){return(void 0===i_(this,u)?2:i_(this,u)).toString()}get breakpoints(){return im(this,iw.BREAKPOINTS)}set breakpoints(e){iE(this,iw.BREAKPOINTS,e)}get audio(){return ih(this,iw.AUDIO)}set audio(e){ic(this,iw.AUDIO,e)}get gesturesDisabled(){return ih(this,iw.GESTURES_DISABLED)}set gesturesDisabled(e){ic(this,iw.GESTURES_DISABLED,e)}get keyboardControl(){return ih(this,iw.KEYBOARD_CONTROL)}set keyboardControl(e){ic(this,iw.KEYBOARD_CONTROL,e)}get noAutohide(){return ih(this,iw.NO_AUTOHIDE)}set noAutohide(e){ic(this,iw.NO_AUTOHIDE,e)}get autohideOverControls(){return ih(this,iw.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){ic(this,iw.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return ih(this,iw.USER_INACTIVE)}set userInteractive(e){ic(this,iw.USER_INACTIVE,e)}}o=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakSet,m=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},E=new WeakMap,p=new WeakMap,v=new WeakSet,b=function(e){if("mouse"!==e.pointerType&&e.timeStamp-i_(this,o)<250)return;iy(this,I,T).call(this),clearTimeout(i_(this,d));let t=this.hasAttribute(iw.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&iy(this,y,w).call(this)},g=new WeakSet,A=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(iw.USER_INACTIVE);[this,this.media].includes(e.target)&&t?iy(this,f,_).call(this):iy(this,y,w).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&iy(this,y,w).call(this)},f=new WeakSet,_=function(){if(0>i_(this,u)||this.hasAttribute(iw.USER_INACTIVE))return;this.setAttribute(iw.USER_INACTIVE,"");let e=new t5.CustomEvent(tC.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},I=new WeakSet,T=function(){if(!this.hasAttribute(iw.USER_INACTIVE))return;this.removeAttribute(iw.USER_INACTIVE);let e=new t5.CustomEvent(tC.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},y=new WeakSet,w=function(){iy(this,I,T).call(this),clearTimeout(i_(this,d));let e=parseInt(this.autohide);e<0||iT(this,d,setTimeout(()=>{iy(this,f,_).call(this)},1e3*e))},iM.shadowRootOptions={mode:"open"},iM.getTemplateHTML=function(e){return`
    <style>
      
      :host([${tD.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${iw.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${iw.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${iw.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${iw.AUDIO}])[${iw.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${iw.AUDIO}])[${iw.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${iw.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${iw.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${iw.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${iw.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${iw.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${iw.USER_INACTIVE}]:not([${tD.MEDIA_PAUSED}]):not([${tD.MEDIA_IS_AIRPLAYING}]):not([${tD.MEDIA_IS_CASTING}]):not([${iw.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${iw.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${iw.USER_INACTIVE}]:not([${iw.NO_AUTOHIDE}]):not([${tD.MEDIA_PAUSED}]):not([${tD.MEDIA_IS_CASTING}]):not([${iw.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${iw.USER_INACTIVE}][${iw.AUTOHIDE_OVER_CONTROLS}]:not([${iw.NO_AUTOHIDE}]):not([${tD.MEDIA_PAUSED}]):not([${tD.MEDIA_IS_CASTING}]):not([${iw.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${iw.AUDIO}])[${tD.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${ig.shadowRootOptions.mode}">
          ${ig.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},t5.customElements.get("media-container")||t5.customElements.define("media-container",iM);var ik=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iR=(e,t,i)=>(ik(e,t,"read from private field"),i?i.call(e):t.get(e)),iD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iC=(e,t,i,a)=>(ik(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iO{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){iD(this,R),iD(this,S,void 0),iD(this,L,void 0),iD(this,M,void 0),iD(this,k,new Set),iC(this,S,e),iC(this,L,t),iC(this,M,new Set(i))}[Symbol.iterator](){return iR(this,R,D).values()}get length(){return iR(this,R,D).size}get value(){var e;return null!=(e=[...iR(this,R,D)].join(" "))?e:""}set value(e){var t;e!==this.value&&(iC(this,k,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...iR(this,R,D)][e]}values(){return iR(this,R,D).values()}forEach(e,t){iR(this,R,D).forEach(e,t)}add(...e){var t,i;e.forEach(e=>iR(this,k).add(e)),(""!==this.value||(null==(t=iR(this,S))?void 0:t.hasAttribute(`${iR(this,L)}`)))&&(null==(i=iR(this,S))||i.setAttribute(`${iR(this,L)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>iR(this,k).delete(e)),null==(t=iR(this,S))||t.setAttribute(`${iR(this,L)}`,`${this.value}`)}contains(e){return iR(this,R,D).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}S=new WeakMap,L=new WeakMap,M=new WeakMap,k=new WeakMap,R=new WeakSet,D=function(){return iR(this,k).size?iR(this,k):iR(this,M)};let iN=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?tN.CAPTIONS:tN.SUBTITLES,language:i,label:r}},iU=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=iN(e);return{...t,...i}}),ix=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?iN(e):e):"string"==typeof e?iU(e):[e]:[],iP=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,iH=(e=[])=>Array.prototype.map.call(e,iP).join(" "),iV=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},iW=(e,t=[],i=[])=>{let a=ix(i).map(iV);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},i$=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:iV(t);return Array.from(e.textTracks).filter(i)},iF="exitFullscreen"in t4?"exitFullscreen":"webkitExitFullscreen"in t4?"webkitExitFullscreen":"webkitCancelFullScreen"in t4?"webkitCancelFullScreen":void 0,iB="fullscreenElement"in t4?"fullscreenElement":"webkitFullscreenElement"in t4?"webkitFullscreenElement":void 0,iG="fullscreenEnabled"in t4?"fullscreenEnabled":"webkitFullscreenEnabled"in t4?"webkitFullscreenEnabled":void 0,iK=()=>{var e;return a||(a=null==(e=null==t4?void 0:t4.createElement)?void 0:e.call(t4,"video"))},iq=async(e=iK())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([iY(e,i.signal),iQ(e,t)]);return i.abort(),a},iY=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),iQ=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await tB(10)}return e.volume!==t},ij=/.*Version\/.*Safari\/.*/.test(t5.navigator.userAgent),iZ=(e=iK())=>(!t5.matchMedia("(display-mode: standalone)").matches||!ij)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),iz=(e=iK())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[iG])||i&&"webkitSupportsFullscreen"in i})({documentElement:t4,media:e}),iX=iz(),iJ=iZ(),i0=!!t5.WebKitPlaybackTargetAvailabilityEvent,i1=!!t5.chrome,i2=e=>i$(e.media,e=>[tN.SUBTITLES,tN.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),i3=e=>i$(e.media,e=>e.mode===tU.SHOWING&&[tN.SUBTITLES,tN.CAPTIONS].includes(e.kind)),i5=(e,t)=>{let i=i2(e),a=i3(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)iW(tU.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:s,label:n,kind:o}=t;iW(tU.DISABLED,i,a),iW(tU.SHOWING,i,[{language:s,label:n,kind:o}])}}},i4=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?i7(e,t):Object.entries(e).every(([e,i])=>e in t&&i4(i,t[e])))),i7=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>i4(e,t[i])))},i8=Object.values(tH),i6=iq().then(e=>r=e),i9=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof t5.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=t5.customElements.get(t);i&&e instanceof i||(await t5.customElements.whenDefined(t),t5.customElements.upgrade(e))}))},ae=new t5.DOMParser,at={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{t5.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===t5.localStorage.getItem("media-chrome-pref-muted");at.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?t5.localStorage.removeItem("media-chrome-pref-volume"):t5.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=t5.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;at.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&tF(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[tH.LIVE,tH.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(i8.includes(r))return r===tH.UNKNOWN?a:r;let s=t.duration;return s===1/0?tH.LIVE:Number.isFinite(s)?tH.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=at.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===tH.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(at.mediaStreamType.get(e)!==tH.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>i2(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>i3(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:s}=t;if(!r)return;let n=e=>{var i;s.defaultSubtitles&&(e&&![tN.CAPTIONS,tN.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||i5(t,!0))};return r.addEventListener("loadstart",n),null==(i=r.textTracks)||i.addEventListener("addtrack",n),null==(a=r.textTracks)||a.addEventListener("removetrack",n),()=>{var e,t;r.removeEventListener("loadstart",n),null==(e=r.textTracks)||e.removeEventListener("addtrack",n),null==(t=r.textTracks)||t.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=i$(i,{kind:tN.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&ae.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),s=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==s||s.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==s||s.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&ir(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!t4.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else t4.pictureInPictureElement&&t4.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let s=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[iB];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===tV.FULLSCREEN?i:a})(e);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let e=s.shadowRoot;if(!(iB in e))return ir(s,r);for(;null==e?void 0:e[iB];){if(e[iB]===r)return!0;e=null==(t=e[iB])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(iF){let e=null==(t=null==i?void 0:i[iF])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&t5.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!iX||!iz(t))return tP.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return iJ&&iZ(t)?(null==t?void 0:t.disablePictureInPicture)?tP.UNAVAILABLE:void 0:tP.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return tP.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&i6.then(t=>e(t?void 0:tP.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return i1&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?tP.UNAVAILABLE:void 0:tP.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>i0?(null==t?void 0:t.availability)==="not-available"?tP.UNAVAILABLE:void 0:tP.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:tP.UNAVAILABLE:tP.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?tP.UNAVAILABLE:void 0:tP.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},ai={[tL.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,s;let n,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=i$(l,{kind:tN.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),n=i.href}}let u=e.mediaDuration.get(t),h=null==(s=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:s.text;return null!=i&&null==h&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:n,mediaPreviewCoords:o,mediaPreviewChapter:h}},[tL.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[tL.MEDIA_PLAY_REQUEST](e,t){var i,a,r,s;let n=e.mediaStreamType.get(t)===tH.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(n&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(s=null==(r=t.options)?void 0:r.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[tL.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[tL.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[tL.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[tL.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[tL.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[tL.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let s=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(s)))return;let n=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(s-n,t)},[tL.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,s=i2(t),n=ix(i),o=null==(a=n[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&t5.localStorage.setItem("media-chrome-pref-subtitles-lang",o),iW(tU.SHOWING,s,n)},[tL.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=i2(t);iW(tU.DISABLED,a,null!=i?i:[])},[tL.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){i5(t,i)},[tL.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[tL.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[tL.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[tL.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[tL.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[tL.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[tL.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[tL.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[tL.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var aa=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ar=(e,t,i)=>(aa(e,t,"read from private field"),i?i.call(e):t.get(e)),as=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},an=(e,t,i,a)=>(aa(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ao=(e,t,i)=>(aa(e,t,"access private method"),i);let al=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],ad={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class au extends iM{constructor(){super(),as(this,H),as(this,W),as(this,F),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,as(this,C,new iO(this,ad.HOTKEYS)),as(this,O,void 0),as(this,N,void 0),as(this,U,void 0),as(this,x,void 0),as(this,P,e=>{var t;null==(t=ar(this,N))||t.dispatch(e)}),this.associateElement(this);let e={};an(this,U,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new t5.CustomEvent(tO[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(ad.NO_HOTKEYS,ad.HOTKEYS,ad.DEFAULT_STREAM_TYPE,ad.DEFAULT_SUBTITLES,ad.DEFAULT_DURATION,ad.LANG)}get mediaStore(){return ar(this,N)}set mediaStore(e){var t,i;if(ar(this,N)&&(null==(t=ar(this,x))||t.call(this),an(this,x,void 0)),an(this,N,e),!ar(this,N)&&!this.hasAttribute(ad.NO_DEFAULT_STORE))return void ao(this,H,V).call(this);an(this,x,null==(i=ar(this,N))?void 0:i.subscribe(ar(this,U)))}get fullscreenElement(){var e;return null!=(e=ar(this,O))?e:this}set fullscreenElement(e){var t;this.hasAttribute(ad.FULLSCREEN_ELEMENT)&&this.removeAttribute(ad.FULLSCREEN_ELEMENT),an(this,O,e),null==(t=ar(this,N))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return ih(this,ad.DEFAULT_SUBTITLES)}set defaultSubtitles(e){ic(this,ad.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return im(this,ad.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){iE(this,ad.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return id(this,ad.DEFAULT_DURATION)}set defaultDuration(e){iu(this,ad.DEFAULT_DURATION,e)}get noHotkeys(){return ih(this,ad.NO_HOTKEYS)}set noHotkeys(e){ic(this,ad.NO_HOTKEYS,e)}get keysUsed(){return im(this,ad.KEYS_USED)}set keysUsed(e){iE(this,ad.KEYS_USED,e)}get liveEdgeOffset(){return id(this,ad.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){iu(this,ad.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return ih(this,ad.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){ic(this,ad.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return ih(this,ad.NO_VOLUME_PREF)}set noVolumePref(e){ic(this,ad.NO_VOLUME_PREF,e)}get noSubtitlesLangPref(){return ih(this,ad.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){ic(this,ad.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return ih(this,ad.NO_DEFAULT_STORE)}set noDefaultStore(e){ic(this,ad.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,s,n,o,l,d,u,h;if(super.attributeChangedCallback(e,t,i),e===ad.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(ad.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===ad.HOTKEYS)ar(this,C).value=i;else if(e===ad.DEFAULT_SUBTITLES&&i!==t)null==(a=ar(this,N))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(ad.DEFAULT_SUBTITLES)}});else if(e===ad.DEFAULT_STREAM_TYPE)null==(s=ar(this,N))||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(ad.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===ad.LIVE_EDGE_OFFSET)null==(n=ar(this,N))||n.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(ad.LIVE_EDGE_OFFSET)?+this.getAttribute(ad.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(ad.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(ad.LIVE_EDGE_OFFSET)}});else if(e===ad.SEEK_TO_LIVE_OFFSET)null==(o=ar(this,N))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(ad.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(ad.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===ad.NO_AUTO_SEEK_TO_LIVE)null==(l=ar(this,N))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(ad.NO_AUTO_SEEK_TO_LIVE)}});else if(e===ad.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;an(this,O,e),null==(u=ar(this,N))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===ad.LANG&&i!==t&&(tQ=i,null==(h=ar(this,N))||h.dispatch({type:"optionschangerequest",detail:{mediaLang:i}}))}connectedCallback(){var e,t;ar(this,N)||this.hasAttribute(ad.NO_DEFAULT_STORE)||ao(this,H,V).call(this),null==(e=ar(this,N))||e.dispatch({type:"documentelementchangerequest",detail:t4}),super.connectedCallback(),ar(this,N)&&!ar(this,x)&&an(this,x,null==(t=ar(this,N))?void 0:t.subscribe(ar(this,U))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),ar(this,N)&&(null==(t=ar(this,N))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=ar(this,N))||i.dispatch({type:tL.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),ar(this,x)&&(null==(a=ar(this,x))||a.call(this),an(this,x,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=ar(this,N))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=ar(this,N))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){aA(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=af(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(tL).forEach(t=>{e.addEventListener(t,ar(this,P))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(tL).forEach(t=>{e.removeEventListener(t,ar(this,P))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),ar(this,N)&&Object.entries(ar(this,N).getState()).forEach(([t,i])=>{aA([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",ao(this,F,B))}disableHotkeys(){this.removeEventListener("keydown",ao(this,F,B)),this.removeEventListener("keyup",ao(this,W,$))}get hotkeys(){return im(this,ad.HOTKEYS)}set hotkeys(e){iE(this,ad.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,s;let n,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(ad.KEYS_USED))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||ar(this,C).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&ar(this,C).contains("nospace")))switch(e.key){case" ":case"k":n=ar(this,N).getState().mediaPaused?tL.MEDIA_PLAY_REQUEST:tL.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new t5.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n="off"===this.mediaStore.getState().mediaVolumeLevel?tL.MEDIA_UNMUTE_REQUEST:tL.MEDIA_MUTE_REQUEST,this.dispatchEvent(new t5.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=this.mediaStore.getState().mediaIsFullscreen?tL.MEDIA_EXIT_FULLSCREEN_REQUEST:tL.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new t5.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new t5.CustomEvent(tL.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(ad.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(ad.KEYBOARD_BACKWARD_SEEK_OFFSET):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new t5.CustomEvent(tL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(ad.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(ad.KEYBOARD_FORWARD_SEEK_OFFSET):10;o=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),l=new t5.CustomEvent(tL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}}C=new WeakMap,O=new WeakMap,N=new WeakMap,U=new WeakMap,x=new WeakMap,P=new WeakMap,H=new WeakSet,V=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=at,requestMap:r=ai,options:s={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{let o,l=[],d={options:{...s}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0!=e&&(i4(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u))))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},E=async(e,t)=>{var i,r,s,u,E,p,v,b,g,A,f,_,I,T,y,w;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await i9(...Object.values(e));let L=l.length>0&&0===t&&n,M=d.media!==o.media,k=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),R=(null==(s=d.media)?void 0:s.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(E=d.media)?void 0:E.audioTracks)!==(null==(p=o.media)?void 0:p.audioTracks),C=(null==(v=d.media)?void 0:v.remote)!==(null==(b=o.media)?void 0:b.remote),O=d.documentElement!==o.documentElement,N=!!d.media&&(M||L),U=!!(null==(g=d.media)?void 0:g.textTracks)&&(k||L),x=!!(null==(A=d.media)?void 0:A.videoRenditions)&&(R||L),P=!!(null==(f=d.media)?void 0:f.audioTracks)&&(D||L),H=!!(null==(_=d.media)?void 0:_.remote)&&(C||L),V=!!d.documentElement&&(O||L),W=N||U||x||P||H||V,$=0===l.length&&1===t&&n,F=!!o.media&&(M||$),B=!!(null==(I=o.media)?void 0:I.textTracks)&&(k||$),G=!!(null==(T=o.media)?void 0:T.videoRenditions)&&(R||$),K=!!(null==(y=o.media)?void 0:y.audioTracks)&&(D||$),q=!!(null==(w=o.media)?void 0:w.remote)&&(C||$),Y=!!o.documentElement&&(O||$),Q=F||B||G||K||q||Y;if(!(W||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:s=[],remoteEvents:n=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let E=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),F&&(o.media.addEventListener(t,E),m[e].mediaEvents=E)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),B&&(null==(a=o.media.textTracks)||a.addEventListener(t,E),m[e].textTracksEvents=E)}),c=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;c&&x&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),G&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,E),m[e].videoRenditionsEvents=E)}),c=m[e].audioTracksEvents,s.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,E),m[e].audioTracksEvents=E)}),c=m[e].remoteEvents,n.forEach(t=>{var i,a;c&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),q&&(null==(a=o.media.remote)||a.addEventListener(t,E),m[e].remoteEvents=E)}),c=m[e].rootEvents,l.forEach(t=>{c&&V&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,E),m[e].rootEvents=E)});let p=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{p&&W&&p(),Q&&(m[e].stateOwnersUpdateHandlers=t(E,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return E({media:e,fullscreenElement:t,documentElement:i,options:s}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode)return void h(r[t](a,d,e));"mediaelementchangerequest"===t?E({media:i}):"fullscreenelementchangerequest"===t?E({fullscreenElement:i}):"documentelementchangerequest"===t?E({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),c())},getState:()=>u,subscribe:e=>(E({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(E({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(ad.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(ad.DEFAULT_DURATION)?+this.getAttribute(ad.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(ad.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(ad.LIVE_EDGE_OFFSET)?+this.getAttribute(ad.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(ad.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(ad.SEEK_TO_LIVE_OFFSET):this.hasAttribute(ad.LIVE_EDGE_OFFSET)?+this.getAttribute(ad.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(ad.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(ad.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(ad.NO_SUBTITLES_LANG_PREF)}})},W=new WeakSet,$=function(e){let{key:t}=e;if(!al.includes(t))return void this.removeEventListener("keyup",ao(this,W,$));this.keyboardShortcutHandler(e)},F=new WeakSet,B=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!al.includes(a))return void this.removeEventListener("keyup",ao(this,W,$));[" ","ArrowLeft","ArrowRight"].includes(a)&&!(ar(this,C).contains(`no${a.toLowerCase()}`)||" "===a&&ar(this,C).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",ao(this,W,$),{once:!0})};let ah=Object.values(tD),ac=Object.values(tk),am=e=>{var t,i,a,r;let{observedAttributes:s}=e.constructor;!s&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(t5.customElements.upgrade(e),{observedAttributes:s}=e.constructor);let n=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,tM.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(s||n)?(s||n).filter(e=>ah.includes(e)):[]},aE=e=>(e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&t5.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof t5.customElements.get(e.nodeName.toLowerCase()))&&t5.customElements.upgrade(e),ac.some(t=>t in e)})(e)||!!am(e).length,ap=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},av={[tD.MEDIA_SUBTITLES_LIST]:iH,[tD.MEDIA_SUBTITLES_SHOWING]:iH,[tD.MEDIA_SEEKABLE]:ap,[tD.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(ap).join(" "),[tD.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[tD.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(tW).join(" ")},[tD.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(t$).join(" ")}},ab=async(e,t,i)=>{var a,r;if(e.isConnected||await tB(0),"boolean"==typeof i||null==i)return ic(e,t,i);if("number"==typeof i)return iu(e,t,i);if("string"==typeof i)return iE(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let s=null!=(r=null==(a=av[t])?void 0:a.call(av,i))?r:i;return e.setAttribute(t,s)},ag=(e,t)=>{if((e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))})(e))return;let i=(e,t)=>{var i,a;aE(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>ag(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!aE(e))return void t5.customElements.whenDefined(a).then(()=>{i(e,t)});i(e,t)},aA=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=am(e),r=t.toLowerCase();a.includes(r)&&ab(e,r,i)})},af=(e,t,i)=>{ag(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(tL.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(tL.UNREGISTER_MEDIA_STATE_RECEIVER,r);let s=[],n=e=>{let a=e.target;"media"!==a.name&&(s.forEach(e=>ag(e,i)),(s=[...a.assignedElements({flatten:!0})]).forEach(e=>ag(e,t)))};e.addEventListener("slotchange",n);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:s,target:n,attributeName:o}=e;"childList"===s?(Array.prototype.forEach.call(a,e=>ag(e,t)),Array.prototype.forEach.call(r,e=>ag(e,i))):"attributes"===s&&o===tM.MEDIA_CHROME_ATTRIBUTES&&(aE(n)?t(n):i(n))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{ag(e,i),e.removeEventListener("slotchange",n),o.disconnect(),e.removeEventListener(tL.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(tL.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};t5.customElements.get("media-controller")||t5.customElements.define("media-controller",au);let a_={PLACEMENT:"placement",BOUNDS:"bounds"};class aI extends t5.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!io(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=is(this,"#"+this.bounds))?e:function(e){var t;return null!=(t=function(e){var t;let{MEDIA_CONTROLLER:i}=tM,a=e.getAttribute(i);if(a)return null==(t=function(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}(e))?void 0:t.getElementById(a)}(e))?t:is(e,"media-controller")}(this);if(!a)return;let{x:r,width:s}=a.getBoundingClientRect(),{x:n,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),h=u?parseFloat(u.replace("px","")):0,c=n-r+d-h,m=n+o-(r+s)+d+h;return c<0?void this.style.setProperty("--media-tooltip-offset-x",`${c}px`):m>0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[a_.PLACEMENT,a_.BOUNDS]}get placement(){return im(this,a_.PLACEMENT)}set placement(e){iE(this,a_.PLACEMENT,e)}get bounds(){return im(this,a_.BOUNDS)}set bounds(e){iE(this,a_.BOUNDS,e)}}aI.shadowRootOptions={mode:"open"},aI.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},t5.customElements.get("media-tooltip")||t5.customElements.define("media-tooltip",aI);var aT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ay=(e,t,i)=>(aT(e,t,"read from private field"),i?i.call(e):t.get(e)),aw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aS=(e,t,i,a)=>(aT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aL={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class aM extends t5.HTMLElement{constructor(){if(super(),aw(this,j),aw(this,G,void 0),this.preventClick=!1,this.tooltipEl=null,aw(this,K,e=>{this.preventClick||this.handleClick(e),setTimeout(ay(this,q),0)}),aw(this,q,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),aw(this,Y,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",ay(this,Y));this.preventClick||this.handleClick(e)}),aw(this,Q,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",ay(this,Y));this.addEventListener("keyup",ay(this,Y),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",aL.TOOLTIP_PLACEMENT,tM.MEDIA_CONTROLLER,tD.MEDIA_LANG]}enable(){this.addEventListener("click",ay(this,K)),this.addEventListener("keydown",ay(this,Q)),this.tabIndex=0}disable(){this.removeEventListener("click",ay(this,K)),this.removeEventListener("keydown",ay(this,Q)),this.removeEventListener("keyup",ay(this,Y)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===tM.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ay(this,G))?void 0:a.unassociateElement)||r.call(a,this),aS(this,G,null)),i&&this.isConnected&&(aS(this,G,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=ay(this,G))?void 0:n.associateElement)||o.call(n,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===aL.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===tD.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),ay(this,q).call(this)}connectedCallback(){var e,t,i;let{style:a}=il(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(tM.MEDIA_CONTROLLER);r&&(aS(this,G,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ay(this,G))?void 0:t.associateElement)||i.call(t,this)),t5.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=j,t=Z,aT(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=ay(this,G))?void 0:e.unassociateElement)||t.call(e,this),aS(this,G,null),this.removeEventListener("mouseenter",ay(this,q)),this.removeEventListener("focus",ay(this,q)),this.removeEventListener("click",ay(this,K))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return im(this,aL.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){iE(this,aL.TOOLTIP_PLACEMENT,e)}get mediaController(){return im(this,tM.MEDIA_CONTROLLER)}set mediaController(e){iE(this,tM.MEDIA_CONTROLLER,e)}get disabled(){return ih(this,aL.DISABLED)}set disabled(e){ic(this,aL.DISABLED,e)}get noTooltip(){return ih(this,aL.NO_TOOLTIP)}set noTooltip(e){ic(this,aL.NO_TOOLTIP,e)}handleClick(e){}}G=new WeakMap,K=new WeakMap,q=new WeakMap,Y=new WeakMap,Q=new WeakMap,j=new WeakSet,Z=function(){this.addEventListener("mouseenter",ay(this,q)),this.addEventListener("focus",ay(this,q)),this.addEventListener("click",ay(this,K));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},aM.shadowRootOptions={mode:"open"},aM.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${aI.shadowRootOptions.mode}">
          ${aI.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},aM.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},aM.getTooltipContentHTML=function(){return""},t5.customElements.get("media-chrome-button")||t5.customElements.define("media-chrome-button",aM);let ak=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,aR=e=>{let t=e.mediaIsAirplaying?tj("stop airplay"):tj("start airplay");e.setAttribute("aria-label",t)};class aD extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_IS_AIRPLAYING,tD.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),aR(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tD.MEDIA_IS_AIRPLAYING&&aR(this)}get mediaIsAirplaying(){return ih(this,tD.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){ic(this,tD.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return im(this,tD.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){iE(this,tD.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new t5.CustomEvent(tL.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}aD.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tD.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tD.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tD.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${tD.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ak}</slot>
      <slot name="exit">${ak}</slot>
    </slot>
  `},aD.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${tj("start airplay")}</slot>
    <slot name="tooltip-exit">${tj("stop airplay")}</slot>
  `},t5.customElements.get("media-airplay-button")||t5.customElements.define("media-airplay-button",aD);let aC=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,aO=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,aN=e=>{e.setAttribute("aria-checked",(e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(tD.MEDIA_SUBTITLES_SHOWING)})(e).toString())};class aU extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_SUBTITLES_LIST,tD.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",tj("closed captions")),aN(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tD.MEDIA_SUBTITLES_SHOWING&&aN(this)}get mediaSubtitlesList(){return ax(this,tD.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){aP(this,tD.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ax(this,tD.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){aP(this,tD.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new t5.CustomEvent(tL.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}aU.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${aC}</slot>
      <slot name="off">${aO}</slot>
    </slot>
  `},aU.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${tj("Enable captions")}</slot>
    <slot name="tooltip-disable">${tj("Disable captions")}</slot>
  `};let ax=(e,t)=>{let i=e.getAttribute(t);return i?iU(i):[]},aP=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=iH(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};t5.customElements.get("media-captions-button")||t5.customElements.define("media-captions-button",aU);let aH=e=>{let t=e.mediaIsCasting?tj("stop casting"):tj("start casting");e.setAttribute("aria-label",t)};class aV extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_IS_CASTING,tD.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),aH(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tD.MEDIA_IS_CASTING&&aH(this)}get mediaIsCasting(){return ih(this,tD.MEDIA_IS_CASTING)}set mediaIsCasting(e){ic(this,tD.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return im(this,tD.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){iE(this,tD.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?tL.MEDIA_EXIT_CAST_REQUEST:tL.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new t5.CustomEvent(e,{composed:!0,bubbles:!0}))}}aV.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tD.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tD.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tD.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${tD.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},aV.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${tj("Start casting")}</slot>
    <slot name="tooltip-exit">${tj("Stop casting")}</slot>
  `},t5.customElements.get("media-cast-button")||t5.customElements.define("media-cast-button",aV);var aW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a$=(e,t,i)=>(aW(e,t,"read from private field"),i?i.call(e):t.get(e)),aF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aB=(e,t,i,a)=>(aW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aG=(e,t,i)=>(aW(e,t,"access private method"),i);let aK={OPEN:"open",ANCHOR:"anchor"};class aq extends t5.HTMLElement{constructor(){super(),aF(this,ee),aF(this,ei),aF(this,er),aF(this,en),aF(this,el),aF(this,eu),aF(this,z,!1),aF(this,X,null),aF(this,J,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[aK.OPEN,aK.ANCHOR]}get open(){return ih(this,aK.OPEN)}set open(e){ic(this,aK.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":aG(this,en,eo).call(this,e);break;case"focusout":aG(this,el,ed).call(this,e);break;case"keydown":aG(this,eu,eh).call(this,e)}}connectedCallback(){aG(this,ee,et).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){aG(this,ee,et).call(this),e===aK.OPEN&&i!==t&&(this.open?aG(this,ei,ea).call(this):aG(this,er,es).call(this))}focus(){aB(this,X,function e(t=document){var i;let a=null==t?void 0:t.activeElement;return a?null!=(i=e(a.shadowRoot))?i:a:null}());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}z=new WeakMap,X=new WeakMap,J=new WeakMap,ee=new WeakSet,et=function(){if(!a$(this,z)&&(aB(this,z,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=il(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},ei=new WeakSet,ea=function(){var e;null==(e=a$(this,J))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},er=new WeakSet,es=function(){var e;null==(e=a$(this,J))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},en=new WeakSet,eo=function(e){aB(this,J,e.relatedTarget),ir(this,e.relatedTarget)||(this.open=!this.open)},el=new WeakSet,ed=function(e){var t;!ir(this,e.relatedTarget)&&(null==(t=a$(this,X))||t.focus(),a$(this,J)&&a$(this,J)!==e.relatedTarget&&this.open&&(this.open=!1))},eu=new WeakSet,eh=function(e){var t,i,a,r,s;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(n)&&(e.preventDefault(),e.stopPropagation(),"Tab"===n?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===n&&(null==(s=a$(this,X))||s.focus(),this.open=!1))},aq.shadowRootOptions={mode:"open"},aq.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},aq.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},t5.customElements.get("media-chrome-dialog")||t5.customElements.define("media-chrome-dialog",aq);var aY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aQ=(e,t,i)=>(aY(e,t,"read from private field"),i?i.call(e):t.get(e)),aj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aZ=(e,t,i,a)=>(aY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),az=(e,t,i)=>(aY(e,t,"access private method"),i);class aX extends t5.HTMLElement{constructor(){if(super(),aj(this,e_),aj(this,eT),aj(this,ew),aj(this,eL),aj(this,ek),aj(this,eD),aj(this,eO),aj(this,eU),aj(this,ec,void 0),aj(this,em,void 0),aj(this,eE,void 0),aj(this,ep,void 0),aj(this,ev,{}),aj(this,eb,[]),aj(this,eg,()=>{if(this.range.matches(":focus-visible")){let{style:e}=il(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),aj(this,eA,()=>{let{style:e}=il(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),aj(this,ef,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),aZ(this,eE,this.shadowRoot.querySelector("#startpoint")),aZ(this,ep,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",tM.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===tM.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=aQ(this,ec))?void 0:a.unassociateElement)||r.call(a,this),aZ(this,ec,null)),i&&this.isConnected&&(aZ(this,ec,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=aQ(this,ec))?void 0:n.associateElement)||o.call(n,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),az(this,eT,ey).call(this)):(this.range.setAttribute(e,i),az(this,ew,eS).call(this)))}connectedCallback(){var e,t,i;let{style:a}=il(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),aQ(this,ev).pointer=il(this.shadowRoot,"#pointer"),aQ(this,ev).progress=il(this.shadowRoot,"#progress"),aQ(this,ev).thumb=il(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),aQ(this,ev).activeSegment=il(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(tM.MEDIA_CONTROLLER);r&&(aZ(this,ec,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=aQ(this,ec))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",aQ(this,eg)),this.shadowRoot.addEventListener("focusout",aQ(this,eA)),az(this,eT,ey).call(this),t9(this.container,aQ(this,ef))}disconnectedCallback(){var e,t;az(this,ew,eS).call(this),null==(t=null==(e=aQ(this,ec))?void 0:e.unassociateElement)||t.call(e,this),aZ(this,ec,null),this.shadowRoot.removeEventListener("focusin",aQ(this,eg)),this.shadowRoot.removeEventListener("focusout",aQ(this,eA)),ie(this.container,aQ(this,ef))}updatePointerBar(e){var t;null==(t=aQ(this,ev).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=aQ(this,ev).progress)||e.style.setProperty("width",`${i}%`),null==(t=aQ(this,ev).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];aZ(this,eb,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[s,n]=[0===e,e===i.length-1],o=s?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=n?a:i[e+1],d=`calc(${(l-r)*100}%${s||n?"":" - var(--segments-gap)"})`,u=t4.createElementNS("http://www.w3.org/2000/svg","rect"),h=il(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,s=a.y-i.y,n=r*r+s*s;return 0===n?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*s)/n))}(e.clientX,e.clientY,aQ(this,eE).getBoundingClientRect(),aQ(this,ep).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":az(this,eU,ex).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":az(this,ek,eR).call(this,e);break;case"pointerdown":az(this,eL,eM).call(this,e);break;case"pointerup":az(this,eD,eC).call(this);break;case"pointerleave":az(this,eO,eN).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ec=new WeakMap,em=new WeakMap,eE=new WeakMap,ep=new WeakMap,ev=new WeakMap,eb=new WeakMap,eg=new WeakMap,eA=new WeakMap,ef=new WeakMap,e_=new WeakSet,eI=function(e){let t=aQ(this,ev).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=aQ(this,eb).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},eT=new WeakSet,ey=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},ew=new WeakSet,eS=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=t5.window)||e.removeEventListener("pointerup",this),null==(t=t5.window)||t.removeEventListener("pointermove",this)},eL=new WeakSet,eM=function(e){var t;aZ(this,em,e.composedPath().includes(this.range)),null==(t=t5.window)||t.addEventListener("pointerup",this)},ek=new WeakSet,eR=function(e){var t;"mouse"!==e.pointerType&&az(this,eL,eM).call(this,e),this.addEventListener("pointerleave",this),null==(t=t5.window)||t.addEventListener("pointermove",this)},eD=new WeakSet,eC=function(){var e;null==(e=t5.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},eO=new WeakSet,eN=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=t5.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=aQ(this,ev).activeSegment)||t.style.removeProperty("transform")},eU=new WeakSet,ex=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),az(this,e_,eI).call(this,e),this.dragging&&("mouse"!==e.pointerType||!aQ(this,em))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},aX.shadowRootOptions={mode:"open"},aX.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},t5.customElements.get("media-chrome-range")||t5.customElements.define("media-chrome-range",aX);var aJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a0=(e,t,i)=>(aJ(e,t,"read from private field"),i?i.call(e):t.get(e)),a1=(e,t,i,a)=>(aJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class a2 extends t5.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eP,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tM.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===tM.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=a0(this,eP))?void 0:a.unassociateElement)||r.call(a,this),a1(this,eP,null)),i&&this.isConnected&&(a1(this,eP,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=a0(this,eP))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(tM.MEDIA_CONTROLLER);a&&(a1(this,eP,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=a0(this,eP))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=a0(this,eP))?void 0:e.unassociateElement)||t.call(e,this),a1(this,eP,null)}}eP=new WeakMap,a2.shadowRootOptions={mode:"open"},a2.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},t5.customElements.get("media-control-bar")||t5.customElements.define("media-control-bar",a2);var a3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a5=(e,t,i)=>(a3(e,t,"read from private field"),i?i.call(e):t.get(e)),a4=(e,t,i,a)=>(a3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class a7 extends t5.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eH,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tM.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===tM.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=a5(this,eH))?void 0:a.unassociateElement)||r.call(a,this),a4(this,eH,null)),i&&this.isConnected&&(a4(this,eH,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=a5(this,eH))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let{style:a}=il(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(tM.MEDIA_CONTROLLER);r&&(a4(this,eH,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=a5(this,eH))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=a5(this,eH))?void 0:e.unassociateElement)||t.call(e,this),a4(this,eH,null)}}eH=new WeakMap,a7.shadowRootOptions={mode:"open"},a7.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},a7.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},t5.customElements.get("media-text-display")||t5.customElements.define("media-text-display",a7);var a8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a6=(e,t,i)=>(a8(e,t,"read from private field"),i?i.call(e):t.get(e));class a9 extends a7{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eV,void 0),((e,t,i,a)=>(a8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eV,this.shadowRoot.querySelector("slot")),a6(this,eV).textContent=tq(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===tD.MEDIA_DURATION&&(a6(this,eV).textContent=tq(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return id(this,tD.MEDIA_DURATION)}set mediaDuration(e){iu(this,tD.MEDIA_DURATION,e)}}eV=new WeakMap,a9.getSlotTemplateHTML=function(e,t){return`
    <slot>${tq(t.mediaDuration)}</slot>
  `},t5.customElements.get("media-duration-display")||t5.customElements.define("media-duration-display",a9);let re={2:tj("Network Error"),3:tj("Decode Error"),4:tj("Source Not Supported"),5:tj("Encryption Error")},rt={2:tj("A network error caused the media download to fail."),3:tj("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:tj("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:tj("The media is encrypted and there are no keys to decrypt it.")},ri=e=>{var t,i;return 1===e.code?null:{title:null!=(t=re[e.code])?t:`Error ${e.code}`,message:null!=(i=rt[e.code])?i:e.message}};var ra=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function rr(e){var t;let{title:i,message:a}=null!=(t=ri(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let rs=[tD.MEDIA_ERROR_CODE,tD.MEDIA_ERROR_MESSAGE];class rn extends aq{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eW,null)}static get observedAttributes(){return[...super.observedAttributes,...rs]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!rs.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==ri(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return ra(this,e=eW,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;ra(this,t=eW,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return id(this,"mediaerrorcode")}set mediaErrorCode(e){iu(this,"mediaerrorcode",e)}get mediaErrorMessage(){return im(this,"mediaerrormessage")}set mediaErrorMessage(e){iE(this,"mediaerrormessage",e)}}eW=new WeakMap,rn.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${rr({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},rn.formatErrorMessage=rr,t5.customElements.get("media-error-dialog")||t5.customElements.define("media-error-dialog",rn);let ro=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,rl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,rd=e=>{let t=e.mediaIsFullscreen?tj("exit fullscreen mode"):tj("enter fullscreen mode");e.setAttribute("aria-label",t)};class ru extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_IS_FULLSCREEN,tD.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rd(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tD.MEDIA_IS_FULLSCREEN&&rd(this)}get mediaFullscreenUnavailable(){return im(this,tD.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){iE(this,tD.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return ih(this,tD.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){ic(this,tD.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?tL.MEDIA_EXIT_FULLSCREEN_REQUEST:tL.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new t5.CustomEvent(e,{composed:!0,bubbles:!0}))}}ru.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tD.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tD.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tD.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${tD.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ro}</slot>
      <slot name="exit">${rl}</slot>
    </slot>
  `},ru.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${tj("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${tj("Exit fullscreen mode")}</slot>
  `},t5.customElements.get("media-fullscreen-button")||t5.customElements.define("media-fullscreen-button",ru);let{MEDIA_TIME_IS_LIVE:rh,MEDIA_PAUSED:rc}=tD,{MEDIA_SEEK_TO_LIVE_REQUEST:rm,MEDIA_PLAY_REQUEST:rE}=tL,rp=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?tj("seek to live"):tj("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=tj("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class rv extends aM{static get observedAttributes(){return[...super.observedAttributes,rh,rc]}connectedCallback(){super.connectedCallback(),rp(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),rp(this)}get mediaPaused(){return ih(this,tD.MEDIA_PAUSED)}set mediaPaused(e){ic(this,tD.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return ih(this,tD.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){ic(this,tD.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new t5.CustomEvent(rm,{composed:!0,bubbles:!0})),this.hasAttribute(rc)&&this.dispatchEvent(new t5.CustomEvent(rE,{composed:!0,bubbles:!0})))}}rv.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${rh}]:not([${rc}])) slot[name=indicator] > *,
      :host([${rh}]:not([${rc}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${rh}]:not([${rc}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${tj("live")}</slot>
  `},t5.customElements.get("media-live-button")||t5.customElements.define("media-live-button",rv);var rb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rg=(e,t,i)=>(rb(e,t,"read from private field"),i?i.call(e):t.get(e)),rA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rf=(e,t,i,a)=>(rb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let r_={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},rI=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class rT extends t5.HTMLElement{constructor(){if(super(),rA(this,e$,void 0),rA(this,eF,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tM.MEDIA_CONTROLLER,tD.MEDIA_PAUSED,tD.MEDIA_LOADING,r_.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===r_.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===tM.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=rg(this,e$))?void 0:a.unassociateElement)||r.call(a,this),rf(this,e$,null)),i&&this.isConnected&&(rf(this,e$,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=rg(this,e$))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(tM.MEDIA_CONTROLLER);a&&(rf(this,e$,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=rg(this,e$))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rg(this,e$))?void 0:e.unassociateElement)||t.call(e,this),rf(this,e$,null)}get loadingDelay(){return rg(this,eF)}set loadingDelay(e){rf(this,eF,e);let{style:t}=il(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return ih(this,tD.MEDIA_PAUSED)}set mediaPaused(e){ic(this,tD.MEDIA_PAUSED,e)}get mediaLoading(){return ih(this,tD.MEDIA_LOADING)}set mediaLoading(e){ic(this,tD.MEDIA_LOADING,e)}get mediaController(){return im(this,tM.MEDIA_CONTROLLER)}set mediaController(e){iE(this,tM.MEDIA_CONTROLLER,e)}get noAutohide(){return ih(this,r_.NO_AUTOHIDE)}set noAutohide(e){ic(this,r_.NO_AUTOHIDE,e)}}e$=new WeakMap,eF=new WeakMap,rT.shadowRootOptions={mode:"open"},rT.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${tD.MEDIA_LOADING}]:not([${tD.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${tD.MEDIA_LOADING}]:not([${tD.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${tD.MEDIA_LOADING}]:not([${tD.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${rI}</slot>
    <div id="status" role="status" aria-live="polite">${tj("media loading")}</div>
  `},t5.customElements.get("media-loading-indicator")||t5.customElements.define("media-loading-indicator",rT);let ry=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,rw=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,rS=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,rL=e=>{let t="off"===e.mediaVolumeLevel?tj("unmute"):tj("mute");e.setAttribute("aria-label",t)};class rM extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),rL(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tD.MEDIA_VOLUME_LEVEL&&rL(this)}get mediaVolumeLevel(){return im(this,tD.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){iE(this,tD.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?tL.MEDIA_UNMUTE_REQUEST:tL.MEDIA_MUTE_REQUEST;this.dispatchEvent(new t5.CustomEvent(e,{composed:!0,bubbles:!0}))}}rM.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${tD.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${tD.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${tD.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${tD.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${tD.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${tD.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${tD.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${ry}</slot>
      <slot name="low">${rw}</slot>
      <slot name="medium">${rw}</slot>
      <slot name="high">${rS}</slot>
    </slot>
  `},rM.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${tj("Mute")}</slot>
    <slot name="tooltip-unmute">${tj("Unmute")}</slot>
  `},t5.customElements.get("media-mute-button")||t5.customElements.define("media-mute-button",rM);let rk=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,rR=e=>{let t=e.mediaIsPip?tj("exit picture in picture mode"):tj("enter picture in picture mode");e.setAttribute("aria-label",t)};class rD extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_IS_PIP,tD.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rR(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tD.MEDIA_IS_PIP&&rR(this)}get mediaPipUnavailable(){return im(this,tD.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){iE(this,tD.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return ih(this,tD.MEDIA_IS_PIP)}set mediaIsPip(e){ic(this,tD.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?tL.MEDIA_EXIT_PIP_REQUEST:tL.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new t5.CustomEvent(e,{composed:!0,bubbles:!0}))}}rD.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tD.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${tD.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tD.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${tD.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${rk}</slot>
      <slot name="exit">${rk}</slot>
    </slot>
  `},rD.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${tj("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${tj("Exit picture in picture mode")}</slot>
  `},t5.customElements.get("media-pip-button")||t5.customElements.define("media-pip-button",rD);var rC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let rO={RATES:"rates"},rN=[1,1.2,1.5,1.7,2];class rU extends aM{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eB,new iO(this,rO.RATES,{defaultValue:rN})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_PLAYBACK_RATE,rO.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rO.RATES&&(rC(this,eB).value=i),e===tD.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",tj("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return rC(this,eB)}set rates(e){e?Array.isArray(e)?rC(this,eB).value=e.join(" "):"string"==typeof e&&(rC(this,eB).value=e):rC(this,eB).value=""}get mediaPlaybackRate(){return id(this,tD.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){iu(this,tD.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(rC(this,eB).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new t5.CustomEvent(tL.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}eB=new WeakMap,rU.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},rU.getTooltipContentHTML=function(){return tj("Playback rate")},t5.customElements.get("media-playback-rate-button")||t5.customElements.define("media-playback-rate-button",rU);let rx=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,rP=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,rH=e=>{let t=e.mediaPaused?tj("play"):tj("pause");e.setAttribute("aria-label",t)};class rV extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_PAUSED,tD.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),rH(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===tD.MEDIA_PAUSED||e===tD.MEDIA_LANG)&&rH(this)}get mediaPaused(){return ih(this,tD.MEDIA_PAUSED)}set mediaPaused(e){ic(this,tD.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?tL.MEDIA_PLAY_REQUEST:tL.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new t5.CustomEvent(e,{composed:!0,bubbles:!0}))}}rV.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tD.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${tD.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${tD.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${tD.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${rx}</slot>
      <slot name="pause">${rP}</slot>
    </slot>
  `},rV.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${tj("Play")}</slot>
    <slot name="tooltip-pause">${tj("Pause")}</slot>
  `},t5.customElements.get("media-play-button")||t5.customElements.define("media-play-button",rV);let rW={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class r$ extends t5.HTMLElement{static get observedAttributes(){return[rW.PLACEHOLDER_SRC,rW.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if(e===rW.SRC&&(null==i?this.image.removeAttribute(rW.SRC):this.image.setAttribute(rW.SRC,i)),e===rW.PLACEHOLDER_SRC)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return im(this,rW.PLACEHOLDER_SRC)}set placeholderSrc(e){iE(this,rW.SRC,e)}get src(){return im(this,rW.SRC)}set src(e){iE(this,rW.SRC,e)}}r$.shadowRootOptions={mode:"open"},r$.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},t5.customElements.get("media-poster-image")||t5.customElements.define("media-poster-image",r$);var rF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class rB extends a7{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eG,void 0),((e,t,i,a)=>(rF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eG,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_PREVIEW_CHAPTER,tD.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===tD.MEDIA_PREVIEW_CHAPTER||e===tD.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((rF(this,a=eG,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=tj("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return im(this,tD.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){iE(this,tD.MEDIA_PREVIEW_CHAPTER,e)}}eG=new WeakMap,t5.customElements.get("media-preview-chapter-display")||t5.customElements.define("media-preview-chapter-display",rB);var rG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rK=(e,t,i)=>(rG(e,t,"read from private field"),i?i.call(e):t.get(e)),rq=(e,t,i,a)=>(rG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rY extends t5.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eK,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=it(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tM.MEDIA_CONTROLLER,tD.MEDIA_PREVIEW_IMAGE,tD.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(tM.MEDIA_CONTROLLER);a&&(rq(this,eK,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=rK(this,eK))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rK(this,eK))?void 0:e.unassociateElement)||t.call(e,this),rq(this,eK,null)}attributeChangedCallback(e,t,i){var a,r,s,n,o;[tD.MEDIA_PREVIEW_IMAGE,tD.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===tM.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=rK(this,eK))?void 0:a.unassociateElement)||r.call(a,this),rq(this,eK,null)),i&&this.isConnected&&(rq(this,eK,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=rK(this,eK))?void 0:n.associateElement)||o.call(n,this)))}get mediaPreviewImage(){return im(this,tD.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){iE(this,tD.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(tD.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e)return void this.removeAttribute(tD.MEDIA_PREVIEW_COORDS);this.setAttribute(tD.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,s]=e,n=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),h=Math.min(parseInt(o)/r,parseInt(l)/s),c=Math.max(parseInt(d)/r,parseInt(u)/s),m=h<1,E=m?h:c>1?c:1,{style:p}=il(this.shadowRoot,":host"),v=il(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=m?"min":"max";p.setProperty(`${g}-width`,"initial","important"),p.setProperty(`${g}-height`,"initial","important"),p.width=`${r*E}px`,p.height=`${s*E}px`;let A=()=>{v.width=`${this.imgWidth*E}px`,v.height=`${this.imgHeight*E}px`,v.display="block"};b.src!==n&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,A()},b.src=n,A()),A(),v.transform=`translate(-${i*E}px, -${a*E}px)`}}eK=new WeakMap,rY.shadowRootOptions={mode:"open"},rY.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},t5.customElements.get("media-preview-thumbnail")||t5.customElements.define("media-preview-thumbnail",rY);var rQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rj=(e,t,i)=>(rQ(e,t,"read from private field"),i?i.call(e):t.get(e));class rZ extends a7{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eq,void 0),((e,t,i,a)=>(rQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eq,this.shadowRoot.querySelector("slot")),rj(this,eq).textContent=tq(0)}static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tD.MEDIA_PREVIEW_TIME&&null!=i&&(rj(this,eq).textContent=tq(parseFloat(i)))}get mediaPreviewTime(){return id(this,tD.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){iu(this,tD.MEDIA_PREVIEW_TIME,e)}}eq=new WeakMap,t5.customElements.get("media-preview-time-display")||t5.customElements.define("media-preview-time-display",rZ);let rz={SEEK_OFFSET:"seekoffset"};class rX extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_CURRENT_TIME,rz.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=id(this,rz.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rz.SEEK_OFFSET&&(this.seekOffset=id(this,rz.SEEK_OFFSET,30))}get seekOffset(){return id(this,rz.SEEK_OFFSET,30)}set seekOffset(e){iu(this,rz.SEEK_OFFSET,e),this.setAttribute("aria-label",tj("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),ii(ia(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return id(this,tD.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){iu(this,tD.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new t5.CustomEvent(tL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}rX.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},rX.getTooltipContentHTML=function(){return tj("Seek backward")},t5.customElements.get("media-seek-backward-button")||t5.customElements.define("media-seek-backward-button",rX);let rJ={SEEK_OFFSET:"seekoffset"};class r0 extends aM{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_CURRENT_TIME,rJ.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=id(this,rJ.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rJ.SEEK_OFFSET&&(this.seekOffset=id(this,rJ.SEEK_OFFSET,30))}get seekOffset(){return id(this,rJ.SEEK_OFFSET,30)}set seekOffset(e){iu(this,rJ.SEEK_OFFSET,e),this.setAttribute("aria-label",tj("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),ii(ia(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return id(this,tD.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){iu(this,tD.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new t5.CustomEvent(tL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}r0.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},r0.getTooltipContentHTML=function(){return tj("Seek forward")},t5.customElements.get("media-seek-forward-button")||t5.customElements.define("media-seek-forward-button",r0);var r1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r2=(e,t,i)=>(r1(e,t,"read from private field"),i?i.call(e):t.get(e));let r3={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},r5=[...Object.values(r3),tD.MEDIA_CURRENT_TIME,tD.MEDIA_DURATION,tD.MEDIA_SEEKABLE],r4=["Enter"," "],r7="&nbsp;/&nbsp;",r8=(e,{timesSep:t=r7}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,s]=null!=(a=e.mediaSeekable)?a:[],n=0;Number.isFinite(e.mediaDuration)?n=e.mediaDuration:Number.isFinite(s)&&(n=s);let o=e.remaining?tq(0-(n-r)):tq(r);return e.showDuration?`${o}${t}${tq(n)}`:o};class r6 extends a7{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eY,void 0),((e,t,i,a)=>(r1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eY,this.shadowRoot.querySelector("slot")),r2(this,eY).innerHTML=`${r8(this)}`}static get observedAttributes(){return[...super.observedAttributes,...r5,"disabled"]}connectedCallback(){let{style:e}=il(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",tj("playback time"));let t=e=>{let{key:i}=e;if(!r4.includes(i))return void this.removeEventListener("keyup",t);this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!r4.includes(r))return void this.removeEventListener("keyup",t);this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){r5.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return ih(this,r3.REMAINING)}set remaining(e){ic(this,r3.REMAINING,e)}get showDuration(){return ih(this,r3.SHOW_DURATION)}set showDuration(e){ic(this,r3.SHOW_DURATION,e)}get noToggle(){return ih(this,r3.NO_TOGGLE)}set noToggle(e){ic(this,r3.NO_TOGGLE,e)}get mediaDuration(){return id(this,tD.MEDIA_DURATION)}set mediaDuration(e){iu(this,tD.MEDIA_DURATION,e)}get mediaCurrentTime(){return id(this,tD.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){iu(this,tD.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(tD.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(tD.MEDIA_SEEKABLE);this.setAttribute(tD.MEDIA_SEEKABLE,e.join(":"))}update(){let e=r8(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let s=e.remaining?tK(0-(r-i)):tK(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",s);let n=tK(r),o=`${s} of ${n}`;e.setAttribute("aria-valuetext",o)})(this),e!==r2(this,eY).innerHTML&&(r2(this,eY).innerHTML=e)}}eY=new WeakMap,r6.getSlotTemplateHTML=function(e,t){return`
    <slot>${r8(t)}</slot>
  `},t5.customElements.get("media-time-display")||t5.customElements.define("media-time-display",r6);var r9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},se=(e,t,i)=>(r9(e,t,"read from private field"),i?i.call(e):t.get(e)),st=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},si=(e,t,i,a)=>(r9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sa{constructor(e,t,i){st(this,eQ,void 0),st(this,ej,void 0),st(this,eZ,void 0),st(this,ez,void 0),st(this,eX,void 0),st(this,eJ,void 0),st(this,e0,void 0),st(this,e1,void 0),st(this,e2,0),st(this,e3,(e=performance.now())=>{si(this,e2,requestAnimationFrame(se(this,e3))),si(this,ez,performance.now()-se(this,eZ));let t=1e3/this.fps;if(se(this,ez)>t){si(this,eZ,e-se(this,ez)%t);let i=1e3/((e-se(this,ej))/++((e,t,i,a)=>({set _(value){si(e,t,value,i)},get _(){return se(e,t,a)}}))(this,eX)._),a=(e-se(this,eJ))/1e3/this.duration,r=se(this,e0)+a*this.playbackRate;r-se(this,eQ).valueAsNumber>0?si(this,e1,this.playbackRate/this.duration/i):(si(this,e1,.995*se(this,e1)),r=se(this,eQ).valueAsNumber+se(this,e1)),this.callback(r)}}),si(this,eQ,e),this.callback=t,this.fps=i}start(){0===se(this,e2)&&(si(this,eZ,performance.now()),si(this,ej,se(this,eZ)),si(this,eX,0),se(this,e3).call(this))}stop(){0!==se(this,e2)&&(cancelAnimationFrame(se(this,e2)),si(this,e2,0))}update({start:e,duration:t,playbackRate:i}){let a=e-se(this,eQ).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),si(this,e0,e),si(this,eJ,performance.now()),this.duration=t,this.playbackRate=i}}eQ=new WeakMap,ej=new WeakMap,eZ=new WeakMap,ez=new WeakMap,eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e3=new WeakMap;var sr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ss=(e,t,i)=>(sr(e,t,"read from private field"),i?i.call(e):t.get(e)),sn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},so=(e,t,i,a)=>(sr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sl=(e,t,i)=>(sr(e,t,"access private method"),i);let sd=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},su=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class sh extends aX{constructor(){super(),sn(this,ta),sn(this,ts),sn(this,tl),sn(this,tu),sn(this,tc),sn(this,tE),sn(this,tv),sn(this,tg),sn(this,e5,void 0),sn(this,e4,void 0),sn(this,e7,void 0),sn(this,e8,void 0),sn(this,e6,void 0),sn(this,e9,void 0),sn(this,te,void 0),sn(this,tt,void 0),sn(this,ti,void 0),sn(this,to,e=>{this.dragging||(tF(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),so(this,e7,this.shadowRoot.querySelectorAll('[part~="box"]')),so(this,e6,this.shadowRoot.querySelector('[part~="preview-box"]')),so(this,e9,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);so(this,te,parseInt(e.getPropertyValue("--media-box-padding-left"))),so(this,tt,parseInt(e.getPropertyValue("--media-box-padding-right"))),so(this,e4,new sa(this.range,ss(this,to),60))}static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_PAUSED,tD.MEDIA_DURATION,tD.MEDIA_SEEKABLE,tD.MEDIA_CURRENT_TIME,tD.MEDIA_PREVIEW_IMAGE,tD.MEDIA_PREVIEW_TIME,tD.MEDIA_PREVIEW_CHAPTER,tD.MEDIA_BUFFERED,tD.MEDIA_PLAYBACK_RATE,tD.MEDIA_LOADING,tD.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",tj("seek")),sl(this,ta,tr).call(this),so(this,e5,this.getRootNode()),null==(e=ss(this,e5))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),sl(this,ta,tr).call(this),null==(e=ss(this,e5))||e.removeEventListener("transitionstart",this),so(this,e5,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===tD.MEDIA_CURRENT_TIME||e===tD.MEDIA_PAUSED||e===tD.MEDIA_ENDED||e===tD.MEDIA_LOADING||e===tD.MEDIA_DURATION||e===tD.MEDIA_SEEKABLE?(ss(this,e4).update({start:sd(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),sl(this,ta,tr).call(this),(e=>{let t=e.range,i=tK(+su(e)),a=tK(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)})(this)):e===tD.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===tD.MEDIA_DURATION||e===tD.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ss(this,ti),this.updateBar()))}get mediaChaptersCues(){return ss(this,ti)}set mediaChaptersCues(e){var t;so(this,ti,e),this.updateSegments(null==(t=ss(this,ti))?void 0:t.map(e=>({start:sd(this,e.startTime),end:sd(this,e.endTime)})))}get mediaPaused(){return ih(this,tD.MEDIA_PAUSED)}set mediaPaused(e){ic(this,tD.MEDIA_PAUSED,e)}get mediaLoading(){return ih(this,tD.MEDIA_LOADING)}set mediaLoading(e){ic(this,tD.MEDIA_LOADING,e)}get mediaDuration(){return id(this,tD.MEDIA_DURATION)}set mediaDuration(e){iu(this,tD.MEDIA_DURATION,e)}get mediaCurrentTime(){return id(this,tD.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){iu(this,tD.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return id(this,tD.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){iu(this,tD.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(tD.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(tD.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(tD.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(tD.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(tD.MEDIA_SEEKABLE);this.setAttribute(tD.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return im(this,tD.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){iE(this,tD.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return id(this,tD.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){iu(this,tD.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return ih(this,tD.MEDIA_ENDED)}set mediaEnded(e){ic(this,tD.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=sd(this,r)}let{style:a}=il(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=il(this.shadowRoot,"#current-rail"),t=il(this.shadowRoot,'[part~="current-box"]'),i=sl(this,tl,td).call(this,ss(this,e9)),a=sl(this,tu,th).call(this,i,this.range.valueAsNumber),r=sl(this,tc,tm).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":sl(this,tg,tA).call(this);break;case"pointermove":sl(this,tE,tp).call(this,e);break;case"pointerup":case"pointerleave":sl(this,tv,tb).call(this,null);break;case"transitionstart":ir(e.target,this)&&setTimeout(()=>sl(this,ta,tr).call(this),0)}}}e5=new WeakMap,e4=new WeakMap,e7=new WeakMap,e8=new WeakMap,e6=new WeakMap,e9=new WeakMap,te=new WeakMap,tt=new WeakMap,ti=new WeakMap,ta=new WeakSet,tr=function(){sl(this,ts,tn).call(this)?ss(this,e4).start():ss(this,e4).stop()},ts=new WeakSet,tn=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&io(this)},to=new WeakMap,tl=new WeakSet,td=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?is(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,s=-(a.left-i.left-r/2),n=i.right-a.left-r/2;return{box:{width:r,min:s,max:n},bounds:i,range:a}},tu=new WeakSet,th=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:s}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tc=new WeakSet,tm=function(e,t){let{width:i,min:a,max:r}=e.box,s=t*e.range.width;if(s<a+ss(this,te)){let t=e.range.left-e.bounds.left-ss(this,te);return`${s-i/2+t}px`}if(s>r-ss(this,tt)){let t=e.bounds.right-e.range.right-ss(this,tt);return`${s+i/2-t-e.range.width}px`}return 0},tE=new WeakSet,tp=function(e){let t=[...ss(this,e7)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void sl(this,tv,tb).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=il(this.shadowRoot,"#preview-rail"),r=il(this.shadowRoot,'[part~="preview-box"]'),s=sl(this,tl,td).call(this,ss(this,e6)),n=(e.clientX-s.range.left)/s.range.width;n=Math.max(0,Math.min(1,n));let o=sl(this,tu,th).call(this,s,n),l=sl(this,tc,tm).call(this,s,n);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${s.box.width}px`),1>Math.abs(Math.round(ss(this,e8))-Math.round(n*i))&&n>.01&&n<.99||(so(this,e8,n*i),sl(this,tv,tb).call(this,ss(this,e8)))},tv=new WeakSet,tb=function(e){this.dispatchEvent(new t5.CustomEvent(tL.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},tg=new WeakSet,tA=function(){ss(this,e4).stop();let e=su(this);this.dispatchEvent(new t5.CustomEvent(tL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},sh.shadowRootOptions={mode:"open"},sh.getTemplateHTML=function(e){return`
    ${aX.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${tD.MEDIA_PREVIEW_IMAGE}], [${tD.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${tD.MEDIA_PREVIEW_IMAGE}], [${tD.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${tD.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${tD.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${tD.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${tD.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${tD.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${tD.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${tD.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${tD.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${tD.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${tD.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${tD.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${tD.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${rY.shadowRootOptions.mode}">
            ${rY.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},t5.customElements.get("media-time-range")||t5.customElements.define("media-time-range",sh);class sc extends aX{static get observedAttributes(){return[...super.observedAttributes,tD.MEDIA_VOLUME,tD.MEDIA_MUTED,tD.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new t5.CustomEvent(tL.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",tj("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===tD.MEDIA_VOLUME||e===tD.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return id(this,tD.MEDIA_VOLUME,1)}set mediaVolume(e){iu(this,tD.MEDIA_VOLUME,e)}get mediaMuted(){return ih(this,tD.MEDIA_MUTED)}set mediaMuted(e){ic(this,tD.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return im(this,tD.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){iE(this,tD.MEDIA_VOLUME_UNAVAILABLE,e)}}function sm(e){return"boolean"==typeof e?e?"":void 0:"function"==typeof e?void 0:Array.isArray(e)&&e.every(e=>"string"==typeof e||"number"==typeof e||"boolean"==typeof e)?e.join(" "):"object"!=typeof e||null===e?e:void 0}t5.customElements.get("media-volume-range")||t5.customElements.define("media-volume-range",sc),tw({tagName:"media-gesture-receiver",elementClass:ig,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-container",elementClass:iM,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});let sE=tw({tagName:"media-controller",elementClass:au,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});tw({tagName:"media-tooltip",elementClass:aI,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-chrome-button",elementClass:aM,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-airplay-button",elementClass:aD,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-captions-button",elementClass:aU,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-cast-button",elementClass:aV,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-chrome-dialog",elementClass:aq,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-chrome-range",elementClass:aX,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});let sp=tw({tagName:"media-control-bar",elementClass:a2,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});tw({tagName:"media-text-display",elementClass:a7,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-duration-display",elementClass:a9,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-error-dialog",elementClass:rn,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-fullscreen-button",elementClass:ru,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-live-button",elementClass:rv,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-loading-indicator",elementClass:rT,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});let sv=tw({tagName:"media-mute-button",elementClass:rM,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});tw({tagName:"media-pip-button",elementClass:rD,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-playback-rate-button",elementClass:rU,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});let sb=tw({tagName:"media-play-button",elementClass:rV,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});tw({tagName:"media-poster-image",elementClass:r$,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-preview-chapter-display",elementClass:rB,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-preview-thumbnail",elementClass:rY,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),tw({tagName:"media-preview-time-display",elementClass:rZ,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}});let sg=tw({tagName:"media-seek-backward-button",elementClass:rX,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),sA=tw({tagName:"media-seek-forward-button",elementClass:r0,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),sf=tw({tagName:"media-time-display",elementClass:r6,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),s_=tw({tagName:"media-time-range",elementClass:sh,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}}),sI=tw({tagName:"media-volume-range",elementClass:sc,react:tf,toAttributeValue:sm,defaultProps:{suppressHydrationWarning:!0}})}}]);