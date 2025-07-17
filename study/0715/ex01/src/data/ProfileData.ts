export type ProfileData= {
    name: string
    position: string
    description: string
    image: string,
}

export const createData = (
    name: string,
    position: string,
    description: string,
    image: string,
): ProfileData => (
    {name, position, description, image, }
)

export const createMyData = () => {
    return createData (
        "chiro-J",
        "FrontEnd Developer",
        "React와 TailwindCSS를 배우는 중입니다.", 
        "https://avatars.githubusercontent.com/u/103028942?v=4"
    )
}