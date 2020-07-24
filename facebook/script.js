$(document).ready(function() {
    $("#sigup-form").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 4,
                maxlength: 6,
            },
            lastname: {
                required: true,
                minlength: 4,
            },
            emailaddress: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 4,
            },
            day: {
                required: true,
            },
            month: {
                required: true,
            },
            year: {
                required: true,
            },
            radio: {
                required: true,
            }


        },
        messages: {
            // firstname: "Enter first name"
            firstname: {
                required: "Enter First name",
                minlength: "Enter atleast 4 charactor",
            }

        }


    })
})