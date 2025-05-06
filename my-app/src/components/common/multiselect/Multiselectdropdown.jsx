import * as React from 'react';
import useAutocomplete from '@mui/material/useAutocomplete';
import { styled } from '@mui/material/styles';
import { IoIosCloseCircle } from "react-icons/io";
const Root = styled('div')`
  font-size: 14px;
`;

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
  font-weight: 600;
`;

const InputWrapper = styled('div')(({ theme }) => ({
    border: '1px solid #d9d9d9',
  
    borderRadius: '8px',
    padding: '4px 6px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    minHeight: '40px',
    '&:hover': {
      borderColor: 'none',
    },
    '& input': {
      flex: 1,
      gap:3,
      minWidth: '60px',
      border: 0,
      outline: 0,
      fontSize: '14px',
      width: 'auto',
    },
  }));
  
  

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <IoIosCloseCircle onClick={onDelete} color='#4B5A5A'/>
    </div>
  );
}



const StyledTag = styled(Tag)`
  display: flex;
  align-items: center;
  height: 28px;
  margin: 2px;
  background-color: #f0f0f0;
  border-radius: 16px;
  padding: 0 8px;
  font-size: 13px;
  white-space: nowrap;
  & svg {
    font-size: 16px;
    cursor: pointer;
    margin-left: 4px;
  }
`;


const Listbox = styled('ul')`
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.15);
  z-index: 1;
  & li {
    padding: 6px 12px;
   width:100%;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
  }

`;

export const Multiselectdropdown = () => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.Quantity,
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Quantity*</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => (
            <StyledTag
              key={index}
              label={option.Quantity}
              {...getTagProps({ index })}
            />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })} key={index}>
              <span>{option.Quantity}</span>
            </li>
          ))}
        </Listbox>
      )}
    </Root>
  );
};

const top100Films = [
  { Quantity: '250' },
  { Quantity: '500' },
  { Quantity: '700' },
  { Quantity: '900' },
  { Quantity: '1000' },
];
