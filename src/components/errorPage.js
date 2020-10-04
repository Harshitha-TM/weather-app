import React from 'react';  
import ErrorIcon from '../errorpuppy.png';

function ErrorPage()  
{ 
return ( 
<div className="errorSection">
<h4>Sorry, Please try again.</h4> 
<img src={ErrorIcon}  alt="" width="120px" height="130px"></img>
</div>
); 
} 
  
export default ErrorPage;