import styled  from "styled-components";


export const Container= styled.div`
    display: flex;
    justify-content:center;
    align-items : center;
    width:100%;
    height:100vh;
    background-color:#E6DDDB;

`;
export const Content = styled.div`
display:flex;
width:350px;
heigth:500px;



gap:2px;

flex-wrap : wrap;
background-color: #FFFFFF;

`;

export const Columns= styled.div`
display: grid;
width:350px;
grid-template-columns: repeat(4, 1fr);
gap:2px;
`
