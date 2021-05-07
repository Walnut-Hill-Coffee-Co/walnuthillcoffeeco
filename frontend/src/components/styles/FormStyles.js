import styled from "@emotion/styled";

export const FormStyles = styled.div`
  background-color: var(--lightGray);
  width: 100%;
  max-width: 600px;
  margin: auto;
  display: grid;
  box-shadow: var(--bs);
  border-radius: var(--borderRadius);
  transition: background-color 200ms ease;
  &:focus-within {
    background-color: var(--white);

    .form-control {
      input,
      textarea {
        background: var(--lightGray);
      }
    }
  }
 >  h2 {
    margin: 2rem auto 0;
    text-align: center;
  }
  form {
    padding: 2rem;

    button {
      margin-left: auto;
      padding: 0.75rem 1rem;
      font-family: var(--fontStackBody);
      border: none;
      background: var(--blue);
      color: var(--white);
      font-size: 1rem;
      border-radius: var(--borderRadius);
      display: block;
      cursor: pointer;
    }
  }

  .form-control {
    display: grid;
    grid-template-rows: var(--lineHeight) 1fr;
    margin-bottom: 2rem;

    > label {
      font-weight: 600;
      color: var(--blue);
      font-family: var(--fontStackBody);
    }

    > input,
    textarea {
      background-color: var(--white);
      outline: none;
      border: none;
      transition: border 100ms ease;
      box-shadow: var(--bs);
      font-size: 1rem;
      font-family: var(--fontStackBody);
      padding-left: 0.5rem;
      line-height: var(--lineHeight);
      &:focus {
        border-bottom: 2px solid var(--blue);
        outline: 1px dashed var(--blue);
        outline-offset: 4px;
      }
    }
    > p {
      color: var(--blue);
      margin: 0;
      margin-bottom: 0.5rem;
      font-size: var(--fontSize7);
    }
    > small {
      margin: 0.5rem 0;
      font-size: var(--fontSize7);
      color: var(--tan);
    }
  }

  .message {
    resize: none;
  }

  .radio {
    font-size: 1rem;
    color: var(--green);
    display: grid;
    grid-template-columns: min-content auto;
    grid-gap: .5em;

&:focus-within {
  .radio__label {
    transform: scale(1.02);
    opacity: 1;
  }
}

    &__input {
      display: flex;
      align-items: center;
      input {
        opacity: 0;
        width: 0;
        height: 0;

        &:focus + .radio__control {
          box-shadow: 0 0 0 0.05em #fff,  0 0 0.15em .1em currentColor;
        }
      }

      input + .radio__control::before {
        content: '';
        width: .5em;
        height: .5em;
        box-shadow: inset 1.75em .5em currentColor;
        border-radius: 50%;
        transition: 180ms transform ease-in-out;
        transform: scale(0);
      }
      input:checked + .radio__control::before{
        transform: scale(1);
      }
    }

    &__control {
      display: grid;
      place-items: center;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      border: 0.1em solid currentColor;
    }

    &__label {
      transition: 180ms all ease-in-out;
      opacity: .8;
      color: var(--black);
    }
  }
`;
