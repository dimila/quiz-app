import styled from 'styled-components'
import { ReactComponent as Clock } from './static/clock-circular-outline.svg'
import { ReactComponent as Address } from './static/address.svg'
import { ReactComponent as Price } from './static/tag.svg'
import { ReactComponent as Compass } from './static/compass.svg'
import { ReactComponent as Like } from './static/like.svg'
import { ReactComponent as User } from './static/user.svg'
import { ReactComponent as Geo } from './static/geo.png'
import { ReactComponent as Restaurant } from './static/restaurant.png'
import { ReactComponent as Pfeil } from './static/pfeil.png'

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
  font-size: 20px
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
  border: 1px solid rgba(255,150,82,1);
  padding: 10px;
`

const Th = styled.th`
  border-bottom: 1px solid rgba(255,150,82,1);
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
  Pfeil,
  Section,
  P,
  Container,
  Title,
  ModalTitle,
  TableWrapper,
  Table,
  Th
}
