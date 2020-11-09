import styled from "styled-components";

export const Box = styled.div`
	height: 500px;
	width: 375px;
	border: 1px solid #000;
	color: ${props => props.theme.colors.primary};

	@media screen and (max-width: 768px) {
		min-height: 100vh;
	}
`;

export const ResultBox = styled.section`
	position: relative;
	height: 30%;
	width: 100%;
	background-color: ${props => props.theme.colors.complement};
	color: ${props => props.theme.colors.primary};
	padding: 1rem;
`;

export const Result = styled.span`
	position: absolute;
	right: 5%;
	bottom: 10%;
	background-color: ${props => props.theme.colors.complement};
	font-size: 1rem;
	text-align: end;
	border-style: none;
	pointer-events: none;
`;

export const ContainerButtons = styled.section`
	display: grid;
	width: 100%;
	height: 70%;
	grid-template-columns: repeat(4, 1fr);
	background-color: ${props => props.theme.colors.primary};
`;

export const Button = styled.button`
	background-color: ${props => props.theme.colors.primary};
	border: 1px solid ${props => props.theme.colors.complement};
	color: ${props => props.theme.colors.complement};
	font-size: 1.5rem;
	transition: all 0.3s;

	&:hover {
		background-color: ${props => props.theme.colors.secondary};
		color: ${props => props.theme.colors.primary};
	}
`;
