import React,{useState,useEffect} from 'react'
import './newUser.css' ;
import Datas from './Datas'
import Department_Data from './Department_Data'
const NewUser = () => {
  const [University, setUniversity] = useState([])
  const [Colleges, setColleges] = useState([])
  const [SelectUniversity, setSelectUniversity] = useState("")
  const [SelectDepartment, setSelectDepartment] = useState("")
  useEffect(() => {
    Get_All_University()
  }, [])
  const Get_All_University=(e)=>{
    setUniversity(Datas)
  }
  
  const OnchangeUniversity=(e)=>{
    setSelectUniversity(e.target.value)
    setColleges(Department_Data)
  }

  const Colleges_University=University.map((el,index)=>{
    let m;
      if (SelectUniversity==="Sallahadin") {
         m=el.Sallahadin.map(el=>{
            return <option key={index}>{el}</option> 
          })}
        if (SelectUniversity==="Knowledge") {
            m=el.Knowledge.map(el=>{
               return <option key={index}>{el}</option> 
             })
            }
            if (SelectUniversity==="Cihan") {
                m=el.Cihan.map(el=>{
                   return <option key={index}>{el}</option> 
                 })
                }
             if (SelectUniversity==="Tishk") {
                    m=el.Tishk.map(el=>{
                       return <option key={index}>{el}</option> 
                     })
                    }
      return m
  })

  const Department_Colleges=Colleges.map((el,index)=>{
    let m;
      if (SelectDepartment==="Engineering") {
         m=el.Engineering.map(el=>{
            return <option key={index}>{el}</option> 
          })}
        if (SelectDepartment==="Science") {
            m=el.Science.map(el=>{
               return <option key={index}>{el}</option> 
             })
            }
            if (SelectDepartment==="Education") {
                m=el.Education.map(el=>{
                   return <option key={index}>{el}</option> 
                 })
                }
             if (SelectDepartment==="Agriculture") {
                    m=el.Agriculture.map(el=>{
                       return <option key={index}>{el}</option> 
                     })
                    }
                    if (SelectDepartment==="Languages") {
                      m=el.Languages.map(el=>{
                         return <option key={index}>{el}</option> 
                       })
                      }
                      if (SelectDepartment==="Pharmacy") {
                        m=el.Pharmacy.map(el=>{
                           return <option key={index}>{el}</option> 
                         })
                        }
                        if (SelectDepartment==="Law") {
                          m=el.Law.map(el=>{
                             return <option key={index}>{el}</option> 
                           })
                          }
                          if (SelectDepartment==="Basic_Education") {
                            m=el.Basic_Education.map(el=>{
                               return <option key={index}>{el}</option> 
                             })
                            }
      return m
  })
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Problem</h1>
      <form  className="newUserForm">
        <div className="newUserItem">
          <label>Title</label>
          <input type="text" style={{padding:"20px",borderRadius:"3px",border:"1px solid #00008b"}} placeholder="title" />
        </div>
        <div className="newUserItem">
          <label>University</label>
          <select style={{borderRadius:"5px",border:"1px solid #00008b"}} className="newUserSelect" onChange={OnchangeUniversity} name="SelectUniversity" value={SelectUniversity} id="active">
          <option value="">choose</option>
            <option value="Sallahadin">Sallahadin University</option>
            <option value="Knowledge">Knowledge University</option>
            <option value="Cihan">Cihan University</option>
            <option value="Tishk">Tishk International University</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>College</label>
          <select style={{borderRadius:"5px",border:"1px solid #00008b"}} className="newUserSelect" name="active" onChange={(e)=>setSelectDepartment(e.target.value)} value={SelectDepartment} name="SelectDepartment" id="active">
          {Colleges_University}
          </select>
        </div>
        <div className="newUserItem">
          <label>Department</label>
          <select style={{borderRadius:"5px",border:"1px solid #00008b"}} className="newUserSelect" id="active">
         {Department_Colleges}
          </select>
        </div>
        <div className="newUserItem">
          <label>Problem</label>
          <textarea style={{padding:"10px",borderRadius:"10px",border:"1px solid #00008b"}} col="5" rows="5"></textarea>
        </div>
        <div className="newUserItem">
          <br/><br/><br/><br/><br/><br/>
        <button className="newUserButton">Create</button>
        </div>
      
      </form>
    </div>
  )
}

export default NewUser

