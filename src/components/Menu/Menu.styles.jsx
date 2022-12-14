import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const MenuList = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -1px 10px ${(props) => props.theme.color.light_200};
  background-color: ${(props) => props.theme.color.white};

  li {
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.dark_100};

    svg {
      margin-bottom: 0.5rem;
    }
  }
`;

const Bedge = styled.span`
  position: absolute;
  top: 5px;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${(props) => props.theme.color.error_300};
  border-radius: 50%;
`;

export { MenuWrapper, MenuList, Bedge };
