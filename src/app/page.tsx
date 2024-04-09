"use client"

import React from 'react'
const page = () => {
  return (
    <>
   <div className='mainContainer'>
     <h1>Coupon System App</h1>
        <div className="couponBox">
          <nav>
            <div><h1>Coupon System</h1></div>
            <div><button className='addCouponBtn'>Add</button> <button className='deleteCouponBtn'>Delete All</button></div>
          </nav>
        </div>


<div className="dataDisplayContainer">
  <table>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Code</th>
    <th>Day</th>
    <th>Expired At</th>
    <th>Actions</th>
    <th></th>
  </tr>
  <tr>
    <td>1</td>
    <td>James</td>
    <td>123</td>
    <td>Monday</td>
    <td>09/04/2024</td>
    <td><button className='UpdateCouponBtn'>Update</button> </td>
    <td><button className='deleteCouponBtn'>Delete</button></td>

  </tr>
  <tr>
    <td>2</td>
    <td>David</td>
    <td>543</td>
    <td>Tuesday</td>
    <td>09/04/2024</td>
    <td><button className='UpdateCouponBtn'>Update</button> </td>
    <td><button className='deleteCouponBtn'>Delete</button></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Anson</td>
    <td>234</td>
    <td>Monday</td>
    <td>09/04/2024</td>
    <td><button className='UpdateCouponBtn'>Update</button> </td>
    <td><button className='deleteCouponBtn'>Delete</button></td>
    </tr>
  </table>
 </div>
</div>

     <div className='couponAddForm'>
     <h2>Add Coupon</h2>
      <form action="" method=''>
       <label>Name:</label>
       <input type="text" placeholder='enter name' /> <br />
       <label>Code:</label>
       <input type="text" placeholder='enter code' /> <br />
       <label>Day:</label>
        <input type="date" placeholder='enter day' />
        <br />
        <button className='formSubmitBtn'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default page