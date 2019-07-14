onmessage = function(e){
    iterate(e.data);
};

function iterate(iterate){

    let percent_1 = iterate / 100 ;
    let perSum = percent_1;
    let p = 1;
    let param = {};
    for (let i = 0; i <= iterate; i++)
    {
        if (i === perSum)
        {
            param.type = 0;
            param.msg = p;
            postMessage(param);
            ++p;
            perSum += percent_1;
        }
    }
    param.type = 1;
    param.msg = "Загрузка завершена";
    postMessage(param);
}