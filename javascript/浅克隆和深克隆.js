//浅克隆：首先判断变量是否为数组，再判断是否为对象
var Clone = function(param){
	var param2 = {}
	for(var i in param){
		param2[i] = param[i]
	}
	return param2
}

var deepClone = function(param,param2){
	var param2 = param2 || {}
	for(var i in param){
		if(typeof(param[i]) == 'object'){
			param2[i] = (param[i] instanceof Array) ? [] : {}
			deepClone(param[i],param2[i])
		}else{
			param2[i]=param[i]
		}
	}
	return param2
}

var obj = {
	name : 'lifan',
	age : 25,
	sex : 'female',
	obj : {
		one :'one',
		two :'two'
	},
	tag:[1,2,3]
}
var arr = ['1',1,'f',3,2]
var ccc = Clone(obj)
console.log('ccc',ccc)
ccc.obj.one= 'haha'
console.log('ccc',ccc)
console.log('obj',obj)

