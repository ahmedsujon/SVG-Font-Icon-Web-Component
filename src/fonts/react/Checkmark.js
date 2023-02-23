import React from 'react';
export const Checkmark = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`bfs ${props.className ? props.className : ''}`}><path d="M60.6 13.4c-.9-.9-2.3-.9-3.2 0l-34 33L6.6 29.9c-.9-.9-2.3-.8-3.2 0-.9.9-.8 2.3 0 3.2l17.7 17.2c.6.6 1.4.9 2.3.9s1.6-.3 2.3-.9l34.9-33.9c.9-.7.9-2.1 0-3z" fillRule="evenodd" /></svg>
);
