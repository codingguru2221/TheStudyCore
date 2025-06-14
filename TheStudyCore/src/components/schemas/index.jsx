import * as Yup from 'yup'


export const regInSchema = Yup.object({
    userName: Yup.string().min(2).max(25).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(2).max(6).required("please enter your password"),
})

export const signInSchema = Yup.object({
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(2).max(6).required("please enter your password"),

})