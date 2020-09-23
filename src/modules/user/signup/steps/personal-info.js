import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { useStateMachine } from "little-state-machine";
import { withRouter } from "react-router-dom";

import { Form, Button } from "components";
import * as Utils from "utils";
import * as Schema from "./schema";
import updateAction from "./update-action";

const PersonalInfo = ({ history }) => {
  const { action, state } = useStateMachine(updateAction);
  const { firstName, lastName } = state.data;
  const { errors, register, handleSubmit } = useForm({
    mode: "all",
    defaultValues: { firstName, lastName },
    resolver: yupResolver(Schema.PersonalInfo),
  });

  const onSubmit = (data) => {
    action(data);
    history.push("/security-info");
  };

  return (
    <div>
      <h1>Personal Info</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.StyledField>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            ref={register}
            type="text"
            name="firstName"
            placeholder="write your firstname"
            autoComplete="off"
          />
          {errors.firstName && (
            <Form.StyledErrorMsg>
              {errors.firstName.message}
            </Form.StyledErrorMsg>
          )}
        </Form.StyledField>
        <Form.StyledField>
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            ref={register}
            name="lastName"
            type="text"
            autoComplete="off"
            placeholder="write your lastName"
          />
          {errors.lastName && (
            <Form.StyledErrorMsg>{errors.lastName.message}</Form.StyledErrorMsg>
          )}
        </Form.StyledField>
        <Button.StyledSuccess disabled={Utils.isObjectEmpty(errors)}>
          Next →
        </Button.StyledSuccess>
      </form>
    </div>
  );
};

export default withRouter(PersonalInfo);
