import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ProductCartCounter from "../ProductCartCounter";

describe("Proper counting", () => {
  it("Minus button lowers count", () => {
    const product = { name: "product" };
    const cartList = [{ product, quantity: 10 }];
    const updateProductQuantityInCartMock = jest.fn();
    render(
      <ProductCartCounter
        product={product}
        cartList={cartList}
        updateProductQuantityInCart={updateProductQuantityInCartMock}
      />
    );

    const minusButton = screen.getByRole("")
  });
});
