/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, memo } from 'react';

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@material-ui/core';
import { useFormik } from 'formik';

import { CARD_NUMBER_LENGTH, EXPIRATION_DATE_LENGTH } from './constants';
import { FormikValuesType, PaymentFormPropsType } from './types';

import { useAppDispatch, useAppSelector } from 'hooks';
import { buyTC } from 'store/reducers';
import { selectCartContents } from 'store/selectors';

export const PaymentForm: FC<PaymentFormPropsType> = memo(({ mediaStyle }) => {
  const dispatch = useAppDispatch();

  const addedCart = useAppSelector(selectCartContents);

  const formik = useFormik({
    initialValues: {
      firstLastName: '',
      cardNumber: '',
      expirationDate: '',
      password: '',
      rememberMe: false,
    },
    validate: values => {
      const errors: FormikValuesType = {};

      if (!values.cardNumber) {
        errors.cardNumber = 'Required';
      } else if (
        values.cardNumber.length !== CARD_NUMBER_LENGTH ||
        !/^[0-9]+ [0-9]+ [0-9]+ [0-9]{4}$/i.test(values.cardNumber)
      ) {
        errors.cardNumber = 'Invalid card number';
      }
      if (!values.firstLastName) {
        errors.firstLastName = 'Required';
      } else if (!/^[A-Z]+ [A-Z]{2,20}$/i.test(values.firstLastName)) {
        errors.firstLastName = 'Invalid firstLastName';
      }
      if (!values.expirationDate) {
        errors.expirationDate = 'Required';
      } else if (
        values.expirationDate.length !== EXPIRATION_DATE_LENGTH ||
        !/^[0-9]+\/[0-9]{2}$/i.test(values.expirationDate)
      ) {
        errors.expirationDate = 'Invalid expirationDate';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (!/^[0-9]{3}$/i.test(values.password)) {
        errors.password = 'Invalid password';
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(buyTC({ addedCart, values }));
      formik.resetForm();
    },
  });

  return (
    <FormControl style={{ paddingLeft: '50px' }}>
      <form onSubmit={formik.handleSubmit} style={mediaStyle}>
        <FormGroup>
          <TextField
            variant="outlined"
            type="tel"
            label="0000 0000 0000 0000"
            margin="normal"
            {...formik.getFieldProps('cardNumber')}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber && (
            <div style={{ color: 'red' }}>{formik.errors.cardNumber}</div>
          )}

          <TextField
            variant="outlined"
            label="IVAN IVANOV"
            margin="normal"
            {...formik.getFieldProps('firstLastName')}
          />
          {formik.touched.firstLastName && formik.errors.firstLastName && (
            <div style={{ color: 'red' }}>{formik.errors.firstLastName}</div>
          )}

          <TextField
            variant="outlined"
            label="00/00"
            margin="normal"
            {...formik.getFieldProps('expirationDate')}
          />
          {formik.touched.expirationDate && formik.errors.expirationDate && (
            <div style={{ color: 'red' }}>{formik.errors.expirationDate}</div>
          )}

          <TextField
            variant="outlined"
            label="000"
            margin="normal"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}

          <FormControlLabel
            label="remember me"
            control={<Checkbox {...formik.getFieldProps('rememberMe')} />}
            checked={formik.values.rememberMe}
          />

          <Button type="submit" variant="contained" color="primary">
            buy
          </Button>
        </FormGroup>
      </form>
    </FormControl>
  );
});
