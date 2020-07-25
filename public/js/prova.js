function Login(url) {
    $(document).ready(function() {
        $('#log').click(function () {
            var mail = $("#defaultForm-email").val().trim();
            var psw = $("#defaultForm-pass").val();
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    email: mail,
                    password: psw
                },
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    var mail=data.mail;
                    var token=data.token;
                    localStorage.setItem("id",data.id);
                    localStorage.setItem("mail", mail);
                    localStorage.setItem("token", token);
                    window.location.href=data.url;
                    console.log(data)
                },
                error:function (data) {
                    if(data.status == 422)
                        $("#error").text("Errore di validazione");
                    else
                        $("#error").text("Utente o password errati");
                }
            });
        });
    });
}
function Register(url) {
    $(document).ready(function() {
        $("#reg").click(function(){
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
                    dataType: 'json',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    data: {
                        name: name,
                        email: mail,
                        password: psw,
                        password_confirmation:cpsw
                    },
                    success: function (data) {
                        $('#Registero').modal('toggle');
                    }
                });
            //}

        });
    });
}
