'use client'
import { Form, Field } from 'react-final-form'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
export const FormularioContactar = () => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  const required = value => (value ? undefined : 'Required')
  const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
  const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
  const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


  const SelectAdapter = ({ input, meta, children, ...rest }) => {
    return (
      <div>
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
  return (
    <Card>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row">
              <Field name="nombre" validate={required}>
                {({ input, meta }) => (
                  <div>
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
                      {...input} type="text" placeholder="First Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="apellido" validate={required}>
                {({ input, meta }) => (
                  <div>
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
                      {...input} type="text" placeholder="First Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

            </div>
            <div className="flex flex-row">
              <Field name="companyType" component={SelectAdapter}>
                <Option value="Tour Operador">Tour Operador</Option>
                <Option value="Agencia de Viajes">Agencia de Viajes</Option>
              </Field>
              <Field name="companyName" validate={required}>
                {({ input, meta }) => (
                  <div>
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
             <div className="flex flex-row">
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <div>
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
                      {...input} type="email" placeholder="Correo" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="phone" validate={required}>
                {({ input, meta }) => (
                  <div>
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
                      {...input} type="number" pattern="[0-9]*" placeholder="Telefono" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

            </div>

            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Card>
  )
}
