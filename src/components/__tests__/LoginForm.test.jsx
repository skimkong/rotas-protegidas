import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../LoginForm";

beforeEach(() => {
  localStorage.clear();
});

test("permite login com credenciais válidas", () => {
  render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "admin@admin.com" },
  });

  fireEvent.change(screen.getByLabelText(/senha/i), {
    target: { value: "123456" },
  });

  fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

  expect(localStorage.getItem("token")).toBe("token-fake-123");
});
