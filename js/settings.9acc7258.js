(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"settings"}},[l("b-container",[l("b-row",[l("b-col",{attrs:{cols:"12"}},[l("b-table",{attrs:{items:e.items,fields:e.fields},on:{"row-clicked":e.slectAlarm},scopedSlots:e._u([{key:"cell(file)",fn:function(e){return[l("audio",{attrs:{controls:"",src:"./sounds/"+e.item.file}})]}},{key:"cell(select)",fn:function(t){return[t.item.file===e.alarm?l("font-awesome-icon",{attrs:{icon:["fas","check"]}}):e._e()]}}])})],1)],1)],1)],1)},i=[],s={name:"Settings",data:function(){return{items:[{name:"鬧鈴",file:"alarm1.mp3"},{name:"電話蟲",file:"ringbug.mp3"},{name:"數位鬧鐘鬧鈴",file:"digitalring.mp3"}],fields:[{key:"name",label:"名稱"},{key:"file",label:"預覽"},{key:"select",label:"選擇"}]}},computed:{alarm:function(){return this.$store.state.alarm}},methods:{slectAlarm:function(e){this.$store.commit("selectAlarm",e.file)}}},a=s,r=l("2877"),c=Object(r["a"])(a,n,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=settings.9acc7258.js.map