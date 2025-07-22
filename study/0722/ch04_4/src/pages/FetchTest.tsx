import { useState, useCallback, useEffect } from "react";
import { useToggle } from "../hooks";
import { Title, Avatar, Icon } from "../components";
import { Button } from "../theme/daisyui";
import * as D from '../data'


export default function FetchTest() {
    const [loading, toggleLoading] = useToggle()
    const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null)
    const [error, setError] = useState<Error | null>(null)

    const getRandomUser = useCallback(() => {
        toggleLoading()
        D.fetchRandomUser().then(setRandomUser).catch(setError).finally(toggleLoading)
    }, [toggleLoading])
    useEffect(getRandomUser, [getRandomUser])

    return (
        <section className="">
            <Title>FetchTest</Title>
            <div className="">
                <Button className="">
                    <Icon name="get_app"/>
                    <span>get random user</span>
                </Button>
            </div>
            {loading && (

            )}
            {error && (

            )}
            {randomUser && (
                
            )}
        </section>
    )

}