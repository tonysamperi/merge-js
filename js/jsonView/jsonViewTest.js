var json = {"hey": "guy","anumber": 243,"anobject": {"whoa": "nuts","anarray": [1,2,"thr<h1>ee"],"anotherarray": [1, 2], "more":"stuff"},"awesome": true,"bogus": false,"meaning": null, "japanese":"??????", "link": "http://jsonview.com", "notLink": "http://jsonview.com is great"};
    
$(function() {
  $('#json').JSONView(json);
  
});
