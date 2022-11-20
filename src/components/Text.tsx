import { ICustomComponentOptions } from '../WrapperControl/interfaces';
import { WrapperControl } from '../WrapperControl/WrapperControl';


function TextX({ formData, updateValue, options }: ICustomComponentOptions<{path: string}>) {
  return (
    <input type="text" value={formData[options.path]} onChange={(event) => { updateValue(options.path, event.target.value) }} />
  );
}

export const Text = WrapperControl(TextX);