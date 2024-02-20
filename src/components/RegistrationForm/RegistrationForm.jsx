import React from 'react'

// component
const RegistrationForm = () => {
  return (
    <>


    <logo className="flex m-auto w-fit pt-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3l_jfZrRtMnqlG49kl7igeQYww0CJ4BseVlo4rOEQxQIAbOLvBnMwdWCSrLNrgkT7YA&usqp=CAU" className="h-24 w-48 rounded-3xl" alt="error" />  <strong className='pt-11 pl-6 font-extrabold '>MediSoft</strong>
    </logo>

    <nav className="m-auto w-fit pt-6 text-cyan-400">
        <div>
            <h1 className="text-2xl">Create Doctor Account </h1>
            <h2> Already have an Account? <span className="font-bold">Sign IN</span> </h2> 
        </div> 

        <div className="mt-4  bg-sky-400 text-black  rounded-tl-xl rounded-tr-xl">
            <ul className="flex flex-rowdown justify-center space-x-8" >
                <li>Patient</li>
                <li>Doctor</li>
                <li>Admin</li>
            </ul>
        </div>

    </nav>

    <form className=" flex flex-col justify-center items-center border-r-2 bg-sky-100 h-full pt-8">
        <div className="gap-2 pb-6 mb-8 flex flex-col rounded-lg bg-sky-200">

            {/* <div>
                <img src='medisoft2.png' alt='error' />  <strong>MediSoft</strong>
                <h3>Create Doctor Account </h3>
            </div>
            <div>
                Already have an Account? <strong>Sign In</strong>
            </div>             */}

            {/* <div className='bg-sky-400 '>
                <ul className='flex flex-rowdown space-x-5' >
                    <li>Patient</li>
                    <li>Doctor</li>
                    <li>Admin</li>
                </ul>
            </div> */}

            <div className="pl-6 pt-2">
                <label for="name" className="text-sky-700"> Name </label> 
                <input type='text' id="name" className="rounded-lg ml-4" placeholder='Dr. Dede' required></input>
            </div>
            <div className="pl-6 pt-2">
                <label for="phone" className="text-sky-700"> Phone </label> 
                <input type='number' id="phone_number" className="rounded-lg ml-4" placeholder='7490909090' required></input>
            </div>
            <div className="pl-6 pt-2">
                <label for="registration" className="text-sky-700"> Registration # </label> 
                <input type='text' id="rgt" className="rounded-lg ml-4" placeholder='GEG123ABC123' required></input>
            </div>
            <div className="pl-6 pt-2">
                <label for="qualification" className="text-sky-700"> Qualification </label> 
                <input type='text' id="degree"className="rounded-lg ml-4" placeholder='MBBS, MS' required></input>
            </div>
            <div className="pl-6 pt-2">
                <label for="gender" className="text-sky-700"> Gender </label> 
                <select className="rounded-lg ml-4" name="gender" > 
                    <option value="male"> Male </option>  
                    <option value="female"> Female </option> 
                    <option value="other"> Other </option>
                </select>
            </div>
            <div className="pl-6 pt-2">
                <label for="primary_clinic_address" className="text-sky-700">Primary Clinic Address</label>
                <input type='textarea' className="rounded-lg ml-4" placeholder='123 Rd, Hinjewadi Pune' required></input>
            </div>
            <div className="pl-6 pt-2">
                <label for="email" className="text-sky-700"> Email Address </label>
                <input type="email" className="rounded-lg ml-4" id="email" placeholder='john.doe@gmail.com' required />
            </div>
            <div className="pl-6 pt-2">
                <label for="password" className="text-sky-700"> Password </label>
                <input type="password" className="rounded-lg ml-4" id="password" placeholder='********' required />
            </div>
            <div className="pl-6 pt-2">
                <label for="confirm_password" className="text-sky-700"> Confirm Password </label>
                <input type="password" className="rounded-lg ml-4" id="confirm_password" placeholder='********' required />
            </div>

            <button type="submit" className="text-white bg-cyan-400 text-center rounded-lg w-32 pt-1 pb-1 ml-4 mt-2"> Submit </button>

        </div>

    </form>



    </>
  )
}

export default RegistrationForm
