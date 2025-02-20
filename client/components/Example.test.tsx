import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Example from "./Example";

function sum(a: number, b: number): number {
    return a + b;
}

describe("adds 1 + 2 to equal 3", () => {
    it('my test', () => {
        expect(sum(1, 2)).toBe(3);
    })
});


describe("component to render", () => {
    it('my test', () => {
        render(<Example />);
        expect(screen.getByText("Example")).toBeInTheDocument();
    })
});