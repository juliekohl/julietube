import React from "react";
import {StyledRegisterVideo} from "./styles";
import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = "https://hovkdjosmlbmcvompmds.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmtkam9zbWxibWN2b21wbWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjY5ODUsImV4cCI6MTk4Mzc0Mjk4NX0.wKdr29kUR4bHUkGxhbYvQdoxMn6FSI2WqclmRns24Qo";
const supabase = createClient(PROJECT_URL, API_KEY);

function getVideoId(url) {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");

    if (ampersandPosition !== -1) {
        return videoId.substring(0, ampersandPosition);
    }
    return videoId;
}

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

function useForm(propsForm) {
    const [ values, setValues ] = React.useState(propsForm.initialValues);

    let video_id = "";
    if (values.url.includes(".be/")) {
        video_id = values.url.split(".be/")[1];
    }

    if (values.url.includes("/embed/")) {
        video_id = values.url.split("/embed/")[1];
    }

    if (values.url.includes("com/v/")) {
        video_id = values.url.split("com/v/")[1];
    }

    if (values.url.includes("/watch?v=")) {
        video_id = values.url.split("/watch?v=")[1];
        let ampersandPosition = video_id.indexOf("&");
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
    }

    return {
        values,
        video_id,
        handleChange: (event) => {
            const value = event.target.value;
            const name = event.target.name;

            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm: () => {
            setValues({ title: "", url: "" , video_id: "",});
        },
    };
}

export default function RegisterVideo() {
    const [ formVisible, setFormVisible ] = React.useState(false);
    const { values, handleChange, clearForm } = useForm({
        initialValues: { title: "", url: "" }
    });

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

                        supabase.from("video").insert({
                            title: values.title,
                            url: values.url,
                            thumb: getThumbnail(values.url),
                            playlist: "front-end",
                        }).then((response) => {
                            console.log(response);
                        }).catch((err) => {
                            console.log(err);
                        })

                        clearForm();
                        setFormVisible(false);
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
                                min="5"
                                max="50"
                                value={values.title}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="URL do video"
                                name="url"
                                value={values.url}
                                onChange={handleChange}
                                required
                                pattern="^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$"
                            />
                            <button type="submit">Cadastrar</button>
                            <span>Preview</span>
                            {values.video_id && (
                                <>
                                    <div className="wrapperPreview">
                                        <h2>{values.title}</h2>
                                        <div className="videoPreview">
                                            <iframe
                                                width="410"
                                                height="220"
                                                src={`https://www.youtube.com/embed/${values.video_id}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}
