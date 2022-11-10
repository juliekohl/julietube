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
        clearForm: () => {
            setValues({ title: "", url: "" });
        },
    };
}

export default function RegisterVideo() {
    const { values, handleChange, clearForm } = useForm({
        initialValues: { title: "", url: "" }
    });
    const [ formVisible, setFormVisible ] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button
                type="button"
                className="add-video"
                onClick={() => setFormVisible(true)}
            >
                +
            </button>
            {formVisible
                ? (
                    <form
                        onSubmit={(event) => {
                        event.preventDefault();
                        const isCorrectUrl =
                            /^((https|http):\/\/)?(www\.)?youtube.com\/watch\/\?v=/.test(
                                values.url
                            );

                        if (isCorrectUrl) {
                            clearForm();
                            setFormVisible(false);
                            return
                        }
                        alert('url não reconhecida!')
                    }}>
                        <div>
                            <button
                                type="button"
                                className="close-modal"
                                onClick={() => setFormVisible(false)}
                            >
                                x
                            </button>
                            <input
                                type="text"
                                placeholder="Título do video"
                                name="title"
                                min="1"
                                max="50"
                                value={values.title}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="URL do video"
                                name="url"
                                min="28"
                                max="60"
                                value={values.url}
                                onChange={handleChange}
                            />
                            <button type="submit">Cadastrar</button>
                            {values.url.length >= 28 && url.length <= 60 ? (
                                <img src={values[url].split("v=")[1]} alt="" />
                            ) : null}
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}
