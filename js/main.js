/**
 * Created by Arnaud on 29/03/2017.
 */

base_url = "https://cors-anywhere.herokuapp.com/http://www.ggxrd.com/pg2/";
chars = {
    "Sol": "ソル",
    "Ky": "カイ",
    "May": "メイ",
    "Millia": "ミリア",
    "Zato": "ザトー",
    "Potemkin": "ポチ",
    "Chipp": "チッ",
    "Faust": "ファウ",
    "Axl": "アク",
    "Venom": "ヴェノ",
    "Slayer": "スレ",
    "I-No": "イノ",
    "Bedman": "ベッドマン",
    "Ramlethal": "ラムレザル",
    "Sin": "シン",
    "Elphelt": "エルフェルト",
    "Leo": "レオ",
    "Jam": "蔵土縁紗夢",
    "Johnny": "ジョニー",
    "Jack-O": "ジャック・オー",
    "Haehyun": "琴 慧弦",
    "Raven": "レイヴン",
    "Dizzy": "ディズィー",
    "Baiken":"梅喧",
    "Answer":"アンサー"
};

list_chars = ['sol', 'kyk', 'may', 'mll', 'zat', 'pot', 'chp', 'fau', 'axl',
    'ven', 'sly', 'ino', 'bed', 'ram', 'sin', 'elp', 'jhn', 'leo',
    'jko', 'jam', 'kum', 'rvn', 'dzy','bkn','ans'];

charmap = {
    'Sol':'sol',
    'Ky':'kyk',
    'May':'may',
    'Millia':'mll',
    'Zato':'zat',
    'Potemkin':'pot',
    'Chipp':'chp',
    'Faust':'fau',
    'Axl':'axl',
    'Venom':'ven',
    'Slayer':'sly',
    'I-No':'ino',
    'Bedman':'bed',
    'Ramlethal':'ram',
    'Sin':'sin',
    'Elphelt':'elp',
    'Leo':'leo',
    'Johnny':'jhn',
    'Jack-O':'jko',
    'Haehyun':'kum',
    'Jam':'jam',
    'Raven':'rvn',
    'Dizzy':'dzy',
    'Baiken':'bkn',
    'Answer':'ans'
};

function getCharName(japName){
    result = '';
    Object.keys(chars).forEach(function (k) {
        var v = chars[k];
        if (japName == v){
            result = k;
        }
        else if (v.startsWith(japName) || japName.startsWith(v)){
            result = k;
        }
        else if (v.indexOf(japName) != -1 || japName.indexOf(v) != -1){
            result = k;
        }
    });
    if (result == ''){console.log(chars.Haehyun,chars.Jam,japName);}
    return result;
}

$('document').ready(function(){

    var el = $( '<div></div>' );

    $.get('data/data.csv',function(data){
        var dataStr = new String(data);
        $.csv.toArrays(dataStr).forEach(function (element) {
            $('#player').append('<option value="' + element[1] + '">' + element[0] + '</option>');
        });

    },dataType='text');

    Object.keys(charmap).forEach(function (element) {
        $('#character').append('<option value="' + charmap[element] + '">' + element + '</option>');
    });

    $('#btn').click(async function( event ) {
        target = base_url + 'member_record_battle_view.php?user_id=' + $('#player').val() + '&character=' + $('#character').val();
        console.log(target);
        const response = await fetch(target,{mode:"cors"});
        const body = await response.text();
        $('#reslist').html('');
        el.html(body);
        $('li',el).each(function (index) {
            text = $(this).text();
            if(text.startsWith('vs')){
                listtext = text.slice(3).split('：');
                fullchar = getCharName(listtext[0]);
                temp = listtext[1].split('敗')[0].split('勝');
                win = temp[0];
                loss = temp[1];
                perc = listtext[1].split('敗')[1];
                $('#reslist').append('<li>' + fullchar + ' : ' + win + ' W |' + loss + ' L ' + perc + '</li>');
            }
        })
    });
});
