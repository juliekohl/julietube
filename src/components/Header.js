import styled from "styled-components";

export const StyledHeader = styled.div`
    background-color: ${ ({ theme }) => theme.backgroundLevel1 };
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
        margin-top: 50px;
        padding: 16px 32px;
    }
`;
