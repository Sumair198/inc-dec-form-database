import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from './firebase'
import { useState } from 'react';
// import {add,sub,mul,div} from './calc'

// function App()
// {
//   return <div>
//   <ul>
//   <li>Sum Is {add(2,2)}</li>
//   <li>Sub Is {sub(4,2)}</li>
//   <li>Mul Is {mul(3,3)}</li>
//   <li>div Is {div(4,6)}</li>
//   </ul>
//   </div>
// }


// const [count,setCount] = react.useState(0)
// useEffect(()=>
// {
//   alert('Incr/decr-App')
// })
//   function add() { 
//     setCount(count + 1)
//   }
//   function sub()
//   {
//     setCount(count - 1)
//   }
//   return <div className='counter'>
//     <h1>Temperature {count}<sup>o</sup>c</h1>
//     <button onClick={add}>Add</button>
//     <button onClick={sub}>Sub</button>

//   </div>

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  contact: yup
    .number('Enter your number')
    // .email('Enter a valid email')
    .required('contact is required'),
  Description: yup
    .string('Enter your description')
    .required('description is required'),
});

//add data
async function submithandle(values) {
  console.log(values)

  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: values.name,
      email: values.email,
      password: values.password,
      contact: values.contact,
      Description: values.Description
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}






function App() {
  const [data, showdata] = useState([])


  //read data
  async function getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    let arr = []
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      arr.push(doc.data())
    });
    showdata(data)

  }
  getData()

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
      contact: '',
      Description: '',
    },
    onSubmit: submithandle
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h3>PERSON INFORMATION</h3>

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField name='name' type='text' value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name} label="Name" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField name='email' type='email' value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              label="Email" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField name='password' type='password' value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              label="Password" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField name='contact' type='number' value={formik.values.contact}
              onChange={formik.handleChange}
              error={formik.touched.contact && Boolean(formik.errors.contact)}
              helperText={formik.touched.contact && formik.errors.contact} label="Contact" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField name='Description' type='text' value={formik.values.Description}
              onChange={formik.handleChange}
              error={formik.touched.Description && Boolean(formik.errors.Description)}
              helperText={formik.touched.Description && formik.errors.Description} label="Description" variant="standard" />
          </Box>
        </Box>
        <Button variant="contained" type='submit'>Submit</Button>
      </form>


      <div>
        {
          data.map((users) => {
            return (
              <>
                <div>name:{users.name}</div>
                <div></div>
              </>
            )
          })
        }

      </div>
    </div>
  )
}










export default App