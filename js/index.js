(function(){
var WIN;

var BPrototype = function(dom){
	this.Con = $('#sectionBlock_prototype');

	this.Wheel = $('#wheel');
	this.Wheel2 = $('#wheel2');
	this.Wheel3 = $('#wheel3');
	this.Eye = $('#eye');

	this.init();
};
BPrototype.prototype = {
	init:function(){
		this.initAsh();
		var me=this,
			_initAsh = false;
		this.Con.bind('mouseenter',function(){
			if(!_initAsh){
				me.Ash.repeat(Infinity);
				_initAsh = true;
			}else{
				me.Ash.continue();
			}
		});
		this.Con.bind('mouseleave',function(){
			me.Ash.stop();
		});
	},
	initAsh:function(){
		var me = this,
			t1=100,
			t2=50;
		this.Ash = new Ash.S([{
			dom:me.Wheel,
			attr:[{'transform':'translate(40,32) rotate(0,35,35)'},{'transform':'translate(40,32) rotate(360,35,35)'}],
			time:t1
		},{
			dom:me.Wheel2,
			attr:[{'transform':'translate(91,0) rotate(0,24,24)'},{'transform':'translate(91,0) rotate(360,24,24)'}],
			time:t1
		},{
			dom:me.Wheel3,
			attr:[{'transform':'translate(128,41) rotate(0,15,15)'},{'transform':'translate(128,41) rotate(360,15,15)'}],
			time:t1
		},{
			dom:me.Eye,
			attr:[{'fill':'rgb(22,198,204)'},{'fill':'rgb(241,84,36)'}],
			time:t2,
			tween:'easeInOutInt'
		},{
			dom:me.Eye,
			attr:[{'fill':'rgb(241,84,36)'},{'fill':'rgb(22,198,204)'}],
			delay:t2,
			time:t2,
			tween:'easeInOutInt'
		}],1,function(){

		});
	}
};



$(function(){
	new BPrototype();
});

})();