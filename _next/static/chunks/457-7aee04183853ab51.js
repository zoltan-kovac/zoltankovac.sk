(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{7907:function(t,e,s){"use strict";var i=s(5313);s.o(i,"useServerInsertedHTML")&&s.d(e,{useServerInsertedHTML:function(){return i.useServerInsertedHTML}})},7336:function(t){t.exports={style:{fontFamily:"'__Lexend_e940be'",fontStyle:"normal"},className:"__className_e940be",variable:"__variable_e940be"}},5124:function(t,e,s){"use strict";s.d(e,{S:function(){return Q}});var i="undefined"==typeof window||"Deno"in globalThis;function r(){}function n(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:u}=t;if(a){if(i){if(e.queryHash!==o(a,e.options))return!1}else if(!h(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof u||e.isStale()===u)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function a(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(u(e.options.mutationKey)!==u(n))return!1}else if(!h(e.options.mutationKey,n))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function o(t,e){return(e?.queryKeyHashFn||u)(t)}function u(t){return JSON.stringify(t,(t,e)=>l(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function h(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!h(t[s],e[s]))}function c(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function l(t){if(!d(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(d(s)&&s.hasOwnProperty("isPrototypeOf"))}function d(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function p(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var y=Symbol(),m=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),n=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}(),v=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},b=new class extends v{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!i&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}},g=new class extends v{#i=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!i&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#i!==t&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}};function w(t){return Math.min(1e3*2**t,3e4)}function C(t){return(t??"online")!=="online"||g.isOnline()}var O=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function q(t){return t instanceof O}function S(t){let e,s,r,n=!1,a=0,o=!1,u=new Promise((t,e)=>{s=t,r=e}),h=()=>!b.isFocused()||"always"!==t.networkMode&&!g.isOnline(),c=i=>{o||(o=!0,t.onSuccess?.(i),e?.(),s(i))},l=s=>{o||(o=!0,t.onError?.(s),e?.(),r(s))},d=()=>new Promise(s=>{e=t=>{let e=o||!h();return e&&s(t),e},t.onPause?.()}).then(()=>{e=void 0,o||t.onContinue?.()}),f=()=>{let e;if(!o){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(c).catch(e=>{if(o)return;let s=t.retry??(i?0:3),r=t.retryDelay??w,u="function"==typeof r?r(a,e):r,c=!0===s||"number"==typeof s&&a<s||"function"==typeof s&&s(a,e);if(n||!c){l(e);return}a++,t.onFail?.(a,e),new Promise(t=>{setTimeout(t,u)}).then(()=>{if(h())return d()}).then(()=>{n?l(e):f()})})}};return C(t.networkMode)?f():d().then(f),{promise:u,cancel:e=>{o||(l(new O(e)),t.abort?.())},continue:()=>e?.()?u:Promise.resolve(),cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1}}}var F=class{#r;destroy(){this.clearGcTimeout()}scheduleGc(){var t;this.clearGcTimeout(),"number"==typeof(t=this.gcTime)&&t>=0&&t!==1/0&&(this.#r=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i?1/0:3e5))}clearGcTimeout(){this.#r&&(clearTimeout(this.#r),this.#r=void 0)}},P=class extends F{#n;#a;#o;#u;#h;#c;#l;constructor(t){super(),this.#l=!1,this.#c=t.defaultOptions,this.setOptions(t.options),this.#h=[],this.#o=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#n=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#n,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.#c,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#h.length||"idle"!==this.state.fetchStatus||this.#o.remove(this)}setData(t,e){var s,i;let r=(s=this.state.data,"function"==typeof(i=this.options).structuralSharing?i.structuralSharing(s,t):!1!==i.structuralSharing?function t(e,s){if(e===s)return e;let i=c(e)&&c(s);if(i||l(e)&&l(s)){let r=i?e:Object.keys(e),n=r.length,a=i?s:Object.keys(s),o=a.length,u=i?[]:{},h=0;for(let n=0;n<o;n++){let o=i?n:a[n];!i&&void 0===e[o]&&void 0===s[o]&&r.includes(o)?(u[o]=void 0,h++):(u[o]=t(e[o],s[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return n===o&&h===n?e:u}return s}(s,t):t);return this.#d({data:r,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),r}setState(t,e){this.#d({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u?.promise;return this.#u?.cancel(t),e?e.then(r).catch(r):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#n)}isActive(){return this.#h.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.#h.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!Math.max(this.state.dataUpdatedAt+(t||0)-Date.now(),0)}onFocus(){let t=this.#h.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}onOnline(){let t=this.#h.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#u?.continue()}addObserver(t){this.#h.includes(t)||(this.#h.push(t),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#h.includes(t)&&(this.#h=this.#h.filter(e=>e!==t),this.#h.length||(this.#u&&(this.#l?this.#u.cancel({revert:!0}):this.#u.cancelRetry()),this.scheduleGc()),this.#o.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#h.length}invalidate(){this.state.isInvalidated||this.#d({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#u.continueRetry(),this.#u.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.#h.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,i={queryKey:this.queryKey,meta:this.meta},r=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#l=!0,s.signal)})};r(i);let n={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn&&this.options.queryFn!==y?(this.#l=!1,this.options.persister)?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};r(n),this.options.behavior?.onFetch(n,this),this.#a=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==n.fetchOptions?.meta)&&this.#d({type:"fetch",meta:n.fetchOptions?.meta});let a=t=>{q(t)&&t.silent||this.#d({type:"error",error:t}),q(t)||(this.#o.config.onError?.(t,this),this.#o.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#u=S({fn:n.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){a(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#o.config.onSuccess?.(t,this),this.#o.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:a,onFail:(t,e)=>{this.#d({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#d({type:"pause"})},onContinue:()=>{this.#d({type:"continue"})},retry:n.options.retry,retryDelay:n.options.retryDelay,networkMode:n.options.networkMode}),this.#u.promise}#d(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":var s;return{...e,...(s=e.data,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:C(this.options.networkMode)?"fetching":"paused",...void 0===s&&{error:null,status:"pending"}}),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if(q(i)&&i.revert&&this.#a)return{...this.#a,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),m.batch(()=>{this.#h.forEach(t=>{t.onQueryUpdate()}),this.#o.notify({query:this,type:"updated",action:t})})}},D=class extends v{constructor(t={}){super(),this.config=t,this.#f=new Map}#f;build(t,e,s){let i=e.queryKey,r=e.queryHash??o(i,e),n=this.get(r);return n||(n=new P({cache:this,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(n)),n}add(t){this.#f.has(t.queryHash)||(this.#f.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#f.get(t.queryHash);e&&(t.destroy(),e===t&&this.#f.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){m.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#f.get(t)}getAll(){return[...this.#f.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>n(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>n(t,e)):e}notify(t){m.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){m.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){m.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},E=class extends F{#h;#c;#p;#u;constructor(t){super(),this.mutationId=t.mutationId,this.#c=t.defaultOptions,this.#p=t.mutationCache,this.#h=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#c,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#h.includes(t)||(this.#h.push(t),this.clearGcTimeout(),this.#p.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#h=this.#h.filter(e=>e!==t),this.scheduleGc(),this.#p.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#h.length||("pending"===this.state.status?this.scheduleGc():this.#p.remove(this))}continue(){return this.#u?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#d({type:"pending",variables:t}),await this.#p.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#d({type:"pending",context:e,variables:t})}let s=await (this.#u=S({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#d({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#d({type:"pause"})},onContinue:()=>{this.#d({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#u.promise);return await this.#p.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#p.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#d({type:"success",data:s}),s}catch(e){try{throw await this.#p.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#p.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#d({type:"error",error:e})}}}#d(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!C(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),m.batch(()=>{this.#h.forEach(e=>{e.onMutationUpdate(t)}),this.#p.notify({mutation:this,type:"updated",action:t})})}},M=class extends v{constructor(t={}){super(),this.config=t,this.#y=[],this.#m=0}#y;#m;#v;build(t,e,s){let i=new E({mutationCache:this,mutationId:++this.#m,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#y.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#y=this.#y.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){m.batch(()=>{this.#y.forEach(t=>{this.remove(t)})})}getAll(){return this.#y}find(t){let e={exact:!0,...t};return this.#y.find(t=>a(e,t))}findAll(t={}){return this.#y.filter(e=>a(t,e))}notify(t){m.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#v=(this.#v??Promise.resolve()).then(()=>{let t=this.#y.filter(t=>t.state.isPaused);return m.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(r)),Promise.resolve()))}).then(()=>{this.#v=void 0}),this.#v}};function A(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}var Q=class{#b;#p;#c;#g;#w;#C;#O;#q;constructor(t={}){this.#b=t.queryCache||new D,this.#p=t.mutationCache||new M,this.#c=t.defaultOptions||{},this.#g=new Map,this.#w=new Map,this.#C=0}mount(){this.#C++,1===this.#C&&(this.#O=b.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#b.onFocus())}),this.#q=g.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#b.onOnline())}))}unmount(){this.#C--,0===this.#C&&(this.#O?.(),this.#O=void 0,this.#q?.(),this.#q=void 0)}isFetching(t){return this.#b.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#p.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#b.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),i=this.#b.build(this,s);return t.revalidateIfStale&&i.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#b.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),r=this.#b.get(i.queryHash),n=r?.state.data,a="function"==typeof e?e(n):e;if(void 0!==a)return this.#b.build(this,i).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return m.batch(()=>this.#b.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#b.get(e.queryHash)?.state}removeQueries(t){let e=this.#b;m.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#b,i={type:"active",...t};return m.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(m.batch(()=>this.#b.findAll(t).map(t=>t.cancel(s)))).then(r).catch(r)}invalidateQueries(t={},e={}){return m.batch(()=>{if(this.#b.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(m.batch(()=>this.#b.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(r)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(r)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#b.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(r).catch(r)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let i=async()=>{let s;let i=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],a=t.state.data?.pageParams||[],o=!1,u=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?o=!0:t.signal.addEventListener("abort",()=>{o=!0}),t.signal)})},h=t.options.queryFn&&t.options.queryFn!==y?t.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),c=async(e,s,i)=>{if(o)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:s,direction:i?"backward":"forward",meta:t.options.meta};u(r);let n=await h(r),{maxPages:a}=t.options,c=i?p:f;return{pages:c(e.pages,n,a),pageParams:c(e.pageParams,s,a)}};if(r&&n.length){let t="backward"===r,e={pages:n,pageParams:a},o=(t?function(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}:A)(i,e);s=await c(e,o,t)}else{s=await c({pages:[],pageParams:[]},a[0]??i.initialPageParam);let t=e??n.length;for(let e=1;e<t;e++){let t=A(i,s);s=await c(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=i}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(r).catch(r)}resumePausedMutations(){return g.isOnline()?this.#p.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#b}getMutationCache(){return this.#p}getDefaultOptions(){return this.#c}setDefaultOptions(t){this.#c=t}setQueryDefaults(t,e){this.#g.set(u(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#g.values()],s={};return e.forEach(e=>{h(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#w.set(u(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#w.values()],s={};return e.forEach(e=>{h(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#c.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=o(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===y&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#c.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#b.clear(),this.#p.clear()}}},6574:function(t,e,s){"use strict";s.d(e,{aH:function(){return a}});var i=s(2265),r=s(7437),n=i.createContext(void 0),a=t=>{let{client:e,children:s}=t;return i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,r.jsx)(n.Provider,{value:e,children:s})}}}]);