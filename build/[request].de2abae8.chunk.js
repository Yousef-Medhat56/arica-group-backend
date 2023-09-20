"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6750],{30863:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(72450),r=e(5529),d=e(35725),c=m=>m&&m.__esModule?m:{default:m};function i(m){if(m&&m.__esModule)return m;const T=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(m){for(const v in m)if(v!=="default"){const h=Object.getOwnPropertyDescriptor(m,v);Object.defineProperty(T,v,h.get?h:{enumerable:!0,get:()=>m[v]})}}return T.default=m,Object.freeze(T)}const o=i(l),u=c(a).default(d.Flex)`
  > svg {
    height: ${({theme:m})=>m.spaces[3]};
    width: ${({theme:m})=>m.spaces[3]};

    > g,
    path {
      fill: ${({theme:m})=>m.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${r.buttonFocusStyle}
`,p=o.forwardRef(({disabled:m,children:T,background:v="neutral0",...h},g)=>t.jsx(u,{ref:g,"aria-disabled":m,as:"button",type:"button",disabled:m,padding:2,hasRadius:!0,background:v,borderColor:"neutral200",cursor:"pointer",...h,children:T}));p.displayName="BaseButton",n.BaseButton=p,n.BaseButtonWrapper=u},23455:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(72450),r=e(43680),d=e(73648),c=e(55534),i=e(12416),o=e(44747),s=h=>h&&h.__esModule?h:{default:h};function u(h){if(h&&h.__esModule)return h;const g=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(h){for(const y in h)if(y!=="default"){const x=Object.getOwnPropertyDescriptor(h,y);Object.defineProperty(g,y,x.get?x:{enumerable:!0,get:()=>h[y]})}}return g.default=h,Object.freeze(g)}const p=u(l),T=s(a).default.input`
  height: ${c.getCheckboxSize};
  min-width: ${c.getCheckboxSize};
  margin: 0;
  border-radius: ${({theme:h})=>h.borderRadius};
  border: 1px solid ${({theme:h})=>h.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:h})=>h.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:h})=>h.colors.primary600};
    border: 1px solid ${({theme:h})=>h.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${d}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${r}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:h})=>h.colors.neutral200};
    border: 1px solid ${({theme:h})=>h.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:h})=>h.colors.primary600};
    border: 1px solid ${({theme:h})=>h.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:h})=>h.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:h})=>h.colors.neutral200};
      border: 1px solid ${({theme:h})=>h.colors.neutral300};
      &:after {
        background-color: ${({theme:h})=>h.colors.neutral500};
      }
    }
  }
`,v=p.forwardRef(({indeterminate:h=!1,size:g="M",name:y,value:x=!1,onValueChange:j,...E},M)=>{const b=p.useRef(null),S=i.useComposedRefs(b,M);p.useEffect(()=>{b.current&&h?b.current.indeterminate=h:b.current.indeterminate=!1},[h]);const Z=()=>{j&&j(!x)};return t.jsx(o.Box,{children:t.jsx(T,{size:g,checked:x,onChange:Z,type:"checkbox",ref:S,name:y,...E})})});v.displayName="BaseCheckbox",n.BaseCheckbox=v},43680:f=>{const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";f.exports=n},73648:f=>{const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=";f.exports=n},36741:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(23455);n.BaseCheckbox=t.BaseCheckbox},55534:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=({size:t})=>t==="M"?"18px":"20px";n.getCheckboxSize=e},44747:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72450),l=e(83315),a=e(10547),d=(o=>o&&o.__esModule?o:{default:o})(t),c={color:!0,cursor:!0,height:!0,width:!0},i=d.default.div.withConfig({shouldForwardProp:(o,s)=>!c[o]&&s(o)})`
  // Font
  font-size: ${({fontSize:o,theme:s})=>a.extractStyleFromTheme(s.fontSizes,o,o)};

  // Colors
  background: ${({theme:o,background:s})=>a.extractStyleFromTheme(o.colors,s,s)};
  color: ${({theme:o,color:s})=>a.extractStyleFromTheme(o.colors,s,void 0)};

  // Spaces
  ${({theme:o,padding:s})=>l("padding",s,o)}
  ${({theme:o,paddingTop:s})=>l("padding-top",s,o)}
  ${({theme:o,paddingRight:s})=>l("padding-right",s,o)}
  ${({theme:o,paddingBottom:s})=>l("padding-bottom",s,o)}
  ${({theme:o,paddingLeft:s})=>l("padding-left",s,o)}
  ${({theme:o,marginLeft:s})=>l("margin-left",s,o)}
  ${({theme:o,marginRight:s})=>l("margin-right",s,o)}
  ${({theme:o,marginTop:s})=>l("margin-top",s,o)}
  ${({theme:o,marginBottom:s})=>l("margin-bottom",s,o)}

  // Responsive hiding
  ${({theme:o,hiddenS:s})=>s?`${o.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:o,hiddenXS:s})=>s?`${o.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:o,hasRadius:s,borderRadius:u})=>s?o.borderRadius:u};
  border-style: ${({borderStyle:o})=>o};
  border-width: ${({borderWidth:o})=>o};
  border-color: ${({borderColor:o,theme:s})=>a.extractStyleFromTheme(s.colors,o,void 0)};
  border: ${({theme:o,borderColor:s,borderStyle:u,borderWidth:p})=>{if(s&&!u&&typeof p>"u")return`1px solid ${o.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:o,shadow:s})=>a.extractStyleFromTheme(o.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:o})=>o};
  &:hover {
    ${({_hover:o,theme:s})=>o?o(s):void 0}
  }

  // Display
  display: ${({display:o})=>o};

  // Position
  position: ${({position:o})=>o};
  left: ${({left:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  right: ${({right:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  top: ${({top:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  bottom: ${({bottom:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  z-index: ${({zIndex:o})=>o};
  overflow: ${({overflow:o})=>o};

  // Size
  width: ${({width:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  max-width: ${({maxWidth:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  min-width: ${({minWidth:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  height: ${({height:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  max-height: ${({maxHeight:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};
  min-height: ${({minHeight:o,theme:s})=>a.extractStyleFromTheme(s.spaces,o,o)};

  // Animation
  transition: ${({transition:o})=>o};
  transform: ${({transform:o})=>o};
  animation: ${({animation:o})=>o};

  //Flexbox children props
  flex-shrink: ${({shrink:o})=>o};
  flex-grow: ${({grow:o})=>o};
  flex-basis: ${({basis:o})=>o};
  flex: ${({flex:o})=>o};

  // Text
  text-align: ${({textAlign:o})=>o};
  text-transform: ${({textTransform:o})=>o};
  line-height: ${({theme:o,lineHeight:s})=>a.extractStyleFromTheme(o.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:o})=>o};
`;n.Box=i},25074:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(44747);n.Box=t.Box},64584:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(73517),r=e(72450),d=e(58592),c=e(4584),i=e(30863),o=e(44747),s=e(11880),u=e(35725),p=x=>x&&x.__esModule?x:{default:x},m=p(l),T=p(r),v=r.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,h=T.default(a.Loader)`
  animation: ${v} 2s infinite linear;
  will-change: transform;
`,g=T.default(i.BaseButton)`
  height: ${({theme:x,size:j})=>x.sizes.button[j]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${c.getDisabledStyle}

    &:active {
      ${c.getDisabledStyle}
    }
  }

  &:hover {
    ${c.getHoverStyle}
  }

  &:active {
    ${c.getActiveStyle}
  }

  ${c.getVariantStyle}
`,y=m.default.forwardRef(({variant:x=d.DEFAULT,startIcon:j,endIcon:E,disabled:M=!1,children:b,onClick:S,size:Z=d.BUTTON_SIZES[0],loading:$=!1,fullWidth:w=!1,...I},A)=>{const D=M||$,z=O=>{!D&&S&&S(O)};return t.jsxs(g,{ref:A,"aria-disabled":D,disabled:D,size:Z,variant:x,onClick:z,fullWidth:w,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:w,justifyContent:w?"center":void 0,paddingLeft:4,paddingRight:4,width:w?"100%":void 0,...I,children:[(j||$)&&t.jsx(o.Box,{"aria-hidden":!0,children:$?t.jsx(h,{}):j}),t.jsx(s.Typography,{variant:Z==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:b}),E&&t.jsx(u.Flex,{"aria-hidden":!0,children:E})]})});y.displayName="Button",n.Button=y,n.ButtonWrapper=g},58592:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="success-light",t="danger-light",l="default",a="tertiary",r="secondary",d="danger",c="success",i="ghost",o=[e,t],s=[l,a,r,d,c,i,...o],u=["S","M","L"];n.BUTTON_SIZES=u,n.DANGER=d,n.DANGER_LIGHT=t,n.DEFAULT=l,n.GHOST=i,n.LIGHT_VARIANTS=o,n.SECONDARY=r,n.SUCCESS=c,n.SUCCESS_LIGHT=e,n.TERTIARY=a,n.VARIANTS=s},97487:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(64584);n.Button=t.Button,n.ButtonWrapper=t.ButtonWrapper},4584:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(58592),l=e(11880),a=o=>o===t.SUCCESS_LIGHT||o===t.DANGER_LIGHT?`${o.substring(0,o.lastIndexOf("-"))}`:o===t.TERTIARY?"neutral":o===t.DEFAULT||o===t.SECONDARY||t.VARIANTS.every(s=>s!==o)?"primary":`${o}`,r=({theme:o})=>`
    border: 1px solid ${o.colors.neutral200};
    background: ${o.colors.neutral150};
    ${l.Typography} {
      color: ${o.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${o.colors.neutral600};
      }
    }
  `,d=({theme:o,variant:s})=>[...t.LIGHT_VARIANTS,t.SECONDARY].includes(s)?`
      background-color: ${o.colors.neutral0};
    `:s===t.TERTIARY?`
      background-color: ${o.colors.neutral100};
    `:s===t.GHOST?`
      background-color: ${o.colors.neutral100};
    `:s===t.DEFAULT?`
      border: 1px solid ${o.colors.buttonPrimary500};
      background: ${o.colors.buttonPrimary500};
    `:`
    border: 1px solid ${o.colors[`${a(s)}500`]};
    background: ${o.colors[`${a(s)}500`]};
  `,c=({theme:o,variant:s})=>[...t.LIGHT_VARIANTS,t.SECONDARY].includes(s)?`
      background-color: ${o.colors.neutral0};
      border: 1px solid ${o.colors[`${a(s)}600`]};
      ${l.Typography} {
        color: ${o.colors[`${a(s)}600`]};
      }
      svg {
        > g, path {
          fill: ${o.colors[`${a(s)}600`]};
        }
      }
    `:s===t.TERTIARY?`
      background-color: ${o.colors.neutral150};
    `:`
    border: 1px solid ${o.colors[`${a(s)}600`]};
    background: ${o.colors[`${a(s)}600`]};
  `,i=({theme:o,variant:s})=>{switch(s){case t.DANGER_LIGHT:case t.SUCCESS_LIGHT:case t.SECONDARY:return`
          border: 1px solid ${o.colors[`${a(s)}200`]};
          background: ${o.colors[`${a(s)}100`]};
          ${l.Typography} {
            color: ${o.colors[`${a(s)}700`]};
          }
          svg {
            > g, path {
              fill: ${o.colors[`${a(s)}700`]};
            }
          }
        `;case t.TERTIARY:return`
          border: 1px solid ${o.colors.neutral200};
          background: ${o.colors.neutral0};
          ${l.Typography} {
            color: ${o.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${o.colors.neutral800};
            }
          }
        `;case t.GHOST:return`
        border: 1px solid transparent;
        background: transparent;

        ${l.Typography} {
          color: ${o.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${o.colors.neutral500};
          }
        }
      `;case t.SUCCESS:case t.DANGER:return`
          border: 1px solid ${o.colors[`${a(s)}600`]};
          background: ${o.colors[`${a(s)}600`]};
          ${l.Typography} {
            color: ${o.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${o.colors.buttonNeutral0};
            }
          }
        `}};n.getActiveStyle=c,n.getDisabledStyle=r,n.getHoverStyle=d,n.getVariantColorName=a,n.getVariantStyle=i},19658:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(72450),a=e(44747),c=(o=>o&&o.__esModule?o:{default:o})(l).default(a.Box)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:o})=>o?"margin: 0;":""}
