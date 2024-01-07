import { Container, Accordion, Box, Text, createStyles } from '@mantine/core';
import Link from 'next/link';
import { textSplitter } from '@/utils/helpers.js'
const useStyles = createStyles((theme) => ({

    item: {
        // // backgroundColor: theme.colors.primary[7],
        // border:'unset',

        // borderTop: `1px solid ${theme.colors.primary[3]}` ,
        // '&:nth-last-of-type(1) ':{
        //     borderBottom: `1px solid ${theme.colors.primary[3]}`,
        // }
        // // ...theme.fn.hover({
        // //     backgroundColor: theme.colors.primary[7],
        // //     color: 'white'

        // // }),
        borderBottom: `1px solid ${theme.colors.primary[2]}`,

    },
    label: {
        color: theme.colors.primary[1],

        fontWeight: 700,
        fontSize: '18px',
        [theme.fn.largerThan('md')]: {

            fontSize: '20px',


        },

    },
    content: {
        color: theme.colors.primary[1],
        fontSize: '18px',

        fontWeight: 500,
        padding: '0 0px 1rem 1rem',
        [theme.fn.smallerThan('md')]: {
            fontSize: '16px',
            padding: '0 15px 1rem 1rem',


        },


    }, panel: {
        color: theme.colors.primary[1],
        fontSize: '18px',
        fontWeight: 500,

    },
    chevron: {
        color: theme.colors.primary[1]
    },
    control: {
        paddingRight: '0'

    }



}));
export default function AccordionComponent({ content, titleColor, descColor }) {

    const { classes } = useStyles();

    return (
        <>



            <Accordion
                defaultValue={content[0].title}
                classNames={{
                    item: classes.item,
                    content: classes.content,
                    panel: classes.panel,
                    chevron: classes.chevron,
                    label: classes.label
                }}

            >
                {content?.slice(0, 1).map((item, index) => (
                    <Accordion.Item key={index}
                        value={item.title}>
                        <Accordion.Control>
                            {item.title}
                        </Accordion.Control>
                        <Accordion.Panel >
                            {textSplitter({ text: item.desc, style: { pt: "xl" } })}
                        </Accordion.Panel>

                    </Accordion.Item>
                ))}
                {content?.slice(1).map((item, index) => (
                    <Accordion.Item key={index}
                        value={item.title}>
                        <Accordion.Control>
                            {item.title}
                        </Accordion.Control>
                        <Accordion.Panel >

                            {textSplitter({ text: item.desc, style: { pt: "xl" } })}
                        </Accordion.Panel>

                    </Accordion.Item>
                ))}



            </Accordion>




        </>

    )
}
