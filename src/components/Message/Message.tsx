import React from "react";
import { IMessage } from "../../interfaces";
import style from "./message.module.scss";
import { getTime } from "../../utils";

export const Message = ({ msg }: { msg: IMessage }) => {
  return (
    <div className={style.msgContainer}>
      <span className={style.name}>{msg.name}</span>
      <span className={style.time}>{getTime(msg.sendTime)}</span>
      <p className={style.msgText}>{msg.text}</p>
    </div>
  );
};
