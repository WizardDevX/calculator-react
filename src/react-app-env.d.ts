/// <reference types="react-scripts" />

import {} from "styled-components/cssprop";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			complement: string;
		};
	}
}
