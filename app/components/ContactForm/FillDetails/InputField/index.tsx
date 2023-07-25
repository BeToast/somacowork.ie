import { TextField } from "@mui/material";

const InputField: React.FC<{
  className?: string,
  id: string,
  placeholder: string,
  regex?: string,
}> = ({
  className,
  id,
  placeholder,
  regex,
}) => {
  return(<>
    <TextField
      className={"" + className}
      helperText=""
      id={id}
      label={placeholder}
      sx={{ input: { color: 'orange' } }}
      variant="standard"
    />
  </>);
}

export default InputField;
// https://viclafouch.github.io/mui-tel-input/docs/getting-started/#install