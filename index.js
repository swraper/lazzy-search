/*
*  模糊查询
*  函数式编程，递归，循环，数据类型判断
*  检索后，返回包含检索字符的所有列表形成的新数组
*/

/*
*  检索文字,返回bool值
*/
const IsIn = (text,item)=>{ 
    const num = item.indexOf(text);
    if (num > -1) return true;
    return false;
};

const geType = (arr) => {
    if(arr instanceof Array) return arr;
    return false;
};

const setObj = obj => {
    let item = false;
    for (const key in obj) {
        if (geType(obj[key])) {
            item = obj[key];
        }
    }
    return item;
};

/*
*  递归检索包含输入文字的数据，
*  返回新数组
*/
const ProvinceArry = (text,data,type)=>{
    let province = [];
    data.map((item,index)=>{
        if (IsIn(text,item[type])) province.push(item);
        if (setObj(item)){
            province = province.concat(ProvinceArry(text, setObj(item),type));
        }
    });
    return province;
};

/*
*  去除数组内多余数据
*  返回新数组
*/
const ArryTree = (data,type)=>{ 
    let List = [];
    data.map((item,index)=>{
        List.push({
            id:item.value,
            name:item[type]
        })
    })
    return List;
}

const Result = (text, data,type)=>{
    let result = [];
    const province = ArryTree(ProvinceArry(text, data,type),type);
    result = result.concat(province);
    return result;
};

/*
*  @params test String  input框输入字段，需要检索的内容
*  @params data Array   需要检索的数据集合，支持多级数组，
*  @params type String  数据集合内对应test的字段
*/
const GetSearch = (text, data,type)=>{
    return Result(text, data, type);
};

export default GetSearch ; 