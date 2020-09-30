import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { useStateMachine } from "little-state-machine";
import { withRouter } from "react-router-dom";

import { Form, Alert, Button } from "components";
import * as Utils from "utils";
import * as Actions from "actions";
import * as Schema from "./schema";
import updateAction from "./update-action";

const AddressInfo = ({ history }) => {
  const [submitted, setSubmitted] = useState("idle");
  const { action, state } = useStateMachine(updateAction);
  const { city, zipcode } = state.data;
  const { errors, register, handleSubmit } = useForm({
    mode: "all",
    defaultValues: { city, zipcode },
    resolver: yupResolver(Schema.AddressInfo),
  });

  const onSubmit = async (data) => {
    setSubmitted("pending");
    action(data);
    const newData = { ...state.data, ...data };
    try {
      const res = await Actions.User.signup(newData);
      res.message && setSubmitted("successfully");
    } catch (error) {
      setSubmitted("error");
    }
  };

  const backToSecurityInfo = () => history.push("/security-info");

  return (
    <div>
      {submitted === "error" && <small>Sign up API is offline</small>}
      {submitted === "pending" && <small>loading...</small>}
      {submitted === "successfully" && (
        <Alert.StyledSuccess>
          <p>Registration successfully</p>
        </Alert.StyledSuccess>
      )}
      <h1>Address Info</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.StyledField>
          <label htmlFor="city">City</label>
          <input
            id="city"
            ref={register}
            type="text"
            name="city"
            placeholder="write your city"
            autoComplete="off"
          />
          {errors.city && (
            <Form.StyledErrorMsg>{errors.city.message}</Form.StyledErrorMsg>
          )}
        </Form.StyledField>
        <Form.StyledField>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            id="zipcode"
            ref={register}
            name="zipcode"
            type="text"
            autoComplete="off"
            placeholder="write your zipcode"
          />
          {errors.zipcode && (
            <Form.StyledErrorMsg>{errors.zipcode.message}</Form.StyledErrorMsg>
          )}
        </Form.StyledField>
        <Button.StyledSuccess type="button" onClick={backToSecurityInfo}>
          ← Previous
        </Button.StyledSuccess>
        <Button.StyledSuccess
          type="submit"
          disabled={Utils.isObjectEmpty(errors)}
        >
          Submit
        </Button.StyledSuccess>
      </form>
    </div>
  );
};

export default withRouter(AddressInfo);
