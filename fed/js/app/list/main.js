require([
    'common/util',
    'hbs!list/item'
], function (util, itemTemplate) {
    console.log('list is ready');

    var data = [
        {title: 'NBA-哈登低迷火箭苦战客负开拓者'},
        {title: '威少10失误雷霆负快船出西部前8'},
        {title: '詹姆斯10项数据队史第1'}
    ];

    document.getElementById('J_List').innerHTML = itemTemplate(data);
});