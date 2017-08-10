(function(){
var WIN;

var Banner = function(dom){
	this.Dom = $(dom);
	this.Con = dom.parent();
	this.init();
};
Banner.prototype = {
	init:function(){
		var me=this,
			viewbox = this.Dom[0].viewBox.baseVal,
			vw = viewbox.width,
			vh = viewbox.height;
		this.wh = vw/vh;

		WIN.bind('resize',function(){
			me.resize();
		});
		me.resize();
	},
	resize:function(){
		var cw = this.Con.width(),
			ch = this.Con.height(),
			w,h,l,t;
		if(cw/ch>this.wh){
			h = ch;
			w = h*this.wh>>0;
		}else{
			w = cw;
			h = w/this.wh>>0;
		}
		l = (cw-w)/2>>0;
		t = (ch-h)/2>>0;
		this.Dom.css('width',w+'px').css('height',h+'px').css('left',l+'px').css('top',t+'px');
	}
};

$(function(){
	WIN = $(window);

	var svgs = $('.block-bg SVG');
	for(var i=0,l=svgs.length;i<l;i++){
		new Banner(svgs);
	}
});

})();