import React from 'react'

// component
const RegistrationForm = () => {
  return (
    <>


    <logo className="flex m-auto w-fit pt-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3l_jfZrRtMnqlG49kl7igeQYww0CJ4BseVlo4rOEQxQIAbOLvBnMwdWCSrLNrgkT7YA&usqp=CAU" className="h-24 w-48 rounded-3xl shadow-lg" alt="error" />  <span className='pt-11 pl-6 font-extrabold '>MediSoft</span>
    </logo>

    <nav className="m-auto w-[325px] pt-6 text-cyan-500">
        <div>
            <h1 className="text-3xl">Create Doctor Account </h1>
            <h2 className='text-xl'> Already have an Account? <span className="font-bold">Sign IN</span> </h2> 
        </div> 

        <div className=" bg-cyan-300 text-black  rounded-xl h-16 shadow-lg">
            <ul className="flex flex-rowdown justify-center font-medium space-x-12 h-16 mt-5 p-5" >
                <li>
                    <a href="#">Patient</a>
                </li>
                <li>
                    <a href="#">Doctor</a>
                </li>
                <li>
                    <a href="#">Admin</a>
                </li>
            </ul>
        </div>

    </nav>

    <form className=" flex flex-col justify-center items-center bg-cyan-100 h-full pt-6">
        <div className="w-[360px] gap-4 p-2 m-4 flex flex-col rounded-lg border-2 bg-cyan-200 ">

            {/* <div>
                <img src='medisoft2.png' alt='error' />  <span>MediSoft</span>
                <h3>Create Doctor Account </h3>
            </div>
            <div>
                Already have an Account? <span>Sign In</span>
            </div>             */}

            {/* <div className='bg-sky-400 '>
                <ul className='flex flex-rowdown space-x-5' >
                    <li>Patient</li>
                    <li>Doctor</li>
                    <li>Admin</li>
                </ul>
            </div> */}

            <div className="pl-14 pr-14 pt-2">
                <label for="name" className="text-sky-700 block font-medium"> Name </label> 
                <input type='text' id="name" className="p-3 mt-2 w-56 rounded-lg" placeholder='Dr. Dede' required></input>
            </div>
            <div className="pl-14 pr-14 pt-2">
                <label for="phone" className="text-sky-700 block font-medium"> Phone </label> 
                <input type='number' id="phone_number" className="p-3 mt-2 w-56 rounded-lg" placeholder='7490909090' required></input>
            </div>
            <div className="pl-14 pr-14 pt-2">
                <label for="registration" className="text-sky-700 block font-medium"> Registration # </label> 
                <input type='text' id="rgt" className="p-3 mt-2 w-56 rounded-lg" placeholder='GEG123ABC123' required></input>
            </div>
            <div className="pl-14 pr-14 pt-2">
                <label for="qualification" className="text-sky-700 block font-medium"> Qualification </label> 
                <input type='text' id="degree"className="p-3 mt-2 w-56 rounded-lg" placeholder='MBBS, MS' required></input>
            </div>
            <div className="pl-14 pr-14 pt-2">
                <label for="gender" className="text-sky-700 block font-medium"> Gender </label> 
                <select className="p-3 mt-2 w-56 rounded-lg" name="gender" > 
                    <option value="male"> Male </option>  
                    <option value="female"> Female </option> 
                    <option value="other"> Other </option>
                </select>
            </div>
            <div className="pl-14 pr-14 pt-2">
                <label for="primary_clinic_address" className="text-sky-700 block font-medium">Primary Clinic Address</label>
                <input type='textarea' className="p-3 mt-2 w-56 rounded-lg" placeholder='123 Rd, Hinjewadi Pune' required></input>
            </div>
            <div className="pl-14 pr-14 pt-2">
                <label for="email" className="text-sky-700 block font-medium"> Email Address </label>
                <input type="email" className="p-3 mt-2 w-56 rounded-lg" id="email" placeholder='john.doe@gmail.com' required />
            </div>
            <div className="pl-14 pr-14 pt-2">
                <label for="password" className="text-sky-700 block font-medium"> Password </label>
                <input type="password" className="p-3 mt-2 w-56 rounded-lg" id="password" placeholder='********' required />
            </div>
            <div className="pl-14 pr-14 pt-2">
                <label for="confirm_password" className="text-sky-700 block font-medium"> Confirm Password </label>
                <input type="password" className="p-3 mt-2 w-56 rounded-lg" id="confirm_password" placeholder='********' required />
            </div>

            <button type="submit" className="text-white bg-cyan-400 text-center rounded-lg pt-1 pb-1 mb-4 mt-2 hover:bg-cyan-500"> Submit </button>

        </div>

    </form>



    </>
  )
}

export default RegistrationForm
