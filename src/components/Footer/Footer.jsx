import {
  Box,
  Text,
  Flex,
  Divider,
  IconButton,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { iconSocial, footerBox, footerDivider, footerLinks } from 'theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Divider sx={footerDivider} />
      <Box as="footer" sx={footerBox}>
        <Text>&copy; {currentYear} PhoneBook. Created by Svitlana Buivol</Text>
        <Flex sx={footerLinks}>
          Social links:
          <LinkBox>
            <LinkOverlay isExternal href="https://github.com/SvetlanaBuivol">
              <IconButton
                sx={iconSocial}
                size="xs"
                isRound={true}
                icon={<AiFillGithub />}
              />
            </LinkOverlay>
          </LinkBox>
          <LinkBox>
            <LinkOverlay
              isExternal
              href="https://www.linkedin.com/in/svitlanabuivol/"
            >
              <IconButton
                sx={iconSocial}
                size="xs"
                isRound={true}
                icon={<AiFillLinkedin />}
                href="https://www.linkedin.com/in/svitlanabuivol/"
              />
            </LinkOverlay>
          </LinkBox>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
