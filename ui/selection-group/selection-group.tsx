import Selection from './selection/selection';

import {
  SelectGroup,
  SelectionTitle,
  Selections,
} from './selection-group.styles';

const SelectionGroup = ({
  name,
  stock,
  options,
}: {
  name: string;
  stock?: number;
  options: {
    _id?: string;
    name: string;
    stock?: number;
    productId?: string;
    current?: boolean;
  }[];
  urlSlug?: string;
}) => {
  const currentOption = options.find((option) => option.current === true);
  return (
    <SelectGroup>
      <SelectionTitle>
        {name}: {currentOption && currentOption.name}
      </SelectionTitle>
      <Selections>
        {options.map((option, index) => (
          <Selection key={index} option={option} />
        ))}
      </Selections>
    </SelectGroup>
  );
};

export default SelectionGroup;
