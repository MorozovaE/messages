import { messageData } from "./data";
import { IMessage } from "./interfaces";

export function extractDate(sendTime: string): string {
  let isoDate = sendTime;
  let d = new Date(isoDate);

  const day = d.getDate();
  const month = d.toLocaleString("en-US", { month: "long" });
  const year = d.getFullYear();

  return `${day} ${month} ${year}`;
}

export function groupData(data: IMessage[]) {
  const groupedMsgs: Record<string, IMessage[]> = {};

  for (let msg of data) {
    const date = extractDate(msg.sendTime);

    if (!Object.keys(groupedMsgs).includes(date)) {
      groupedMsgs[date] = [];
    }
    groupedMsgs[date].push(msg);
  }
  return groupedMsgs;
}

export function getTime(date: string) {
  const dateTime = new Date(date);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  return `${hours}:${minutes}`;
}
