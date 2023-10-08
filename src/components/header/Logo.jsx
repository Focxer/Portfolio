import icon from '../../assets/header-icon.png'

function Logo() {
  return (
    <>
      <div className="flex items-center">
          <img src={icon} alt="Header icon" className="w-10 h-10 mb-2"/>
          <p className="text-xl text-violet-600 font-pacifico font-bold">Bruno Dev</p>
      </div>
    </>
  )
}

export default Logo