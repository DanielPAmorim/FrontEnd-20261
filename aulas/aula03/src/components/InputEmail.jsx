function InputEmail({ valor, erro, mudaValor }) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={valor}
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputEmail;
