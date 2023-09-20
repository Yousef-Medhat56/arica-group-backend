"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8107],{21289:(I,i,e)=>{e.d(i,{I:()=>t,U:()=>n});const t="strapi_stage",n="strapi_assignee"},56996:(I,i,e)=>{e.r(i),e.d(i,{InformationBoxEE:()=>j});var t=e(27279),n=e(17741),l=e(50236),m=e(1821),s=e(10701),c=e(8295),d=e(61121),r=e(61020),o=e(40464),w=e(49402),u=e(21892),E=e(54920),T=e(36364),a=e(21289);function N(){const{initialData:C,layout:{uid:L},isSingleType:D,onChange:Q}=(0,n.Wq)(),H=(0,w.v9)(T._),{formatMessage:f}=(0,r.Z)(),{formatAPIError:V}=(0,n.So)(),X=(0,n.lm)(),{put:b}=(0,n.kY)(),{allowedActions:{canReadUsers:M},isLoading:P}=(0,n.ss)({readUsers:H.settings.users.read}),{users:K,isLoading:U,isError:k}=(0,E.R)({},{enabled:!P&&M}),W=C?.[a.U]??null,O=async({value:v})=>{A.mutate({entityId:C.id,assigneeId:parseInt(v,10),uid:L})},A=(0,o.useMutation)(async({entityId:v,assigneeId:z,uid:y})=>{const R=D?"single-types":"collection-types",{data:{data:S}}=await b(`/admin/content-manager/${R}/${y}/${v}/assignee`,{data:{id:z}});return Q({target:{name:a.U,value:S[a.U]}},!0),S},{onSuccess(){X({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return t.createElement(m.g,{name:a.U,id:a.U},t.createElement(s.k,{direction:"column",gap:2,alignItems:"stretch"},t.createElement(c.hQ,{clearLabel:f({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:k&&M&&f({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||A.error&&V(A.error),disabled:!P&&!U&&K.length===0,name:a.U,id:a.U,value:W?W.id:null,onChange:v=>O({value:v}),onClear:()=>O({value:null}),placeholder:f({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:f({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:U||P||A.isLoading},K.map(v=>t.createElement(d.O,{key:v.id,value:v.id,textValue:(0,u.Gf)(v,f)},(0,u.Gf)(v,f))))))}var B=e(63738),$=e(32370),F=e(77970),x=e(55911),Z=e(75021),h=e(38705),p=e(86978),g=e(52258),G=e(5318);function Y(){const{initialData:C,layout:{uid:L},isSingleType:D,onChange:Q}=(0,n.Wq)(),{put:H}=(0,n.kY)(),{formatMessage:f}=(0,r.Z)(),{formatAPIError:V}=(0,n.So)(),X=(0,n.lm)(),{meta:b,workflows:[M],isLoading:P}=(0,g.n)({filters:{contentTypes:L}}),{getFeature:K}=(0,Z.q)(),[U,k]=t.useState(!1),W=K("review-workflows"),O=C?.[a.I]??null,A=(0,o.useMutation)(async({entityId:y,stageId:R,uid:S})=>{const J=D?"single-types":"collection-types",{data:{data:q}}=await H(`/admin/content-manager/${J}/${S}/${y}/stage`,{data:{id:R}});return Q({target:{name:a.I,value:q[a.I]}},!0),q},{onSuccess(){X({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),v=async({value:y})=>{try{W?.[p.Ef]&&parseInt(W[p.Ef],10)<b.workflowCount?k("workflow"):W?.[p._X]&&parseInt(W[p._X],10)<M.stages.length?k("stage"):A.mutateAsync({entityId:C.id,stageId:y,uid:L})}catch{}},{themeColorName:z}=O?.color?(0,G.k)(O?.color):{};return t.createElement(t.Fragment,null,t.createElement(m.g,{name:a.I,id:a.I},t.createElement(s.k,{direction:"column",gap:2,alignItems:"stretch"},t.createElement(B.q4,{error:A.error&&V(A.error)||null,name:a.I,id:a.I,value:O?.id,onChange:y=>v({value:y}),label:f({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:t.createElement(s.k,{as:"span",height:2,background:O?.color,borderColor:z==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>t.createElement(s.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement($.Z,{textColor:"neutral800",ellipsis:!0},O?.name),P?t.createElement(F.a,{small:!0,style:{display:"flex"}}):null)},M?M.stages.map(({id:y,color:R,name:S})=>{const{themeColorName:J}=(0,G.k)(R);return t.createElement(B.ag,{key:y,startIcon:t.createElement(s.k,{height:2,background:R,borderColor:J==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:y,textValue:S},S)}):[]),t.createElement(x.c,null))),t.createElement(h.fC,{isOpen:U==="workflow",onClose:()=>k(!1)},t.createElement(h.Dx,null,f({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),t.createElement(h.uT,null,f({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),t.createElement(h.fC,{isOpen:U==="stage",onClose:()=>k(!1)},t.createElement(h.Dx,null,f({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),t.createElement(h.uT,null,f({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function j(){const{isCreatingEntry:C,layout:{options:L}}=(0,n.Wq)(),D=L?.reviewWorkflows??!1;return t.createElement(l.d.Root,null,t.createElement(l.d.Title,null),D&&!C&&t.createElement(t.Fragment,null,t.createElement(Y,null),t.createElement(N,null)),t.createElement(l.d.Body,null))}},75021:(I,i,e)=>{e.d(i,{q:()=>m});var t=e(27279),n=e(17741),l=e(40464);function m({enabled:s}={enabled:!0}){const{get:c}=(0,n.kY)(),{data:d,isError:r,isLoading:o}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:E}}=await c("/admin/license-limit-information");return E},{enabled:s}),w=t.useMemo(()=>d??{},[d]),u=t.useCallback(E=>(w?.features??[]).find(a=>a.name===E)?.options??{},[w?.features]);return{license:w,getFeature:u,isError:r,isLoading:o}}},38705:(I,i,e)=>{e.d(i,{uT:()=>x,fC:()=>p,Dx:()=>F});var t=e(27279),n=e(32370),l=e(10701),m=e(5938),s=e(15244),c=e(93415),d=e(4987),r=e(37370),o=e(95066),w=e(70627),u=e.n(w),E=e(61020),T=e(72450);const a=e.p+"0cd5f8915b265d5b1856.png",N="limits-title",B="https://strapi.io/pricing-cloud",$="https://strapi.io/contact-sales";function F({children:g}){return t.createElement(n.Z,{variant:"alpha",id:N},g)}F.propTypes={children:u().node.isRequired};function x({children:g}){return t.createElement(n.Z,{variant:"omega"},g)}x.propTypes={children:u().node.isRequired};function Z(){const{formatMessage:g}=(0,E.Z)();return t.createElement(l.k,{gap:2,paddingTop:4},t.createElement(r.Q,{variant:"default",isExternal:!0,href:B},g({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(r.Q,{variant:"tertiary",isExternal:!0,href:$},g({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const h=T.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:g})=>`-${g.spaces[7]}`};
  margin-top: ${({theme:g})=>`-${g.spaces[7]}`};
  width: 360px;
