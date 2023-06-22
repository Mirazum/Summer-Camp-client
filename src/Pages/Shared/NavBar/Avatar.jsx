import  { useContext } from 'react';
import avatarImg from '../../../assets/profile.png'
import { AuthContext } from '../../Providers/AuthProviders';



const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
      
        <>
         <img className='rounded-full' 
        src={user && user.photoURL ? user.photoURL: avatarImg} 
        alt="" 
         height='30' width='30'/>
         <span>{user && user.displayName}</span>
        </>
      
    );
};

export default Avatar;

