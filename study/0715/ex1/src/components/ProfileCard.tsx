import { FC } from 'react';
import { ProfileData } from '../data';
import type { MyCardProps } from '../pages';

export type ProfileProps = MyCardProps & {
    
}


export const ProfileCard: FC<ProfileProps> = ({ profile }) => {
    return (
        <div className='flex flex-wrap justify-center bg-white rounded-lg w-50 h-50'>
            <img src="{profile.image}" alt="profile_img" className='justify-center mt-4'/>
            <h2 className="mt-4 text-bold">{profile.name}</h2>
            <p className="justify-center mt-4 text-gray-500">{profile.position}</p>
            <p className="justify-center mt-4 text-gray-500">{profile.description}</p>
        </div>
    )
}
