
// $(document).ready(function () {
    $("#quickcontact").validate({
        rules: {
            name: { required: true },
            email: { required: true, email: true },
            message: { required: true },
            // subject: { required: true},
        },
        messages: {
            name: "Please Enter the Name!",
            email: {
                required: "Please Enter the Email!",
                email: "Please Enter the Valid Email!"
            },
            message: { required: "Please enter Message!" },
            // subject: { required: "Please enter Subject!"},
        },
        // errorClass: "contactFormTextError",

        //               errorPlacement: function(error, element) {
        //                  //Dont't show error
        //               },
        //               onkeyup: false

        submitHandler: function (a) {
            var values = $("#quickcontact").serialize();
            console.log(values.name);
        },
    });

    $("#contactform").validate({
        rules: {
            name: { required: true },
            email: { required: true, email: true },
            message: { required: true },
            subject: { required: true },
        },

        // messages: {
        //     name: "Please Enter the Name!",
        //     email: {
        //         required: "Please Enter the Email!",
        //         email: "Please Enter the Valid Email!"
        //     },
        //     message: { required: "Please enter Message!"},
        //     subject: { required: "Please enter Subject!"},
        // },
        errorClass: "contactFormTextError",

        errorPlacement: function (error, element) {
            //Dont't show error
        },
        onkeyup: false

        // submitHandler: function (a) {
        //     var values = $("#contactform").serialize();
        //     console.log(values.name);
        //   },
    });


    $("#login-contact").validate({
        rules: {
            // name: { required: true },
            email: { required: true, email: true },
            password: { required: true, password: true},

            
            // message: { required: true },
            // subject: { required: true},
        },
        messages: {
            name: "Please Enter the Name!",
            email: {
                required: "Please Enter the Email!",
                email: "Please Enter the Valid Email!"
            },
            password: "Please Enter the password!",
            
            // message: { required: "Please enter Message!" },
            // subject: { required: "Please enter Subject!"},
        },
        // errorClass: "contactFormTextError",

        //               errorPlacement: function(error, element) {
        //                  //Dont't show error
        //               },
        //               onkeyup: false

        submitHandler: function (a) {
            var values = $("#login-contact").serialize();
            console.log(values.name);
        },
    });
    $("#signup").validate({
        rules: {
            name: { required: true },
            email: { required: true, email: true },

            
            // message: { required: true },
            // subject: { required: true},
        },
        messages: {
            name: "Please Enter the Name!",
            email: {
                required: "Please Enter the Email!",
                email: "Please Enter the Valid Email!"
            },
            // message: { required: "Please enter Message!" },
            // subject: { required: "Please enter Subject!"},
        },
        // errorClass: "contactFormTextError",

        //               errorPlacement: function(error, element) {
        //                  //Dont't show error
        //               },
        //               onkeyup: false

        submitHandler: function (a) {
            var values = $("#signup").serialize();
            console.log(values.name);
        },
    });

// });


