import React, { useContext } from 'react';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components'
import {shade} from 'polished'

import { Container } from './styles';

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container>
      <h1>Header</h1>

      <Switch 
        onChange={() => {}}
        checked={false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
