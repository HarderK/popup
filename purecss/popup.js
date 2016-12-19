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
