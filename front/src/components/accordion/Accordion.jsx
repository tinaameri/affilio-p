import { Accordion } from '@mantine/core';
import Markdown from '../Markdown';
import classes from '@/components/accordion/Accordion.module.scss';
export default function AccordionComponent({
  content,
  onAccordionItemClick,
  type,
}) {
  return (
    <>
      <Accordion
        defaultValue={content[0]?.title}
        classNames={{
          item: classes.item,
          content: classes.content,
          panel: classes.panel,
          chevron: classes.chevron,
          label: classes.label,
          grayBg: classes.grayBg,
        }}
      >
        {content?.slice(0, 1).map((item, index) => (
          <Accordion.Item
            key={index}
            value={item?.title}
            className={type !== 'accordionWithImage' && classes.grayBg}
          >
            {type === 'accordionWithImage' ? (
              <Accordion.Control onClick={() => onAccordionItemClick(item)}>
                {item?.title}
              </Accordion.Control>
            ) : (
              <Accordion.Control>{item?.title}</Accordion.Control>
            )}
            <Accordion.Panel>
              <Markdown text={item?.description} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
        {content?.slice(1).map((item, index) => (
          <Accordion.Item key={index} value={item?.title}>
            {type === 'accordionWithImage' ? (
              <Accordion.Control onClick={() => onAccordionItemClick(item)}>
                {item?.title}
              </Accordion.Control>
            ) : (
              <Accordion.Control>{item?.title}</Accordion.Control>
            )}
            <Accordion.Panel>
              <Markdown text={item?.description} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}
