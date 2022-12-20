import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'

function FormikComponent() {

    const formik = useFormik({

        initialValues:{
            name:'',
            email:'',
            dob:'',
            mobile:'',
            address:'',
            city:'',
            state:'',
            zipcode:''

        },
        validationSchema: yup.object({
            name:yup.string()
            .max(15,"character should be less than 15")
            .min(2,"charcter shouls be greater than 2")
            .required('required'),

            email:yup.string().email('Enter a valid email').required('required'),

            mobile:yup.string().matches(/^\d{10}$/,"Enter a valid mobile number").required('required'),

            address:yup.string()

        }),
        onSubmit: values => {
            console.log(values)
        }
    })

  return <>
  <form onSubmit={formik.handleSubmit}>

    <div className="form-group">
       <label htmlFor="name" className="form-label"> Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
         className="form-control"
         
         />

         {formik.touched.name && formik.errors.name?<div style={{color:"red"}}>{formik.errors.name}</div>:null}

    </div>

    <div className="form-group">
       <label htmlFor="email" className="form-label"> Email</label>
       <input
         id="email"
         name="email"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}

         value={formik.values.email}
         className="form-control"
         
         />
      {formik.touched.email && formik.errors.email?<div style={{color:"red"}}>{formik.errors.email}</div>:null}


    </div>

    <div className="form-group">
       <label htmlFor="dob" className="form-label"> DOB</label>
       <input
         id="dob"
         name="dob"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}

         value={formik.values.dob}
         className="form-control"
         
         />

        {formik.touched.dob && formik.errors.dob?<div style={{color:"red"}}>{formik.errors.dob}</div>:null}


    </div>

    <div className="form-group">
       <label htmlFor="mobile" className="form-label"> Mobile</label>
       <input
         id="mobile"
         name="mobile"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}

         value={formik.values.mobile}
         className="form-control"
         
         />

        {formik.touched.mobile && formik.errors.mobile?<div style={{color:"red"}}>{formik.errors.mobile}</div>:null}
  

    </div>

    <div className="form-group">
       <label htmlFor="address" className="form-label"> Address</label>
       <input
         id="address"
         name="address"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.address}
         className="form-control"
         
         />
         

    </div>
{/* 
    <div className="form-group">
       <label htmlFor="city" className="form-label"> City</label>
       <input
         id="city"
         name="city"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.city}
         className="form-control"
         
         
         />

    </div>

    <div className="form-group">
       <label htmlFor="state" className="form-label"> State</label>
       <input
         id="state"
         name="state"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.state}
         className="form-control"
        
        />

    </div>

    <div className="form-group">
       <label htmlFor="zipcode" className="form-label"> ZipCode</label>
       <input
         id="zipcode"
         name="zipcode"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.zipcode}
         className="form-control"
        
        />

    </div> */}


    
    
    <div className='form-group'>
    <button type="submit" className='btn btn-primary'>Submit</button>
    </div>


  </form>

  </>
}

export default FormikComponent