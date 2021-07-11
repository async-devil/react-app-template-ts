import React from "react";

import { render, screen } from "@testing-library/react";

import App from "../App";

test("Renders it works", () => {
	render(<App />);
	const linkElement = screen.getByText(/It works!/i);
	expect(linkElement).toBeInTheDocument();
});
