$.ajax({
  url: 'https://spreadsheets.google.com/feeds/list/19vgj5I4o22libj1rDMo-qsDH3cEV8n6j6Ur5WvLJRso/od6/public/values?alt=json',
  dataType: 'jsonp', // 追加
  type: "GET",
  success: function(res) {
    $.map(res.feed.entry, function(e, i) {
      if (e.gsx$実施月.$t == "2月") {
        console.log(e.gsx$アクション内容.$t);
      }
    });
  }
});