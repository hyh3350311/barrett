webpackJsonp([0],{C2Vd:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.fileBtn {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  z-index: 100;\n  top:0;\n  left: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.el-button--mini{\n  padding: 3px 8px;\n  border: none;\n}\n",""])},Qx6U:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("mvHQ"),l=a.n(r),o=a("woOf"),i=a.n(o),s=a("F+jZ"),n={data:function(){return{validateFlag:!1,userName:sessionStorage.getItem("name"),token:sessionStorage.getItem("TOKEN"),userList:[],alllabList:[],total:0,page:1,pageSize:10,msg:"",msgVisible:!1,listLoading:!1,editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入电话",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],grade:[{required:!0,message:"请输入年级",trigger:"blur"}],classes:[{required:!0,message:"请输入班级",trigger:"blur"}],facultyCode:[{required:!0,message:"请选择院系",trigger:"blur"}],expireTime:[{required:!0,message:"请选择过期时间",trigger:"blur"}],temporaryCard:[{required:!0,message:"请输入临时卡号",trigger:"blur"}]},editForm:{id:"",temporaryCard:"",expireTime:"",facultyCode:"",classes:"",grade:"",sex:"",phone:"",name:""},addFormVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入电话",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],grade:[{required:!0,message:"请输入年级",trigger:"blur"}],classes:[{required:!0,message:"请输入班级",trigger:"blur"}],facultyCode:[{required:!0,message:"请选择院系",trigger:"blur"}],expireTime:[{required:!0,message:"请选择过期时间",trigger:"blur"}],temporaryCard:[{required:!0,message:"请输入临时卡号",trigger:"blur"}]},addForm:{temporaryCard:"",expireTime:"",facultyCode:"",classes:"",grade:"",sex:"",phone:"",name:""},searchForm:{facultyCode:"",name:"",sno:"",temporaryCard:"",pageSize:10,pageNum:1},exFlag:!0,statusList:[{id:0,name:"废弃"},{id:1,name:"可用"},{id:2,name:"暂停使用"}],updateVisible:!1,updateForm:{id:"",status:""}}},mounted:function(){this.getUser(),this.getAllLabList()},methods:{timeFormat:function(e,t){return e.expireTime?Object(s.b)(e.expireTime):""},typeChange:function(e,t){return 1==e.userType?"老师":2==e.userType?"正式学员":3==e.userType?"临时用户":void 0},statusChange:function(e,t){return 0==e.status?"废弃":1==e.status?"可用":2==e.status?"暂停使用":void 0},handleCurrentChange:function(e){this.searchForm.pageNum=e,this.getUser()},importDraw:function(e){var t=e.target.files[0].name.split(".")[1];if("xlsx"==t||"xls"==t){var a=new FormData;a.append("fileName",e.target.files[0]),a.append("TOKEN",this.token);var r=this;this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/user/import",data:a,processData:!1,contentType:!1}).then(function(t){if(e.target.value){var a=document.createElement("form"),l=e.target.nextSibling,o=e.target.parentNode;a.appendChild(e.target),a.reset(),o.insertBefore(e.target,l)}console.log(t),r.msgVisible=!0,r.msg=t.data.msg}).catch(function(e){Object(s.a)(e,r)})}else if(this.msgVisible=!0,this.msg="文件格式不正确,请检查上传文件是否为excel文件",e.target.value){var l=document.createElement("form"),o=e.target.nextSibling,i=e.target.parentNode;l.appendChild(e.target),l.reset(),i.insertBefore(e.target,o)}},exportUser:function(){var e=this;this.$ajax({headers:{TOKEN:this.token,"Content-Type":"text/plain;charset=UTF-8"},type:"HEAD",method:"post",url:"user/export",responseType:"arraybuffer",data:e.searchForm}).then(function(e){console.log(e);var t=e.headers["content-disposition"];console.log(t);var a=t.split(";")[1].split("=")[1];console.log(a);var r=new Blob([e.data],{type:"text/plain;charset=UTF-8"}),l=URL.createObjectURL(r),o=document.createElement("a");o.download=a,o.href=l;var i=document.getElementById("user");i.appendChild(o),o.click(),i.removeChild(o)}).catch(function(t){Object(s.a)(t,e)})},getAllLabList:function(){var e=this;this.$ajax({method:"post",headers:{TOKEN:this.token},url:"faculty/listAll"}).then(function(t){"0000"==t.data.key?e.alllabList=t.data.dataList:(e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){Object(s.a)(t,e)})},getUser:function(){var e=this;this.listLoading=!0,this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/user/page",params:this.searchForm}).then(function(t){e.total=t.data.totalCount,"0000"==t.data.key?(e.userList=t.data.dataList,e.listLoading=!1):(e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){Object(s.a)(t,e)})},handleModal:function(e,t){this.updateVisible=!0,this.updateForm.userId=t.id,this.updateForm.status=t.status},handleUpdate:function(){var e=this;this.$ajax({method:"post",headers:{TOKEN:this.token},url:"/user/updateStatus",params:e.updateForm}).then(function(t){"0000"==t.data.key?(e.updateVisible=!1,e.msgVisible=!0,e.msg="修改成功",e.getUser()):(e.updateVisible=!1,e.msgVisible=!0,e.msg=t.data.msg)}).catch(function(t){e.updateVisible=!1,Object(s.a)(t,e)})},handleEdit:function(e,t){this.editForm.id=t.id,this.editFormVisible=!0,this.editForm=i()({},t),void 0==t.expireTime?this.exFlag=!1:this.exFlag=!0,this.editForm.expireTime=Object(s.b)(t.expireTime),console.log(this.exFlag)},editSubmit:function(){var e=this,t=this;this.$refs.editForm.validate(function(a){if(a){e.editLoading=!0;var r=i()({},e.editForm);e.$ajax({method:"post",headers:{TOKEN:e.token},params:{jsonData:l()(r)},url:"user/update"}).then(function(e){t.editLoading=!1,"0000"==e.data.key?(t.editFormVisible=!1,t.getUser()):(t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){t.editLoading=!1,Object(s.a)(e,t)})}})},handleAdd:function(){this.addFormVisible=!0,this.validateFlag&&this.$refs.addForm.resetFields()},addSubmit:function(){var e=this,t=this;this.token=sessionStorage.getItem("TOKEN"),this.$refs.addForm.validate(function(a){if(a){t.validateFlag=!1,e.addLoading=!0;var r=i()({},e.addForm);t.$ajax({method:"post",headers:{TOKEN:e.token},params:{jsonData:l()(r)},url:"/user/add"}).then(function(e){t.validateFlag=!0,"0000"==e.data.key?(t.addLoading=!1,t.addFormVisible=!1,t.getUser()):(t.addLoading=!1,t.msgVisible=!0,t.msg=e.data.msg)}).catch(function(e){Object(s.a)(e,t),t.addLoading=!1})}else t.validateFlag=!0})}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"user"}},[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","text-align":"left"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.searchForm}},[a("el-form-item",{attrs:{label:"院系"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.facultyCode,callback:function(t){e.$set(e.searchForm,"facultyCode",t)},expression:"searchForm.facultyCode"}},[a("el-option",{attrs:{value:""}},[e._v("全部")]),e._v(" "),e._l(e.alllabList,function(e){return a("el-option",{key:e.facultyCode,attrs:{label:e.facultyName,value:e.facultyCode}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{model:{value:e.searchForm.sno,callback:function(t){e.$set(e.searchForm,"sno",t)},expression:"searchForm.sno"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"卡号"}},[a("el-input",{model:{value:e.searchForm.temporaryCard,callback:function(t){e.$set(e.searchForm,"temporaryCard",t)},expression:"searchForm.temporaryCard"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getUser}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.exportUser}},[e._v("导出")]),e._v(" "),a("el-button",{staticStyle:{position:"relative",cursor:"pointer"},attrs:{type:"primary"}},[e._v("上传\n            "),a("input",{staticClass:"fileBtn",attrs:{type:"file"},on:{change:function(t){e.importDraw(t)}}})])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.userList,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sno",label:"学号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"facultyName",label:"系名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"入学年份"}}),e._v(" "),a("el-table-column",{attrs:{prop:"classes",label:"班级"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userType",formatter:e.typeChange,label:"用户类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"temporaryCard",label:"卡号",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",formatter:e.statusChange,label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"expireTime",formatter:e.timeFormat,label:"到期时间",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),0!=t.row.status?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleModal(t.$index,t.row)}}},[e._v("修改")]):e._e()]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","page-size":e.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"实验室编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"120px",rules:e.editFormRules}},[a("el-form-item",{attrs:{label:"院系",prop:"facultyCode"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.facultyCode,callback:function(t){e.$set(e.editForm,"facultyCode",t)},expression:"editForm.facultyCode"}},[a("el-option",{attrs:{value:""}},[e._v("全部")]),e._v(" "),e._l(e.alllabList,function(e){return a("el-option",{key:e.facultyCode,attrs:{label:e.facultyName,value:e.facultyCode}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"入学年份",prop:"grade"}},[a("el-input",{model:{value:e.editForm.grade,callback:function(t){e.$set(e.editForm,"grade",t)},expression:"editForm.grade"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"班级",prop:"classes"}},[a("el-input",{model:{value:e.editForm.classes,callback:function(t){e.$set(e.editForm,"classes",t)},expression:"editForm.classes"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[a("el-input",{model:{value:e.editForm.phone,callback:function(t){e.$set(e.editForm,"phone",t)},expression:"editForm.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"临时卡卡号",prop:"temporaryCard"}},[a("el-input",{model:{value:e.editForm.temporaryCard,callback:function(t){e.$set(e.editForm,"temporaryCard",t)},expression:"editForm.temporaryCard"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[a("el-radio",{attrs:{label:"男"}}),e._v(" "),a("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),e.exFlag?a("el-form-item",{attrs:{label:"失效时间",prop:"expireTime"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期"},model:{value:e.editForm.expireTime,callback:function(t){e.$set(e.editForm,"expireTime",t)},expression:"editForm.expireTime"}})],1):e._e()],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"临时用户新增",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"120px",rules:e.addFormRules}},[a("el-form-item",{attrs:{label:"院系",prop:"facultyCode"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addForm.facultyCode,callback:function(t){e.$set(e.addForm,"facultyCode",t)},expression:"addForm.facultyCode"}},[a("el-option",{attrs:{value:""}},[e._v("全部")]),e._v(" "),e._l(e.alllabList,function(e){return a("el-option",{key:e.facultyCode,attrs:{label:e.facultyName,value:e.facultyCode}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"入学年份",prop:"grade"}},[a("el-input",{model:{value:e.addForm.grade,callback:function(t){e.$set(e.addForm,"grade",t)},expression:"addForm.grade"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"班级",prop:"classes"}},[a("el-input",{model:{value:e.addForm.classes,callback:function(t){e.$set(e.addForm,"classes",t)},expression:"addForm.classes"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[a("el-input",{model:{value:e.addForm.phone,callback:function(t){e.$set(e.addForm,"phone",t)},expression:"addForm.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"临时卡卡号",prop:"temporaryCard"}},[a("el-input",{model:{value:e.addForm.temporaryCard,callback:function(t){e.$set(e.addForm,"temporaryCard",t)},expression:"addForm.temporaryCard"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-radio-group",{model:{value:e.addForm.sex,callback:function(t){e.$set(e.addForm,"sex",t)},expression:"addForm.sex"}},[a("el-radio",{attrs:{label:"男"}}),e._v(" "),a("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"失效时间",prop:"expireTime"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期"},model:{value:e.addForm.expireTime,callback:function(t){e.$set(e.addForm,"expireTime",t)},expression:"addForm.expireTime"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.addSubmit()}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"用户状态修改",visible:e.updateVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.updateVisible=t}}},[a("el-form",{attrs:{model:e.updateForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.updateForm.status,callback:function(t){e.$set(e.updateForm,"status",t)},expression:"updateForm.status"}},e._l(e.statusList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.updateVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.handleUpdate()}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.msgVisible,width:"30%"},on:{"update:visible":function(t){e.msgVisible=t}}},[a("span",[e._v(e._s(e.msg))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.msgVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]},m=a("VU/8")(n,d,!1,function(e){a("xHoY")},null,null);t.default=m.exports},mvHQ:function(e,t,a){e.exports={default:a("qkKv"),__esModule:!0}},qkKv:function(e,t,a){var r=a("FeBl"),l=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},xHoY:function(e,t,a){var r=a("C2Vd");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("4533bba4",r,!0)}});