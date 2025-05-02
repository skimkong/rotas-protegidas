import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

describe("LoginForm", () => {
  it("preenche campos e envia o formulário", () => {
    const onLoginMock = jest.fn();

    render(<LoginForm onLogin={onLoginMock} />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const submitButton = screen.getByText("Entrar");

    fireEvent.change(emailInput, { target: { value: "teste@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(submitButton);

    expect(onLoginMock).toHaveBeenCalledWith({
      email: "teste@email.com",
      senha: "123456",
    });
  });
});
