import React from "react";
import {StyledRegisterVideo} from "./styles";

function useForm(propsForm) {
    const [ values, setValues ] = React.useState(propsForm.initialValues);

    return {
        values,
        handleChange: (event) => {
            const value = event.target.value;
            const name = event.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formRegistration = useForm({
        initialValues: { title: "", url: "" }
    });
    const [ formVisible, setFormVisible ] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button
                className="add-video"
                type="button"
                onClick={() => setFormVisible(true)}
            >+</button>
            {formVisible
                ? (
                    <form
                        onSubmit={(event) => {
                        event.preventDefault();
                        console.log(formRegistration.values);

                        setFormVisible(false);
                        formRegistration.clearForm();
                    }}>
                        <div>
                            <button
                                className="close-modal"
                                onClick={() => setFormVisible(false)}
                            >x</button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="title"
                                value={formRegistration.values.title}
                                onChange={formRegistration.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formRegistration.values.url}
                                onChange={formRegistration.handleChange}
                            />
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}
