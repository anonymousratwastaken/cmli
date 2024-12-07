interface Props {
    repeatTimes: number
}

const Repeated = ({ repeatTimes }: Props) => {
    return (
        <p className="text-sm bg-main text-secondaryBlack rounded-base p-1">Repeated {repeatTimes} times</p>
    )
}

export default Repeated