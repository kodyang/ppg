import React, { useRef } from 'react';
import styled from 'styled-components';

import emailjs from '@emailjs/browser';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 18vw 1vw;

  @media (max-width: 768px) {
    padding: 0 16px 4px;
  }
`;

const Header = styled.h1`
  font-size: 32px;
  font-weight: 600;
  align-self: center;
  margin: 6vw 0 3vw;

  @media (max-width: 768px) {
    margin: 9vw 0 6vw;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  align-self: center;
`;

const Label = styled.label`
  font-szie: 16px;
  font-weight: 600;
  margin: 0 2vw 0.25vw 0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
  align-self: stretch;

  @media (max-width: 768px) {
    align-items: stretch;
  }
`;

const Input = styled.input`
  font-size: 16px;
`;

const SubmitButton = styled.button`
  font-size: 16px;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  border: none;
  background-color: #324E63;
  color: white;
  margin-top: 2vw;
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yh0xi1w', 'template_gwq0w9f', form.current, 'zHK6GrKihe5XRRJGe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <OuterWrapper>
      <Header>Contact Us</Header>
      <Paragraph>Have a question? Send us a message and we'll get back to you as soon as we can!</Paragraph>

      <ContactForm ref={form} onSubmit={sendEmail}>
        <InputBlock>
          <Label>Name</Label>
          <Input type="text" name="user_name" />
        </InputBlock>
        <InputBlock>
          <Label>Email</Label>
          <Input type="email" name="user_email" />
        </InputBlock>
        <Label>Message</Label>
        <textarea rows="4" name="message" />
        <SubmitButton type="submit" value="Send">Send</SubmitButton>
      </ContactForm>
    </OuterWrapper>
  );
};

export default Contact;