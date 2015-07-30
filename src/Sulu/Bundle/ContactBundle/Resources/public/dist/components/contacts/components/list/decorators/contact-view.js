define(function(){"use strict";var a={unselectOnBackgroundClick:!0},b={containerClass:"contact-grid",selectedClass:"selected",itemHeadClass:"item-head",itemInfoClass:"item-info",idProperty:"id",mailProperty:"mainEmail"},c={item:['<div class="contact-item">','   <div class="'+b.itemHeadClass+'">','       <div class="head-container">','           <div class="image" style="background-image: url(\'<%= picture %>\')"></div>','           <div class="head-name"><%= name %></div>',"       </div>",'       <div class="head-checkbox custom-checkbox"><input type="checkbox"><span class="icon"></span></div>',"       <% if (!!isSuluUser) { %>",'       <div class="head-sulubox"></div>',"       <% } %>","   </div>",'   <div class="'+b.itemInfoClass+'">','       <% if (location !== "undefined") { %>','       <div class="info-row">','           <span class="fa-map-marker info-icon"></span>','           <span class="info-text"><%= location %></span>',"       </div>","       <% } %>",'       <% if (mail !== "undefined") { %>','       <div class="info-row">','           <span class="fa-envelope info-icon"></span>','           <span class="info-text"><%= mail %></span>',"       </div>","       <% } %>","   </div>","</div>"].join("")};return{initialize:function(b,c){this.datagrid=b,this.sandbox=this.datagrid.sandbox,this.options=this.sandbox.util.extend(!0,{},a,c),this.setVariables()},setVariables:function(){this.rendered=!1,this.data=null,this.$el=null,this.$items={}},render:function(a,c){this.data=a,this.$el=this.sandbox.dom.createElement('<div class="'+b.containerClass+'"/>'),this.sandbox.dom.append(c,this.$el),this.bindGeneralDomEvents(),this.renderItems(this.data.embedded),this.rendered=!0},bindGeneralDomEvents:function(){this.sandbox.dom.on(".grid","click",function(){this.options.unselectOnBackgroundClick&&this.unselectAllItems()}.bind(this))},renderItems:function(a){this.sandbox.util.foreach(a,function(a){var c,d,e,f,g,h;c=a[b.idProperty],d="/bundles/sulucontact/js/components/contacts/components/list/decorators//sample_avatar.jpg",e=[a.firstName,a.lastName].join(" "),f=Math.random()<.3,g="Testhausen 8, AT",h=a[b.mailProperty],this.renderItem(c,d,e,f,g,h)}.bind(this))},renderItem:function(a,b,d,e,f,g){this.$items[a]=this.sandbox.dom.createElement(this.sandbox.util.template(c.item)({picture:b,name:this.sandbox.util.cropTail(String(d),32),isSuluUser:e,location:this.sandbox.util.cropTail(String(f),26),mail:this.sandbox.util.cropMiddle(String(g),26)})),this.datagrid.itemIsSelected.call(this.datagrid,a)&&this.selectItem(a),this.sandbox.dom.append(this.$el,this.$items[a]),this.bindItemDomEvents(a)},destroy:function(){this.sandbox.dom.off(".grid","click"),this.sandbox.dom.remove(this.$el)},bindItemDomEvents:function(a){this.sandbox.dom.on(this.$items[a],"click",function(){this.sandbox.dom.stopPropagation(event),this.datagrid.itemAction.call(this.datagrid,a)}.bind(this),"."+b.itemInfoClass),this.sandbox.dom.on(this.$items[a],"click",function(b){this.sandbox.dom.stopPropagation(b),this.toggleItemSelected(a)}.bind(this),"."+b.itemHeadClass)},toggleItemSelected:function(a){this.datagrid.itemIsSelected.call(this.datagrid,a)===!0?this.unselectItem(a):this.selectItem(a)},selectItem:function(a){this.sandbox.dom.addClass(this.$items[a],b.selectedClass),this.sandbox.dom.is(this.sandbox.dom.find('input[type="checkbox"]',this.$items[a]),":checked")||this.sandbox.dom.prop(this.sandbox.dom.find('input[type="checkbox"]',this.$items[a]),"checked",!0),this.datagrid.setItemSelected.call(this.datagrid,a)},unselectItem:function(a){this.sandbox.dom.removeClass(this.$items[a],b.selectedClass),this.sandbox.dom.is(this.sandbox.dom.find('input[type="checkbox"]',this.$items[a]),":checked")&&this.sandbox.dom.prop(this.sandbox.dom.find('input[type="checkbox"]',this.$items[a]),"checked",!1),this.datagrid.setItemUnselected.call(this.datagrid,a)},addRecord:function(a){this.renderItems([a])},removeRecord:function(a){return this.$items[a]?(this.sandbox.dom.remove(this.$items[a]),this.datagrid.removeRecord.call(this.datagrid,a),!0):!1},unselectAllItems:function(){this.sandbox.util.each(this.$items,function(a){this.unselectItem(Number(a))}.bind(this))}}});