<!--
	//doniCancas ver1.2
	//Copyright (C) 2016 Dancing on Image All Rights Reserved

	//�`��̈�͈̔͂ł��B����(x)��-areax��x��areax�A�c��(y)��-areay��y��areay�ƂȂ�܂��B
	//Y���̒l�͐����̕�������ʓI�Ȑ��w�Ƌt�]���Ă��邱�Ƃɒ��ӂ��Ă��������B
	var areax = 10;
	var areay = 5;

	//1��mesh(pixel)�Ƃ��ĕ`�悵�܂��B�Ⴆ�΁Amesh��30�̏ꍇ�A5��150pixel�A10��300pixel�ɂȂ�܂��B
	var mesh = 30;

	//���_(x0, y0)�̈ʒu(pixel)�ł��B
	var x0 = areax * mesh;
	var y0 = areay * mesh;

	//�O���t�`�掞�ɑœ_����Ԋu�ł��B
	var dif = 0.1;

	//Canvas�̕`��p�R���e�L�X�g�ł��B
	var context = null;

	//�O���t�`��p�̗̈��ݒ肵�܂��B
	//�����ɂ�canvas�^�O��id���w�肵�Ă��������B
	function graphArea(id) {
		context = document.getElementById(id).getContext('2d');

		drowArea();
		drowMesh();
		drowAxis();
	}

	//�̈��`�悵�܂��B
	function drowArea() {
		context.fillStyle = 'rgb(220, 256, 180)';
		context.fillRect(0, 0, 2 * x0, 2 * y0);
		context.beginPath();
	}
	
	//���b�V��(�ڐ���)��`�悵�܂��B
	function drowMesh() {
		context.strokeStyle = 'rgb(0, 0, 0)';
		context.lineWidth = 1;

		//��������`��
		for (var i = 0; i <= 2 * areay; i += 1) {
		  context.moveTo(0, i * mesh);
		  context.lineTo(2 * x0, i * mesh);
		}
		
		//�c������`��
		for (var i = 0; i <= 2 * areax; i += 1) {
		  context.moveTo(i * mesh, 0);
		  context.lineTo(i * mesh, 2 * y0);
		}
		context.stroke();
		context.beginPath();
	}

	//����`�悵�܂��B
	function drowAxis() {
		context.strokeStyle = 'rgb(0, 0, 0)';
		context.lineWidth = 3;
		
		//X��
		context.moveTo(0, y0);
		context.lineTo(2 * x0, y0);
		 
		//Y��
		context.moveTo(x0, 0);
		context.lineTo(x0, 2 * y0);
		context.stroke();
		
		context.lineWidth = 1;
		context.beginPath();
	}
	
	//�w�肳�ꂽ���W�ɓ_��œ_���܂��B
	//���̊֐����ďo���O��graphArea()���ďo���ăO���t�̈��ݒ肵�Ă��������B
	function drowPoint(x, y) {
		context.arc(x0 + x * mesh, y0 + (-1) * y * mesh, 1, 0, Math.PI * 2, true);
	}
	
	//X������w�肳�ꂽ���W�܂Ő���`�悵�܂��B
	//���̊֐����ďo���O��graphArea()���ďo���ăO���t�̈��ݒ肵�Ă��������B
	function drowLine(x, y) {
		context.lineWidth = 2;
		context.moveTo(x0 + x * mesh, y0);
		context.lineTo(x0 + x * mesh, y0 + (-1) * y * mesh);
	}
	
	//�����Ŏw�肳�ꂽ�F��y=func(x)�̃O���t��`�悵�܂��B�œ_�̊Ԋu�͕ϐ�dif�ł��B
	//�`��͈͂̓O���t�̈�̍��[����E�[�܂Łi-areax��x��areax�j�ɂȂ�܂��B
	//���̊֐����ďo���O��graphArea()���ďo���ăO���t�̈��ݒ肵�Ă��������B
	function drowGraph(color) {
		drowGraphRange(color, (-1) * areax, areax, 0);
	}
	
	//�����Ŏw�肳�ꂽ�F�ƕ`��͈͂�y=func(x)�̃O���t��`�悵�܂��B�œ_�̊Ԋu�͕ϐ�dif�ł��B
	//�����̍Ō��0���w�肷��Ɓu�_�v���A����ȊO�̏ꍇ�́u���v��`�悵�܂��B
	//�ŏI�I�ɃO���t��h��Ԃ��ꍇ��0�ȊO�̒l���w�肵�Ă��������B
	//���̊֐����ďo���O��graphArea()���ďo���ăO���t�̈��ݒ肵�Ă��������B
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
	
	//drowGraph()���O���t�`�悷��֐��ł��B
	//�A�v�����ŔC�ӂ̊֐��ɏ��������Ă��������B
	var func = function(x) {
		return 0;
	};
//-->
