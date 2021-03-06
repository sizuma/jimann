if(('localStorage' in window) && (window.localStorage !== null)) {
    // ローカルストレージが使える
    function getPosts() {
	var posts = localStorage.getItem('posts');
	posts = JSON.parse(posts);
	if (!Array.isArray(posts)) posts = [];
	return posts;
}

$(".submit-btn").click(() => {
	var post = {
		text:  $('.contribution-text').val(),
	// userName: ユーザ名 など必要であれば保存する
	}; // 新しい投稿
	var posts = getPosts();
	posts.push(post)
  localStorage.setItem('posts', JSON.stringify(posts));
	refreshPosts()
});

function refreshPosts() {
	var posts = getPosts();
	$('.home-main').empty();
	posts.forEach( post => {
		// https://github.com/gakuteenis/jimann/blob/a4d9b6d355329217427d70d3d3d8a35f25c38504/www/js/jquery/dist/script.js#L29
		// この部分と同じように投稿を .home-main に prepend していく
    $('.home-main').prepend(
      '<div class="timeline-box" id="timelineboxs">'+
       '<img src="./img/IMG_4657.JPG" />'+
       '<div class="timeline-content">'+
       '<div class="user-name">名前</div>'+
        '<div class="timeline-text" id="content">'+post.text+'</div>'+
        '<div class="timeline-responce">'+
         '<div class="responce-box">'+
          '<div class="empathy">共感</div>'+
          '<div id="empathies">0</div>'+
         '</div>'+
         '<div class="responce-box">'+
          '<div class="">うらやみ</div>'+
          '<div class="">0</div>'+
         '</div>'+
         '<div class="responce-box">'+
          '<div class="envy">編集</div>'+
          '<div class="envies">削除</div>'+
         '</div>'+
        '</div>'+
       '</div>'+
      '</div>'
      );
	});
}
}else {
    // 使えない。。。
    alert('No');
}
