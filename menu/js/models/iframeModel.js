define([],function(){class e extends Backbone.Model{defaults(){return{_srcPrefix:"index_hybrid.html",_srcSuffix:"#/id/co-05",src:"",route:""}}initialize(){this.set("src",this.get("_srcPrefix")+this.get("route")),this.setupEventListeners()}setupEventListeners(){this.listenTo(Hybrid.slides,{"change:_isActive":this.onSlideActiveChange})}onSlideActiveChange(e,t){t&&(t=e.get("_id"),this.set("route",this.get("_srcSuffix")+"/"+t),this.set("src",this.get("_srcPrefix")+this.get("route")))}}return e});