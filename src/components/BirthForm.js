import { useState } from "react";
import { useMutation } from "@apollo/client";

import { EDIT_AUTHOR } from "../queries/queries";

const BirthForm = ({ authors }) => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const [changeBirth] = useMutation(EDIT_AUTHOR);

  const submit = (event) => {
    event.preventDefault();

    changeBirth({ variables: { name, setBornTo: birth } });
    setName("");
    setBirth("");
  };

  return (
    <div>
      <h2>set birth year</h2>

      <form onSubmit={submit}>
        <div>
          name{" "}
          <select
            name="authors"
            onChange={({ target }) => {
              console.log(target.value);
              setName(target.value);
            }}
          >
            {authors.map((author) => {
              return (
                <option key={author.name} value={author.name}>
                  {author.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          born{" "}
          <input
            value={birth}
            onChange={({ target }) => setBirth(Number(target.value))}
          />
        </div>
        <button type="submit">edit birth year</button>
      </form>
    </div>
  );
};

export default BirthForm;
