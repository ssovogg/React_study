import React, { useState } from "react";
import classes from "./Maker.module.css";
import MakerAddForm from "./MakerAddForm/MakerAddForm";
import MakerForm from "./MakerForm/MakerForm";

const Maker = ({ infos, onAdd }) => {
  return (
    <section className={classes.maker}>
      <h1>Maker</h1>
      <section className={classes.makers}>
        <ul>
          {infos.map(info => (
            <MakerForm key={info.id} info={info} />
          ))}
          <MakerAddForm onAdd={onAdd}/>
        </ul>
      </section>
    </section>
  );
};

export default Maker;
