import {Center, Text, HStack, Icon} from '@chakra-ui/react';
import {SiNotion, SiGithub} from 'react-icons/si';

import {NOTION_DATABASE_URL} from '@/constants';

const Footer = () => (
	<Center as="footer" flexDirection="column" mt={12}>
		<Text
			fontSize="xs"
			color="gray.600"
			transitionDuration="200ms"
			_hover={{color: 'gray.900'}}
			mb={4}
		>
			A URL shortener hosted for personal use only.
		</Text>
		<HStack spacing={4}>
			<a href="https://github.com/younho9/notion-url-shortener">
				<Icon
					as={SiGithub}
					width={5}
					height={5}
					color="gray.500"
					transitionDuration="200ms"
					_hover={{color: 'gray.900'}}
				/>
			</a>
		</HStack>
	</Center>
);

export default Footer;
