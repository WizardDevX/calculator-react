import React from "react";
import Calculator from "./components/Calculator";
import { DefaultTheme, ThemeProvider } from "styled-components";

const Theme: DefaultTheme = {
	colors: {
		primary: "#14213D",
		secondary: "#FCA311",
		complement: "#E5E5E5",
	},
};

const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<Calculator />
		</ThemeProvider>
	);
};

export default App;
