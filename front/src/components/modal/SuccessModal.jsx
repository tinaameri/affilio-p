import { Container, Title, Text, Button, Box, Modal } from '@mantine/core';
import { ModalWithReducer } from '@/context/ModalProvider';
import { useContext } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { pages } from 'public/assets/contentJson';
import { textSplitter } from '@/utils/helpers';

export default function SuccessModal() {
  const submission = pages?.contact_us?.sections[1]?.data?.submission_modal;
  const { modalOpenState, dispatch } = useContext(ModalWithReducer);
  const handleClose = () => {
    dispatch({ type: 'Close' });
  };
  return (
    <Modal
      opened={modalOpenState.successModal}
      onClose={handleClose}
      centered
      size="xl"
      radius="25px"
    >
      <Container size="md" pb="xl">
        <Box align="center">
          <DotLottiePlayer
            autoplay
            loop
            mode="normal"
            src="/assets/animations/Submission Complete.lottie"
            style={{ height: '200px', width: '200px', zIndex: '999' }}
          ></DotLottiePlayer>
          <Title order={3} color="success.1">
            {submission?.header}
          </Title>
          <Box my="xl">
            <Text color="primary.1" fw="700">
              {textSplitter({
                text: submission?.description,
                style: { pt: 'md' },
              })}
            </Text>
          </Box>
          <Button bg="secondary.0" color="secondary.2" onClick={handleClose}>
            {submission?.ok}
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}
