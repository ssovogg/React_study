import React, { useState } from "react";
import classes from "./Maker.module.css";
import MakerAddForm from "./MakerAddForm/MakerAddForm";
import MakerForm from "./MakerForm/MakerForm";

const Maker = ({ infos, createOrUpdateCard, updateCard, deleteCard }) => {
  return (
    <section className={classes.maker}>
      <h1>Maker</h1>
      <section className={classes.makers}>
        <ul>
          {Object.keys(infos).map((key) => (
            <MakerForm
              key={key}
              info={infos[key]}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />
          ))}
          <MakerAddForm onAdd={createOrUpdateCard} />
        </ul>
      </section>
    </section>
  );
};

export default Maker;
