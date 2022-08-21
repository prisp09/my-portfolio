import styled from "styled-components";

export const StyledButton = styled.button`
position: fixed;
bottom: 20px;
right: 40px;

background: rgba(0, 0, 0, 0);

z-index: 100;
transition: all 0.3s ease;
color: white;
border:none;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }

`;