import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AddToCart from "../AddToCart";

describe("Add to Cart", () => {
  it("calls with product", () => {
    const product = { name: "product" };
    const addProductToCartMock = jest.fn();
    render(
      <AddToCart addProductToCart={addProductToCartMock} product={product} />
    );
    userEvent.click(screen.getByRole("button"));
    expect(addProductToCartMock).lastCalledWith(product);
  });
});
