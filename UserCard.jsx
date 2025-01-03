import PropTypes from "prop-types";
const userData= [
    {
        name: "SURIYA",
        city: "Singapore",
        description:"Front-end developer",
        skills:["HTML","Css","react","javascript","node"],
        online: false,
        profile: "images/1.jpg",
    },
    {
        
        name: "VIJAY",
        city: "NEW YORK",
        description:"Full Stack web developer",
        skills:["HTML","Css","react","javascript","Angular"],
        online: false,
        profile: "images/2.jpg",

    },
    {
        
        name: "AJITH KUMAR",
        city: "China",
        description:" Senior Software developer",
        skills:["MYSQL","Python","react","C++","C"],
        online: true,
        profile: "images/3.jpg",

    },
];


function User(props) {
    return <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>
            {props.online ? "ONLINE" :"OFFLINE"}
            </span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="Skills">
            <h6>Skills</h6>
            <ul> {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}</ul>
        </div>
    </div>
}
export const UserCard = () => {
  return <>
  {
    userData.map((user,index)=>(
        <User key={index} 
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}
        
        
        
        />
    ))
  }
  </>;
};

{
/*<User name="SURIYA"  city="Singapore" description="Front-end developer" skills={["HTML","Css","react","javascript","node"]} online={true} profile="images/2.jpg"/>*/
}

User.propTypes ={
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
};