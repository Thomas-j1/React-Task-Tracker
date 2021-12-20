import Button from "./Button"

const header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick = {onClick}
            />
        </header>
    )
}

export default header
