
import {

    Text,

    Group,

    Menu,

    Flex,
    Avatar

} from '@mantine/core';
import { useRouter } from 'next/router';
import useUser from '@/lib/useUser';
import { content } from 'public/assets/contentJson';
import { useMediaQuery } from '@mantine/hooks';
export default function LogoutButton() {
    const { user } = useUser()
    const router = useRouter();

    const logout = content?.header?.logout
    const smallerMdScreen = useMediaQuery('(max-width: 64em)');
    const handleLogout = async () => {
        await fetch('/api/logout'); 
        router.push('/users'); 
    };

    const generateUsername = (name) => {
        const nameParts = name?.split(' ');
        if (nameParts?.length >= 2) {
            const firstName = nameParts[0]?.charAt(0)?.toUpperCase();
            const lastName = nameParts[nameParts?.length - 1]?.charAt(0)?.toUpperCase();
            return firstName + lastName;
        } else {
            return 'Invalid';
        }
    }
    return (
        <Group position="center">
            <Menu withArrow sx={{ cursor: 'pointer' }}>
                <Menu.Target >
                    <Flex align='center'>
                        {user?.username && <Text color='primary.1' fw='700' mr='xs' maw={smallerMdScreen ? '148px' : 'auto'} dir='ltr' lineClamp={1}>{user?.username}</Text>}
                        <Avatar color="secondary.1" radius="xl"  >{generateUsername(user?.username)}</Avatar>
                    </Flex>
                </Menu.Target>
                <Menu.Dropdown w='100%'>
                    <Menu.Item component='span' onClick={handleLogout}>
                        {logout}
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>
    );
}
