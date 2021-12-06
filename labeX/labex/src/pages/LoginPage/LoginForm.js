import React from "react"
import { useHistory } from "react-router"
import useForm from "../../hooks/useForm"
import {login} from "../../services/trips"

const LoginForm = ({setRigthButtontText}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRigthButtontText)

    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                    type={"email"} />

                <input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                    type={"password"} />

                <button
                    type={"submit"}
                >
                    Fazer Login!
                </button>

            </form>

        </div>

    )
}

export default LoginForm