import styled from "styled-components";

export const Modal = styled.div`
    margin: 0;
    padding: 0;
     position: fixed;
    z-index: 100;
    background-color: white;
    width: 45%;
    border: 1px solid #ccc;
    left: 26%;
    top: 15%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;

@media (min-width: 600px) {
    .Modal {
        width: 500px;
        left: calc(50% - 250px);
    }
}
`;
