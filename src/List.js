import React, {useState} from 'react';

const List = ({people}) => {

  return (
    <>
      {people.map((persons) => {
      const {id, name, image, age } = persons;
      return <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
        {/* <button onClick={removePeople} >Delete</button> */}
      </article>
    })}
    </>
  );
};

export default List;