`,i=({unsetMargin:o=!0,...s})=>t.jsx(c,{...s,background:"neutral150",as:"hr",unsetMargin:o});n.Divider=i},59817:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(20565),r=e(54673),d=e(44747),c=l.forwardRef(({children:i,name:o,error:s,hint:u,id:p,required:m=!1,...T},v)=>{const h=r.useId(p),g=l.useMemo(()=>({name:o,id:h,error:s,hint:u,required:m}),[s,h,u,o,m]);return t.jsx(d.Box,{ref:v,...T,children:t.jsx(a.FieldContext.Provider,{value:g,children:i})})});n.Field=c},20565:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(27279),l=t.createContext({id:"",required:!1}),a=()=>t.useContext(l);n.FieldContext=l,n.useField=a},28518:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(20565),a=e(11880),r=()=>{const{id:d,error:c}=l.useField();return!c||typeof c!="string"?null:t.jsx(a.Typography,{variant:"pi",as:"p",id:`${d}-error`,textColor:"danger600","data-strapi-field-error":!0,children:c})};n.FieldError=r},63391:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(20565),a=e(11880),r=()=>{const{id:d,hint:c,error:i}=l.useField();return!c||i?null:t.jsx(a.Typography,{variant:"pi",as:"p",id:`${d}-hint`,textColor:"neutral600",children:c})};n.FieldHint=r},20601:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(72450),r=e(20565),d=e(5529),c=e(44747),i=e(35725),s=(v=>v&&v.__esModule?v:{default:v})(a),u={S:6.5,M:10.5},p=l.forwardRef(({endAction:v,startAction:h,disabled:g=!1,onChange:y,size:x="M",...j},E)=>{const{id:M,error:b,hint:S,name:Z,required:$}=r.useField();let w;b?w=`${M}-error`:S&&(w=`${M}-hint`);const I=Boolean(b),A=D=>{!g&&y&&y(D)};return t.jsxs(T,{justifyContent:"space-between",hasError:I,disabled:g,children:[h?t.jsx(c.Box,{paddingLeft:3,paddingRight:2,children:h}):null,t.jsx(m,{id:M,name:Z,ref:E,"aria-describedby":w,"aria-invalid":I,"aria-disabled":g,disabled:g,"data-disabled":g?"":void 0,hasLeftAction:Boolean(h),hasRightAction:Boolean(v),onChange:A,"aria-required":$,$size:x,...j}),v?t.jsx(c.Box,{paddingLeft:2,paddingRight:3,children:v}):null]})}),m=s.default.input`
  border: none;
  border-radius: ${({theme:v})=>v.borderRadius};
  padding-bottom: ${({$size:v})=>`${u[v]/16}rem`};
  padding-left: ${({theme:v,hasLeftAction:h})=>h?0:v.spaces[4]};
  padding-right: ${({theme:v,hasRightAction:h})=>h?0:v.spaces[4]};
  padding-top: ${({$size:v})=>`${u[v]/16}rem`};
  cursor: ${v=>v["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:v})=>v.colors.neutral800};
  font-weight: 400;
  font-size: ${v=>v.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:v})=>v.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,T=s.default(i.Flex)`
  border: 1px solid ${({theme:v,hasError:h})=>h?v.colors.danger600:v.colors.neutral200};
  border-radius: ${({theme:v})=>v.borderRadius};
  background: ${({theme:v})=>v.colors.neutral0};
  ${d.inputFocusStyle()}

  ${({theme:v,disabled:h})=>h?a.css`
          color: ${v.colors.neutral600};
          background: ${v.colors.neutral150};
        `:void 0}
`;n.FieldInput=p,n.InputWrapper=T},69803:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(72450),r=e(20565),d=e(63832),c=e(11880),i=e(35725),s=(h=>h&&h.__esModule?h:{default:h})(a),u=d.once(console.warn),p=l.forwardRef(({children:h,action:g,required:y,...x},j)=>{const{id:E,required:M}=r.useField(),b=M||y;return y!==void 0&&u('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),t.jsxs(m,{ref:j,variant:"pi",textColor:"neutral800",htmlFor:E,fontWeight:"bold",as:"label",...x,children:[h,b&&t.jsx(T,{textColor:"danger600",children:"*"}),g&&t.jsx(v,{marginLeft:1,children:g})]})}),m=s.default(c.Typography)`
  display: flex;
  align-items: center;
`,T=s.default(c.Typography)`
  line-height: 0;
`,v=s.default(i.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:h})=>h.colors.neutral500};
  }
`;n.FieldLabel=p},35725:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72450),l=e(83315),a=e(44747),d=(o=>o&&o.__esModule?o:{default:o})(t),c={direction:!0},i=d.default(a.Box).withConfig({shouldForwardProp:(o,s)=>!c[o]&&s(o)})`
  align-items: ${({alignItems:o="center"})=>o};
  display: ${({display:o="flex",inline:s})=>s?"inline-flex":o};
  flex-direction: ${({direction:o="row"})=>o};
  flex-shrink: ${({shrink:o})=>o};
  flex-wrap: ${({wrap:o})=>o};
  ${({gap:o,theme:s})=>l("gap",o,s)};
  justify-content: ${({justifyContent:o})=>o};
`;n.Flex=i},16897:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(35725);n.Flex=t.Flex},44076:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(72450),a=e(83315),r=e(44747),i=(s=>s&&s.__esModule?s:{default:s})(l).default(r.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:s})=>s}, 1fr);
  ${({theme:s,gap:u})=>a("gap",u,s)}
`,o=s=>{const{gap:u="0",gridCols:p=12,...m}=s;return t.jsx(i,{gap:u,gridCols:p,...m})};n.Grid=o},3528:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72450),l=e(44747),d=(c=>c&&c.__esModule?c:{default:c})(t).default(l.Box)`
  grid-column: span ${({col:c})=>c};
  max-width: 100%;

  ${({theme:c})=>c.mediaQueries.tablet} {
    grid-column: span ${({s:c})=>c};
  }

  ${({theme:c})=>c.mediaQueries.mobile} {
    grid-column: span ${({xs:c})=>c};
  }
`;n.GridItem=d},91594:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(35725),a=({startActions:r,endActions:d})=>!r&&!d?null:t.jsxs(l.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[t.jsx(l.Flex,{gap:2,wrap:"wrap",children:r}),t.jsx(l.Flex,{gap:2,shrink:0,wrap:"wrap",children:d})]});n.ActionLayout=a},3823:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(44747),a=({children:r})=>t.jsx(l.Box,{paddingLeft:10,paddingRight:10,children:r});n.ContentLayout=a},20285:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72450),r=(d=>d&&d.__esModule?d:{default:d})(t).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:d})=>d.spaces[4]};
`;n.GridLayout=r},32213:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(72450),r=e(43809),d=e(29381),c=e(44747),i=e(35725),o=e(11880),s=h=>h&&h.__esModule?h:{default:h},u=s(l),p=s(a),m=h=>{const g=l.useRef(null),[y,x]=l.useState(null),[j,E]=r.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return d.useResizeObserver(j,()=>{j.current&&x(j.current.getBoundingClientRect())}),l.useEffect(()=>{g.current&&x(g.current.getBoundingClientRect())},[g]),t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:y?.height},ref:j,children:E&&t.jsx(v,{ref:g,...h})}),!E&&t.jsx(v,{...h,sticky:!0,width:y?.width})]})};m.displayName="HeaderLayout";const T=p.default(c.Box)`
  width: ${({width:h})=>h?`${h/16}rem`:void 0};
  z-index: ${({theme:h})=>h.zIndices[1]};
`,v=u.default.forwardRef(({navigationAction:h,primaryAction:g,secondaryAction:y,subtitle:x,title:j,sticky:E,width:M,...b},S)=>{const Z=typeof x=="string";return E?t.jsx(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:M,"data-strapi-header-sticky":!0,children:t.jsxs(i.Flex,{justifyContent:"space-between",children:[t.jsxs(i.Flex,{children:[h&&t.jsx(c.Box,{paddingRight:3,children:h}),t.jsxs(c.Box,{children:[t.jsx(o.Typography,{variant:"beta",as:"h1",...b,children:j}),Z?t.jsx(o.Typography,{variant:"pi",textColor:"neutral600",children:x}):x]}),y?t.jsx(c.Box,{paddingLeft:4,children:y}):null]}),t.jsx(i.Flex,{children:g?t.jsx(c.Box,{paddingLeft:2,children:g}):void 0})]})}):t.jsxs(c.Box,{ref:S,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:h?6:8,background:"neutral100","data-strapi-header":!0,children:[h?t.jsx(c.Box,{paddingBottom:2,children:h}):null,t.jsxs(i.Flex,{justifyContent:"space-between",children:[t.jsxs(i.Flex,{minWidth:0,children:[t.jsx(o.Typography,{as:"h1",variant:"alpha",...b,children:j}),y?t.jsx(c.Box,{paddingLeft:4,children:y}):null]}),g]}),Z?t.jsx(o.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:x}):x]})});n.BaseHeaderLayout=v,n.HeaderLayout=m},65030:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(72450),a=e(44747),d=(s=>s&&s.__esModule?s:{default:s})(l),c=d.default(a.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,i=d.default(a.Box)`
  overflow-x: hidden;
`,o=({sideNav:s,children:u})=>t.jsxs(c,{hasSideNav:Boolean(s),children:[s,t.jsx(i,{paddingBottom:10,children:u})]});n.Layout=o},90493:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(44076),a=e(3528),r=e(44747),d=({startCol:c,endCol:i})=>t.jsxs(l.Grid,{gap:4,children:[t.jsx(a.GridItem,{col:9,s:12,children:t.jsx(r.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:c})}),t.jsx(a.GridItem,{col:3,s:12,children:t.jsx(r.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:i})})]});n.TwoColsLayout=d},94305:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(65030),l=e(91594),a=e(3823),r=e(32213),d=e(90493),c=e(20285);n.Layout=t.Layout,n.ActionLayout=l.ActionLayout,n.ContentLayout=a.ContentLayout,n.BaseHeaderLayout=r.BaseHeaderLayout,n.HeaderLayout=r.HeaderLayout,n.TwoColsLayout=d.TwoColsLayout,n.GridLayout=c.GridLayout},72707:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(73517),r=e(47533),d=e(72450),c=e(5529),i=e(11880),o=e(44747),s=g=>g&&g.__esModule?g:{default:g};function u(g){if(g&&g.__esModule)return g;const y=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const x in g)if(x!=="default"){const j=Object.getOwnPropertyDescriptor(g,x);Object.defineProperty(y,x,j.get?j:{enumerable:!0,get:()=>g[x]})}}return y.default=g,Object.freeze(y)}const p=u(l),m=s(d),T=m.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:g})=>g?"none":void 0};
  color: ${({disabled:g,theme:y})=>g?y.colors.neutral600:y.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${i.Typography} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:g})=>g.colors.primary500};
  }

  &:active {
    color: ${({theme:g})=>g.colors.primary700};
  }

  ${c.buttonFocusStyle};
`,v=m.default(o.Box)`
  display: flex;
