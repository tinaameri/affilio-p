import React, { useContext } from 'react';
import Layout from '@/components/LayoutComponent';
import { useForm, isNotEmpty } from '@mantine/form';
import { useId, useMediaQuery } from '@mantine/hooks';
import { ModalWithReducer } from '@/context/ModalProvider';
import {
  Grid,
  Title,
  Text,
  Input,
  TextInput,
  Box,
  Select,
} from '@mantine/core';
// import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { Fade } from 'react-reveal';
// import { IconArrowLeft } from '@tabler/icons-react';
import { IMaskInput } from 'react-imask';
import ButtonComponent from '@/components/Button';
import Markdown from '@/components/Markdown';

//import Image from 'next/image';

const convertNumbers2English = function (string) {
  return string
    .replace(/[\u0660-\u0669]/g, function (c) {
      return c.charCodeAt(0) - 0x0660;
    })
    .replace(/[\u06f0-\u06f9]/g, function (c) {
      return c.charCodeAt(0) - 0x06f0;
    });
};

export default function RequestDemo({ source, bgColor, pLayout, py, demo }) {
  const { dispatch } = useContext(ModalWithReducer);
  //const [notif, setNotif] = useState(null);

  const id = useId();
  //const demo = content.section_request_demo;

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      companyName: '',
      companyEmail: '',
      contactNumber: '',
      industry: '',
      country: '',
      monthlyActiveUser: '',
      hearAbout: '',
      tellUsMore: '',
      //agree: false,

      validateInputOnChange: true,
    },
    // functions will be used to validate values at corresponding key
    validate: {
      firstName: (value) =>
        value.length < 2 ? `${demo?.first_name?.validate}` : null,
      lastName: (value) =>
        value.length < 2 ? `${demo?.last_name?.validate}` : null,
      jobTitle: (value) =>
        value.length < 2 ? `${demo?.job_title?.validate}` : null,
      companyName: (value) =>
        value.length < 1 ? `${demo?.company_name?.validate}` : null,
      companyEmail: (value) => {
        if (!value) return null;
        if (
          !value
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
        ) {
          return demo?.company_email?.validate;
        }

        return null;
      },
      contactNumber: (value) => {
        return value.length !== 11 ||
          convertNumbers2English(value).match(/[^$,.\d]/)
          ? demo?.contact_number?.validate
          : null;
      },
      industry: isNotEmpty(`${demo?.dropdown?.validate}`),
    },
  });

  const smallerScreen = useMediaQuery('(max-width: 600px)');

  const handleSubmit = (values) => {
    const userId = convertNumbers2English(values.contactNumber).replace(0, '');
    const userDetails = {
      userId: userId,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.companyEmail,
      phone: `+98${userId}`,
      //country: values.country,
      company: values.companyName,
      // smsOptIn: values.agree,
      // emailOptIn: values.agree,
      // pushOptIn: values.agree,
      // webPushOptIn: values.agree,
      attributes: {
        monthlyActiveUser: values.monthlyActiveUser,
        industry: values.industry,
        //tellUsMore: values.tellUsMore,
        jobTitle: values.jobTitle,
        hearAbout: values.hearAbout,
        affilio: true,
      },
    };

    window?.Intk('login', userDetails);
    window?.Intk('sendEvent', {
      eventName: 'demo-request',
      eventData: {
        'site-position': source,
        source: 'affilio',
      },
    });
    dispatch({ type: 'SUCCESS' });

    form.reset();
  };

  return (
    <Box
      bg={bgColor ?? 'gray.0'}
      pos="relative"
      py={py ?? '70px'}
      sx={{
        zIndex: '3',
        '@media (max-width: 900px)': {
          paddingTop: '0',
        },
      }}
    >
      {/* <Image src="/assets/images/Bubble-Demo.svg" alt='bubble-usermost' display={displayBg} width={258} height={687} pos='absolute' right='0' bottom='0px' /> */}
      <Layout py={pLayout}>
        <Grid.Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          py={smallerScreen ? '20px' : '48px'}
          px="xl"
        >
          <Fade right>
            <Title order={2} fz="36px" color="primary.4">
              {demo?.title}
            </Title>
            <Text color="primary.4" mt="xl">
              <Markdown text={demo?.desc} />
            </Text>
          </Fade>
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box pos="relative">
            <form
              onSubmit={form.onSubmit(handleSubmit)}
              // onSubmit={(e)=>{
              //     e.preventDefault();
              //     form.validate()
              //     console.log(form.validate.'form.validate')
              //     // form.onSubmit((values)=>(values))
              //     console.log("original values", form)
              //     handleSubmit(form.values)

              // }
              // }
              // onSubmit={form.onSubmit((values) => { setSubmittedValues(values)})}
            >
              <Grid gutter="xs">
                <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextInput
                    mb="xl"
                    label={demo?.first_name?.title}
                    {...form.getInputProps('firstName')}
                    withAsterisk
                  />
                  <TextInput
                    mb="xl"
                    label={demo?.last_name?.title}
                    {...form.getInputProps('lastName')}
                    withAsterisk
                  />
                  <TextInput
                    mb="xl"
                    label={demo?.job_title?.title}
                    {...form.getInputProps('jobTitle')}
                    withAsterisk
                  />
                  <TextInput
                    mb="xl"
                    label={demo?.company_name?.title}
                    {...form.getInputProps('companyName')}
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  {/* <NumberInput
                                        mb='xl'
                                        label="Contact Number"
                                        placeholder=""
                                        withAsterisk
                                        // min={5}
                                        // max={15}
                                        {...form.getInputProps('contactNumber')}

                                    /> */}
                  <Input.Wrapper
                    id={id}
                    label={demo?.contact_number?.title}
                    error={form.getInputProps('contactNumber').error}
                  >
                    <Input
                      dir="ltr"
                      component={IMaskInput}
                      mask="{\0}**********"
                      skipInvalid={false}
                      // required
                      {...form.getInputProps('contactNumber')}
                      id={id}
                    />
                    {/* <PhoneInput
                                            onChange={(value) => setNumber("contactNumber", value)}
                                            name="contactNumber"
                                            specialLabel={""}
                                            value={number}
                                            country={"ca"}
                                            {...form.getInputProps('contactNumber')}

                                            required

                                        /> */}
                  </Input.Wrapper>
                  <Select
                    mt="xl"
                    data={demo?.industry?.option}
                    label={demo?.industry?.title}
                    defaultValue="E-commerce"
                    {...form.getInputProps('industry')}
                    withAsterisk
                    placeholder={demo?.dropdown?.placeholder}
                  />
                  {/* <Select
                                        mt="xl"
                                        data={options}
                                        label={demo.country}
                                        searchable
                                        {...form.getInputProps('country')}

                                    /> */}
                  <Select
                    mt="xl"
                    data={demo?.active_user?.option}
                    label={demo?.active_user?.title}
                    defaultValue="Up Top 10k"
                    {...form.getInputProps('monthlyActiveUser')}
                    placeholder={demo?.dropdown?.placeholder}
                  />
                  <TextInput
                    mt="xl"
                    label={demo?.company_email?.title}
                    placeholder={demo?.company_email?.placeholder}
                    {...form.getInputProps('companyEmail')}
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  {/* <Textarea
                                        label={demo.tell_us_more}
                                        autosize
                                        minRows={1}
                                        {...form.getInputProps('tellUsMore')}

                                    /> */}
                  <Select
                    px="0"
                    data={demo?.hear_about?.option}
                    label={demo?.hear_about?.title}
                    {...form.getInputProps('hearAbout')}
                    placeholder={demo?.dropdown?.placeholder}
                  />
                </Grid.Col>
                {/* <Grid.Col xs={12} my='32px'>
                                    <Checkbox
                                        label={demo?.agree}
                                        // checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
                                        {...form.getInputProps('agree', { type: 'checkbox' })}

                                    />
                                </Grid.Col> */}
                <Grid.Col xs={12} py="30px">
                  <ButtonComponent
                    className="cursor-pointer"
                    type="secondaryArrow"
                    actionType="submit"
                    title={demo?.submit}
                  />
                </Grid.Col>
              </Grid>
            </form>
          </Box>
        </Grid.Col>
        {/* {notif && <Notification icon={<IconCheck size="1.1rem" />} color="teal" title="Teal notification">
                    This is teal notification with icon
                </Notification>} */}
      </Layout>
    </Box>
  );
}
