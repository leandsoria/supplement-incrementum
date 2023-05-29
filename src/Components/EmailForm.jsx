import ButtonDark from './ButtonDark';

function EmailForm() {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={submitFormHandler}
      className="flex flex-row justify-between w-full max-w-xl p-2 mt-8 rounded-md bg-[rgba(255,255,255,.08)]"
    >
      <input
        type="email"
        placeholder="> enter your email"
        className="bg-transparent pl-6 outline-none text-white"
      />
      <ButtonDark />
    </form>
  );
}

export default EmailForm;
