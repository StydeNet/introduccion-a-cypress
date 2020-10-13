import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

import { Form, Button } from "components";
import * as Utils from "utils";
import updateAction from "./update-action";
import * as Schema from "./schema";

const SecurityInfo = ({ history }) => {
  const { action, state } = useStateMachine(updateAction);
  const { password, confirmPassword } = state.data;
  const { errors, register, handleSubmit } = useForm({
    mode: "all",
    defaultValues: { password, confirmPassword },
    resolver: yupResolver(Schema.SecurityInfo),
  });

  const onSubmit = (data) => {
    action(data);
    history.push("/address-info");
  };

  const backToPersonalInfo = () => history.push("/");

  return (
    <div>
      <h1>Security Info</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.StyledField>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={register}
            type="password"
            name="password"
            placeholder="write your password"
            autoComplete="off"
          />
          {errors.password && (
            <Form.StyledErrorMsg>{errors.password.message}</Form.StyledErrorMsg>
          )}
        </Form.StyledField>
        <Form.StyledField>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            ref={register}
            type="password"
            name="confirmPassword"
            placeholder="write your password confirmation"
            autoComplete="off"
          />
          {errors.confirmPassword && (
            <Form.StyledErrorMsg>
              {errors.confirmPassword.message}
            </Form.StyledErrorMsg>
          )}
        </Form.StyledField>
        <Button.StyledSuccess
          type="button"
          role="button"
          onClick={backToPersonalInfo}
        >
          ← Previous
        </Button.StyledSuccess>
        <Button.StyledSuccess
          role="button"
          disabled={Utils.isObjectEmpty(errors)}
        >
          Next →
        </Button.StyledSuccess>
      </form>
    </div>
  );
};

export default withRouter(SecurityInfo);
