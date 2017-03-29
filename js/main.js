/**
 * Created by Arnaud on 29/03/2017.
 */
$.get('data/data.csv',function(data){
    var dataStr = new String(data);
    $.csv.toArrays(dataStr).forEach(function (element) {
        $('#liste').append('<li>' + element[0] + ' : ' + element[1] + '</li>');
    })
},dataType='text');