import Button from "./Button"

const header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd ? 'Red' : 'Green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd}
            />
        </header>
    )
}

export default header
