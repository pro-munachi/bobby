import styled from "styled-components";

export const Container = styled.div`
.loader {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #E03170;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`;
