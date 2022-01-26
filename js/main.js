
$(function() {
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
});



$("#formLogin").validate({
		        rules: {
		            userEmail: { required: true,email: true},
		            userPassword: { required: true,},
		        },
		        messages: {
		            userEmail: {
		                   required: "Ingresa un correo electrónico.",
		                   email: "Verifica tu correo electrónico.",
		                },
		            userPassword: {
		                   required: "Ingresa una contraseña.",
		                },
		        }     
    		});

$("#formForgetPass").validate({
		        rules: {
		            userEmailSend: { required: true,email: true},
		        },
		        messages: {
		            userEmailSend: {
		                   required: "Ingresa un correo electrónico.",
		                   email: "Verifica tu correo electrónico.",
		                },
		        }     
    		});


$("#formRegister").validate({
                rules: {
                    nombres: {required:true,},
                    apellidos: {required:true,},
                    pass: { required: true, minlength: 6,},
                    passto: {required: true, equalTo: "#pass"},
                    email: { required: true,email: true},
                    telefono: {required:true, number:true},
                    genero: {required:true,},
                    ciudad: {required:true,},
                    dia: {required:true,},
                    mes: {required:true,},
                    anio: {required: true,},
                    tyc: {required: true,},
                    habeasdata: {required: true,},
                },
                messages: {
                    nombres: {
                           required: "Ingresa un nombre.",
                        },
                    apellidos: {
                           required: "Ingresa un apellido.",
                        },
                    pass: {
                           required: "Ingresa una contraseña.",
                           minlength: "Debe tener mínimo 6 caracteres.",
                        },
                    passto: {
                           required: "Ingresa una contraseña.",
                           equalTo: "Las contraseñas no coinciden.",
                        },

                    email: {
                           required: "Ingresa un correo electrónico.",
                           email: "Verifica tu correo electrónico.",
                        },
                    telefono: {
                           required: "Ingresa un teléfono.",
                           number: "Ingresa un teléfono válido.",
                        },
                    genero: {
                           required: "Ingresa un nombre.",
                        },
                    ciudad: {
                           required: "Ingresa un nombre.",
                        },
                    dia: {
                           required: "Ingresa un nombre.",
                        },
                    mes: {
                           required: "Ingresa un nombre.",
                        },
                    anio: {
                           required: "Ingresa un nombre.",
                        },
                    tyc: {
                           required: "Ingresa un nombre.",
                        },
                    habeasdata: {
                           required: "Ingresa un nombre.",
                        },
                }     
            });

