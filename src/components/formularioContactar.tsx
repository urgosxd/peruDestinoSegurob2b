'use client'
import { Form, Field } from 'react-final-form'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Textarea
} from "@material-tailwind/react";
import { useCallback } from 'react';
import { useCountries } from 'use-react-countries'
export const FormularioContactar = () => {


  const { countries } = useCountries()
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onSubmit = async values => {
    const response = await fetch('/api/bitrix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
     if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }
    const result = await response.json();
    console.log(result);
  }

  const required = value => (value ? undefined : 'Required')
  const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
  const minNineCipher = value => (value.length < 9 ? "minimo 9 numeros" : undefined)
  const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
  const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


  const SelectAdapter = ({ input, meta, children, ...rest }) => {
    return (
      <div className="lg:w-1/2">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"

        >
          Tipo de Compañia
        </Typography>
        <Select {...input} {...rest} onChange={input.onChange} value={input.value || ''}>
          {children}
        </Select>
        {meta.touched && meta.error && <span className="text-red-500">{meta.error}</span>}
      </div>
    );
  };

  const SelectAdapterCountry = ({ input, meta, children, ...rest }) => {
    return (
      <div className="lg:w-1/2">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >

          Pais

        </Typography>
        <Select {...input} {...rest} onChange={input.onChange} value={input.value || ''}>
          {children}
        </Select>
        {meta.touched && meta.error && <span className="text-red-500">{meta.error}</span>}
      </div>
    );
  };
  return (
    <Card className="w-[85%] lg:w-2/3 p-10">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-7">
            <div className="flex flex-col lg:flex-row gap-y-5  lg:gap-x-5">
              <Field name="nombre" validate={required} >
                {({ input, meta }) => (
                  <div className="lg:w-1/2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >Nombre</Typography>
                    <Input
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      {...input}
                      onChange={useCallback(
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                          form.pauseValidation();
                          input.onChange(event.target.value);
                        },
                        [input, form])}
                      onBlur={useCallback(() => {
                        form.resumeValidation();
                        input.onBlur();
                      }, [input, form])}
                      type="text" placeholder="First Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="apellido" validate={required}>
                {({ input, meta }) => (
                  <div className="lg:w-1/2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >Apellido</Typography>
                    <Input
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      {...input}
                      onChange={useCallback(
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                          form.pauseValidation();
                          input.onChange(event.target.value);
                        },
                        [input, form])}
                      onBlur={useCallback(() => {
                        form.resumeValidation();
                        input.onBlur();
                      }, [input, form])}

                      type="text" placeholder="First Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

            </div>
            <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5">
              <Field name="companyType" component={SelectAdapter}>
                <Option value="Tour Operador">Tour Operador</Option>
                <Option value="Agencia de Viajes">Agencia de Viajes</Option>
              </Field>
              <Field name="companyName" validate={required}>
                {({ input, meta }) => (
                  <div className="lg:w-1/2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >Nombre de la Empresa</Typography>
                    <Input {...input} type="text" placeholder="First Name"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5">
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <div className="lg:w-1/2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >Correo</Typography>
                    <Input
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      {...input}
                      onChange={useCallback(
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                          form.pauseValidation();
                          input.onChange(event.target.value);
                        },
                        [input, form])}
                      onBlur={useCallback(() => {
                        form.resumeValidation();
                        input.onBlur();
                      }, [input, form])}


                      type="email" placeholder="Correo" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="phone" validate={composeValidators(required)}>
                {({ input, meta }) => (
                  <div className="lg:w-1/2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >Numero de Telefono</Typography>
                    <Input
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      {...input}
                      onChange={useCallback(
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                          form.pauseValidation();
                          const sanitizedLetters = (str) => str.replace(/[^0-9+\-\s]/g, ''); 
                          input.onChange(sanitizedLetters(event.target.value));
                        },
                        [input, form])}
                      onBlur={useCallback(() => {
                        form.resumeValidation();
                        input.onBlur();
                      }, [input, form])}
                      type="tel" pattern="^\+?[0-9\s\-]+$"
                      placeholder="Telefono"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

            </div>
            <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5">
              <Field name="pais" component={SelectAdapterCountry}>
                {countries.filter(({ name }) => ['Peru', 'Mexico', 'Panama', 'Guatemala', 'Honduras', 'Costa Rica', 'Nicaragua', 'Colombia', 'Chile', 'Uruguay', 'Spain', 'United States', 'Dominican Republic'].includes(name)).map(({ name, flags, countryCallingCode }) => (
                  <Option key={name} value={name + countryCallingCode} className="flex items-center gap-2">
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {name} {countryCallingCode}
                  </Option>
                ))}
              </Field>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-x-5">
              <Field name="mensaje" validate={required}>
                {({ input, meta }) => (
                  <div  className="lg:w-1/2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >Mensaje</Typography>
                    <Textarea label="Tu mensaje" 
                      {...input}
                      onChange={useCallback(
                        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
                          form.pauseValidation();
                          input.onChange(event.target.value);
                        },
                        [input, form])}
                      onBlur={useCallback(() => {
                        form.resumeValidation();
                        input.onBlur();
                      }, [input, form])}

                    />

              {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

            </div>


            <div className="flex justify-center w-full">
              <button type="submit" className="bg bg-[#D20000] rounded-md px-4 py-3 text-white" disabled={submitting}>
                Enviar
              </button>
            </div>
          </form>
        )}
      />
    </Card>
  )
}
