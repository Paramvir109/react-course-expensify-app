import { Link } from 'react-router-dom'
import React from 'react'

 //Link tag causes it to rerender(Not a full page refresh)
 const NotFoundPage = () => (
    <div>
      404! - <Link to="/">Go home</Link>
    </div>
);
  export default NotFoundPage;