$(function () { 
    $("#upload").click(function () { 
    var formData = new FormData($('#uploadForm')[0]); 
     $.ajax({ 
     type: 'post', 
     url: "", //上传文件的请求路径必须是绝对路劲
     data: formData, 
     cache: false, 
     processData: false, 
     contentType: false, 
 }).success(function (data) { 
     alert(data); 
}).error(function () { 
     alert("上传失败"); 
}); 
}); 
});