import React, { useEffect } from 'react';

const NotFound: React.FC = (props) => {
  useEffect(() => {
    const { staticContext } = props;
  }, [])

  return (
    <div>404, sorry, page not found</div>
  )
}

export default NotFound;