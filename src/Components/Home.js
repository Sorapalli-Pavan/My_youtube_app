import React from "react";
import { useContext } from "react";
import { store } from "../App";
function Home() {
    let sno = 1;
    const [data, setData] = useContext(store)
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
export default Home;