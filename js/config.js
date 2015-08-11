var config={}
//公共配置
config.com={
	userId:""
}
config.getInfo=function(){
	var user_data = JSON.parse(plus.storage.getItem("user_data"))
	if(user_data!==null){
		config.com.userId = user_data.id;
	}
	return user_data;
}
config.err={
	xhr:"网络故障，稍后再试"
}
//测试配置
config.url={
	   host:"http://127.0.0.1/apu",
	   //host:"http://192.168.31.188/apu",
       //host:"http://ok.ahsenfeng.com/apu"
       hrefhost:"http://127.0.0.1/"
       //hrefhost:"http://ok.ahsenfeng.com/apu"
}

//订单状态
config.order={
	"1":"待抢单",
	"2":"已抢",
	"3":"运送中",
	"4":"已送达",
	"5":"取消"
}
//汽车类型
config.car={	
    "0":{
        "id": "1", 
        "name": "面包车", 
        "truck_type": "0", 
        "icon": null, 
        "capacity": "3.9585", 
        "size_note": "2.1m×1.45m×1.3m", 
        "weight": "0.6", 
        "base_price": "50.00", 
        "km_per_price": "4.00", 
        "base_km": "10", 
        "discount_base_price": "30.00", 
        "discount_km_per_price": "2.40", 
        "status": "1"
    }, 
    "1":{
        "id": "2", 
        "name": "小货车", 
        "truck_type": "1", 
        "icon": null, 
        "capacity": "5.7681", 
        "size_note": "2.9m×1.53m×1.3m", 
        "weight": "1", 
        "base_price": "90.00", 
        "km_per_price": "5.00", 
        "base_km": "10", 
        "discount_base_price": "54.00", 
        "discount_km_per_price": "3.00", 
        "status": "1"
    }, 
    "2":{
        "id": "3", 
        "name": "3.5m货车", 
        "truck_type": "2", 
        "icon": null, 
        "capacity": "7.803", 
        "size_note": "3.5m×1.8m×1.7m", 
        "weight": "2", 
        "base_price": "150.00", 
        "km_per_price": "7.00", 
        "base_km": "10", 
        "discount_base_price": "90.00", 
        "discount_km_per_price": "4.20", 
        "status": "1"
    }, 
    "3":{
        "id": "4", 
        "name": "4.2m货车", 
        "truck_type": "3", 
        "icon": null, 
        "capacity": "10.098", 
        "size_note": "4.2m×1.8m×1.7m", 
        "weight": "4", 
        "base_price": "298.00", 
        "km_per_price": "8.00", 
        "base_km": "10", 
        "discount_base_price": "178.80", 
        "discount_km_per_price": "4.80", 
        "status": "1"
    }, 
    "4":{
        "id": "5", 
        "name": "6.2m货车", 
        "truck_type": "4", 
        "icon": null, 
        "capacity": "15.96", 
        "size_note": "6.2m×2.0m×1.9m", 
        "weight": "5-8", 
        "base_price": "350.00", 
        "km_per_price": "10", 
        "base_km": "10", 
        "discount_base_price": "210", 
        "discount_km_per_price": "6.00", 
        "status": "1"
    }, 
    "5":{
        "id": "6", 
        "name": "7.2m货车", 
        "truck_type": "5", 
        "icon": null, 
        "capacity": "21.242", 
        "size_note": "7.2m×2.15m×1.9m", 
        "weight": "<10", 
        "base_price": "500.00", 
        "km_per_price": "13.00", 
        "base_km": "10", 
        "discount_base_price": "300.00", 
        "discount_km_per_price": "7.80", 
        "status": "1"
    }, 
    "6":{
        "id": "7", 
        "name": "9.6m货车", 
        "truck_type": "6", 
        "icon": null, 
        "capacity": "28", 
        "size_note": "9.6mx2.2m", 
        "weight": "20", 
        "base_price": "650.00", 
        "km_per_price": "16.00", 
        "base_km": "10", 
        "discount_base_price": "390.00", 
        "discount_km_per_price": "9.60", 
        "status": "0"
    }
}
