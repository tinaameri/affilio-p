import { useContext } from 'react';
import { ModalWithReducer } from '@/context/ModalProvider';
import { Modal } from '@mantine/core';
import RequestDemo from '@/components/RequestDemo';
// import Bubble from '@/components/modal/Bubble'
export default function RequestDemoModal() {
  const { modalOpenState, dispatch } = useContext(ModalWithReducer);

  return (
    <>
      <Modal
        dir="rtl"
        className="demo"
        opened={modalOpenState.demoModalOpen}
        title=""
        size="auto"
        radius="lg"
        onClose={() => dispatch({ type: 'Close' })}
        centered
      >
        <RequestDemo
          source="modal"
          displayBg="none"
          pLayout="0"
          py="0"
          bgColor="white"
        />
        {/* <Bubble/> */}
      </Modal>
    </>
  );
}
