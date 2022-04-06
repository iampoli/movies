import "./nav.scss"

export default function Nav({value,setValue}) {
    
    const handleOnChange =(e)=>{
        setValue(e.target.value);
    }

  return (
    <div className='nav'>
        <p>netfilm</p>
        <input  type="text" placeholder='Search' value={value} onChange={handleOnChange}/>
    </div>
  )
}
