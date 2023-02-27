import React from "react";
const Employee =(props)=>{
let data=props.empDetail
console.log(data);
return(
    <div>
        <table>
            <tr>
                <th>emp id</th>
                <th>emp name</th>
                <th>emp des</th>
                <th>emp gender</th>
            </tr>
           {
            data.map((x)=>{
                return (
                    <tr>
                        <td>{x.emp_id}</td>
                        <td>{x.emp_name}</td>
                        <td>{x.emp_des}</td>
                        <td>{x.emp_gender}</td>
                        </tr>
                )
            })
           }
        </table>
    </div>

)

}
export default Employee