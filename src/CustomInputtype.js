import React from 'react';

const CustomInputType = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
    </div>
  );
});

export default CustomInputType;
