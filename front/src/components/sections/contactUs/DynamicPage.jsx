import { Container } from '@mantine/core';
import RequestDemo from '@/components/RequestDemo';
import { NextSeo } from 'next-seo';
import React from 'react';
import ContactInfo from '@/components/ContactInfo';

export default function DynamicPage({ contactForm, content,config }) {
  return (
    <>
      <NextSeo
        title="تماس با ما"
        description=""
        openGraph={{
          url: 'https://affilio.ir/pages/contact-us',
          title: 'تماس با ما',
          description: '',
          images: [
            {
              url: '',
              width: 600,
              height: 800,
              alt: '',
              type: 'image/png',
            },
          ],
        }}
      />
      <Container fluid className="w-100" size="xl" p="0">
        <ContactInfo content={content} />
        {contactForm?.map((section, idx) => (
          <React.Fragment key={idx}>
            {section.type === 'contact-form' ? (
              <>
                <RequestDemo
                  demo={section?.data}
                  form_title={content?.form_title}
                  form_description={content?.form_description}
                  source="contact-us"
                  py="40px"
                />
              </>
            ) : null}
          </React.Fragment>
        ))}
      </Container>
    </>
  );
}