`,h=p.forwardRef(({children:g,href:y,to:x,disabled:j=!1,startIcon:E,endIcon:M,...b},S)=>{const Z=y?"_blank":void 0,$=y?"noreferrer noopener":void 0;return t.jsxs(T,{as:x&&!j?r.NavLink:"a",target:Z,rel:$,to:j?void 0:x,href:j?"#":y,disabled:j,ref:S,...b,children:[E&&t.jsx(v,{as:"span","aria-hidden":!0,paddingRight:2,children:E}),t.jsx(i.Typography,{children:g}),M&&!y&&t.jsx(v,{as:"span","aria-hidden":!0,paddingLeft:2,children:M}),y&&t.jsx(v,{as:"span","aria-hidden":!0,paddingLeft:2,children:t.jsx(a.ExternalLink,{})})]})});n.Link=h},31902:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72707);n.Link=t.Link},24986:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(29935),r=e(70598),d=e(77547),c=e(44747),i=s=>t.jsx(o,{...s,as:"th"}),o=({coords:s={col:0,row:0},as:u="td",...p})=>{const m=l.useRef(null),{rowIndex:T,colIndex:v,setTableValues:h}=a.useTable(),[g,y]=l.useState(!1),x=M=>{const b=r.getFocusableNodes(m.current,!0);if(b.length===0||b.length===1&&r.getFocusableNodesWithKeyboardNav(b).length===0)return;if(b.length>1&&!b.find(Z=>Z.tagName!=="BUTTON")){M.preventDefault();const Z=b.findIndex($=>$===document.activeElement);if(M.key===d.KeyboardKeys.RIGHT){const $=b[Z+1];$&&(M.stopPropagation(),$.focus())}else if(M.key===d.KeyboardKeys.LEFT){const $=b[Z-1];$&&(M.stopPropagation(),$.focus())}return}const S=M.key===d.KeyboardKeys.ENTER;if(S&&!g)y(!0);else if((M.key===d.KeyboardKeys.ESCAPE||S)&&g){if(S&&document.activeElement?.tagName==="A")return;y(!1),m.current.focus()}else g&&M.stopPropagation()},j=T===s.row-1&&v===s.col-1;l.useLayoutEffect(()=>{const M=r.getFocusableNodes(m.current,!0);M.length===0||M.length===1&&r.getFocusableNodesWithKeyboardNav(M).length!==0||M.length>1&&Boolean(M.find(b=>b.tagName!=="BUTTON"))?(m.current.setAttribute("tabIndex",!g&&j?"0":"-1"),M.forEach((b,S)=>{b.setAttribute("tabIndex",g?"0":"-1"),g&&S===0&&b.focus()})):M.forEach(b=>{b.setAttribute("tabIndex",j?"0":"-1")})},[g,j]);const E=l.useCallback(()=>{const M=r.getFocusableNodes(m.current,!0);M.length>=1&&(r.getFocusableNodesWithKeyboardNav(M).length!==0||!M.find(b=>b.tagName!=="BUTTON"))&&y(!0),h({rowIndex:s.row-1,colIndex:s.col-1})},[s,h]);return l.useLayoutEffect(()=>{const M=m.current;return r.getFocusableNodes(M,!0).forEach(S=>{S.addEventListener("focus",E)}),()=>{r.getFocusableNodes(M,!0).forEach(Z=>{Z.removeEventListener("focus",E)})}},[E]),t.jsx(c.Box,{role:"gridcell",as:u,ref:m,onKeyDown:x,...p})};n.RawTd=o,n.RawTh=i},56094:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(9609),r=e(29935),d=e(77547),c=({colCount:i,rowCount:o,jumpStep:s=3,initialCol:u=0,initialRow:p=0,...m})=>{const T=l.useRef(null),v=l.useRef(!1),[h,g]=l.useState(p),[y,x]=l.useState(u),j=l.useCallback(({colIndex:b,rowIndex:S})=>{x(b),g(S)},[]);l.useEffect(()=>{v.current&&a.focusFocusable(T.current),v.current||(v.current=!0)},[y,h]);const E=b=>{switch(b.key){case d.KeyboardKeys.RIGHT:{b.preventDefault(),x(S=>S<i-1?S+1:S);break}case d.KeyboardKeys.LEFT:{b.preventDefault(),x(S=>S>0?S-1:S);break}case d.KeyboardKeys.UP:{b.preventDefault(),g(S=>S>0?S-1:S);break}case d.KeyboardKeys.DOWN:{b.preventDefault(),g(S=>S<o-1?S+1:S);break}case d.KeyboardKeys.HOME:{b.preventDefault(),b.ctrlKey&&g(0),x(0);break}case d.KeyboardKeys.END:{b.preventDefault(),b.ctrlKey&&g(o-1),x(i-1);break}case d.KeyboardKeys.PAGE_DOWN:{b.preventDefault(),g(S=>S+s<o?S+s:o-1);break}case d.KeyboardKeys.PAGE_UP:{b.preventDefault(),g(S=>S-s>0?S-s:0);break}}},M=l.useMemo(()=>({rowIndex:h,colIndex:y,setTableValues:j}),[y,h,j]);return t.jsx(r.RawTableContext.Provider,{value:M,children:t.jsx("table",{role:"grid",ref:T,"aria-rowcount":o,"aria-colcount":i,onKeyDown:E,...m})})};n.RawTable=c},29935:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(27279),l=t.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),a=()=>t.useContext(l);n.RawTableContext=l,n.useTable=a},6890:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=({children:r,...d})=>{const c=l.Children.toArray(r).map((i,o)=>l.isValidElement(i)?l.cloneElement(i,{"aria-rowindex":o+2}):i);return t.jsx("tbody",{...d,children:c})};n.RawTbody=a},41179:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=({children:r,...d})=>{const c=l.Children.toArray(r).map(i=>l.isValidElement(i)?l.cloneElement(i,{"aria-rowindex":1}):i);return t.jsx("thead",{...d,children:c})};n.RawThead=a},26014:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(44747),r=({children:d,...c})=>{const i=l.Children.toArray(d).map((o,s)=>l.isValidElement(o)?l.cloneElement(o,{"aria-colindex":s+1,coords:{col:s+1,row:c["aria-rowindex"]}}):o);return t.jsx(a.Box,{as:"tr",...c,children:i})};n.RawTr=r},9609:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t=>{const l=t.querySelector('[tabindex="0"]');l&&l.focus()};n.focusFocusable=e},34922:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(72450),a=e(24986),r=e(35725),c=(p=>p&&p.__esModule?p:{default:p})(l),i=c.default(a.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:p})=>p.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,o=c.default.span`
  svg {
    height: ${4/16}rem;
  }
`,s=({children:p,action:m,...T})=>t.jsx(i,{as:a.RawTh,...T,children:t.jsxs(r.Flex,{children:[p,t.jsx(o,{children:m})]})}),u=({children:p,...m})=>t.jsx(i,{...m,children:p});n.Td=u,n.Th=s},82079:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(72450),a=e(44747),r=e(19658),d=e(35725),c=e(11880),o=(m=>m&&m.__esModule?m:{default:m})(l),s=o.default(a.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:m})=>m.colors.primary600};
  }
`,u=o.default(a.Box)`
  border-radius: 0 0 ${({theme:m})=>m.borderRadius} ${({theme:m})=>m.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,p=({children:m,icon:T,...v})=>t.jsxs("div",{children:[t.jsx(r.Divider,{}),t.jsx(u,{as:"button",background:"primary100",padding:5,...v,children:t.jsxs(d.Flex,{children:[t.jsx(s,{"aria-hidden":!0,background:"primary200",children:T}),t.jsx(a.Box,{paddingLeft:3,children:t.jsx(c.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:m})})]})})]});n.TFooter=p},31661:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(72450),r=e(56094),d=e(44747),i=(T=>T&&T.__esModule?T:{default:T})(a),o=i.default(d.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:T})=>T.colors.neutral150};
`,s=i.default(r.RawTable)`
  width: 100%;
  white-space: nowrap;
`,u=i.default(d.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:T})=>T==="both"||T==="left"?"''":void 0};
    box-shadow: ${({theme:T})=>T.shadows.tableShadow};
    width: ${({theme:T})=>T.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:T})=>T==="both"||T==="right"?"''":void 0};
    box-shadow: ${({theme:T})=>T.shadows.tableShadow};
    width: ${({theme:T})=>T.spaces[2]};
    right: 0;
    top: 0;
  }
`,p=i.default(d.Box)`
  overflow-x: auto;
`,m=({footer:T,...v})=>{const h=l.useRef(null),[g,y]=l.useState(),x=j=>{const E=j.target.scrollWidth-j.target.clientWidth;if(j.target.scrollLeft===0){y("right");return}if(j.target.scrollLeft===E){y("left");return}j.target.scrollLeft>0&&y("both")};return l.useEffect(()=>{h.current.scrollWidth>h.current.clientWidth&&y("right")},[]),t.jsxs(o,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[t.jsx(u,{overflowing:g,position:"relative",children:t.jsx(p,{ref:h,onScroll:x,paddingLeft:6,paddingRight:6,children:t.jsx(s,{...v})})}),T]})};n.Table=m},73314:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(72450),a=e(6890),c=(o=>o&&o.__esModule?o:{default:o})(l).default(a.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,i=({children:o,...s})=>t.jsx(c,{...s,children:o});n.Tbody=i},79821:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(72450),a=e(41179),c=(o=>o&&o.__esModule?o:{default:o})(l).default(a.RawThead)`
  border-bottom: 1px solid ${({theme:o})=>o.colors.neutral150};
