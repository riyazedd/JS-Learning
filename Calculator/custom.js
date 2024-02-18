let value;
let result;
let keys=['1','2','3','4','5','6','7','8','9','0','-','+','/','*','Enter'];

//displaying value from button
$('button').click(function(){
    value=$('input:text').val()+$(this).text();
    $('input:text').val(value);
    let button=$(this).text();
    evaluation(button);

})


//displaying value from keypress
$(document).keypress(function(event){
    if(keys.includes(event.key)){
        value=$('input:text').val()+event.key;
        $('input:text').val(value);
        evaluation(event.key);
    }
})
    
//evaluating the values
function evaluation(key){
    switch(key){
        case '=':
            result=eval(value.replace('=',''));
            $('input:text').val(result);
            break;

        case 'Enter':
            result=eval(value.replace('Enter',''));
            $('input:text').val(result);
            break;

        case 'AC':
            $('input:text').val('');
            break;

        case 'DE':
            result=value.replace('DE','').toString().slice(0,-1);
            $('input:text').val(result);
            break;
    }
}
