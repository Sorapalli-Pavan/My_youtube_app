import React from 'react'
import { store } from '../App'
import { useContext } from 'react'
export default function Context() {
    const [data,setData] = useContext(store)
    let sno=1
  return (
    <>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>SNo</td>
                    <td>Name</td>
                    <td>Rollno</td>
                    <td>Branch</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((element, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{sno++}</td>
                                    <td>{element.Name}</td>
                                    <td>{element.Roll}</td>
                                    <td>{element.Branch}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}
