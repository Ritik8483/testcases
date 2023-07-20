import React, { useEffect, useState } from "react";
import { SkillProps } from "./skill.types";

const Skill = (props: SkillProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{            //to check whether element is present in the dom
        setIsLoggedIn(true)
    },500)
  },[]);

  return (
    <>
      <ul>
        {skills.map((skill: any) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

    </>
  );
};

export default Skill;
