import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../assets/Icons/Facebook'
import GoogleIcon from '../assets/Icons/Google'
import { useFormik } from "formik";
import Swal from 'sweetalert2'
import * as yup from "yup";
import { Post } from '../../services/apiServices';

const validationSchema = yup.object({
    username: yup
        .string("email")
        .email("invalid email address")
        .required("email is required"),
    password: yup
        .string("password")
        .required("password is required"),
});

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            Post("https://api-flordeemprendedora.start-7.com/api/auth/login/", values)
                .then(res => {
                    if (res.data) {
                        const token = res.data.token;
                        localStorage.setItem("token", token);
                        formik.resetForm({});
                        Swal.fire('Success', `Seu token: ${token} foi armazenado no LocalStorage`, 'success')
                    }
                    else {
                        Swal.fire('Oops...', 'Os dados inseridos não são válidos', 'error')
                    }
                })
                .catch((error) => {
                    Swal.fire('Oops...', `Os dados inseridos não são válidos. The error ${error}`, 'error')
                })
        },
    });


    return (
        <div>

            <h1 class="text-info fw-bold">__</h1>
            <h1 class="text-info">Bem-vindo de volta!</h1>
            <Subtitle>
                Estamos felizes que esteja de volta para retomar seus projetos no Projetolist
            </Subtitle>

            {/* SECCION DE FORMULARIO */}

            <form onSubmit={formik.handleSubmit}>
                <div class="mb-3">
                    <div class="col-sm">
                        <input
                            name="username"
                            type="email"
                            class="form-control form-control-lg"
                            id="email"
                            placeholder="E-mail"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div class="mb-3">
                    <div class="col-sm">
                        <input
                            name="password"
                            type="password"
                            class="form-control form-control-lg"
                            id="password"
                            placeholder="Senha"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <a href="#" class="fs-6 text-info">Esqueceu sua senha?</a>
                </div>

                <div class="d-grid gap-2">
                    <Button class="btn btn-info" type=" ">Entrar</Button>
                </div>
            </form>

            {/* SECCION DE FORMULARIO */}

            {/* footer section */}
            <FooterLogin>
                <p class="fs-6 text-info">OU ENTRE COM</p>
                <ButtonContainer>
                    <ButtonFacebook><FacebookIcon /></ButtonFacebook>
                    <ButtonGoogle><GoogleIcon /></ButtonGoogle>
                </ButtonContainer>
                <p class="fs-6 text-info">Ainda não tem uma conta?  <a href="#" class="fs-6 text-info"><strong>Cadastre-se</strong></a></p>
            </FooterLogin>
        </div >
    )
}

const Button = styled.button`
    margin: 2em 0 1em 0;
    background-color: #5e89ff;
    height: 3em;
    border-radius: 35px;
    border: none;
    color: #fff;
    font-weight: 640;
`

const Subtitle = styled.p`
    margin: 3em 0 4em 0;
    width: 60%;
    color: #5e89ff;
`

const FooterLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonFacebook = styled.button`
    border: none;
    background-color: #5e89ff;
    border-radius: 10px 0 0 10px;

`
const ButtonGoogle = styled.button`
    border: none;
    background-color: #fff;
`

const ButtonContainer = styled.div`
    margin: 1em 0 3em 0;
`
