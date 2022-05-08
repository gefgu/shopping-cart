import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ProductCartCounter from "../ProductCartCounter";

describe("Proper counting", () => {
  it("Minus button lowers count", async () => {
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

    const minusButton = screen.getByRole("button", { name: "-" });
    await userEvent.click(minusButton);
    expect(updateProductQuantityInCartMock).lastCalledWith(
      product,
      cartList[0].quantity - 1
    );
  });

  it("Plus button increases count", async () => {
    const product = { name: "product" };
    const cartList = [{ product, quantity: 1 }];
    const updateProductQuantityInCartMock = jest.fn();
    render(
      <ProductCartCounter
        product={product}
        cartList={cartList}
        updateProductQuantityInCart={updateProductQuantityInCartMock}
      />
    );

    const plusButton = screen.getByRole("button", { name: "+" });
    await userEvent.click(plusButton);
    expect(updateProductQuantityInCartMock).lastCalledWith(
      product,
      cartList[0].quantity + 1
    );
  });

  it("Text input changes count", async () => {
    const product = { name: "product" };
    const cartList = [{ product, quantity: 1 }];
    const updateProductQuantityInCartMock = jest.fn();
    render(
      <ProductCartCounter
        product={product}
        cartList={cartList}
        updateProductQuantityInCart={updateProductQuantityInCartMock}
      />
    );

    const input = screen.getByRole("spinbutton");
    await userEvent.type(input, "100");
    expect(updateProductQuantityInCartMock).lastCalledWith(product, "100");
  });

  it("Text input empty and unfocused defaults to 0 in cart", async () => {
    const product = { name: "product" };
    const cartList = [{ product, quantity: 1 }];
    const updateProductQuantityInCartMock = jest.fn();
    render(
      <ProductCartCounter
        product={product}
        cartList={cartList}
        updateProductQuantityInCart={updateProductQuantityInCartMock}
      />
    );

    const input = screen.getByRole("spinbutton");
    await userEvent.paste(input, "");
    userEvent.tab(); // Change focus
    expect(updateProductQuantityInCartMock).toBeCalledTimes(0);
    expect(input).toHaveValue("");
  });
});
