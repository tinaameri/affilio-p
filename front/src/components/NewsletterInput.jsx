import { Box, Button, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { content } from 'public/assets/contentJson';
import ButtonComponent from './Button';

export default function NewsletterInput({ source, newsletter }) {
  const [send, setSend] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
    },
    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => {
        if (!value) return content?.newsletter?.empty_validate;
        if (
          !value
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
        ) {
          return content?.newsletter?.validate;
        }

        return null;
      },
    },
  });
  const handleSubmit = async (values) => {
    const userDetails = {
      email: values.email,
      attributes:{
      affilio: true,
      }
    };
    try {
      await window?.Intk('login', userDetails);
      await window?.Intk('sendEvent', {
        eventName: 'newsletter',
        eventData: {
          'site-position': source,
          source: 'affilio',
        },
      });

      form.reset();
      setSend(false);
    } catch (error) {
      console.error('Error during form submission:', error);
    } finally {
      setSend(true);
      const sending = setInterval(() => {
        setSend(false);
      }, 1500);
      clearTimeout(sending);
    }
  };
  return (
    <>
      <Text component="span" color="white">
        {newsletter?.title}
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Box className="newsletter-section">
          <TextInput
            variant="unstyled"
            mt="xl"
            //label={demo?.company_email?.title}
            placeholder={newsletter?.email_placeholder}
            {...form.getInputProps('email')}
          />

          <ButtonComponent size='sm' actionType="submit" type='primary' title={send ? 'ارسال شد' : newsletter?.button}
/>
        </Box>
      </form>
    </>
  );
}