`;function p({children:g,isOpen:G,onClose:Y}){const{formatMessage:j}=(0,E.Z)();return G?t.createElement(m.P,{labelledBy:N},t.createElement(s.f,null,t.createElement(l.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(l.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},g,t.createElement(Z,null)),t.createElement(l.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(h,{src:a,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(c.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(d.h,{icon:t.createElement(o.Z,null),"aria-label":j({id:"global.close",defaultMessage:"Close"}),onClick:Y})))))):null}p.defaultProps={isOpen:!1},p.propTypes={children:u().node.isRequired,isOpen:u().bool,onClose:u().func.isRequired}},86978:(I,i,e)=>{e.d(i,{$k:()=>r,Ef:()=>T,FT:()=>u,Nj:()=>d,Ot:()=>c,VS:()=>o,_X:()=>a,gu:()=>l,lv:()=>w,qZ:()=>m,sN:()=>n,uL:()=>E,x4:()=>s});var t=e(97003);const n="settings_review-workflows",l="Settings/Review_Workflows/RESET_WORKFLOW",m="Settings/Review_Workflows/SET_WORKFLOW",s="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",c="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",r="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",o="Settings/Review_Workflows/WORKFLOW_UPDATE",w={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},u=t.W.colors.primary600,E={STAGE:"stage"},T="numberOfWorkflows",a="stagesPerWorkflow"},52258:(I,i,e)=>{e.d(i,{n:()=>l});var t=e(17741),n=e(40464);function l(m={}){const{get:s}=(0,t.kY)(),{id:c="",...d}=m,r={populate:"stages"},{data:o,isLoading:w,status:u,refetch:E}=(0,n.useQuery)(["review-workflows","workflows",c],async()=>(await s(`/admin/review-workflows/workflows/${c}`,{params:{...r,...d}})).data);let T=[];return c&&o?.data?T=[o.data]:Array.isArray(o?.data)&&(T=o.data),{meta:o?.meta??{},workflows:T,isLoading:w,status:u,refetch:E}}},5318:(I,i,e)=>{e.d(i,{k:()=>l,s:()=>m});var t=e(97003),n=e(86978);function l(s){if(!s)return null;const d=Object.entries(t.W.colors).filter(([,r])=>r.toUpperCase()===s.toUpperCase()).reduce((r,[o])=>(n.lv?.[o]&&(r=o),r),null);return d?{themeColorName:d,name:n.lv[d]}:null}function m(){return Object.entries(n.lv).map(([s,c])=>({hex:t.W.colors[s].toUpperCase(),name:c}))}}}]);