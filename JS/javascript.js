$.getJSON('http://h2o-space.com/htmlbook/images.php', function(data) {
    for (var i = 0; i < data.length; i++) {
        $('<div class="photo"></div>')
            .append('<img src="' + data[i].path + '">')
            .append('<div class="inner"><p>' + data[i].caption + '<span>' + data[i].name + '</span></p></div>')
            .appendTo('#img_unit');
    }
});

//jQueryではセレクタを指定した場合その要素を書き換えるが、タグを記述した場合はその要素を作り出すことができる(document.createElement)

// JavaScriptの場合
// var ajax = new XMLHttpRequest(); //XMLHttpRequest：ajax通信を行うためのオブジェクト
// ajax.open('GET', 'http://h2o-space.com/htmlbook/images.php'); //ajax通信を行う先のURL
// ajax.responseType = 'json'; //json形式でデータを受け取る
// ajax.send(null); //通信先へのリクエストで送るデータを指定する。この場合、データを受け取るだけなのでnullとする

// //ajax通信で受け取ったデータを処理する
// //処理の状態が変化する度にonreadystatechangeイベントが発生しコールバック関数を呼び出す
// ajax.onreadystatechange = function() {
//     if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
//         for (var i = 0; i < this.response.length; i++) {
//             var data = this.response[i];

//             var img = document.createElement('img');
//             img.setAttribute('src', data.path);

//             var caption = document.createElement('div');
//             caption.className = 'inner';
//             caption.innerHTML = '<p>' + data.caption + '<span>' + data.name + '</span></p>';

//             var div = document.createElement('div');
//             div.className = 'photo';
//             div.appendChild(img);
//             div.appendChild(caption);

//             document.getElementById('img_unit').appendChild(div);
//         }
//     }
// };