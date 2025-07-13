

function Logout() {
  localStorage.removeItem('token');
  navigate('/');
  return (
    <div>Logout Successful</div>
  )
}

export default Logout
