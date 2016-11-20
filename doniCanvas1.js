<!--
	//doniCancas ver1.2
	//Copyright (C) 2016 Dancing on Image All Rights Reserved

	//描画領域の範囲です。横幅(x)は-areax≦x≦areax、縦幅(y)は-areay≦y≦areayとなります。
	//Y軸の値は正負の方向が一般的な数学と逆転していることに注意してください。
	var areax = 10;
	var areay = 5;

	//1をmesh(pixel)として描画します。例えば、meshが30の場合、5は150pixel、10は300pixelになります。
	var mesh = 30;

	//原点(x0, y0)の位置(pixel)です。
	var x0 = areax * mesh;
	var y0 = areay * mesh;

	//グラフ描画時に打点する間隔です。
	var dif = 0.1;

	//Canvasの描画用コンテキストです。
	var context = null;

	//グラフ描画用の領域を設定します。
	//引数にはcanvasタグのidを指定してください。
	function graphArea(id) {
		context = document.getElementById(id).getContext('2d');

		drowArea();
		drowMesh();
		drowAxis();
	}

	//領域を描画します。
	function drowArea() {
		context.fillStyle = 'rgb(220, 256, 180)';
		context.fillRect(0, 0, 2 * x0, 2 * y0);
		context.beginPath();
	}
	
	//メッシュ(目盛り)を描画します。
	function drowMesh() {
		context.strokeStyle = 'rgb(0, 0, 0)';
		context.lineWidth = 1;

		//横方向を描画
		for (var i = 0; i <= 2 * areay; i += 1) {
		  context.moveTo(0, i * mesh);
		  context.lineTo(2 * x0, i * mesh);
		}
		
		//縦方向を描画
		for (var i = 0; i <= 2 * areax; i += 1) {
		  context.moveTo(i * mesh, 0);
		  context.lineTo(i * mesh, 2 * y0);
		}
		context.stroke();
		context.beginPath();
	}

	//軸を描画します。
	function drowAxis() {
		context.strokeStyle = 'rgb(0, 0, 0)';
		context.lineWidth = 3;
		
		//X軸
		context.moveTo(0, y0);
		context.lineTo(2 * x0, y0);
		 
		//Y軸
		context.moveTo(x0, 0);
		context.lineTo(x0, 2 * y0);
		context.stroke();
		
		context.lineWidth = 1;
		context.beginPath();
	}
	
	//指定された座標に点を打点します。
	//この関数を呼出す前にgraphArea()を呼出してグラフ領域を設定してください。
	function drowPoint(x, y) {
		context.arc(x0 + x * mesh, y0 + (-1) * y * mesh, 1, 0, Math.PI * 2, true);
	}
	
	//X軸から指定された座標まで線を描画します。
	//この関数を呼出す前にgraphArea()を呼出してグラフ領域を設定してください。
	function drowLine(x, y) {
		context.lineWidth = 2;
		context.moveTo(x0 + x * mesh, y0);
		context.lineTo(x0 + x * mesh, y0 + (-1) * y * mesh);
	}
	
	//引数で指定された色でy=func(x)のグラフを描画します。打点の間隔は変数difです。
	//描画範囲はグラフ領域の左端から右端まで（-areax≦x≦areax）になります。
	//この関数を呼出す前にgraphArea()を呼出してグラフ領域を設定してください。
	function drowGraph(color) {
		drowGraphRange(color, (-1) * areax, areax, 0);
	}
	
	//引数で指定された色と描画範囲でy=func(x)のグラフを描画します。打点の間隔は変数difです。
	//引数の最後に0を指定すると「点」を、それ以外の場合は「線」を描画します。
	//最終的にグラフを塗りつぶす場合は0以外の値を指定してください。
	//この関数を呼出す前にgraphArea()を呼出してグラフ領域を設定してください。
	function drowGraphRange(color, min, max, area) {
		context.strokeStyle = color;
		for (var x = min; x <= max; x += dif) {
			if (area == 0) {
				drowPoint(x, func(x));
			} else {
				drowLine(x, func(x));
			}
		}
		context.stroke();
		context.beginPath();
	}
	
	//drowGraph()がグラフ描画する関数です。
	//アプリ側で任意の関数に書き換えてください。
	var func = function(x) {
		return 0;
	};
//-->
