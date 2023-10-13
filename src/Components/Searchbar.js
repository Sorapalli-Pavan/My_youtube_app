// import React from 'react'
// function Searchbar(props) {
//     let sno=1
//     return(
//         <>
//         <div className='col-md-8 bg-dark'>
//                     <div class="input-group rounded">
//                         <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
//                         <span class="input-group-text border-0" id="search-addon">
//                             <i class="fas fa-search"></i>
//                         </span>
//                     </div>
//                     <br></br>
//         <table className='table table-bordered'>
//                 <thead>
//                     <tr>
//                         <td>SNo</td>
//                         <td>Name</td>
//                         <td>Rollno</td>
//                         <td>Branch</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         props.data.map((element,index)=>{
//                             return(
//                                 <>
//                                     <tr>
//                                         <td>{sno++}</td>
//                                         <td>{element.Name}</td>
//                                         <td>{element.Roll}</td>
//                                         <td>{element.Branch }</td>
//                                     </tr>
//                                 </>
//                             )
//                         })
//                     }
//                     </tbody>
//                 </table>
//                 </div>
//         </>
//     )
// }

//export default Searchbar;



import React, { useEffect } from 'react'
import { useState } from 'react';

function Searchbar(props) {
    // let count = 1;
    // const changeCount = ()=>{
    //     count++;
    //     alert(count)
    // }
    let sno = 1;
    let [count, setCount] = useState(1)
    useEffect(() => console.log("Hello World!"), [count])
    return (
        <>
            <div className='col-md-8 bg-warning'>

                
                <br></br>
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
                            props.data.map((element, index) => {
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
                <h1>TimesClicked</h1>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)} className='btn btn-danger' >Click</button>

            </div>
        </>
    )

}
export default Searchbar;