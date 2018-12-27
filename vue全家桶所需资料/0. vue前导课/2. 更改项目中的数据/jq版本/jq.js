const dataList = [
    {
        name: 'shan',
        age: 18,
        profession: '讲师'
    },
    {
        name: 'jc',
        age: 22,
        profession: '自称华语最帅男讲师'
    },
    {
        name: 'cst',
        age: 20,
        profession: '从前是高瘦帅的，现在是胖讲师'
    },
    {
        name: 'dxm',
        age: 88,
        profession: '渡一教具，哪都有他'
    }
];
$contianer = $('#container');
$button = $('button');

$button.on('click', () => {
    dataList[0].profession = '可能是宇宙最美讲师了';
    dataList[1].profession = '杉杉的擦桌工';
    dataList[2].profession = '杉杉的倒水工';
    dataList[3].profession = '杉杉的擦鞋工';
    showData(dataList)
})

function showData (dataList) {
    
    let liStr = '';
    dataList.forEach( item => {
        liStr += `<li><span>${item.name}</span>
                    <span>${item.age}</span>
                    <span>${item.profession}</span></li>`
                    console.log(liStr)
    })
    $contianer.html(liStr)
}
showData(dataList)