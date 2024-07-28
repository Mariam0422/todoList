import './index.css';

const AuthWrapper = ({coverImg, maxWidth, children}) => {

return (
    <div className='auth_style_wrapper' style={{maxWidth: maxWidth}}>
      <div 
           className='cover_image_container'
           style={{backgroundImage: `url(${coverImg})`}}
      />      
      <div className='form_container' >  
        {children}
      </div>   
   </div>
  
)
}
export default AuthWrapper;