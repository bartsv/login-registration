function Login(url) {
        $('log').click(function () {
            var csrf_token = $('meta[name="csrf-token"]').attr('content');
            var mail = $("#defaultForm-email").val().trim();
            var psw = $("#defaultForm-pass").val();
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    name: name,
                    email: mail,
                    password: psw
                },
                success: function (data) {
                    if ($.isEmptyObject(data.error)) {
                        alert(data.success);
                    } else {
                        alert(data.error);
                    }
                }
            });
        });
}
function Register(url) {
    $(document).ready(function() {
        $("#reg").click(function(){
            var csrf_token = $('meta[name="csrf-token"]').attr('content');
            var name = $("#RdefaultForm-name").val().trim();
            var mail = $("#RdefaultForm-email").val().trim();
            var psw = $("#RdefaultForm-pass").val();
            var cpsw = $("#RdefaultForm-passC").val();
           // if(psw.match(cpsw)) {
            console.log($.ajax);
                console.log("qui psw ==");
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: {
                        name: name,
                        email: mail,
                        password: psw
                    },
                    success: function (data) {
                        if ($.isEmptyObject(data.error)) {
                            alert(data.success);
                        } else {
                            alert(data.error);
                        }
                    }
                });
            //}

        });
    });
}
