import styled from 'styled-components';

export const Form = styled.form`
margin:7px;
border: 1px solid black;
border-radius: 8px;
width:500px;
background-color: #f1ecea;
`;

export const Label = styled.label`
margin-left: 10px;
font-size: 20px;
font-weight: 600;
`;

export const Input = styled.input`
display: flex;
padding: 10px;
align-items: center;
margin-left: 10px;
border-radius: 8px;
`;


export const Button = styled.button`
margin:10px;
padding:5px;
border-radius: 10px;
border:none;
background-color: lightblue;
color: white;
&:hover,&:focus{
    background-color: black;
}
`;







