import { FC } from 'react'
import * as D from '../data'
import { ProfileCard } from '../components'


export type MyCardProps = {
    profile: D.ProfileData;
}


const MyCard: FC<MyCardProps> = ({ profile }) => {
    
    return (
        <div className="flex flex-wrap justify-center">
            <ProfileCard profile={profile}/>
        </div>
    )
}

export default MyCard;