/**
 * Created by Arnaud on 29/03/2017.
 */

base_url = "http://www.ggxrd.com/pg2/";
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
    "Dizzy": "ディズィー"
};

list_chars = ['sol', 'kyk', 'may', 'mll', 'zat', 'pot', 'chp', 'fau', 'axl',
    'ven', 'sly', 'ino', 'bed', 'ram', 'sin', 'elp', 'jhn', 'leo',
    'jko', 'jam', 'kum', 'rvn', 'dzy'];

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
    'Dizzy':'dzy'
};




$.get('data/data.csv',function(data){
    var dataStr = new String(data);
    maindiv = $("#cont");
    maindiv.append('<select id="player"></select>');
    $.csv.toArrays(dataStr).forEach(function (element) {
        $('#player').append('<option value="' + element[1] + '">' + element[0] + '</option>');
    });
    maindiv.append('<select id="character"></select>');
    Object.keys(charmap).forEach(function (element) {
        $('#character').append('<option value="' + charmap[element] + '">' + element + '</option>');
    });
},dataType='text');
