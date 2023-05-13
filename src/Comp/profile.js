import React from 'react'

function Profile() {
  return (
    <div className='comp-body-container border'>
        <h3>Profile</h3>
        <div className="change-password d-flex flex-column">
            <div className="old">
            <label htmlFor="">Old password</label>
                <input type="text" name="" id="" />
            </div>
            <div className="old">
            <label htmlFor="">New password</label>
                <input type="text" name="" id="" />
            </div>
            <div className="old">
            <label htmlFor="">Repeat new password</label>
                <input type="text" name="" id="" />
            </div>
        </div>
    </div>
  )
}

export default Profile