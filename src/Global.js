import styled from 'styled-components'
import { ReactComponent as Clock } from './static/clock-circular-outline.svg'
import { ReactComponent as Address } from './static/address.svg'
import { ReactComponent as Price } from './static/tag.svg'
import { ReactComponent as Compass } from './static/compass.svg'
import { ReactComponent as Like } from './static/like.svg'
import { ReactComponent as User } from './static/user.svg'
import { ReactComponent as Geo } from './static/geo.png'
import { ReactComponent as Restaurant } from './static/restaurant.png'
import { ReactComponent as Success } from './static/success.svg'
import { ReactComponent as Shop } from './static/shop.svg'
import { ReactComponent as Arrow } from './static/arrow.svg'

const Button = styled.button`
  border: none;
  background: #0000cd;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 7px 14px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`

const Input = styled.input`
  font-family: inherit;
  font-size: 14px;
  text-align: center;
  padding: 7px 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 100%;

  &&:focus {
    outline: 1px solid rgba(255, 150, 82, 1);
  }
`

const Range = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background-transparent;


  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    background:
      linear-gradient(to right,
        rgba(255,150,82,.8) 0%,
        rgba(255,150,82,1) 100%);
    margin-top: -8px;
  }

  &&::-moz-range-thumb {
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    background:
      linear-gradient(to right,
        rgba(255,150,82,.8) 0%,
        rgba(255,150,82,1) 100%);
  }

  &&::-ms-thumb {
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    background:
      linear-gradient(to right,
        rgba(255,150,82,.8) 0%,
        rgba(255,150,82,1) 100%);
  }

  &&::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: rgba(0,0,0,.1);
    border-radius: 3px;
  }

  &&::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: rgba(0,0,0,.1);
    border-radius: 3px;
  }

  &&::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: rgba(0,0,0,.1);
    border-radius: 3px;
  }
`

const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 150, 82, 1);
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 0;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

  &&:checked {
    background: linear-gradient(
      to right,
      rgba(255, 150, 82, 0.8) 0%,
      rgba(255, 150, 82, 1) 100%
    );
    border: none;
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;

  ${Checkbox} {
    margin-right: 10px;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => (props.small ? '5px 10px' : '10px')};
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  svg {
    height: 16px;
    width: auto;
  }
`

const Section = styled.div`
  padding: 50px 0;
`

const P = styled.p`
  font-size: 20px;
`

const Container = styled.div`
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`

const Title = styled.h1`
  text-align: ${props => props.align || 'left'};
`
const ModalTitle = styled.h1`
  margin-top: 0;
  text-align: center;
  font-size: 25px;
`

const TableWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`

const Table = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid rgba(255, 150, 82, 1);
  padding: 10px;
`

const Th = styled.th`
  border-bottom: 1px solid rgba(255, 150, 82, 1);
`
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 150, 82, 1);
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  text-transform: uppercase;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  color: rgba(255, 150, 82, 1);
  background: linear-gradient(
    to right,
    rgba(255, 150, 82, 0.8) 0%,
    rgba(255, 150, 82, 1) 100%
  );
  color: #fff;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-in;
  }
`
const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  min-width: 350px;
  max-width: 370px;
  position: relative;

  @media (max-width: 640px) {
    width: 100%;
    min-width: unset;
    max-width: unset;
  }
`

const RoundButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 150, 82, 1);
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  text-transform: uppercase;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  color: rgba(255, 150, 82, 1);
  background: linear-gradient(
    to right,
    rgba(255, 150, 82, 0.8) 0%,
    rgba(255, 150, 82, 1) 100%
  );
  color: #fff;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-in;
  }
`
const Select = styled.select`
  font: inherit;
  font-size: 14px;
  text-align: center;
  padding: 6px 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 100%;

  &:focus {
    outline: 1px solid rgba(255, 150, 82, 1);
  }
`
const Textarea = styled.textarea`
  font: inherit;
  font-size: 14px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 6px 14px;
`

const AddBlock = styled.div`
  text-decoration: none;
  background-color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 10px;
  min-height: 200px;
  padding: 10px;
  cursor: pointer;

  width: calc((100% - 60px) / 3);

  @media (max-width: 796px) {
    width: calc((100% - 40px) / 2);
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`

const AddBlockInner = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dashed rgba(255, 150, 82, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 80px;
  color: rgba(255, 150, 82, 1);
`

const LoginForm = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  padding: 50px 0;
`

const LoginLabel = styled.label`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`

export {
  Button,
  Input,
  Range,
  Checkbox,
  Label,
  Row,
  Clock,
  Address,
  Price,
  Compass,
  Like,
  User,
  Icon,
  Restaurant,
  Geo,
  Section,
  P,
  Container,
  Title,
  ModalTitle,
  TableWrapper,
  Table,
  Th,
  Modal,
  ModalCloseButton,
  ModalWrapper,
  Success,
  RoundButton,
  Select,
  Textarea,
  AddBlock,
  AddBlockInner,
  Shop,
  Arrow,
  LoginForm,
  LoginLabel
}
