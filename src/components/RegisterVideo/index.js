import React from "react";
import {StyledRegisterVideo} from "./styles";

export default function RegisterVideo () {
    const [ formVisible, setFormVisible ] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" >+</button>
            <form>
                <div>
                    <button className="close-modal" >x</button>
                    <input placeholder="Titulo do vídeo" />
                    <input placeholder="URL" />
                    <button type="submit" >Cadastrar</button>
                </div>
            </form>
        </StyledRegisterVideo>
    )
}
