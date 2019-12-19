import styled from "styled-components";

export const Modal = styled.div`
     position: fixed;
    z-index: 100;
    background-color: white;
    width: 50%;
    border: 1px solid #ccc;
    padding: 16px;
    left: 26%;
    top: 20%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;

@media (min-width: 600px) {
    .Modal {
        width: 500px;
        left: calc(50% - 250px);
    }
}
`;
