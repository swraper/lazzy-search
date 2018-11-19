# lazzy-search

> A npm component project

## Build Setup

## 说明

    模糊查询，返回查询结果。

## 安装
> npm install lazzy-search --save

## 使用
    import search from lazzy-search;

    const peoples = [
        {
            name:'张三',
            age:'23'
        },
        {
            name:'李四',
            age:'25'
        },
        {
            name:'张飞',
            age:'26'
        },
    ]
    const text = '张';
    const list = GetSearch(text, peoples,'name');
    console.log(list)


# Github地址：(https://github.com/swraper/lazzy-search.git).
# npm地址：(https://www.npmjs.com/package/lazzy-search).

# version 1.0.0
    模糊查询，可用作输入项模糊查询展示数据列表等。



