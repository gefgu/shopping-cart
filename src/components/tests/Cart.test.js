import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";

describe("Cart", () => {
  it("shows all products data", () => {
    const cartList = [
      {
        product: {
          name: "product 1",
          id: 1,
          fileName: "bridge_4_patch.png",
          price: 12.0,
        },
        quantity: 3,
      },
      {
        product: {
          name: "product 2",
          id: 2,
          fileName: "bridge_4_patch.png",
          price: 12.0,
        },
        quantity: 3,
      },
      {
        product: {
          name: "product 3",
          id: 3,
          fileName: "bridge_4_patch.png",
          price: 12.0,
        },
        quantity: 3,
      },
    ];
    const updateProductQuantityInCartMock = jest.fn();

    render(
      <Cart
        cartList={cartList}
        updateProductQuantityInCart={updateProductQuantityInCartMock}
      />
    );

    const productListing = screen.getAllByRole("article", {});
    productListing.forEach((product, index) => {
      expect(product).toHaveTextContent(cartList[index].product.name);
      expect(product).toHaveTextContent(cartList[index].product.price);
      expect(product).toHaveTextContent(
        cartList[index].product.price * cartList[index].quantity
      );
    });
  });

  it("shows right total price", () => {
    const cartList = [
      {
        product: {
          name: "product 1",
          id: 1,
          fileName: "bridge_4_patch.png",
          price: 12.0,
        },
        quantity: 3,
      },
      {
        product: {
          name: "product 2",
          id: 2,
          fileName: "bridge_4_patch.png",
          price: 12.0,
        },
        quantity: 3,
      },
      {
        product: {
          name: "product 3",
          id: 3,
          fileName: "bridge_4_patch.png",
          price: 12.0,
        },
        quantity: 3,
      },
    ];

    const costTotal = cartList.reduce(
      (prev, curr) => curr.product.price * curr.quantity + prev,
      0
    );

    const updateProductQuantityInCartMock = jest.fn();

    render(
      <Cart
        cartList={cartList}
        updateProductQuantityInCart={updateProductQuantityInCartMock}
      />
    );

    const checkoutButton = screen.getByRole("button", { name: "Checkout" });
    expect(checkoutButton.parentElement).toHaveTextContent(costTotal);
  });
});
