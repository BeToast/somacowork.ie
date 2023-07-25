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
  // const styles = theme => ({
  //   multilineColor:{
  //       color:'red'
  //   }
  // });

  return(<>
    <TextField
      className={"" + className}
      helperText=""
      id={id}
      label={placeholder}
      variant="standard"
      color="warning"
      // InputProps={{ className: "orange"}}
    />
  </>);
}

export default InputField;
// https://viclafouch.github.io/mui-tel-input/docs/getting-started/#install