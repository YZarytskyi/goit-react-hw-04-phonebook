import { Input, Label } from "./Filter.styled";

interface FilterProp {
  filter: string;
  filterContacts: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter: React.FC<FilterProp> = ({ filter, filterContacts }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={filterContacts} />
    </Label>
  );
};

export default Filter;
