import React from 'react';
import { Form, Formik } from 'formik';
import Input from './components/Input/Input';
import * as Yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 2px;
  padding: 30px 0;
  border-radius: 10px;
  background-color: #fff;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 550px) {
    display: block;
  }
`;

const Footer = styled.div`
  text-align: end;
`;

const Button = styled.button`
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: #8e04f6;
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #be70f9;
  };
`;

const App = () => {
  const initialValues = {
    nome: "",
    sobrenome:"",
    dataNascimento:"",
    naturalidade:"",
    endereço:"",
    cidade:"",
    email:"",
    celular:"",
  };

  const validationSchema = Yup.object({
    nome: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    sobrenome: Yup.string().required("Campo obrigatório"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    dataNascimento: Yup.date()
      .max(new Date(), "Não é possível incluir uma data futura")
      .required("Campo obrigatório"),
    celular: Yup.string()
      .max(13, "O camp deve ter no máximo 13 caracteres")
      .required("Campo obrigatório"),
  });

  const handleSubmit = ({ setSubmitting }) => {
    setSubmitting(false);
  }

  return (
    <Container>
      <Content>
        <Formik 
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, isSubmitting }) => (
            <Form style={{ width: "90%"}}>
              <Row>
                <Input name="nome" required />
                <Input name="Sobrenome" required />
              </Row>
              <Row>
                  <Input name="dataNascimento"
                  type="date" 
                  label="data de Nascimento"
                  required
                />
                <Input name="naturalidade" />
              </Row>
              <Row>
                <Input name="endereço" />
                <Input name="cidade" disabled={!values.endereço} />
              </Row>
              <Row>
                <Input name="email" type="email" required />
                <Input name="celular" type="number" required />
              </Row>
              <Footer>
                <Button type="submit" disabled={isSubmitting}>
                  Salvar
                </Button>
              </Footer>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
}

export default App
