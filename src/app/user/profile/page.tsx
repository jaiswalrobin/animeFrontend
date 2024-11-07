'use client';


import LoadingIcon from '@/components/icons/Loading';
import useAuthStore from '@/stores/authStore';

export default function UserProfile() {
  const {user, _hasHydrated} = useAuthStore();
  
    

  return (
    <div>{_hasHydrated ? 
        <div>
            <h1>Hey {user?.firstName} {user?.lastName}</h1>
            <div>Welcome to AnimePix</div>
        </div> : <div><LoadingIcon/> </div>
    }</div>
  );
}
