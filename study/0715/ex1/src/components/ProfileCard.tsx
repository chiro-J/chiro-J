import { FC } from 'react';
import { ProfileData } from '../data';
import type { MyCardProps } from '../pages';

export type ProfileProps = MyCardProps & {
    
}


export const ProfileCard: FC<ProfileProps> = ({ profile }) => {
    return (
        <div className='flex flex-col items-center justify-center overflow-hidden bg-white rounded-lg p-2 w-[500px] h-[500px]'>
            <img src={profile.image} alt="profile_img" className='justify-center mb-4'/>
            <h2 className="mt-2 text-black text-bold">{profile.name}</h2>
            <p className="justify-center mt-2 text-gray-500">{profile.position}</p>
            <p className="justify-center mt-2 text-gray-500">{profile.description}</p>
        </div>
    )
}
