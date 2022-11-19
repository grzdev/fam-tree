import React from 'react'
import { Box, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'

const children = () => {
  return (
    <Box
        w="7rem"
        h="2.6rem"
        bg="#395B64"
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Menu>
            <MenuButton color="white">
                Children
            </MenuButton>
            
            <MenuList>
                <MenuItem>Seyi</MenuItem>
                <MenuItem>Bisi</MenuItem>
                <MenuItem>Gbenga</MenuItem>
                <MenuItem>Damilola</MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default children