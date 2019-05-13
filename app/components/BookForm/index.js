/**
 *
 * BookForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function BookForm() {
  return (
    <Main>
      <Form action="#">
        <FormGroup>
          <FormInput
            id="fullname"
            type="text"
            placeholder="Full Name"
            required
          />
          <FormLabel htmlFor="fullname">Full name</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormInput id="email" type="email" placeholder="Email" required />
          <FormLabel htmlFor="email">Email</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormRadioGroup>
            <FormRadioInput type="radio" id="small" name="tour" checked />
            <FormRadioLabel htmlFor="small">
              <FormRadioButton /> Small tour group
            </FormRadioLabel>
          </FormRadioGroup>
          <FormRadioGroup>
            <FormRadioInput type="radio" id="large" name="tour" />
            <FormRadioLabel htmlFor="large">
              <FormRadioButton />
              Large tour group
            </FormRadioLabel>
          </FormRadioGroup>
        </FormGroup>
        <FormGroup>
          <Button type="submit">Next step &rarr;</Button>
        </FormGroup>
      </Form>
    </Main>
  );
}

const Main = styled.div`
  width: 50%;
  padding: 6rem;
  padding-top: 2rem;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  :not(:last-child) {
    margin-bottom: 2rem;
  }
  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

const FormInput = styled.input`
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  border-style: none;
  background-color: rgba(255, 255, 255, 0.5);
  width: 90%;
  display: block;
  transition: all 0.3s;
  :focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a;
  }
  :focus:invalid {
    border-bottom: 3px solid #ff7730;
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #999;
  }
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.5s;
`;

const FormRadioGroup = styled.div`
  width: 50%;
  display: inline-block;
  input:checked + label span:after {
    opacity: 1;
  }
`;

const FormRadioInput = styled.input`
  outline: none;
  display: none;
`;

const FormRadioLabel = styled.label`
  position: relative;
  font-size: 1.6rem;
  cursor: pointer;
  padding-left: 4.5rem;
`;

const FormRadioButton = styled.span`
  height: 3rem;
  width: 3rem;
  border: 5px solid #55c57a;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -0.4rem;
  ::after {
    content: '';
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #55c57a;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

const Button = styled.button`
  background-color: rgba(40, 180, 131);
  color: #fff;
  font-size: 1.2rem;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
  :hover {
    box-shadow: 0 1rem 1rem rgb(0, 0, 0, 0.09);
    transform: translateY(-0.5rem);
  }
`;

BookForm.propTypes = {};

export default BookForm;