`,i=({children:o,...s})=>t.jsx(c,{...s,children:o});n.Thead=i},45286:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(72450),a=e(26014),c=(o=>o&&o.__esModule?o:{default:o})(l).default(a.RawTr)`
  border-bottom: 1px solid ${({theme:o})=>o.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:o})=>o.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:o})=>o.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,i=o=>t.jsx(c,{...o});n.Tr=i},22493:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(31661),l=e(73314),a=e(79821),r=e(45286),d=e(34922),c=e(82079);n.Table=t.Table,n.Tbody=l.Tbody,n.Thead=a.Thead,n.Tr=r.Tr,n.Td=d.Td,n.Th=d.Th,n.TFooter=c.TFooter},61887:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(9246),r=e(54673);function d(o){if(o&&o.__esModule)return o;const s=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const u in o)if(u!=="default"){const p=Object.getOwnPropertyDescriptor(o,u);Object.defineProperty(s,u,p.get?p:{enumerable:!0,get:()=>o[u]})}}return s.default=o,Object.freeze(s)}const c=d(l),i=c.forwardRef(({id:o,initialSelectedTabIndex:s=0,label:u,onTabChange:p,variant:m,...T},v)=>{const h=r.useId(o),[g,y]=c.useState(s);c.useImperativeHandle(v,()=>({_handlers:{setSelectedTabIndex:y}}));const x=c.useMemo(()=>({id:h,selectedTabIndex:g,selectTabIndex:y,label:u,variant:m,onTabChange:p}),[u,p,g,h,m]);return t.jsx(a.TabsContext.Provider,{value:x,children:t.jsx("div",{...T})})});i.displayName="TabGroup",n.TabGroup=i},90958:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(9246),r=({children:c,...i})=>{const{id:o,selectedTabIndex:s}=a.useTabs(),u=l.Children.toArray(c).map((p,m)=>l.cloneElement(p,{id:`${o}-${m}`})).filter((p,m)=>m===s);return t.jsx("div",{...i,children:u})},d=({id:c,...i})=>{const o=`${c}-tab`,s=`${c}-tabpanel`;return t.jsx("div",{id:s,role:"tabpanel",tabIndex:0,"aria-labelledby":o,...i})};n.TabPanel=d,n.TabPanels=r},96239:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(81906),r=e(72450),d=e(63101),c=e(9246),i=e(77547),o=e(11880),u=(h=>h&&h.__esModule?h:{default:h})(r),p=(h,g)=>{const y=l.useRef(null),x=l.useRef(!1),j=a.useCallbackRef(g);return l.useEffect(()=>{if(y.current){if(x.current){const E=y.current.querySelector('[tabindex="0"]');E&&(E.focus(),j(h))}x.current||(x.current=!0)}},[h,j]),y},m=u.default.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,T=({children:h,...g})=>{const{id:y,selectedTabIndex:x,selectTabIndex:j,label:E,variant:M,onTabChange:b}=c.useTabs(),S=p(x,b),Z=l.Children.toArray(h).map((w,I)=>l.cloneElement(w,{id:`${y}-${I}`,index:I,selectedTabIndex:x,onTabClick:()=>j(I),variant:M})),$=w=>{if(!Z.every(A=>A.props.disabled))switch(w.key){case i.KeyboardKeys.RIGHT:{const A=x+1,D=O=>Z[O].props.disabled?O===Z.length-1?D(0):D(O+1):O,z=D(A>=Z.length?0:A);j(z);break}case i.KeyboardKeys.LEFT:{const A=x-1,D=O=>Z[O].props.disabled?D(O===0?Z.length-1:O-1):O,z=D(A<0?Z.length-1:A);j(z);break}case i.KeyboardKeys.HOME:{const A=Z.findIndex(D=>!D.props.disabled);j(A);break}case i.KeyboardKeys.END:{const D=Z.map((z,O)=>({isDisabled:z.props.disabled,index:O})).reverse().find(({isDisabled:z})=>!z);D&&j(D.index);break}}};return M==="simple"?t.jsx("div",{ref:S,role:"tablist","aria-label":E,onKeyDown:$,...g,children:Z}):t.jsx(d.DefaultTabsRow,{ref:S,role:"tablist",alignItems:"flex-end","aria-label":E,onKeyDown:$,...g,children:Z})},v=({disabled:h=!1,id:g,children:y,variant:x,hasError:j=!1,index:E,selectedTabIndex:M,onTabClick:b,...S})=>{const Z=`${g}-tab`,$=`${g}-tabpanel`,w=E===M,I=()=>{h||b&&b()};if(x==="simple"){let D;return j?D="danger600":w?D="primary600":D="neutral600",t.jsx(m,{id:Z,role:"tab","aria-controls":w?$:void 0,tabIndex:w?0:-1,"aria-selected":w,type:"button",onClick:I,"aria-disabled":h,...S,children:t.jsx(d.SimpleTabBox,{padding:4,selected:w,hasError:j,children:t.jsx(o.Typography,{variant:"sigma",textColor:D,children:y})})})}j&&console.warn('The "hasError" prop is only available for the "simple" variant.');const A=M&&M-1===E;return t.jsx(d.DefaultTabButton,{id:Z,role:"tab",type:"button","aria-controls":w?$:void 0,tabIndex:w?0:-1,"aria-selected":w,onClick:I,"aria-disabled":h,showRightBorder:Boolean(A),...S,children:t.jsx(d.DefaultTabBox,{padding:w?4:3,background:w?"neutral0":"neutral100",selected:w,children:t.jsx(o.Typography,{fontWeight:"bold",textColor:w?"primary700":"neutral600",children:y})})})};n.Tab=v,n.Tabs=T},9246:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(27279),l=t.createContext({id:"",label:"",selectedTabIndex:0,selectTabIndex(){throw new Error("TabsContext.selectTabIndex is not implemented.")}}),a=()=>t.useContext(l);n.TabsContext=l,n.useTabs=a},63101:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72450),l=e(44747),a=e(35725),d=(u=>u&&u.__esModule?u:{default:u})(t),c=d.default(l.Box)`
  border-bottom: 2px solid
    ${({theme:u,selected:p,hasError:m})=>p?m?u.colors.danger600:u.colors.primary600:"transparent"};
`,i=d.default(l.Box)`
  border-bottom: 1px solid ${({theme:u,selected:p})=>p?u.colors.neutral0:u.colors.neutral150};
`,o=d.default.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${i} {
    border-left: 1px solid ${({theme:u})=>u.colors.neutral150};
  }

  ${i} {
    border-right: ${({theme:u,showRightBorder:p})=>p?`1px solid ${u.colors.neutral150}`:"none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,s=d.default(a.Flex)`
  & > * {
    flex: 1;
  }

  & ${o}:first-of-type ${i} {
    border-radius: ${({theme:u})=>`${u.borderRadius} 0 0 0`};
  }

  & ${o}:last-of-type ${i} {
    border-radius: ${({theme:u})=>`0 ${u.borderRadius} 0 0`};
  }

  & ${o}[aria-selected="true"] ${i} {
    border-radius: ${({theme:u})=>`${u.borderRadius} ${u.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;n.DefaultTabBox=i,n.DefaultTabButton=o,n.DefaultTabsRow=s,n.SimpleTabBox=c},84637:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96239),l=e(90958),a=e(61887);n.Tab=t.Tab,n.Tabs=t.Tabs,n.TabPanel=l.TabPanel,n.TabPanels=l.TabPanels,n.TabGroup=a.TabGroup},15901:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(74081),l=e(27279),a=e(54673),r=e(59817),d=e(35725),c=e(69803),i=e(20601),o=e(63391),s=e(28518),u=l.forwardRef(({name:p,hint:m,error:T,label:v,labelAction:h,id:g,required:y,...x},j)=>{const E=a.useId(g),M=l.useRef(null),b=l.useRef(null);if(!v&&!x["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return l.useImperativeHandle(j,()=>({input:b,inputWrapperRef:M}),[]),t.jsx("div",{ref:M,children:t.jsx(r.Field,{name:p,hint:m,error:T,id:E,required:y,children:t.jsxs(d.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[v&&t.jsx(c.FieldLabel,{action:h,children:v}),t.jsx(i.FieldInput,{ref:b,...x}),t.jsx(o.FieldHint,{}),t.jsx(s.FieldError,{})]})})})});u.displayName="TextInput",n.TextInput=u},83067:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(15901);n.TextInput=t.TextInput},11880:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72450),l=e(83415),a=e(10547),d=(o=>o&&o.__esModule?o:{default:o})(t),c={fontSize:!0,fontWeight:!0},i=d.default.span.withConfig({shouldForwardProp:(o,s)=>!c[o]&&s(o)})`
  ${l.variantStyle}
  ${l.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:o,fontWeight:s})=>a.extractStyleFromTheme(o.fontWeights,s,void 0)};
  font-size: ${({theme:o,fontSize:s})=>a.extractStyleFromTheme(o.fontSizes,s,void 0)};
  line-height: ${({theme:o,lineHeight:s})=>a.extractStyleFromTheme(o.lineHeights,s,s)};
  color: ${({theme:o,textColor:s})=>o.colors[s||"neutral800"]};
  text-align: ${({textAlign:o})=>o};
  text-decoration: ${({textDecoration:o})=>o};
  text-transform: ${({textTransform:o})=>o};
`;n.Typography=i},14714:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="alpha",t="beta",l="delta",a="epsilon",r="omega",d="pi",c="sigma",i=[e,t,l,a,r,d,c];n.ALPHA=e,n.BETA=t,n.DELTA=l,n.EPSILON=a,n.OMEGA=r,n.PI=d,n.SIGMA=c,n.TEXT_VARIANTS=i},50568:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(11880);n.Typography=t.Typography},83415:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(14714),l=({ellipsis:r=!1})=>r&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,a=({variant:r=t.OMEGA,theme:d})=>{switch(r){case t.ALPHA:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[5]};
        line-height: ${d.lineHeights[2]};
      `;case t.BETA:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[4]};
        line-height: ${d.lineHeights[1]};
      `;case t.DELTA:return`
        font-weight: ${d.fontWeights.semiBold};
        font-size: ${d.fontSizes[3]};
        line-height: ${d.lineHeights[2]};
      `;case t.EPSILON:return`
        font-size: ${d.fontSizes[3]};
        line-height: ${d.lineHeights[6]};
      `;case t.OMEGA:return`
        font-size: ${d.fontSizes[2]};
        line-height: ${d.lineHeights[4]};
      `;case t.PI:return`
        font-size: ${d.fontSizes[1]};
        line-height: ${d.lineHeights[3]};
      `;case t.SIGMA:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[0]};
        line-height: ${d.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${d.fontSizes[2]};
      `}};n.ellipsisStyle=l,n.variantStyle=a},70321:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72450),r=(d=>d&&d.__esModule?d:{default:d})(t).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;n.VisuallyHidden=r},70711:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(70321);n.VisuallyHidden=t.VisuallyHidden},63832:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="[@strapi/design-system]:",t=l=>{const a=l;let r=!1;if(typeof a!="function")throw new TypeError(`${e} once requires a function parameter`);return(...d)=>{r||(a(...d),r=!0)}};n.PREFIX=e,n.once=t},70598:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=(l,a)=>[...l.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(c=>c.hasAttribute("disabled")?!1:a?!0:c.getAttribute("tabindex")!=="-1"),t=l=>l.filter(a=>a.tagName==="INPUT"?a.type!=="checkbox"&&a.type!=="radio":!1);n.getFocusableNodes=e,n.getFocusableNodesWithKeyboardNav=t},83315:f=>{const n=(e,t,l)=>{if(!t)return;let a=Array.isArray(t)?t:[];if(!Array.isArray(t)&&typeof t=="object"&&(a=[t?.desktop,t?.tablet,t?.mobile]),a.length>0)return a.reduce((c,i,o)=>{if(i)switch(o){case 0:return`${c}${e}: ${l.spaces[i]};`;case 1:return`${c}${l.mediaQueries.tablet}{${e}: ${l.spaces[i]};}`;case 2:return`${c}${l.mediaQueries.mobile}{${e}: ${l.spaces[i]};}`;default:return c}return c},"");const r=l.spaces[t]||t;return`${e}: ${r};`};f.exports=n},77547:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};n.KeyboardKeys=e},95193:(f,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});function e(l,a){return typeof l=="string"?!1:a in l}function t(l){return l&&typeof l=="object"&&!Array.isArray(l)}n.isKeyOf=e,n.isObject=t},10547:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(95193);function l(a,r,d){return r&&t.isKeyOf(a,r)?a[r]:d}n.extractStyleFromTheme=l},12416:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(27279);function l(i){if(i&&i.__esModule)return i;const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(i){for(const s in i)if(s!=="default"){const u=Object.getOwnPropertyDescriptor(i,s);Object.defineProperty(o,s,u.get?u:{enumerable:!0,get:()=>i[s]})}}return o.default=i,Object.freeze(o)}const a=l(t);function r(i,o){typeof i=="function"?i(o):i!=null&&(i.current=o)}function d(...i){return o=>i.forEach(s=>r(s,o))}function c(...i){return a.useCallback(d(...i),i)}n.composeRefs=d,n.useComposedRefs=c},43809:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(27279),l=a=>{const r=t.useRef(null),[d,c]=t.useState(!0),i=([o])=>{c(o.isIntersecting)};return t.useEffect(()=>{const o=r.current,s=new IntersectionObserver(i,a);return o&&s.observe(r.current),()=>{o&&s.disconnect()}},[r,a]),[r,d]};n.useElementOnScreen=l},54673:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(27279),r=(i=>i&&i.__esModule?i:{default:i})(t).default["useId".toString()]||(()=>{});let d=0;const c=i=>{const[o,s]=t.useState(r());return t.useLayoutEffect(()=>{i||s(u=>u??String(d++))},[i]),i?.toString()??(o||"")};n.useId=c},29381:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(27279),l=e(81906),a=(r,d)=>{const c=l.useCallbackRef(d);t.useLayoutEffect(()=>{const i=new ResizeObserver(c);return Array.isArray(r)?r.forEach(o=>{o.current&&i.observe(o.current)}):r.current&&i.observe(r.current),()=>{i.disconnect()}},[r,c])};n.useResizeObserver=a},5529:(f,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(72450),l=d=>({theme:c,size:i})=>c.sizes[d][i],a=(d="&")=>({theme:c,hasError:i=!1})=>t.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${d}:focus-within {
      border: 1px solid ${i?c.colors.danger600:c.colors.primary600};
      box-shadow: ${i?c.colors.danger600:c.colors.primary600} 0px 0px 0px 2px;
    }
  `,r=({theme:d})=>t.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${d.colors.primary600};
    }
  }
`;n.buttonFocusStyle=r,n.getThemeSize=l,n.inputFocusStyle=a},29019:(f,n,e)=>{const t=e(74081),l=r=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:t.jsx("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=l;f.exports=a},76566:(f,n,e)=>{e.r(n),e.d(n,{default:()=>re});var t=e(27279),l=e(25074),a=e(84637),r=e(22493),d=e(97487),c=e(17741),i=e(50568),o=e(70711);const s=()=>t.createElement(r.Thead,null,t.createElement(r.Tr,null,t.createElement(r.Th,null,t.createElement(o.VisuallyHidden,null,"INDEX")),t.createElement(r.Th,null,t.createElement(i.Typography,{variant:"sigma"},"NAME")),t.createElement(r.Th,null,t.createElement(i.Typography,{variant:"sigma"},"IN MEILISEARCH ?")),t.createElement(r.Th,null,t.createElement(i.Typography,{variant:"sigma"},"INDEXING ?")),t.createElement(r.Th,null,t.createElement(i.Typography,{variant:"sigma"},"INDEX NAME")),t.createElement(r.Th,null,t.createElement(i.Typography,{variant:"sigma"},"DOCUMENTS")),t.createElement(r.Th,null,t.createElement(i.Typography,{variant:"sigma"},"HOOKS")),t.createElement(r.Th,null,t.createElement(o.VisuallyHidden,null,"Actions")))),u=(0,t.memo)(s);var p=e(36741),m=e(16897);const T=({entry:R,deleteCollection:P,addCollection:F,updateCollection:K})=>t.createElement(r.Tr,{key:R.contentType},t.createElement(r.Td,null,t.createElement(p.BaseCheckbox,{"aria-label":`Select ${R.collection}`,onValueChange:()=>{R.indexed?P({contentType:R.contentType}):F({contentType:R.contentType})},value:R.indexed})),t.createElement(r.Td,null,t.createElement(i.Typography,{textColor:"neutral800"},R.collection)),t.createElement(r.Td,null,t.createElement(i.Typography,{textColor:"neutral800"},R.indexed?"Yes":"No")),t.createElement(r.Td,null,t.createElement(i.Typography,{textColor:"neutral800"},R.isIndexing?"Yes":"No")),t.createElement(r.Td,null,t.createElement(i.Typography,{textColor:"neutral800"},R.indexUid)),t.createElement(r.Td,null,t.createElement(i.Typography,{textColor:"neutral800"},R.numberOfDocuments," / ",R.numberOfEntries)),t.createElement(r.Td,null,t.createElement(i.Typography,{textColor:"neutral800"},R.reloadNeeded)),t.createElement(r.Td,null,t.createElement(m.Flex,null,t.createElement(l.Box,{paddingLeft:1},t.createElement(d.Button,{onClick:()=>K({contentType:R.contentType}),size:"S",variant:"secondary"},"Update"))))),v=(0,t.memo)(T);var h=e(80101),g=e.n(h);function y(){const R=(0,c.lm)();return{handleNotification:({type:F="info",message:K="Something occured in Meilisearch",link:G,blockTransition:U=!0})=>{R({type:F,message:{id:"notification.meilisearch.message",defaultMessage:K},link:G,blockTransition:U,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)})}}}const x=y,j=({indexed:R,listened:P})=>{if(R&&!P||!R&&P)return"Reload needed";if(R&&P)return"Hooked";if(!R&&!P)return"/"};function E(){const[R,P]=(0,t.useState)([]),[F,K]=(0,t.useState)(!0),[G,U]=(0,t.useState)(!1),[W,J]=(0,t.useState)(!1),{handleNotification:B}=x(),V=()=>K(H=>!H),X=async()=>{const{data:H,error:L}=await(0,c.WY)(`/${g()}/content-type/`,{method:"GET"});if(L)B({type:"warning",message:L.message,link:L.link});else{const _=H.contentTypes.map(Q=>(Q.reloadNeeded=j({indexed:Q.indexed,listened:Q.listened}),Q)),de=_.find(Q=>Q.reloadNeeded==="Reload needed"),ie=_.find(Q=>Q.isIndexing===!0);J(!!ie),U(!!de),P(_)}},k=async({contentType:H})=>{const{error:L}=await(0,c.WY)(`/${g()}/content-type/${H}`,{method:"DELETE"});L?B({type:"warning",message:L.message,link:L.link}):(V(),B({type:"success",message:"Request to delete content-type is successful",blockTransition:!1}))},N=async({contentType:H})=>{const{error:L}=await(0,c.WY)(`/${g()}/content-type`,{method:"POST",body:{contentType:H}});L?B({type:"warning",message:L.message,link:L.link}):(V(),B({type:"success",message:"Request to add a content-type is successful",blockTransition:!1}))},Y=async({contentType:H})=>{const{error:L}=await(0,c.WY)(`/${g()}/content-type`,{method:"PUT",body:{contentType:H}});L?B({type:"warning",message:L.message,link:L.link}):(V(),B({type:"success",message:"Request to update content-type is successful",blockTransition:!1}))};return(0,t.useEffect)(()=>{X()},[F]),(0,t.useEffect)(()=>{let H;return W?H=setInterval(()=>{V()},1e3):clearInterval(H),()=>clearInterval(H)},[W]),{collections:R,deleteCollection:k,addCollection:N,updateCollection:Y,reloadNeeded:G,refetchCollection:V,handleNotification:B}}const M=E,b=()=>{const{collections:R,deleteCollection:P,addCollection:F,updateCollection:K,reloadNeeded:G,refetchCollection:U}=M(),{lockAppWithAutoreload:W,unlockAppWithAutoreload:J}=(0,c.Vu)(),[B,V]=(0,t.useState)(!1),X=6,k=10,N=async()=>{try{W(),await(0,c.WY)(`/${g()}/reload`,{method:"GET"},!0),V(!1)}catch(Y){console.error(Y)}finally{J(),U()}};return(0,t.useEffect)(()=>{B&&N()},[B]),t.createElement(l.Box,{background:"neutral100"},t.createElement(r.Table,{colCount:k,rowCount:X},t.createElement(u,null),t.createElement(r.Tbody,null,R.map(Y=>t.createElement(v,{key:Y.collection,entry:Y,deleteCollection:P,addCollection:F,updateCollection:K})))),G&&t.createElement(l.Box,{padding:5},t.createElement(d.Button,{onClick:()=>V(!0)},"Reload server")))},S=(0,t.memo)(b);var Z=e(83067);function $(){const[R,P]=(0,t.useState)({host:"",apiKey:"",ApiKeyIsFromConfigFile:!0,HostIsFromConfigFile:!0}),[F,K]=(0,t.useState)(!0),[G,U]=(0,t.useState)(""),[W,J]=(0,t.useState)(""),{handleNotification:B}=x(),V=()=>K(N=>!N),X=async()=>{const{error:N}=await(0,c.WY)(`/${g()}/credential`,{method:"POST",body:{apiKey:W,host:G}});N?B({type:"warning",message:N.message,link:N.link}):(V(),B({type:"success",message:"Credentials sucessfully updated!",blockTransition:!1}))},k=async()=>{const{data:N,error:Y}=await(0,c.WY)(`/${g()}/credential`,{method:"GET"});Y?B({type:"warning",message:Y.message,link:Y.link}):(P(N),U(N.host),J(N.apiKey))};return(0,t.useEffect)(()=>{k()},[F]),{credentials:R,updateCredentials:X,setHost:U,setApiKey:J,host:G,apiKey:W}}const w=null,I=()=>{const{host:R,apiKey:P,credentials:F,setHost:K,setApiKey:G,updateCredentials:U}=$();return t.createElement(l.Box,null,t.createElement(l.Box,{padding:2},t.createElement(Z.TextInput,{placeholder:"Host",label:"Meilisearch Host",name:"host",hint:"The host on which your Meilisearch is running",value:R,onChange:W=>K(W.target.value),disabled:F.HostIsFromConfigFile})),t.createElement(l.Box,{padding:2},t.createElement(Z.TextInput,{placeholder:"API key",label:"Meilisearch API Key",name:"apiKey",hint:"A valid API key with enough permission to create indexes (or the master key).",onChange:W=>G(W.target.value),value:P,disabled:F.ApiKeyIsFromConfigFile,"aria-label":"Password",type:"password"})),t.createElement(l.Box,{paddingTop:1,paddingLeft:2},t.createElement(i.Typography,{variant:"pi",style:{color:"red"}},"Do not use this API key on your front-end as it has too much rights. Instead, use the public key available using"," ",t.createElement("a",{href:"https://docs.meilisearch.com/reference/api/keys.html#get-keys"},"the key route"),".")),t.createElement(l.Box,{paddingTop:2,paddingLeft:2,paddingRight:2,paddingBottom:2},t.createElement(d.Button,{variant:"secondary",onClick:()=>U(),disabled:F.ApiKeyIsFromConfigFile&&F.HostIsFromConfigFile},"Save")))},A=(0,t.memo)(I),D=()=>t.createElement(l.Box,{padding:5},t.createElement(A,null)),z=(0,t.memo)(D),O=()=>t.createElement(l.Box,{padding:8,margin:10,background:"neutral"},t.createElement(a.TabGroup,{label:"Some stuff for the label",id:"tabs"},t.createElement(a.Tabs,null,t.createElement(a.Tab,null,"Collections"),t.createElement(a.Tab,null,"Settings")),t.createElement(a.TabPanels,null,t.createElement(a.TabPanel,null,t.createElement(l.Box,{color:"neutral800",padding:4,background:"neutral0"},t.createElement(S,null))),t.createElement(a.TabPanel,null,t.createElement(l.Box,{color:"neutral800",padding:4,background:"neutral0"},t.createElement(z,null)))))),q=(0,t.memo)(O);var ee=e(29019),te=e.n(ee),oe=e(31902),ne=e(94305);const le=()=>t.createElement(l.Box,{background:"neutral100"},t.createElement(ne.BaseHeaderLayout,{navigationAction:t.createElement(oe.Link,{startIcon:t.createElement(te(),null),to:"/"},"Go back"),title:"Meilisearch",subtitle:"strapi-plugin-meilisearch",as:"h2"})),ae=(0,t.memo)(le),se=()=>t.createElement("div",null,t.createElement(ae,null),t.createElement(q,null)),re=(0,t.memo)(se)},53274:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),a=l},42108:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7Zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 1 0 0 3H7ZM7 5v2h2V5H7Zm0 3v2h2V8H7Zm0 3v2h2v-2H7Z"})}),a=l},23227:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...r,children:[(0,t.jsx)("path",{fill:"#D9822F",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38-4.16 2.373Zm-2.287 0-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878v-2.912Z",clipRule:"evenodd"})]}),a=l},35318:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),a=l},14461:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...r,children:[(0,t.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),(0,t.jsx)("path",{fill:"#fff",d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"})]}),a=l},8305:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-8.806-4 .806.806L12.806 12 16 15.194l-.806.806L12 12.806 8.806 16 8 15.194 11.194 12 8 8.806 8.806 8 12 11.194 15.194 8Z",clipRule:"evenodd"})}),a=l},73352:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#7289DA",d:"M20.04 0H3.96A2.464 2.464 0 0 0 1.5 2.468v16.2a2.464 2.464 0 0 0 2.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0 0 20.04 0Zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 0 1-3.108-.012 10.086 10.086 0 0 1-1.764-.515 7.053 7.053 0 0 1-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 0 1-.048-.036 4.202 4.202 0 0 1-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0 1 16.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821Zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33Zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33Z"})}),a=l},75481:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("path",{fill:"#231F20",d:"M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0Z"}),(0,t.jsx)("path",{fill:"#FFF9AE",d:"M12.22 4.564a7.43 7.43 0 0 0-3.644.956 7.346 7.346 0 0 0-2.692 2.614 7.26 7.26 0 0 0-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 0 0 6.355-.14 7.36 7.36 0 0 0 2.513-2.057 7.28 7.28 0 0 0 1.372-2.93 7.243 7.243 0 0 0-.035-3.228A7.281 7.281 0 0 0 17.96 7.28a7.365 7.365 0 0 0-2.557-2.002 7.432 7.432 0 0 0-3.178-.715h-.007Z"}),(0,t.jsx)("path",{fill:"#00AEEF",d:"M18.071 7.426a7.262 7.262 0 0 1 1.51 4.499 7.264 7.264 0 0 1-1.595 4.47 7.38 7.38 0 0 1-4.028 2.558 7.437 7.437 0 0 1-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 0 0 5.181.858 7.381 7.381 0 0 0 4.443-2.778 7.258 7.258 0 0 0-.833-9.693Z"}),(0,t.jsx)("path",{fill:"#00A94F",d:"M16.713 6.078a7.253 7.253 0 0 1 .86 8.928 7.361 7.361 0 0 1-3.736 2.962 7.437 7.437 0 0 1-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 0 0 5.24.313 7.362 7.362 0 0 0 4.123-3.22 7.249 7.249 0 0 0 .914-5.123 7.296 7.296 0 0 0-2.757-4.427Z"}),(0,t.jsx)("path",{fill:"#F15D22",d:"M6.176 15.515a7.246 7.246 0 0 1-.26-4.876 7.312 7.312 0 0 1 2.9-3.95 7.427 7.427 0 0 1 9.26.735 7.387 7.387 0 0 0-4.603-2.771 7.431 7.431 0 0 0-5.277 1.068A7.311 7.311 0 0 0 5.06 10.06a7.249 7.249 0 0 0 .676 5.294L4.4 19.607l1.776-4.092Z"}),(0,t.jsx)("path",{fill:"#E31B23",d:"M5.735 15.353a7.25 7.25 0 0 1-.764-4.818 7.294 7.294 0 0 1 2.465-4.222 7.415 7.415 0 0 1 4.596-1.744 7.42 7.42 0 0 1 4.681 1.509 7.404 7.404 0 0 0-4.865-2.26 7.421 7.421 0 0 0-5.12 1.61 7.293 7.293 0 0 0-2.66 4.626A7.256 7.256 0 0 0 5.28 15.24l-.877 4.37 1.332-4.257Z"})]}),a=l},33039:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),a=l},68285:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("path",{fill:"#212134",d:"M11.987 23.036v-.964H1.876V1.876h10.111V0H0v24h11.987v-.964Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M8 11.2c0-.11.09-.2.2-.2h11.973l-5.445-5.445a.2.2 0 0 1 0-.283l1.13-1.13a.2.2 0 0 1 .283 0l7.718 7.717a.2.2 0 0 1 0 .282L16.14 19.86a.2.2 0 0 1-.282 0l-1.13-1.13a.2.2 0 0 1 0-.284L20.172 13H8.2a.2.2 0 0 1-.2-.2v-1.6Z"})]}),a=l},96700:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...r,children:[(0,t.jsx)("path",{fill:"#9736E8",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",d:"M18.037 11.774a28.578 28.578 0 0 0-2.948 2.706c-1.995 2.109-3.55 4.093-4.761 6.06-.289.469-.574.945-.855 1.418a9.074 9.074 0 0 0-.463 1.536c-.074.37.275.68.577.395.312-.299.587-.64.851-.985.467-.608.906-1.237 1.342-1.867 3.37.242 7.27-2.048 8.933-4.857a.196.196 0 0 0 .017-.167.183.183 0 0 0-.114-.118c-.809-.27-1.798-.44-2.207-.462-.017 0-.034-.014-.037-.035a.039.039 0 0 1 .024-.043c1.113-.58 1.924-.647 2.877-.505.07.01.134-.046.16-.114.095-.217.356-.87.537-1.404a.201.201 0 0 0-.087-.239c-.71-.384-1.656-.643-2.035-.682-.017 0-.03-.018-.034-.036a.039.039 0 0 1 .024-.043c1.1-.483 1.485-.497 2.364-.302.087.018.17-.05.19-.142.433-1.714.574-3.197.608-3.68a.21.21 0 0 0-.057-.157.177.177 0 0 0-.148-.05c-2.444.356-4.403.865-6.093 1.55-.057.022-.11.072-.11.136.144.551-.242 1.209-.845 1.703a.042.042 0 0 1-.044.018.046.046 0 0 1-.027-.043c.004-.046.158-.665.067-1.116-.013-.064-.033-.125-.084-.16a.173.173 0 0 0-.17-.014c-7.924 3.811-5.922 10.098-5.922 10.098.01.004.02.004.03.007.895-1.86 1.904-3.232 3.49-5.035 1.178-1.337 2.331-2.425 3.525-3.325.75-.565 2.448-1.738 3.51-2.144a.285.285 0 0 1 .105-.021c.097 0 .177.064.2.16a.264.264 0 0 1-.046.228l-2.344 1.731Z"})]}),a=l},66770:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),a=l},12997:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...r,children:[(0,t.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),a=l},87050:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...r,children:[(0,t.jsx)("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),a=l},50862:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"})}),a=l},75438:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),a=l},84076:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#32324D",d:"M3.74 2.7v3.85h1.04v.85H1.56v-.85H2.6V3.8H1.56v-.77l2.18-.33Zm-.72 10.92.01.04h1.75v.76H1.55v-.67l1.52-1.57c.19-.22.34-.41.43-.58a.99.99 0 0 0 .14-.45.64.64 0 0 0-.14-.43.51.51 0 0 0-.4-.16.43.43 0 0 0-.39.2.96.96 0 0 0-.14.53H1.52v-.02c-.02-.43.12-.79.41-1.09.3-.3.68-.44 1.16-.44.52 0 .91.12 1.2.37.29.25.43.6.43 1.04 0 .29-.08.55-.23.78-.15.22-.43.56-.84 1l-.63.7Zm1.63 5.85a1.25 1.25 0 0 0-.59-.42c.22-.1.4-.24.53-.41a1.16 1.16 0 0 0-.26-1.57c-.3-.23-.7-.35-1.21-.35-.43 0-.8.12-1.1.35-.31.23-.46.55-.45.92l.01.03h1.05c0-.19.05-.25.16-.33a.6.6 0 0 1 .37-.13c.18 0 .31.05.4.15.1.1.15.22.15.37a.6.6 0 0 1-.16.44.6.6 0 0 1-.45.17h-.5v.75h.5c.22 0 .39.07.5.17.12.1.18.28.18.5 0 .16-.05.3-.17.4a.64.64 0 0 1-.45.17.64.64 0 0 1-.42-.18.47.47 0 0 1-.18-.4H1.51l-.01.05c-.01.43.15.78.47 1 .33.23.71.35 1.15.35.5 0 .92-.12 1.25-.36.33-.24.49-.58.49-1 0-.26-.07-.48-.21-.67ZM8.4 3.97h14.1v2.38H8.4V3.98Zm14.1 6.9H8.4v2.37h14.1v-2.37Zm-14.1 6.9h14.1v2.37H8.4v-2.37Z"})}),a=l},13789:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"})}),a=l},24307:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...r,children:[(0,t.jsx)("path",{fill:"#FDF4DC",stroke:"#FAE7B9",d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"}),(0,t.jsx)("path",{fill:"#D9822F",d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"})]}),a=l},64820:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...r,children:(0,t.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),a=l},75682:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...r,children:[(0,t.jsx)("path",{fill:"#66B7F1",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M12 10.921a.5.5 0 0 1 .773-.419l8.582 5.579a.5.5 0 0 1 0 .838l-8.582 5.579a.5.5 0 0 1-.773-.42V10.922Z",clipRule:"evenodd"})]}),a=l},77225:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),a=l},72535:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 25 25",...r,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",clipRule:"evenodd"})}),a=l},13317:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 15 14",...r,children:(0,t.jsx)("path",{fill:"#212134",d:"M5.08 4.1c0-1.19 1.18-2.17 2.42-2.17s2.43.98 2.43 2.17c0 1.1-.56 1.61-1.31 2.28l-.03.03c-.75.65-1.66 1.47-1.66 3.09a.57.57 0 1 0 1.15 0c0-1.08.55-1.6 1.3-2.26l.02-.02c.75-.66 1.67-1.48 1.67-3.12C11.07 2.13 9.22.78 7.5.78 5.78.78 3.93 2.13 3.93 4.1a.57.57 0 1 0 1.15 0Zm2.42 9.26a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z"})}),a=l},82063:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#FF4500",fillRule:"evenodd",d:"M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92ZM17.94 10.34a1.73 1.73 0 0 1 1.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 0 1 0-.524 1.662 1.662 0 0 1-.461-.314 1.756 1.756 0 0 1-.076-2.46 1.697 1.697 0 0 1 2.425-.076 8.339 8.339 0 0 1 4.584-1.467l.868-4.136v-.006a.364.364 0 0 1 .435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 0 1 1.295 1.058 1.188 1.188 0 0 1-1.044 1.313 1.18 1.18 0 0 1-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 0 1 4.526 1.467 1.71 1.71 0 0 1 1.125-.483Zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 0 0 1.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194Zm2.747 5.39a4.47 4.47 0 0 0 2.904-.919v.047a.339.339 0 0 0 .006-.47.327.327 0 0 0-.465-.007 3.83 3.83 0 0 1-2.457.726 3.802 3.802 0 0 1-2.446-.75.314.314 0 0 0-.403 0 .327.327 0 0 0-.044.454 4.47 4.47 0 0 0 2.905.918Zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 0 0 1.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194Z",clipRule:"evenodd"})}),a=l},26171:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...r,children:[(0,t.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,t.jsx)("path",{fill:"#0C75AF",fillRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",clipRule:"evenodd"})]}),a=l},86874:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",clipRule:"evenodd"})}),a=l},606:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...r,children:[(0,t.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),(0,t.jsx)("path",{fill:"#fff",d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"})]}),a=l},70525:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 80 80",...r,children:[(0,t.jsx)("path",{fill:"#4945FF",d:"M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7Z"}),(0,t.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5Z",clipRule:"evenodd"}),(0,t.jsx)("path",{fill:"#fff",d:"M41.5 38h.5v.5h-.5z"}),(0,t.jsx)("path",{fill:"#9593FF",d:"M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 0 1-.5-.5V38ZM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13ZM28.3 38H15.2a.3.3 0 0 1-.2-.5l13.3-13.2V38Z"})]}),a=l},70521:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...r,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),a=l},30984:(f,n,e)=>{e.d(n,{Z:()=>a});var t=e(74081);const l=r=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.707.297A1 1 0 0 0 23 .004h-2a13.907 13.907 0 0 0-5.38 1.077 1 1 0 0 0-.615.923V4.92a.035.035 0 0 1-.022.038l-2-1.47a1 1 0 0 0-1.265.052A14 14 0 0 0 7 14.004v1.585l-2.707 2.707a1 1 0 1 0 1.415 1.415l2.707-2.708H10a14.014 14.014 0 0 0 14-14v-2a1 1 0 0 0-.293-.706ZM18 23.999H3a3 3 0 0 1-3-3V6A3 3 0 0 1 3 3h3a1 1 0 1 1 0 2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3Z",clipRule:"evenodd"})}),a=l},73517:(f,n,e)=>{e.r(n),e.d(n,{Alien:()=>t.Z,Apps:()=>l.Z,Archive:()=>a.Z,ArrowDown:()=>r.Z,ArrowLeft:()=>d.Z,ArrowRight:()=>c.Z,ArrowUp:()=>i.Z,Attachment:()=>o.Z,Bell:()=>s.Z,Blocks:()=>m,Bold:()=>T.Z,Book:()=>v.Z,Boolean:()=>h.Z,Briefcase:()=>g.Z,Brush:()=>y.Z,BulletList:()=>x.Z,Calendar:()=>j.Z,Car:()=>E.Z,CarretDown:()=>M.Z,CarretUp:()=>b.Z,Cast:()=>S.Z,ChartBubble:()=>Z.Z,ChartCircle:()=>$.Z,ChartPie:()=>w.Z,Check:()=>I.Z,CheckCircle:()=>A.Z,ChevronDown:()=>D.Z,ChevronLeft:()=>z.Z,ChevronRight:()=>O.Z,ChevronUp:()=>q.Z,Clock:()=>ee.Z,Cloud:()=>te.Z,CloudUpload:()=>ne,Code:()=>le.Z,CodeSquare:()=>ae.Z,Cog:()=>se.Z,Collapse:()=>re.Z,CollectionType:()=>R.Z,Command:()=>P.Z,Component:()=>F.Z,Connector:()=>K.Z,Crop:()=>G.Z,Cross:()=>U.Z,CrossCircle:()=>W.Z,Crown:()=>J.Z,Cube:()=>B.Z,Cup:()=>V.Z,Cursor:()=>X.Z,Dashboard:()=>k.Z,Database:()=>N.Z,Date:()=>Y.Z,Discord:()=>H.Z,Discourse:()=>L.Z,Discuss:()=>_.Z,Doctor:()=>de.Z,Dot:()=>ie.Z,Download:()=>Q.Z,Drag:()=>ce.Z,Duplicate:()=>ue.Z,DynamicZone:()=>he.Z,Earth:()=>fe.Z,EarthStriked:()=>ge.Z,Email:()=>me.Z,EmotionHappy:()=>ve.Z,EmotionUnhappy:()=>ye.Z,EmptyDocuments:()=>xe.Z,EmptyPermissions:()=>pe.Z,EmptyPictures:()=>Te.Z,Enumeration:()=>be.Z,Envelop:()=>je.Z,Equalizer:()=>Se,ExclamationMarkCircle:()=>Ee.Z,Exit:()=>Ze.Z,Expand:()=>Ce.Z,ExternalLink:()=>Re.Z,Eye:()=>we.Z,EyeStriked:()=>De.Z,Facebook:()=>Ae,Feather:()=>Oe.Z,FeatherSquare:()=>Pe.Z,File:()=>Be.Z,FileError:()=>Le.Z,FilePdf:()=>Ie.Z,Filter:()=>Fe.Z,Folder:()=>Ne.Z,Gate:()=>He.Z,Gift:()=>ze.Z,Github:()=>Ke.Z,GlassesSquare:()=>Ue.Z,Globe:()=>We.Z,GraphQl:()=>Ve,Grid:()=>Ye.Z,HandHeart:()=>Qe.Z,Hashtag:()=>Je.Z,Headphone:()=>Xe.Z,Heart:()=>ke.Z,House:()=>qe.Z,IndentDecrease:()=>et,IndentIncrease:()=>ot,Information:()=>nt.Z,InformationSquare:()=>lt.Z,Italic:()=>at.Z,Json:()=>st.Z,Key:()=>rt.Z,Landscape:()=>dt.Z,LandscapeSmall:()=>ct,Layer:()=>ut.Z,Layout:()=>ht.Z,Lightbulb:()=>ft.Z,Link:()=>gt.Z,LinkSmall:()=>vt,List:()=>yt.Z,Loader:()=>xt.Z,Lock:()=>pt.Z,Magic:()=>Tt.Z,Mail:()=>jt,ManyToMany:()=>Mt.Z,ManyToOne:()=>St.Z,ManyWays:()=>Et.Z,Media:()=>Zt.Z,Medium:()=>Ct.Z,MenuBurger:()=>wt,Message:()=>Dt.Z,Microphone:()=>$t.Z,Minus:()=>At.Z,MinusOutlined:()=>Pt,Monitor:()=>Bt.Z,Moon:()=>Lt.Z,More:()=>It.Z,Move:()=>Nt,Music:()=>Ht.Z,Number:()=>zt.Z,NumberList:()=>Kt.Z,OneToMany:()=>Ut.Z,OneToOne:()=>Wt.Z,OneWay:()=>Gt.Z,OnholdCarretDown:()=>Yt,OnholdCarretUp:()=>Jt,Paint:()=>Xt.Z,PaintBrush:()=>kt.Z,PaperPlane:()=>qt.Z,Password:()=>_t.Z,Pencil:()=>e0.Z,Phone:()=>t0.Z,Picture:()=>o0.Z,PicturePlus:()=>n0.Z,Pin:()=>l0.Z,PinMap:()=>a0.Z,Plane:()=>s0.Z,Play:()=>r0.Z,PlaySquare:()=>d0.Z,Plus:()=>i0.Z,PlusCircle:()=>c0.Z,PriceTag:()=>u0.Z,Puzzle:()=>h0.Z,Question:()=>f0.Z,Quote:()=>g0.Z,QuoteClosed:()=>v0,Reddit:()=>y0.Z,Refresh:()=>x0.Z,Relation:()=>p0.Z,Repeat:()=>T0.Z,Restaurant:()=>b0.Z,RichText:()=>j0.Z,Rocket:()=>M0.Z,Rotate:()=>S0.Z,Scissors:()=>E0.Z,Search:()=>Z0.Z,SearchIcon:()=>R0,Seed:()=>w0.Z,Server:()=>D0.Z,Shield:()=>$0.Z,Shirt:()=>A0.Z,ShoppingCart:()=>O0.Z,SingleType:()=>P0.Z,Slideshow:()=>B0.Z,Spinner:()=>I0,Stack:()=>F0.Z,Star:()=>N0.Z,Store:()=>H0.Z,Strapi:()=>z0.Z,StrikeThrough:()=>K0.Z,Sun:()=>U0.Z,Television:()=>W0.Z,Text:()=>G0.Z,ThumbDown:()=>V0.Z,ThumbUp:()=>Y0.Z,Train:()=>Q0.Z,Trash:()=>J0.Z,Twitter:()=>X0.Z,Typhoon:()=>k0.Z,Uid:()=>q0.Z,Underline:()=>_0.Z,Upload:()=>e1.Z,User:()=>t1.Z,VolumeMute:()=>o1.Z,VolumeUp:()=>n1.Z,Walk:()=>l1.Z,Wheelchair:()=>a1.Z,Write:()=>s1.Z});var t=e(56692),l=e(79131),a=e(53264),r=e(93454),d=e(76827),c=e(53274),i=e(45684),o=e(7559),s=e(31654),u=e(74081);const p=C=>(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 34 25",...C,children:[(0,u.jsx)("rect",{width:33,height:23,x:.5,y:1,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,u.jsx)("path",{fill:"#0C75AF",d:"M18.901 9.828a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,u.jsx)("path",{fill:"#0C75AF",d:"M19.703 8.785a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.814.814 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 13.488a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,u.jsx)("path",{fill:"#0C75AF",d:"M19.703 12.445a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.307 1.307 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 17.247a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,u.jsx)("path",{fill:"#0C75AF",d:"M19.703 16.204a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.698 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.313-.477-.313-.482-.002ZM15.075 9.842a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,u.jsx)("path",{fill:"#0C75AF",d:"M15.876 8.8a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 13.503a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,u.jsx)("path",{fill:"#0C75AF",d:"M15.876 12.46a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 17.261a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,u.jsx)("path",{fill:"#0C75AF",d:"M15.876 16.218a.81.81 0 0 1-.512.749.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.808.808 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.293 1.293 0 0 0-.119 1.487c.283.468.831.698 1.365.596.596-.113 1.011-.664 1.02-1.258.006-.311-.477-.311-.482 0Z"})]}),m=p;var T=e(18334),v=e(42108),h=e(67929),g=e(32721),y=e(67224),x=e(20316),j=e(36974),E=e(8419),M=e(10411),b=e(78181),S=e(42190),Z=e(3232),$=e(4896),w=e(64386),I=e(59082),A=e(15398),D=e(78582),z=e(64449),O=e(89242),q=e(57853),ee=e(73192),te=e(98430);const oe=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#212134",d:"M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019ZM13 13h3l-4-5-4 5h3v4h2v-4Z"})}),ne=oe;var le=e(74002),ae=e(23227),se=e(35318),re=e(70743),R=e(14461),P=e(38724),F=e(60069),K=e(94187),G=e(70415),U=e(95066),W=e(8305),J=e(86463),B=e(71267),V=e(61646),X=e(92518),k=e(67890),N=e(95957),Y=e(52374),H=e(73352),L=e(75481),_=e(20184),de=e(54285),ie=e(79830),Q=e(33766),ce=e(33039),ue=e(78031),he=e(24001),fe=e(7995),ge=e(78372),me=e(16719),ve=e(47241),ye=e(87532),xe=e(52448),pe=e(6162),Te=e(10562),be=e(14858),je=e(16543);const Me=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),Se=Me;var Ee=e(15206),Ze=e(68285),Ce=e(271),Re=e(48157),we=e(98264),De=e(92191);const $e=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#1977F3",fillRule:"evenodd",d:"M12.143 24Zm1.732-.146V15.47h2.796l.532-3.47h-3.328V9.749c0-.949.464-1.875 1.956-1.875h1.514V4.921s-1.374-.235-2.687-.235c-2.74 0-4.533 1.66-4.533 4.67V12H7.078v3.47h3.047v8.384C4.388 22.954 0 17.99 0 12 0 5.373 5.373 0 12 0s12 5.373 12 12c0 5.99-4.388 10.954-10.125 11.854Z",clipRule:"evenodd"})}),Ae=$e;var Oe=e(89824),Pe=e(96700),Be=e(89906),Le=e(47278),Ie=e(66390),Fe=e(57121),Ne=e(61287),He=e(84670),ze=e(56074),Ke=e(66770),Ue=e(12997),We=e(20302);const Ge=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#8E8EA9",fillRule:"evenodd",d:"M11.76 6.801a1.435 1.435 0 0 0 .797 0l4.31 7.45a1.418 1.418 0 0 0-.401.696H7.85a1.427 1.427 0 0 0-.401-.693L11.76 6.8Zm-.63-.378.042.04-4.312 7.453a1.374 1.374 0 0 0-.056-.015v-3.802A1.42 1.42 0 0 0 7.83 8.324l3.3-1.901Zm2.396-.583a1.428 1.428 0 1 0-2.737-.002L7.494 7.736a1.431 1.431 0 0 0-2.273.268 1.425 1.425 0 0 0 .904 2.098V13.9a1.426 1.426 0 1 0 1.37 2.368l3.293 1.897a1.425 1.425 0 0 0 1.37 1.828 1.427 1.427 0 0 0 1.355-1.873l3.274-1.887a1.431 1.431 0 0 0 2.304-.236 1.419 1.419 0 0 0-.9-2.097v-3.797a1.426 1.426 0 1 0-1.371-2.365L13.526 5.84Zm-.381.622.038-.038 3.302 1.903a1.42 1.42 0 0 0 1.027 1.772V13.9l-.055.015-4.312-7.453Zm3.348 9.256-3.28 1.89a1.425 1.425 0 0 0-1.055-.465c-.404 0-.77.167-1.029.436l-3.296-1.9a1.41 1.41 0 0 0 .015-.055h8.619l.026.094Z",clipRule:"evenodd"})}),Ve=Ge;var Ye=e(66351),Qe=e(59453),Je=e(99001),Xe=e(11618),ke=e(36952),qe=e(53723);const _e=C=>(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:[(0,u.jsx)("g",{clipPath:"url(#IndentDecrease_svg__a)",children:(0,u.jsx)("path",{fill:"#32324D",d:"M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8ZM1 12l4.9-4.2v8.4L1 12Z"})}),(0,u.jsx)("defs",{children:(0,u.jsx)("clipPath",{id:"IndentDecrease_svg__a",children:(0,u.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}),et=_e,tt=C=>(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:[(0,u.jsx)("g",{clipPath:"url(#IndentIncrease_svg__a)",children:(0,u.jsx)("path",{fill:"#32324D",d:"M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8Zm-5 4.2L1 16.2V7.8L5.9 12Z"})}),(0,u.jsx)("defs",{children:(0,u.jsx)("clipPath",{id:"IndentIncrease_svg__a",children:(0,u.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}),ot=tt;var nt=e(42679),lt=e(87050),at=e(64059),st=e(6913),rt=e(5368),dt=e(52827);const it=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M7.1 5a.573.573 0 0 0 0 1.145h9.744a.573.573 0 0 0 0-1.145H7.1Zm10.3 2.354a1.6 1.6 0 0 1 1.6 1.6v8.7a1.6 1.6 0 0 1-1.6 1.6H6.6a1.6 1.6 0 0 1-1.6-1.6V8.963c0-.884.716-1.609 1.6-1.609h10.8Zm-9.834 9.47h9.123l-1.996-2.04-1.14 1.165-2.566-2.622-3.421 3.496Zm7.127-4.078c-.798 0-1.425-.641-1.425-1.457 0-.816.627-1.457 1.425-1.457.799 0 1.426.641 1.426 1.457 0 .816-.627 1.457-1.426 1.457Z",clipRule:"evenodd"})}),ct=it;var ut=e(31440),ht=e(43582),ft=e(58113),gt=e(47243);const mt=C=>(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:[(0,u.jsx)("path",{fill:"#212134",d:"M17.756 5.748a3.416 3.416 0 0 0-4.747.467L12.01 7.41a.852.852 0 0 0 1.308 1.092l1-1.195a1.7 1.7 0 0 1 2.43-.18 1.735 1.735 0 0 1 .141 2.394l-2.077 2.486-.019.022a1.697 1.697 0 0 1-2.522.043.852.852 0 0 0-1.248 1.162 3.405 3.405 0 0 0 5.1-.137l2.071-2.48a3.502 3.502 0 0 0 .79-2.572 3.345 3.345 0 0 0-1.228-2.298Z"}),(0,u.jsx)("path",{fill:"#212134",d:"m11.622 14.956-.893 1.069a1.735 1.735 0 0 1-2.381.286 1.7 1.7 0 0 1-.255-2.423l2.113-2.529.016-.017a1.692 1.692 0 0 1 2.552-.012.852.852 0 0 0 .999.205.841.841 0 0 0 .284-.22l.01-.012a.84.84 0 0 0-.014-1.1 3.4 3.4 0 0 0-5.16.07l-2.108 2.522a3.417 3.417 0 0 0 .385 4.754 3.346 3.346 0 0 0 2.48.8 3.501 3.501 0 0 0 2.39-1.234l.89-1.066a.852.852 0 1 0-1.308-1.093Z"})]}),vt=mt;var yt=e(86485),xt=e(34547),pt=e(91561),Tt=e(13389);const bt=C=>(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 20",...C,children:[(0,u.jsx)("path",{fill:"#32324D",d:"M0 .8A.8.8 0 0 1 .8 0h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V.8Z"}),(0,u.jsx)("path",{fill:"#32324D",d:"M1.922 5.991C.197 4.675 0 4.252 0 3.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 16H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 19.529.537 20 1.2 20h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,u.jsx)("path",{fill:"#32324D",d:"M0 7.555v10.972h24V7.554c-2.633 1.95-8.367 6.113-9.96 7.165-1.595 1.053-3.352.439-4.032 0L0 7.555Z"})]}),jt=bt;var Mt=e(43286),St=e(27645),Et=e(36730),Zt=e(48809),Ct=e(42821);const Rt=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#212134",d:"M8 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.6ZM8 11.7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.6ZM8.5 14.401a.5.5 0 0 0-.5.5v.6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.6a.5.5 0 0 0-.5-.5h-7Z"})}),wt=Rt;var Dt=e(50862),$t=e(68077),At=e(29938);const Ot=C=>(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:[(0,u.jsx)("circle",{cx:12,cy:12,r:11.5,stroke:"#C0C0CF"}),(0,u.jsx)("rect",{width:10,height:2,x:7,y:11,fill:"#4945FF",rx:1})]}),Pt=Ot;var Bt=e(88678),Lt=e(1628),It=e(75438);const Ft=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#212134",d:"M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11H11Z"})}),Nt=Ft;var Ht=e(74334),zt=e(60330),Kt=e(84076),Ut=e(64510),Wt=e(1267),Gt=e(91682);const Vt=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M19 8.889a.86.86 0 0 1-.26.625l-6.125 6.222A.834.834 0 0 1 12 16a.834.834 0 0 1-.615-.264L5.26 9.514A.861.861 0 0 1 5 8.889c0-.24.087-.45.26-.625A.834.834 0 0 1 5.875 8h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z",clipRule:"evenodd"})}),Yt=Vt,Qt=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M5 15.111c0-.24.087-.449.26-.625l6.125-6.222A.834.834 0 0 1 12 8c.237 0 .442.088.615.264l6.125 6.222a.86.86 0 0 1 .26.625.86.86 0 0 1-.26.625.834.834 0 0 1-.615.264H5.875a.835.835 0 0 1-.615-.264.86.86 0 0 1-.26-.625Z",clipRule:"evenodd"})}),Jt=Qt;var Xt=e(30770),kt=e(95096),qt=e(13789),_t=e(24307),e0=e(26784),t0=e(71387),o0=e(23109),n0=e(80153),l0=e(38447),a0=e(83761),s0=e(26244),r0=e(64820),d0=e(75682),i0=e(36938),c0=e(77225),u0=e(29426),h0=e(72535),f0=e(13317),g0=e(63302);const m0=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#212134",d:"M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311-1.803-.167-3.225-1.648-3.225-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179Zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311C4.592 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179h-.001Z"})}),v0=m0;var y0=e(82063),x0=e(84352),p0=e(967),T0=e(50186),b0=e(76715),j0=e(26171),M0=e(48098),S0=e(70901),E0=e(54763),Z0=e(10382);const C0=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...C,children:(0,u.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"m23.813 20.163-5.3-5.367a9.792 9.792 0 0 0 1.312-4.867C19.825 4.455 15.375 0 9.913 0 4.45 0 0 4.455 0 9.929c0 5.473 4.45 9.928 9.912 9.928a9.757 9.757 0 0 0 5.007-1.4l5.275 5.35a.634.634 0 0 0 .913 0l2.706-2.737a.641.641 0 0 0 0-.907ZM9.91 3.867c3.338 0 6.05 2.718 6.05 6.061s-2.712 6.061-6.05 6.061c-3.337 0-6.05-2.718-6.05-6.06 0-3.344 2.713-6.062 6.05-6.062Z",clipRule:"evenodd"})}),R0=C0;var w0=e(60674),D0=e(55353),$0=e(94842),A0=e(27733),O0=e(86874),P0=e(606),B0=e(66721);const L0=C=>(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 40 40",...C,children:(0,u.jsx)("path",{fill:"#4945FF",d:"M30.113 7.768a16.772 16.772 0 0 0-6.635-3.317c-2.505-.634-5.23-.598-7.854.096-.313.065-.6.166-.879.265l-.123.042c-.102.035-.203.07-.308.108a7.57 7.57 0 0 0-.655.247c-.164.078-.325.148-.488.221-.44.198-.893.403-1.29.657-1.314.71-2.42 1.674-3.247 2.448-1.922 1.931-3.355 4.359-4.035 6.832l-.093.37c-.131.516-.27 1.049-.322 1.572-.012.107-.033.214-.047.318-.032.218-.065.431-.078.664l-.051 1.097c-.005.11-.011.225-.006.358l.073 1.44.148.993c.041.283.085.581.164.85.553 2.391 1.627 4.609 3.103 6.41a15.664 15.664 0 0 0 4.951 3.997l.969.468c.092.04.168.07.242.096l.116.04c.152.053.295.106.444.16.276.106.546.206.843.295l1.26.32c.265.052.531.091.79.128.135.021.27.038.429.065 1.532.166 2.95.147 4.087-.058.092-.016.182-.026.272-.04.183-.025.368-.048.531-.092l1.284-.319 1.307-.456a.502.502 0 0 0-.318-.951l-1.277.396-1.246.257c-.135.026-.277.04-.422.056-.1.004-.196.02-.305.03-1.048.148-2.342.115-3.728-.089-.137-.024-.272-.05-.405-.074-.24-.046-.477-.09-.695-.142l-1.16-.338c-.248-.087-.497-.19-.75-.292a8.766 8.766 0 0 0-.433-.177l-.116-.05c-.055-.022-.117-.045-.145-.06l-.895-.474a14.106 14.106 0 0 1-4.296-3.739c-1.24-1.637-2.115-3.632-2.527-5.76-.42-2.045-.27-4.382.422-6.577.633-2.004 1.756-3.82 3.34-5.404.103-.104.207-.208.295-.29.778-.67 1.714-1.42 2.822-1.962.312-.184.66-.327 1.027-.475.175-.071.346-.142.488-.203.158-.058.327-.112.49-.162.107-.03.213-.065.306-.091l.123-.042c.227-.07.436-.137.668-.174l.836-.17c.163-.03.332-.046.498-.065.111-.011.215-.016.336-.032.384-.06.77-.062 1.185-.063.147 0 .3.001.465-.008.14-.006.292.013.455.03.11.01.216.022.297.027.109.01.21.022.322.03.166.01.318.025.458.051.187.041.377.075.57.106.346.063.673.126.989.238a13.246 13.246 0 0 1 5.263 2.872 12.87 12.87 0 0 1 3.122 4.294c.628 1.403 1.014 2.895 1.104 4.328.017.201.02.398.021.592-.002.126.003.25.006.356a1.64 1.64 0 0 0 .003.187c.005.086.005.171 0 .242l-.038.448c-.014.119-.02.23-.03.34a4.2 4.2 0 0 1-.043.466l-.145.787c-.042.298-.121.554-.194.793-.035.13-.078.254-.096.348-.026.074-.042.143-.061.209-.021.078-.037.151-.078.244l-.545 1.354a2.02 2.02 0 0 0 1.212 2.57 2.002 2.002 0 0 0 2.1-.459c.208-.208.366-.456.464-.735l.465-1.298c.045-.121.092-.287.134-.457l.059-.235c.028-.118.06-.242.096-.377.103-.388.22-.833.268-1.281l.132-.955c.028-.233.036-.47.045-.711.005-.114.009-.233.018-.36l.029-.567c0-.128-.01-.27-.018-.406l-.008-.21a18.315 18.315 0 0 1-.017-.387 7.82 7.82 0 0 0-.067-.832c-.194-1.838-.752-3.734-1.623-5.499a16.385 16.385 0 0 0-4.154-5.293Z"})}),I0=L0;var F0=e(10438),N0=e(39142),H0=e(80103),z0=e(70525),K0=e(89975),U0=e(48577),W0=e(2426),G0=e(63161),V0=e(68501),Y0=e(34389),Q0=e(8152),J0=e(78665),X0=e(1072),k0=e(23333),q0=e(81907),_0=e(36558),e1=e(70521),t1=e(19395),o1=e(4452),n1=e(52245),l1=e(27866),a1=e(804),s1=e(30984)}}]);
