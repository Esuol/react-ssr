import React, { useEffect } from 'react';

export default (DecoratedComponent, styles) => {
  return (props) => {
    useEffect(() => {
      // 获取css内容
      props.staticContext?.css.push(styles._getCss());
    }, [])

    return <DecoratedComponent {...props} />
  }
}