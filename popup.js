/**
 * 弹出窗口
 * @param  {function} sucess 点击确认之后执行的函数
 * @return {undefined}        
 */
function popup(sucess) {
	// 创建遮罩层
	var $shadow = $('<div id="yan_shadow"></div>');

	$("body").append($shadow);

	// 创建弹出层
	var $popup = $('<div id="yan_popup"><h3>你确定要执行这个操作吗？</h3><div class="buttons"><button>确定</button><button>取消</button></div></div>');

	$("body").append($popup);

	resizeShadow($("#yan_shadow"));


	// 窗口大小变化触发时间
	$(window).on('resize', function() {
		throttle(resizeShadow, [$('#yan_shadow')]);
	});

	var $confirmButton = $("#yan_popup button").first();
	$confirmButton.on('click', function() {
		if(typeof sucess === "function") {sucess();}
		$("#yan_shadow").css("display", "none");
		$("#yan_popup").css("display", "none");
	});

	var $cancelButton = $("#yan_popup button").eq(1);
	$cancelButton.on('click', function() {
		$("#yan_shadow").css("display", "none");
		$("#yan_popup").css("display", "none");
	});
}


/**
 * 节流函数
 * @param  {function} method  要执行的函数
 * @param  {array} arg     函数参数
 * @param  {obj} context 函数上下文
 * @return {undefined}        
 */
function throttle(method, arg, context) {
	clearTimeout(method.tId);
	method.tId = setTimeout(function(){
		method.apply(context, arg);
	}, 100);
}

/**
 * 重新设置元素的宽高为整个文档的大小
 * @param  {jQuery} ele [jQuery对象]
 * @return undefined
 */
function resizeShadow(ele) {
	var offsetHeight = $(document).height();
	var offsetWidth = $(document).width();
	ele.css("height", offsetHeight);
	ele.css("width", offsetWidth);
}
